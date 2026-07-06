import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strona nie znaleziona - Tatrazone",
};

const popularCategories = [
  { name: "Elektronika", href: "/kategoria/elektronika" },
  { name: "RTV i AGD", href: "/kategoria/rtv-agd" },
  { name: "Moda", href: "/kategoria/moda" },
  { name: "Dom i ogród", href: "/kategoria/dom-i-ogrod" },
  { name: "Sport", href: "/kategoria/sport" },
  { name: "Promocje", href: "/akcje" },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center px-4 max-w-lg">
        {/* 404 illustration */}
        <div className="relative mb-6 inline-block">
          <div className="text-[120px] md:text-[160px] font-bold leading-none select-none">
            <span className="text-gray-200">4</span>
            <span className="text-primary-200 relative inline-block">
              0
              <svg
                className="absolute -top-2 -right-2 w-8 h-8 text-primary-300 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="text-gray-200">4</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Strona nie została znaleziona
        </h1>
        <p className="text-gray-500 mb-6 leading-relaxed">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
          Sprawdź adres lub skorzystaj z wyszukiwarki.
        </p>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-8">
          <form action="/kategoria" method="GET" className="relative">
            <input
              type="text"
              name="q"
              placeholder="Szukaj produktów..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all shadow-sm"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="/"
            className="bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
          >
            Powrót do strony głównej
          </Link>
          <Link
            href="/kategoria"
            className="text-primary-600 font-medium px-8 py-3 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
          >
            Przeglądaj produkty
          </Link>
        </div>

        {/* Popular categories */}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">
            Popularne kategorie
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
