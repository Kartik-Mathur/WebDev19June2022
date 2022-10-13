const fs = require('fs');
const path = require('path');
const Product = require('./product');
const cartFilePath = path.join(
    __dirname,
    '..',
    'data',
    'cart.json'
);
// {products:[{id:5,qty:2},{id:4,qty:2},{id:3,qty:1}], totalPrice: 350}
module.exports = class Cart{
    static addToCart(productId,price,cb){
        console.log("Price:",price);
        fs.readFile(cartFilePath,(err,fileData)=>{
            let cart = {products:[],totalPrice:0};
            if(!err){
                cart = JSON.parse(fileData);
            }

            const cartMeiIndex = cart.products.findIndex(p=>p.id==productId);
            const cartKaProduct = cart.products[cartMeiIndex];
            if(cartKaProduct){
                cartKaProduct.qty += 1;
                cart.products[cartMeiIndex] = cartKaProduct;
            }
            else{
                let cartMeiJaaneWalaNewItem = {id: productId, qty:1};
                cart.products.push(cartMeiJaaneWalaNewItem);
            }
            cart.totalPrice += price;

            fs.writeFile(cartFilePath,JSON.stringify(cart),(err)=>{
                if(!err) return cb();
                console.log(err);
            })

        })
    }

    static deleteCartItem(productId){
        fs.readFile(cartFilePath,(err,fileData)=>{
// {products:[{id:5,qty:2},{id:4,qty:2},{id:3,qty:1}], totalPrice: 350}
            const cart = JSON.parse(fileData);
            const cartProducts = cart.products;//[{id:5,qty:2},{id:4,qty:2},{id:3,qty:1}]
            let productPrice;
            const productToBeDeleted = Product.getAllProducts(products=>{
                products.find(p=>p.id == productId);
                productPrice = productToBeDeleted.price;
            })
            
            const qty = cartProducts.find(p=>p.id==productId).qty;

            const newCart = cartProducts.filter(p=>p.id!=productId);
            newCart.totalPrice -= productPrice*qty;
            fs.writeFile(cartFilePath,JSON.stringify(newCart),(err)=>{
                if(!err) return cb();
                console.log(err);
            })
        })
    }
// {products:[{id:5,qty:2},{id:4,qty:2},{id:3,qty:1}], totalPrice: 350}
    static getCart(cb){
        fs.readFile(cartFilePath,(err,fileData)=>{
            if(err) return cb();
            cb(JSON.parse(fileData));
        })
    }
};