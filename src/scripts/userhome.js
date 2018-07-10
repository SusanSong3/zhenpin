const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const userhomeController = require("./controllers/userhome.controller")

$("#root").html(indexTpl)
;(async () => {
    let html = await userhomeController.render()
    $(".container").html(headerTpl + html + footerTpl)
    userhomeController.changepic()
})()
