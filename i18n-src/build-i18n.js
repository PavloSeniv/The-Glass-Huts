// Генерує #src/js/_i18n_translations.js із одного або кількох масивів рядків {key,en,da,uk,de}.
// Використання: node build-i18n.js <out.js> <in1.json> [in2.json ...]
const fs = require("fs");

const outPath = process.argv[2];
const inPaths = process.argv.slice(3);
const langs = ["en", "da", "uk", "de"];

let strings = [];
for (const p of inPaths) {
    const arr = JSON.parse(fs.readFileSync(p, "utf8"));
    if (!Array.isArray(arr)) {
        console.error("Not an array:", p);
        process.exit(1);
    }
    strings = strings.concat(arr);
}

// Дублікати ключів (окрім ідентичних повторів common.* — їх просто ігноруємо)
const byKey = new Map();
const conflicts = [];
for (const s of strings) {
    if (byKey.has(s.key)) {
        const prev = byKey.get(s.key);
        if (JSON.stringify(prev) !== JSON.stringify(s)) conflicts.push(s.key);
    } else {
        byKey.set(s.key, s);
    }
}
if (conflicts.length) {
    console.error("CONFLICTING DUPLICATE KEYS:", [...new Set(conflicts)].join(", "));
    process.exit(1);
}

// &amp; -> & : значення підставляються через textContent, тож HTML-сутності
// показувалися б буквально. Для innerHTML "&" теж коректно парситься.
function decodeAmp(v) {
    return typeof v === "string" ? v.replace(/&amp;/g, "&") : v;
}

const dict = {};
langs.forEach((l) => (dict[l] = {}));

let gaps = 0;
for (const s of byKey.values()) {
    for (const l of langs) {
        if (s[l] != null && s[l] !== "") {
            dict[l][s.key] = decodeAmp(s[l]);
        } else if (l !== "en") {
            gaps++;
        }
    }
}

const header =
    "// АВТОЗГЕНЕРОВАНО білдером i18n-src/build-i18n.js — не редагувати вручну.\n" +
    "// Джерела: " + inPaths.map((p) => p.split("/").pop()).join(", ") + "\n";
const body = "window.THG_I18N = " + JSON.stringify(dict, null, 4) + ";\n";

fs.writeFileSync(outPath, header + body);
console.log(
    "Wrote " + outPath + " — unique keys: " + byKey.size + ", langs: " + langs.join("/") +
    (gaps ? ", non-en gaps: " + gaps + " (fallback to en)" : "")
);
