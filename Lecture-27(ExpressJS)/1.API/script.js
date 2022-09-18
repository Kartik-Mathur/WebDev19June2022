const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'static')));

app.get('/information',(req,res)=>{
    console.log(req.query.username);
    console.log(req.query.password);
    console.log(req.query.mobile);
    res.send(`You entered: ${req.query.username}, ${req.query.password}, ${req.query.mobile}`);
})

app.post('/information',(req,res)=>{
    console.log(req.body);
    res.send(`You entered:${req.body.username}, ${req.body.password}, ${req.body.mobile}`);
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})