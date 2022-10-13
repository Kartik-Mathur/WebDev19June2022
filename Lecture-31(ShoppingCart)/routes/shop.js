const path = require('path');
const express = require('express');
const router = express.Router();
const products = require('./admin').products;
const shopController =   require('../controllers/shop');

router.get('/',shopController.getShop);
router.get('/cart',shopController.getCart);
router.post('/add-to-cart',shopController.postAddToCart);
router.post('/delete-cart-item',shopController.postAddCartItem);


module.exports=router;