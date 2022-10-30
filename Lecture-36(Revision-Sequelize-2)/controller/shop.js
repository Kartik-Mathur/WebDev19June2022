const Products = require('../model/product');

module.exports.getShop = (req, res, next) => {
    console.log("Inside shop", req.user);
    Products
        .findAll()
        .then((products) => {
            res.render('./shop/shop', {
                hasProducts: products.length > 0,
                products: products
            })
        })
        .catch(err => console.log(err));
}

module.exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then(cart=>{
            return cart.getProducts();
        }).then(products=>{
            res.render('./shop/cart',{
                hasProducts: products.length>0,
                products:products
            });
        }).catch(err=>console.log(err))
}

module.exports.postAddToCart = (req, res, next) => {
    const productId = req.body.id;
    let mycart;
    req.user
        .getCart()
        .then(cart => {
            mycart = cart;
            return cart.getProducts({
                where: {
                    id: productId
                }
            });
        })
        .then(products => {
            let product;
            if (products) {
                product = products[0];
            }
            else { // Product exist nhi krta cart mei
                let q = 1;
                return Products.findByPk(productId)
                    .then(product => {
                        mycart.addProduct(product, { through: { quantity: q } });
                    })

            }
        }).then(()=>{
            res.redirect('/');
        }).catch(err=>console.log(err))
}
