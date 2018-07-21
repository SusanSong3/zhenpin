const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
// const newTpl = require("./views/new.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

const fabricController = require('./controllers/fabric.controller')
const commonController = require("./utils/commonController")
// commonController.changeClass()

$("#root").html(indexTpl)


;(async () => {
    let html = await fabricController.render()
    $("#container").html(html + footerTpl + logresTpl)
    userController.usersAuthentication()
    logRes.lr()
    userController.LogRes();
})()

