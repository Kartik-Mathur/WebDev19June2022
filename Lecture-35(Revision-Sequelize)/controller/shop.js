const Products  = require('../model/product');

module.exports.getShop = (req,res,next)=>{
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