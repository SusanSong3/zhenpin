const indexTpl = require("./views/index.html")

const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const submitOrdersTpl = require("./views/submitOrders.html")

const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

// const cartController = require('./controllers/cart.controller')

userController.usersAuthentication()
$("#root").html(indexTpl)
$(".container").html(headerTpl + submitOrdersTpl + footerTpl)

logRes.lr()
userController.LogRes();