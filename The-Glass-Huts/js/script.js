// JS-функція визначення підтримки WebP
// Додавання webp формату у css
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

// Перевірка на тип пристрою
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
const menuButton = document.querySelector('.menu__button-mobile');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuButton.classList.toggle('_active');
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
                menuButton.classList.remove('_active');

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

// Перемикання тексту при натисненні на посилання слайдер 1(Activities)
(function () {
    'use strict';

    let selector = {
        $button_1: document.querySelector('.subtitle-slider_menu__button_1-1'),
        $button_2: document.querySelector('.subtitle-slider_menu__button_1-2'),
        $one: document.querySelector('.text__info_1-1'),
        $two: document.querySelector('.text__info_1-2')
    };

    selector.$button_1.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$one)) {
            changeDisplay(selector.$one, 'block');
            changeDisplay(selector.$two, 'none');
        }
    });


    selector.$button_2.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$two)) {
            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'block');
        }
    });

    function changeDisplay($node, value) {
        $node.style.display = value;
        return $node;
    }

    function isHidden($node) {
        return window.getComputedStyle($node).display === 'none';
    }

}());

// Перемикання тексту при натисненні на посилання слайдер 2(Activities)
(function () {
    'use strict';

    let selector = {
        $button_1: document.querySelector('.subtitle-slider_menu__button_2-1'),
        $button_2: document.querySelector('.subtitle-slider_menu__button_2-2'),
        $one: document.querySelector('.text__info_2-1'),
        $two: document.querySelector('.text__info_2-2')
    };

    selector.$button_1.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$one)) {
            changeDisplay(selector.$one, 'block');
            changeDisplay(selector.$two, 'none');
        }
    });


    selector.$button_2.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$two)) {
            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'block');
        }
    });

    function changeDisplay($node, value) {
        $node.style.display = value;
        return $node;
    }

    function isHidden($node) {
        return window.getComputedStyle($node).display === 'none';
    }

}());

// Перемикання тексту при натисненні на посилання слайдер 3(Activities)
(function () {
    'use strict';

    let selector = {
        $button_1: document.querySelector('.subtitle-slider_menu__button_3-1'),
        $button_2: document.querySelector('.subtitle-slider_menu__button_3-2'),
        $one: document.querySelector('.text__info_3-1'),
        $two: document.querySelector('.text__info_3-2')
    };

    selector.$button_1.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$one)) {
            changeDisplay(selector.$one, 'block');
            changeDisplay(selector.$two, 'none');
        }
    });


    selector.$button_2.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$two)) {
            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'block');
        }
    });

    function changeDisplay($node, value) {
        $node.style.display = value;
        return $node;
    }

    function isHidden($node) {
        return window.getComputedStyle($node).display === 'none';
    }

}());

// Перемикання тексту при натисненні на посилання слайдер 4(Activities)
(function () {
    'use strict';

    let selector = {
        $button_1: document.querySelector('.subtitle-slider_menu__button_4-1'),
        $button_2: document.querySelector('.subtitle-slider_menu__button_4-2'),
        $one: document.querySelector('.text__info_4-1'),
        $two: document.querySelector('.text__info_4-2')
    };

    selector.$button_1.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$one)) {
            changeDisplay(selector.$one, 'block');
            changeDisplay(selector.$two, 'none');
        }
    });


    selector.$button_2.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$two)) {
            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'block');
        }
    });

    function changeDisplay($node, value) {
        $node.style.display = value;
        return $node;
    }

    function isHidden($node) {
        return window.getComputedStyle($node).display === 'none';
    }

}());