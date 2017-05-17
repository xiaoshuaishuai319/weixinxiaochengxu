//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '无需安装 触手可及 用完即走 无需卸载',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  sample:function(){
    console.log('input')
      wx.navigateTo({
      url: '../sample/sample',
      fail:function(res){
        console.info(res)
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    console.log(that);
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.info(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
