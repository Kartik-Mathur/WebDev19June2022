const fs = require('fs');
const path = require('path');
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
        // 'this' belongs to the Product that we create
        const filePath = path.join(
            __dirname,
            "..",
            'data',
            'product.json'
        );

        fs.readFile(filePath, (err, fileData) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileData);
            }
            if (this.id) {
                let productIndex = products.findIndex(p => p.id == this.id);
                let updatedProducts = [...products];
                updatedProducts[productIndex] = this;
                fs.writeFile(
                    filePath,
                    JSON.stringify(updatedProducts),
                    (err) => {
                        console.log(err);
                        if (!err) console.log('Done');
                });
            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(
                    filePath,
                    JSON.stringify(products),
                    (err) => {
                        console.log(err);
                        if (!err) console.log('Done');
                });
            }
        })

    }

    static getAllProducts(cb) {
        const filePath = path.join(
            __dirname,
            "..",
            'data',
            'product.json'
        );

        fs.readFile(filePath, (err, fileData) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileData);
                cb(products);
            }
            else {
                console.log(err);
            }
        })
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
}