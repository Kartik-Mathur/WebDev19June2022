const path = require('path');
const express = require('express');
const router = express.Router();
const products = require('./admin').products;
router.get('/',(req,res,next)=>{
    res.render(
        './shop/shop',{
            path:'/',
            products,
            hasProducts: products.length>0
        }
    )
});


module.exports=router;