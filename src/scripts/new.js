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
    userController.usersAuthentication()
    $("#container").html(html + footerTpl + logresTpl)
})()
logRes.lr(15)
userController.LogRes();
