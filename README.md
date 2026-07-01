# The Glass Huts

A multilingual static landing site for **The Glass Huts** — a boutique retreat of luxury glass cabins near the Mariager fjord in Vesterbord, Denmark.

**Live demo:** https://pavloseniv.github.io/The-Glass-Huts/The-Glass-Huts/index.html

---

## Tech stack

- **Gulp 4** task runner
- **Dart Sass** (`sass`) via `gulp-sass` — compiled to CSS, autoprefixed, media-queries grouped, minified
- **BrowserSync** live-reload dev server
- **gulp-file-include** (`@@include`) for HTML partials (header / footer / hero slider)
- Image pipeline: **WebP** generation + **imagemin** optimization
- Font pipeline: **TTF → WOFF / WOFF2** conversion (+ OTF → TTF), auto-generated `@font-face` includes
- Vanilla-JS **i18n** with 4 languages (English, Dansk, Українська, Deutsch)

## Requirements

- **Node.js ≥ 18** (tested on Node 22, Apple Silicon / arm64)
- npm

> This project was migrated off the deprecated `node-sass` (which fails to build on modern Node / Apple Silicon because it needs Python 2 + `node-gyp`). It now uses pure-JS **Dart Sass**, so `npm install` no longer triggers a native build.

## Getting started

```bash
npm install        # install dev dependencies
npm run dev        # build once, watch files and serve with live reload on http://localhost:3000
npm run build      # one-off production build into ./The-Glass-Huts/
```

Additional tasks:

```bash
npm run otf2ttf    # convert #src/fonts/*.otf -> .ttf
npm run svgsprite  # build an SVG sprite from #src/iconsprite/*.svg
```

## Project structure

```
#src/                  # source files (edit these)
├── *.html             # pages (index, the-hut, the-area, booking, about-us, faq,
│                       #        payment, terms, cancellation-policy, privacy-policy)
├── html/              # shared partials: _header, _footer, _slider_home
├── js/                # main_script + includes (i18n engine, translations, menu)
├── style/
│   ├── scss/          # Sass entry (style.scss) + page partials + legal.scss
│   └── css/           # header/footer/reset/root CSS imported into style.scss
├── img/               # images (png/jpg/svg/webp/ico); flags live in img/index/header
├── fonts/             # source .ttf / .otf
└── video/

The-Glass-Huts/        # build output (committed — this is what GitHub Pages serves)
gulpfile.js            # build pipeline
```

The build output folder is named after the project directory (`The-Glass-Huts/`) and is what GitHub Pages publishes.

## Internationalization (i18n)

The site ships with a small dependency-free i18n engine (`#src/js/_i18n.js`) and a generated
dictionary (`#src/js/_i18n_translations.js`).

- Translatable elements are tagged with:
  - `data-i18n="key"` — sets `textContent`
  - `data-i18n-html="key"` — sets `innerHTML` (for text containing tags such as `<br>`)
  - `data-i18n-ph="key"` — sets an input `placeholder`
- The language switcher in the header lets visitors choose **EN / DA / UK / DE**. The choice
  is saved to `localStorage` and re-applied on every page; `<html lang>` is updated too.
- Missing translations gracefully fall back to English.
- The footer copyright year is rendered dynamically (`<span data-year>`), so it is always current.

Translations are maintained as a flat list of `{ key, en, da, uk, de }` records and compiled
into the dictionary that `main_script.js` bundles via `@@include`.

## Deployment

The contents of `The-Glass-Huts/` are static and are served by **GitHub Pages**. Run
`npm run build` and commit the regenerated output.
