const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use('/admin',adminRouter);
app.use('/',shopRouter);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})