"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Domov", href: "/" },
  { label: "Kategórie", href: "/kategoria" },
  { label: "Akcie", href: "/akcie" },
  { label: "Novinky", href: "/novinky" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar - hidden on mobile */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-100 text-xs text-gray-500">
        <div className="container-site flex items-center justify-between h-9">
          <span>📦 Doprava zdarma pri nákupe nad 50 €</span>
          <div className="flex items-center gap-4">
            <Link href="/o-nas" className="hover:text-gray-700 transition-colors">
              O nás
            </Link>
            <Link href="/blog" className="hover:text-gray-700 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-gray-700 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-site">
        <div className="flex items-center justify-between h-14 md:h-16 gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              Tatrazone
            </span>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `/vyhladavanie?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
              className="relative"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Hľadať produkty..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border-2 border-gray-200 bg-gray-50 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              href="/ucet/prihlasenie"
              className="flex flex-col items-center px-2 md:px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[10px] md:text-xs text-gray-500 hidden md:block">Profil</span>
            </Link>

            <Link
              href="/ucet/oblubene"
              className="flex flex-col items-center px-2 md:px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors relative"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-[10px] md:text-xs text-gray-500 hidden md:block">Obľúbené</span>
            </Link>

            <Link
              href="/kosik"
              className="flex flex-col items-center px-2 md:px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors relative"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 md:top-0 md:-right-0.5 bg-primary-600 text-white text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                0
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 hidden md:block">Košík</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:block bg-white border-t border-gray-100">
        <div className="container-site">
          <ul className="flex items-center gap-1 h-11">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `/vyhladavanie?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Hľadať produkty..."
                className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-gray-50 focus:border-primary-500 focus:outline-none text-sm"
              />
            </form>
          </div>
          <ul className="px-4 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-100 pt-2 mt-2">
              <Link
                href="/o-nas"
                className="block px-4 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                O nás
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="block px-4 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
