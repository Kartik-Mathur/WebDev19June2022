// const products = [];
const Product = require('../models/product');

module.exports.getProductList = (req,res,next)=>{
    Product.getAllProducts((products)=>{
        res.render(
            './admin/product-list',{
                path:'/admin/product-list',
                products,
                hasProducts: products.length>0
            }
        )
    })
};

module.exports.postAddProducts = (req,res,next)=>{
    console.log(req.body);
    let newProduct = new Product(req.body.newProduct,
        req.body.price,
        req.body.description,
        req.body.imageUrl
    );
    // let product = {
    //     name: req.body.newProduct,
    //     description: req.body.description,
    //     imageUrl: req.body.imageUrl,
    //     price: req.body.price
    // };
    newProduct.save();
    // products.push(product);
    // console.log(products);
    res.redirect('/');
};

// module.exports.products = products;