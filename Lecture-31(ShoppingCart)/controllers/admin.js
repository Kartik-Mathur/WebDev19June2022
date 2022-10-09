// const products = [];
const Product = require('../models/product');

module.exports.getProductList = (req, res, next) => {
    Product.getAllProducts((products) => {
        res.render(
            './admin/product-list', {
            path: '/admin/product-list',
            products,
            hasProducts: products.length > 0
        }
        )
    })
};

module.exports.postAddProducts = (req, res, next) => {
    console.log(req.body);
    let newProduct = new Product(
        null,
        req.body.newProduct,
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

module.exports.getAddProducts = (req, res, next) => {
    res.render('./admin/add-product');
}

module.exports.getEditProduct = (req,res,next)=>{
    const productId = req.query.productId;
    // console.log(productId);
    Product.getAllProducts((products)=>{
        let product = products.find(p=>p.id == productId);
        res.render('./admin/edit-product',{
            product
        });
        // let productIndex = products.findIndex((p)=>{
        //     return p.id == productId
        // });
    })
}