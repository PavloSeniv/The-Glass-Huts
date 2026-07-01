// ------- Форми: валідація + тост-повідомлення -------
// Будь-яка <form data-validate data-success="<i18n-ключ>"> перехоплюється:
// поля перевіряються (required + email), при помилці показується тост і
// підсвічуються поля; при успіху — тост подяки і форма очищується.
// Тост також доступний глобально: window.THG.toast(text, "ok"|"err").
"use strict";
(function () {
    // ---- тост ----
    var container = null;
    function ensureContainer() {
        if (container) return container;
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
        return container;
    }
    function showToast(message, type) {
        var c = ensureContainer();
        var el = document.createElement("div");
        el.className = "toast toast--" + (type || "ok");
        el.setAttribute("role", "status");
        el.textContent = message;
        c.appendChild(el);
        requestAnimationFrame(function () { el.classList.add("_show"); });
        var hide = function () {
            el.classList.remove("_show");
            setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
        };
        var timer = setTimeout(hide, 4000);
        el.addEventListener("click", function () { clearTimeout(timer); hide(); });
    }
    window.THG = window.THG || {};
    window.THG.toast = showToast;

    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }

    // ---- валідація ----
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function isEmailField(el) {
        return el.type === "email" || el.getAttribute("data-type") === "email";
    }
    function validateField(el) {
        var val = (el.value || "").trim();
        var ok = true;
        if (el.hasAttribute("required") && !val) ok = false;
        else if (val && isEmailField(el) && !EMAIL_RE.test(val)) ok = false;
        el.classList.toggle("_invalid", !ok);
        return ok;
    }
    function validateForm(form) {
        var fields = form.querySelectorAll("input, textarea, select");
        var valid = true;
        for (var i = 0; i < fields.length; i++) {
            var el = fields[i];
            if (el.type === "submit" || el.type === "button" || el.disabled) continue;
            if (!validateField(el)) valid = false;
        }
        return valid;
    }

    var forms = document.querySelectorAll("form[data-validate]");
    for (var i = 0; i < forms.length; i++) {
        (function (form) {
            // прибирати підсвічування помилки, коли користувач виправляє поле
            form.addEventListener("input", function (e) {
                if (e.target.classList && e.target.classList.contains("_invalid")) validateField(e.target);
            });
            form.addEventListener("change", function (e) {
                if (e.target.tagName === "SELECT" && e.target.classList.contains("_invalid")) validateField(e.target);
            });
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                if (!validateForm(form)) {
                    showToast(t("forms.invalid", "Please fill in the highlighted fields correctly."), "err");
                    return;
                }
                showToast(t(form.getAttribute("data-success"), "Thank you!"), "ok");
                form.reset();
                var inv = form.querySelectorAll("._invalid");
                for (var j = 0; j < inv.length; j++) inv[j].classList.remove("_invalid");
                // після успіху можемо перенаправити (напр. з оплати — на головну)
                var redirect = form.getAttribute("data-redirect");
                if (redirect) {
                    try { localStorage.removeItem("thg_booking"); } catch (e) { /* ignore */ }
                    setTimeout(function () { window.location.href = redirect; }, 1400);
                }
            });
        })(forms[i]);
    }
})();
