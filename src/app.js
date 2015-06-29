var socket = io();

socket.on('connect', function(d) {
    console.log('Connected to server...');
});

socket.on('broadcast', function(d) {
    var alpha = document.getElementById('alpha');
    var gamma = document.getElementById('gamma');
    var beta = document.getElementById('beta');

    console.log(d);

    alpha.innerText = d.alpha;
    gamma.innerText = d.gamma;
    beta.innerText = d.beta;
});

var dBroadcastMovement = _.debounce(broadcastMovement, 100);

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {

        // alpha: rotation around z-axis
               var rotateDegrees = event.alpha;
               // gamma: left to right
               var leftToRight = event.gamma;
               // beta: front back motion
               var frontToBack = event.beta;

        dBroadcastMovement({
            alpha: event.alpha,
            gamma: event.gamma,
            beta: event.beta
        });
    }, true);
}


function broadcastMovement(d) {
    socket.emit('dOr', d);
};
