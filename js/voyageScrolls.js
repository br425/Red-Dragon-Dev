




// init controller

var controller = new ScrollMagic.Controller();



var scene = new ScrollMagic.Scene({triggerElement: "#debug", duration: 200})
                .addTo(controller)
                // .addIndicators() // add indicators (requires plugin)
                .on("update", function (e) {
                    // console.log(e.target.controller().info("scrollDirection"));
                    $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
                    if (e.target.controller().info("scrollDirection") === 'REVERSE') {
                        $('#voyageNav').removeClass('hideNav');
                        // console.log('You going up');
                    } else {        
                        $('#voyageNav').addClass('hideNav');
                        $(".barContainer").removeClass("openMenu");
                        $('#voyageNav').removeClass('fullMenu');
                        $("#compassButton").removeClass("activeCompass");
                        // console.log('You going down');
                    }
                })
                // .on("enter leave", function (e) {
                //     $("#state").text(e.type == "enter" ? "inside" : "outside");
                // })
                // .on("start end", function (e) {
                //     $("#lastHit").text(e.type == "start" ? "top" : "bottom");
                // })
                // .on("progress", function (e) {
                //     $("#progress").text(e.progress.toFixed(3));
                // })
                ;



//  Departure

var tween = TweenMax.fromTo("#locationBox", 0.5, {display:'none'},{display:'block'});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);


var w = $(window).width();
var tabletPlusOnly = false;
if (w > 500) {tabletPlusOnly = true;}

if (tabletPlusOnly) {
var tween = TweenMax.from("#voyageNav", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);
}

