const Products  = require('../model/product');

module.exports.getShop = (req,res,next)=>{
    console.log("Inside shop",req.user);
    Products
    .findAll()
    .then((products)=>{
        res.render('./shop/shop',{
            hasProducts: products.length>0,
            products:products
        })
    })
    .catch(err=>console.log(err));
}

module.exports.getCart = (req,res,next)=>{
    res.render('./shop/cart');
}