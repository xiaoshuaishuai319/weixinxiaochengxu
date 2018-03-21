var app = getApp();
var age = "";
var beauty= "";
Page( {
  data: {
    motto: '腾讯优图',
    userInfo: {},
    images: {},
    info:"点击查看魅力",
    ages:"",
    beautys:"",
    remark:""
  },
    onShareAppMessage: function () {
    return {
      title: '魅力值小程序',
      path: '/pages/chram/chram',
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
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  uploads: function() {
    var that =this
    wx.chooseImage( {
      count: 1, // 默认9
      sizeType: [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
      success: function( res ) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        //console.log( res )
        that.setData({
          img: res.tempFilePaths[0],
          ages: "",
          beautys: "",
        }),
          wx.showLoading({
          title: "魅力年龄分析中..."
          }),
        wx.uploadFile( {
          url: 'https://www.xsshome.cn/xcx/uploadT',
          filePath: res.tempFilePaths[ 0 ],
          header:{
             'content-type':'multipart/form-data'
          },
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function(res) {
            wx.hideLoading();
            var data = res.data;
            var str=JSON.parse(data);
            var age = str.age;
            console.log(str);
            if (age != "") {
              that.setData({
                ages: "年龄：" + " " + str.age,
                beautys: "魅力：" + " " + str.beauty
              })
            } else {
              that.setData({
                ages: 'Sorry 未能分析出人脸信息'
              })
            }
          },
          fail:function(res){
            wx.hideLoading();
            console.log( res )
            that.setData({
              ages: '小程序离家出走了稍后再试'
            })
          }
        })
      }
    })
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
});