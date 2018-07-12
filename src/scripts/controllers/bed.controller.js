const bedModel = require('../models/bed.model')
const bedTpl = require('../views/bed.html')
const bedController = {
    async render(){
        let result = await bedModel.find()
        // console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(bedTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = bedController