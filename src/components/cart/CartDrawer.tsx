"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/app/providers/CartContext";

const formatPrice = (val: number) =>
  val.toLocaleString("pl-PL", { style: "currency", currency: "PLN" });

const PROMO_PRODUCTS = [
  { id: 99, title: "Słuchawki Bluetooth SoundPro", price: 129.99, image: "https://picsum.photos/seed/promo1/100/100" },
  { id: 98, title: "Powerbank 20000mAh", price: 89.99, image: "https://picsum.photos/seed/promo2/100/100" },
  { id: 97, title: "Mysz bezprzewodowa Ergo", price: 59.99, image: "https://picsum.photos/seed/promo3/100/100" },
];

function getRandomPromo(seed: number) {
  const shuffled = [...PROMO_PRODUCTS].sort((_, b) => ((seed * 7 + b.id * 13) % 3) - 1);
  return shuffled.slice(0, 2);
}

export default function CartDrawer() {
  const {
    items, count, subtotal, shipping, total,
    freeShippingRemaining, removeItem, updateQuantity,
    isOpen, closeCart, addItem
  } = useCart();

  const [removingIds, setRemovingIds] = useState<Set<number>>(new Set());
  const [promos, setPromos] = useState(() => getRandomPromo(Date.now()));

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
    return () => document.body.classList.remove("scroll-lock");
  }, [isOpen]);

  // Refresh promos when opening
  useEffect(() => {
    if (isOpen) setPromos(getRandomPromo(Date.now()));
  }, [isOpen]);

  const handleRemove = (id: number) => {
    setRemovingIds((prev) => new Set(prev).add(id));
    setTimeout(() => {
      removeItem(id);
      setRemovingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 250);
  };

  const handleAddPromo = (p: (typeof PROMO_PRODUCTS)[number]) => {
    addItem({ id: p.id, title: p.title, price: p.price, image: p.image });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:max-w-md bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Koszyk"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">
              Koszyk <span className="text-gray-400 font-normal">({count})</span>
            </h2>
            <button
              onClick={closeCart}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Zamknij koszyk"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <p className="text-gray-500 mb-6">Twój koszyk jest pusty</p>
                <Link
                  href="/kategoria"
                  onClick={closeCart}
                  className="inline-block bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Rozpocznij zakupy
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Free shipping bar */}
                {shipping > 0 ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-green-700 font-medium">Do darmowej dostawy brakuje</span>
                      <span className="text-green-800 font-bold">{formatPrice(freeShippingRemaining)}</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out" style={{ width: `${Math.min(100, (subtotal / 200) * 100)}%` }} />
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-100 border border-green-200 rounded-lg p-3 mb-2 text-center animate-toast-in">
                    <p className="text-green-700 font-medium text-sm">🎉 Masz darmową dostawę!</p>
                  </div>
                )}

                {/* Items */}
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0 transition-all duration-250 ${
                      removingIds.has(item.id) ? "opacity-0 -translate-x-8" : "opacity-100 translate-x-0"
                    }`}
                  >
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover bg-gray-50 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                      <p className="text-sm font-bold text-gray-900 mt-0.5">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label="Zmniejsz ilość"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 12H4" /></svg>
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          disabled={item.quantity >= 99}
                          className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label="Zwiększ ilość"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 4v16m8-8H4" /></svg>
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Usuń produkt"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}

                {/* Promo products */}
                <div className="pt-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Dodaj do zamówienia</p>
                  <div className="space-y-2">
                    {promos.map((p) => (
                      <div key={p.id} className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                        <img src={p.image} alt={p.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-800 truncate">{p.title}</p>
                          <p className="text-xs font-bold text-amber-700">{formatPrice(p.price)}</p>
                        </div>
                        <button
                          onClick={() => handleAddPromo(p)}
                          className="text-[11px] font-bold text-amber-800 bg-amber-200 hover:bg-amber-300 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap"
                        >
                          + Dodaj
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer with CTA buttons */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-2 bg-gray-50">
              {/* Summary */}
              <div className="space-y-1 text-sm mb-3">
                <div className="flex justify-between text-gray-500">
                  <span>Wartość koszyka</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Dostawa</span>
                  <span>{shipping === 0 ? <span className="text-green-600 font-medium">Darmowa</span> : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
                  <span>Razem</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Link
                href="/koszyk"
                onClick={closeCart}
                className="flex items-center justify-center gap-2 w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Przejdź do koszyka
              </Link>
              <Link
                href="/kasa"
                onClick={closeCart}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm group"
              >
                Przejdź do kasy
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
