// pages/ninegrid/ninegrid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: [
      {
        id: '0',
        name: '菜品识别',
        url: '../../pages/dish/dish',
        icon: '../../image/dishNine.png'
      },
      {
        id: '1',
        name: '车型识别',
        url: '../../pages/car/car',
        icon: '../../image/carNine.png'
      },
      {
        id: '2',
        name: '植物识别',
        url: '../../pages/plant/plant',
        icon: '../../image/plantNine.png'
      },
      {
        id: '3',
        name: '动物识别',
        url: '../../pages/animal/animal',
        icon: '../../image/animalNine.png'
      },
      {
        id: '4',
        name: '图像主体识别',
        url: '../../pages/subject/subject',
        icon: '../../image/image_HL.png'
      },
      {
        id: '5',
        name: '车辆定损识别',
        url: '../../pages/cardamage/cardamage',
        icon: '../../image/damageNine.png'
      },
      {
        id: '6',
        name: '通用物体识别',
        url: '../../pages/object/object',
        icon: '../../image/object_HL.png'
      },
      {
        id: '7',
        name: '品牌LOGO识别',
        url: '../../pages/logo/logo',
        icon: '../../image/tag_HL.png'
      },
      {
        id: '8',
        name: '相似相同图像搜索',
        url: '../../pages/resemble/resemble',
        icon: '../../image/equal_Hl.png'
      }
    ]
  },
  toPage: function (event) {
    console.info(event.currentTarget.id);
    var route = event.currentTarget.id;
    if (route == 0) {
      wx.navigateTo({
        url: '/pages/dish/dish',
      })
    } else if (route == 1) {
      wx.navigateTo({
        url: '/pages/car/car',
      })
    } else if (route == 2) {
      wx.navigateTo({
        url: '/pages/plant/plant',
      })
    } else if (route == 3) {
      wx.navigateTo({
        url: '/pages/animal/animal',
      })
    } else if (route == 4) {
      wx.showModal({
        title: '功能说明',
        content: '检测图像中的主体位置，没啥好玩的。就不开放了。',
        showCancel: false,
      })
    } else if (route == 7) {
      wx.navigateTo({
        url: '/pages/logo/logo',
      })
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '功能暂未开放，请点击别的功能试试',
        showCancel: false,
        confirmText: '好的',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})