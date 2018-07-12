
const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

const userhomeController = require("./controllers/userhome.controller")

$("#root").html(indexTpl)
userController.usersAuthentication()
;(async () => {
    let html = await userhomeController.render()
    $("#container").html(html + footerTpl)
    userhomeController.changepic()
    require('./routes/route')

})()


