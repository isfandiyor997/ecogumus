// ============= our_product ================
lightGallery(document.getElementById('about_company_ctf'), {
    thumbnail: true,
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});
// ============= our_product ================
let ourProductSlider = new Swiper('.our_product_slider', {
    wrapperClass: 'our_product_slider_wrap',
    slideClass: 'page',
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000, // Смена слайдов каждые 3 секунды
        disableOnInteraction: false, // Продолжать автосвайп после ручного взаимодействия
    },
    speed: 900, // Скорость анимации перехода (в миллисекундах)
    loop: true,
})
// ============= adaptive ================
adaptive(window.innerWidth);