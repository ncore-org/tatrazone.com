"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Announcement Bar */}
        <div className="bg-primary-600 text-white text-center text-sm py-2 px-4">
          <p className="font-medium">
            🚚 Doprava zdarma pri nákupe nad 50 € | Noví zákazníci získavajú
            zľavu 10 %
          </p>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden">
          <div className="container-site py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                  Letné výpredaje
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Objavte svet{" "}
                  <span className="text-primary-600">kvalitných</span> produktov
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Široký výber produktov za najlepšie ceny. Nakupujte pohodlne z
                  domu a nechajte si doručiť až k dverám.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/kategoria"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
                  >
                    Nakupovať
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/akcie"
                    className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-3.5 rounded-lg border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all"
                  >
                    Akciové ponuky
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🛍️</div>
                    <p className="text-2xl font-bold text-gray-800">
                      Viac ako 10 000 produktov
                    </p>
                    <p className="text-gray-500 mt-2">
                      Sklonom nad 95 %
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-12 md:py-16">
          <div className="container-site">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Obľúbené kategórie
              </h2>
              <Link
                href="/kategoria"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm md:text-base"
              >
                Zobraziť všetky →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  title: "Elektronika",
                  icon: "💻",
                  color: "bg-blue-50",
                  href: "/kategoria/elektronika",
                },
                {
                  title: "Domácnosť",
                  icon: "🏠",
                  color: "bg-green-50",
                  href: "/kategoria/domacnost",
                },
                {
                  title: "Móda",
                  icon: "👕",
                  color: "bg-pink-50",
                  href: "/kategoria/moda",
                },
                {
                  title: "Šport",
                  icon: "⚽",
                  color: "bg-orange-50",
                  href: "/kategoria/sport",
                },
                {
                  title: "Záhrada",
                  icon: "🌿",
                  color: "bg-emerald-50",
                  href: "/kategoria/zahrada",
                },
                {
                  title: "Hračky",
                  icon: "🎮",
                  color: "bg-purple-50",
                  href: "/kategoria/hracky",
                },
              ].map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className={`${cat.color} rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group`}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    {cat.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container-site">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Najpredávanejšie
              </h2>
              <Link
                href="/novinky"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm md:text-base"
              >
                Viac produktov →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }, (_, i) => (
                <ProductCard
                  key={i}
                  title={`Produkt ${i + 1}`}
                  price={29.99 + i * 10}
                  originalPrice={i % 3 === 0 ? 59.99 + i * 10 : undefined}
                  rating={4 + (i % 5) * 0.2}
                  reviews={10 + i * 5}
                  image={`https://picsum.photos/seed/prod${i}/400/400`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* USPs */}
        <section className="py-12 md:py-16">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: "🚚",
                  title: "Doprava zdarma",
                  desc: "Pri nákupe nad 50 €",
                },
                {
                  icon: "🔒",
                  title: "Bezpečná platba",
                  desc: "Platba kartou aj prevodom",
                },
                {
                  icon: "↩️",
                  title: "30 dní na vrátenie",
                  desc: "Bez udania dôvodu",
                },
                {
                  icon: "💬",
                  title: "Podpora 24/7",
                  desc: "Sme tu pre vás",
                },
              ].map((usp) => (
                <div
                  key={usp.title}
                  className="text-center p-4 md:p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl md:text-4xl mb-3">{usp.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    {usp.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    {usp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-16 bg-primary-600">
          <div className="container-site text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Buďte v obraze
            </h2>
            <p className="text-primary-100 mb-6 max-w-md mx-auto">
              Prihláste sa na odber noviniek a získajte zľavu 10 % na prvý
              nákup.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Odoberať
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
}: {
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
}) {
  return (
    <Link
      href="/kategoria/produkt"
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div className="aspect-square bg-gray-50 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {originalPrice && (
          <span className="absolute top-2 left-2 bg-error text-white text-xs font-bold px-2 py-1 rounded">
            -{Math.round((1 - price / originalPrice) * 100)}%
          </span>
        )}
        <button
          className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
          }}
          aria-label="Pridať do obľúbených"
        >
          <svg
            className="w-4 h-4 text-gray-400 hover:text-error transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="p-3 md:p-4">
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(rating)
                  ? "text-yellow-400"
                  : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-400 ml-1">({reviews})</span>
        </div>
        <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 mb-1 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            {price.toFixed(2)} €
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice.toFixed(2)} €
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
