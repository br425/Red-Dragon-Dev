



var controller = new ScrollMagic.Controller();

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
 TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
 var id = $(this).attr("href");
 if ($(id).length > 0) {
     e.preventDefault();

     // trigger scroll
     controller.scrollTo(id);

         // if supported by the browser we can even update the URL.
     if (window.history && window.history.pushState) {
         history.pushState("", document.title, id);
     }
 }
});




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
var scene = new ScrollMagic.Scene({triggerElement: "#toVoyage", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#shipFG", 0.5, {bottom:-50});
var scene = new ScrollMagic.Scene({triggerElement: "#toArchive", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.from("#darken", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#toAbout", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#homeHeader", 0.5, {top:-200});
var scene = new ScrollMagic.Scene({triggerElement: "#toAbout", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

