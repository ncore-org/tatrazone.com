import Link from "next/link";

const FOOTER_LINKS = {
  "O spoločnosti": [
    { label: "O nás", href: "/o-nas" },
    { label: "Kariéra", href: "/kariera" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  "Nakupovanie": [
    { label: "Obchodné podmienky", href: "/obchodne-podmienky" },
    { label: "Ochrana osobných údajov", href: "/ochrana-osobnych-udajov" },
    { label: "Reklamačný poriadok", href: "/reklamacny-poriadok" },
    { label: "Doprava a platba", href: "/doprava-a-platba" },
    { label: "FAQ", href: "/faq" },
  ],
  "Zákaznícka zóna": [
    { label: "Môj účet", href: "/ucet/profil" },
    { label: "Moje objednávky", href: "/ucet/objednavky" },
    { label: "Obľúbené produkty", href: "/ucet/oblubene" },
    { label: "Moje adresy", href: "/ucet/adresy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="container-site py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Získajte zľavu 10 % na prvý nákup
              </h3>
              <p className="text-sm text-gray-400">
                Prihláste sa na odber noviniek a buďte informovaní o akciách.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 text-sm"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Odoberať
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="container-site py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-white">Tatrazone</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Váš moderný online obchod s najširším výberom produktov.
              Nakupujte pohodlne z domu za skvelé ceny.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-bold text-gray-400">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Tatrazone. Všetky práva vyhradené.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/40x25/333/666?text=Visa"
              alt="Visa"
              className="h-6 rounded"
            />
            <img
              src="https://via.placeholder.com/40x25/333/666?text=MC"
              alt="Mastercard"
              className="h-6 rounded"
            />
            <span className="text-xs text-gray-500">Bezpečná platba</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
