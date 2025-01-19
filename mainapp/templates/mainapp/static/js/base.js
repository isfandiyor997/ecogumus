
// ================ footer ================================================

let map = document.querySelector('.map_main');
function adaptive(width) {
    if (width > 1920) {
        map.setAttribute('width', '500');
    }
    if (width <= 1920 && width > 1280) {
        map.setAttribute('width', '500');
    }
    if (width <= 1280 && width > 1024) {
        map.setAttribute('width', '500');
    }
    if (width <= 1024 && width > 768) {
        map.setAttribute('width', '280');
    }
    if (width <= 768 && width > 425) {
        map.setAttribute('width', '300');
    }
    if (width <= 425 && width > 320) {
        map.setAttribute('width', '280');
    }
    if (width <= 320) {map.setAttribute('width', '250');}
};

adaptive(window.innerWidth);


// window.addEventListener("resize", () => {
// 	adaptive(window.innerWidth);
// });

// ================ Header ================================================
let selectedLanguage = document.querySelector('#selected_language');
let listLanguages = document.querySelector('#list_languages');
selectedLanguage.addEventListener('click', () => {
    listLanguages.classList.toggle('show');
})

document.addEventListener('click', (event) => {
    if (!selectedLanguage.contains(event.target) && !listLanguages.contains(event.target)) {
        listLanguages.classList.remove('show');
    }
});

let menuBurgerBtn = document.querySelector('.menu_burger_btn');
let menuList = document.querySelector('.menu_list');
const menuCloseBtn = '<div class="close_btn"></div>'
menuList.insertAdjacentHTML('afterend', menuCloseBtn)
let closeBtnEl = menuList.nextElementSibling;

menuBurgerBtn.addEventListener('click', () => {
    menuList.parentNode.classList.remove('hide_menu');
})

closeBtnEl.addEventListener('click', () => {
    menuList.parentNode.classList.add('hide_menu');
})

