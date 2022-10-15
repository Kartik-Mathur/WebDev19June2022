// const products = [];
const Product = require('../models/product');
const db = require('../util/database');

module.exports.getProductList = (req, res, next) => {
    Product.getAllProducts().then((data) => {
        res.render(
            './admin/product-list', {
            path: '/admin/product-list',
            products:data[0],
            hasProducts: data[0].length > 0
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
    newProduct.save().then(()=>{
        res.redirect('/');
    }).catch(err=>console.log(err));[]
    // products.push(product);
    // console.log(products);
};

module.exports.getAddProducts = (req, res, next) => {
    res.render('./admin/add-product');
}

module.exports.getEditProduct = (req, res, next) => {
    const productId = req.query.productId;
    // console.log(productId);
    Product.getProductById(productId).then((product)=>{
        console.log(product[0][0]);
        res.render('./admin/edit-product', {
            product:product[0][0]
        });
    })
    // Product.getAllProducts((products) => {
    //     let product = products.find(p => p.id == productId);
    //     res.render('./admin/edit-product', {
    //         product
    //     });
    //     // let productIndex = products.findIndex((p)=>{
    //     //     return p.id == productId
    //     // });
    // })
}

module.exports.postEditProduct = (req, res, next) => {
    console.log(req.body);
    let newProduct = new Product(
        req.body.productId,
        req.body.newProduct,
        req.body.price,
        req.body.description,
        req.body.imageUrl
    );
    newProduct.save();
    res.redirect('/');
}

module.exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.deleteProduct(productId);
    res.redirect('/');
}