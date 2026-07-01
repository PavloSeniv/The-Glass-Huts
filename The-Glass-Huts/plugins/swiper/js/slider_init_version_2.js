// Ініціалізація слайдерів на внутрішніх сторінках (the-hut, the-area).
// Важливо: на сторінці кілька .swiper-container, тож ініціалізуємо КОЖЕН окремо
// (new Swiper('.swiper-container') створив би лише перший — решта «не вантажаться»),
// а кнопки/пагінацію прив'язуємо до елементів усередині свого контейнера,
// щоб слайдери не перехоплювали керування один в одного.
// Ефект — простий 'slide' (cube + freeMode + loop давали збої під час переходів).
"use strict";
(function () {
    if (typeof Swiper === "undefined") return;
    var containers = document.querySelectorAll(".swiper-container");
    for (var i = 0; i < containers.length; i++) {
        (function (container) {
            new Swiper(container, {
                navigation: {
                    nextEl: container.querySelector(".swiper-button-next"),
                    prevEl: container.querySelector(".swiper-button-prev"),
                },
                pagination: {
                    el: container.querySelector(".swiper-pagination"),
                    type: "fraction",
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span> / <span class="' + totalClass + '"></span>';
                    },
                },
                loop: true,
                grabCursor: true,
                speed: 800,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                effect: "slide",
                a11y: {
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide"
                }
            });
        })(containers[i]);
    }
})();
