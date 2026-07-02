// ------- Підсумок оплати (payment.html) -------
// Читає збережене бронювання (localStorage: thg_booking від _booking_calc.js).
// Лівий блок: акордеон послуг обраної локації (як у booking) з можливістю
// додавати/прибирати послуги прямо тут. Правий блок: кошик (дати, гості,
// рядки, підсумок). Зміни перераховуються і зберігаються назад у thg_booking.
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
        return d.toLocaleDateString();
    }

    var LOCS = window.THG_LOCATIONS || {};
    var COUPONS = window.THG_COUPONS || {};
    var loc = LOCS[data.location];
    var catalog = (loc && loc.services) || [];

    // Множина обраних послуг (за ключем назви)
    var selectedKeys = {};
    (data.serviceItems || []).forEach(function (s) { if (s && s.key) selectedKeys[s.key] = true; });

    // ---- елементи правого кошика ----
    var elCheckin = root.querySelector("[data-pay-checkin]");
    var elCheckout = root.querySelector("[data-pay-checkout]");
    var elGuests = root.querySelector("[data-pay-guests]");
    var elLines = root.querySelector("[data-pay-lines]");
    var elTotal = root.querySelector("[data-pay-total]");
    var elLocation = root.querySelector("[data-pay-location]");

    if (elLocation && data.locationLabelKey) {
        elLocation.setAttribute("data-i18n", data.locationLabelKey);
        elLocation.textContent = t(data.locationLabelKey, elLocation.textContent);
        if (loc && loc.map) elLocation.setAttribute("href", loc.map);
    }
    if (elCheckin) elCheckin.textContent = fmtDate(data.checkin);
    if (elCheckout) elCheckout.textContent = fmtDate(data.checkout);
    if (elGuests) elGuests.textContent = String(data.guests || 1);

    function addLine(parent, labelText, valueText, opts) {
        opts = opts || {};
        var row = document.createElement("div");
        row.className = "trash__block-info" + (opts.discount ? " trash__discount" : "");
        var l = document.createElement("p");
        if (opts.i18nKey) l.setAttribute("data-i18n", opts.i18nKey);
        l.textContent = labelText;
        var v = document.createElement("p");
        v.textContent = valueText;
        row.appendChild(l);
        row.appendChild(v);
        parent.appendChild(row);
    }

    // Перелік обраних послуг у форматі кошика (з каталогу локації)
    function selectedServiceItems() {
        var arr = [];
        catalog.forEach(function (s) {
            if (!selectedKeys[s.nameKey]) return;
            arr.push({
                key: s.nameKey, name: t(s.nameKey, ""),
                titleKey: s.titleKey, title: t(s.titleKey, ""),
                textKey: s.textKey, text: t(s.textKey, ""),
                price: s.price
            });
        });
        return arr;
    }

    function renderCart() {
        if (elTotal) elTotal.textContent = fmt(data.total);
        if (!elLines) return;
        elLines.innerHTML = "";
        var nights = data.nights || 0;
        if (nights > 0) addLine(elLines, nights + " × " + fmt(data.priceNight), fmt(data.accommodation));
        if (data.guestExtra > 0) addLine(elLines, t("booking.summary_guest_extra", "Extra guest"), fmt(data.guestExtra), { i18nKey: "booking.summary_guest_extra" });
        if (data.serviceItems && data.serviceItems.length) {
            data.serviceItems.forEach(function (s) { addLine(elLines, t(s.key, s.name), fmt(s.price), { i18nKey: s.key }); });
        }
        if (data.cleaning > 0) addLine(elLines, t("booking.summary_cleaning", "Cleaning fee"), fmt(data.cleaning), { i18nKey: "booking.summary_cleaning" });
        if (data.discount > 0) {
            var label = t("booking.summary_discount", "Discount") + (data.coupon ? " (" + data.coupon + ")" : "");
            addLine(elLines, label, "-" + fmt(data.discount), { discount: true });
        }
    }

    // Перерахунок після додавання/прибирання послуги + збереження
    function recompute() {
        var items = selectedServiceItems();
        var servicesTotal = 0;
        items.forEach(function (s) { servicesTotal += s.price; });
        var subtotal = (data.accommodation || 0) + (data.guestExtra || 0) + servicesTotal + (data.cleaning || 0);
        var coupon = COUPONS[data.coupon];
        var discount = 0;
        if (coupon) {
            discount = coupon.type === "pct" ? subtotal * coupon.value / 100 : coupon.value;
            discount = Math.min(discount, subtotal);
        }
        data.serviceItems = items;
        data.services = servicesTotal;
        data.discount = Math.round(discount);
        data.total = Math.max(0, subtotal - discount);
        try { localStorage.setItem("thg_booking", JSON.stringify(data)); } catch (e) { /* ignore */ }
        renderCart();
    }

    // ---- лівий блок: акордеон каталогу послуг з додаванням/прибиранням ----
    var servicesBox = document.querySelector("[data-pay-services]");
    if (servicesBox) {
        servicesBox.innerHTML = "";
        if (window.THG && window.THG.buildServiceItem && catalog.length) {
            catalog.forEach(function (s) {
                servicesBox.appendChild(window.THG.buildServiceItem(s, {
                    selected: !!selectedKeys[s.nameKey],
                    onToggle: function (added, service) {
                        if (added) selectedKeys[service.nameKey] = true;
                        else delete selectedKeys[service.nameKey];
                        recompute();
                    }
                }));
            });
        } else {
            var empty = document.createElement("p");
            empty.className = "payment-service__empty";
            empty.setAttribute("data-i18n", "payment.no_services");
            empty.textContent = t("payment.no_services", "No additional services selected.");
            servicesBox.appendChild(empty);
        }
    }

    renderCart();
})();
