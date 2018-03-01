


$(".textBox a").hover(function(){
    $('.redTextBox').addClass('boxHover');
    $(".redTextBox a img").attr("src","icons/rightArrow.svg");    
    }, function(){
    $('.textBox').removeClass('boxHover');
    $(".redTextBox a img").attr("src","icons/rightArrowIn.svg");    
});

$("#voyageDot").hover(function(){
    $("#voyageDot img").attr("src","icons/rightArrowIn.svg");    
    }, function(){
    $("#voyageDot img").attr("src","icons/rightArrow.svg");    
});

$("#archiveDot").hover(function(){
    $("#archiveDot img").attr("src","icons/rightArrowIn.svg");    
    }, function(){
    $("#archiveDot img").attr("src","icons/rightArrow.svg");    
});

$("#aboutDot").hover(function(){
    $("#aboutDot img").attr("src","icons/rightArrowIn.svg");    
    }, function(){
    $("#aboutDot img").attr("src","icons/rightArrow.svg");    
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
    $("#voyageLogo").attr("src","icons/logo-hoayver.svg");
    }, function(){
    $("#voyageLogo").attr("src","icons/logo-white.svg");
});

// $("#voyageNavA").hover(function(){
//     $("#voyageTitle").attr("src","icons/title-logo-red.svg");
//     }, function(){
//     $("#voyageTitle").attr("src","icons/title-logo.svg");
// });
$("#voyageTitle").hover(function(){
    $("#voyageTitle").attr("src","icons/logo-gray.svg");
    }, function(){
    $("#voyageTitle").attr("src","icons/logo-white.svg");
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


// var now = new Date();
// setInterval(function(){
//     var nnow = new Date();
//     if(nnow.getTime() - now.getTime() >= 1000)
//         // $('#voyageBody').animate({scrollTop: '+=50'}, 1000, 'linear');
//         $('body').animate({scrollTop: -300}, 1000);
//         console.log('IT WORKS');

//     }, 2000);
// $(document)
//     .mousemove(function(){ now = new Date(); $('#voyageBody').stop(); })
//     .keypress(function(){ now = new Date(); $('#voyageBody').stop(); });



// var idleTimer = null;
// var idleState = false;
// var idleWait = 2000;
// var idleFor = 0;

// (function ($) {
//     $(document).ready(function () {
//         $('*').bind('mousemove keydown scroll', function () {  
//             clearTimeout(idleTimer);                    
//             if (idleState === true) {                 
//                 // Reactivated event
//                 // $("body").append("<p>Welcome Back.</p>");  
//                 console.log('Welcome back');          
//             }           
//             idleState = false;  

//             idleTimer = setTimeout(function () {               
//                 // Idle Event
//                 console.log("You've been idle for " + idleWait/1000 + " seconds.");
//                 idleState = true; 
//             }, idleWait);
//         });   


//         $("body").trigger("mousemove");    
//     });


// }) (jQuery)