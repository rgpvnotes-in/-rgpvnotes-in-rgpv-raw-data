const puppeteer = require('puppeteer');
const path = require('path');
require('dotenv').config();

const { postImageUrl } = require('../imageGenerator/index');
const axiosFunctions = require('../axios/index');

// const strings
const zohoLoginUrl = 'https://accounts.zoho.in/signin?servicename=ZohoSocial';
const zohoLogout = 'https://social.zoho.in/Logout.do';
const zohoHomePage = 'https://social.zoho.in/Home.do';
const zohoUsername = process.env.ZOHO_USERNAME; // your zoho username
const zohoPassword = process.env.ZOHO_PASSWORD; // your zoho password
const socialMediaPostFileName = '_social_post_image.png';
const uploadFilePath = path.relative(process.cwd(), __dirname + socialMediaPostFileName);

/*
  Use this function to wait for a specific amount of milliseconds
  @params milliseconds {Integer}
*/
const waitForTimeout = (milliseconds = 1000) =>
  new Promise((resolveInner) => setTimeout(resolveInner, milliseconds));

exports.shareOnSocialMedia = async (socialMediaPostCaption = '') => {
  try {

    if(!socialMediaPostCaption){
        console.log('received empty socialMediaPostCaption');
        return false;
    }

    const textToPublishWithPost = socialMediaPostCaption;
    const socialMediaPostImageUrl = await postImageUrl(textToPublishWithPost);
    const downloadFilePath = path.resolve(__dirname, socialMediaPostFileName);
    const downloadFileWriter = Fs.createWriteStream(downloadFilePath);


    const response = await axiosFunctions.simpleGetData(
      socialMediaPostImageUrl,
      'stream',
    );

    response.data.pipe(downloadFileWriter);

    await new Promise((resolve, reject) => {
      downloadFileWriter.on('file download finished ', resolve);
      downloadFileWriter.on('file download error ', reject);
    });

    const browser = await puppeteer.launch({
      // for debugging
      // headless: false,
      // slowMo: 250,
    });
    const page = await browser.newPage();
    await page.goto(zohoLoginUrl, {
      waitUntil: 'networkidle0',
      timeout: 0,
    });
    await page.waitForSelector('#nextbtn');

    // fill username in login form
    await page.type('input#login_id', zohoUsername, { delay: 50 });
    await page.click('button#nextbtn');

    // fill password in login form
    await page.waitForSelector('input#password');
    await page.type('input#password', zohoPassword), { delay: 50 };
    await page.click('button#nextbtn');

    // go to Home page to publish new post
    await page.goto(zohoHomePage, {
      waitUntil: 'networkidle0',
      timeout: 0,
    });

    await page.waitForSelector('#pconnect');
    await page.click(
      '#top_header_container div.newPostBtn > a.newPostBtn-primary',
    );
    await page.waitForSelector('div#status-dialog-textarea');
    await waitForTimeout(500); //you can remove this if you want
    await page.type('#status-dialog-textarea', textToPublishWithPost, {
      delay: 50,
    });
    await waitForTimeout(500); //you can remove this if you want

    // upload a file
    const inputFileUpload = await page.$('#publish_image_attach > div > input');
    await inputFileUpload.uploadFile(uploadFilePath);
    await inputFileUpload.evaluate((upload) =>
      upload.dispatchEvent(new Event('change', { bubbles: true })),
    );
    await waitForTimeout(500); //you can remove this if you want

    // click on publish button
    await page.evaluate(() => {
      document.querySelector('#publish_postnow').click();
    });

    await waitForTimeout(10000); // waiting for 10 in second, to make sure post is published on all platform

    // go to this URL to end session
    await page.goto(zohoLogout, {
      waitUntil: 'networkidle0',
      timeout: 0,
    });
  } catch (error) {
    console.error('something went wrong', error);
  }
};