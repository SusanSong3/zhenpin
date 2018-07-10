const cartModel = require('../models/cart.model')
const cartTpl = require('../views/cart.html')
const cartController = {
    async render(){
        let result = await cartModel.find()
        console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(cartTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = cartController