const path = require('path');
const express = require('express');
const router = express.Router();
const products = [];

router.get('/product-list',(req,res,next)=>{
    res.render(
        './admin/product-list',{
            path:'/admin/product-list',
            products,
            hasProducts: products.length>0
        }
    )
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    products.push(req.body.newProduct);
    console.log(products);
    res.redirect('/');
})


module.exports.router=router;
module.exports.products=products;