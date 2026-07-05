"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";

const categories = [
  { name: "Elektronika", slug: "elektronika", icon: "💻", subcategories: ["Laptopy i notebooki", "Smartfony i telefony", "Tablety i e-booki", "Słuchawki i głośniki", "Akcesoria komputerowe", "Gaming"] },
  { name: "RTV i AGD", slug: "rtv-agd", icon: "📺", subcategories: ["Telewizory", "Sprzęt audio", "Lodówki", "Pralki i suszarki", "Kuchnia i gotowanie", "Sprzątanie"] },
  { name: "Dom i ogród", slug: "dom-i-ogrod", icon: "🏠", subcategories: ["Meble", "Oświetlenie", "Narzędzia", "Ogród i rośliny", "Dekoracje", "Smart Home"] },
  { name: "Moda", slug: "moda", icon: "👕", subcategories: ["Odzież męska", "Odzież damska", "Obuwie", "Akcesoria", "Zegarki i biżuteria", "Torby i plecaki"] },
  { name: "Sport", slug: "sport", icon: "⚽", subcategories: ["Fitnes i siłownia", "Sporty zespołowe", "Rowery", "Turystyka", "Sporty wodne", "Joga i relaks"] },
  { name: "Dziecko", slug: "dziecko", icon: "🧸", subcategories: ["Zabawki", "Dla niemowląt", "Artykuły szkolne", "Gry planszowe", "Kreatywna zabawa", "Sport dla dzieci"] },
  { name: "Zdrowie i uroda", slug: "zdrowie-uroda", icon: "💄", subcategories: ["Kosmetyki", "Pielęgnacja twarzy", "Pielęgnacja włosów", "Zdrowie i apteka", "Masaż i relaks", "Golarki i depilacja"] },
  { name: "Motoryzacja", slug: "motoryzacja", icon: "🚗", subcategories: ["Akcesoria samochodowe", "Oleje i płyny", "Opony i felgi", "Elektronika", "Pielęgnacja auta", "Motocykle"] },
  { name: "Książki i media", slug: "ksiazki", icon: "📚", subcategories: ["Książki", "E-booki", "Audiobooki", "Muzyka", "Filmy i seriale", "Gry"] },
  { name: "Artykuły biurowe", slug: "biuro", icon: "📎", subcategories: ["Papier i drukowanie", "Artykuły biurowe", "Meble biurowe", "Sprzęt biurowy", "Kalendarze", "Prezenty firmowe"] },
  { name: "Spożywcze", slug: "spozywcze", icon: "🍎", subcategories: ["Napoje", "Słodycze i przekąski", "Kawa i herbata", "Zdrowa żywność", "Przyprawy", "Produkty regionalne"] },
  { name: "Zwierzęta", slug: "zwierzeta", icon: "🐾", subcategories: ["Karma dla psów", "Karma dla kotów", "Akcesoria", "Higiena", "Zabawki dla zwierząt", "Zwierzęta egzotyczne"] },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const suggestions = searchQuery.length > 1
    ? categories
        .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 5)
    : [];

  return (
    <>
      <header className={`sticky top-0 z-40 bg-white border-b border-gray-200 transition-all duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}>
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center text-xs sm:text-sm py-1.5 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-white rounded-full blur-3xl" />
          </div>
          <p className="font-medium relative z-10">
            📦 Darmowa dostawa od 200 zł | Nowi klienci -10% z kodem{" "}
            <span className="font-bold bg-white/20 px-2 py-0.5 rounded">TATRA10</span>
            {" | "}Zamów do 22:00 — wyślemy dziś! 🚚
          </p>
        </div>

        {/* Main Header */}
        <div className={`transition-all duration-200 ${scrolled ? "py-1" : "py-0"}`}>
          <div className="container-site">
            <div className="flex items-center justify-between h-14 md:h-16 gap-4">
              {/* Hamburger + Logo */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <span className="text-white font-bold text-lg md:text-xl">T</span>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-gray-900 hidden sm:block tracking-tight">
                    Tatrazone
                  </span>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-2xl mx-4 relative">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Szukaj produktów, kategorii, marek..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white focus:border-primary-400 transition-all"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                {/* Suggestions dropdown */}
                {suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 animate-scale-in">
                    <p className="px-4 pt-3 pb-1.5 text-xs text-gray-400 font-medium uppercase tracking-wider">Kategorie</p>
                    {suggestions.map(s => (
                      <Link
                        key={s.slug}
                        href={`/kategoria/${s.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-sm"
                      >
                        <span>{s.icon}</span>
                        <span className="text-gray-700">{s.name}</span>
                      </Link>
                    ))}
                    <Link
                      href={`/kategoria?q=${encodeURIComponent(searchQuery)}`}
                      className="block px-4 py-2.5 text-sm text-primary-600 font-medium border-t border-gray-100 hover:bg-primary-50 rounded-b-xl transition-colors"
                    >
                      Szukaj &quot;{searchQuery}&quot; we wszystkich kategoriach →
                    </Link>
                  </div>
                )}
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-1 md:gap-1.5">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Szukaj"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                <Link
                  href="/konto/logowanie"
                  className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 group"
                >
                  <svg className="w-5 h-5 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="hidden lg:inline group-hover:text-primary-600 transition-colors">Konto</span>
                </Link>

                <Link
                  href="/konto/ulubione"
                  className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 group relative"
                >
                  <svg className="w-5 h-5 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="hidden lg:inline group-hover:text-red-500 transition-colors">Ulubione</span>
                </Link>

                <Link
                  href="/koszyk"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 group relative"
                >
                  <svg className="w-5 h-5 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  <span className="hidden lg:inline group-hover:text-primary-600 transition-colors">Koszyk</span>
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation + Mega Menu */}
        <nav className="hidden md:block border-t border-gray-100 bg-gray-50/80">
          <div className="container-site">
            <div className="flex items-center">
              <button
                onClick={() => setActiveMega(activeMega === "all" ? null : "all")}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary-600 hover:bg-white transition-colors border-r border-gray-200"
                onMouseEnter={() => setActiveMega("all")}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Wszystkie kategorie
              </button>
              {[
                { name: "Promocje 🔥", href: "/akcje" },
                { name: "Nowości ✨", href: "/nowosci" },
                { name: "Bestsellery 🏆", href: "/kategoria" },
                { name: "Blog", href: "/blog" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-white transition-colors border-r border-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mega Menu Dropdown */}
          {activeMega && (
            <div
              className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50"
              onMouseLeave={() => setActiveMega(null)}
            >
              <div className="container-site py-6">
                <div className="grid grid-cols-4 gap-6">
                  {categories.map((cat) => (
                    <div key={cat.slug}>
                      <Link
                        href={`/kategoria/${cat.slug}`}
                        className="flex items-center gap-2 font-semibold text-gray-900 hover:text-primary-600 transition-colors mb-2 text-sm"
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </Link>
                      <ul className="space-y-1">
                        {cat.subcategories.map((sub) => (
                          <li key={sub}>
                            <Link
                              href={`/kategoria/${cat.slug}/${encodeURIComponent(sub.toLowerCase().replace(/\s+/g, "-"))}`}
                              className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <Link
                    href="/kategoria"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    onClick={() => setActiveMega(null)}
                  >
                    Zobacz wszystkie kategorie
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden border-t border-gray-200 p-3 bg-white animate-slide-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Szukaj produktów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white"
                autoFocus
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 safe-area-bottom">
          <div className="flex items-center justify-around py-1.5">
            {[
              { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Główna", href: "/" },
              { icon: "M4 6h16M4 12h16M4 18h16", label: "Kategorie", href: "/kategoria" },
              { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", label: "Szukaj", href: "#", action: "search" },
              { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z", label: "Koszyk", href: "/koszyk", badge: true },
              { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", label: "Konto", href: "/konto/logowanie" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={(e) => {
                  if (item.action === "search") {
                    e.preventDefault();
                    setSearchOpen(true);
                  }
                }}
                className="flex flex-col items-center gap-0.5 px-3 py-1 text-gray-500 hover:text-primary-600 transition-colors relative"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-[10px] font-medium">{item.label}</span>
                {item.badge && (
                  <span className="absolute -top-0.5 right-1 bg-primary-600 text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    0
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile padding */}
        <div className="md:hidden h-16" />
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
