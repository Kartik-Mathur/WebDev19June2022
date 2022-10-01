const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));

app.set('view engine','hbs');

app.use('/admin',require('./routers/admin').Router);
app.use('/user',require('./routers/user'));



app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})