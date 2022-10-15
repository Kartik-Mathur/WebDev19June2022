// const products =  require('./admin').products;
const Product = require('../models/product');
const Cart = require('../models/cart');

module.exports.getShop = (req, res, next) => {
    Product
        .getAllProducts()
        .then((data) => {
            console.log(data[0]);
            res.render(
                './shop/shop', {
                path: '/',
                products:data[0],
                hasProducts: data[0].length > 0
            })
        })
        .catch(err => {
            console.log("error");
        })
    // Product.getAllProducts((products)=>{
    //     res.render(
    //         './shop/shop',{
    //             path:'/',
    //             products,
    //             hasProducts: products.length>0
    //         }
    //     )
    // })

};

module.exports.postAddToCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.getAllProducts(products => {
        const cartMeiAddHoneWalaProduct = products.find(p => p.id == productId);
        // console.log(cartMeiAddHoneWalaProduct);
        Cart.addToCart(productId, Number(cartMeiAddHoneWalaProduct.price), () => {
            res.redirect('/');
        });
    })
}

module.exports.getCart = (req, res, next) => {
    // {products:[{id:5,qty:2},{id:4,qty:2},{id:3,qty:1}], totalPrice: 350}
    Cart.getCart(cart => {
        Product.getAllProducts(products => {
            const cartProducts = cart.products;
            console.log(cart);
            const myCartProducts = [];
            cartProducts.forEach(element => {
                let p = products.find(product => product.id == element.id);
                p.qty = element.qty;
                myCartProducts.push(p);
            });

            res.render('./shop/cart', {
                products: myCartProducts,
                totalPrice: cart.totalPrice,
                hasProducts: myCartProducts.length > 0
            });
        })
    })
}

module.exports.postAddCartItem = (req, res, next) => {
    const productId = req.body.productId;
    Cart.deleteCartItem(productId, () => {
        res.redirect('/cart');
    });
}