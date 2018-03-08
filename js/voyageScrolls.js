




// init controller

var controller = new ScrollMagic.Controller();



var scene = new ScrollMagic.Scene({triggerElement: "#debug", duration: 200})
                .addTo(controller)
                // .addIndicators() // add indicators (requires plugin)
                .on("update", function (e) {
                    // console.log(e.target.controller().info("scrollDirection"));
                    $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
                    if (e.target.controller().info("scrollDirection") === 'FORWARD') {
                        $('#nav').addClass('hideNav');
                        $(".barContainer").removeClass("openMenu");
                        $('#nav').removeClass('fullMenu');
                        $("#compassButton").removeClass("activeCompass");
                        $('.locationTitle').removeClass('locPushDown');
                        // console.log('You going up');
                    } else {
                        $('#nav').removeClass('hideNav');
                        $('.locationTitle').addClass('locPushDown');
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

// Text Boxes
$('.anyText').each(function () {

    var height = $(this).height();

    // var tween = TweenLite.from(current);
    var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 1, duration: height})
                    .on('progress', function () {
                        $('#continue').css({'opacity':'0'});
                    })
                    .on('leave', function () {
                        $('#continue').css({'opacity':'1'});
                    })
                    .addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: 0, duration: height})
                    .on('progress', function () {
                        $('#continue').css({'opacity':'0'});
                    })
                    .on('leave', function () {
                        $('#continue').css({'opacity':'1'});
                    })
                    .addTo(controller);
});

//  Departure

var tween = TweenLite.fromTo("#locationBox", 0.5, {display:'none'},{display:'block'});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .on('enter', function () {
                    setActiveChapter('departure');
                })
                .addTo(controller);


var w = $(window).width();
var tabletPlusOnly = false;
if (w > 500) {tabletPlusOnly = true;}

if (tabletPlusOnly) {
var tween = TweenLite.from("#nav", 0.5, {left:-360});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenLite.from("#navB", 1, {opacity: 1});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "100%"})
                .setTween(tween)
                .addTo(controller);
}

var tween = TweenLite.to("#paperBG", 0.5, {opacity:0});
var scene = new ScrollMagic.Scene({triggerElement: "#departure", duration: "200%"})
                .setTween(tween)
                .addTo(controller);

var tween = TweenLite.to("#bannerBG", 0.5, {left:0, opacity:0});
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
                .on('progress', function () {
                    setActiveChapter('england');
                    reloadTrips();
                })
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
                .on('progress', function () {
                    setActiveChapter('fuerteventura');
                })
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
                .on('progress', function () {
                  setActiveChapter('rioDeOro');
                })
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
                .setClassToggle("#nav", "redTheme")
                .on('enter', function () {
                    setActiveChapter('sierraLeone');
                })
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#map", "storm3")
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#sierraLeoneParBG", "storm2")
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#sierraLeoneParFG", "storm2")
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#rain", "rainier")
                .addTo(controller);



new ScrollMagic.Scene({triggerElement: "#sierraLeoneTitle", duration: ('150%')})
                .setClassToggle("#sierraLeoneParBG", "bigParaShowBG")
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sierraLeoneTitle", duration: ('150%')})
                .setClassToggle("#sierraLeoneParFG", "bigParaShowFG")
                .addTo(controller);


var tween = TweenLite.to("#sierraLeoneParBG", 0.5, {left:'-10%'});
var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: (sierraLeoneH)})
                .setTween(tween)
                .addTo(controller);
var tween = TweenLite.to("#sierraLeoneParFG", 0.5, {left:'50%'});
var scene = new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: (sierraLeoneH)})
                .setTween(tween)
                .addTo(controller);



new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration: sierraLeoneH})
                .setClassToggle("#continue", "invert")
                .addTo(controller);



new ScrollMagic.Scene({triggerElement: "#sierraLeone", duration:sierraLeoneH})
                .setClassToggle("#four", "activeDot")
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sierraLeoneTrans"})
                .setClassToggle("#four", "visitedDot")
                .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#sierraLeoneText",duration: 100})
//                 .setClassToggle("#sierraleone-1", "show")
//                 .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#sierraLeoneText2",duration: 100})
//                 .setClassToggle("#sierraleone-2", "show")
//                 .addTo(controller);


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
                .setClassToggle("#nav", "redTheme")
                .on('enter', function () {
                    setActiveChapter('rioDeLaPlata');
                })
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
                .setClassToggle("#map", "storm3")
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
                .setClassToggle("#rioDeLaPlataParBG", "storm2")
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
                .setClassToggle("#rioDeLaPlataParFG", "storm2")
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


