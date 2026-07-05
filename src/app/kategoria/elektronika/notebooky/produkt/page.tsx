"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProduktDetailPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
            <Link href="/" className="hover:text-gray-600">Domov</Link>
            <span>/</span>
            <Link href="/kategoria" className="hover:text-gray-600">Kategórie</Link>
            <span>/</span>
            <Link href="/kategoria/elektronika" className="hover:text-gray-600">Elektronika</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Produkt 1</span>
          </nav>
        </div>

        <div className="container-site pb-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div>
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
                <img src="https://picsum.photos/seed/proddetail/600/600" alt="Produkt" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary-500 transition-colors cursor-pointer">
                    <img src={`https://picsum.photos/seed/thumb${i}/200/200`} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-primary-50 text-primary-700 font-medium px-2.5 py-1 rounded-full">Elektronika</span>
                <span className="text-xs bg-success/10 text-success font-medium px-2.5 py-1 rounded-full">Skladom</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Názov produktu
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < 4 ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.0 (128 recenzií)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">79,99 €</span>
                <span className="text-lg text-gray-400 line-through">99,99 €</span>
                <span className="bg-error text-white text-sm font-bold px-2.5 py-0.5 rounded">-20%</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Popis produktu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Variants */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Farba</h3>
                <div className="flex gap-2">
                  {["Čierna", "Biela", "Modrá"].map((color) => (
                    <button key={color}
                      className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                        color === "Čierna" ? "border-primary-500 bg-primary-50 text-primary-700" : "border-gray-200 hover:border-gray-300"
                      }`}>
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-lg transition-colors">−</button>
                  <span className="w-12 h-10 flex items-center justify-center text-sm font-medium border-x border-gray-200">1</span>
                  <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-lg transition-colors">+</button>
                </div>
                <button className="flex-1 bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Pridať do košíka
                </button>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-error transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Pridať do obľúbených
                </button>
              </div>

              {/* USPs */}
              <div className="border-t border-gray-100 mt-8 pt-6 space-y-3">
                {[
                  { icon: "🚚", text: "Doprava zdarma pri nákupe nad 50 €" },
                  { icon: "↩️", text: "30 dní na vrátenie" },
                  { icon: "🔒", text: "Bezpečná platba" },
                ].map((usp) => (
                  <div key={usp.text} className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{usp.icon}</span>
                    <span>{usp.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              {["Popis", "Parametre", "Recenzie"].map((tab) => (
                <button key={tab}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                    tab === "Popis" ? "border-primary-600 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="max-w-3xl text-gray-600 leading-relaxed">
              <p>Podrobný popis produktu. Tu budú informácie o produkte, jeho vlastnostiach a výhodách.</p>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Podobné produkty</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="aspect-square bg-gray-50">
                    <img src={`https://picsum.photos/seed/rel${i}/300/300`} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800 truncate">Podobný produkt {i + 1}</h3>
                    <p className="text-base font-bold text-gray-900 mt-1">{(49.99 + i * 10).toFixed(2)} €</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