var tween = TweenMax.to("#paperBG", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "200%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenMax.to("#bannerBG", 0.5, {left:0, opacity:0});
var scene = new ScrollMagic.Scene({duration: "200%"})
                .setTween(tween)
                .addTo(controller);

//  England

var englandH = document.getElementById('england').offsetHeight;
var englandT = document.getElementById('englandTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#england", duration: englandH-200})
			.on("enter", function () {
				englandT.style.opacity = 1;
			})
			.on("leave", function () {
				englandT.style.opacity = 0;
			})
			.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#england", duration:englandH})
                .setClassToggle("#one", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#england"})
                .setClassToggle("#one", "visitedDot") 
                .addTo(controller);


//  Fuerteventura


var fuerteventuraH = document.getElementById('fuerteventura').offsetHeight;
var fuerteventuraT = document.getElementById('fuerteventuraTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#fuerteventura", duration: fuerteventuraH-200})
			.on("enter", function () {
				fuerteventuraT.style.opacity = 1;
			})
			.on("leave", function () {
				fuerteventuraT.style.opacity = 0;
			})
			.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#fuerteventura",duration:fuerteventuraH})
                .setClassToggle("#two", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#fuerteventuraTrans"})
                .setClassToggle("#two", "visitedDot") 
                .addTo(controller);

//  Rio De Oro


var rioDeOroH = document.getElementById('rioDeOro').offsetHeight;
var rioDeOroInfoH = document.getElementById('rioDeOroText').offsetHeight;
var rioDeOroT = document.getElementById('rioDeOroTitle');

var scene = new ScrollMagic.Scene({triggerElement: "#rioDeOro", duration: rioDeOroH-200})
			.on("enter", function () {
				rioDeOroT.style.opacity = 1;
			})
			.on("leave", function () {
				rioDeOroT.style.opacity = 0;
			})
			.addTo(controller);


// new ScrollMagic.Scene({triggerElement: "#rioDeOroInfo",duration:rioDeOroInfoH})
//                 .setClassToggle("#paperBG", "redishBox") 
//                 .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeOro",duration:rioDeOroH})
                .setClassToggle("#three", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeOroTrans"})
                .setClassToggle("#three", "visitedDot") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rioDeOro",duration:rioDeOroH})
                .setClassToggle("#rain", "raining") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeOro",duration:rioDeOroH})
                .setClassToggle("#map", "storm1") 
                .addTo(controller);



//  Sierra Leone


var sierraLeoneH = document.getElementById('sierraLeone').offsetHeight;
// var sierraLeoneT = document.getElementById('sierraLeoneTitle');
// var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH-200})
// 			.on("enter", function () {
// 				sierraLeoneT.style.opacity = 1;
// 			})
// 			.on("leave", function () {
// 				sierraLeoneT.style.opacity = 0;
// 			})
// 			.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: 200})
                .addTo(controller)
                .on('start', function () {
                    console.log("passed trigger");
                });



new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#voyageNav", "redTheme") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#map", "storm2") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#rain", "rainier") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeoneText", duration: 700})
                .setClassToggle("#sierraLeoneParBG", "bigParaShowBG") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeoneText", duration: 400})
                .setClassToggle("#sierraLeoneParFG", "bigParaShowFG") 
                .addTo(controller);


var tween = TweenMax.to("#sierraLeoneParFG", 0.5, {left:0});
var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeoneText", duration: 700})
                .setTween(tween)
                .addTo(controller);



new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration:sierraLeoneH})
                .setClassToggle("#four", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeoneTrans"})
                .setClassToggle("#four", "visitedDot") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeoneText",duration: 100})
                .setClassToggle("#sierraleone-1", "show") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeoneText2",duration: 100})
                .setClassToggle("#sierraleone-2", "show") 
                .addTo(controller);


//  Rio De La Plata


var rioDeLaPlataH = document.getElementById('rioDeLaPlata').offsetHeight;
// var rioDeLaPlataT = document.getElementById('rioDeLaPlataTitle');
// var scene = new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH-200})
// 			.on("enter", function () {
// 				rioDeLaPlataT.style.opacity = 1;
// 			})
// 			.on("leave", function () {
// 				rioDeLaPlataT.style.opacity = 0;
// 			})
// 			.addTo(controller);



new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
                .setClassToggle("#voyageNav", "redTheme") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
                .setClassToggle("#map", "storm2") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
                .setClassToggle("#rain", "rainier") 
                .addTo(controller);


new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata",duration:rioDeLaPlataH})
                .setClassToggle("#five", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeLaPlataTrans"})
                .setClassToggle("#five", "visitedDot") 
                .addTo(controller);


//  Isle De Lobos

var islaDeLobosH = document.getElementById('islaDeLobos').offsetHeight;
var islaDeLobosT = document.getElementById('islaDeLobosTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#islaDeLobos", duration: islaDeLobosH-200})
			.on("enter", function () {
				islaDeLobosT.style.opacity = 1;
			})
			.on("leave", function () {
				islaDeLobosT.style.opacity = 0;
			})
			.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#islaDeLobos",duration:islaDeLobosH})
                .setClassToggle("#six", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#islaDeLobosTrans"})
                .setClassToggle("#six", "visitedDot") 
                .addTo(controller);


// new ScrollMagic.Scene({triggerElement: "#islaDeLobos",duration:islaDeLobosH})
//                 .setClassToggle("#rain", "raining") 
//                 .addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#islaDeLobos",duration:islaDeLobosH})
//                 .setClassToggle("#map", "storm1") 
//                 .addTo(controller);

//  Salvador

var salvadorH = document.getElementById('salvador').offsetHeight;
// var salvadorT = document.getElementById('salvadorTitle');
// var scene = new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH-200})
// 			.on("enter", function () {
// 				salvadorT.style.opacity = 1;
// 			})
// 			.on("leave", function () {
// 				salvadorT.style.opacity = 0;
// 			})
// 			.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH})
                .setClassToggle("#voyageNav", "redTheme") 
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH})
                .setClassToggle("#map", "redBox") 
                .addTo(controller);


new ScrollMagic.Scene({triggerElement: "#salvador",duration:salvadorH})
                .setClassToggle("#seven", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#salvadorTrans"})
                .setClassToggle("#seven", "visitedDot") 
                .addTo(controller);


new ScrollMagic.Scene({triggerElement: "#salvador",duration:salvadorH})
                .setClassToggle("#rain", "rainier") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#salvador",duration:salvadorH})
                .setClassToggle("#map", "storm2") 
                .addTo(controller);

//  Cape Verde

var capeVerdeH = document.getElementById('capeVerde').offsetHeight;
var capeVerdeT = document.getElementById('capeVerdeTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#capeVerde", duration: capeVerdeH-200})
			.on("enter", function () {
				capeVerdeT.style.opacity = 1;
			})
			.on("leave", function () {
				capeVerdeT.style.opacity = 0;
			})
			.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#capeVerde",duration:capeVerdeH})
                .setClassToggle("#eight", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#capeVerdeTrans"})
                .setClassToggle("#eight", "visitedDot") 
                .addTo(controller);

//  Southampton

var southamptonH = document.getElementById('southampton').offsetHeight;
var southamptonT = document.getElementById('southamptonTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#southampton", duration: southamptonH-200})
			.on("enter", function () {
				southamptonT.style.opacity = 1;
			})
			.on("leave", function () {
				southamptonT.style.opacity = 0;
			})
			.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#southampton",duration:southamptonH})
                .setClassToggle("#nine", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#southamptonTrans"})
                .setClassToggle("#nine", "visitedDot") 
                .addTo(controller);


//  Ending

var tween = TweenMax.to("#paperBG", 0.5, {opacity:1});
var scene = new ScrollMagic.Scene({triggerElement: "#ending", duration: "100%"})
                .setTween(tween)
                .addTo(controller);


var creditsH = document.getElementById('credits').offsetHeight;
var scene = new ScrollMagic.Scene({triggerElement: "#credits", duration: creditsH})
                .setClassToggle("#paperBG", "blackBox") 
                .addTo(controller);


var tween = TweenMax.to("#voyageNav", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#ending", duration: "100%"})
                .setTween(tween)
                .addTo(controller);




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
