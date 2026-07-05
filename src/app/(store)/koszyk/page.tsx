"use client";

import { useState } from "react";
import Link from "next/link";

const CART_ITEMS = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  name: ["Laptop Gaming XYZ Pro 15", "Słuchawki bezprzewodowe QuietSound", "Smartwatch FitPro X200"][i],
  price: [4999, 349, 799][i],
  quantity: 1,
  image: `https://picsum.photos/seed/cart${i}/150/150`,
}));

export default function KoszykPage() {
  const [items, setItems] = useState(CART_ITEMS);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 200;
  const shipping = subtotal >= freeShippingThreshold ? 0 : 19.99;
  const total = subtotal + shipping;
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="container-site py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Koszyk
      </h1>

      {items.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Free shipping bar */}
          <div className="lg:col-span-3">
            {shipping > 0 ? (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-700">
                    🚚 Dostawa gratis od {freeShippingThreshold} zł
                  </span>
                  <span className="text-sm font-medium text-blue-700">
                    {freeShippingThreshold - subtotal} zł do darmowej dostawy
                  </span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-green-700 font-medium">🎉 Gratulacje! Masz darmową dostawę!</p>
              </div>
            )}
          </div>

          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
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
                    {item.price.toFixed(2)} zł
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-l-lg transition-colors"
                        onClick={() => {
                          setItems(prev =>
                            prev.map(it =>
                              it.id === item.id && it.quantity > 1
                                ? { ...it, quantity: it.quantity - 1 }
                                : it
                            )
                          );
                        }}
                      >
                        −
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center text-sm font-medium border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-r-lg transition-colors"
                        onClick={() => {
                          setItems(prev =>
                            prev.map(it =>
                              it.id === item.id
                                ? { ...it, quantity: it.quantity + 1 }
                                : it
                            )
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                      onClick={() => setItems(prev => prev.filter(it => it.id !== item.id))}
                    >
                      Usuń
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
                Podsumowanie
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Wartość koszyka</span>
                  <span className="font-medium">{subtotal.toFixed(2)} zł</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dostawa</span>
                  <span className="font-medium">
                    {shipping === 0 ? "Darmowa" : `${shipping.toFixed(2)} zł`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-base">
                  <span className="font-semibold text-gray-900">Razem</span>
                  <span className="font-bold text-xl text-gray-900">
                    {total.toFixed(2)} zł
                  </span>
                </div>
                <p className="text-xs text-gray-400">brutto (w tym VAT 23%)</p>
              </div>
              <Link
                href="/kasa"
                className="block text-center mt-6 w-full bg-primary-600 text-white font-semibold py-3 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Przejdź do kasy
              </Link>
              <Link
                href="/kategoria"
                className="block text-center mt-3 text-sm text-primary-600 hover:text-primary-700 transition-colors"
              >
                Kontynuuj zakupy
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Koszyk jest pusty
          </h2>
          <p className="text-gray-500 mb-6">
            Wygląda na to, że nie dodałeś jeszcze żadnych produktów.
          </p>
          <Link
            href="/kategoria"
            className="inline-flex bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Rozpocznij zakupy
          </Link>
        </div>
      )}
    </div>
  );
}
