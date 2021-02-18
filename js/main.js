//плавная реализация якорной прокрутки по средством jQuery
$(document).ready(function() {
    $('a[href^="#"]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 20
        }, 800);
        e.preventDefault();
    });
    return false;
});

//мобильное меню
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


$('.slick-slider').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 2500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
})



$(document).ready(function() {
    var button = $('#button-up');
    $(window).scroll(function() {

        if ($(this).scrollTop() > 500) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }

    });
    button.on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});