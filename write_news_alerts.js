function a0_0x824a(){const _0x2c2b73=['config','Duplicate\x20entry!','getClient','2388fFevNt','url','getFullYear','values','26240HAELRc','2XYqFqa','md5','USER_ENTERED','length','POST_RECENT_NEWS_URL','shortened','find','5978679syTrpm','POST_NEWS_PASSWORD','2500684gKkzxB','1845ZPjXvG','simplePostData','sheets','slice','Something\x20went\x20wrong\x20with\x20this\x20request:\x20Called\x20by:\x20\x27writeFullDataToApi\x27,\x20error:\x20','auth','log','shortUrl','push','trim','padStart','env','7913464Llxfre','3LxjbyB','content','Something\x20went\x20wrong\x20with\x20this\x20request:\x20Called\x20by:\x20\x27writeDataToSheet\x27,\x20error:\x20','spreadsheets','SHORT_URL_PASSWORD','credentials.json','max','toLowerCase','updateNewsOnApiServer','googleapis','1507685owlDKg','news_','new\x20short\x20url\x20generated','error','POST_ALL_NEWS_URL','append','Something\x20went\x20wrong\x20with\x20this\x20request:\x20Called\x20by:\x20\x27readDataFromSheet\x27,\x20error:\x20','data','latestAlerts','./services/cheerio/index','1031454yWDfvD','https://www.googleapis.com/auth/spreadsheets','GoogleAuth'];a0_0x824a=function(){return _0x2c2b73;};return a0_0x824a();}const a0_0x59b5a4=a0_0x376e;(function(_0x1655cd,_0x1e94a3){const _0x2776a4=a0_0x376e,_0x3a582f=_0x1655cd();while(!![]){try{const _0x1bcc80=-parseInt(_0x2776a4(0x16c))/0x1*(parseInt(_0x2776a4(0x161))/0x2)+parseInt(_0x2776a4(0x183))/0x3*(parseInt(_0x2776a4(0x175))/0x4)+-parseInt(_0x2776a4(0x18d))/0x5+-parseInt(_0x2776a4(0x167))/0x6+parseInt(_0x2776a4(0x173))/0x7+parseInt(_0x2776a4(0x182))/0x8+parseInt(_0x2776a4(0x176))/0x9*(-parseInt(_0x2776a4(0x16b))/0xa);if(_0x1bcc80===_0x1e94a3)break;else _0x3a582f['push'](_0x3a582f['shift']());}catch(_0x241bab){_0x3a582f['push'](_0x3a582f['shift']());}}}(a0_0x824a,0x91c96));const {google}=require(a0_0x59b5a4(0x18c)),md5=require(a0_0x59b5a4(0x16d)),cheerioFunctions=require(a0_0x59b5a4(0x160)),axiosFunctions=require('./services/axios/index');require('dotenv')[a0_0x59b5a4(0x164)]();function a0_0x376e(_0x6a1202,_0x1e7846){const _0x824ae4=a0_0x824a();return a0_0x376e=function(_0x376eef,_0x3ec170){_0x376eef=_0x376eef-0x15c;let _0x312eb7=_0x824ae4[_0x376eef];return _0x312eb7;},a0_0x376e(_0x6a1202,_0x1e7846);}const spreadsheetId=process[a0_0x59b5a4(0x181)]['SPREADSHEET_ID'],writeFullDataToApi=async()=>{const _0x2dc602=a0_0x59b5a4;try{const _0x2f01a8=process[_0x2dc602(0x181)][_0x2dc602(0x191)],_0x5091bc=process[_0x2dc602(0x181)][_0x2dc602(0x174)];let _0x39ccaf=await readDataFromSheet();_0x39ccaf=_0x39ccaf[_0x2dc602(0x179)](Math[_0x2dc602(0x189)](_0x39ccaf[_0x2dc602(0x16f)]-0x64,0x0));const _0x3870d6=[];for(const _0x15cb4e of _0x39ccaf){const _0x22a132={'accessId':_0x15cb4e[0x0],'content':_0x15cb4e[0x3],'url':_0x15cb4e[0x5]??null};_0x3870d6[_0x2dc602(0x17e)](_0x22a132);}await axiosFunctions[_0x2dc602(0x18b)](_0x2f01a8,_0x5091bc,_0x3870d6);}catch(_0x2ca783){console[_0x2dc602(0x190)](_0x2dc602(0x17a)+_0x2ca783);}},writeRecentDataToApi=async _0x43bfaf=>{const _0x1146ec=a0_0x59b5a4;try{const _0x193d1e=process[_0x1146ec(0x181)][_0x1146ec(0x170)],_0x14fd21=process[_0x1146ec(0x181)][_0x1146ec(0x174)];await axiosFunctions[_0x1146ec(0x18b)](_0x193d1e,_0x14fd21,_0x43bfaf);}catch(_0x474860){console[_0x1146ec(0x190)]('Something\x20went\x20wrong\x20with\x20this\x20request:\x20Called\x20by:\x20\x27writeRecentDataToApi\x27,\x20error:\x20'+_0x474860);}},readDataFromSheet=async()=>{const _0xda0e7a=a0_0x59b5a4;try{const _0xa7b66f=new google[(_0xda0e7a(0x17b))][(_0xda0e7a(0x163))]({'keyFile':'credentials.json','scopes':_0xda0e7a(0x162)}),_0x4cb4ce=await _0xa7b66f[_0xda0e7a(0x166)](),_0x4f0e57=google['sheets']({'version':'v4','auth':_0x4cb4ce}),_0x15329a=await _0x4f0e57[_0xda0e7a(0x186)]['values']['get']({'auth':_0xa7b66f,'spreadsheetId':spreadsheetId,'range':'Sheet1!A2:F'});return _0x15329a[_0xda0e7a(0x15e)][_0xda0e7a(0x16a)];}catch(_0x1d56f6){console[_0xda0e7a(0x190)](_0xda0e7a(0x15d)+_0x1d56f6);}},writeDataToSheet=async()=>{const _0x1d2475=a0_0x59b5a4;try{const _0x1aa41e=await cheerioFunctions[_0x1d2475(0x15f)]();let _0x396e85=![];const _0x1ce90d=new google[(_0x1d2475(0x17b))][(_0x1d2475(0x163))]({'keyFile':_0x1d2475(0x188),'scopes':_0x1d2475(0x162)}),_0x3bf0a7=await _0x1ce90d[_0x1d2475(0x166)](),_0x24a7ae=google[_0x1d2475(0x178)]({'version':'v4','auth':_0x3bf0a7});for(const _0x268d84 of _0x1aa41e){_0x268d84[_0x1d2475(0x184)]=_0x268d84[_0x1d2475(0x184)][_0x1d2475(0x17f)](),_0x268d84[_0x1d2475(0x168)]=_0x268d84[_0x1d2475(0x168)]?_0x268d84[_0x1d2475(0x168)][_0x1d2475(0x18a)]():null,_0x268d84[_0x1d2475(0x17d)]=null;const _0x21b7f3=_0x268d84['url']?md5(''+_0x268d84[_0x1d2475(0x184)]+_0x268d84[_0x1d2475(0x168)]):md5(''+_0x268d84['content']),_0x7f6fc7=await readDataFromSheet();if(_0x268d84[_0x1d2475(0x168)]){const _0x46fdf9=_0x7f6fc7?.[_0x1d2475(0x172)](_0xf08e0b=>_0xf08e0b[0x4]===_0x268d84[_0x1d2475(0x168)]);if(undefined==_0x46fdf9){const _0x34a7a8=process['env']['SHORT_URL_GENERATOR_URL'],_0x2e9635={'password':process[_0x1d2475(0x181)][_0x1d2475(0x187)],'url':_0x268d84[_0x1d2475(0x168)]},_0x14b339=await axiosFunctions[_0x1d2475(0x177)](_0x34a7a8,_0x2e9635);_0x268d84[_0x1d2475(0x17d)]=_0x14b339[_0x1d2475(0x171)],console['log'](_0x1d2475(0x18f),_0x14b339[_0x1d2475(0x171)]);}else _0x268d84['shortUrl']=_0x46fdf9[0x5];}const _0x154c3a=_0x7f6fc7?.[_0x1d2475(0x172)](_0x34d3f3=>_0x34d3f3[0x2]===_0x21b7f3);if(undefined==_0x154c3a){const _0x56220f=_0x1d2475(0x18e)+((_0x7f6fc7?.[_0x1d2475(0x16f)]??0x0)+0x1);_0x396e85=!![];let _0x131bda=new Date();const _0x48be4d=String(_0x131bda['getDate']())[_0x1d2475(0x180)](0x2,'0'),_0x1690e3=String(_0x131bda['getMonth']()+0x1)[_0x1d2475(0x180)](0x2,'0'),_0x5a3798=_0x131bda[_0x1d2475(0x169)]();_0x131bda=_0x48be4d+'/'+_0x1690e3+'/'+_0x5a3798;const _0xab3409=[_0x56220f,_0x131bda,_0x21b7f3,_0x268d84[_0x1d2475(0x184)],_0x268d84['url'],_0x268d84[_0x1d2475(0x17d)]];await _0x24a7ae[_0x1d2475(0x186)]['values'][_0x1d2475(0x15c)]({'auth':_0x1ce90d,'spreadsheetId':spreadsheetId,'range':'Sheet1!A:F','valueInputOption':_0x1d2475(0x16e),'resource':{'values':[_0xab3409]}});}else console[_0x1d2475(0x17c)](_0x1d2475(0x165));}if(!![]===_0x396e85){writeFullDataToApi();for(const _0x557a6e of _0x1aa41e){_0x557a6e[_0x1d2475(0x168)]=_0x557a6e[_0x1d2475(0x17d)],delete _0x557a6e[_0x1d2475(0x17d)];}writeRecentDataToApi(_0x1aa41e);}}catch(_0x1946b5){console['error'](_0x1d2475(0x185)+_0x1946b5);}};writeDataToSheet();