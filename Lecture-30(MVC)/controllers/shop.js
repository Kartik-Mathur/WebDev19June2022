// const products =  require('./admin').products;
const Product = require('../models/product');

module.exports.getShop =  (req,res,next)=>{
    Product.getAllProducts((products)=>{
        res.render(
            './shop/shop',{
                path:'/',
                products,
                hasProducts: products.length>0
            }
        )
    })
    
};