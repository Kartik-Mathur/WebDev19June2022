const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

const server = require('http').createServer(app);
const io = socket(server);
let userIdMap = {};

io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.emit('loggedIn');
    socket.on('chat',(details)=>{
        console.log(userIdMap[details.id],"said",details.message);
        
    })

    // Loggin hone ke time 
    socket.on('startChat',(data)=>{
        userIdMap[data.id] = data.name;
        socket.emit('chatDone');
    })
})

app.use('/',express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));


server.listen(4446, () => {
    console.log('http://localhost:4446');
})