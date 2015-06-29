var express      = require('express');
var app          = express();
var port         = process.env.PORT || 9000;
var io           = require('socket.io').listen(app.listen(port));

//Add Sockets Events Handler
 io.on('connection',function(socket, a, b){

    console.log(socket.id + ' connected');
    
    socket.on('spawn',function(d){
     // User.findById(d,function(err,tank){
     //   // socket.emit('id',{id: socket.id,tank:tank});
     // })
    });
    //On Sending Messages
    socket.on('send',function(d){
     // socket.broadcast.emit('broadcast',d);
    });

    //On client disconnecting
    socket.on('disconnect',function(){
     // socket.broadcast.emit('exit',socket.id)
    });
})

app.use(express.static(__dirname));

console.log('Listening on PORT ' + port + '....');