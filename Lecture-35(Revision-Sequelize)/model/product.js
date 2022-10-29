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

    static getProductById(id){
        return db.execute(`SELECT * FROM products WHERE id = ?`,
        [id]);
    }

    static updateProductById(id,newProduct){
        return db.execute(
            `
            UPDATE 
                products
            SET 
                name = '${newProduct.name}',
                price = '${newProduct.price}',
                description = '${newProduct.description}',
                imageUrl = '${newProduct.imageUrl}'
            WHERE
                id = ?
            `,[id]
        );
    }

    static deleteProductById(id){
        return db.execute(
            `DELETE FROM products
            WHERE id = ?`,[id]
        );
    }
};