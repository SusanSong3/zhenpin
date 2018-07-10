const fabricModel = require('../models/fabric.model')
const fabricTpl = require('../views/fabric.html')
const fabricController = {
    async render(){
        let result = await fabricModel.find()
        console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(fabricTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = fabricController