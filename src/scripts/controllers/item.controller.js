const itemModel = require('../models/item.model')
const itemTpl = require('../views/item.html')
const itemController = {
    async render(pid){
        let result = await itemModel.find(pid)
        
        let fresult = result.data.msg
        // console.log(fresult)
        let html = template.render(itemTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = itemController