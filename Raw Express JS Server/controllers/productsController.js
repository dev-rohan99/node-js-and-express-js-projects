// call modules
const fs = require('fs');
const path = require('path');


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
const getAllProducts = (req, res) => {

    if(products.length > 0){
        res.status(200).json(products);
    }else{
        res.status(404).json({
            alert : 'Data not found. Please create your Product data!'
        });
    }

}

// get single product data
const getSingleProduct = (req, res) => {
    // let getPSlug = req.params.pSlug;
    let getPId = req.params.pSlug;

    if( products.some(data => data.pSlug == getPId) ){
        res.status(200).json(products.find(data => data.id == getPId));
    }else{
        res.status(404).json({
            alert : 'Data not found, try again!'
        });
    }

    
}

// post single product data
const createSingleProduct = (req, res) => {

    if( req.body.pName == '' || req.body.pSlug == '' || req.body.pRegularPrice == '' || req.body.pSalePrice == '' || req.body.pImage == '' || req.body.brand == '' || req.body.pName == undefined || req.body.pSlug == undefined || req.body.pRegularPrice == undefined || req.body.pSalePrice == undefined || req.body.pImage == undefined || req.body.brand == undefined ){

        res.status(400).json({
            alert : 'All key are required!'
        });

    }else{

        products.push({
            id : getLatestId(),
            pName : req.body.pName,
            pSlug : req.body.pSlug,
            pRegularPrice : req.body.pRegularPrice,
            pSalePrice : req.body.pSalePrice,
            pImage : req.body.pImage,
            brand : req.body.brand
        });
    
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products));
    
        res.status(201).json({
            message : 'Data created successful'
        });

    }

}

// update single product data
const updateSingleProduct = (req, res) => {

    // let getPSlug = req.params.pSlug;
    let getPId = req.params.id;

    if( products.some((data) => data.id == getPId) ){


        products[products.findIndex((data) => data.id == getPId)] = {
            id : getPId,
            ...req.body
        };

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products));

        res.status(200).json({
            message : 'Updated complete!',
        });

    }else{
        res.status(400).json({
            message : 'Try again!'
        });
    }

}

// delete single product data
const deleteSingleProduct = (req, res) => {

    let pId = req.params.id;

    if( products.some(data => data.id == pId) ){

        let updatedData = products.filter((data) => data.id != pId);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(updatedData));
        res.status(202).json({
            message : 'Student data deleted!'
        });

    }else{

        res.status(400).json({
            alert : 'Product not found'
        });

    }

}



module.exports = {
    getAllProducts,
    getSingleProduct,
    createSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}



