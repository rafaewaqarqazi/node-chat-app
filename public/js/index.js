var socket = io();
socket.on('connect',function(){
    console.log('Connected to server');

    socket.emit('createMessage',{
        from:'rafaewaqar@gmail.com',
        text:'Hi'
    });

    socket.on('newMessage',function(message){
        console.log('newMessage',message);
        
    });
});

socket.on('disconnect',function(){
    console.log('Disconnected!');
});

