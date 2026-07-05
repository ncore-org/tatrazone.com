import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Výrobcovia",
  description: "Prehľad značiek a výrobcov.",
};

const BRANDS = [
  { name: "Samsung", count: 342, logo: "S" },
  { name: "Apple", count: 215, logo: "A" },
  { name: "Xiaomi", count: 189, logo: "X" },
  { name: "LG", count: 156, logo: "L" },
  { name: "Sony", count: 134, logo: "S" },
  { name: "Philips", count: 112, logo: "P" },
  { name: "Bosch", count: 98, logo: "B" },
  { name: "Adidas", count: 234, logo: "A" },
  { name: "Nike", count: 267, logo: "N" },
  { name: "Lenovo", count: 87, logo: "L" },
  { name: "HP", count: 76, logo: "H" },
  { name: "Dell", count: 65, logo: "D" },
];

export default function VyrobcoviaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Výrobcovia</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BRANDS.map((brand) => (
              <Link key={brand.name} href={`/vyrobcovia/${brand.name.toLowerCase()}`}
                className="border border-gray-200 rounded-xl p-6 text-center hover:border-primary-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-50 transition-colors">
                  <span className="text-lg font-bold text-gray-600 group-hover:text-primary-600">{brand.logo}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">{brand.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{brand.count} produktov</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
