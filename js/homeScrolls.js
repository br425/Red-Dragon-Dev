

    // init controller
    // var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%", vertical:false}});
    // var controller = new ScrollMagic.Controller({vertical: false});

    // // build scenes
    // new ScrollMagic.Scene({triggerElement: "#voyageBG"})
    //                 .setTween("#voyageBG > div", {x: "70%", ease: Linear.easeNone})
    //                 .addTo(controller);

    // var tween = new TimelineMax ()
    // .add([
    //     TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
    //     TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
    // ]);

    // // build scene
    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: $(window).width()})
    //             .setTween(tween)
    //             .addTo(controller);


    // new ScrollMagic.Scene({triggerElement: "#parallax1"})
    //                 .setTween("#parallax1 > div", {y: "60%", ease: Linear.easeNone})
    //                 .addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#parallax2"})
    //                 .setTween("#parallax2 > div", {y: "60%", ease: Linear.easeNone})
    //                 .addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#parallax3"})
    //                 .setTween("#parallax3 > div", {y: "60%", ease: Linear.easeNone})
    //                 .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#parallax4"})
    //                 .setTween("#parallax4 > div", {y: "60%", ease: Linear.easeNone})
    //                 .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#parallax5"})
    //                 .setTween("#parallax5 > div", {y: "60%", ease: Linear.easeNone})
    //                 .addTo(controller);




                        // init controller
var controller = new ScrollMagic.Controller();


// Transition to Archive Section

var tween = TweenMax.to("#shipBG", 0.5, {right:0});
var scene = new ScrollMagic.Scene({triggerElement: "#toArchiveTrigger", duration: "200%"})
                .setTween(tween)
                .addTo(controller);
// var tween = TweenMax.to("#voyageInfo", 0.5, {opacity:0});
// var scene = new ScrollMagic.Scene({triggerElement: "#toArchiveTrigger", duration: "200%"})
//                 .setTween(tween)
//                 .addTo(controller);

// var tween = TweenMax.from("#archiveInfo", 0.5, {opacity:0});
// var scene = new ScrollMagic.Scene({triggerElement: "#toArchiveTrigger", duration: "200%"})
//                 .setTween(tween)
//                 .addTo(controller);


var tween = TweenMax.to("#shipFG", 0.5, {left:0});
var scene = new ScrollMagic.Scene({triggerElement: "#toArchiveTrigger", duration: "200%"})
                .setTween(tween)
                .addTo(controller);


// Transition to About Section

var tween = TweenMax.to("#shipBG", 0.5, {top:-50});
var scene = new ScrollMagic.Scene({triggerElement: "#toAboutTrigger", duration: "200%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#shipFG", 0.5, {bottom:-50});
var scene = new ScrollMagic.Scene({triggerElement: "#toAboutTrigger", duration: "200%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.from("#darken", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#toAboutTrigger", duration: "200%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#homeHeader", 0.5, {top:-200});
var scene = new ScrollMagic.Scene({triggerElement: "#toAboutTrigger", duration: "200%"})
                .setTween(tween)
                .addTo(controller);

