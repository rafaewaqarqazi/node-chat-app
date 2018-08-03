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
    
    socket.emit('newMessage',{
        from:'Rafae',
        text:'See Ya',
        createdAt:123445
    });

    socket.on('createMessage',(message)=>{
        console.log('Create Message',message);
        
    });

    socket.on('disconnect',()=>{
        console.log('User Was Disconnected!');
        
    });
});

server.listen(port,()=>{
    console.log(`Server is up on PORT ${port}`);
});

