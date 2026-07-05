import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akcie a výpredaje",
  description: "Momentálne akcie a zľavy v Tatrazone.",
};

export default function AkciePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <div className="bg-gradient-to-r from-error to-accent-500 rounded-2xl p-8 md:p-12 mb-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Letné výpredaje</h1>
            <p className="text-white/80 max-w-lg mb-6">Zľavy až do 50 % na vybrané produkty. Ponuka platí do vypredania zásob.</p>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white font-medium px-4 py-2 rounded-lg text-sm">Obmedzená ponuka</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <Link key={i} href="/kategoria/produkt" className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-50 relative">
                  <img src={`https://picsum.photos/seed/akcia${i}/400/400`} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-2 left-2 bg-error text-white text-sm font-bold px-2.5 py-1 rounded-lg">
                    -{20 + i * 5}%
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 truncate">Akciový produkt {i + 1}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg font-bold text-error">{(14.99 + i * 8).toFixed(2)} €</span>
                    <span className="text-sm text-gray-400 line-through">{(29.99 + i * 12).toFixed(2)} €</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
