$(document).ready(function () {
    gridToggle();

    $(window).on('resize', function () {
        var win = $(this); //this = window
        if (win.width() < 1440) {
            $(".grid").addClass("hide");
            $(".full").removeClass("hide");
            $("#full").addClass("hide");
            $("#grid").removeClass("hide");
        }
    });
});

function gridToggle() {
    $("#grid").click(function () {
        $(".grid").removeClass("hide");
        $(".full").addClass("hide");
        $("#full").removeClass("hide");
        $("#grid").addClass("hide");
    });

    $("#full").click(function () {
        $(".grid").addClass("hide");
        $(".full").removeClass("hide");
        $("#full").addClass("hide");
        $("#grid").removeClass("hide");
    });
}


// $(document).ready(function () {
//     $("#about").click(function () {
//         $('html, body').animate({
//             scrollTop: $("#aboutsection").offset().top
//         }, 1000);
//     });

//     $("#contact").click(function () {
//         $('html, body').animate({
//             scrollTop: $("#contactsection").offset().top
//         }, 1000);
//     });

//     $("#contactsection").hover(function () {
//         $("#contactspan").addClass("underlined");
//     }, function () {
//         $("#contactspan").removeClass("underlined");
//     });

//     $("#aboutsection").hover(function () {
//         $("#aboutspan").addClass("underlined");
//     }, function () {
//         $("#aboutspan").removeClass("underlined");
//     });

//     // if (localStorage.getItem("start") === null) {
//     //     setLocal();
//     if ((window.location.href.indexOf("index") > -1) && ($(window).width() <= 1024)) {
//         //$("#site-gif").css("background-image", "url('../sofiavankov.github.io/assets/img/inicio-movil.gif')");
//         $("#site-gif-img").attr("src", "../sofiavankov.github.io/assets/img/inicio-movil.gif");
//         playGif();
//     } else if ((window.location.href.indexOf("index") > -1) && $(window).width() >= 1400) {
//         $("#site-gif-img").attr("src", "../sofiavankov.github.io/assets/img/inicio.gif");
//         playGif();
//     }
//     // } else {
//     // dontShow();
//     // }

//     // setInterval(function () {
//     //     checkExpiration();
//     // }, 900000);


//     showProject();

//     $(".projects").addClass("show-projects");

// });

// // function setLocal() {
// //     var today = new Date();
// //     localStorage.setItem("start", today);
// // }

// // function checkExpiration() {
// //     var ONE_HOUR = 60 * 60 * 1000;
// //     var oldDate = localStorage.getItem("start");
// //     oldDate = Date.parse(oldDate);
// //     var currentDate = new Date();

// //     if ((currentDate - oldDate) > ONE_HOUR) {
// //         localStorage.removeItem("start");
// //     }
// // }

// // function dontShow() {
// //     $("#site-gif").addClass("hide");
// // }

// function playGif() {
//     var scrollPosition = [
//         self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
//         self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//     ];
//     var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
//     html.data('scroll-position', scrollPosition);
//     html.data('previous-overflow', html.css('overflow'));
//     html.css('overflow', 'hidden');
//     window.scrollTo(scrollPosition[0], scrollPosition[1]);

//     setTimeout(function () {
//         $("#site-gif").addClass("no-show");

//         var html = jQuery('html');
//         var scrollPosition = html.data('scroll-position');
//         html.css('overflow', html.data('previous-overflow'));
//         window.scrollTo(scrollPosition[0], scrollPosition[1])
//     }, 6700);

//     setTimeout(function () {
//         $("#site-gif").addClass("hide");
//     }, 6740);

// }

// function showProject() {
//     $("#project-1").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img1.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });
//     $("#project-2").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img2.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });
//     $("#project-3").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img3.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });
//     $("#project-4").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img4.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });
//     $("#project-5").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img5.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });
//     $("#project-6").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img6.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });
//     $("#project-7").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img7.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });
//     $("#project-8").hover(function () {
//         $(".projects__image").css("background-image", "url('../sofiavankov.github.io/assets/img/cover/img8.png')");
//     }, function () {
//         $(".projects__image").css("background-image", "none");
//     });

// }
