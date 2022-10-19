const products = require('../data/products');

module.exports = class Product{
    constructor(name,price,description,imageUrl){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    
    save(){
        products.push(this);
    }
};