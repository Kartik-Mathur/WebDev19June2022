const Product = require('../model/product');
// const products = require('../data/products');

module.exports.getProductList = (req, res, next) => {
    Product
        .getAllProducts()
        .then(([products, fields]) => {
            // console.log(products);
            res.render('./admin/product-list', {
                hasProducts: products.length > 0,
                products: products
            })
        })
        .catch(err => console.log(err));
};

module.exports.getAddProduct = (req, res, next) => {
    res.render('./admin/add-product')
}

module.exports.postAddProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const newProduct = new Product(
        name, price, description, imageUrl
    );
    // console.log("New Product: ", newProduct);
    newProduct
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));

}

module.exports.getEditProduct = (req, res, next) => {
    const productId = req.query.id;
    Product
        .getProductById(productId)
        .then(([products, fields]) => {
            let product = products[0];
            res.render('./admin/edit-product', {
                product: product
            });
        })
}

module.exports.postEditProduct = (req, res, next) => {
    const productId = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const newProduct = new Product(
        name, price, description, imageUrl
    );

    Product
        .updateProductById(productId,newProduct)
        .then(() => {
            res.redirect('/');
        })
}


module.exports.getDeleteProduct = (req, res, next) => {
    const productId = req.query.id;

    Product
        .deleteProductById(productId)
        .then(() => {
            res.redirect('/');
        })
}