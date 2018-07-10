const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const shoppingcartController = require("./controllers/shoppingcart.controller")

$("#root").html(indexTpl)
;(async () => {
    let html = await shoppingcartController.render()
    $(".container").html(headerTpl + html + footerTpl)

    //radio的选中和取消选中注意异步加载否则会在没有元素的时候执行没有效果
    $('input:radio').click(function(){
        //alert(this.checked);

        var $radio = $(this);
        // if this was previously checked
        if ($radio.data('waschecked') == true){
            $radio.prop('checked', false);
            $radio.data('waschecked', false);
        } else {
            $radio.prop('checked', true);
            $radio.data('waschecked', true);
        }
    });
})()

