

function drawMap(chosenEl) {

    // Declaring variables

    var paths = document.querySelectorAll('path');
    var button = document.querySelector('button');
    var animating = true;
    var width = document.getElementById(chosenEl).clientWidth;
    var height = document.getElementById(chosenEl).clientHeight;
    var optionsBackground, bsBackground, optionsPath, bsPath, optionsErase, bsErase;


    // Random curves for background

    optionsBackground = {
        animation: 'points',
        points: 10,
        inkAmount: 5,
        size: 300,
        frames: 10,
        frameAnimation: true,
        splashing: false,
        image: '../imgs/ship-bg.png',
        centered: true,
        queue: true,
        width: width,
        height: height,
        el: chosenEl
    };
    bsBackground = new Brushstroke(optionsBackground);


    // Options for text (SVG paths)

    optionsPath = {
        animation: 'path',
        inkAmount: 2,
        frames: 20,
        frameAnimation: true,
        color: 'white',
        width: 1000,
        height: 300
    };
    bsPath = new Brushstroke(optionsPath);


    // Function to start the animation

    function runAnimation() {
        // Draw a straight line
        bsBackground.draw({
            points: [0, height / 2 - 40, width, height / 3]
        });

        // Draw another straight line
        bsBackground.draw({
            points: [width, height / 2, 0, height / 1.5 - 40]
        });

        // Draw a curve generated using 20 random points
        bsBackground.draw({
            inkAmount: 3,
            frames: 100,
            size: 200,
            splashing: true,
            points: 20
            // end: toggleButton
        });

        // Draw each letter of the text, with a delay among them
        var delay = 0;
        for (var i = 0; i < paths.length; i++) {
            bsPath.draw({path: paths[i], delay: delay});
            delay += 0.5;
        }
    }

    runAnimation();

};
