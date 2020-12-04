$(document).ready(function() {
    var hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters

        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },

        // KEybord on
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

    })

    var reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters

        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },

        // KEybord on
        // keyboard: {
        //     enabled: true,
        //     onlyInViewport: false,
        // },

    })

    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener('click', function() {
        document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
    })

    var modalButton = $("[data-toggle=modal]");
    var modalClose = $("[data-toggle=close]");

    modalButton.on('click', function() {
        console.log('вы кликнулми по кнопке');
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");

        $(".modal__overlay").addClass("modal--visible");
        $(".modal__dialog").addClass("modal--visible");

    });

    modalClose.on('click', function() {
        console.log('вы кликнулми по кнопке');
        $(".modal__overlay").removeClass("modal--visible");
        $(".modal__dialog").removeClass("modal--visible");
    });


    //keyup() - работает при отпускании нажатой кнопки
    $(document).keyup(function(esc) {
        if (esc.which == 27) {
            $(".modal__overlay").removeClass("modal--visible");
            $(".modal__dialog").removeClass("modal--visible");
        }
    });


});