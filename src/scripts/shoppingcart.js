const indexTpl = require("./views/index.html")
const headerTpl = require("./views/header.html")
const footerTpl = require("./views/footer.html")
const logresTpl = require("./views/logres.html")
const logRes = require("./utils/logRes")
const userController = require("./controllers/userLR.controller")

const shoppingcartController = require("./controllers/shoppingcart.controller")
const commonController = require("./utils/commonController")
// commonController.changeClass()

/*----------页面渲染----------*/
$("#root").html(indexTpl)

userController.usersAuthentication()

;(async () => {
    let html = await shoppingcartController.render()

    $("#container").html(html + footerTpl)


    //radio的选中和取消选中注意异步加载否则会在没有元素的时候执行没有效果
    ShoppingCart.shopRido();

    //添加修改数量以及删除商品
    ShoppingCart.shopAddSub();

})()
/*----------页面渲染结束----------*/


const ShoppingCart = {

    shopRido(){
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
    },


    //添加修改数量以及删除商品
    shopAddSub() {
        $(".cart_jia").on("click",function(event){
            var shopNumEle = $(event.target).parents("tr").find(".shopNum");
            var saleEle = $(event.target).parents("tr").find(".td_price");
            var allSaleEle = $(event.target).parents("tr").find(".td_totalprice");
            console.log(allSaleEle)
            var shopnum = shopNumEle.val();
            // var id = shopNumEle.attr("data-id");
            shopNumEle.val(++shopnum);
            var allsale = saleEle.text()*shopnum;
            allSaleEle.text(allsale+".00");
            // this.setBagCookieNum(id,shopnum)
        }.bind(this));

        $(".cart_jian").on("click",function(){
            var shopNumEle = $(event.target).parents("tr").find(".shopNum");
            var saleEle = $(event.target).parents("tr").find(".td_price");
            var allSaleEle = $(event.target).parents("tr").find(".td_totalprice");
            var shopnum = shopNumEle.val();
            // var id = shopNumEle.attr("data-id");
            shopnum == 1 ? shopnum : --shopnum;
            shopNumEle.val(shopnum);
            var allsale = saleEle.text()*shopnum;
            allSaleEle.text(allsale+".00");
            // this.setBagCookieNum(id,shopnum)
        }.bind(this));

        $(".cp_del").on("click",function(event){
            var shopNumEle = $(event.target).parents("tr").find(".shopNum");
            // var id = shopNumEle.attr("data-id");
            // this.delBagCookieId(id);
        }.bind(this));

        $(".shopNum").on("change",function(event){
            var shopnum = $(event.target).val();
            var id = $(event.target).attr("data-id");
            var saleEle = $(event.target).parents("tr").find(".td_price");
            var allSaleEle = $(event.target).parents("tr").find(".td_totalprice");
            var allsale = saleEle.text()*shopnum;
            allSaleEle.text(allsale+".00");
            // this.setBagCookieNum(id,shopnum);
        }.bind(this))
    },


}