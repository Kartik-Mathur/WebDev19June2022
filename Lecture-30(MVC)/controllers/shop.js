const products =  require('./admin').products;

module.exports.getShop =  (req,res,next)=>{
    res.render(
        './shop/shop',{
            path:'/',
            products,
            hasProducts: products.length>0
        }
    )
};