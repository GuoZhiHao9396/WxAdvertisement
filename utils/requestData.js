var _Caiyuanzi = require('data.js');
module.exports = {
	cyz_requestGet: function(url, data, suc, fail) {
      wx.request({
          url: _Caiyuanzi.caiyuanzi_host_api_url + url,
          data: data,
          header: {
              'content-type': 'application/json',
          },
          method: 'GET',
          success: function(res) {
            if(suc) {
              suc(res.data);
            }
          },
          fail: function(res) {
            wx.showModal({
                title: '提示',
                content: 'error:网络请求失败',
                showCancel:false
            })
            return false;
          }
      });
    },
    cyz_requestPost: function(url, data, suc, fail) {
      wx.request({
          url: _Caiyuanzi.caiyuanzi_host_api_url + url,
          data: data,
          method: 'POST',
          success: function(res) {
            if(suc) {
              suc(res.data);
            }
          },
          fail: function(res) {
            wx.showModal({
                title: '提示',
                content: 'error:网络请求失败',
                showCancel:false
            })
            return false;
          }
      });
    },
    cyz_uploadPic:function(url,imgurl,suc,fail){
        wx.uploadFile({
            url: _Caiyuanzi.caiyuanzi_host_api_url + url,
            filePath: imgurl,
            name: 'file',
            success: function (res) {
                if (suc) {
                    suc(res.data);
                }
            },
            fail: function (res) {
                wx.showModal({
                    title: '提示',
                    content: '图片上传失败',
                    showCancel: false
                })
                return false;
            }
        })
    }
}