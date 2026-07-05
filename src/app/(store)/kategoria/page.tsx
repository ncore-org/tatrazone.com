import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kategorie",
  description: "Przeglądaj wszystkie kategorie produktów w Tatrazone. Elektronika, moda, dom, sport i wiele więcej.",
};

const categories = [
  { name: "Elektronika", icon: "💻", slug: "elektronika", desc: "Laptopy, smartfony, tablety, akcesoria", count: "2 340" },
  { name: "RTV i AGD", icon: "📺", slug: "rtv-agd", desc: "Telewizory, pralki, lodówki, sprzęt kuchenny", count: "1 120" },
  { name: "Dom i ogród", icon: "🏠", slug: "dom-i-ogrod", desc: "Meble, dekoracje, narzędzia, rośliny", count: "890" },
  { name: "Moda", icon: "👕", slug: "moda", desc: "Odzież, obuwie, dodatki dla całej rodziny", count: "1 560" },
  { name: "Sport", icon: "⚽", slug: "sport", desc: "Sprzęt sportowy, odzież, akcesoria", count: "670" },
  { name: "Dziecko", icon: "🧸", slug: "dziecko", desc: "Zabawki, ubranka, akcesoria dla dzieci", count: "430" },
  { name: "Zdrowie i uroda", icon: "💄", slug: "zdrowie-uroda", desc: "Kosmetyki, suplementy, akcesoria", count: "780" },
  { name: "Motoryzacja", icon: "🚗", slug: "motoryzacja", desc: "Części, akcesoria, chemia samochodowa", count: "320" },
  { name: "Książki i media", icon: "📚", slug: "ksiazki", desc: "Książki, e-booki, gry, filmy", count: "1 100" },
  { name: "Artykuły biurowe", icon: "📎", slug: "biuro", desc: "Sprzęt biurowy, materiały eksploatacyjne", count: "250" },
  { name: "Spożywcze", icon: "🍎", slug: "spozywcze", desc: "Żywność, napoje, delikatesy", count: "190" },
  { name: "Zwierzęta", icon: "🐾", slug: "zwierzeta", desc: "Karma, akcesoria, zabawki dla zwierząt", count: "410" },
];

export default function KategoriaPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Kategorie produktów
      </h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Przeglądaj naszą bogatą ofertę — ponad 10 000 produktów w konkurencyjnych cenach.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/kategoria/${cat.slug}`}
            className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">
              {cat.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{cat.desc}</p>
            <span className="text-xs text-primary-600 font-medium">
              {cat.count} produktów
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
