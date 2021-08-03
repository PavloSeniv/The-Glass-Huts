//Початок коду для додавання webp формату у css
// JS-функція визначення підтримки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support === true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
//Кінець

/*Перевірка на тип пристрою*/
"use strict"
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
// Прокрутка при кліку

const menuLinks = document.querySelectorAll('.menu__sub-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            /*Якщо натиснемо на пункт меню воно закриється*/
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            //Для плавної прокрутки
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
/*End True-False*/

const swiper = new Swiper('.swiper-container', {
//  Стрілки навігації
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

// Навігація
// Буллети, дане положення, прогресбар
    pagination: {
        el: '.swiper-pagination',
        /*
        // Буллети
        type: 'bullets',
        clickable: true,
        // Динамічні булети
        dynamicBullets: true,
        // Кастомні булети
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
        */

        /*
        // Фракция
        type: 'fraction',
        // Кастомний вивід фракціЇ
        renderFraction: function (currentClass, totalClass) {
        return 'Фото <span class="' + currentClass + '"></span>' +
        ' з ' +
        '<span class="' + totalClass + '"></span>';
        },
        */


        // Прогрессбар
        type: 'progressbar'

    },

// Скроллбар
    scrollbar: {
        el: '.swiper-scrollbar',
// Можливість перетягування скролу
        draggable: true,
    },

// Включення / виключення
// перетягування на пк
    simulateTouch: true,
// Чутливість свайпу
    touchRatio: 1,
// Кут роботи свайпу/перетягування
    touchAngle: 45,
    /*
    // Курсор перетягування
    grabCursor: true,
    */

// Переключення при кліку на слайд
    slideToClickedSlide: true,

// Навігація по хешу
    hashNavigation: {
// Відстужувати стан
        watchState: true,
    },

// Управління клавіатурою
    keyboard: {
// Включити / виключити
        enabled: true,
// Включити / виключити
// коли слайдер в межах вьюпорта
        onlyInViewport: true,
// Включити / виключити
// управління клавішами pageUp, pageDown
        pageUpDown: true,
    },

// Управління колесом миші
    mousewheel: {
// Чутливість колеса миші
        sensitivity: 1,
// Клас об'єкту на якому буде працювати прокрутка
// eventsTarget: ".image-slider"
    },

    /*
    // Автовисота
    autoHeight: true,
    */

    /*
    slidesPerView: 2, // | 'auto' | 2.5
    */

    /*
    // Відключення функціоналу, якщо слайдів менше ніж потрібно
    watchOverflow: true,
    */

    /*
    // Відступ між слайдами
    spaceBetween: 30,
    */

    /*
    // К-сть прогорнутих слайдів
    slidesPerGroup: 3,
    */

    /*
    // Активний слайд по центру
    centeredSlides: true,
    */

    /*
    // Стратовий слайд
    initialSlide: 1,
    */

    /*
    // Мультирядність
    slidesPerColumn: 2,
    */

// Бескінечність
    loop: true,

// К-сть дубльованих слайдів
    loopedSlides: 3,

    /*
    freeMode: true,
    */

// Атопрокрутка
    autoplay: {
// Пауза між прокртукою
        delay: 5000,
// Закінчити на останньому слайді
        stopOnLastSlide: false,
// Відключити після ручного управління
        disableOnInteraction: false
    },

// Скорость
    speed: 2000,

// Вертикальний слайдер
    direction: 'vertical',

    /*
        // Ефекти перемикання слайдів
        // Перегортування
        effect: 'slide', // Ефект по дефолту
    */


    // Заміна прозорості
    effect: 'fade',
    // Доповнення до fade
    fadeEffect: {
        // Паралельна зміна прозорості
        crossFade: true
    },

    /*
    // Переворот
    effect: 'flip',
    // Доповнення до flip
    flipEffect: {
    // Тінь
    slideShadows: true,
    // Показ тільки активного слайду
    limitRotation: true
    },
    */

    /*
    // Куб
    effect: 'cube',
    // Доповнення до cube
    cubeEffect: {
    // Настройка тіні
    slideShadows: false,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94
    },
    */

    /*
    // Потік
    effect: 'coverflow',
    coverflowEffect: {
    // Кут
    rotate: 30,
    // Накладання
    stretch: 50,
    //Тінь
    slideShadows: false,
    },
    */

    /*
    // Брейкпоінти (адаптив)
    // Ширина екрану
    breakpoints: {
    320: {
    slidesPerView: 1,
    },
    480: {
    slidesPerView: 2,
    },
    992: {
    slidesPerView: 3,
    }
    },
    */

    /*
    // Брейкпоінти (адаптив)
    // Відношення сторінд
    breakpoints: {
    '@0.75': {
    slidesPerView: 1,
    },
    '@1.00': {
    slidesPerView: 2,
    },
    '@1.50': {
    slidesPerView: 3,
    }
    },
    */

    /*
    // Відключення предзавантаження картинок
    preloadImages: false,
    // Lazy Loading
    lazy: {
    // Підгружати на старті наступного слайду
    loadOnTransitionStart: false,
    // Підвантажувати наступну та попередню картинки
    loadPrevNext: true,
    },

    // Стеження за видимими слайдами
    watchSlidesProgress: true,
    // Додавання класу видимим слайдам
    watchSlidesVisibility: true,
    */

    /*
    // Зум картинки
    zoom: {
    // Максимальне збільшення
    maxRatio: 5,
    // Мінімальне збільшення
    minRatio: 1,
    },
    */

    /*
    // Мініатюри
    thumbs: {
    // Свайпер з мінатюрами та його налаштування
    swiper: {
    el: '.image-mini-slider',
    slidesPerView: 5,
    }
    },
    */

// Доступність
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },

});

/*
// Слайдер в слайдері
new Swiper('.image-in-slider', {
grabCursor: true,
// Навігація
// Буллети, дане положення, прогресбар
pagination: {
el: '.swiper-pagination',
// Буллети
type: 'bullets',
clickable: true,
// Динамічні булети
dynamicBullets: true,
},
// Коректна робота для дочірього слайдера
nested: true,
});
*/

