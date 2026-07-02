// ------- Фасад відео (постер + кнопка "плей") -------
// Клік по [data-video-embed] підвантажує відео. Пріоритет — зовнішній embed
// (YouTube/Vimeo) з data-embed-src; якщо його не задано, грає локальний файл
// data-video-fallback. Лінивий підхід: важкий iframe вантажиться лише по кліку.
"use strict";
(function () {
    function activate(host) {
        var src = (host.getAttribute("data-embed-src") || "").trim();
        var frame = document.createElement("div");
        frame.className = "video-embed__frame";
        var media;
        if (/^https?:\/\//i.test(src)) {
            media = document.createElement("iframe");
            media.src = src + (src.indexOf("?") === -1 ? "?" : "&") + "autoplay=1";
            media.setAttribute("title", host.getAttribute("aria-label") || "Video");
            media.setAttribute("frameborder", "0");
            media.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
            media.setAttribute("allowfullscreen", "");
        } else {
            var fb = host.getAttribute("data-video-fallback");
            media = document.createElement("video");
            media.setAttribute("controls", "");
            media.setAttribute("autoplay", "");
            media.setAttribute("playsinline", "");
            var poster = host.getAttribute("data-poster");
            if (poster) media.setAttribute("poster", poster);
            var source = document.createElement("source");
            source.src = fb;
            source.type = "video/mp4";
            media.appendChild(source);
        }
        frame.appendChild(media);
        host.parentNode.replaceChild(frame, host);
        if (media.focus) try { media.focus(); } catch (e) { /* ignore */ }
    }

    function init() {
        var nodes = document.querySelectorAll("[data-video-embed]");
        for (var i = 0; i < nodes.length; i++) {
            (function (host) {
                host.addEventListener("click", function (e) { e.preventDefault(); activate(host); });
            })(nodes[i]);
        }
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
