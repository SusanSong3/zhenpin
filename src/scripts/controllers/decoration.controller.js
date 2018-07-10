const decorationModel = require('../models/decoration.model')
const decorationTpl = require('../views/decoration.html')
const decorationController = {
    async render(){
        let result = await decorationModel.find()
        console.log(result);
        let fresult = result.data.Category
        // console.log(fresult);
        let html = template.render(decorationTpl,fresult)
        // console.log(html);
        return html
    }
}
   
module.exports = decorationController