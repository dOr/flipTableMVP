var socket = io();

socket.on('connect', function(d) {
    console.log('Connected to server...');
});

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {

        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        // gamma: left to right
        var leftToRight = event.gamma;
        // beta: front back motion
        var frontToBack = event.beta;

        socket.emit('dOr', {
            alpha: rotateDegrees,
            gamma: leftToRight,
            beta: frontToBack
        })
    }, true);
}

socket.on('broadcast', function(d) {
    console.log(d);
})