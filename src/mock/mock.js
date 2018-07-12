const newProductsList = require('./new_products.json')
const furnitureList = require('./furniture.json')
const decorationList = require('./decoration.json')
const bedList = require('./bed.json')
const fabricList = require('./fabric.json')
const collectionsList = require('./collections.json')

module.exports = function(){
    return {
        "newProductsList" : newProductsList,
        "furnitureList" : furnitureList,
        "decorationList" : decorationList,
        "bedList" : bedList,
        "fabricList":fabricList,
        "collectionsList":collectionsList,
    }
}