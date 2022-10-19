const express = require('express');
const route  = express.Router();

const products = [
    {name:"Reebok",price:20,description:'Amazing shoes',imageUrl:'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8&w=1000&q=80'},
    {name:"Adidas",price:120,description:'Great shoes!!',imageUrl:'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8&w=1000&q=80'}

];

route.get('/product-list',(req,res,next)=>{
    res.render('./admin/product-list',{
        hasProducts: products.length>0,
        products:products
    })
})

module.exports = route;