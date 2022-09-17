const express = require('express');
const server = express();
const PORT = 4444;

server.get('/',(req,res,next)=>{
    res.send('Hello Welcome to my APP!');
})

server.get('/hello',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})

// http://localhost:4444/greet?name=Dhruv
// http://localhost:4444/greet?name=Dhruv&location=Delhi
server.get('/greet',(req,res)=>{
    console.log(req);
    res.send(`<h1>Hello ${req.query.name}, you are located at ${req.query.location}</h1>`);
    // res.send(`<h1>Hello ${req.query.name}</h1>`);
})

// http://localhost:4444/salutation/Kartik
server.get('/salutation/:name',(req,res)=>{
    console.log(req);
    res.send(`<h1>Hi ${req.params.name}, there learning express</h1>`);
})

server.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}/`);
})
// localhost->127.0.0.1