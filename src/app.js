var isFlipping = false;

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
    pDor = {
        alpha: dor.alpha,
        gamma: dor.gamma,
        beta: dor.beta
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

        var diff = dor.gamma - pDor.gamma;
        var diffEl = document.getElementById('diff');

        diffEl.innerText = Math.floor(diff);
        if(Math.abs(diff) > 2) {
            isFlipping = true;
            if(Math.abs(dor.gamma - 0) < 1) {
                var flipEl = document.getElementById('diff');
                flipEl.innerText = '(╯°□°)╯︵ ┻━┻' ;
            }
        } else {
            isFlipping = false;
        }


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

