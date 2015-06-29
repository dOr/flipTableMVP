if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {

        // alpha: rotation around z-axis
               var rotateDegrees = event.alpha;
               // gamma: left to right
               var leftToRight = event.gamma;
               // beta: front back motion
               var frontToBack = event.beta;

        broadcastMovement({
            alpha: event.alpha,
            gamma: event.gamma,
            beta: event.beta
        });
    }, true);
}


function broadcastMovement(d) {
        var alpha = document.getElementById('alpha');
        var gamma = document.getElementById('gamma');
        var beta = document.getElementById('beta');

        alpha.innerText = Math.floor(d.alpha*100)/100;
        gamma.innerText = Math.floor(d.gamma*100)/100;
        beta.innerText = Math.floor(d.beta*100)/100;
};
