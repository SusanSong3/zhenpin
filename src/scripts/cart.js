const indexTpl = require("./views/index.html")

const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const cartTpl = require("./views/cart.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

// const cartController = require('./controllers/cart.controller')
const commonController = require("./utils/commonController")
// commonController.changeClass()
$("#root").html(indexTpl)
$(".container").html(headerTpl + cartTpl + footerTpl)

;(async () => {
    // let html = await cartController.render()
   
})()
