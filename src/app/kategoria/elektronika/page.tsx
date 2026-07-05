"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ElektronikaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container-site py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">Domov</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Elektronika</span>
          </nav>
        </div>

        <div className="container-site pb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Elektronika</h1>
              <p className="text-sm text-gray-500 mt-1">1 542 produktov</p>
            </div>
            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-500 hidden sm:block">Zoradiť:</label>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500">
                <option>Najpredávanejšie</option>
                <option>Od najlacnejšieho</option>
                <option>Od najdrahšieho</option>
                <option>Najvyššie hodnotenie</option>
              </select>
            </div>
          </div>

          {/* Subcategories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Notebooky", "Telefóny", "Tablety", "Televízory", "Slúchadlá", "Reproduktory", "Príslušenstvo"].map((sub) => (
              <Link key={sub} href={`/kategoria/elektronika/${sub.toLowerCase()}`}
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:border-primary-300 hover:text-primary-600 transition-colors">
                {sub}
              </Link>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 12 }, (_, i) => (
              <ProductCard
                key={i}
                title={`Produkt ${i + 1}`}
                price={19.99 + i * 15}
                originalPrice={i % 2 === 0 ? 49.99 + i * 15 : undefined}
                rating={3.5 + (i % 3) * 0.5}
                reviews={8 + i * 3}
                image={`https://picsum.photos/seed/elec${i}/400/400`}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {[1, 2, 3, "...", 12].map((page, i) => (
              <button key={i}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  page === 1 ? "bg-primary-600 text-white" :
                  page === "..." ? "text-gray-400 cursor-default" :
                  "text-gray-600 hover:bg-gray-100"
                }`}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ProductCard({
  title, price, originalPrice, rating, reviews, image,
}: {
  title: string; price: number; originalPrice?: number; rating: number; reviews: number; image: string;
}) {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <Link href="/kategoria/elektronika/notebooky/produkt" className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="aspect-square bg-gray-50 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-error text-white text-xs font-bold px-2 py-1 rounded">-{discount}%</span>
        )}
        <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white" onClick={(e) => e.preventDefault()} aria-label="Pridať do obľúbených">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-3 md:p-4">
        <div className="flex items-center gap-1 mb-1">
          {Array.from({length: 5}, (_, i) => (
            <svg key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-400 ml-1">({reviews})</span>
        </div>
        <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 mb-1 group-hover:text-primary-600 transition-colors">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">{price.toFixed(2)} €</span>
          {originalPrice && <span className="text-sm text-gray-400 line-through">{originalPrice.toFixed(2)} €</span>}
        </div>
        <button className="mt-3 w-full bg-primary-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-primary-700 transition-colors" onClick={(e) => { e.preventDefault(); }}>
          Do košíka
        </button>
      </div>
    </Link>
  );
}
