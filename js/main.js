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





// Стрелка вверх
$(document).ready(function() {
    var button = $('#button-up');
    $(window).scroll(function() {

        if ($(this).scrollTop() > 300) {
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


// Кнопки изменения вида изображений в галереи
$('.catalog__filter-btngrid ').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.gallery__card').removeClass('gallery__card--list');
});
$('.catalog__filter-btnline ').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.gallery__card').addClass('gallery__card--list');
});


// Показать еще карточки
const btnShowMoreCards = document.querySelector('.btn-more')
const hiddenCards = document.querySelectorAll('.card-link--hidden')

// Клик по кнопке и показ оставшихся карточек
btnShowMoreCards.addEventListener('click', function() {

    hiddenCards.forEach(function(card) {
        card.classList.remove('card-link--hidden')
    })
})

$('.btn-more').on('click', function() {
    $(this).toggleClass('active')
})



