// const userModel = require('../models/userMain.model')
const shoppingCartTpl = require('../views/shoppingcart.html')
const userController = {
    async render(){
        // let result = await userModel.find()
        // console.log(result);
        // let fresult = result.data.Category
        // console.log(fresult);
        // let html = template.render(userHomeTpl,fresult)
        let html = template.render(shoppingCartTpl)
        // console.log(html);
        return html
    },
}

module.exports = userController