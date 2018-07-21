const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")
const furnitureController = require('./controllers/furniture.controller')

$("#root").html(indexTpl)
const commonController = require("./utils/commonController")


;(async () => {
    let html = await furnitureController.render()
    $("#container").html(html + footerTpl + logresTpl)
    userController.usersAuthentication()
    logRes.lr()
    userController.LogRes();
    commonController.changeNavClass()
})()