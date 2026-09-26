(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  // Business details — edit these in one place.
  var PHONE = "+383 00 000 000"; // TODO: replace with the restaurant's real number

  var i18n = {
    en: {
      "nav.about": "About",
      "nav.kitchen": "Kitchen",
      "nav.reviews": "Reviews",
      "nav.visit": "Visit",
      "nav.reserve": "Reserve",
      "hero.eyebrow": "Restaurant · Reçan, Prizren",
      "hero.sub": "Refined flavour and heartfelt hospitality, in the calm of Reçan.",
      "hero.rating": "29 reviews on Google",
      "hero.cta1": "Reserve a table",
      "hero.cta2": "Discover the kitchen",
      "about.eyebrow": "About us",
      "about.title": "A table where every detail matters",
      "about.p1": "Santos was born from a simple idea: food prepared with care, fresh ingredients, and a setting where every guest feels at home — only a little more special.",
      "about.p2": "Just minutes from Prizren, in the village of Reçan, we welcome you for family lunches, quiet dinners and your most important celebrations.",
      "about.stat": "average rating on Google",
      "kitchen.eyebrow": "The kitchen",
      "kitchen.title": "Prepared by hand, served with care",
      "kitchen.t1": "Fresh ingredients",
      "kitchen.d1": "Produce chosen daily, with respect for the season and for honest flavour.",
      "kitchen.t2": "Craft in the kitchen",
      "kitchen.d2": "Recipes refined with patience — from the grill to our signature plates, each with its own character.",
      "kitchen.t3": "True hospitality",
      "kitchen.d3": "Attentive, warm service that turns every visit into a lasting memory.",
      "band": "“Good food is a language every heart speaks.”",
      "reviews.eyebrow": "Reviews",
      "reviews.title": "What our guests say",
      "reviews.based": "Based on",
      "reviews.google": "reviews on Google",
      "reviews.read": "Read all reviews on Google",
      "reviews.write": "Leave a review",
      "visit.eyebrow": "Visit us",
      "visit.title": "We look forward to welcoming you",
      "visit.address": "Address",
      "visit.addressNote": "Prizren – Brezovica road",
      "visit.hours": "Hours",
      "visit.hoursVal": "Every day · 10:00 – 23:00",
      "visit.reserve": "Reservations",
      "visit.call": "Call to reserve",
      "visit.directions": "Get directions",
      "footer.rights": "All rights reserved."
    }
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var sq = {};
  nodes.forEach(function (el) { sq[el.dataset.i18n] = el.textContent; });
  i18n.sq = sq;

  function setLang(lang) {
    var dict = i18n[lang] || sq;
    nodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v) el.textContent = v;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("santos-lang", lang); } catch (e) {}
  }
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
  var saved = null;
  try { saved = localStorage.getItem("santos-lang"); } catch (e) {}
  if (saved === "en") setLang("en");

  // Phone
  var tel = "tel:" + PHONE.replace(/\s+/g, "");
  var phoneLink = document.getElementById("phone-link");
  phoneLink.textContent = PHONE;
  phoneLink.href = tel;
  document.getElementById("call-btn").href = tel;

  // Reviews
  var grid = document.getElementById("review-grid");
  (window.SANTOS_REVIEWS || []).forEach(function (r) {
    var card = document.createElement("article");
    card.className = "review reveal";
    var rating = Math.max(1, Math.min(5, Math.round(r.rating || 5)));
    var initial = (r.name || "?").trim().charAt(0).toUpperCase();

    var stars = document.createElement("div");
    stars.className = "stars";
    stars.setAttribute("aria-label", rating + " / 5");
    stars.textContent = "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);

    var quote = document.createElement("blockquote");
    quote.textContent = r.text || "";

    var foot = document.createElement("footer");
    var av = document.createElement("span");
    av.className = "avatar";
    av.textContent = initial;
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
    grid.appendChild(card);
  });

  // Nav background on scroll
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (el.closest(".hero") ? i * 0.12 : 0) + "s";
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
