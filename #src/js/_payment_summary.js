// ------- Підсумок оплати (payment.html) -------
// Читає збережене бронювання (localStorage: thg_booking від _booking_calc.js)
// і заповнює: кошик (дати, гості, рядки, підсумок) та лівий блок із переліком
// обраних послуг. Немає збереження — лишаємо типову розмітку сторінки.
"use strict";
(function () {
    var root = document.querySelector("[data-payment]");
    if (!root) return;

    var data = null;
    try { data = JSON.parse(localStorage.getItem("thg_booking") || "null"); } catch (e) { /* ignore */ }
    if (!data) return; // прямий візит без бронювання — показуємо дефолт

    function fmt(n) {
        n = Math.max(0, Math.round(n || 0));
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "kr";
    }
    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }
    function fmtDate(iso) {
        var d = iso ? new Date(iso + "T00:00:00") : null;
        if (!d || isNaN(d.getTime())) return "—";
        return d.toLocaleDateString(); // формат за локаллю браузера
    }

    // ---- правий кошик ----
    var elCheckin = root.querySelector("[data-pay-checkin]");
    var elCheckout = root.querySelector("[data-pay-checkout]");
    var elGuests = root.querySelector("[data-pay-guests]");
    var elLines = root.querySelector("[data-pay-lines]");
    var elTotal = root.querySelector("[data-pay-total]");

    // Локація обраного будиночка (назва + посилання на карту)
    var elLocation = root.querySelector("[data-pay-location]");
    if (elLocation && data.locationLabelKey) {
        elLocation.setAttribute("data-i18n", data.locationLabelKey);
        elLocation.textContent = t(data.locationLabelKey, elLocation.textContent);
        var loc = window.THG_LOCATIONS && window.THG_LOCATIONS[data.location];
        if (loc && loc.map) elLocation.setAttribute("href", loc.map);
    }

    if (elCheckin) elCheckin.textContent = fmtDate(data.checkin);
    if (elCheckout) elCheckout.textContent = fmtDate(data.checkout);
    if (elGuests) elGuests.textContent = String(data.guests || 1);
    if (elTotal) elTotal.textContent = fmt(data.total);

    function addLine(parent, labelText, valueText, opts) {
        opts = opts || {};
        var row = document.createElement("div");
        row.className = "trash__block-info" + (opts.discount ? " trash__discount" : "");
        var l = document.createElement("p");
        if (opts.i18nKey) l.setAttribute("data-i18n", opts.i18nKey); // оновиться при зміні мови
        l.textContent = labelText;
        var v = document.createElement("p");
        v.textContent = valueText;
        row.appendChild(l);
        row.appendChild(v);
        parent.appendChild(row);
    }

    if (elLines) {
        elLines.innerHTML = "";
        var nights = data.nights || 0;
        if (nights > 0) {
            addLine(elLines, nights + " × " + fmt(data.priceNight), fmt(data.accommodation));
        }
        if (data.guestExtra > 0) {
            addLine(elLines, t("booking.summary_guest_extra", "Extra guest"), fmt(data.guestExtra), { i18nKey: "booking.summary_guest_extra" });
        }
        if (data.serviceItems && data.serviceItems.length) {
            data.serviceItems.forEach(function (s) {
                addLine(elLines, t(s.key, s.name), fmt(s.price), { i18nKey: s.key });
            });
        } else if (data.services > 0) {
            addLine(elLines, t("booking.summary_services", "Additional services"), fmt(data.services), { i18nKey: "booking.summary_services" });
        }
        if (data.cleaning > 0) {
            addLine(elLines, t("booking.summary_cleaning", "Cleaning fee"), fmt(data.cleaning), { i18nKey: "booking.summary_cleaning" });
        }
        if (data.discount > 0) {
            var label = t("booking.summary_discount", "Discount") + (data.coupon ? " (" + data.coupon + ")" : "");
            addLine(elLines, label, "-" + fmt(data.discount), { discount: true });
        }
    }

    // ---- лівий блок: перелік обраних послуг ----
    var elServices = document.querySelector("[data-pay-services]");
    if (elServices) {
        elServices.innerHTML = "";
        var items = data.serviceItems || [];
        if (!items.length) {
            var empty = document.createElement("p");
            empty.className = "payment-service__empty";
            empty.setAttribute("data-i18n", "payment.no_services");
            empty.textContent = t("payment.no_services", "No additional services selected.");
            elServices.appendChild(empty);
        } else {
            items.forEach(function (s) {
                var card = document.createElement("div");
                card.className = "payment-service";

                var head = document.createElement("div");
                head.className = "payment-service__head";
                var nm = document.createElement("span");
                nm.className = "payment-service__name";
                if (s.key) nm.setAttribute("data-i18n", s.key);
                nm.textContent = t(s.key, s.name);
                var pr = document.createElement("span");
                pr.className = "payment-service__price";
                pr.textContent = fmt(s.price);
                head.appendChild(nm);
                head.appendChild(pr);
                card.appendChild(head);

                if (s.title) {
                    var ti = document.createElement("p");
                    ti.className = "payment-service__title";
                    if (s.titleKey) ti.setAttribute("data-i18n", s.titleKey);
                    ti.textContent = t(s.titleKey, s.title);
                    card.appendChild(ti);
                }
                if (s.text) {
                    var tx = document.createElement("p");
                    tx.className = "payment-service__text";
                    if (s.textKey) tx.setAttribute("data-i18n", s.textKey);
                    tx.textContent = t(s.textKey, s.text);
                    card.appendChild(tx);
                }
                elServices.appendChild(card);
            });
        }
    }
})();
