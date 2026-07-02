// ------- Ініціалізація календаря flatpickr для сторінки бронювання (задача 15) -------
// Підключається ПІСЛЯ main_script.min.js, тож дати вже виставлені _booking_calc.js.
// Формат значення — Y-m-d (сумісно з parseDate() у _booking_calc.js), а користувач
// бачить дружній формат через altInput. Дата виїзду завжди мінімум на день пізніше
// за дату заїзду. Після вибору дати шлемо подію "change", щоб спрацював recalc().
// Локалізація: словники uk/da/de з flatpickr_l10n.js; мова — з <html lang>,
// перемикається наживо разом із перемикачем мов сайту (MutationObserver).
"use strict";
(function () {
    if (typeof flatpickr === "undefined") return;

    var checkin = document.querySelector("[data-checkin]");
    var checkout = document.querySelector("[data-checkout]");
    if (!checkin && !checkout) return;

    function fire(el) {
        if (el) el.dispatchEvent(new Event("change", { bubbles: true }));
    }
    function addDays(d, n) {
        var x = new Date(d);
        x.setDate(x.getDate() + n);
        return x;
    }
    // Локалізований aria-label для згенерованого flatpickr altInput
    function decorate(fp, ariaKey, fallback) {
        if (!fp || !fp.altInput) return;
        fp.altInput.setAttribute("data-i18n-aria", ariaKey);
        var t = (window.THG && typeof window.THG.t === "function") ? window.THG.t(ariaKey) : null;
        fp.altInput.setAttribute("aria-label", t || fallback);
    }

    // ---- локаль за мовою сайту (en → вбудований default) ----
    var L10N = { uk: "uk", da: "da", de: "de" };
    function currentLocale() {
        var lang = (document.documentElement.getAttribute("lang") || "en").slice(0, 2);
        var key = L10N[lang];
        return (key && flatpickr.l10ns && flatpickr.l10ns[key]) || flatpickr.l10ns["default"];
    }

    var base = {
        dateFormat: "Y-m-d",
        altInput: true,
        altFormat: "M j, Y",
        altInputClass: "trash__date flatpickr-alt",
        disableMobile: true,        // не підміняти нативним пікером — тримаємо єдиний вигляд
        locale: currentLocale()
    };

    var checkinFp = null, checkoutFp = null;

    if (checkout) {
        checkoutFp = flatpickr(checkout, {
            dateFormat: base.dateFormat,
            altInput: base.altInput,
            altFormat: base.altFormat,
            altInputClass: base.altInputClass,
            disableMobile: base.disableMobile,
            locale: base.locale,
            minDate: (checkin && checkin.value) ? addDays(checkin.value, 1) : addDays(new Date(), 1),
            onChange: function () { fire(checkout); }
        });
        decorate(checkoutFp, "booking.cart_check_out", "Check out");
    }

    if (checkin) {
        checkinFp = flatpickr(checkin, {
            dateFormat: base.dateFormat,
            altInput: base.altInput,
            altFormat: base.altFormat,
            altInputClass: base.altInputClass,
            disableMobile: base.disableMobile,
            locale: base.locale,
            minDate: "today",
            onChange: function (selected) {
                if (checkoutFp && selected[0]) {
                    var min = addDays(selected[0], 1);
                    checkoutFp.set("minDate", min);
                    var cur = checkoutFp.selectedDates[0];
                    if (!cur || cur <= selected[0]) {
                        checkoutFp.setDate(min, true); // true → тригерить onChange checkout → recalc
                    }
                }
                fire(checkin);
            }
        });
        decorate(checkinFp, "booking.cart_check_in", "Check in");
    }

    // ---- жива зміна мови: _i18n.js оновлює <html lang> — підхоплюємо її ----
    if (window.MutationObserver) {
        new MutationObserver(function () {
            var loc = currentLocale();
            [checkinFp, checkoutFp].forEach(function (fp) {
                if (!fp) return;
                fp.set("locale", loc);
                // переформатувати текст altInput у новій мові, без події change
                fp.setDate(fp.selectedDates, false);
            });
        }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    }
})();
