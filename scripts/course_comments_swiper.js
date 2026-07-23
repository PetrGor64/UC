document.addEventListener('DOMContentLoaded', () => {

    new Swiper('.comments-wrapper', {
        loop: true,
        grabCursor: true,

        slidesPerView: 1,
        spaceBetween: 15,

        navigation: {
            nextEl: '.module_button_next',
            prevEl: '.module_button_prev',
        },

        breakpoints: {

            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            
        }

    });

});