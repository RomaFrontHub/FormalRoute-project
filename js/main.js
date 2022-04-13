$(document).ready(function() {
    $(function() {
        $('.header__nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    });
    $(function() {
        $('.menu-wrapper').on('click', function() {
            $('.hamburger-menu').toggleClass('animate');
            $('.adaptive').slideToggle();
        });
    });
    $("#arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#anim").offset().top
        }, 500);
    });
    $('#button').click(function() {
        $('#double').css("display", "flex");
        $('#double-two').css("display", "block");
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                direction: 'vertical'
            },
            768: {
                slidesPerView: 3,
                direction: 'vertical'
            },
            1200: {
                direction: 'horizontal'
            }
        },
    });
});