(function () {
  "use strict";

  // WhatsApp number (digits only) used to add the greeting in the visitor's language.
  var WHATSAPP = "38345949002";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  // ---------------- i18n ----------------
  var EN = {
    "nav.home": "Home", "nav.about": "About", "nav.kitchen": "Kitchen", "nav.menu": "Menu", "nav.reviews": "Reviews", "nav.contact": "Contact", "nav.reserve": "Reserve",
    "footer.about": "An elegant restaurant in Reçan, just minutes from Prizren.",
    "footer.rating": "29 reviews on Google", "footer.pages": "Pages", "footer.contact": "Contact", "footer.rights": "All rights reserved.",
    "hours.value": "Every day · 10:00 – 23:00",
    "hero.eyebrow": "Restaurant · Reçan, Prizren · Since 1985",
    "hero.sub": "Refined flavour and heartfelt hospitality, in the calm of Reçan.",
    "hero.rating": "29 reviews on Google", "hero.cta2": "Discover the kitchen",
    "cta.eyebrow": "Reservations", "cta.reserve": "Reserve a table", "cta.call": "Call us",
    "intro.eyebrow": "Welcome", "intro.title": "Where flavour meets elegance",
    "intro.p1": "Santos is a place to slow down: a carefully laid table, dishes prepared with passion and a warm atmosphere that makes you feel welcome from the very first step.",
    "intro.p2": "Just minutes from Prizren, in the village of Reçan, we welcome you for family lunches, quiet dinners and your most important celebrations.",
    "intro.link": "Our story", "badge.label": "average rating on Google",
    "m.1": "Flavour", "m.2": "Elegance", "m.3": "Hospitality", "m.4": "Tradition",
    "portals.eyebrow": "Discover Santos", "portals.title": "An experience in three acts",
    "portals.t1": "Our story", "portals.d1": "Who we are, what inspires us and why every detail matters to us.",
    "portals.t2": "The kitchen", "portals.d2": "Fresh ingredients, recipes refined with patience and flavours you remember.",
    "portals.t3": "Reviews", "portals.d3": "4.9 out of 5 stars on Google — read what our guests say.",
    "portals.more": "Discover",
    "score.of": "out of 5 stars", "score.eyebrow": "Google", "score.title": "Our guests speak",
    "score.text1": "Rated", "score.text2": "out of 5, based on", "score.text3": "reviews on Google — a trust we earn every day.",
    "score.link": "All reviews",
    "band.1": "“Good food is a language every heart speaks.”",
    "band.2": "“At Santos, every table has a story.”",
    "band.3": "“Cooking is love you can taste.”",
    "band.4": "“Every review reminds us why we do this.”",
    "cta1.title": "Reserve your table", "cta1.text": "For a lunch, a dinner or a special celebration — message or call us and we will take care of everything else.",
    "cta2.title": "Become part of our story", "cta2.text": "We look forward to welcoming you in Reçan — for a meal, a celebration, or simply a beautiful evening.",
    "cta3.title": "Your table awaits", "cta3.text": "Book ahead for dinners and groups — especially at weekends.",
    "cta4.title": "Come and taste it yourself", "cta4.text": "Join the guests who have given us 4.9 stars — we look forward to seeing you in Reçan.",
    "aboutHero.eyebrow": "About us", "aboutHero.title": "Our story", "aboutHero.sub": "A restaurant built on care, flavour and hospitality.",
    "story.eyebrow": "Santos", "story.title": "A table where every detail matters",
    "story.p1": "Santos was born from a simple idea: food prepared with care, fresh ingredients, and a setting where every guest feels at home — only a little more special.",
    "story.p2": "In the calm of Reçan, away from the noise of the city, we have created a place where time slows down: for long conversations, family tables and moments worth remembering.",
    "story.p3": "Every guest who returns is the finest proof that we are on the right path.",
    "stats.1": "Google rating", "stats.2": "Reviews", "stats.3": "Since",
    "values.eyebrow": "Our values", "values.title": "What defines us", "values.hint": "Tap to discover",
    "values.t1": "Quality", "values.d1": "Carefully chosen ingredients and standards we never lower — in the kitchen and in the dining room.",
    "values.t2": "Tradition", "values.d2": "The flavours of this land, preserved with respect and presented with a contemporary touch.",
    "values.t3": "Hospitality", "values.d3": "A smile at the door and attention to every detail — because every guest is special.",
    "kitchenHero.eyebrow": "Kitchen", "kitchenHero.title": "The art of the table", "kitchenHero.sub": "Prepared by hand, served with care.",
    "philo.eyebrow": "Philosophy", "philo.title": "Simplicity, freshness, character",
    "philo.p1": "We believe the best dish begins with the right ingredient. That is why we choose fresh produce, respect the season and let the flavours speak for themselves.",
    "philo.p2": "From the grill to the house specialities, every plate is prepared the moment you order — with patience, craft and love for the trade.",
    "exp.eyebrow": "Experiences", "exp.title": "For every occasion, a table",
    "exp.t1": "Family lunch", "exp.d1": "Large tables, generous portions and a setting where children and adults alike feel at ease.",
    "exp.t2": "Elegant dinner", "exp.d2": "Soft light, attentive service and dishes that make the evening special.",
    "exp.t3": "Celebrations & events", "exp.d3": "Birthdays, engagements, anniversaries — we arrange every detail so your celebration is unforgettable.",
    "exp.t4": "Coffee & desserts", "exp.d4": "A sweet pause during the day, with good coffee and something special on the side.",
    "menu.eyebrow": "The menu", "menu.cta": "View the menu",
    "menu.teaser": "Over 90 dishes — salads, starters, grill specialities, roast meats and selected wines.",
    "menuHero.eyebrow": "Menu", "menuHero.title": "The flavours of Santos", "menuHero.sub": "From wines to house specialities — our whole menu in one place.", "menu.note": "Prices in euro (€). Ask our staff about today's dishes.", "menu.title": "The flavours of Santos",
    "menu.emptyTitle": "Our menu follows the seasons",
    "menu.emptyText": "Our dishes change with the best ingredients of the day. Ask our staff about today's specialities, or give us a call — we will gladly tell you.",
    "reviewsHero.eyebrow": "Reviews", "reviewsHero.title": "In our guests' words", "reviewsHero.sub": "Your trust is our greatest reward.",
    "reviews.read": "Read on Google", "reviews.write": "Leave a review", "reviews.eyebrow": "From Google", "reviews.title": "What our guests say",
    "contactHero.eyebrow": "Contact", "contactHero.title": "Visit us", "contactHero.sub": "We look forward to welcoming you in Reçan, just minutes from Prizren.",
    "info.eyebrow": "Information", "info.title": "Everything you need",
    "info.address": "Address", "info.addressNote": "Prizren – Brezovica road", "info.hours": "Hours", "info.phone": "Phone", "info.directions": "Get directions",
    "form.eyebrow": "Reservation", "form.title": "Reserve your table", "form.text": "Message us on WhatsApp and we will confirm your booking as soon as possible.",
    "form.name": "Name", "form.date": "Date", "form.time": "Time", "form.guests": "Guests", "form.phone": "Your phone",
    "form.note": "Notes", "form.notePh": "Birthday, special requests…", "form.submit": "Book on WhatsApp",
    "form.help": "Your request opens in WhatsApp; our staff will confirm the booking."
  };

  var BS = {
    "nav.home": "Početna", "nav.about": "O nama", "nav.kitchen": "Kuhinja", "nav.menu": "Meni", "nav.reviews": "Recenzije", "nav.contact": "Kontakt", "nav.reserve": "Rezerviši",
    "footer.about": "Elegantan restoran u Rečanu, samo nekoliko minuta od Prizrena.",
    "footer.rating": "29 recenzija na Googleu", "footer.pages": "Stranice", "footer.contact": "Kontakt", "footer.rights": "Sva prava zadržana.",
    "hours.value": "Svaki dan · 10:00 – 23:00",
    "hero.eyebrow": "Restoran · Rečane, Prizren · Od 1985.",
    "hero.sub": "Profinjen ukus i iskreno gostoprimstvo, u miru Rečana.",
    "hero.rating": "29 recenzija na Googleu", "hero.cta2": "Otkrijte kuhinju",
    "cta.eyebrow": "Rezervacije", "cta.reserve": "Rezervišite sto", "cta.call": "Pozovite nas",
    "intro.eyebrow": "Dobrodošli", "intro.title": "Gdje se ukus susreće s elegancijom",
    "intro.p1": "Santos je mjesto gdje se usporava: pažljivo postavljen sto, jela pripremljena sa strašću i topla atmosfera zbog koje se osjećate dobrodošlo od prvog koraka.",
    "intro.p2": "Samo nekoliko minuta od Prizrena, u selu Rečane, dočekujemo vas za porodični ručak, mirnu večeru ili vaša najvažnija slavlja.",
    "intro.link": "Naša priča", "badge.label": "prosječna ocjena na Googleu",
    "m.1": "Ukus", "m.2": "Elegancija", "m.3": "Gostoprimstvo", "m.4": "Tradicija",
    "portals.eyebrow": "Otkrijte Santos", "portals.title": "Doživljaj u tri čina",
    "portals.t1": "Naša priča", "portals.d1": "Ko smo, šta nas inspiriše i zašto nam je svaki detalj važan.",
    "portals.t2": "Kuhinja", "portals.d2": "Svježe namirnice, recepti usavršeni sa strpljenjem i ukusi koji se pamte.",
    "portals.t3": "Recenzije", "portals.d3": "4,9 od 5 zvjezdica na Googleu — pročitajte šta kažu naši gosti.",
    "portals.more": "Otkrijte",
    "score.of": "od 5 zvjezdica", "score.eyebrow": "Google", "score.title": "Naši gosti govore",
    "score.text1": "Ocjena", "score.text2": "od 5, na osnovu", "score.text3": "recenzija na Googleu — povjerenje koje zaslužujemo svaki dan.",
    "score.link": "Sve recenzije",
    "band.1": "„Dobra hrana je jezik koji razumije svako srce.“",
    "band.2": "„U Santosu svaki sto ima svoju priču.“",
    "band.3": "„Kuhanje je ljubav koju možete okusiti.“",
    "band.4": "„Svaka recenzija nas podsjeća zašto ovo radimo.“",
    "cta1.title": "Rezervišite svoj sto", "cta1.text": "Za ručak, večeru ili posebno slavlje — pišite nam ili nas pozovite, a mi ćemo se pobrinuti za sve ostalo.",
    "cta2.title": "Postanite dio naše priče", "cta2.text": "Radujemo se vašem dolasku u Rečane — na obrok, slavlje ili jednostavno lijepu večer.",
    "cta3.title": "Vaš sto vas čeka", "cta3.text": "Rezervišite unaprijed za večere i grupe — posebno vikendom.",
    "cta4.title": "Dođite i uvjerite se sami", "cta4.text": "Pridružite se gostima koji su nam dali 4,9 zvjezdica — radujemo se vašem dolasku u Rečane.",
    "aboutHero.eyebrow": "O nama", "aboutHero.title": "Naša priča", "aboutHero.sub": "Restoran izgrađen na pažnji, ukusu i gostoprimstvu.",
    "story.eyebrow": "Santos", "story.title": "Sto za kojim je svaki detalj važan",
    "story.p1": "Santos je nastao iz jednostavne ideje: hrana pripremljena s pažnjom, svježe namirnice i ambijent u kojem se gost osjeća kao kod kuće — samo malo posebnije.",
    "story.p2": "U miru Rečana, daleko od gradske buke, stvorili smo prostor u kojem vrijeme usporava: za duge razgovore, porodične trpeze i trenutke koje vrijedi pamtiti.",
    "story.p3": "Svaki gost koji se vrati najljepši je dokaz da smo na pravom putu.",
    "stats.1": "Ocjena na Googleu", "stats.2": "Recenzije", "stats.3": "Od godine",
    "values.eyebrow": "Naše vrijednosti", "values.title": "Ono što nas određuje", "values.hint": "Dodirnite za više",
    "values.t1": "Kvalitet", "values.d1": "Pažljivo odabrane namirnice i standardi koje nikada ne spuštamo — u kuhinji i u sali.",
    "values.t2": "Tradicija", "values.d2": "Ukusi ovog kraja, sačuvani s poštovanjem i predstavljeni sa savremenim dodirom.",
    "values.t3": "Gostoprimstvo", "values.d3": "Osmijeh na vratima i pažnja prema svakom detalju — jer je svaki gost poseban.",
    "kitchenHero.eyebrow": "Kuhinja", "kitchenHero.title": "Umjetnost trpeze", "kitchenHero.sub": "Pripremljeno rukom, posluženo s pažnjom.",
    "philo.eyebrow": "Filozofija", "philo.title": "Jednostavnost, svježina, karakter",
    "philo.p1": "Vjerujemo da najbolje jelo počinje pravom namirnicom. Zato biramo svježe proizvode, poštujemo godišnje doba i puštamo ukuse da govore sami za sebe.",
    "philo.p2": "Od roštilja do specijaliteta kuće, svako jelo pripremamo u trenutku kada ga naručite — sa strpljenjem, umijećem i ljubavlju prema zanatu.",
    "exp.eyebrow": "Doživljaji", "exp.title": "Za svaku priliku, jedan sto",
    "exp.t1": "Porodični ručak", "exp.d1": "Veliki stolovi, obilne porcije i ambijent u kojem se i djeca i odrasli osjećaju ugodno.",
    "exp.t2": "Elegantna večera", "exp.d2": "Meko svjetlo, pažljiva usluga i jela koja večer čine posebnom.",
    "exp.t3": "Proslave i događaji", "exp.d3": "Rođendani, zaruke, godišnjice — organizujemo svaki detalj kako bi vaše slavlje bilo nezaboravno.",
    "exp.t4": "Kafa i deserti", "exp.d4": "Slatka pauza tokom dana, uz dobru kafu i nešto posebno uz nju.",
    "menu.eyebrow": "Meni", "menu.cta": "Pogledajte meni",
    "menu.teaser": "Preko 90 jela — salate, predjela, specijaliteti sa roštilja, pečenja i odabrana vina.",
    "menuHero.eyebrow": "Meni", "menuHero.title": "Ukusi Santosa", "menuHero.sub": "Od vina do specijaliteta kuće — cijeli naš meni na jednom mjestu.", "menu.note": "Cijene su u eurima (€). Pitajte naše osoblje za jela dana.", "menu.title": "Ukusi Santosa",
    "menu.emptyTitle": "Naš meni prati godišnja doba",
    "menu.emptyText": "Naša jela se mijenjaju u skladu s najboljim namirnicama dana. Pitajte naše osoblje za današnje specijalitete ili nas pozovite — rado ćemo vam reći.",
    "reviewsHero.eyebrow": "Recenzije", "reviewsHero.title": "Riječ naših gostiju", "reviewsHero.sub": "Vaše povjerenje je naša najveća nagrada.",
    "reviews.read": "Pročitajte na Googleu", "reviews.write": "Ostavite recenziju", "reviews.eyebrow": "Sa Googlea", "reviews.title": "Šta kažu naši gosti",
    "contactHero.eyebrow": "Kontakt", "contactHero.title": "Posjetite nas", "contactHero.sub": "Radujemo se vašem dolasku u Rečane, samo nekoliko minuta od Prizrena.",
    "info.eyebrow": "Informacije", "info.title": "Sve što vam treba",
    "info.address": "Adresa", "info.addressNote": "Put Prizren – Brezovica", "info.hours": "Radno vrijeme", "info.phone": "Telefon", "info.directions": "Upute do nas",
    "form.eyebrow": "Rezervacija", "form.title": "Rezervišite sto", "form.text": "Pišite nam na WhatsApp i potvrdit ćemo vašu rezervaciju što prije.",
    "form.name": "Ime", "form.date": "Datum", "form.time": "Vrijeme", "form.guests": "Broj osoba", "form.phone": "Vaš telefon",
    "form.note": "Napomene", "form.notePh": "Rođendan, posebni zahtjevi…", "form.submit": "Rezervišite putem WhatsAppa",
    "form.help": "Zahtjev se otvara u WhatsAppu; rezervaciju potvrđuje naše osoblje."
  };
  var DICTS = { en: EN, bs: BS };

  var textNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var phNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n-ph]"));
  var SQ = {};
  textNodes.forEach(function (el) { SQ[el.dataset.i18n] = el.textContent; });
  phNodes.forEach(function (el) { SQ["ph:" + el.dataset.i18nPh] = el.placeholder; });
  var lang = "sq";



  var langHooks = [];

  function setLang(next) {
    lang = DICTS[next] ? next : "sq";
    var dict = DICTS[lang];
    textNodes.forEach(function (el) {
      var v = dict ? dict[el.dataset.i18n] : SQ[el.dataset.i18n];
      if (!v) return;
      el.textContent = v;
      if (el.classList.contains("split")) splitWords(el, el.classList.contains("in"));
    });
    phNodes.forEach(function (el) {
      var v = dict ? dict[el.dataset.i18nPh] : SQ["ph:" + el.dataset.i18nPh];
      if (v) el.placeholder = v;
    });
    root.lang = lang;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("santos-lang", lang); } catch (e) {}
    langHooks.forEach(function (fn) { fn(); });
  }

  // ---------------- 3D word split ----------------
  function splitWords(el, shown) {
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach(function (w, i) {
      var outer = document.createElement("span");
      outer.className = "w";
      var inner = document.createElement("span");
      inner.className = "wi";
      inner.textContent = w;
      inner.style.transitionDelay = (shown ? 0 : i * 0.07) + "s";
      outer.appendChild(inner);
      el.appendChild(outer);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
    el.setAttribute("aria-label", words.join(" "));
  }
  document.querySelectorAll(".split").forEach(function (el) { splitWords(el, false); });

  var savedLang = null;
  try { savedLang = localStorage.getItem("santos-lang"); } catch (e) {}
  if (DICTS[savedLang]) setLang(savedLang);
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // Phone numbers and WhatsApp links are written directly in the HTML.
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // ---------------- Curtain & page transitions ----------------
  var curtain = document.querySelector(".curtain");
  var heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    var word = heroTitle.textContent.trim();
    heroTitle.textContent = "";
    word.split("").forEach(function (c, i) {
      var s = document.createElement("span");
      s.className = "ch";
      s.textContent = c;
      s.setAttribute("aria-hidden", "true");
      s.dataset.i = i;
      heroTitle.appendChild(s);
    });
  }

  function animateHeroTitle() {
    if (!heroTitle || reduced || !heroTitle.animate) return;
    heroTitle.querySelectorAll(".ch").forEach(function (s, i) {
      s.animate(
        [
          { opacity: 0, transform: "translateY(40%)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: 1200, delay: 150 + i * 70, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" }
      );
    });
  }

  var firstVisit = false;
  try { firstVisit = !sessionStorage.getItem("santos-seen"); sessionStorage.setItem("santos-seen", "1"); } catch (e) {}

  var started = false;
  function start() {
    if (started) return;
    started = true;
    if (curtain) curtain.classList.add("lift");
    animateHeroTitle();
    setTimeout(observeAll, 250);
  }

  if (curtain && !reduced) {
    if (firstVisit) {
      curtain.classList.add("intro");
      curtain.querySelectorAll(".curtain-brand span").forEach(function (s, i) { s.style.animationDelay = 0.1 + i * 0.09 + "s"; });
      setTimeout(start, 1500);
    } else {
      requestAnimationFrame(function () { setTimeout(start, 60); });
    }
    setTimeout(start, 3000); // failsafe
  } else {
    if (curtain) curtain.style.display = "none";
    start();
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || !curtain || reduced) return;
    var href = a.getAttribute("href");
    if (a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (!/^[\w-]+\.html(#.*)?$/.test(href)) return;
    var here = location.pathname.split("/").pop() || "index.html";
    if (href.split("#")[0] === here) return;
    e.preventDefault();
    curtain.classList.remove("lift", "intro");
    void curtain.offsetWidth;
    curtain.classList.add("drop");
    setTimeout(function () { location.href = href; }, 560);
  });
  window.addEventListener("pageshow", function (e) {
    if (e.persisted && curtain) { curtain.classList.remove("drop"); curtain.classList.add("lift"); }
  });

  // ---------------- Nav ----------------
  var nav = document.getElementById("nav");
  var burger = document.querySelector(".burger");
  var progress = document.querySelector(".progress");
  var lastY = 0;
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    nav.classList.toggle("hide", y > lastY && y > 400 && !document.body.classList.contains("menu-open"));
    lastY = y;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    parallax();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".menu a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("menu-open"); });
    });
  }

  // ---------------- Parallax ----------------
  var parallaxEls = document.querySelectorAll("[data-parallax]");
  function parallax() {
    if (reduced) return;
    parallaxEls.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      var mid = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = "translate3d(0," + (mid * -parseFloat(el.dataset.parallax)) + "px,0)";
    });
  }

  // ---------------- Reveal on scroll ----------------
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      if (e.target.dataset.count) countUp(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }) : null;

  function observeAll() {
    var els = document.querySelectorAll(".reveal, .reveal-3d, .split, .line-grow, .ring-score, .stars-fill, [data-count]");
    if (!io) { els.forEach(function (el) { el.classList.add("in"); }); return; }
    // stagger siblings that enter together
    document.querySelectorAll(".tiles, .values, .features, .stats, .hero-content").forEach(function (group) {
      group.querySelectorAll(":scope > .reveal, :scope > .reveal-3d").forEach(function (el, i) {
        el.style.transitionDelay = i * 0.12 + "s";
      });
    });
    els.forEach(function (el) { io.observe(el); });
  }

  function countUp(el) {
    var target = parseFloat(el.dataset.count);
    var dec = parseInt(el.dataset.decimals || "0", 10);
    if (reduced) { el.textContent = target.toFixed(dec); return; }
    var t0 = null, dur = 1800;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ---------------- 3D tilt ----------------
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  function bindTilt(el) {
    if (!fine || reduced) return;
    var max = parseFloat(el.dataset.tilt || "10");
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.classList.add("active");
      el.style.transform = "perspective(1000px) rotateX(" + ((0.5 - y) * max) + "deg) rotateY(" + ((x - 0.5) * max) + "deg) translateZ(10px)";
      el.style.setProperty("--gx", x * 100 + "%");
      el.style.setProperty("--gy", y * 100 + "%");
    });
    el.addEventListener("pointerleave", function () {
      el.classList.remove("active");
      el.style.transform = "";
    });
  }
  document.querySelectorAll(".tilt").forEach(bindTilt);

  // flip cards on tap
  document.querySelectorAll(".flip-card").forEach(function (c) {
    c.addEventListener("click", function () { if (!fine) c.classList.toggle("flipped"); });
    c.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); c.classList.toggle("flipped"); } });
  });

  // ---------------- Cursor ----------------
  if (fine && !reduced) {
    var ring = document.querySelector(".cursor"), dot = document.querySelector(".cursor-dot");
    if (ring && dot) {
      root.classList.add("has-cursor");
      var mx = -100, my = -100, rx = -100, ry = -100;
      window.addEventListener("pointermove", function (e) {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = "translate(" + mx + "px," + my + "px)";
      }, { passive: true });
      (function loop() {
        rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
        ring.style.transform = "translate(" + rx + "px," + ry + "px)";
        requestAnimationFrame(loop);
      })();
      document.addEventListener("pointerover", function (e) {
        ring.classList.toggle("hover", !!(e.target.closest && e.target.closest("a, button, .tilt, .flip-card, input, select, textarea")));
      });
    }
  }

  // ---------------- Reviews ----------------
  var reviews = (window.SANTOS_REVIEWS || []).filter(function (r) { return r && r.text; });
  function reviewCard(r) {
    var card = document.createElement("article");
    card.className = "review";
    var rating = Math.max(1, Math.min(5, Math.round(r.rating || 5)));
    var stars = document.createElement("div");
    stars.className = "stars";
    stars.setAttribute("aria-label", rating + " / 5");
    stars.textContent = "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);
    var quote = document.createElement("blockquote");
    quote.textContent = r.text;
    var foot = document.createElement("footer");
    var av = document.createElement("span");
    av.className = "avatar";
    av.textContent = (r.name || "?").trim().charAt(0).toUpperCase();
    var who = document.createElement("div");
    var nm = document.createElement("div");
    nm.className = "review-name";
    nm.textContent = r.name || "";
    var meta = document.createElement("div");
    meta.className = "review-meta";
    meta.textContent = ["Google", r.date].filter(Boolean).join(" · ");
    who.append(nm, meta);
    foot.append(av, who);
    card.append(stars, quote, foot);
    return card;
  }

  var section = document.getElementById("review-section");
  if (section && reviews.length) {
    section.hidden = false;
    var wrap = document.getElementById("carousel-wrap");
    var grid = document.getElementById("review-grid");
    if (reviews.length >= 3 && !reduced) {
      wrap.hidden = false;
      document.getElementById("carousel-nav").hidden = false;
      buildCarousel(document.getElementById("carousel"), wrap);
    } else {
      reviews.forEach(function (r) {
        var c = reviewCard(r);
        c.classList.add("reveal-3d");
        grid.appendChild(c);
      });
    }
  }

  function buildCarousel(carousel, wrap) {
    var n = reviews.length;
    var step = 360 / n;
    var cards = reviews.map(function (r) { var c = reviewCard(r); carousel.appendChild(c); return c; });
    var angle = 0, target = 0, dragging = false, startX = 0, startAngle = 0, lastInteract = 0;

    function layout() {
      var w = carousel.offsetWidth;
      var radius = Math.round((w / 2 + 30) / Math.tan(Math.PI / n));
      cards.forEach(function (c, i) {
        c.style.transform = "rotateY(" + i * step + "deg) translateZ(" + radius + "px)";
      });
      carousel.dataset.radius = radius;
    }
    layout();
    window.addEventListener("resize", layout);

    function render() {
      var radius = +carousel.dataset.radius;
      carousel.style.transform = "translateZ(" + -radius + "px) rotateY(" + angle + "deg)";
      cards.forEach(function (c, i) {
        var a = ((i * step + angle) % 360 + 360) % 360;
        var d = Math.min(a, 360 - a) / 180; // 0 = front, 1 = back
        c.style.opacity = String(1 - d * 0.55);
        c.style.filter = "brightness(" + (1 - d * 0.4) + ")";
      });
    }
    (function tick() {
      if (!dragging && Date.now() - lastInteract > 4000) target -= 0.06;
      angle += (target - angle) * 0.08;
      render();
      requestAnimationFrame(tick);
    })();

    document.querySelectorAll("#carousel-nav [data-dir]").forEach(function (b) {
      b.addEventListener("click", function () {
        lastInteract = Date.now();
        target = Math.round(target / step) * step - step * parseInt(b.dataset.dir, 10);
      });
    });
    wrap.addEventListener("pointerdown", function (e) {
      dragging = true; startX = e.clientX; startAngle = target; lastInteract = Date.now();
      wrap.setPointerCapture(e.pointerId);
    });
    wrap.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      target = startAngle + (e.clientX - startX) * 0.35;
    });
    function end() {
      if (!dragging) return;
      dragging = false; lastInteract = Date.now();
      target = Math.round(target / step) * step;
    }
    wrap.addEventListener("pointerup", end);
    wrap.addEventListener("pointercancel", end);
  }

  // ---------------- Menu (menu.html: one continuous list) ----------------
  var menuRoot = document.getElementById("menu-root");
  var menu = (window.SANTOS_MENU || []).filter(function (c) { return c && c.items && c.items.length; });
  if (menuRoot && menu.length) {
    var pick = function (label) { return typeof label === "string" ? label : (label[lang] || label.sq || label.en || ""); };
    var renderMenu = function () {
      menuRoot.textContent = "";
      menu.forEach(function (cat) {
        var h = document.createElement("h2");
        h.className = "menu-cat-title";
        h.textContent = pick(cat.category);
        var list = document.createElement("div");
        list.className = "menu-list";
        cat.items.forEach(function (it) {
          var d = document.createElement("div");
          d.className = "dish";
          var top = document.createElement("div");
          top.className = "dish-top";
          var n = document.createElement("span"); n.className = "dish-name"; n.textContent = pick(it.name);
          var dots = document.createElement("span"); dots.className = "dish-dots";
          var p = document.createElement("span"); p.className = "dish-price"; p.textContent = it.price || "";
          top.append(n, dots, p);
          d.appendChild(top);
          if (it.desc) { var ds = document.createElement("p"); ds.textContent = pick(it.desc); d.appendChild(ds); }
          list.appendChild(d);
        });
        menuRoot.append(h, list);
      });
    };
    renderMenu();
    langHooks.push(renderMenu);
  }

  // ---------------- Reservations → WhatsApp ----------------
  // Every "Reserve" link and WhatsApp button opens a chat with a greeting in the visitor's language.
  var GREETING = {
    sq: "Përshëndetje Santos, dëshiroj të rezervoj një tavolinë.",
    en: "Hello Santos, I would like to reserve a table.",
    bs: "Zdravo Santos, želim rezervisati sto."
  };
  var waLinks = document.querySelectorAll("[data-wa]");
  function updateWhatsApp() {
    var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(GREETING[lang] || GREETING.sq);
    waLinks.forEach(function (a) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    });
  }
  updateWhatsApp();
  langHooks.push(updateWhatsApp);

  onScroll();
})();
