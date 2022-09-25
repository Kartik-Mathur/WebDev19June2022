const express = require('express');
const app = express();
const PORT = 4444;

function decode(req,res,next){
    if(req.query.type == 'password')
        console.log('Running decode function');
    next();
}

function encode(req,res,next){
    if(req.query.type == 'password' || req.query.type == 'image')
        console.log('Running encode');
    next();
}

function compress(req,res,next){
    console.log('Running compress');
    next();
}

app.use('/abc',decode);
app.use(compress);
app.use(encode);

app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})