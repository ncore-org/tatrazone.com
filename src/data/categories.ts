import { products } from "./products";

export interface Category {
  name: string;
  description: string;
  count: number;
}

export const categories: Record<string, Category> = {
  elektronika: {
    name: "Elektronika",
    description: "Laptopy, smartfony, tablety i akcesoria elektroniczne w najlepszych cenach.",
    count: 2340,
  },
  "rtv-agd": {
    name: "RTV i AGD",
    description: "Telewizory, pralki, lodówki i cały sprzęt kuchenny. Najlepsze marki w atrakcyjnych cenach.",
    count: 1120,
  },
  "dom-i-ogrod": {
    name: "Dom i ogród",
    description: "Meble, dekoracje, narzędzia i rośliny do Twojego domu i ogrodu.",
    count: 890,
  },
  moda: {
    name: "Moda",
    description: "Odzież, obuwie i dodatki dla całej rodziny. Najnowsze kolekcje i trendy.",
    count: 1560,
  },
  sport: {
    name: "Sport",
    description: "Sprzęt sportowy, odzież i akcesoria dla aktywnych.",
    count: 670,
  },
  dziecko: {
    name: "Dziecko",
    description: "Zabawki, ubranka i akcesoria dla dzieci w każdym wieku.",
    count: 430,
  },
  "zdrowie-i-uroda": {
    name: "Zdrowie i uroda",
    description: "Kosmetyki, suplementy i akcesoria do pielęgnacji.",
    count: 780,
  },
  motoryzacja: {
    name: "Motoryzacja",
    description: "Części samochodowe, akcesoria i chemia motoryzacyjna.",
    count: 320,
  },
  "ksiazki-i-media": {
    name: "Książki i media",
    description: "Książki, e-booki, gry i filmy. Bogaty wybór dla każdego.",
    count: 1100,
  },
  "artykuly-biurowe": {
    name: "Artykuły biurowe",
    description: "Sprzęt biurowy, materiały eksploatacyjne i akcesoria.",
    count: 250,
  },
  spozywcze: {
    name: "Spożywcze",
    description: "Żywność, napoje i delikatesy w korzystnych cenach.",
    count: 190,
  },
  zwierzeta: {
    name: "Zwierzęta",
    description: "Karma, akcesoria i zabawki dla Twojego pupila.",
    count: 410,
  },
};

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.slug === slug);
}
