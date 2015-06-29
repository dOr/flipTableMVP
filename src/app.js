var isStale = true;

var pDor = {
    alpha: null,
    gamma: null,
    beta: null
}

var dor = {
    alpha: null,
    gamma: null,
    beta: null
}

setTimeout(function() {
    var diff = dor.gamma - pDor.gamme;
    var diffEl = document.getElementById('diff');

    diffEl.innerText = Math.floor(diff);

    if(diff > 1) {
        isStale = false;
    }
}, 50)


if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {

        // alpha: rotation around z-axis
        // gamma: left to right
        // beta: front back motion
         
        pDor = {
            alpha: dor.alpha,
            gamma: dor.gamma,
            beta: dor.beta
        }

        dor = {
            alpha: event.alpha,
            gamma: event.gamma,
            beta: event.beta
        };

        broadcastMovement(dor);
    }, true);
}


function broadcastMovement(d) {
        var alpha = document.getElementById('alpha');
        var gamma = document.getElementById('gamma');
        var beta = document.getElementById('beta');

        alpha.innerText = Math.floor(d.alpha);
        gamma.innerText = Math.floor(d.gamma);
        beta.innerText = Math.floor(d.beta);
        
};

