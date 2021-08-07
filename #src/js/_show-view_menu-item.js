// Перемикання тексту при натисненні на посилання
(function () {
    'use strict';

    var selector = {
        $button_1: document.querySelector('.subtitle-slider_menu__button_1'),
        $button_2: document.querySelector('.subtitle-slider_menu__button_2'),
        $one: document.querySelector('.text__info_1'),
        $two: document.querySelector('.text__info_2')
    };

    selector.$button_1.addEventListener('click', function Event_1(event) {
        event.preventDefault();
        if (isHidden(selector.$one)) {
            changeDisplay(selector.$one, 'block');
            changeDisplay(selector.$two, 'none');
        }
    });


    selector.$button_2.addEventListener('click', function Event_2(event) {
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