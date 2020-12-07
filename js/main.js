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

    // Модальное окно  
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

    // Закрывает модальное окно по кнопке ESC
    //keyup() - работает при отпускании нажатой кнопки
    $(document).keyup(function(esc) {
        if (esc.which == 27) {
            $(".modal__overlay").removeClass("modal--visible");
            $(".modal__dialog").removeClass("modal--visible");
        }
    });

    // Обработчик валидности форм

    $(".form").each(function() {
        $(this).validate({
            errorClass: "invalid",
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                subscribe: {
                    // required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "Name cannot be less than 2 letters"
                },
                phone: "Please enter your phone",
                email: {
                    required: "Please enter your Email",
                    email: "Your email address must be in the format of name@domain.com"
                },
                subscribe: {
                    required: "Please enter your Email",
                    email: "Your email address must be in the format of name@domain.com"
                }
            }
        });
    });

    // $('.phone_with_ddd').mask('(+7) 000-00-00');

});