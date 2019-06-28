//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        txt: [
            "易知意难穷，源穷水不穷。接武上琼楼，口语成中遘。"
        ]
    },
    //事件处理函数

    onLoad: function() {
        let list = [];
        this.data.txt.forEach((v, i, arr) => {
            v = v.replace(/，/g, "").replace(/。/g, "");
            var reg = /.{5}/g;
            list.push(v.match(reg));
        })
        this.setData({
            txt: list
        });
        wx.loadFontFace({
            family: 'HYYanKaiW',
            source: 'url("http://hellofonts.oss-cn-beijing.aliyuncs.com/%E6%B1%89%E4%BB%AA%E9%A2%9C%E6%A5%B7/5.01/HYYanKaiW.ttf")',
            success(res) {
                console.log(res)
            },
            fail(err){
                console.log(err)
            }
        })
    },
    getUserInfo: function(e) {

    }
})