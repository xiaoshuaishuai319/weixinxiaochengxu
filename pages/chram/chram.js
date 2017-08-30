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
  changeinfo:function(){
    console.info(age);
    var that = this;
    var imgdata = that.data.img;
    if(age!=""){
      this.setData({
        ages:"年龄："+" "+age,
        beautys:"魅力："+" "+beauty
      })
    }else{
      if (imgdata == null) {
        wx.showModal({
          title: '友情提示',
          content: '亲，您还没有选取图片呢'
        })
      } else {
        this.setData({
          ages: "不着急等待1-2秒再点击",
        })
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
         img:res.tempFilePaths[ 0 ]
       })
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
            var data = res.data;
            var str=JSON.parse(data);
            console.log(str);
            age = str.age;
            beauty=str.beauty;
          },
          fail:function(res){
            console.log( res )
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