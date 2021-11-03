/**
 * 你需要注册一个百度云账号，并创建一个应用。参考: https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjgn3
 */
App({
  onLaunch: function () {
    this.globalData = {
      baiduyuyin: {
        apiKey: 'S71kqg1XPyD4jGqQ7AtAsTf3', //你的API Key
        secretKey: 'iOqIE1AHQqeWx2AhsEpgpid1bA9KkVwl', //你的Secret Key
        url: 'https://openapi.baidu.com/oauth/2.0/token'
      }
    }
  },
  onShow(options) {
    this.initBaiduYuyinAccessToken();
  },
  //初始化语音识别 baiduBccessToken
  initBaiduYuyinAccessToken: function () {
    var that = this;
    var baiduBccessToken = wx.getStorageSync("baidu_yuyin_access_token");
    if (baiduBccessToken == undefined || baiduBccessToken == '') {
      that.getBaiduYuyinAccessToken();
    } else {
      var baiduTime = wx.getStorageSync("baidu_yuyin_time");
      //凭证有效期判断
      var timeNum = new Date(parseInt(new Date().getTime() - baiduTime) * 1000).getDay();
      if (timeNum > 28) {
        that.getBaiduAccessToken();
      }
    }
  },
  getBaiduYuyinAccessToken: function () {
    var that = this;
    var baiduyuyin = that.globalData.baiduyuyin;
    wx.request({
      url: baiduyuyin.url,
      data: {
        grant_type: 'client_credentials',
        client_id: baiduyuyin.apiKey,
        client_secret: baiduyuyin.secretKey
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res, "res------")
        wx.showToast({
          title: '获取凭证成功'
        })
        wx.setStorageSync("baidu_yuyin_access_token", res.data.access_token);
        wx.setStorageSync("baidu_yuyin_time", new Date().getTime());
      }
    })
  }
})