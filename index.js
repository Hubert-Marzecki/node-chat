// load express
const express = require('express');
// load - just make colors
let randomColor = require('randomcolor');
// unique ID for users
const uuid = require('uuid');

// init express - web framework for js - routing, templates, middleware
const app = express();

//middlewares
// build static files (img, css, js) - it's middleware function
app.use(express.static('public'));

//routes
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/client/index.html');
});

//Listen on port 5000
server = app.listen( process.env.PORT || 5000);
// init socket on server

const io = require("socket.io")(server);

const users = []
const connections = []
//listen on every connection
io.on('connection', (socket) => {
    console.log("new user" + users);
    //add the new socket to the connections array
    connections.push(socket)
    // init color for socket from 
    let color = randomColor;

    // create name for current user
    socket.username = 'Świerzak';
    socket.color = color;

    socket.on('change_username', data => {
        // create random id for user 
        let id = uuuid.v4();
        socket.id = id;
        socket.username = data.nickName;
        users.push({id, username: socket.username, color:socket.color})
        updateUsernames();
    })
})

const updateUsernames = () => {
    io.sockets.emit('get users', users)
}

const newMessageEvent = "new_message"
// listen to message
socket.on(newMessageEvent, data => {
    // get new message info
    // emit listener -> take message and take info passed on socket, username color
    io.sockets.emit(newMessageEvent, {message: data.message, username: socket.username, color: socket.color })
})
