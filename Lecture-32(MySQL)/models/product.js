const fs = require('fs');
const path = require('path');
const db = require('../util/database');

module.exports = class Product {
    // new Product(null,"Reebok",20,'asda','adadsad');
    constructor(id, name, price, description, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {
        return db.execute(
            `INSERT INTO products (name, description, price,imageUrl)
            VALUES (?,?,?,?)`,
            [this.name,this.description,this.price,this.imageUrl]
        );
    }

    static getAllProducts(cb) {
        return db.execute('SELECT * FROM products');
    }


    static deleteProduct(id){
        const filePath = path.join(
            __dirname,
            "..",
            'data',
            'product.json'
        );
        this.getAllProducts((products)=>{
            const updatedProducts  = products.filter(p=>p.id != id);
            fs.writeFile(
                filePath,
                JSON.stringify(updatedProducts),
                (err) => {
                    console.log(err);
                    if (!err) console.log('Done');
            });
        })
    }

    static getProductById(id){
        return db.execute(`SELECT * FROM products WHERE id = ?`,[id]);
    }
}