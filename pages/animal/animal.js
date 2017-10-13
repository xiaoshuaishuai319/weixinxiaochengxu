var app = getApp();
var name = "";
var score = "";
var words = "";
Page({
  data: {
    motto: '动物识别',
    userInfo: {},
    images: {},
    info: "点击查看识别结果",
    names: "",
    scores: "",
    remark: ""
  },
  onShareAppMessage: function () {
    return {
      title: '动物识别小程序',
      path: '/pages/plant/plant',
      success: function (res) {
        if (res.errMsg == 'shareAppMessage:ok') {
          wx.showToast({
            title: '分享成功',
            icon: 'success',
            duration: 500
          });
        }
      },
      fail: function (res) {
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          wx.showToast({
            title: '分享取消',
            icon: 'loading',
            duration: 500
          })
        }
      }
    }
  },
  clear: function (event) {
    console.info(event);
    wx.clearStorage();
  },
  changeinfo: function () {
    console.info(name);
    var that = this;
    var imgdata = that.data.img;
    if (words == "success") {
      this.setData({
        names: "动物名称：" + " " + name,
        scores: "可信度：" + " " + score
      })
    } else {
      if (imgdata == null) {
        wx.showModal({
          title: '友情提示',
          content: '亲，您还没有选取图片呢'
        })
      } else {
        if (words != "" && words != "success") {
          this.setData({
            names: words,
          })
        } else {
          this.setData({
            names: "不着急等待1-2秒再点击",
          })
        }
      }
    }
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  uploads: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        //console.log( res )
        that.setData({
          img: res.tempFilePaths[0]
        })
        wx.uploadFile({
          url: 'https://www.xsshome.cn/xcx/image/uploadBDANIMAL',
          filePath: res.tempFilePaths[0],
          header: {
            'content-type': 'multipart/form-data'
          },
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data;
            var str = JSON.parse(data);
            console.log(str);
            name = str.name;
            score = str.score;
            words = str.words;
          },
          fail: function (res) {
            console.log(res)
          }
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
});