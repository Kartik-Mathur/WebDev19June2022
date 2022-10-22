const express = require('express');
const route  = express.Router();
// const products = require('../data/products');
const shopController = require('../controller/shop');

route.get('/',shopController.getShop);

module.exports = route;