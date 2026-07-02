// ------- М'яка поява секцій при прокручуванні -------
// Елементи з класом ._reveal плавно з'являються (fade + translateY), коли
// потрапляють у в'юпорт. КЛЮЧОВЕ: CSS ховає ._reveal лише під html._reveal-init,
// і цей клас додаємо тут — безпосередньо перед спостереженням. Тож без JS,
// без IntersectionObserver, при prefers-reduced-motion або якщо бандл упав
// раніше за цей модуль, контент просто лишається видимим.
"use strict";
(function () {
    function init() {
        var nodes = document.querySelectorAll("._reveal");
        if (!nodes.length) return;

        var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce || !("IntersectionObserver" in window)) {
            return; // клас-вмикач не додаємо — секції й так видимі
        }

        // Лише тепер, коли точно зможемо показати назад, дозволяємо CSS сховати:
        document.documentElement.classList.add("_reveal-init");

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("_in");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        for (var i = 0; i < nodes.length; i++) io.observe(nodes[i]);
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
