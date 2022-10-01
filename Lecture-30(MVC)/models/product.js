const fs = require('fs');
const path =  require('path');
module.exports =  class Product{
    // new Product("Reebok",20,'asda','adadsad');
    constructor(name,price,description,imageUrl){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save(){
        // 'this' belongs to the Product that we create
        const filePath = path.join(
            __dirname,
            "..",
            'data',
            'product.json'
        );
        
        fs.readFile(filePath,(err,fileData)=>{
            let products = [];
            if(!err){
                products = JSON.parse(fileData);
            }
            products.push(this);
            fs.writeFile(
                filePath,
                JSON.stringify(products),
                (err)=>{
                    console.log(err);
                    if(!err) console.log('Done');
            })
        })
        
    }

    static getAllProducts(cb){
        const filePath = path.join(
            __dirname,
            "..",
            'data',
            'product.json'
        );
        
        fs.readFile(filePath,(err,fileData)=>{
            let products = [];
            if(!err){
                products = JSON.parse(fileData);
                cb(products);
            }
            else{
                console.log(err);
            }
        })
    }
}