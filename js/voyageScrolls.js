
// var controller = new ScrollMagic.Controller();

// // change behaviour of controller to animate scroll instead of jump
// controller.scrollTo(function (newpos) {
// 	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
// });

// //  bind scroll to anchor links
// $(document).on("click", "a[href^='#']", function (e) {
// 	var id = $(this).attr("href");
// 	if ($(id).length > 0) {
// 		e.preventDefault();

// 		// trigger scroll
// 		controller.scrollTo(id);

// 			// if supported by the browser we can even update the URL.
// 		if (window.history && window.history.pushState) {
// 			history.pushState("", document.title, id);
// 		}
// 	}
// });


                        // init controller
var controller = new ScrollMagic.Controller();

//  Departure

var tween = TweenMax.fromTo("#locationBox", 0.5, {display:'none'},{display:'block'});
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
new ScrollMagic.Scene({triggerElement: "#fuerteventuraFade"})
                .setClassToggle("#two", "visitedDot") 
                .addTo(controller);

//  Rio De Oro


var rioDeOroH = document.getElementById('rioDeOro').offsetHeight;
var rioDeOroInfoH = document.getElementById('rioDeOroInfo').offsetHeight;
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
//                 .setClassToggle("#regularBG", "redishBox") 
//                 .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeOro",duration:rioDeOroH})
                .setClassToggle("#three", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeOroFade"})
                .setClassToggle("#three", "visitedDot") 
                .addTo(controller);

//  Sierra Leone


var sierraLeoneH = document.getElementById('sierraLeone').offsetHeight;
var sierraLeoneT = document.getElementById('sierraLeoneTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH-200})
			.on("enter", function () {
				sierraLeoneT.style.opacity = 1;
			})
			.on("leave", function () {
				sierraLeoneT.style.opacity = 0;
			})
			.addTo(controller);


new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: 200})
                .addTo(controller)
                .on('start', function () {
                    console.log("passed trigger");
                });



new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH+rioDeLaPlataH})
                .setClassToggle("#voyageNav", "redTheme") 
                .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH+rioDeLaPlataH})
//                 .setClassToggle("#regularBG", "redBox") 
//                 .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH+rioDeLaPlataH})
                .setClassToggle("#voyageNav", "whiteBar") 
                .addTo(controller);



new ScrollMagic.Scene({triggerElement: "#sierraLeone",duration:sierraLeoneH})
                .setClassToggle("#four", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeoneFade"})
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
var rioDeLaPlataT = document.getElementById('rioDeLaPlataTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH-200})
			.on("enter", function () {
				rioDeLaPlataT.style.opacity = 1;
			})
			.on("leave", function () {
				rioDeLaPlataT.style.opacity = 0;
			})
			.addTo(controller);



// new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
//                 .setClassToggle("#voyageNav", "redTheme") 
//                 .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
//                 .setClassToggle("#regularBG", "redBox") 
//                 .addTo(controller);
// new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
//                 .setClassToggle("#voyageNav", "whiteBar") 
//                 .addTo(controller);




new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata",duration:rioDeLaPlataH})
                .setClassToggle("#five", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeLaPlataFade"})
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
new ScrollMagic.Scene({triggerElement: "#islaDeLobosFade"})
                .setClassToggle("#six", "visitedDot") 
                .addTo(controller);

//  Salvador

var salvadorH = document.getElementById('salvador').offsetHeight;
var salvadorT = document.getElementById('salvadorTitle');
var scene = new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH-200})
			.on("enter", function () {
				salvadorT.style.opacity = 1;
			})
			.on("leave", function () {
				salvadorT.style.opacity = 0;
			})
			.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH})
                .setClassToggle("#voyageNav", "redTheme") 
                .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH})
//                 .setClassToggle("#regularBG", "redBox") 
//                 .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH})
                .setClassToggle("#voyageNav", "whiteBar") 
                .addTo(controller);


new ScrollMagic.Scene({triggerElement: "#salvador",duration:salvadorH})
                .setClassToggle("#seven", "activeDot") 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#salvadorFade"})
                .setClassToggle("#seven", "visitedDot") 
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
new ScrollMagic.Scene({triggerElement: "#capeVerdeFade"})
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
new ScrollMagic.Scene({triggerElement: "#southamptonFade"})
                .setClassToggle("#nine", "visitedDot") 
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
