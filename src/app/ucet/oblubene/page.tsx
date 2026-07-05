import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obľúbené produkty",
  description: "Vaše obľúbené produkty.",
};

const FAVORITES = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: `Obľúbený produkt ${i + 1}`,
  price: 39.99 + i * 20,
  image: `https://picsum.photos/seed/fav${i}/400/400`,
  inStock: i !== 2,
}));

export default function OblubenePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Obľúbené produkty
          </h1>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <nav className="space-y-1">
                {[
                  { label: "Môj profil", href: "/ucet/profil" },
                  { label: "Moje objednávky", href: "/ucet/objednavky" },
                  { label: "Moje adresy", href: "/ucet/adresy" },
                  { label: "Obľúbené", href: "/ucet/oblubene", active: true },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      link.active ? "bg-primary-50 text-primary-700" : "text-gray-600 hover:bg-gray-50"
                    }`}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="md:col-span-3">
              {FAVORITES.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {FAVORITES.map((item) => (
                    <div key={item.id} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-square bg-gray-50 relative">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                        <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors" aria-label="Odstrániť z obľúbených">
                          <svg className="w-4 h-4 text-error" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-gray-800 truncate">{item.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-base font-bold text-gray-900">{item.price.toFixed(2)} €</span>
                          <span className={`text-xs ${item.inStock ? "text-success" : "text-gray-400"}`}>
                            {item.inStock ? "Skladom" : "Vypredané"}
                          </span>
                        </div>
                        {item.inStock && (
                          <button className="mt-3 w-full bg-primary-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-primary-700 transition-colors">
                            Do košíka
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🤍</div>
                  <p className="text-gray-500 mb-4">Zatiaľ nemáte žiadne obľúbené produkty.</p>
                  <Link href="/kategoria" className="inline-flex bg-primary-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm">
                    Prezerať produkty
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
