const express = require('express');
const app = express();
const PORT = 4444;

const calculateFare = require('./fare');

app.get('/hello',(req,res)=>{
    res.send('hello');
})

app.get('/fare',(req,res)=>{
    let fare = calculateFare(req.query.km,req.query.min);
    // console.log(fare);
    res.send(''+fare);
})

module.exports = app;
// app.listen(PORT,()=>{
//     console.log('http://localhost:'+PORT);
// })