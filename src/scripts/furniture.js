const logRes = require("./utils/logRes")
const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")

const furnitureController = require('./controllers/furniture.controller')

$("#root").html(indexTpl)

var storage=window.localStorage;
if(storage.telephone){
    console.log('storage',)
    var header = template.render(headerTpl, wsCache.get('telephone'))
}else{
    console.log('NOTstorage')
    var header = template.render(headerTpl, {telephone: '', stuts:false})
}
$("#header").html(header)

;(async () => {
    let html = await furnitureController.render()
    $("#container").html(html + footerTpl + logresTpl)

})()


logRes.lr()