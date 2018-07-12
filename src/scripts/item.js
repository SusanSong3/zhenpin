const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const itemTpl = require("./views/item.html")



$("#root").html(indexTpl)
$(".container").html(headerTpl + itemTpl + footerTpl)


var wsCache = new WebStorageCache();
var storage = window.localStorage;
userController.usersAuthentication()
logRes.lr();
userController.LogRes();


commonController.changeClass()

