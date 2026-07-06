"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const categories = [
  {
    name: "Elektronika",
    slug: "elektronika",
    icon: "💻",
    subcategories: ["Laptopy i notebooki", "Smartfony", "Tablety", "Słuchawki", "Akcesoria", "Gaming"],
  },
  {
    name: "RTV i AGD",
    slug: "rtv-agd",
    icon: "📺",
    subcategories: ["Telewizory", "Sprzęt audio", "Lodówki", "Pralki", "Kuchnia", "Sprzątanie"],
  },
  {
    name: "Dom i ogród",
    slug: "dom-i-ogrod",
    icon: "🏠",
    subcategories: ["Meble", "Oświetlenie", "Narzędzia", "Ogród", "Dekoracje", "Smart Home"],
  },
  {
    name: "Moda",
    slug: "moda",
    icon: "👕",
    subcategories: ["Odzież męska", "Odzież damska", "Obuwie", "Akcesoria", "Zegarki", "Torby"],
  },
  {
    name: "Sport",
    slug: "sport",
    icon: "⚽",
    subcategories: ["Fitnes", "Sporty zespołowe", "Rowery", "Turystyka", "Sporty wodne", "Joga"],
  },
  {
    name: "Dziecko",
    slug: "dziecko",
    icon: "🧸",
    subcategories: ["Zabawki", "Dla niemowląt", "Artykuły szkolne", "Gry", "Kreatywna zabawa", "Sport"],
  },
  {
    name: "Zdrowie i uroda",
    slug: "zdrowie-uroda",
    icon: "💄",
    subcategories: ["Kosmetyki", "Pielęgnacja", "Apteka", "Masaż", "Golarki", "Depilacja"],
  },
  {
    name: "Motoryzacja",
    slug: "motoryzacja",
    icon: "🚗",
    subcategories: ["Akcesoria", "Oleje", "Opony", "Elektronika", "Pielęgnacja", "Motocykle"],
  },
  {
    name: "Książki i media",
    slug: "ksiazki",
    icon: "📚",
    subcategories: ["Książki", "E-booki", "Audiobooki", "Muzyka", "Filmy", "Gry"],
  },
  {
    name: "Artykuły biurowe",
    slug: "biuro",
    icon: "📎",
    subcategories: ["Papier", "Artykuły biurowe", "Meble", "Sprzęt", "Kalendarze", "Prezenty"],
  },
  {
    name: "Spożywcze",
    slug: "spozywcze",
    icon: "🍎",
    subcategories: ["Napoje", "Słodycze", "Kawa i herbata", "Zdrowa żywność", "Przyprawy", "Regionalne"],
  },
  {
    name: "Zwierzęta",
    slug: "zwierzeta",
    icon: "🐾",
    subcategories: ["Karma dla psów", "Karma dla kotów", "Akcesoria", "Higiena", "Zabawki", "Egzotyczne"],
  },
];

const quickLinks = [
  { name: "Promocje", href: "/akcje", icon: "🔥" },
  { name: "Nowości", href: "/nowosci", icon: "✨" },
  { name: "Bestsellery", href: "/kategoria", icon: "🏆" },
  { name: "Blog", href: "/blog", icon: "📝" },
];

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Body scroll lock + focus trap + ESC handler
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Focus drawer on open
      setTimeout(() => drawerRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      // Restore focus
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacyjne"
        tabIndex={-1}
        className={`fixed top-0 left-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-50 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-2" onClick={onClose}>
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Tatrazone</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Zamknij menu"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-2 p-4 border-b border-gray-100 bg-gray-50">
            {quickLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-2 px-3 py-2.5 bg-white rounded-lg text-sm font-medium text-gray-700 hover:text-primary-600 hover:shadow-sm transition-all animate-slide-up-full ${
                  isOpen ? `opacity-100` : `opacity-0`
                }`}
                style={{ animationDelay: isOpen ? `${100 + i * 50}ms` : "0ms" }}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2">
              <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Kategorie
              </p>
              {categories.map((cat, i) => (
                <div
                  key={cat.slug}
                  className={`transition-all duration-300 ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${150 + i * 30}ms` : "0ms",
                    transitionProperty: "opacity, transform",
                  }}
                >
                  <button
                    onClick={() => setExpandedCat(expandedCat === cat.slug ? null : cat.slug)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    aria-expanded={expandedCat === cat.slug}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-lg">{cat.icon}</span>
                      <span className="font-medium text-gray-800">{cat.name}</span>
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        expandedCat === cat.slug ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Subcategories with max-height transition */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      expandedCat === cat.slug ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-9 mb-1 space-y-0.5 pt-0.5">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/kategoria/${cat.slug}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={onClose}
                          className="block px-3 py-2 text-sm text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                      <Link
                        href={`/kategoria/${cat.slug}`}
                        onClick={onClose}
                        className="block px-3 py-2 text-xs font-medium text-primary-600 hover:text-primary-700 rounded-lg transition-colors"
                      >
                        Zobacz wszystkie →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom links */}
          <div className="border-t border-gray-200 p-4 space-y-2 bg-gray-50">
            <Link
              href="/konto/logowanie"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-600 rounded-lg hover:bg-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Moje konto
            </Link>
            <Link
              href="/konto/ulubione"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-600 rounded-lg hover:bg-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Ulubione
            </Link>
            <Link
              href="/kategoria"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Wszystkie kategorie
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
