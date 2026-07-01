// ------- Калькулятор бронювання (booking.html) -------
// Рахує ночі за датами, доплату за 2-го гостя, обрані послуги, знижку за
// промокодом і підсумок. Формат ціни — данський (3.200kr). Стан зберігається
// в localStorage (thg_booking), щоб сторінка оплати підхопила його.
"use strict";
(function () {
    var root = document.querySelector("[data-booking]");
    if (!root) return; // виконуємо лише на сторінці бронювання

    var PRICE_NIGHT = parseInt(root.getAttribute("data-price-night"), 10) || 0;
    var GUEST_FEE = parseInt(root.getAttribute("data-guest-fee"), 10) || 0; // доплата за кожного додаткового гостя/ніч
    var CLEANING = parseInt(root.getAttribute("data-cleaning"), 10) || 0;
    var MIN_GUESTS = 1, MAX_GUESTS = 2; // будиночок розрахований на двох

    // Демо-промокоди: pct — відсоток, fixed — фіксована сума (kr)
    var COUPONS = {
        "GLASS10": { type: "pct", value: 10 },
        "FOREST20": { type: "pct", value: 20 },
        "WELCOME500": { type: "fixed", value: 500 }
    };

    var checkin = root.querySelector("[data-checkin]");
    var checkout = root.querySelector("[data-checkout]");
    var guestCount = root.querySelector("[data-guest-count]");
    var guestDec = root.querySelector("[data-guest-dec]");
    var guestInc = root.querySelector("[data-guest-inc]");
    var couponInput = root.querySelector("[data-coupon-input]");
    var couponApply = root.querySelector("[data-coupon-apply]");
    var couponMsg = root.querySelector("[data-coupon-msg]");
    // Чекбокси послуг лежать у лівій колонці, поза .trash
    var serviceChecks = document.querySelectorAll("[data-service]");

    var out = {
        nights: root.querySelector("[data-sum-nights]"),
        guest: root.querySelector("[data-sum-guest]"),
        guestRow: root.querySelector("[data-sum-guest-row]"),
        services: root.querySelector("[data-sum-services]"),
        cleaning: root.querySelector("[data-sum-cleaning]"),
        discount: root.querySelector("[data-sum-discount]"),
        total: root.querySelector("[data-sum-total]")
    };

    var guests = MIN_GUESTS;
    var coupon = null;     // застосований об'єкт промокоду
    var couponCode = "";   // код застосованого промокоду

    // ---- утиліти ----
    function fmt(n) {
        n = Math.max(0, Math.round(n));
        // тисячний роздільник "." (данський формат): 3200 -> 3.200
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "kr";
    }
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
    function parseDate(v) {
        if (!v) return null;
        var d = new Date(v + "T00:00:00");
        return isNaN(d.getTime()) ? null : d;
    }
    function nightsBetween() {
        var a = parseDate(checkin && checkin.value);
        var b = parseDate(checkout && checkout.value);
        if (!a || !b) return 0;
        var diff = Math.floor((b - a) / 86400000);
        return diff > 0 ? diff : 0;
    }
    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }

    // Перелік обраних послуг: {key, name, titleKey, title, textKey, text, price}
    // — щоб сторінка оплати показала їх поіменно з описом і перекладала за i18n.
    function selectedServices() {
        var items = [];
        for (var i = 0; i < serviceChecks.length; i++) {
            if (!serviceChecks[i].checked) continue;
            var price = parseInt(serviceChecks[i].getAttribute("data-price"), 10) || 0;
            var itemEl = serviceChecks[i].closest(".choose-services__spoiler-item");
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

    // ---- головний перерахунок ----
    function recalc() {
        var nights = nightsBetween();
        var accommodation = nights * PRICE_NIGHT;
        var guestExtra = nights * GUEST_FEE * (guests - 1); // доплата за додаткових гостей
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
        if (out.guestRow) out.guestRow.hidden = guestExtra <= 0; // рядок лише коли є доплата
        if (out.services) out.services.textContent = fmt(services);
        if (out.cleaning) out.cleaning.textContent = fmt(cleaning);
        if (out.discount) out.discount.textContent = (discount > 0 ? "-" : "") + fmt(discount);
        if (out.total) out.total.textContent = fmt(total);

        try {
            localStorage.setItem("thg_booking", JSON.stringify({
                checkin: checkin ? checkin.value : "",
                checkout: checkout ? checkout.value : "",
                nights: nights, guests: guests,
                priceNight: PRICE_NIGHT, guestFee: GUEST_FEE, guestExtra: guestExtra,
                accommodation: accommodation, services: services, serviceItems: serviceItems,
                cleaning: cleaning, discount: Math.round(discount),
                total: total, coupon: couponCode
            }));
        } catch (e) { /* localStorage недоступний */ }
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
        if (checkin) {
            checkin.min = iso(today);
            if (!checkin.value) checkin.value = iso(today);
        }
        if (checkout && !checkout.value) checkout.value = iso(t2);
        syncCheckoutMin();
    }
    if (checkin) checkin.addEventListener("change", function () { syncCheckoutMin(); recalc(); });
    if (checkout) checkout.addEventListener("change", recalc);

    // ---- послуги ----
    for (var i = 0; i < serviceChecks.length; i++) {
        serviceChecks[i].addEventListener("change", recalc);
    }

    // ---- промокод ----
    function showMsg(key, ok) {
        if (!couponMsg) return;
        couponMsg.setAttribute("data-i18n", key); // оновлюється при зміні мови
        couponMsg.textContent = t(key, key);
        couponMsg.hidden = false;
        couponMsg.classList.toggle("_ok", !!ok);
        couponMsg.classList.toggle("_err", !ok);
    }
    function applyCoupon(e) {
        if (e) e.preventDefault();
        var code = (couponInput && couponInput.value || "").trim().toUpperCase();
        if (COUPONS[code]) {
            coupon = COUPONS[code];
            couponCode = code;
            showMsg("booking.coupon_applied", true);
        } else {
            coupon = null;
            couponCode = "";
            showMsg("booking.coupon_invalid", false);
        }
        recalc();
    }
    if (couponApply) couponApply.addEventListener("click", applyCoupon);
    if (couponInput) couponInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") applyCoupon(e);
    });

    // ---- ініціалізація ----
    initDates();
    setGuests(guests);
    recalc();
})();
