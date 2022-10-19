const express = require('express');
const route  = express.Router();

const products = require('../data/products');

const adminController = require('../controller/admin');

route.get('/product-list',adminController.getProductList);
route.get('/add-product',adminController.getAddProduct);
route.post('/add-product',adminController.postAddProduct);


module.exports = route;