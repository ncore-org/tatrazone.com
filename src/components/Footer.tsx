"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailStatus("error");
      return;
    }
    setEmailStatus("loading");
    setTimeout(() => {
      setEmailStatus("success");
      setEmail("");
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Newsletter */}
      <div className="bg-blue-600 py-8 md:py-10">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Zapisz się do newslettera
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                Otrzymuj informacje o promocjach i nowościach jako pierwszy
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto gap-2">
              <div className="relative flex-1 md:w-72">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailStatus("idle"); }}
                  placeholder="Twój adres e-mail"
                  className={`w-full px-4 py-2.5 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 text-sm transition-all ${
                    emailStatus === "error" ? "ring-2 ring-red-300" : "focus:ring-blue-300"
                  }`}
                />
                {emailStatus === "error" && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-200">Nieprawidłowy adres e-mail</p>
                )}
                {emailStatus === "success" && (
                  <p className="absolute -bottom-5 left-0 text-xs text-green-200">Dziękujemy! Sprawdź swoją skrzynkę.</p>
                )}
              </div>
              <button
                type="submit"
                disabled={emailStatus === "loading"}
                className="bg-blue-800 hover:bg-blue-900 disabled:opacity-70 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap flex items-center gap-2"
              >
                {emailStatus === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Wysyłanie...
                  </>
                ) : "Zapisz się"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-site py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-lg font-bold text-white">Tatrazone</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Nowoczesny sklep internetowy z ponad 10 000 produktów. Szybka
              dostawa, bezpieczne płatności i najlepsze ceny na rynku.
            </p>
            <div className="flex gap-3 mt-4">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1877F2] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#E4405F] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-black transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Kategorie
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Elektronika", href: "/kategoria/elektronika" },
                { name: "RTV i AGD", href: "/kategoria/rtv-agd" },
                { name: "Dom i ogród", href: "/kategoria/dom-i-ogrod" },
                { name: "Moda", href: "/kategoria/moda" },
                { name: "Sport", href: "/kategoria/sport" },
                { name: "Dziecko", href: "/kategoria/dziecko" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Obsługa klienta
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Pomoc", href: "/faq" },
                { name: "Dostawa i płatność", href: "/dostawa-i-platnosc" },
                { name: "Reklamacje i zwroty", href: "/reklamacje" },
                { name: "Regulamin", href: "/regulamin" },
                { name: "Polityka prywatności", href: "/polityka-prywatnosci" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-400">biuro@tatrazone.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-400">+48 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400">
                  ul. Przykładowa 123, 00-001 Warszawa
                </span>
              </li>
            </ul>

            {/* Payment methods */}
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Akceptujemy:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-blue-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1" title="Visa">
                  <svg className="w-5 h-3.5" viewBox="0 0 24 16" fill="currentColor"><rect width="24" height="16" rx="2" fill="#1A1F71"/><path d="M10 12l1.5-8h2.4l-1.5 8H10zm8.5-8c-1.5 0-2.8.8-3.3 2l-.1.4h3.1l.1-.3c.3-1 .9-1.3 1.7-1.3.7 0 1.5.3 2 .8l1-2.4c-.6-.3-1.4-.5-2.2-.5-2.3 0-4.1 1.3-5 3.1-.5 1-.8 2.2-.8 3.4 0 1 .2 1.8.5 2.5l2.3-6.2h2.4L17 12h2.5l3-8h-2.3L19 4l-1.5-.7z" fill="white"/></svg>
                </span>
                <span className="bg-gray-800 text-orange-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1" title="Mastercard">
                  <svg className="w-5 h-3.5" viewBox="0 0 24 16" fill="none"><rect width="24" height="16" rx="2" fill="#1A1F71"/><ellipse cx="9.5" cy="8" rx="4.5" ry="5" fill="#EB001B"/><ellipse cx="14.5" cy="8" rx="4.5" ry="5" fill="#F79E1B" opacity="0.85"/><ellipse cx="12" cy="8" rx="2.5" ry="4" fill="#FF5F00"/></svg>
                </span>
                <span className="bg-gray-800 text-red-400 text-[10px] font-bold px-2 py-1 rounded" title="BLIK">BLIK</span>
                <span className="bg-gray-800 text-green-400 text-[10px] font-bold px-2 py-1 rounded" title="Przelewy24">P24</span>
                <span className="bg-gray-800 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded" title="PayU">PayU</span>
                <span className="bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1" title="Apple Pay">
                  <svg className="w-4 h-3" viewBox="0 0 24 16" fill="currentColor"><path d="M19.6 8.5c-.1-2 1.5-3 1.6-3.1-.9-1.3-2.3-1.4-2.7-1.4-1.2-.1-2.3.7-2.9.7-.6 0-1.6-.7-2.6-.7-2.2 0-4.2 1.4-4.9 3.6-.5 1.1-.7 2.3-.6 3.5.1 1.2.5 2.4 1.2 3.4.5.7 1.1 1.3 1.9 1.7s1.6.5 2.5.4c.6 0 1.4-.2 2.1-.4.8-.2 1.5-.2 2.2 0 .6.2 1.1.5 1.6.9.5.4 1.1.6 1.7.6 1.4 0 2.5-.7 3.2-1.7-1-.6-1.8-1.5-2.1-2.7-.2-.9-.1-1.9.3-2.8.3-.7.9-1.3 1.6-1.7-.5-.8-1.4-1.3-2.4-1.3zM17.2 3.4c.6-.7 1-1.6.9-2.6-.9.1-1.8.5-2.4 1.2-.6.7-1 1.6-.8 2.5.9.1 1.7-.4 2.3-1.1z" fill="white"/></svg>
                </span>
                <span className="bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1" title="Google Pay">
                  <svg className="w-4 h-3" viewBox="0 0 24 16" fill="currentColor"><path d="M1.5 6.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5h-1zm3.5 0c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-1zm3.5 0c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-6c0-.3-.2-.5-.5-.5h-1z" fill="white"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery partners */}
      <div className="border-t border-gray-800 py-4">
        <div className="container-site">
          <p className="text-xs text-gray-500 text-center mb-3">Nasi partnerzy dostawy:</p>
          <div className="flex justify-center gap-6 text-gray-600">
            <span className="text-sm font-semibold hover:text-gray-400 transition-colors cursor-default">InPost</span>
            <span className="text-sm font-semibold hover:text-gray-400 transition-colors cursor-default">DHL</span>
            <span className="text-sm font-semibold hover:text-gray-400 transition-colors cursor-default">DPD</span>
            <span className="text-sm font-semibold hover:text-gray-400 transition-colors cursor-default">Poczta Polska</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="container-site py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Tatrazone. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="flex gap-4">
              <Link href="/regulamin" className="hover:text-gray-300 transition-colors">Regulamin</Link>
              <Link href="/polityka-prywatnosci" className="hover:text-gray-300 transition-colors">Prywatność</Link>
              <Link href="/reklamacje" className="hover:text-gray-300 transition-colors">Zwroty</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 md:bottom-8 right-4 z-30 w-10 h-10 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Powrót do góry"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
