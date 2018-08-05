// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"点击授权",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img:"../assets/img/personal.png",
    nickName:"用户昵称："
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showModal({
      title: '微信授权',
      content: '获得你的公开信息(昵称、头像等)',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.getSetting({
            success: function (res) {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success: function (res) {
                    that.setData({
                      img: res.userInfo.avatarUrl,
                      nickName: res.userInfo.nickName,
                      text: "已授权"
                    })

                  }
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    var that=this;
    wx.showModal({
      title: '微信授权',
      content: '获得你的公开信息(昵称、头像等)',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.getSetting({
            success: function (res) {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success: function (res) {
                    that.setData({
                      img: res.userInfo.avatarUrl,
                      nickName:res.userInfo.nickName,
                      text:"已授权"
                    })

                  }
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })   
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