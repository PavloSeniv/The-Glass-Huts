// ------- i18n (перемикання мов) + актуальний рік у футері -------
// Словник перекладів лежить у window.THG_I18N (файл _i18n_translations.js),
// який підключається ПЕРЕД цим файлом у main_script.js.
"use strict";
(function () {
    var DEFAULT_LANG = "en";
    var SUPPORTED = ["en", "da", "uk", "de"];
    var STORAGE_KEY = "thg_lang";
    var dict = window.THG_I18N || {};

    function getSavedLang() {
        var saved = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch (e) { /* localStorage недоступний */ }
        if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
        var htmlLang = (document.documentElement.getAttribute("lang") || "").slice(0, 2);
        if (SUPPORTED.indexOf(htmlLang) !== -1) return htmlLang;
        return DEFAULT_LANG;
    }

    // Повертає переклад ключа з фолбеком: поточна мова -> англійська -> null
    function translate(key, lang) {
        if (dict[lang] && dict[lang][key] != null) return dict[lang][key];
        if (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key] != null) return dict[DEFAULT_LANG][key];
        return null; // ключа немає ніде — лишаємо наявний текст у розмітці
    }

    function each(selector, fn) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) fn(nodes[i]);
    }

    function applyLang(lang) {
        document.documentElement.setAttribute("lang", lang);

        each("[data-i18n]", function (el) {
            var v = translate(el.getAttribute("data-i18n"), lang);
            if (v != null) el.textContent = v;
        });
        each("[data-i18n-html]", function (el) {
            var v = translate(el.getAttribute("data-i18n-html"), lang);
            if (v != null) el.innerHTML = v;
        });
        each("[data-i18n-ph]", function (el) {
            var v = translate(el.getAttribute("data-i18n-ph"), lang);
            if (v != null) el.setAttribute("placeholder", v);
        });
        each("[data-i18n-aria]", function (el) {
            var v = translate(el.getAttribute("data-i18n-aria"), lang);
            if (v != null) el.setAttribute("aria-label", v);
        });

        updateSwitcher(lang);
    }

    // Оновлює вигляд перемикача: активний пункт + поточний прапор/код
    function updateSwitcher(lang) {
        var activeOption = null;
        each("[data-lang-option]", function (el) {
            var isActive = el.getAttribute("data-lang-option") === lang;
            el.classList.toggle("_active", isActive);
            el.setAttribute("aria-current", isActive ? "true" : "false");
            if (isActive) activeOption = el;
        });

        var current = document.querySelector("[data-lang-current]");
        if (current && activeOption) {
            var label = current.querySelector("[data-lang-current-label]");
            var flag = current.querySelector("[data-lang-current-flag]");
            if (label) label.textContent = activeOption.getAttribute("data-lang-label") || lang.toUpperCase();
            if (flag) {
                var img = activeOption.querySelector("img");
                if (img) {
                    var src = img.getAttribute("src");
                    flag.setAttribute("src", src);
                    flag.setAttribute("alt", img.getAttribute("alt") || lang);
                    // Збірка (gulp-webp-html) обгортає <img> у <picture> з <source srcset>,
                    // якому браузер віддає перевагу над <img src>. Тож оновлюємо і <source>,
                    // інакше прапор лишається старим, попри зміну src у <img>.
                    var picture = flag.parentNode;
                    if (picture && picture.tagName === "PICTURE") {
                        var sources = picture.getElementsByTagName("source");
                        for (var s = 0; s < sources.length; s++) {
                            sources[s].setAttribute("srcset", src);
                        }
                    }
                }
            }
        }
    }

    function setLang(lang) {
        if (SUPPORTED.indexOf(lang) === -1) return;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* ignore */ }
        applyLang(lang);
    }

    // Актуальний рік у знаку копірайту (<span data-year>)
    function updateYear() {
        var year = String(new Date().getFullYear());
        each("[data-year]", function (el) {
            el.textContent = year;
        });
    }

    // ARIA для випадаючого списку мов (стан розкриття по hover/focus)
    function initLangA11y() {
        var trigger = document.querySelector("[data-lang-current]");
        if (!trigger) return;
        var list = document.querySelector(".lang__list");
        var langLi = trigger.closest(".lang");
        trigger.setAttribute("aria-haspopup", "true");
        trigger.setAttribute("aria-expanded", "false");
        if (list) {
            if (!list.id) list.id = "lang-menu";
            trigger.setAttribute("aria-controls", list.id);
        }
        if (langLi) {
            var setExpanded = function (v) { trigger.setAttribute("aria-expanded", v ? "true" : "false"); };
            langLi.addEventListener("mouseenter", function () { setExpanded(true); });
            langLi.addEventListener("mouseleave", function () { setExpanded(false); });
            langLi.addEventListener("focusin", function () { setExpanded(true); });
            langLi.addEventListener("focusout", function () { setExpanded(false); });

            // У мобільному меню (і на touch-пристроях) ховера немає, а крихітна
            // стрілка — заважка ціль. Тап по самій поточній мові відкриває/закриває
            // список (клас ._active — той самий, що вмикає стрілка).
            trigger.addEventListener("click", function (e) {
                e.preventDefault(); // href="#" не мусить стрибати вгору сторінки
                var mobileMenu = window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
                if (mobileMenu || document.body.classList.contains("_touch")) {
                    setExpanded(langLi.classList.toggle("_active"));
                }
            });
        }
    }

    function init() {
        each("[data-lang-option]", function (el) {
            el.addEventListener("click", function (e) {
                e.preventDefault();
                setLang(el.getAttribute("data-lang-option"));
            });
        });
        initLangA11y();
        updateYear();
        applyLang(getSavedLang());
    }

    // Публічний доступ (напр. з консолі): THG.setLang('uk')
    window.THG = window.THG || {};
    window.THG.setLang = setLang;
    // Переклад ключа для поточної мови (для динамічного тексту з JS)
    window.THG.t = function (key) {
        return translate(key, document.documentElement.getAttribute("lang") || DEFAULT_LANG);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
