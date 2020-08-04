const PORT = 3000;

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

rooms = ['room1', 'room2', 'room3'];

io.on('connection',socket =>{
    console.log(socket.id);
    // console.log(io.clients().connected);
    socket.emit('hello', 'world');
})

server.listen(PORT, function(){
    console.log("server started at port",PORT);
    server.emit('serverStarted');
});
module.exports = server;
