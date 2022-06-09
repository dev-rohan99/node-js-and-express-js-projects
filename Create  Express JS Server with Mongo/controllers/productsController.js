// call modules
const fs = require('fs');
const path = require('path');
const { findByIdAndDelete } = require('../models/productModel');
const Product = require('../models/productModel');


// products data model
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json')).toString());


// get latest id
const getLatestId = () => {

    if(products.length > 0){
        return products[products.length - 1].id + 1;
    }else{
        return 1;
    }

}


// get all products
const getAllProducts = async (req, res) => {

    let data = await Product.find();
    res.status(200).json(data);

}

// get single product data
const getSingleProduct = async (req, res) => {
    
    let getPId = req.params.id;
    let singleData = await Product.findById(getPId);
    res.status(200).json(singleData);
    
}

// post single product data
const createSingleProduct = async (req, res) => {

    
    let data = await Product.create({
        pName : req.body.pName,
        pSlug : req.body.pSlug,
        pRegularPrice : req.body.pRegularPrice,
        pSalePrice : req.body.pSalePrice,
        pImage : req.body.pImage,
        brand : req.body.brand,
    });
    res.status(201).json({
        message : 'Data added successfil'
    });
    

}

// update single product data
const updateSingleProduct = async (req, res) => {

    // let getPSlug = req.params.pSlug;
    let getPId = req.params.id;

    await Product.findByIdAndUpdate(getPId, req.body, {
        new : true
    });

    res.status(200).json({
        message : 'Updated successful'
    });

}

// delete single product data
const deleteSingleProduct = async (req, res) => {

    let pId = req.params.id;
    await Product.findByIdAndDelete(pId);
    res.status(204).json({
        message : 'Data Deleted!'
    });

}



module.exports = {
    getAllProducts,
    getSingleProduct,
    createSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}



