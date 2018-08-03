const path = require('path');
const express = require('express');
const http = require('http');
const publicPath = path.join(__dirname,'../public');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New User Connected!');
    
    socket.on('disconnect',()=>{
        console.log('User Was Disconnected!');
        
    });
});

server.listen(port,()=>{
    console.log(`Server is up on PORT ${port}`);
});

