const newModel = require('../models/new.model')
const newTpl = require('../views/new.html')
const newController = {
    async render(){
        let result = await newModel.find('/api/poslist')
        console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(newTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = newController