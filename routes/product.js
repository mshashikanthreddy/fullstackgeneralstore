const express = require('express');

const userController = require('../controllers/product');

const router = express.Router();

router.get('/product/get-details' , userController.getProductDetails);

router.post('/product/post-details', userController.postProductDetails);

router.put('/product/update-details/:id', userController.updateProductDetails);

module.exports = router;