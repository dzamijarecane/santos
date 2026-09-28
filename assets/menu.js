/*
 * Menu shown on kuzhina.html — transcribed from the printed Santos menu.
 *
 * Each category becomes a tab; each item a line with its price.
 * Text can be a plain string or { sq: "...", bs: "...", en: "..." } for each language.
 * To add a category, copy one block below and change the text and prices.
 */
window.SANTOS_MENU = [
  {
    category: { sq: "Paragjellat e ftohta", bs: "Hladna predjela", en: "Cold starters" },
    items: [
      { name: { sq: "Kaçkavall", bs: "Kaškaval", en: "Kashkaval (hard cheese)" }, price: "2.00 €" },
      { name: { sq: "Djathë i bardhë i fortë", bs: "Bijeli tvrdi sir", en: "White hard cheese" }, price: "2.00 €" },
      { name: { sq: "Djathë i bardhë i njomë", bs: "Bijeli mladi (svježi) sir", en: "Fresh white cheese" }, price: "2.50 €" },
      { name: { sq: "Djathë Sharri", bs: "Šarski sir", en: "Sharr cheese" }, price: "3.00 €" },
      { name: { sq: "Proshutë", bs: "Pršut", en: "Smoked ham" }, price: "3.00 €" },
      { name: { sq: "Sallatë ruse", bs: "Ruska salata", en: "Russian salad" }, price: "3.50 €" },
      {
        name: { sq: "Paragjellë e ftohtë (4 persona)", bs: "Hladno predjelo (4 osobe)", en: "Cold platter (4 persons)" },
        desc: { sq: "Djathëra, proshutë, sallatë ruse, ullinj", bs: "Sirevi, pršut, ruska salata, masline", en: "Cheeses, smoked ham, Russian salad, olives" },
        price: "10.00 €"
      },
      { name: { sq: "Ullinj", bs: "Masline", en: "Olives" }, price: "1.50 €" }
    ]
  },
  {
    category: { sq: "Sallatat", bs: "Salate", en: "Salads" },
    items: [
      { name: { sq: "Sallatë me domate", bs: "Paradajz salata", en: "Tomato salad" }, price: "2.00 €" },
      { name: { sq: "Sallatë me tranguj", bs: "Krastavac salata", en: "Cucumber salad" }, price: "2.00 €" },
      { name: { sq: "Sallatë me lakër", bs: "Kupus salata", en: "Cabbage salad" }, price: "2.00 €" },
      { name: { sq: "Sallatë e gjelbër", bs: "Zelena salata", en: "Green salad" }, price: "2.00 €" },
      { name: { sq: "Speca me hudhër", bs: "Paprike u bijelom luku", en: "Peppers in garlic" }, price: "2.00 €" },
      { name: { sq: "Sallatë shope", bs: "Šopska salata", en: "Shopska salad" }, desc: { sq: "Sallatë e përzier me djathë", bs: "Miješana salata sa sirom", en: "Mixed salad with cheese" }, price: "2.50 €" },
      { name: { sq: "Sallatë greke", bs: "Grčka salata", en: "Greek salad" }, price: "3.50 €" }
    ]
  },
  {
    category: { sq: "Verërat e bardha", bs: "Bijela vina", en: "White wines" },
    items: [
      { name: "Chardonnay", desc: "Plantaže", price: "13.00 €" },
      { name: "Alexandria", desc: "0.7 l", price: "14.00 €" },
      { name: "Chardonnay", desc: "Stone Castle", price: "12.00 €" }
    ]
  },
  {
    category: { sq: "Verërat e kuqe", bs: "Crna vina", en: "Red wines" },
    items: [
      { name: "Vranac", price: "13.00 €" },
      { name: "Vranac Pro Corde", price: "15.00 €" },
      { name: "Cabernet Sauvignon Reserve", price: "30.00 €" },
      { name: "T'ga za jug", desc: "0.7 l", price: "14.00 €" },
      { name: "Cabernet Sauvignon", desc: "Stone Castle", price: "12.00 €" }
    ]
  },
  {
    category: { sq: "Verë me gotë", bs: "Vino na čašu", en: "Wine by the glass" },
    items: [
      { name: "Alexandria", desc: "0.2 l", price: "3.50 €" },
      { name: "Stone Castle", desc: "0.2 l", price: "3.00 €" },
      { name: "T'ga za jug", desc: "0.2 l", price: "3.50 €" }
    ]
  }
];
