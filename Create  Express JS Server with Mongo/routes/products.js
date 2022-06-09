// call modules
const express = require('express');
const router = express.Router();
// import controllers
const {getAllProducts, getSingleProduct, createSingleProduct, updateSingleProduct, deleteSingleProduct} = require('../controllers/productsController');


// // get request
// router.get('/', getAllProducts);

// // get single request
// router.get('/:pSlug', getSingleProduct);

// // post request
// router.post('/', createSingleProduct);

// // put request
// router.put('/:pSlug', updateSingleProduct);

// // patch request
// router.patch('/:pSlug', updateSingleProduct);

// // delete request
// router.delete('/:id', deleteSingleProduct);


// get & post request
router.route('/').get(getAllProducts).post(createSingleProduct);

// get single, put & patch request
router.route('/:id').get(getSingleProduct).put(updateSingleProduct).patch(updateSingleProduct);

// delete request
router.route('/:id').delete(deleteSingleProduct);


module.exports = router;
