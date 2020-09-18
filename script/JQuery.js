

$(document).ready(function () {

    $(window).on("scroll", function () {
        if ($(window).width() > '1024') {
            if ($(window).scrollTop() >= $('.main_slider').height()) {
                $("header").addClass("with-effect-bg");
            } else {
                $("header").removeClass("with-effect-bg");
            }
        }
    });

    // slick slider main page 
    $('.main_slider').slick({
        arrows: false,
        rows: 0,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.slider_picture').slick({
        arrows: false,
        rows: 0,
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    });

});