var socket = io();

socket.on('connect', function(d) {
    console.log('Connected to server...');
});

var dBroadcastMovement = _.debounce(broadcastMovement, 100);

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        dBroadcastMovement(event);
    }, true);
}


function broadcastMovement(d) {
    socket.emit('dOr', d);
};

socket.on('broadcast', function(d) {
    var alpha = document.getElementById('alpha');
    var gamma = document.getElementById('gamma');
    var beta = document.getElementById('beta');

    console.log(d);

    alpha.innerText = d.alpha;
    gamma.innerText = d.gamma;
    beta.innerText = d.beta;
})