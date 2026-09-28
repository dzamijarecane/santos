/*
 * Menu shown on menu.html — transcribed from the printed Santos menu.
 *
 * Categories appear top to bottom in this order as one continuous list (drinks first).
 * Text can be a plain string or { sq: "...", bs: "...", en: "..." } for each language.
 * To add a category, copy one block below and change the text and prices.
 */
window.SANTOS_MENU = [
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
    category: { sq: "Turshitë", bs: "Turšije", en: "Pickles" },
    items: [
      { name: { sq: "Lakër turshi", bs: "Kiseli kupus", en: "Sour cabbage" }, price: "1.50 €" },
      { name: { sq: "Speca me hudhër turshi", bs: "Barena paprika sa bijelim lukom", en: "Boiled peppers with garlic" }, price: "1.50 €" },
      { name: { sq: "Turshi domate", bs: "Paradajz turšija", en: "Pickled tomatoes" }, price: "1.50 €" },
      { name: { sq: "Turshi tranguj", bs: "Kiseli krastavci", en: "Pickled cucumbers" }, price: "1.50 €" },
      { name: { sq: "Sallatë e përzier shtëpiake", bs: "Miješana domaća salata", en: "Mixed homemade salad" }, price: "2.00 €" },
      { name: { sq: "Speca të mbushura me ajkë", bs: "Punjena paprika sa pavlakom", en: "Peppers stuffed with cream" }, price: "1.50 €" }
    ]
  },
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
    category: { sq: "Paragjellat e nxehta", bs: "Topla predjela", en: "Hot starters" },
    items: [
      { name: { sq: "Vezë në sy", bs: "Jaja na oko", en: "Fried eggs" }, price: "2.50 €" },
      { name: { sq: "Omletë me djathë", bs: "Omlet sa sirom", en: "Cheese omelette" }, price: "3.50 €" },
      { name: { sq: "Omletë me proshutë", bs: "Omlet sa pršutom", en: "Omelette with smoked ham" }, price: "3.50 €" },
      { name: { sq: "Omletë me kërpudha", bs: "Omlet sa pečurkama", en: "Mushroom omelette" }, price: "3.50 €" },
      { name: { sq: "Vezë me tamël (kajganë)", bs: "Kajgana (jaja sa mlijekom)", en: "Scrambled eggs with milk" }, price: "2.00 €" },
      { name: { sq: "Kaçkavall i fërguar", bs: "Pohovani kaškaval", en: "Breaded kashkaval" }, price: "4.00 €" },
      { name: { sq: "Tru të fërguar", bs: "Pohovani mozak", en: "Breaded brains" }, price: "6.50 €" },
      { name: { sq: "Tru në mënyrë rome", bs: "Mozak na ciganski način", en: "Brains, Roma style" }, price: "9.00 €" },
      { name: { sq: "Plançë në vaj", bs: "Prženi škembići", en: "Fried tripe" }, price: "5.50 €" },
      { name: { sq: "Plançë të fërguara", bs: "Pohovani škembići", en: "Breaded tripe" }, price: "5.50 €" },
      { name: { sq: "Kërpudha të freskëta me gjalpë në zgarë", bs: "Svježe pečurke sa puterom na žaru", en: "Grilled fresh mushrooms with butter" }, price: "4.50 €" },
      { name: { sq: "Shampinjonë me kajmak e proshutë në zgarë", bs: "Šampinjoni sa kajmakom i pršutom na žaru", en: "Grilled mushrooms with kajmak and smoked ham" }, price: "7.50 €" },
      { name: { sq: "Speca të fërguar", bs: "Pohovana paprika", en: "Breaded peppers" }, price: "1.50 €" },
      { name: { sq: "Speca të mbushur të fërguar", bs: "Punjena pohovana paprika", en: "Stuffed breaded peppers" }, price: "2.50 €" },
      { name: { sq: "Noazeti vjeneze – \u201cBesnik Shala\u201d", bs: "Bečki noazeti – \u201cBesnik Shala\u201d", en: "Viennese noisettes – \u201cBesnik Shala\u201d" }, price: "6.00 € / 10.00 €" }
    ]
  },
  {
    category: { sq: "Supat", bs: "Čorbe", en: "Soups" },
    items: [
      { name: { sq: "Paçe", bs: "Pače", en: "Pacha soup" }, price: "3.00 €" },
      { name: { sq: "Çorbë me plançë", bs: "Škembe čorba", en: "Tripe soup" }, price: "3.50 €" }
    ]
  },
  {
    category: { sq: "Nga skara", bs: "Sa roštilja", en: "From the grill" },
    items: [
      { name: { sq: "Pleskavicë", bs: "Pljeskavica", en: "Pljeskavica (grilled meat patty)" }, price: "6.50 €" },
      { name: { sq: "Bombice", bs: "Bombica", en: "Bombica (stuffed meatballs)" }, price: "7.00 €" },
      { name: { sq: "Qofte me kaçkavall në kajmak", bs: "Uštipci na kajmaku", en: "Meat patties with kashkaval in kajmak" }, price: "7.00 €" },
      { name: { sq: "Gjevrek prej mishi në kajmak", bs: "Dževreci sa kajmakom", en: "Meat rolls in kajmak (dževrek)" }, price: "7.00 €" },
      { name: { sq: "Mish viçi në hell", bs: "Teleći ražnjići", en: "Veal skewers" }, price: "11.00 €" },
      { name: { sq: "Mish pule në hell", bs: "Pileći ražnjići", en: "Chicken skewers" }, price: "6.00 €" },
      { name: { sq: "File pule", bs: "Pileći file", en: "Chicken fillet" }, price: "6.00 €" },
      { name: { sq: "File viçi", bs: "Teleći file", en: "Veal fillet" }, price: "7.50 € / 13.00 €" },
      { name: { sq: "Ramstek", bs: "Ramstek", en: "Rump steak" }, price: "7.00 € / 12.00 €" },
      { name: { sq: "Biftek", bs: "Biftek", en: "Beef steak" }, price: "15.50 €" },
      { name: { sq: "Bërxollë (kotletë)", bs: "Kotlet", en: "Chop (cutlet)" }, price: "8.00 € / 14.00 €" }
    ]
  },
  {
    category: { sq: "Specialitete me porosi", bs: "Specijaliteti po porudžbini", en: "Specialities to order" },
    items: [
      {
        name: { sq: "File \u201cSkënderbeg\u201d", bs: "Skenderbegova šnicla", en: "\u201cSkenderbeg\u201d fillet" },
        desc: { sq: "Kaçkavall, proshutë, shampinjonë", bs: "Kaškaval, pršut, šampinjoni", en: "Kashkaval, smoked ham, mushrooms" },
        price: "7.00 € / 11.50 €"
      },
      { name: { sq: "Ramstek \u201cBulanzhe\u201d", bs: "Ramstek \u201cBulanže\u201d", en: "Rump steak \u201cBoulangère\u201d" }, price: "7.00 € / 11.50 €" },
      { name: { sq: "File pule të fërguar", bs: "Pohovana piletina", en: "Breaded chicken" }, price: "4.00 € / 7.00 €" },
      { name: { sq: "File pule e mbushur e fërguar", bs: "Pohovana rolovana piletina", en: "Stuffed breaded chicken roll" }, price: "6.00 € / 10.00 €" },
      { name: { sq: "File pule e mbushur e skuqur", bs: "Pržena rolovana piletina", en: "Stuffed fried chicken roll" }, price: "6.00 € / 10.00 €" },
      { name: { sq: "Mish pule me salcë të bardhë me kërpudha", bs: "Piletina sa pečurkama u bijelom sosu", en: "Chicken with mushrooms in white sauce" }, price: "5.00 € / 8.00 €" },
      { name: { sq: "Noazeti mish pule", bs: "Pileći noazeti", en: "Chicken noisettes" }, price: "5.00 € / 8.00 €" },
      {
        name: { sq: "Gjellë e përzier \u201cUrnebes\u201d", bs: "Urnebes", en: "\u201cUrnebes\u201d mixed dish" },
        desc: { sq: "Biftek, shampinjonë, kajmak", bs: "Biftek, šampinjoni, kajmak", en: "Beef steak, mushrooms, kajmak" },
        price: "14.00 €"
      },
      {
        name: { sq: "Biftek me perime të freskëta (mućkalica)", bs: "Mućkalica", en: "Mućkalica" },
        desc: { sq: "Biftek me perime të freskëta të përziera", bs: "Biftek, svježe povrće", en: "Beef steak with fresh mixed vegetables" },
        price: "14.00 €"
      },
      { name: { sq: "Ramstek \u201cSANTOS\u201d", bs: "Ramstek \u201cSANTOS\u201d", en: "Rump steak \u201cSANTOS\u201d" }, price: "8.00 € / 14.00 €" },
      { name: { sq: "Ramstek i fërguar", bs: "Pohovani ramstek", en: "Breaded rump steak" }, price: "7.00 € / 12.50 €" },
      { name: { sq: "File vieneze (bečka)", bs: "Bečka šnicla", en: "Wiener schnitzel (veal)" }, price: "7.00 € / 12.50 €" },
      { name: { sq: "File pariziene (pariska)", bs: "Pariska šnicla", en: "Veal steak à la parisienne" }, price: "7.00 € / 12.50 €" },
      { name: { sq: "File nature", bs: "Natur šnicla", en: "Veal steak nature" }, price: "7.50 € / 13.00 €" },
      { name: { sq: "File nature me salcë të bardhë", bs: "Natur šnicla u bijelom sosu", en: "Veal steak nature in white sauce" }, price: "7.50 € / 13.50 €" },
      { name: { sq: "Biftek \u201cSANTOS\u201d", bs: "Biftek \u201cSANTOS\u201d", en: "Beef steak \u201cSANTOS\u201d" }, price: "17.00 €" },
      { name: { sq: "Biftek \u201cStroganoff\u201d", bs: "Biftek sote \u201cStroganoff\u201d", en: "Beef Stroganoff" }, price: "14.00 €" },
      { name: { sq: "Medalion viçi me kërpudha", bs: "Teleći medaljoni sa pečurkama", en: "Veal medallions with mushrooms" }, price: "8.00 € / 14.50 €" },
      { name: { sq: "Medalion të mbushur", bs: "Punjeni medaljoni", en: "Stuffed veal medallions" }, price: "8.50 € / 15.50 €" },
      { name: { sq: "Medalion në salcë të bardhë me kërpudha", bs: "Medaljoni u bijelom sosu sa pečurkama", en: "Veal medallions in white sauce with mushrooms" }, price: "8.00 € / 14.50 €" },
      { name: { sq: "Biftek i fërguar", bs: "Pohovani biftek", en: "Breaded beef steak" }, price: "16.00 €" },
      { name: { sq: "Biftek \u201cMonte Karlo\u201d", bs: "Biftek \u201cMonte Karlo\u201d", en: "Beef steak \u201cMonte Carlo\u201d" }, price: "16.00 €" },
      { name: { sq: "Mish tul (stek)", bs: "Stek", en: "Steak" }, price: "17.00 €" },
      { name: { sq: "Mish copëz \u201cSharri\u201d", bs: "Šarski odrezak", en: "\u201cSharr\u201d cutlet" }, price: "16.00 €" },
      { name: { sq: "Biftek \u201cBizmark\u201d", bs: "Biftek \u201cBizmark\u201d", en: "Beef steak \u201cBismarck\u201d" }, price: "16.00 €" }
    ]
  },
  {
    category: { sq: "Mishra të pjekur", bs: "Pečenja", en: "Roast meat" },
    items: [
      { name: { sq: "Mish viçi i pjekur", bs: "Dinstana teletina", en: "Braised veal" }, price: "7.50 € / 13.00 €" },
      { name: { sq: "Muskuj", bs: "Ribić", en: "Lean beef" }, price: "7.00 € / 12.00 €" },
      { name: { sq: "Mish viçi i pjekur në zjarr", bs: "Dinstana teletina na žaru", en: "Braised veal finished on the grill" }, price: "7.50 € / 13.00 €" },
      { name: { sq: "Brinjë viçi", bs: "Teleća rebarca", en: "Veal ribs" }, price: "9.00 € / 14.00 €" },
      { name: { sq: "Gjuri viçi (200 g)", bs: "Teleća koljenica (200 g)", en: "Veal shank (200 g)" }, price: "11.00 €" }
    ]
  }
];
