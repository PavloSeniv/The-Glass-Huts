// ------- Спільний конструктор пункту акордеону послуги (booking + payment) -------
// Кнопка "+/✓" (data-service-toggle) ДОДАЄ/ПРИБИРАЄ послугу і НЕ розкриває акордеон
// (вона поза [data-spoller]; плагін спойлерів її ігнорує через data-spoller-ignore).
// Заголовок (data-spoller) розкриває опис. Стан вибору тримає прихований чекбокс
// [data-service][data-price], сумісний із selectedServices() у _booking_calc.js.
"use strict";
(function () {
    window.THG = window.THG || {};

    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }
    function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }

    var CHEVRON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-down" viewbox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>';

    // service: { price, nameKey, titleKey, textKey }
    // opts: { selected:boolean, onToggle:fn(added, service, itemEl) }
    function buildServiceItem(service, opts) {
        opts = opts || {};
        var item = el("div", "choose-services__spoiler-item");
        if (opts.selected) item.classList.add("_added");

        // Кнопка додати/прибрати
        var toggle = el("button", "service-toggle");
        toggle.type = "button";
        toggle.setAttribute("data-service-toggle", "");
        toggle.setAttribute("data-spoller-ignore", "");
        toggle.setAttribute("aria-pressed", opts.selected ? "true" : "false");
        toggle.setAttribute("data-i18n-aria", "booking.service_add");
        toggle.setAttribute("aria-label", t("booking.service_add", "Add to booking"));
        var icon = el("span", "service-toggle__icon");
        icon.setAttribute("aria-hidden", "true");
        toggle.appendChild(icon);

        // Заголовок-акордеон
        var btn = el("button", "choose-services__spoiler-title-button");
        btn.type = "button";
        btn.setAttribute("data-spoller", "");
        btn.setAttribute("aria-expanded", "false");
        var titleText = el("div", "choose-services__spoiler-title-text");
        var nameSpan = el("span");
        nameSpan.setAttribute("data-i18n", service.nameKey);
        nameSpan.textContent = t(service.nameKey, "");
        var priceP = el("p");
        priceP.textContent = service.price + "kr";
        titleText.appendChild(nameSpan);
        titleText.appendChild(priceP);
        btn.appendChild(titleText);
        btn.insertAdjacentHTML("beforeend", CHEVRON);

        // Контент акордеону
        var content = el("div", "choose-services__spoiler-content");
        content.hidden = true; // згорнутий; плагін розгортає по кліку
        var info = el("div", "choose-services__spoiler-info");
        var titleP = el("p", "choose-services__spoiler-title");
        titleP.setAttribute("data-i18n", service.titleKey);
        titleP.textContent = t(service.titleKey, "");
        var textP = el("p", "choose-services__spoiler-text");
        textP.setAttribute("data-i18n", service.textKey);
        textP.textContent = t(service.textKey, "");
        // Прихований чекбокс — джерело істини про вибір послуги
        var check = el("input", "service-add__check");
        check.type = "checkbox";
        check.hidden = true;
        check.setAttribute("data-service", "");
        check.setAttribute("data-price", String(service.price));
        check.checked = !!opts.selected;
        info.appendChild(titleP);
        info.appendChild(textP);
        info.appendChild(check);
        content.appendChild(info);

        // ARIA: пов'язуємо кнопку-заголовок акордеону з панеллю опису (задача 21)
        var uid = (service.nameKey || "svc").replace(/[^a-z0-9]+/gi, "-");
        btn.id = "svc-title-" + uid;
        content.id = "svc-panel-" + uid;
        btn.setAttribute("aria-controls", content.id);
        content.setAttribute("role", "region");
        content.setAttribute("aria-labelledby", btn.id);

        item.appendChild(toggle);
        item.appendChild(btn);
        item.appendChild(content);

        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation(); // не даємо кліку дійти до делегованого обробника спойлерів
            var added = !check.checked;
            check.checked = added;
            item.classList.toggle("_added", added);
            toggle.setAttribute("aria-pressed", added ? "true" : "false");
            if (typeof opts.onToggle === "function") opts.onToggle(added, service, item);
        });

        return item;
    }

    window.THG.buildServiceItem = buildServiceItem;
})();
