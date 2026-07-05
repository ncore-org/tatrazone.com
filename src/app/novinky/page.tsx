import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Novinky",
  description: "Najnovšie produkty v našej ponuke.",
};

export default function NovinkyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Novinky</h1>
              <p className="text-sm text-gray-500 mt-1">Najnovšie produkty v našej ponuke</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 12 }, (_, i) => (
              <Link key={i} href="/kategoria/produkt" className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-50 relative">
                  <img src={`https://picsum.photos/seed/novinka${i}/400/400`} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-2 left-2 bg-success text-white text-xs font-bold px-2 py-1 rounded">Nové</span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 truncate">Novinka {i + 1}</h3>
                  <p className="text-lg font-bold text-gray-900 mt-1">{(24.99 + i * 5).toFixed(2)} €</p>
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
