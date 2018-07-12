const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
const homeTpl = require("./views/home.html")

const logRes = require("./utils/logRes")

const userController = require("./controllers/userLR.controller")
const commonController = require("./utils/commonController")

var wsCache = new WebStorageCache();
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

userController.usersAuthentication()
logRes.lr();
userController.LogRes();
commonController.changeClass()

var mySwiper = new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop: true,
    autoplay:5000,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
})


