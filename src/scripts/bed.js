const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

const bedController = require('./controllers/bed.controller')

$("#root").html(indexTpl)



;(async () => {
    let html = await bedController.render()
    userController.usersAuthentication()
    $("#container").html(html + footerTpl + logresTpl)
    logRes.lr()
    userController.LogRes();
})()
