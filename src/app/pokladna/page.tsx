import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokladňa",
  description: "Dokončenie objednávky.",
};

export default function PokladnaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Pokladňa
          </h1>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery info */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  1. Dodacie údaje
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Meno *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Priezvisko *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefón *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresa *
                    </label>
                    <input
                      type="text"
                      placeholder="Ulica a číslo"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mesto *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PSČ *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery method */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  2. Spôsob dopravy
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "Kuriérska služba", price: "4,90 €", time: "1-2 dni" },
                    { label: "Slovenská pošta", price: "3,90 €", time: "2-4 dni" },
                    { label: "Osobný odber", price: "Zadarmo", time: "Bratislava" },
                  ].map((d) => (
                    <label
                      key={d.label}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50"
                    >
                      <input
                        type="radio"
                        name="delivery"
                        className="accent-primary-600"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-sm text-gray-900">
                          {d.label}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          ({d.time})
                        </span>
                      </div>
                      <span className="text-sm font-medium">{d.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  3. Spôsob platby
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "Platobná karta", icon: "💳" },
                    { label: "Bankový prevod", icon: "🏦" },
                    { label: "Dobierka", icon: "💵", note: "+1,50 €" },
                    { label: "Google Pay", icon: "📱" },
                  ].map((p) => (
                    <label
                      key={p.label}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50"
                    >
                      <input
                        type="radio"
                        name="payment"
                        className="accent-primary-600"
                      />
                      <span className="text-lg">{p.icon}</span>
                      <span className="flex-1 font-medium text-sm text-gray-900">
                        {p.label}
                      </span>
                      {p.note && (
                        <span className="text-xs text-gray-400">{p.note}</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <Link
                href="/pokladna/dakujeme"
                className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-lg hover:bg-primary-700 transition-colors text-center block"
              >
                Potvrdiť objednávku
              </Link>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-28">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Vaša objednávka
                </h2>
                <div className="space-y-3">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Produkt {i + 1}
                        </p>
                        <p className="text-xs text-gray-500">1 ks</p>
                        <p className="text-sm font-semibold">
                          {(29.99 + i * 15).toFixed(2)} €
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medzisúčet</span>
                    <span>104,97 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Doprava</span>
                    <span>4,90 €</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-base">
                    <span className="font-semibold text-gray-900">Celkom</span>
                    <span className="font-bold text-xl text-gray-900">
                      109,87 €
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
