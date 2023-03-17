const axios = require('axios');
const headers = {
  authority: 'www.rgpv.ac.in',
  'sec-ch-ua':
    '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'cache-control': 'no-cache',
  'x-requested-with': 'XMLHttpRequest',
  'x-microsoftajax': 'Delta=true',
  'sec-ch-ua-platform': '"Windows"',
  accept: '*/*',
  origin: 'https://www.rgpv.ac.in',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  referer: 'https://www.rgpv.ac.in/Uni/frm_ViewTT.aspx?id=$%',
  'accept-language': 'en-GB,en;q=0.9',
  cookie: 'ASP.NET_SessionId=hznbm3vovcoagebriewkhpw0',
  dnt: '1',
  'sec-gpc': '1',
};

/**
 *
 * @param {String} sourceURL - The URL from which we have to fetch the data
 * @returns {String} - The data it received from source page response
 */
exports.simpleGetData = async (sourceURL) => {
  try {
    return (await axios.get(sourceURL)).data;
  } catch (error) {
    console.error(
      `Something went wrong with this request: Called by: 'simpleGetData', error: ${error}`,
    );
  }
};

/**
 *
 * @param {String} fetchDataFromUrl  - The URL where we want to send the data
 * @param {Object} postData - Post body data
 * @param {Object} customHeaders - Custom header for the post request
 * @returns
 */
exports.simplePostData = async (fetchDataFromUrl, postData, customHeaders = headers) => {
  try {
    return (
      await axios.post(fetchDataFromUrl, postData, {
        headers: customHeaders,
      })
    ).data;
  } catch (error) {
    console.error(
      `Something went wrong with this request: Called by: 'simplePostData', error: ${error}`,
    );
  }
};

/**
 *
 * @param {String} urlToUpdateNews - API server end point to update news Data
 * @param {String} password - Secure password to authenticate
 * @param {Array} newsData - news data to be uploaded on API server DB
 */
exports.updateNewsOnApiServer = async (urlToUpdateNews, password, newsData) => {
  try {
    await axios.put(urlToUpdateNews, {
      password: password,
      newsData: newsData,
    });
  } catch (error) {
    console.error(
      `Something went wrong with this request: Called by: 'updateNewsOnApiServer', error: `,
    );
  }
};

/**
 *
 * @param {Object} bodyData - This object will contain data that has to be sent with HTTP request
 * @returns {String} This function will return Timetable PDF url
 */
exports.fetchTimeTableFileUrl = async (bodyData) => {
  try {
    const __VIEWSTATE = encodeURIComponent(bodyData.state);
    const __EVENTTARGET = encodeURIComponent(bodyData.triggerBy);
    const drpProgram = encodeURIComponent(bodyData.program);
    const fetchFileFromUrl =
      'https://www.rgpv.ac.in/Uni/frm_ViewTT.aspx?id=%24%25';
    const postData = `ctl00%24ScriptManager1=ctl00%24ContentPlaceHolder1%24UpdatePanel1%7C${__EVENTTARGET}&ctl00%24ContentPlaceHolder1%24drpProgram=${drpProgram}&__EVENTTARGET=${__EVENTTARGET}&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=${__VIEWSTATE}&__VIEWSTATEGENERATOR=E4409011&__ASYNCPOST=true&`;

    let data = await axios.post(fetchFileFromUrl, postData, {
      headers: headers,
    });
    data = await data.data;
    data = await data.split('ScriptContentWithTags')[1];
    data = await data.split('\\"')[1];
    data = await data.replace(
      '../UC/frm_download_file.aspx?Filepath=',
      'https://www.rgpv.ac.in/',
    );
    return data;
  } catch (error) {
    console.error(
      `Something went wrong with this request: Called by: 'fetchTimeTableFileUrl', error: ${error}`,
    );
  }
};

/**
 *
 * @param {Object} bodyData - This object will contain data that has to be sent with HTTP request
 * @returns {String} This function will return Scheme or Syllabus PDF url
 */
exports.fetchSchemeOrSyllabusFileUrl = async (bodyData) => {
  try {
    const __VIEWSTATE = encodeURIComponent(bodyData.state);
    const __EVENTTARGET = encodeURIComponent(bodyData.triggerBy);
    const drpProgram = bodyData.program;
    const drpUploadType = bodyData.schemeORsyllabus; // 1 for scheme, 2 for syllabus
    const drpSearchGrading = bodyData.pattern;
    const fetchFileFromUrl = 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx';
    const postData = `ctl00%24ScriptManager1=ctl00%24ContentPlaceHolder1%24UpdatePanel1%7C${__EVENTTARGET}&ctl00%24ContentPlaceHolder1%24drpUploadType=${drpUploadType}&ctl00%24ContentPlaceHolder1%24drpProgram=${drpProgram}&ctl00%24ContentPlaceHolder1%24drpSearchGrading=${drpSearchGrading}&__EVENTTARGET=${__EVENTTARGET}&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=${__VIEWSTATE}&__VIEWSTATEGENERATOR=87DDE0DB&__ASYNCPOST=true&`;

    let data = (
      await axios.post(fetchFileFromUrl, postData, {
        headers: headers,
      })
    ).data;
    data = await data.split('ScriptContentWithTags')[1];
    data = await data.split('\\"')[1];
    data = await data.replace(
      '../UC/frm_download_file.aspx?Filepath=',
      'https://www.rgpv.ac.in/',
    );
    return data;
  } catch (error) {
    console.error(
      `Something went wrong with this request: Called by: 'fetchSchemeOrSyllabusFileUrl', error: ${error}`,
    );
  }
};