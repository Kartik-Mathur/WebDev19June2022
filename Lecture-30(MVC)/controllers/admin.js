const products = [];

module.exports.getProductList = (req,res,next)=>{
    res.render(
        './admin/product-list',{
            path:'/admin/product-list',
            products,
            hasProducts: products.length>0
        }
    )
};

module.exports.postAddProducts = (req,res,next)=>{
    console.log(req.body);
    let product = {
        name: req.body.newProduct,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price
    };
    products.push(product);
    console.log(products);
    res.redirect('/');
};

module.exports.products = products;