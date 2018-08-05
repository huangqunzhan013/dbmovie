var subjectsUtil=require("../../utils/subjectsUtil.js");
Page({
  data:{
    movies:[],
    loadingHidden:false
  },
  onLoad:function(options){
    this.loadMovie();
  },
  loadMovie(){
    var that=this;
    wx.request({
      url: 'https://jxv2pju6.qcloud.la/v2/movie/top250',
      data: {
        count:20
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var subjects = res.data.subjects;
        subjectsUtil.processSubjects(subjects);
        that.setData({
          movies: subjects,
          loadingHidden: true
        })
      }
    })
  }
})