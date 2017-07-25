var app = getApp();
Page({
    data: {
        img_data:[
            {
                "title":"图片一",
                "img_url":"https://img.alicdn.com/simba/img/TB1B1uBRVXXXXcCaXXXSutbFXXX.jpg",
            },
            {
                "title": "图片二",
                "img_url": "https://img.alicdn.com/simba/img/TB19IBHQVXXXXaQXXXXSutbFXXX.jpg"
            },
            {
                "title": "图片三",
                "img_url": "https://img.alicdn.com/tfs/TB134OnRVXXXXabXXXXXXXXXXXX-520-280.jpg"
            },
            {
                "title": "图片四",
                "img_url": "https://img.alicdn.com/simba/img/TB1gctlRpXXXXcmXpXXSutbFXXX.jpg"
            },
            {
                "title": "图片五",
                "img_url": "https://img.alicdn.com/tfs/TB1CyKfRVXXXXbqXXXXXXXXXXXX-520-280.jpg"
            }
        ],
        is_dots:true,
        swiper_data_num:0,
        swiperCurrent: 0,
        swiper_style:1
    },
    onLoad:function(){
        this.setData({ swiper_data_num: this.data.img_data.length});
    },
    swiperChange: function (e) {
        this.setData({swiperCurrent: e.detail.current});
    },
    //改变轮播图样式
    chang_swiper_style:function(e){
        var s_id = e.currentTarget.id;
        if (s_id == 2 || s_id == 3 || s_id == 4){
            this.setData({ is_dots: false });
        } else if (s_id == 1){
            this.setData({ is_dots: true });
        }
        this.setData({ swiper_style: s_id});
    }
})
