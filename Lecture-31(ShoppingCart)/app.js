const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const adminRoute = require(path.join(__dirname,'routes','admin')).router;
const shopRoute = require(path.join(__dirname,'routes','shop'));
// /admin/add-product
app.use('/admin',adminRoute);
app.use('/',shopRoute);


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});