// ------- Модальні вікна -------
// Відкриває [data-modal-open="<name>"] → .modal[data-modal="<name>"].
// Закриває клік по [data-modal-close]/оверлею, Esc; блокує прокрутку body,
// повертає фокус на елемент-тригер. Анімація — через клас ._open (див. CSS).
"use strict";
(function () {
    var opener = null; // елемент, що відкрив модалку — щоб повернути фокус

    function getModal(name) {
        return document.querySelector('.modal[data-modal="' + name + '"]');
    }

    function open(modal) {
        if (!modal) return;
        modal.hidden = false;
        // наступний кадр — щоб спрацював transition
        requestAnimationFrame(function () { modal.classList.add("_open"); });
        document.body.classList.add("_modal-lock");
        // Шукаємо фокусовний елемент саме в діалозі: оверлей теж має
        // [data-modal-close], але це div без tabindex — його .focus() ніщо не робить.
        var dialog = modal.querySelector('[role="dialog"]') || modal;
        var focusable = dialog.querySelector("button, a[href], input, [tabindex]");
        if (focusable && focusable.focus) focusable.focus();
    }

    function close(modal) {
        if (!modal) return;
        modal.classList.remove("_open");
        document.body.classList.remove("_modal-lock");
        var done = function () {
            // Якщо модалку встигли знову відкрити під час анімації закриття,
            // не ховаємо її (та сама умова, що й у запасному setTimeout нижче).
            if (!modal.classList.contains("_open")) modal.hidden = true;
            modal.removeEventListener("transitionend", done);
        };
        modal.addEventListener("transitionend", done);
        // запасний варіант, якщо transitionend не спрацює
        setTimeout(function () { if (!modal.classList.contains("_open")) modal.hidden = true; }, 400);
        if (opener && opener.focus) opener.focus();
        opener = null;
    }

    function closeAny() {
        var openModal = document.querySelector(".modal._open");
        if (openModal) close(openModal);
    }

    document.addEventListener("click", function (e) {
        var trigger = e.target.closest("[data-modal-open]");
        if (trigger) {
            e.preventDefault();
            opener = trigger;
            open(getModal(trigger.getAttribute("data-modal-open")));
            return;
        }
        if (e.target.closest("[data-modal-close]")) {
            e.preventDefault();
            closeAny();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" || e.key === "Esc") closeAny();
    });
})();
