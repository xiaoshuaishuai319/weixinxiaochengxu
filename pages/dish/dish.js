var app = getApp();
var name = "";
var calorie = "";
var probability ="";
var words = "";
Page({
  data: {
    motto: '菜品识别',
    userInfo: {},
    images: {},
    info: "点击查看识别结果",
    names: "",
    calories: "",
    probabilitys:"",
    remark: ""
  },
  onShareAppMessage: function () {
    return {
      title: '菜品识别小程序',
      path: '/pages/dish/dish',
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
  clear:function(event){
    console.info(event);
    wx.clearStorage();
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
          img: res.tempFilePaths[0],
          names: '',
          scores: ''
        }),
          wx.showLoading({
            title: "努力分析中..."
          }),
        wx.uploadFile({
          url: 'https://www.xsshome.cn/xcx/uploadBDISH',
          filePath: res.tempFilePaths[0],
          header: {
            'content-type': 'multipart/form-data'
          },
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            wx.hideLoading();
            var data = res.data;
            var str = JSON.parse(data);
            console.log(str);
            words = str.words;
            if (str.words == "success") {
              that.setData({
                names: "名称：" + " " + str.name,
                calories: "卡路里：" + " " + str.calorie,
                probabilitys: "可信度：" + " " + str.probability
              })
            } else {
              that.setData({
                names: str.words,
              })
            }
          },
          fail: function (res) {
            wx.hideLoading();
            console.log(res);
            that.setData({
              names: '小程序离家出走了稍后再试',
            })
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