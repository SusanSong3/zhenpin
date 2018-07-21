const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const itemTpl = require("./views/item.html")

const itemController = require('./controllers/item.controller')
const userController = require('./controllers/userLR.controller')
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

$("#root").html(indexTpl)
;(async () => {
    let history = location.search
    let pid = history.slice(3)
    console.log(pid)
    let html = await itemController.render(pid)
    $(".container").html(headerTpl + html + footerTpl)
    // userController.usersAuthentication()
    logRes.lr()
    // userController.LogRes();
    new Magnifier({
        small_ele:".small",
        focus_ele:".grayBox",
        big_ele:".big"
    })
    
})()

