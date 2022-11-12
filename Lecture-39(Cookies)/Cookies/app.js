const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));

const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile');
app.use('/',loginRouter);
app.use('/profile',profileRouter);



app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})