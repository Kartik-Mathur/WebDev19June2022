// const products = require('../data/products');
const db = require('../util/database');

module.exports = class Product{
    constructor(name,price,description,imageUrl){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    
    save(){
        return db.execute(
            `INSERT INTO products(name, price, description,imageUrl)
            VALUES (?,?,?,?)`,
            [this.name,this.price,this.description,this.imageUrl]
        )
    }

    static getAllProducts(){
        return db.execute(`SELECT * FROM products`);
    }
};