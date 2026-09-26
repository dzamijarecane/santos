# Santos — Restaurant website

Static multi-page site for Santos, Reçan (Prizren). Albanian by default with an English toggle.
No build step: the `.html` files, `assets/` and `images/` are published as-is to GitHub Pages
by `.github/workflows/pages.yml` on every push.

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `rreth-nesh.html` |
| Kitchen & menu | `kuzhina.html` |
| Reviews | `vleresimet.html` |
| Contact & reservations | `kontakt.html` |

## Things to fill in

| What | Where |
| --- | --- |
| Google reviews (name, rating, date, text) | `assets/reviews.js` — 3+ reviews show as a 3D carousel |
| Menu (categories, dishes, prices) | `assets/menu.js` — until filled, a "call us" panel shows |
| Phone + WhatsApp number | `PHONE` and `WHATSAPP` at the top of `assets/main.js` |
| Opening hours | `Çdo ditë · 10:00 – 23:00` in the HTML files, and `hours.value` in `assets/main.js` (EN) |
| Photos (optional) | `images/interior.jpg` replaces the gold medallion in the photo frames |

Text in English lives in the `EN` dictionary in `assets/main.js`; Albanian is the text in the HTML.

## 3D / motion

- `assets/scene.js` — WebGL (three.js, bundled in `assets/vendor/`): soft, warm candlelight bokeh
  drifting behind the page headers, following the mouse.
- CSS 3D: letter-by-letter title reveal, word flips on headings, tilt cards with glare, flip cards,
  spinning gold medallion, 3D review carousel, curtain page transitions.
- Everything is switched off for visitors with "reduce motion" enabled.
