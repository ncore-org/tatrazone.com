"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const CART_ITEMS = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: `Produkt ${i + 1}`,
  price: 29.99 + i * 15,
  quantity: 1,
  image: `https://picsum.photos/seed/cart${i}/150/150`,
}));

export default function KosikPage() {
  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 4.9;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Nákupný košík
          </h1>

          {CART_ITEMS.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                {CART_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm md:text-base truncate">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        {item.price.toFixed(2)} €
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-l-lg transition-colors">
                            −
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center text-sm font-medium border-x border-gray-200">
                            {item.quantity}
                          </span>
                          <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-r-lg transition-colors">
                            +
                          </button>
                        </div>
                        <button className="text-sm text-gray-400 hover:text-error transition-colors">
                          Odstrániť
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-28">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Zhrnutie objednávky
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Medzisúčet</span>
                      <span className="font-medium">{subtotal.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Doprava</span>
                      <span className="font-medium">
                        {shipping === 0 ? "Zadarmo" : `${shipping.toFixed(2)} €`}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between text-base">
                      <span className="font-semibold text-gray-900">Celkom</span>
                      <span className="font-bold text-xl text-gray-900">
                        {total.toFixed(2)} €
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/pokladna"
                    className="block text-center mt-6 w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Prejsť k pokladni
                  </Link>
                  <Link
                    href="/kategoria"
                    className="block text-center mt-3 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Pokračovať v nakupovaní
                  </Link>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-400 text-center mt-4">
                      🚚 Nákup nad 50 € máte dopravu zadarmo!
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Košík je prázdny
              </h2>
              <p className="text-gray-500 mb-6">
                Vyzerá to, že ste ešte nepridali žiadne produkty.
              </p>
              <Link
                href="/kategoria"
                className="inline-flex bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Začať nakupovať
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
