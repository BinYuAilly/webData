const getCode = function() {
  let code = "";
  var local = window.location.href; // 获取页面url
  // var local = "https://bins.cn.utools.club"; // 获取页面url
  
  // var appid = "wx58369b8dfced38f9";
  var appid = "wx2e916b986e059910";//测试 自己的APPID

  code = getUrlCode().code; // 截取code
  console.log(code, appid, local)
  // snsapi_base | snsapi_userinfo
  if (code == null || code === "") {
    // 如果没有code，则去请求urlEncode 
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(
      local
    )}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
  } else {
    // 你自己的业务逻辑
  }
}
const getUrlCode = function() {
    // 截取url中的code方法

    var url = location.search;
    // this.winUrl = url;
    let winUrl = url;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }
    return theRequest;
  }

export default{
    getCode,
    getUrlCode
}