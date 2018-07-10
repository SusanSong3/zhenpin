const logRes = require("./utils/logRes")

const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
// const newTpl = require("./views/new.html")

const bedController = require('./controllers/bed.controller')

$("#root").html(indexTpl)


;(async () => {
    let html = await bedController.render()
    $(".container").html(headerTpl + html + footerTpl)

})()
logRes.lr()