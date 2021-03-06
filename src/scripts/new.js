const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
// const newTpl = require("./views/new.html")
const logRes = require("./utils/logRes")
const newController = require('./controllers/new.controller')
const userController = require("./controllers/userLR.controller")


$("#root").html(indexTpl)

;(async () => {
    let html = await newController.render()
    $("#container").html(html + footerTpl + logresTpl)
    userController.usersAuthentication()
    logRes.lr()
    userController.LogRes();
})()
