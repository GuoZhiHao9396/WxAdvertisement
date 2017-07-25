/*
    * @description    根据某个字段实现对json数组的排序
    * @param   array  要排序的json数组对象
    * @param   field  排序字段（此参数必须为字符串）
    * @param   reverse 是否倒序（默认为false）
    * @return  array  返回排序后的json数组
*/
function caiyuanzi_JsonSort(array, field, reverse){
    //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
    if(array.length < 2 || !field || typeof array[0] !== "object") return array;
    //数字类型排序
    if(typeof array[0][field] === "number") {
        array.sort(function(x, y) { return x[field] - y[field]});
    }
    //字符串类型排序
    if(typeof array[0][field] === "string") {
        array.sort(function(x, y) { return x[field].localeCompare(y[field])});
    }
    //倒序
    if(reverse) {
        array.reverse();
    }
    return array;
}
/*
    * @description    倒计时
*/
function caiyuanzi_GetRTime(endtime,that){
    //'2014/09/20 00:00:00'
    var EndTime= new Date(endtime);
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
      that.setData({
          goods_tuan_status:true,
          shengTime:d+'天'+h+'时'+m+'分'+s+'秒'
      })
      setTimeout(function(){
        caiyuanzi_GetRTime(endtime,that);
        }
    ,1000)
    }else{
        that.setData({
          goods_tuan_status:false,
          shengTime:'已结束'
      })
    }
}
/*提示信息*/
function cyz_alert(msg){
    wx.showModal({
        title: '提示',
        content: msg,
        showCancel: false
    });
    return false;
}
/*加载信息*/
function cyz_loading(msg, icon='loading',duration=10000){
    wx.showToast({
        title: msg,
        icon: 'loading',
        duration: duration,
        mask: true
    });
}
/*加载信息不自动关闭 需要wx.hideLoading()进行关闭*/
function cyz_loading_noclose(msg){
    wx.showLoading({
        title:msg,
        mask:true
    });
}
module.exports = {
    CYZ_jsonSort: caiyuanzi_JsonSort,
	CYZ_daoJiShi: caiyuanzi_GetRTime,
    CYZ_loading: cyz_loading,
    CYZ_loading_n: cyz_loading_noclose,
    CYZ_alert: cyz_alert
};

