var subjectsUtil = require("../../utils/subjectsUtil.js");
Page({
  data: {
    inputVal: "",
    movies: [],
    hiddenLoading: true,
    modalHidden: true,
    tip: "",
  },
  bindKeyInput: function (e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },
  search() {
    var that = this;
    var queryStr = that.data.inputVal;
    if (queryStr == "") {
      this.setData({
        "tip": "输入内容不能为空",
        "modalHidden": false
      });
    } else {
      that.setData({
        hiddenLoading: false
      });
      wx.request({
        url: 'https://jxv2pju6.qcloud.la/v2/movie/search?q=' + queryStr,
        data: {
          count: 50
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          var subjects = res.data.subjects;
          that.setData({
            inputVal: res.data.title + "，共" + res.data.total + "条记录"
          });
          var subjects = res.data.subjects;
          subjectsUtil.processSubjects(subjects);
          that.setData({
            movies: subjects,
            hiddenLoading: true
          });
        }
      })
    }

  }
})