new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: rioDeLaPlataH})
                .setClassToggle("#continue", "invert")
                .addTo(controller);


new ScrollMagic.Scene({triggerElement: "#rioDeLaPlataTitle", duration: ('150%')})
                .setClassToggle("#rioDeLaPlataParBG", "bigParaShowBG")
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#rioDeLaPlataTitle", duration: ('150%')})
                .setClassToggle("#rioDeLaPlataParFG", "bigParaShowFG")
                .addTo(controller);


var tween = TweenLite.to("#rioDeLaPlataParBG", 0.5, {left:'-50%'});
var scene = new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: (rioDeLaPlataH)})
                .setTween(tween)
                .addTo(controller);
var tween = TweenLite.to("#rioDeLaPlataParFG", 0.5, {left:'50%'});
var scene = new ScrollMagic.Scene({triggerElement: "#rioDeLaPlata", duration: (rioDeLaPlataH)})
                .setTween(tween)
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
                .on('enter', function () {
                    setActiveChapter('islaDeLobos');
                })
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#islaDeLobosTrans"})
                .setClassToggle("#six", "visitedDot")
                .addTo(controller);





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
                .setClassToggle("#nav", "redTheme")
                .on('enter', function () {
                    setActiveChapter('salvador');
                })
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
                .setClassToggle("#map", "storm3")
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#salvador",duration:salvadorH})
                .setClassToggle("#salvadorParBG", "storm2")
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#salvador",duration:salvadorH})
                .setClassToggle("#salvadorParFG", "storm2")
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#salvador", duration: salvadorH})
                .setClassToggle("#continue", "invert")
                .addTo(controller);



new ScrollMagic.Scene({triggerElement: "#salvadorTitle", duration: ('150%')})
                .setClassToggle("#salvadorParBG", "bigParaShowBG")
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#salvadorTitle", duration: ('150%')})
                .setClassToggle("#salvadorParFG", "bigParaShowMG")
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#salvadorTitle", duration: ('150%')})
                .setClassToggle("#salvadorParFG", "bigParaShowFG")
                .addTo(controller);


var tween = TweenLite.to("#salvadorParBG", 0.5, {left:'0%'});
var scene = new ScrollMagic.Scene({triggerElement: "#salvador", duration: (salvadorH)})
                .setTween(tween)
                .addTo(controller);
// var tween = TweenLite.to("#salvadorParMG", 0.5, {left:'20%'});
// var scene = new ScrollMagic.Scene({triggerElement: "#salvador", duration: (salvadorH)})
//                 .setTween(tween)
//                 .addTo(controller);
var tween = TweenLite.to("#salvadorParFG", 0.5, {left:'-10%'});
var scene = new ScrollMagic.Scene({triggerElement: "#salvador", duration: (salvadorH)})
                .setTween(tween)
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
                .on('enter', function () {
                    setActiveChapter('capeVerde');
                })
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
                .on('enter', function () {
                    setActiveChapter('southampton');
                })
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#southamptonTrans"})
                .setClassToggle("#nine", "visitedDot")
                .addTo(controller);


//  Ending

var tween = TweenLite.to("#paperBG", 0.5, {opacity:.8});
var scene = new ScrollMagic.Scene({triggerElement: "#ending", duration: "100%"})
                .setTween(tween)
                .addTo(controller);


var creditsH = document.getElementById('credits').offsetHeight;
var scene = new ScrollMagic.Scene({triggerElement: "#credits", duration: creditsH})
                .setClassToggle("#paperBG", "blackBox")
                .addTo(controller);



if (tabletPlusOnly) {
var tween = TweenLite.to("#nav", 0.5, {left:-360});
var scene = new ScrollMagic.Scene({triggerElement: "#ending", duration: "100%"})
                .setTween(tween)
                .addTo(controller);

}


var tween = TweenLite.to("#navB", 1, {opacity: 1});
var scene = new ScrollMagic.Scene({triggerElement: "#ending", duration: "50%"})
                .setTween(tween)
                .addTo(controller);
var tween = TweenLite.to("#navB", 1, {opacity: 0});
var scene = new ScrollMagic.Scene({triggerElement: "#credits", duration: "50%"})
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
