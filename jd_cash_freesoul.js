/*
签到领现金，每日2毛～5毛
活动入口：京东APP搜索领现金进入
来自：freesoul
#签到领现金
无需指定定时，每天运行一次即可
 */
const $ = new Env('签到领现金-加密');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe61ec=["","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x72\x61\x6E\x64\x6F\x6D","\x77\x61\x69\x74","\x43\x41\x53\x48\x5F\x4E\x4F\x54\x49\x46\x59\x5F\x43\x4F\x4E\x54\x52\x4F\x4C","\x73\x69\x67\x6E\x4D\x6F\x6E\x65\x79","\x65\x78\x63\x68\x61\x6E\x67\x65\x42\x65\x61\x6E\x4E\x75\x6D","\x63\x61\x73\x68\x5F\x6D\x6F\x62\x5F\x73\x69\x67\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x61\x73\x68\x5F\x6D\x6F\x62\x5F\x73\x69\x67\x6E\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x61\x72\x73\x65","\x62\x69\x7A\x43\x6F\x64\x65","\x64\x61\x74\x61","\u7B7E\u5230","\x62\x69\x7A\x4D\x73\x67","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\x63\x61\x73\x68\x5F\x6D\x6F\x62\x5F\x68\x6F\x6D\x65","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x63\x6F\x64\x65","\x72\x65\x73\x75\x6C\x74","\x74\x61\x73\x6B\x49\x6E\x66\x6F\x73","\x74\x79\x70\x65","\x64\x6F\x54\x69\x6D\x65\x73","\x74\x69\x6D\x65\x73","\u53BB\u505A","\u4EFB\u52A1\x20","\x2F","\x73\x6B\x75\x49\x64","\x70\x61\x72\x61\x6D\x73","\x6A\x75\x6D\x70","\x73\x68\x6F\x70\x49\x64","\x70\x61\x74\x68","\x75\x72\x6C","\x63\x61\x73\x68\x5F\x68\x6F\x6D\x65\x50\x61\x67\x65","\u5F53\u524D\u73B0\u91D1\uFF1A","\x74\x6F\x74\x61\x6C\x4D\x6F\x6E\x65\x79","\u5143","\x5C\x6E","\x0A\x0A","\u3010\u4EAC\u4E1C\u8D26\u53F7","\uFF08","\uFF09\u7684","\u597D\u53CB\u4E92\u52A9\u7801\u3011","\x69\x6E\x76\x69\x74\x65\x64\x43\x6F\x64\x65","\x73\x68\x61\x72\x65\x44\x61\x74\x65","\x70\x6F\x73\x74","\x63\x61\x73\x68\x5F\x64\x6F\x54\x61\x73\x6B","\u4EFB\u52A1\u5B8C\u6210\u6210\u529F","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x73\x69\x67\x6E\x2F\x67\x65\x74\x53\x69\x67\x6E","\x66\x6E\x3D","\x26\x62\x6F\x64\x79\x3D","\x26\x74\x79\x70\x65\x3D","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x32\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x33\x2E\x30\x2E\x33\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31\x20\x45\x64\x67\x2F\x38\x37\x2E\x30\x2E\x34\x32\x38\x30\x2E\x38\x38","\x20\x67\x65\x74\x53\x69\x67\x6E\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x4A\x44\x34\x69\x50\x68\x6F\x6E\x65\x2F\x31\x36\x37\x37\x37\x34\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x69\x4F\x53\x20\x31\x34\x2E\x37\x2E\x31\x3B\x20\x53\x63\x61\x6C\x65\x2F\x33\x2E\x30\x30\x29","\x7A\x68\x2D\x48\x61\x6E\x73\x2D\x43\x4E\x3B\x71\x3D\x31","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x77\x78\x61\x70\x70\x2F\x70\x61\x67\x65\x73\x2F\x68\x64\x2D\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x6F\x6E\x2F\x69\x6E\x64\x65\x78\x2F\x69\x6E\x64\x65\x78","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x7A\x68\x2D\x63\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x72\x65\x74\x63\x6F\x64\x65","\x62\x61\x73\x65","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E","\x6F\x62\x6A\x65\x63\x74","\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxe61ec[0x0],message,allMessage=__Oxe61ec[0x0];const JD_API_HOST=__Oxe61ec[0x1];if($[__Oxe61ec[0x2]]()){Object[__Oxe61ec[0x5]](jdCookieNode)[__Oxe61ec[0x4]]((_0x898ax6)=>{cookiesArr[__Oxe61ec[0x3]](jdCookieNode[_0x898ax6])});if(process[__Oxe61ec[0x7]][__Oxe61ec[0x6]]&& process[__Oxe61ec[0x7]][__Oxe61ec[0x6]]=== __Oxe61ec[0x8]){console[__Oxe61ec[0x9]]= ()=>{}}}else {cookiesArr= [$[__Oxe61ec[0xc]](__Oxe61ec[0xb]),$[__Oxe61ec[0xc]](__Oxe61ec[0xd]),...jsonParse($[__Oxe61ec[0xc]](__Oxe61ec[0x10])|| __Oxe61ec[0x11])[__Oxe61ec[0xf]]((_0x898ax6)=>{return _0x898ax6[__Oxe61ec[0xe]]})][__Oxe61ec[0xa]]((_0x898ax6)=>{return !!_0x898ax6})};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxe61ec[0x1b]]($[__Oxe61ec[0x15]],__Oxe61ec[0x19],__Oxe61ec[0x1a],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxe61ec[0x1a]});return};for(let _0x898ax8=0;_0x898ax8< cookiesArr[__Oxe61ec[0x1c]];_0x898ax8++){if(cookiesArr[_0x898ax8]){cookie= cookiesArr[_0x898ax8];$[__Oxe61ec[0x1d]]= decodeURIComponent(cookie[__Oxe61ec[0x1e]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxe61ec[0x1e]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxe61ec[0x1f]]= _0x898ax8+ 1;$[__Oxe61ec[0x20]]= true;$[__Oxe61ec[0x21]]= __Oxe61ec[0x0];message= __Oxe61ec[0x0]; await TotalBean();console[__Oxe61ec[0x9]](`${__Oxe61ec[0x22]}${$[__Oxe61ec[0x1f]]}${__Oxe61ec[0x23]}${$[__Oxe61ec[0x21]]|| $[__Oxe61ec[0x1d]]}${__Oxe61ec[0x24]}`);if(!$[__Oxe61ec[0x20]]){$[__Oxe61ec[0x1b]]($[__Oxe61ec[0x15]],`${__Oxe61ec[0x25]}`,`${__Oxe61ec[0x26]}${$[__Oxe61ec[0x1f]]}${__Oxe61ec[0x27]}${$[__Oxe61ec[0x21]]|| $[__Oxe61ec[0x1d]]}${__Oxe61ec[0x28]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxe61ec[0x1a]});if($[__Oxe61ec[0x2]]()){ await notify[__Oxe61ec[0x2b]](`${__Oxe61ec[0x0]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x29]}${$[__Oxe61ec[0x1d]]}${__Oxe61ec[0x0]}`,`${__Oxe61ec[0x26]}${$[__Oxe61ec[0x1f]]}${__Oxe61ec[0x27]}${$[__Oxe61ec[0x1d]]}${__Oxe61ec[0x2a]}`)};continue}; await jdCash(); await $[__Oxe61ec[0x2d]](parseInt(Math[__Oxe61ec[0x2c]]()* 10000,10))}};if(allMessage){if($[__Oxe61ec[0x2]]()&& (process[__Oxe61ec[0x7]][__Oxe61ec[0x2e]]?process[__Oxe61ec[0x7]][__Oxe61ec[0x2e]]=== __Oxe61ec[0x8]:!!1)){ await notify[__Oxe61ec[0x2b]]($[__Oxe61ec[0x15]],allMessage)};$[__Oxe61ec[0x1b]]($[__Oxe61ec[0x15]],__Oxe61ec[0x0],allMessage)}})()[__Oxe61ec[0x18]]((_0x898ax7)=>{$[__Oxe61ec[0x9]](__Oxe61ec[0x0],`${__Oxe61ec[0x14]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x16]}${_0x898ax7}${__Oxe61ec[0x17]}`,__Oxe61ec[0x0])})[__Oxe61ec[0x13]](()=>{$[__Oxe61ec[0x12]]()});async function jdCash(){$[__Oxe61ec[0x2f]]= 0; await cash_homePage(); await $[__Oxe61ec[0x2d]](parseInt(Math[__Oxe61ec[0x2c]]()* 1000+ 1000,10));$[__Oxe61ec[0x30]]= 0; await cash_homePage(true); await $[__Oxe61ec[0x2d]](parseInt(Math[__Oxe61ec[0x2c]]()* 1000+ 1000,10))}function cash_mob_sign(){return  new Promise((_0x898axb)=>{$[__Oxe61ec[0x3a]](taskUrl(__Oxe61ec[0x31],{"\x62\x72\x65\x61\x6B\x52\x65\x77\x61\x72\x64":1}),(_0x898axc,_0x898axd,_0x898axe)=>{try{if(_0x898axc){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${JSON[__Oxe61ec[0x32]](_0x898axc)}${__Oxe61ec[0x0]}`);console[__Oxe61ec[0x9]](`${__Oxe61ec[0x33]}`)}else {if(safeGet(_0x898axe)){_0x898axe= JSON[__Oxe61ec[0x34]](_0x898axe);if(_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x35]]=== 0){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x37]}${_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x38]]}${__Oxe61ec[0x0]}`)}else {console[__Oxe61ec[0x9]](_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x38]])}}}}catch(e){$[__Oxe61ec[0x39]](e,_0x898axd)}finally{_0x898axb()}})})}function cash_mob_home(){return  new Promise((_0x898axb)=>{$[__Oxe61ec[0x3a]](taskUrl(__Oxe61ec[0x3b]),async (_0x898axc,_0x898axd,_0x898axe)=>{try{if(_0x898axc){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${JSON[__Oxe61ec[0x32]](_0x898axc)}${__Oxe61ec[0x0]}`);console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x3c]}`); await $[__Oxe61ec[0x2d]](5000)}else {if(safeGet(_0x898axe)){_0x898axe= JSON[__Oxe61ec[0x34]](_0x898axe);if(_0x898axe[__Oxe61ec[0x3d]]=== 0&& _0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]]){for(let _0x898ax10 of _0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x3f]]){if(_0x898ax10[__Oxe61ec[0x40]]=== 4){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await doTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x46]]); await $[__Oxe61ec[0x2d]](5000)}}else {if(_0x898ax10[__Oxe61ec[0x40]]=== 2){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await doTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x49]]); await $[__Oxe61ec[0x2d]](5000)}}else {if(_0x898ax10[__Oxe61ec[0x40]]=== 31){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await doTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x4a]]); await $[__Oxe61ec[0x2d]](5000)}}else {if(_0x898ax10[__Oxe61ec[0x40]]=== 16|| _0x898ax10[__Oxe61ec[0x40]]=== 3|| _0x898ax10[__Oxe61ec[0x40]]=== 5|| _0x898ax10[__Oxe61ec[0x40]]=== 17|| _0x898ax10[__Oxe61ec[0x40]]=== 21){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await doTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x4b]]); await $[__Oxe61ec[0x2d]](5000)}}}}}}}}}}catch(e){$[__Oxe61ec[0x39]](e,_0x898axd)}finally{_0x898axb(_0x898axe)}})})}async function cash_homePage(_0x898ax12= false){let _0x898ax13=__Oxe61ec[0x4c];let _0x898ax14={}; await $[__Oxe61ec[0x2d]](500);let _0x898ax15= await getSign(_0x898ax13,_0x898ax14,111);return  new Promise((_0x898axb)=>{$[__Oxe61ec[0x58]](apptaskUrl(_0x898ax13,_0x898ax15),async (_0x898axc,_0x898axd,_0x898axe)=>{try{if(_0x898axc){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${JSON[__Oxe61ec[0x32]](_0x898axc)}${__Oxe61ec[0x0]}`);console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x3c]}`); await $[__Oxe61ec[0x2d]](5000)}else {if(safeGet(_0x898axe)){_0x898axe= JSON[__Oxe61ec[0x34]](_0x898axe);if(_0x898axe[__Oxe61ec[0x3d]]=== 0&& _0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]]){if(_0x898ax12){if(message){message+= `${__Oxe61ec[0x4d]}${_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x4e]]}${__Oxe61ec[0x4f]}`;allMessage+= `${__Oxe61ec[0x26]}${$[__Oxe61ec[0x1f]]}${__Oxe61ec[0x0]}${$[__Oxe61ec[0x21]]}${__Oxe61ec[0x50]}${message}${__Oxe61ec[0x0]}${$[__Oxe61ec[0x1f]]!== cookiesArr[__Oxe61ec[0x1c]]?__Oxe61ec[0x51]:__Oxe61ec[0x0]}${__Oxe61ec[0x0]}`};console[__Oxe61ec[0x9]](`${__Oxe61ec[0x4d]}${_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x4e]]}${__Oxe61ec[0x4f]}`);return};$[__Oxe61ec[0x2f]]= _0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x4e]];console[__Oxe61ec[0x9]](`${__Oxe61ec[0x52]}${$[__Oxe61ec[0x1f]]}${__Oxe61ec[0x53]}${$[__Oxe61ec[0x1d]]}${__Oxe61ec[0x54]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x55]}${_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x56]]}${__Oxe61ec[0x0]}`);let _0x898ax16={'\x69\x6E\x76\x69\x74\x65\x43\x6F\x64\x65':_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x56]],'\x73\x68\x61\x72\x65\x44\x61\x74\x65':_0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x57]]};$[__Oxe61ec[0x57]]= _0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x57]];for(let _0x898ax10 of _0x898axe[__Oxe61ec[0x36]][__Oxe61ec[0x3e]][__Oxe61ec[0x3f]]){if(_0x898ax10[__Oxe61ec[0x40]]=== 4){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await appdoTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x46]]); await $[__Oxe61ec[0x2d]](5000)}}else {if(_0x898ax10[__Oxe61ec[0x40]]=== 2){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await appdoTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x49]]); await $[__Oxe61ec[0x2d]](5000)}}else {if(_0x898ax10[__Oxe61ec[0x40]]=== 30){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await appdoTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x4a]]); await $[__Oxe61ec[0x2d]](5000)}}else {if(_0x898ax10[__Oxe61ec[0x40]]=== 16|| _0x898ax10[__Oxe61ec[0x40]]=== 3|| _0x898ax10[__Oxe61ec[0x40]]=== 5|| _0x898ax10[__Oxe61ec[0x40]]=== 17|| _0x898ax10[__Oxe61ec[0x40]]=== 21){for(let _0x898ax8=_0x898ax10[__Oxe61ec[0x41]];_0x898ax8< _0x898ax10[__Oxe61ec[0x42]];++_0x898ax8){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x43]}${_0x898ax10[__Oxe61ec[0x15]]}${__Oxe61ec[0x44]}${_0x898ax8+ 1}${__Oxe61ec[0x45]}${_0x898ax10[__Oxe61ec[0x42]]}${__Oxe61ec[0x0]}`); await appdoTask(_0x898ax10[__Oxe61ec[0x40]],_0x898ax10[__Oxe61ec[0x48]][__Oxe61ec[0x47]][__Oxe61ec[0x4b]]); await $[__Oxe61ec[0x2d]](5000)}}}}}}}}}}catch(e){$[__Oxe61ec[0x39]](e,_0x898axd)}finally{_0x898axb(_0x898axe)}})})}async function appdoTask(_0x898ax18,_0x898ax19){let _0x898ax13=__Oxe61ec[0x59];let _0x898ax14={"\x74\x79\x70\x65":_0x898ax18,"\x74\x61\x73\x6B\x49\x6E\x66\x6F":_0x898ax19}; await $[__Oxe61ec[0x2d]](500);let _0x898ax15= await getSign(_0x898ax13,_0x898ax14,_0x898ax18);return  new Promise((_0x898axb)=>{$[__Oxe61ec[0x58]](apptaskUrl(_0x898ax13,_0x898ax15),(_0x898axc,_0x898axd,_0x898axe)=>{try{if(_0x898axc){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${JSON[__Oxe61ec[0x32]](_0x898axc)}${__Oxe61ec[0x0]}`);console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x3c]}`)}else {if(safeGet(_0x898axe)){_0x898axe= JSON[__Oxe61ec[0x34]](_0x898axe);if(_0x898axe[__Oxe61ec[0x3d]]=== 0){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x5a]}`)}else {console[__Oxe61ec[0x9]](JSON[__Oxe61ec[0x32]](_0x898axe))}}}}catch(e){$[__Oxe61ec[0x39]](e,_0x898axd)}finally{_0x898axb(_0x898axe)}})})}function doTask(_0x898ax18,_0x898ax19){return  new Promise((_0x898axb)=>{$[__Oxe61ec[0x3a]](taskUrl(__Oxe61ec[0x59],{"\x74\x79\x70\x65":_0x898ax18,"\x74\x61\x73\x6B\x49\x6E\x66\x6F":_0x898ax19}),(_0x898axc,_0x898axd,_0x898axe)=>{try{if(_0x898axc){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${JSON[__Oxe61ec[0x32]](_0x898axc)}${__Oxe61ec[0x0]}`);console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x3c]}`)}else {if(safeGet(_0x898axe)){_0x898axe= JSON[__Oxe61ec[0x34]](_0x898axe);if(_0x898axe[__Oxe61ec[0x3d]]=== 0){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x5a]}`)}else {console[__Oxe61ec[0x9]](_0x898axe)}}}}catch(e){$[__Oxe61ec[0x39]](e,_0x898axd)}finally{_0x898axb(_0x898axe)}})})}function getSign(_0x898ax13,_0x898ax14,_0x898ax18){return  new Promise(async (_0x898axb)=>{let _0x898ax1c={url:`${__Oxe61ec[0x5b]}`,body:`${__Oxe61ec[0x5c]}${_0x898ax13}${__Oxe61ec[0x5d]}${JSON[__Oxe61ec[0x32]](_0x898ax14)}${__Oxe61ec[0x5e]}${_0x898ax18}${__Oxe61ec[0x0]}`,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxe61ec[0x5f]},timeout:30* 1000};$[__Oxe61ec[0x58]](_0x898ax1c,(_0x898axc,_0x898axd,_0x898axe)=>{try{if(_0x898axc){console[__Oxe61ec[0x9]](JSON[__Oxe61ec[0x32]](_0x898axc));console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x60]}`)}else {_0x898axe= JSON[__Oxe61ec[0x34]](_0x898axe);if(_0x898axe[__Oxe61ec[0x3d]]== 0){_0x898axe= _0x898axe[__Oxe61ec[0x36]]}}}catch(e){$[__Oxe61ec[0x39]](e,_0x898axd)}finally{_0x898axb(_0x898axe)}})})}function apptaskUrl(_0x898ax13= __Oxe61ec[0x0],_0x898ax14= __Oxe61ec[0x0]){return {url:`${__Oxe61ec[0x0]}${JD_API_HOST}${__Oxe61ec[0x61]}${_0x898ax13}${__Oxe61ec[0x0]}`,body:_0x898ax14,headers:{'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x48\x6F\x73\x74':__Oxe61ec[0x62],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxe61ec[0x63],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxe61ec[0x64],'\x52\x65\x66\x65\x72\x65\x72':__Oxe61ec[0x0],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxe61ec[0x65],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxe61ec[0x66],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxe61ec[0x67]}}}function taskUrl(_0x898ax13,_0x898ax14= {}){return {url:`${__Oxe61ec[0x0]}${JD_API_HOST}${__Oxe61ec[0x61]}${_0x898ax13}${__Oxe61ec[0x5d]}${encodeURIComponent(JSON[__Oxe61ec[0x32]](_0x898ax14))}${__Oxe61ec[0x0]}`,headers:{'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x48\x6F\x73\x74':__Oxe61ec[0x62],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxe61ec[0x63],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxe61ec[0x68],'\x52\x65\x66\x65\x72\x65\x72':__Oxe61ec[0x69],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxe61ec[0x2]]()?(process[__Oxe61ec[0x7]][__Oxe61ec[0x6a]]?process[__Oxe61ec[0x7]][__Oxe61ec[0x6a]]:(require(__Oxe61ec[0x6c])[__Oxe61ec[0x6b]])):($[__Oxe61ec[0xc]](__Oxe61ec[0x6d])?$[__Oxe61ec[0xc]](__Oxe61ec[0x6d]):__Oxe61ec[0x6e]),'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxe61ec[0x6f],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxe61ec[0x67]}}}function TotalBean(){return  new Promise(async (_0x898axb)=>{const _0x898ax1c={"\x75\x72\x6C":`${__Oxe61ec[0x70]}`,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxe61ec[0x71],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxe61ec[0x64],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxe61ec[0x67],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxe61ec[0x6f],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxe61ec[0x63],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":__Oxe61ec[0x72],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxe61ec[0x2]]()?(process[__Oxe61ec[0x7]][__Oxe61ec[0x6a]]?process[__Oxe61ec[0x7]][__Oxe61ec[0x6a]]:(require(__Oxe61ec[0x6c])[__Oxe61ec[0x6b]])):($[__Oxe61ec[0xc]](__Oxe61ec[0x6d])?$[__Oxe61ec[0xc]](__Oxe61ec[0x6d]):__Oxe61ec[0x6e])}};$[__Oxe61ec[0x58]](_0x898ax1c,(_0x898axc,_0x898axd,_0x898axe)=>{try{if(_0x898axc){console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${JSON[__Oxe61ec[0x32]](_0x898axc)}${__Oxe61ec[0x0]}`);console[__Oxe61ec[0x9]](`${__Oxe61ec[0x0]}${$[__Oxe61ec[0x15]]}${__Oxe61ec[0x3c]}`)}else {if(_0x898axe){_0x898axe= JSON[__Oxe61ec[0x34]](_0x898axe);if(_0x898axe[__Oxe61ec[0x73]]=== 13){$[__Oxe61ec[0x20]]= false;return};if(_0x898axe[__Oxe61ec[0x73]]=== 0){$[__Oxe61ec[0x21]]= (_0x898axe[__Oxe61ec[0x74]]&& _0x898axe[__Oxe61ec[0x74]][__Oxe61ec[0x75]])|| $[__Oxe61ec[0x1d]]}else {$[__Oxe61ec[0x21]]= $[__Oxe61ec[0x1d]]}}else {console[__Oxe61ec[0x9]](`${__Oxe61ec[0x76]}`)}}}catch(e){$[__Oxe61ec[0x39]](e,_0x898axd)}finally{_0x898axb()}})})}function safeGet(_0x898axe){try{if( typeof JSON[__Oxe61ec[0x34]](_0x898axe)== __Oxe61ec[0x77]){return true}}catch(e){console[__Oxe61ec[0x9]](e);console[__Oxe61ec[0x9]](`${__Oxe61ec[0x78]}`);return false}}function jsonParse(_0x898ax22){if( typeof _0x898ax22== __Oxe61ec[0x79]){try{return JSON[__Oxe61ec[0x34]](_0x898ax22)}catch(e){console[__Oxe61ec[0x9]](e);$[__Oxe61ec[0x1b]]($[__Oxe61ec[0x15]],__Oxe61ec[0x0],__Oxe61ec[0x7a]);return []}}}(function(_0x898ax23,_0x898ax24,_0x898ax25,_0x898ax26,_0x898ax27,_0x898ax28){_0x898ax28= __Oxe61ec[0x7b];_0x898ax26= function(_0x898ax29){if( typeof alert!== _0x898ax28){alert(_0x898ax29)};if( typeof console!== _0x898ax28){console[__Oxe61ec[0x9]](_0x898ax29)}};_0x898ax25= function(_0x898ax2a,_0x898ax23){return _0x898ax2a+ _0x898ax23};_0x898ax27= _0x898ax25(__Oxe61ec[0x7c],_0x898ax25(_0x898ax25(__Oxe61ec[0x7d],__Oxe61ec[0x7e]),__Oxe61ec[0x7f]));try{_0x898ax23= __encode;if(!( typeof _0x898ax23!== _0x898ax28&& _0x898ax23=== _0x898ax25(__Oxe61ec[0x80],__Oxe61ec[0x81]))){_0x898ax26(_0x898ax27)}}catch(e){_0x898ax26(_0x898ax27)}})({})


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}