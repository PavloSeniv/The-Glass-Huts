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
    var COUPONS = window.THG_COUPONS || {};

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
    var couponList = root.querySelector("[data-coupon-list]");
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

    // ---- рендер послуг обраної локації (спільний конструктор у _service_ui.js) ----
    function renderServices(loc) {
        if (!servicesBox || !window.THG || !window.THG.buildServiceItem) return;
        servicesBox.innerHTML = "";
        loc.services.forEach(function (s) {
            servicesBox.appendChild(window.THG.buildServiceItem(s, { selected: false, onToggle: recalc }));
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
            if (current.map) {
                heroLabel.setAttribute("href", current.map);
                heroLabel.setAttribute("target", "_blank");
                heroLabel.setAttribute("rel", "noopener");
            }
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

    // ---- перелік активних промокодів (клік підставляє й застосовує код) ----
    function renderCoupons() {
        if (!couponList) return;
        couponList.innerHTML = "";
        Object.keys(COUPONS).forEach(function (code) {
            var c = COUPONS[code];
            var li = el("li", "trash__promo-item");
            var codeBtn = el("button", "trash__promo-code");
            codeBtn.type = "button";
            codeBtn.textContent = code;
            codeBtn.setAttribute("data-coupon-fill", code);
            var val = el("span", "trash__promo-val");
            val.textContent = c.type === "pct" ? "−" + c.value + "%" : "−" + fmt(c.value);
            li.appendChild(codeBtn);
            li.appendChild(val);
            couponList.appendChild(li);
        });
    }
    if (couponList) couponList.addEventListener("click", function (e) {
        var b = e.target.closest("[data-coupon-fill]");
        if (!b) return;
        if (couponInput) couponInput.value = b.getAttribute("data-coupon-fill");
        applyCoupon(e);
    });

    // ---- ініціалізація ----
    var params = new URLSearchParams(window.location.search);
    var initLoc = params.get("loc");
    if (!initLoc || !LOCS[initLoc]) initLoc = LOCS.order[0];
    buildSelector(initLoc);
    initDates();
    guests = MIN_GUESTS;
    if (guestCount) guestCount.textContent = String(guests);
    if (guestDec) guestDec.disabled = true;
    renderCoupons();
    setLocation(initLoc);
})();
