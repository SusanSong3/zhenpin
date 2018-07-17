const bedModel = require('../models/bed.model')
const bedTpl = require('../views/bed.html')
const bedController = {
    async render(){
        let result = await bedModel.find()
        console.log(result.data.msg);
        let html = template.render(bedTpl,{msg:result.data.msg})
        console.log(html);
        return html
    }
}
   
module.exports = bedController