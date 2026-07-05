import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
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
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Zapisz się
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-site py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              {["facebook", "instagram", "youtube", "tiktok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs text-gray-400 capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
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
                    className="text-sm text-gray-400 hover:text-white transition-colors"
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
                    className="text-sm text-gray-400 hover:text-white transition-colors"
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
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-400">
                  biuro@tatrazone.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-400">+48 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                {["Visa", "MC", "BLIK", "P24", "PayU", "Przelew"].map(
                  (method) => (
                    <span
                      key={method}
                      className="bg-gray-800 text-gray-400 text-[10px] font-semibold px-2 py-1 rounded"
                    >
                      {method}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-site py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Tatrazone. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="flex gap-4">
              <Link
                href="/regulamin"
                className="hover:text-gray-300 transition-colors"
              >
                Regulamin
              </Link>
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-gray-300 transition-colors"
              >
                Prywatność
              </Link>
              <Link
                href="/reklamacje"
                className="hover:text-gray-300 transition-colors"
              >
                Zwroty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
