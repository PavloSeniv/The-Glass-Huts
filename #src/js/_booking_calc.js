// ------- Калькулятор бронювання (booking.html) — багатолокаційний -------
// Локація визначається параметром ?loc= (зі слайдера на головній) або
// селектором. Послуги й ціни беруться з обраної локації (window.THG_LOCATIONS).
// Рахує ночі, доплату за 2-го гостя, послуги, знижку за промокодом і підсумок.
// Стан зберігається в localStorage (thg_booking) для сторінки оплати.
"use strict";
(function () {
    var root = document.querySelector("[data-booking]");
    if (!root) return;
    var LOCS = window.THG_LOCATIONS;
    if (!LOCS) return;

    var MIN_GUESTS = 1, MAX_GUESTS = 2;
    var COUPONS = {
        "GLASS10": { type: "pct", value: 10 },
        "FOREST20": { type: "pct", value: 20 },
        "WELCOME500": { type: "fixed", value: 500 }
    };

    // Елементи керування
    var locSelect = document.querySelector("[data-location-select]");
    var heroLabel = document.querySelector("[data-location-label]");
    var priceDisplay = root.querySelector("[data-price-display]");
    var servicesBox = document.querySelector("[data-services-container]");
    var checkin = root.querySelector("[data-checkin]");
    var checkout = root.querySelector("[data-checkout]");
    var guestCount = root.querySelector("[data-guest-count]");
    var guestDec = root.querySelector("[data-guest-dec]");
    var guestInc = root.querySelector("[data-guest-inc]");
    var couponInput = root.querySelector("[data-coupon-input]");
    var couponApply = root.querySelector("[data-coupon-apply]");
    var couponMsg = root.querySelector("[data-coupon-msg]");
    var out = {
        nights: root.querySelector("[data-sum-nights]"),
        guest: root.querySelector("[data-sum-guest]"),
        guestRow: root.querySelector("[data-sum-guest-row]"),
        services: root.querySelector("[data-sum-services]"),
        cleaning: root.querySelector("[data-sum-cleaning]"),
        discount: root.querySelector("[data-sum-discount]"),
        total: root.querySelector("[data-sum-total]")
    };

    // Стан
    var current = null;               // поточна локація
    var PRICE_NIGHT = 0, GUEST_FEE = 0, CLEANING = 0;
    var guests = MIN_GUESTS;
    var coupon = null, couponCode = "";

    // ---- утиліти ----
    function fmt(n) {
        n = Math.max(0, Math.round(n));
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "kr";
    }
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
    function parseDate(v) { if (!v) return null; var d = new Date(v + "T00:00:00"); return isNaN(d.getTime()) ? null : d; }
    function nightsBetween() {
        var a = parseDate(checkin && checkin.value), b = parseDate(checkout && checkout.value);
        if (!a || !b) return 0;
        var diff = Math.floor((b - a) / 86400000);
        return diff > 0 ? diff : 0;
    }
    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }
    function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }

    var CHEVRON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-down" viewbox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>';

    // ---- рендер послуг обраної локації ----
    function renderServices(loc) {
        if (!servicesBox) return;
        servicesBox.innerHTML = "";
        loc.services.forEach(function (s) {
            var item = el("div", "choose-services__spoiler-item");

            var btn = el("button", "choose-services__spoiler-title-button");
            btn.type = "button";
            btn.setAttribute("tabindex", "-1");
            btn.setAttribute("data-spoller", "");
            var icon = el("span", "choise-services__spoiler-icon-plus");
            var titleText = el("div", "choose-services__spoiler-title-text");
            var nameSpan = el("span");
            nameSpan.setAttribute("data-i18n", s.nameKey);
            nameSpan.textContent = t(s.nameKey, "");
            var priceP = el("p");
            priceP.textContent = s.price + "kr";
            titleText.appendChild(nameSpan);
            titleText.appendChild(priceP);
            btn.appendChild(icon);
            btn.appendChild(titleText);
            btn.insertAdjacentHTML("beforeend", CHEVRON);

            var content = el("div", "choose-services__spoiler-content");
            content.hidden = true; // спойлер згорнутий; плагін розгортає по кліку
            var info = el("div", "choose-services__spoiler-info");
            var titleP = el("p", "choose-services__spoiler-title");
            titleP.setAttribute("data-i18n", s.titleKey);
            titleP.textContent = t(s.titleKey, "");
            var textP = el("p", "choose-services__spoiler-text");
            textP.setAttribute("data-i18n", s.textKey);
            textP.textContent = t(s.textKey, "");
            var label = el("label", "service-add");
            var check = el("input", "service-add__check");
            check.type = "checkbox";
            check.setAttribute("data-service", "");
            check.setAttribute("data-price", String(s.price));
            var addSpan = el("span", "service-add__label");
            addSpan.setAttribute("data-i18n", "booking.service_add");
            addSpan.textContent = t("booking.service_add", "Add to booking");
            var priceSpan = el("span", "service-add__price");
            priceSpan.textContent = s.price + "kr";
            label.appendChild(check);
            label.appendChild(addSpan);
            label.appendChild(priceSpan);
            info.appendChild(titleP);
            info.appendChild(textP);
            info.appendChild(label);
            content.appendChild(info);

            item.appendChild(btn);
            item.appendChild(content);
            servicesBox.appendChild(item);
        });
    }

    function selectedServices() {
        var items = [];
        if (!servicesBox) return items;
        var checks = servicesBox.querySelectorAll("[data-service]");
        for (var i = 0; i < checks.length; i++) {
            if (!checks[i].checked) continue;
            var price = parseInt(checks[i].getAttribute("data-price"), 10) || 0;
            var itemEl = checks[i].closest(".choose-services__spoiler-item");
            var nameEl = itemEl && itemEl.querySelector(".choose-services__spoiler-title-text [data-i18n]");
            var titleEl = itemEl && itemEl.querySelector(".choose-services__spoiler-title");
            var textEl = itemEl && itemEl.querySelector(".choose-services__spoiler-text");
            items.push({
                key: nameEl ? nameEl.getAttribute("data-i18n") : "",
                name: nameEl ? nameEl.textContent.trim() : "",
                titleKey: titleEl ? titleEl.getAttribute("data-i18n") : "",
                title: titleEl ? titleEl.textContent.trim() : "",
                textKey: textEl ? textEl.getAttribute("data-i18n") : "",
                text: textEl ? textEl.textContent.trim() : "",
                price: price
            });
        }
        return items;
    }

    // ---- перерахунок ----
    function recalc() {
        var nights = nightsBetween();
        var accommodation = nights * PRICE_NIGHT;
        var guestExtra = nights * GUEST_FEE * (guests - 1);
        var serviceItems = selectedServices();
        var services = 0;
        for (var si = 0; si < serviceItems.length; si++) services += serviceItems[si].price;
        var cleaning = nights > 0 ? CLEANING : 0;
        var subtotal = accommodation + guestExtra + services + cleaning;

        var discount = 0;
        if (coupon) {
            discount = coupon.type === "pct" ? subtotal * coupon.value / 100 : coupon.value;
            discount = Math.min(discount, subtotal);
        }
        var total = Math.max(0, subtotal - discount);

        if (out.nights) out.nights.textContent = fmt(accommodation);
        if (out.guest) out.guest.textContent = fmt(guestExtra);
        if (out.guestRow) out.guestRow.hidden = guestExtra <= 0;
        if (out.services) out.services.textContent = fmt(services);
        if (out.cleaning) out.cleaning.textContent = fmt(cleaning);
        if (out.discount) out.discount.textContent = (discount > 0 ? "-" : "") + fmt(discount);
        if (out.total) out.total.textContent = fmt(total);

        try {
            localStorage.setItem("thg_booking", JSON.stringify({
                location: current ? current.id : "",
                locationLabelKey: current ? current.labelKey : "",
                checkin: checkin ? checkin.value : "",
                checkout: checkout ? checkout.value : "",
                nights: nights, guests: guests,
                priceNight: PRICE_NIGHT, guestFee: GUEST_FEE, guestExtra: guestExtra,
                accommodation: accommodation, services: services, serviceItems: serviceItems,
                cleaning: cleaning, discount: Math.round(discount), total: total, coupon: couponCode
            }));
        } catch (e) { /* ignore */ }
    }

    // ---- локація ----
    function setLocation(id) {
        current = LOCS[id] || LOCS[LOCS.order[0]];
        PRICE_NIGHT = current.priceNight;
        GUEST_FEE = current.guestFee;
        CLEANING = current.cleaning;
        if (heroLabel) {
            heroLabel.setAttribute("data-i18n", current.labelKey);
            heroLabel.textContent = t(current.labelKey, "");
        }
        if (priceDisplay) priceDisplay.textContent = fmt(PRICE_NIGHT);
        renderServices(current);
        recalc();
    }

    function buildSelector(initId) {
        if (!locSelect) return;
        locSelect.innerHTML = "";
        LOCS.order.forEach(function (id) {
            var o = el("option");
            o.value = id;
            o.setAttribute("data-i18n", LOCS[id].labelKey);
            o.textContent = t(LOCS[id].labelKey, id);
            locSelect.appendChild(o);
        });
        locSelect.value = initId;
        locSelect.addEventListener("change", function () { setLocation(locSelect.value); });
    }

    // ---- гості ----
    function setGuests(v) {
        guests = Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, v));
        if (guestCount) guestCount.textContent = String(guests);
        if (guestDec) guestDec.disabled = guests <= MIN_GUESTS;
        if (guestInc) guestInc.disabled = guests >= MAX_GUESTS;
        recalc();
    }
    if (guestDec) guestDec.addEventListener("click", function () { setGuests(guests - 1); });
    if (guestInc) guestInc.addEventListener("click", function () { setGuests(guests + 1); });

    // ---- дати ----
    function syncCheckoutMin() {
        var a = parseDate(checkin && checkin.value);
        if (a && checkout) {
            var min = new Date(a); min.setDate(min.getDate() + 1);
            checkout.min = iso(min);
            var b = parseDate(checkout.value);
            if (b && b <= a) checkout.value = iso(min);
        }
    }
    function initDates() {
        var today = new Date();
        var t2 = new Date(); t2.setDate(t2.getDate() + 2);
        if (checkin) { checkin.min = iso(today); if (!checkin.value) checkin.value = iso(today); }
        if (checkout && !checkout.value) checkout.value = iso(t2);
        syncCheckoutMin();
    }
    if (checkin) checkin.addEventListener("change", function () { syncCheckoutMin(); recalc(); });
    if (checkout) checkout.addEventListener("change", recalc);

    // послуги: делегування (елементи рендеряться динамічно)
    if (servicesBox) servicesBox.addEventListener("change", function (e) {
        if (e.target && e.target.hasAttribute && e.target.hasAttribute("data-service")) recalc();
    });

    // ---- промокод ----
    function showMsg(key, ok) {
        if (!couponMsg) return;
        couponMsg.setAttribute("data-i18n", key);
        couponMsg.textContent = t(key, key);
        couponMsg.hidden = false;
        couponMsg.classList.toggle("_ok", !!ok);
        couponMsg.classList.toggle("_err", !ok);
    }
    function applyCoupon(e) {
        if (e) e.preventDefault();
        var code = (couponInput && couponInput.value || "").trim().toUpperCase();
        if (COUPONS[code]) { coupon = COUPONS[code]; couponCode = code; showMsg("booking.coupon_applied", true); }
        else { coupon = null; couponCode = ""; showMsg("booking.coupon_invalid", false); }
        recalc();
    }
    if (couponApply) couponApply.addEventListener("click", applyCoupon);
    if (couponInput) couponInput.addEventListener("keydown", function (e) { if (e.key === "Enter") applyCoupon(e); });

    // ---- ініціалізація ----
    var params = new URLSearchParams(window.location.search);
    var initLoc = params.get("loc");
    if (!initLoc || !LOCS[initLoc]) initLoc = LOCS.order[0];
    buildSelector(initLoc);
    initDates();
    guests = MIN_GUESTS;
    if (guestCount) guestCount.textContent = String(guests);
    if (guestDec) guestDec.disabled = true;
    setLocation(initLoc);
})();
