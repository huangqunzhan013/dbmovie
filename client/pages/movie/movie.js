var subjectsUtil = require("../../utils/subjectsUtil.js");
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '/pages/assets/img/p1.jpg',
      '/pages/assets/img/p2.jpg',
      '/pages/assets/img/p3.jpg',
    ],
    movie: [],
    hiddenLoading: false,
    bannerHeight: "",
    screen: 800
  },

  imgHeight: function (e) {
    var res = wx.getSystemInfoSync();
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight;
    this.setData({
      bannerHeight: res.windowWidth / ratio
    })
  },

  onLoad: function (options) {
    this.loadMovie();
  },
  loadMovie() {
    var that = this;
    wx.request({
      url: 'https://jxv2pju6.qcloud.la/v2/movie/in_theaters',
      data: {
        count: 50
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        var subjects = res.data.subjects;
        subjectsUtil.processSubjects(subjects);
        that.setData({
          movies: subjects,
          hiddenLoading: true
        });
      }
    })
  }
})