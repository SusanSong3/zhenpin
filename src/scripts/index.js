
const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
const homeTpl = require("./views/home.html")

var wsCache = new WebStorageCache();

const logRes = require("./utils/logRes")
const commonController = require("./utils/commonController")

const userController = require("./controllers/userLR.controller")
// let storage = wsCache.get(telephone)
var storage=window.localStorage;
if(storage.telephone){
    console.log('storage',)
    var header = template.render(headerTpl, wsCache.get('telephone'))
}else{
    console.log('NOTstorage')
    var header = template.render(headerTpl, {telephone: '', stuts:false})
}

$("#root").html(indexTpl)
$("#header").html(header)
$("#container").html(homeTpl + footerTpl + logresTpl)


logRes.lr();

userController.LogRes();

commonController.changeClass()
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',   
})

