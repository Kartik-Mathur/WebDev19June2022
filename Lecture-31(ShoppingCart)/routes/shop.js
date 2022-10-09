const path = require('path');
const express = require('express');
const router = express.Router();
const products = require('./admin').products;
const shopController =   require('../controllers/shop');
router.get('/',shopController.getShop);


module.exports=router;