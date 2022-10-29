const Products = require('../model/product');
// const products = require('../data/products');

module.exports.getProductList = (req, res, next) => {
    Products
        .findAll()
        .then((products) => {
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

    Products
        .create({
            name,
            price,
            description,
            imageUrl
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));

}

module.exports.getEditProduct = (req, res, next) => {
    const productId = req.query.id;
    // Products
    //     .findAll({
    //         where: {
    //             id: productId
    //         }
    //     })
    Products
    .findByPk(productId)
        .then((product) => {
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

    Products
        .findByPk(productId)
        .then((product)=>{
            product.name = name;
            product.price = price;
            product.description = description;
            product.imageUrl = imageUrl;

            product.save();
        })
        .then(() => {
            res.redirect('/');
        })
}


module.exports.getDeleteProduct = (req, res, next) => {
    const productId = req.query.id;

    Products
        .destroy({
            where:{
                id:productId
            }
        })
        .then(() => {
            res.redirect('/');
        })
}