// Перемикання тексту при натисненні на посилання слайдер 1(Activities)
(function () {
    'use strict';

    var selector = {
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
        $button_3: document.querySelector('.subtitle-slider_menu__button_2-3'),
        $one: document.querySelector('.text__info_2-1'),
        $two: document.querySelector('.text__info_2-2'),
        $three: document.querySelector('.text__info_2-3')
    };

    selector.$button_1.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$one)) {
            changeDisplay(selector.$one, 'block');
            changeDisplay(selector.$two, 'none');
            changeDisplay(selector.$three, 'none');
        }
    });


    selector.$button_2.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$two)) {
            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'block');
            changeDisplay(selector.$three, 'none');
        }
    });

    selector.$button_3.addEventListener('click', function (event) {
        event.preventDefault();
        if (isHidden(selector.$three)) {
            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'none');
            changeDisplay(selector.$three, 'block');
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
// Активний стан табів-перемикачів: перше посилання підсвічене одразу,
// клік переносить підсвітку (клас _active стилізується в the_area.scss)
(function () {
    'use strict';

    document.querySelectorAll('.text__subtitle-slider_menu').forEach(function (menu) {
        var links = menu.querySelectorAll('a');
        if (!links.length) return;

        links[0].classList.add('_active');

        links.forEach(function (link) {
            link.addEventListener('click', function () {
                links.forEach(function (l) {
                    l.classList.remove('_active');
                });
                link.classList.add('_active');
            });
        });
    });

}());
