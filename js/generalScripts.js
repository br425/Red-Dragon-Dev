
//
//
//

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.opacity = value ? 1 : 0;
}

onReady(function () {
    show('content', true);
    show('loading', false);
});


$(".textBox a").hover(function(){
    $('.redTextBox').addClass('boxHover');
    }, function(){
    $('.textBox').removeClass('boxHover');
});

$(".textBox a").hover(function(){
    $(".boxTop").attr("src","icons/boxTopHover.svg");
    }, function(){
    $(".boxTop").attr("src","icons/boxTop.svg");
});

$(".bigStopText a").hover(function(){
    $('.bigStopText, .bigStopText a, .bigStopText p').addClass('bigStopHover');
    }, function(){
    $('.bigStopText, .bigStopText a, .bigStopText p').removeClass('bigStopHover');
});


$(".bigStopText a").hover(function(){
    $(".bigStopText img").attr("src","icons/rightArrowBig.svg");
    }, function(){
    $(".bigStopText img").attr("src","icons/rightArrow.svg");
});


$("#voyageNavA").hover(function(){
    $("#voyageLogo").attr("src","icons/logo-hover.svg");
    }, function(){
    $("#voyageLogo").attr("src","icons/logo-white.svg");
});

$("#voyageNavA").hover(function(){
    $("#voyageTitle").attr("src","icons/title-logo-red.svg");
    }, function(){
    $("#voyageTitle").attr("src","icons/title-logo.svg");
});

$("#voyageNavA").hover(function(){
    $("#voyageNavA h1").css("color","#f23535");
    }, function(){
    $("#voyageNavA h1").css("color","#fffcfc");
});


$("#compassButton").click(function(){
    console.log('clicked nav');
    $(".barContainer").toggleClass("openMenu");
    $('#voyageNav').toggleClass('fullMenu');
    $("#compassButton").toggleClass("activeCompass");
});
