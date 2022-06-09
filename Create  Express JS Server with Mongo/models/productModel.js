const mongoose = require('mongoose');


const productModel = mongoose.Schema({
    pName : String,
    pSlug : String,
    pSalePrice : Number,
    pRegularPrice : Number,
    pImage : String,
    brand : String
}, {
    timestamps : true
});





module.exports = mongoose.model('Product', productModel)


