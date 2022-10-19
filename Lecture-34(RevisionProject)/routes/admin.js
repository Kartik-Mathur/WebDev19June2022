const express = require('express');
const route  = express.Router();

const products = require('../data/products');

route.get('/product-list',(req,res,next)=>{
    res.render('./admin/product-list',{
        hasProducts: products.length>0,
        products:products
    })
})

module.exports = route;