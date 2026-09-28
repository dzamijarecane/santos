# Santos — Restaurant website

Static multi-page site for Santos, Reçan (Prizren). Albanian by default, with English and Bosnian toggles.
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
| Menu (categories, dishes, prices) | `assets/menu.js` — transcribed from the printed menu (soups, starters, salads, pickles, grill, specialities, roast meat, wines); add more categories by copying a block |
| Phone + WhatsApp number | `PHONE` and `WHATSAPP` at the top of `assets/main.js` |
| Opening hours | `Çdo ditë · 10:00 – 23:00` in the HTML files, and `hours.value` in `assets/main.js` (EN + BS) |
| Photos | drop JPGs into `images/` with these names — each replaces a toned placeholder panel: `hero` (home header), `about`, `kitchen`, `reviews`, `contact` (page headers + home tiles), `interior`, `dish` (side-by-side sections), `band` (quote strips). Landscape, ~2000px wide works best. |

English and Bosnian text live in the `EN` and `BS` dictionaries in `assets/main.js`; Albanian is the text in the HTML.

## Motion

- Headings rise in word by word, sections fade up as you scroll, the home title slides in letter by letter.
- Header photos slowly zoom out on load; photo tiles zoom on hover.
- 3D review carousel (drag or use the arrows) once `assets/reviews.js` has 3+ reviews.
- Everything is switched off for visitors with "reduce motion" enabled.
