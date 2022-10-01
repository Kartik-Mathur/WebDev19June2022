const path = require('path');
const express = require('express');
const router = express.Router();
const adminController =  require('../controllers/admin');

router.get('/product-list',adminController.getProductList);
router.post('/add-product',adminController.postAddProducts);

module.exports.router=router;