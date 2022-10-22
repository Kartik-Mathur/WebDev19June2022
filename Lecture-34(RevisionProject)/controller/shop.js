const Product  = require('../model/product');

module.exports.getShop = (req,res,next)=>{
    Product
    .getAllProducts()
    .then(([products,fields])=>{
        res.render('./shop/shop',{
            hasProducts: products.length>0,
            products:products
        })
    }).catch(err=>console.log(err));
}