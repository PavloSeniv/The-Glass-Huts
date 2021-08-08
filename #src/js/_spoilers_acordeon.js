"use strict"

//Spoilers
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
    // Отримання звичайних спойлерів
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    // Ініціалізація звичайних спойлерів
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }

    // Отримання медіа спойлерів
    const spollerMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
    });

    // Ініціалізаія  спойлерів з медіа запитами
    if (spollerMedia.length > 0) {
        const breakpointsArray = [];
        spollerMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        // Отримуємо унікальні брейкпоінти
        let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
        });

    }
}
//===============================
// SlideToggle