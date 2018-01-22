


                        // init controller
var controller = new ScrollMagic.Controller();

// Transition From Content to Departure

var tween = TweenMax.fromTo("#locationBox", 0.5, {display:'none'},{display:'block'});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.fromTo("#englandTitle", 0.5, {opacity:0},{opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);
var tween = TweenMax.fromTo("#fuerteventuraTitle", 0.5, {opacity:0},{opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);
var tween = TweenMax.fromTo("#rioDeOroTitle", 0.5, {opacity:0},{opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);
var tween = TweenMax.fromTo("#sierraLeoneTitle", 0.5, {opacity:0},{opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);


var tween = TweenMax.to("#voyageNav", 0.5, {opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#regularBG", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);


// Transition From Departure to England

var tween = TweenMax.fromTo("#englandTitle", 0.5, {opacity:0},{opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#england", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

// Transition From England to Fuerteventura

var tween = TweenMax.fromTo("#englandTitle", 0.5, {opacity:1},{opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#englandFade", duration: "50%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#fuerteventuraTitle", 0.5, {opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#fuerteventura", duration: "100%"})
                .setTween(tween)
                .addTo(controller);


// Transition From Fuerteventura to rio de oro

var tween = TweenMax.to("#fuerteventuraTitle", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#rioDeOro", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#rioDeOroTitle", 0.5, {opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#rioDeOro", duration: "100%"})
                .setTween(tween)
                .addTo(controller);


// Transition From rio de oro to Sierra Leone

var tween = TweenMax.to("#rioDeOroTitle", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#sierraLeoneTitle", 0.5, {opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#sierraLeoneTitle", 0.5, {opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: 200})
                .addTo(controller)
                .on('start', function () {
                    console.log("passed trigger");
                });


// build scenes
new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: "100%"})
                .setClassToggle("#locationBox", "redTheme") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: "100%"})
                .setClassToggle("#voyageNav", "redTheme") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: "100%"})
                .setClassToggle("#hueBG", "redTheme") 
                .addTo(controller);



// Transition From Departure to England



new ScrollMagic.Scene({triggerElement: "#departure", duration: 200})
                .addTo(controller)
                .on("update", function (e) {
                    $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
                })
                .on("enter leave", function (e) {
                    $("#state").text(e.type == "enter" ? "inside" : "outside");
                })
                .on("start end", function (e) {
                    $("#lastHit").text(e.type == "start" ? "top" : "bottom");
                })
                .on("progress", function (e) {
                    $("#progress").text(e.progress.toFixed(3));
                })
