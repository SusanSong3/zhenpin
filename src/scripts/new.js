const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")

const logresTpl = require("./views/logres.html")
// const newTpl = require("./views/new.html")
const logRes = require("./utils/logRes")
const newController = require('./controllers/new.controller')

$("#root").html(indexTpl)


;(async () => {
    let html = await newController.render()
    $(".container").html(headerTpl + html + footerTpl + logresTpl)
    logRes.lr(15)
})()

