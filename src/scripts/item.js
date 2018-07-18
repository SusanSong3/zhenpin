const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const itemTpl = require("./views/item.html")
// const Magnifier = require("./libs/.")

$("#root").html(indexTpl)
// console.log(itemTpl)
$(".container").html(headerTpl + itemTpl + footerTpl)

new Magnifier({
    small_ele:".small",
    focus_ele:".grayBox",
    big_ele:".big"
})

// // var wsCache = new WebStorageCache();
// var storage = window.localStorage;
// userController.usersAuthentication()
// logRes.lr();
// userController.LogRes();


// commonController.changeClass()

