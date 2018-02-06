
var express = require('express');
var socket = require('socket.io');
var axios = require('axios');

var app = express();

app.get('/cats', (req, res, next) => {
    axios({
        method:'get',
        url: 'https://catfact.ninja/fact?max_length=200',
        
    }).then(({data}) => {
        res.json(data)
     });
    }) 

server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        console.log(data)
        io.emit('RECEIVE_MESSAGE', data);
    })
});

