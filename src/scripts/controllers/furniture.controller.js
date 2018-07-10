const furnitureModel = require('../models/furniture.model')
const furnitureTpl = require('../views/furniture.html')
const furnitureController = {
    async render(){
        let result = await furnitureModel.find()
        console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(furnitureTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = furnitureController