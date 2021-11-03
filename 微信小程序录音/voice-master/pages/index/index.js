const app = getApp()
//获取全局唯一的录音管理器 RecorderManager
const recorderManager = wx.getRecorderManager()

Page({
  data: {
    is_show: false,
    is_clock: false,
    startPoint: null
  },
  startRecord() {
    wx.showToast({
      title: '请长按录音',
      icon: 'none',
      duration: 1000
    })
  },
  onLoad() {
    let that = this
    //对停止录音进行监控
    recorderManager.onStop((res) => {
      console.log(res);
      var access_token = wx.getStorageSync("baidu_yuyin_access_token");
      //此时先判断是否需要发送录音
      if (that.data.is_clock == true) {
        //对录音时长进行判断，少于1s的不进行发送，并做出提示
        if (res.duration < 1000) {
          wx.showToast({
            title: '录音时间太短，请长按录音',
            icon: 'none',
            duration: 1000
          })
        } else {
          const {
            tempFilePath
          } = res;
          wx.showLoading({
            title: '语音检索中',
          })
          const fs = wx.getFileSystemManager();
          //读取文件并转为ArrayBuffer
          fs.readFile({
            filePath: tempFilePath,
            success(res) {
              console.log(res);
              const base64 = wx.arrayBufferToBase64(res.data);
              var fileSize = res.data.byteLength;
              let cuid = that.guid();
              console.log(cuid, "cuid------");
              wx.request({
                // url: 'https://vop.baidu.com/server_api',
                url: 'https://vop.baidu.com/pro_api',
                method: "POST",
                data: {
                  format: 'pcm', //前方有坑，请绕行：此处文档参数16000，达不到这种高保真音频，故 使用8000
                  rate: 16000,
                  dev_pid: 80001, //普通话
                  channel: 1,//固定写法（声道）
                  cuid: cuid,//设备的唯一id
                  token: access_token,//获取到的token值
                  speech: base64,//base64的音频文件
                  len: fileSize ,//文件的大小，字节数
                },
                success: (res) => {
                  console.log(res, "res-------")
                  wx.hideLoading();
                  var result = res.data.result;
                  that.setData({
                    is_show: false,
                    voice_show: false
                  })
                  if (result.length == 0 || result[0] == "") {
                    wx.showToast({
                      title: "未识别到语音信息!",
                      icon: 'none',
                      duration: 3000
                    })
                    return;
                  }
                  var keyword = result[0];
                  keyword = keyword.replace("。", "");
                  wx.showToast({
                    title: keyword,
                    duration: 3000
                  })
                }
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: '录音已取消',
          icon: 'none',
          duration: 2000
        })
      }
    })

    //监控录音异常情况
    recorderManager.onError((res) => {
      if (res['errMsg'] != 'operateRecorder:fail recorder not start') {
        wx.showModal({
          title: '你拒绝使用录音功能，语音识别功能将无法正常使用',
          content: '是否重新授权使用你的录音功能',
          success: function (data) {
            if (data.cancel) {
              wx.showToast({
                title: '拒绝授权',
                icon: 'none',
                duration: 1000
              })
            } else if (data.confirm) {
              wx.openSetting({
                success: function (dataAu) {
                  if (dataAu.authSetting["scope.record"] != true) {
                    wx.showToast({
                      title: '授权失败',
                      icon: 'none',
                      duration: 1000
                    })
                  } else {
                    wx.showToast({
                      title: '授权成功，请长按录音',
                      icon: 'none',
                      duration: 1000
                    })
                  }
                }
              })
            }
          }
        })
      }
    })

  },
  //用于生成uuid
  S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  guid() {
      let S4 = this.S4;
      return (
          S4() +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          S4() +
          S4()
      );
  },
  /**
   * 长按事件
   */
  handleRecordStart(e) {
    this.setData({
      startPoint: e.touches[0], //记录触摸点的坐标信息
      is_show: true,
      is_clock: true
    })
    //录音参数
    const options = {
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 48000,
      format: 'PCM'
    }
    //开启录音
    recorderManager.start(options);
    wx.showToast({
      title: '正在录音，往上滑动取消发送',
      icon: 'none',
      duration: 10000
    })
  },
  //滑动取消发送
  handleTouchMove: function (e) {
    //计算距离，当滑动的垂直距离大于35时，则取消发送语音
    if (this.data.startPoint.clientY - Math.abs(e.touches[e.touches.length - 1].clientY) > 35) {
      wx.showToast({
        title: "松开手指,取消发送",
        icon: "none",
        duration: 10000
      });
      this.setData({
        is_clock: false //设置为取消语音
      })
    } else {
      wx.showToast({
        title: '正在录音，往上滑动取消发送',
        icon: 'none',
        duration: 10000
      })
      this.setData({
        is_clock: true
      })
    }
  },
  //停止录音
  handleRecordStop() {
    wx.hideToast(); //结束录音、隐藏Toast提示框
    this.setData({
      is_show: false
    })
    recorderManager.stop() //结束录音
  }
})