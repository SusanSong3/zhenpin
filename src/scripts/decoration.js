const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
// const newTpl = require("./views/new.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const decorationController = require('./controllers/decoration.controller')

$("#root").html(indexTpl)


;(async () => {
    let html = await decorationController.render()
    $(".container").html(headerTpl + html + footerTpl)
    logRes.lr()
})()


