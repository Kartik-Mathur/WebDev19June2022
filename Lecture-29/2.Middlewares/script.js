const express = require('express');
const app = express();
const PORT = 4444;

function m1(req,res,next){
    console.log('Running m1');
    next();
}

function m2(req,res,next){
    console.log('Running m2');
    next();
}

function m3(req,res,next){
    console.log('Running m3');
    next();
}

app.use(m1);
app.use(m2);
app.use(m3);

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/teachers/addteacher',(req,res)=>{
    res.send('Hi! There');
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})