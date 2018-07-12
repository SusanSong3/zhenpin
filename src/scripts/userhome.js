
const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

const userhomeController = require("./controllers/userhome.controller")

$("#root").html(indexTpl)
userController.usersAuthentication()
;(async () => {
    let html = await userhomeController.render()
    $("#container").html(html + footerTpl)
    userhomeController.changepic()
    //这个引入不放在这就报错！
    require('./routes/route')   
    //地址管理页面的右侧选项卡
    $('#router-view').on('click','#add_manage a',() => {
        $('#new_address').hide();
        $('#address_manage').show();
        $('#add_manage').removeClass('active').addClass('active').siblings().removeClass('active')
    })
    $('#router-view').on('click','#add_new a',() => {
        $('#address_manage').hide();
        $('#new_address').show();
        console.log($(this));
        $('#add_new').addClass('active').siblings().removeClass('active')
    })
    // userhomeController.ordersBtn()
    
})()



