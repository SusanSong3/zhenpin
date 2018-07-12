const userhomeModel = require('../models/userhome.model')
const userHomeTpl = require('../views/userhome.html')
//账户中心
const centerTpl = require('../views/center.html')

//我的订单
const ordersTpl = require('../views/orders.html')

//收藏页面渲染+数据模版
const colTpl = require('../views/collectionTpl.html')
const collectionTpl = require('../views/collection.html')

// 我的足迹
const historyTpl = require('../views/history.html')
//地址管理
const addressTpl = require('../views/address.html')
// 账号安全
const safetyTpl = require('../views/safety.html')

const userController = {
    async render() {
        let html = template.render(userHomeTpl)
        return html
    },
    changepic() {
        let user_avatarfile = $('.user_avatarfile')
        user_avatarfile.on('change', function () {
            let img = user_avatarfile.val()
            // $('.user_avatar img').attr('src', img)

            let file = user_avatarfile[0].files[0];
            if (typeof FileReader === 'undefined') {
                alert('buzhichi')
            }
            if (window.FileReader) {
                var reader = new FileReader()
                reader.readAsDataURL(file)
                console.log(file)
                console.log(reader)
                console.log(reader.result)
                reader.onload = function (e) {
                    alert('文件读取完成');
                    imgFile = e.target.result;
                    console.log(imgFile);
                    $(".user_avatar img").attr('src', imgFile);
                };
            }
        })
    },
    homeRender({res,req,nect}){
        res.render(centerTpl) 
    },
    addressRender({res,req,nect}){
        res.render(addressTpl) 
    },
    //我的收藏
    async collectionsRender({res,req,nect}){
        let result = await userController._colData()
        res.render(collectionTpl) 
        let div = document.getElementById('collection_box')
        div.innerHTML = result
    },
    async _colData(){
        let result = await userhomeModel.find()
        let final = result.data.Category
        console.log(final);
        let html = template.render(colTpl,final)
        // console.log(html);
        return html
    },
    //我的订单
    ordersRender({res,req,nect}){
        res.render(ordersTpl) 
        userController.ordersBtn()

    },
    ordersBtn(){
        $('#dispatched').show();
        $('.user_base').find('span').on('click',function(){
            // $('#dispatched').show().siblings().hide();
            // console.log(1);
            $(this).siblings().removeClass('active').end().show();
            let box ='#'+$(this).context.id.slice(4)
            $(box).siblings().hide().end().show();
        })
    },
    // 我的足迹
    async myHisttoryRender({res,req,nect}){
        let result = await userController._colData()
        res.render(historyTpl) 
        let div = document.getElementById('collection_box')
        div.innerHTML = result
    },
    // 账号安全
    safetyRender({res,req,nect}){
        res.render(safetyTpl)
    },
}

module.exports = userController