const express = require('express');
const route  = express.Router();
// const products = require('../data/products');
const shopController = require('../controller/shop');

route.get('/',shopController.getShop);
route.get('/get-cart',shopController.getCart);
route.post('/add-to-cart',shopController.postAddToCart);

module.exports = route;