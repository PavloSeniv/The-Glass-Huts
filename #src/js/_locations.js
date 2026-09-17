// ------- Дані локацій (спільна модель для booking / payment / the-area) -------
// Кожна локація має власні ціни та перелік послуг. Текстові поля зберігаються
// як i18n-ключі (перекладаються через _i18n_translations.js). Ціни — у kr.
"use strict";

// Активні промокоди (спільні для booking і payment). pct — відсоток, fixed — kr.
window.THG_COUPONS = {
    "GLASS10": { type: "pct", value: 10 },
    "FOREST20": { type: "pct", value: 20 },
    "WELCOME500": { type: "fixed", value: 500 }
};

window.THG_LOCATIONS = {
    order: ["denmark", "norway", "iceland"],

    denmark: {
        id: "denmark",
        labelKey: "common.location", // "Vesterborg, Denmark"
        map: "https://www.google.com/maps/search/?api=1&query=56.6486,9.9982",
        priceNight: 3200,
        guestFee: 800,
        cleaning: 500,
        area: {
            titleKey: "area.intro_title", subtitleKey: "area.intro_subtitle", textKey: "area.intro_text",
            // Фото вступного слайдера the-area для цієї локації
            slides: [
                { src: "img/the_area/slider_info/slider_info_slide_1.png", alt: "Forest lake mirroring the mountains" },
                { src: "img/the_area/slider_info/slider_info_slide_2.jpg", alt: "Nordic village on the fjord shore" },
                { src: "img/the_area/slider_info/slider_info_slide_3.jpg", alt: "White chalk cliffs above the sea" },
                { src: "img/the_area/slider_info/slider_info_slide_4.jpg", alt: "Grassy dunes on a Danish beach" }
            ]
        },
        services: [
            { price: 400, nameKey: "booking.service_1_name", titleKey: "booking.service_1_title", textKey: "booking.service_1_text" },
            { price: 400, nameKey: "booking.service_2_name", titleKey: "booking.service_2_title", textKey: "booking.service_2_text" },
            { price: 400, nameKey: "booking.service_3_name", titleKey: "booking.service_3_title", textKey: "booking.service_3_text" },
            { price: 400, nameKey: "booking.service_4_name", titleKey: "booking.service_4_title", textKey: "booking.service_4_text" },
            { price: 400, nameKey: "booking.service_5_name", titleKey: "booking.service_5_title", textKey: "booking.service_5_text" },
            { price: 400, nameKey: "booking.service_6_name", titleKey: "booking.service_6_title", textKey: "booking.service_6_text" }
        ]
    },

    norway: {
        id: "norway",
        labelKey: "loc.norway.label", // "Aurland, Norway"
        map: "https://www.google.com/maps/search/?api=1&query=60.9080,7.1892",
        priceNight: 5200,
        guestFee: 1000,
        cleaning: 600,
        area: {
            titleKey: "area.norway_title", subtitleKey: "area.norway_subtitle", textKey: "area.norway_text",
            slides: [
                { src: "img/the_area/slider_info/norway_slide_1.jpg", alt: "Lofoten fjord between steep mountains" },
                { src: "img/the_area/slider_info/norway_slide_2.jpg", alt: "Red fishermen's cabins on the Norwegian coast" },
                { src: "img/the_area/slider_info/norway_slide_3.jpg", alt: "Waterfall cascading into the Geirangerfjord" },
                { src: "img/the_area/slider_info/norway_slide_4.jpg", alt: "Northern lights over a snowy peak" }
            ]
        },
        services: [
            { price: 500, nameKey: "booking.norway_service_1_name", titleKey: "booking.norway_service_1_title", textKey: "booking.norway_service_1_text" },
            { price: 900, nameKey: "booking.norway_service_2_name", titleKey: "booking.norway_service_2_title", textKey: "booking.norway_service_2_text" },
            { price: 600, nameKey: "booking.norway_service_3_name", titleKey: "booking.norway_service_3_title", textKey: "booking.norway_service_3_text" },
            { price: 450, nameKey: "booking.norway_service_4_name", titleKey: "booking.norway_service_4_title", textKey: "booking.norway_service_4_text" },
            { price: 1200, nameKey: "booking.norway_service_5_name", titleKey: "booking.norway_service_5_title", textKey: "booking.norway_service_5_text" },
            { price: 400, nameKey: "booking.norway_service_6_name", titleKey: "booking.norway_service_6_title", textKey: "booking.norway_service_6_text" }
        ]
    },

    iceland: {
        id: "iceland",
        labelKey: "loc.iceland.label", // "Vík, Iceland"
        map: "https://www.google.com/maps/search/?api=1&query=63.4187,-19.0060",
        priceNight: 6200,
        guestFee: 1200,
        cleaning: 700,
        area: {
            titleKey: "area.iceland_title", subtitleKey: "area.iceland_subtitle", textKey: "area.iceland_text",
            slides: [
                { src: "img/the_area/slider_info/iceland_slide_1.jpg", alt: "Black sand beach and sea stacks near Vík" },
                { src: "img/the_area/slider_info/iceland_slide_2.jpg", alt: "Seljalandsfoss waterfall over green cliffs" },
                { src: "img/the_area/slider_info/iceland_slide_3.jpg", alt: "Icebergs drifting in a glacier lagoon" },
                { src: "img/the_area/slider_info/iceland_slide_4.jpg", alt: "Aurora reflected in an Icelandic lake" }
            ]
        },
        services: [
            { price: 700, nameKey: "booking.iceland_service_1_name", titleKey: "booking.iceland_service_1_title", textKey: "booking.iceland_service_1_text" },
            { price: 500, nameKey: "booking.iceland_service_2_name", titleKey: "booking.iceland_service_2_title", textKey: "booking.iceland_service_2_text" },
            { price: 600, nameKey: "booking.iceland_service_3_name", titleKey: "booking.iceland_service_3_title", textKey: "booking.iceland_service_3_text" },
            { price: 1400, nameKey: "booking.iceland_service_4_name", titleKey: "booking.iceland_service_4_title", textKey: "booking.iceland_service_4_text" },
            { price: 900, nameKey: "booking.iceland_service_5_name", titleKey: "booking.iceland_service_5_title", textKey: "booking.iceland_service_5_text" },
            { price: 450, nameKey: "booking.iceland_service_6_name", titleKey: "booking.iceland_service_6_title", textKey: "booking.iceland_service_6_text" }
        ]
    }
};
