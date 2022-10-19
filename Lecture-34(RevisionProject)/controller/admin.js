const Product = require('../model/product');
const products = require('../data/products');

module.exports.getProductList = (req,res,next)=>{
    res.render('./admin/product-list',{
        hasProducts: products.length>0,
        products:products
    })
};

module.exports.getAddProduct = (req,res,next)=>{
    res.render('./admin/add-product')
}

module.exports.postAddProduct = (req,res,next)=>{
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const newProduct = new Product(
        name,price,description,imageUrl
    );
    console.log("New Product: ",newProduct);
    newProduct.save();

    res.redirect('/');
}