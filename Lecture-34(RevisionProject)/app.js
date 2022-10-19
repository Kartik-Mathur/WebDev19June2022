const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');

const adminRouter = require('./routes/admin');

app.use('/admin',adminRouter);
// app.use('/',);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})