const express = require('express');
const app = express();
const PORT = 4444;

const calculateFare = require('./fare');

app.get('/hello',(req,res)=>{
    res.send('hello');
})


module.exports = app;
// app.listen(PORT,()=>{
//     console.log('http://localhost:'+PORT);
// })