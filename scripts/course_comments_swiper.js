document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOM loaded');
    console.log(typeof Swiper);

    new Swiper('.comments-wrapper',{
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,

        navigation:{
            nextEl: '.module_button_next',
            prevEl: '.module_button_prev',
        },

        breakpoints:{
            500:{
                slidesPerView: 1,
                spaceBetween: 15,
            },
            1200:{
                slidesPerView: 2,
                spaceBetween: 15,
            }
        }
    });
});