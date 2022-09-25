const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended: true}));
app.set('view engine','hbs');

app.use('/admin',require('./routers/admin'));
app.use('/user',require('./routers/user'));



app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})