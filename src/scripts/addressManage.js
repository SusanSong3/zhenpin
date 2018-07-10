const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const addressManageController = require("./controllers/addressManage.controller")

$("#root").html(indexTpl)
;(async () => {
    let html = await addressManageController.render()
    $(".container").html(headerTpl + html + footerTpl)
    addressManageController.changepic()
})()
