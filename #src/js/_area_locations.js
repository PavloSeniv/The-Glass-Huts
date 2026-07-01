// ------- Локації на сторінці the-area -------
// Перемикає опис/локацію/маршрут між локаціями (window.THG_LOCATIONS).
// Стартова локація — з параметра ?loc= (зі слайдера чи бронювання) або перша.
"use strict";
(function () {
    // працюємо лише на the-area (там є блок опису локації)
    if (!document.querySelector("[data-area-title]")) return;
    var LOCS = window.THG_LOCATIONS;
    if (!LOCS) return;

    var select = document.querySelector("[data-location-select]");
    var heroLabel = document.querySelector("[data-location-label]");
    var directions = document.querySelector("[data-directions]");
    var titleEl = document.querySelector("[data-area-title]");
    var subtitleEl = document.querySelector("[data-area-subtitle]");
    var textEl = document.querySelector("[data-area-text]");

    function t(key, fallback) {
        return (window.THG && typeof window.THG.t === "function" && window.THG.t(key)) || fallback;
    }
    function setI18n(elm, key) {
        if (!elm || !key) return;
        elm.setAttribute("data-i18n", key); // щоб оновлювалось при зміні мови
        elm.textContent = t(key, elm.textContent);
    }

    function setLocation(id) {
        var loc = LOCS[id] || LOCS[LOCS.order[0]];
        setI18n(heroLabel, loc.labelKey);
        if (loc.area) {
            setI18n(titleEl, loc.area.titleKey);
            setI18n(subtitleEl, loc.area.subtitleKey);
            setI18n(textEl, loc.area.textKey);
        }
        if (directions && loc.map) directions.setAttribute("href", loc.map);
    }

    var params = new URLSearchParams(window.location.search);
    var initLoc = params.get("loc");
    if (!initLoc || !LOCS[initLoc]) initLoc = LOCS.order[0];

    if (select) {
        select.innerHTML = "";
        LOCS.order.forEach(function (id) {
            var o = document.createElement("option");
            o.value = id;
            o.setAttribute("data-i18n", LOCS[id].labelKey);
            o.textContent = t(LOCS[id].labelKey, id);
            select.appendChild(o);
        });
        select.value = initLoc;
        select.addEventListener("change", function () { setLocation(select.value); });
    }

    setLocation(initLoc);
})();
