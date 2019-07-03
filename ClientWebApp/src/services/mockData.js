export function mockPromisse(items) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      var rand = Math.random();
      if (rand > 0.1) {
        resolve(items);
      } else {
        reject();
      }
    }, 3000);
  });
}

export const auctions = [
  {
    id: 18,
    title: "asdfasf",
    description:
      "Tortilla (wym. tor'ti?a) – w kuchni meksykanskiej, rodzaj plaskiego, okraglego placka o srednicy od 6 do 30 cm, z masy lub maki kukurydzianej albo pszennej, stosowanego jako pieczywo i baza do innych potraw.",
    image: null,
    categories: [1],
    dotpayLink: "https://pl.wikipedia.org/wiki/Tortilla",
    paypalLink: "https://pl.wikipedia.org/wiki/Tortilla",
    featured: true,
    siepomagaLink: "https://pl.wikipedia.org/wiki/Tortilla",
    account: true,
    dateFrom: "2019-07-03T12:44:14.3933333",
    dateTo: "2019-07-03T12:44:14.3933333",
    addressFrom: null,
    addressTo: null,
    contactNumber: "123123123"
  },
  {
    id: 17,
    title: "test",
    description:
      "Tortilla (wym. tor'ti?a) – w kuchni meksykanskiej, rodzaj plaskiego, okraglego placka o srednicy od 6 do 30 cm, z masy lub maki kukurydzianej albo pszennej, stosowanego jako pieczywo i baza do innych potraw.",
    image: null,
    categories: [2],
    dotpayLink: "https://pl.wikipedia.org/wiki/Tortilla",
    paypalLink: "https://pl.wikipedia.org/wiki/Tortilla",
    featured: true,
    siepomagaLink: "https://pl.wikipedia.org/wiki/Tortilla",
    account: true,
    dateFrom: "2019-07-03T12:44:10.8833333",
    dateTo: "2019-07-03T12:44:10.8833333",
    addressFrom: null,
    addressTo: null,
    contactNumber: "123123123"
  },
  {
    id: 16,
    title: "Tortilla 2",
    description:
      "Tortilla (wym. tor'ti?a) – w kuchni meksykanskiej, rodzaj plaskiego, okraglego placka o srednicy od 6 do 30 cm, z masy lub maki kukurydzianej albo pszennej, stosowanego jako pieczywo i baza do innych potraw.",
    image: null,
    categories: [1, 3],
    dotpayLink: null,
    paypalLink: null,
    featured: true,
    siepomagaLink: "https://pl.wikipedia.org/wiki/Tortilla",
    account: false,
    dateFrom: "2019-07-03T12:43:58.9866667",
    dateTo: "2019-07-03T12:43:58.9866667",
    addressFrom: null,
    addressTo: null,
    contactNumber: "123123123"
  },
  {
    id: 15,
    title: "Tortilla",
    description:
      "Tortilla (wym. tor'ti?a) – w kuchni meksykanskiej, rodzaj plaskiego, okraglego placka o srednicy od 6 do 30 cm, z masy lub maki kukurydzianej albo pszennej, stosowanego jako pieczywo i baza do innych potraw.",
    image: null,
    categories: [4],
    dotpayLink: "https://pl.wikipedia.org/wiki/Tortilla",
    paypalLink: "https://pl.wikipedia.org/wiki/Tortilla",
    featured: true,
    siepomagaLink: "https://pl.wikipedia.org/wiki/Tortilla",
    account: true,
    dateFrom: "2019-07-03T12:43:30.8666667",
    dateTo: "2019-07-03T12:43:30.8666667",
    addressFrom: null,
    addressTo: null,
    contactNumber: "123123123"
  },
  {
    id: 14,
    title: "Dajta mi kebaba",
    description:
      "W Polsce slowo kebab oznacza zazwyczaj döner kebap (w jezyku tureckim „obracajace sie pieczone mieso”)",
    image: null,
    categories: [],
    dotpayLink: "https://pl.wikipedia.org/wiki/Kebab",
    paypalLink: "https://pl.wikipedia.org/wiki/Kebab",
    featured: true,
    siepomagaLink: null,
    account: true,
    dateFrom: "2019-07-03T12:42:41.88",
    dateTo: "2019-07-03T12:42:41.88",
    addressFrom: null,
    addressTo: null,
    contactNumber: "123123123"
  },
  {
    id: 5,
    title: "Pomoc glodnym",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: null,
    categories: [5, 4, 3],
    dotpayLink: "https://itfighters.pl/",
    paypalLink: "https://itfighters.pl/",
    featured: true,
    siepomagaLink: "https://itfighters.pl/",
    account: true,
    dateFrom: "2019-07-03T12:33:31.36",
    dateTo: "2019-07-03T12:33:31.36",
    addressFrom: null,
    addressTo: null,
    contactNumber: "444444444"
  }
];

export const categories = [
  { id: 1, name: "ŚRODKI NA LECZENIE" },
  { id: 2, name: "ŚRODKI NA NAPRAWY" },
  { id: 3, name: "POTRZEBNY TRANSPORT" },
  { id: 4, name: "POTRZEBNI LUDZIE" },
  { id: 5, name: "POMOC RZECZOWA" },
  { id: 6, name: "PILNIE POTRZEBNY DOM/DOM TYMCZASOWY" }
];
