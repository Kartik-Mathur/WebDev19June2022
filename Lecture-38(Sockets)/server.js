const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

const server = require('http').Server();
const io = socket(server);

app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended: true}));

app.listen(4444,()=>{
    console.log('http://localhost:4444');
})