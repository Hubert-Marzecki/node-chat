//app.js
const express = require('express');
const app = express();
let randomColor = require('randomcolor');
const uuid = require('uuid');

//middlewares
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));

//routes
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/client/index.html');
});

//Listen on port 5000
server = app.listen( process.env.PORT || 5000);