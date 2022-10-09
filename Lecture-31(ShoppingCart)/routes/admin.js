const path = require('path');
const express = require('express');
const router = express.Router();
const adminController =  require('../controllers/admin');

router.get('/product-list',adminController.getProductList);

router.get('/add-product',adminController.getAddProducts);
router.post('/add-product',adminController.postAddProducts);

router.get('/edit-product',adminController.getEditProduct);

module.exports.router=router;