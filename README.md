# Santos — Restaurant website

Static one-page site for Santos, Reçan (Prizren). Albanian by default with an English toggle.
Open `index.html` directly or host the folder on any static host (e.g. GitHub Pages).

## Things to fill in

| What | Where |
| --- | --- |
| Google reviews (name, rating, date, text) | `assets/reviews.js` — cards appear automatically |
| Phone number | `PHONE` at the top of `assets/main.js` |
| Opening hours | `visit.hoursVal` in `index.html` (SQ) and `assets/main.js` (EN) |
| Photos | `images/hero.jpg`, `images/interior.jpg`, `images/band.jpg` — optional, the site has elegant fallbacks |

The rating (4.9 / 5 from 29 Google reviews) appears in the hero, About, Reviews section and the
structured data in `index.html` — update those when the count changes.
