


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



// $(".textBox a").hover(function(){
//     $('.redTextBox').addClass('boxHover');
//     $(".redTextBox a img").attr("src","icons/rightArrow.svg");    
//     }, function(){
//     $('.textBox').removeClass('boxHover');
//     $(".redTextBox a img").attr("src","icons/rightArrowIn.svg");    
// });

// $("#voyageDot").hover(function(){
//     $("#voyageDot img").attr("src","icons/rightArrowIn.svg");    
//     }, function(){
//     $("#voyageDot img").attr("src","icons/rightArrow.svg");    
// });

// $("#archiveDot").hover(function(){
//     $("#archiveDot img").attr("src","icons/rightArrowIn.svg");    
//     }, function(){
//     $("#archiveDot img").attr("src","icons/rightArrow.svg");    
// });

// $("#aboutDot").hover(function(){
//     $("#aboutDot img").attr("src","icons/rightArrowIn.svg");    
//     }, function(){
//     $("#aboutDot img").attr("src","icons/rightArrow.svg");    
// // });


$(".textBox a").hover(function(){
    $(".boxTop").attr("src","icons/boxTopHover.svg");
    $(".textArea").attr("style","border-color: #f23535;");
    $(".a").attr("style","background-color: #f23535;");
    }, function(){
    $(".boxTop").attr("src","icons/boxTop.svg");
    $(".textArea").attr("style","border-color: #900000;");
    $(".a").attr("style","background-color: #900000;");
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


$("#navA").hover(function(){
    $("#voyageLogo").attr("src","icons/logo-hover.svg");
    }, function(){
    $("#voyageLogo").attr("src","icons/logo-white.svg");
});

// $("#navA").hover(function(){
//     $("#voyageTitle").attr("src","icons/title-logo-red.svg");
//     }, function(){
//     $("#voyageTitle").attr("src","icons/title-logo.svg");
// });
$("#voyageTitle").hover(function(){
    $("#voyageTitle").attr("src","icons/logo-gray.svg");
    }, function(){
    $("#voyageTitle").attr("src","icons/logo-white.svg");
});

$("#navA").hover(function(){
    $("#navA h1").css("color","#f23535");
    }, function(){
    $("#navA h1").css("color","#fffcfc");
});


$("#compassButton").click(function(){
    console.log('clicked nav');
    $(".barContainer").toggleClass("openMenu");
    $("#homeLinks").toggleClass("openMenu");
    $('#nav').toggleClass('fullMenu');
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