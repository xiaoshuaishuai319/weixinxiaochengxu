// pages/ocr/ocr.js
var ocrtext="";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['通用OCR', '通用OCR（含位置信息版）', '通用OCR（含生僻字版）', '通用OCR（高精度版）', '通用OCR（含位置高精度版）', '身份证OCR（正面）', '身份证OCR（背面）', '银行卡OCR', '驾驶证OCR', '行驶证OCR', '网图OCR', '营业执照OCR', '车牌OCR', '彩票OCR', '公式OCR', '通用票据OCR', '表格OCR（提交）','表格OCR（获取）'],
    index: 0,
    ocrtexts:"",
    info:"点击查看识别内容"
  },
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    })
    console.log('picker发送选择改变，携带值为', e.detail.value);
    var ocrindex = e.detail.value;
    if (ocrindex != "0") {
      wx.showModal({
        title: '温馨提示',
        content: '目前只有 通用OCR 可以调戏哦！'
      })
    } 
  },
  changeinfo: function () {
    console.info(ocrtext);
     var that = this;
     var imgdata = that.data.img;
    if (ocrtext != "") {
      this.setData({
        ocrtexts: "识别的内容：" + " " + ocrtext
      })
    } else {
      if (imgdata==null){
        wx.showModal({
          title: '友情提示',
          content: '亲，您还没有选取图片呢'
        })
      }else{
        this.setData({
          ocrtexts: "不着急等待1-2秒再点击",
        })
      }
    }
  },
  clear:function(){
    var that = this;
    console.info(that);
    this.setData({
      img:""
    })  
  },
  uploads: function () {
    var that = this;
    console.info(that);
    var ocrindex = that.data.index;
    if(ocrindex!="0"){
      wx.showModal({
        title: '友情提示',
        content: '亲，目前只有 通用OCR可用哦'
      })
    }else{
      console.info(ocrindex);
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
          url: 'https://www.xsshome.cn/xcx/uploadBOCR',
          filePath: res.tempFilePaths[0],
          header: {
            'content-type': 'multipart/form-data'
          },
          name: 'file',
          formData: {
            'user': 'test',
            'ocrtype': ocrindex
          },
          success: function (res) {
            var data = res.data;
            var str = JSON.parse(data);
            console.log(str);
            ocrtext = str.words;
          },
          fail: function (res) {
            console.log(res)
          }
        })
      }
    })
    }
  },
  onShareAppMessage: function () {
    return {
      title: 'OCR识别',
      path: '/pages/ocr/ocr',
      imageUrl:'https://www.xsshome.cn/timg.jpg',
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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