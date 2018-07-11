const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")

const userhomeSideTpl = require('./views/userhomeside.html')
console.log(userhomeSideTpl);
const userhomeController = require("./controllers/userhome.controller")

$("#root").html(indexTpl)
;(async () => {
    let html = await userhomeController.render()
    $(".container").html(headerTpl + userhomeSideTpl + footerTpl)
    // userhomeController.changepic()
})()
