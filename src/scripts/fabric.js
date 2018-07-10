const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
// const newTpl = require("./views/new.html")

const fabricController = require('./controllers/fabric.controller')

$("#root").html(indexTpl)


;(async () => {
    let html = await fabricController.render()
    $(".container").html(headerTpl + html + footerTpl)

})()
