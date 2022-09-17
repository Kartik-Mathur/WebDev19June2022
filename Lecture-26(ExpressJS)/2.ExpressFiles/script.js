const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');

// app.use(express.static(path.join(__dirname,'static')));
// http://localhost:4444/

app.get('/',(req,res,next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'static','index.html'));
})
/*
// http://localhost:4444/app.js
app.get('/app.js',(req,res)=>{
    res.send('console.log("Hello World");');
})

app.get('/lib.js',(req,res)=>{
    res.send('console.log("Hello library");');
})
*/

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}/`);
})