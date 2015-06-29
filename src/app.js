var socket = io();

socket.on('connect', function(d) {
    console.log(d)
})