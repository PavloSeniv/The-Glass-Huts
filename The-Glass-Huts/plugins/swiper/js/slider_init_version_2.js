// Ініціалізація слайдерів на внутрішніх сторінках (the-hut, the-area).
// Важливо: на сторінці кілька .swiper-container, тож ініціалізуємо КОЖЕН окремо
// (new Swiper('.swiper-container') створив би лише перший — решта «не вантажаться»),
// а кнопки/пагінацію прив'язуємо до елементів усередині свого контейнера,
// щоб слайдери не перехоплювали керування один в одного.
// Ефект за замовчуванням — 'cube' (як задумано дизайном). Окремий слайдер може
// перевизначити його атрибутом data-slider-effect="fade" (або "slide") —
// напр., вступний слайдер на the-area використовує м'який fade.
// Раніше куб глючив через freeMode + loopedSlides та через те, що
// ініціалізувався лише перший слайдер. Тепер кожен слайдер — окремо.
"use strict";
(function () {
    if (typeof Swiper === "undefined") return;

    // Ініціалізація одного контейнера. Доступна глобально (THG.initSlider), щоб
    // _area_locations.js міг перебудувати слайдер після зміни локації.
    function initSlider(container) {
            var effect = container.getAttribute("data-slider-effect") || "cube";
            var config = {
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
                effect: effect,
                a11y: {
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide"
                }
            };
            if (effect === "cube") {
                config.cubeEffect = {
                    slideShadows: false,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                };
            } else if (effect === "fade") {
                config.fadeEffect = { crossFade: true };
            }
            return new Swiper(container, config);
    }

    window.THG = window.THG || {};
    window.THG.initSlider = initSlider;

    var containers = document.querySelectorAll(".swiper-container");
    for (var i = 0; i < containers.length; i++) {
        initSlider(containers[i]);
    }
})();
