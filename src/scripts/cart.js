const indexTpl = require("./views/index.html")

const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const cartTpl = require("./views/cart.html")

// const cartController = require('./controllers/cart.controller')

$("#root").html(indexTpl)
$(".container").html(headerTpl + cartTpl + footerTpl)

;(async () => {
    // let html = await cartController.render()
   
})()
