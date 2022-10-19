const express = require('express');
const route  = express.Router();
const products = require('../data/products');

route.get('/',(req,res,next)=>{
    res.render('./shop/shop',{
        hasProducts: products.length>0,
        products:products
    })
})

module.exports = route;