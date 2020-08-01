const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
rooms = ['room1', 'room2', 'room3']

io.on('connection',socket =>{
    socket.on('requestJoin',(req)=>{
        socket.join(req.meetingName);
        console.log(io.sockets.adapter.sids);
    })
})

server.listen(3000);
