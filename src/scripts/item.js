const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const itemTpl = require("./views/item.html")

// const itemController = require('./controllers/item.controller')

$("#root").html(indexTpl)
$(".container").html(headerTpl + itemTpl + footerTpl)

// ;(async () => {
//     let html = await newController.render()
//     $(".container").html(headerTpl + html + footerTpl)

// })()
new Magnifier({
    small_ele:".small",
    focus_ele:".grayBox",
    big_ele:".big"
})

