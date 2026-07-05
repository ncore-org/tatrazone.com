import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kategórie",
  description: "Prehľad kategórií produktov.",
};

const CATEGORIES = [
  { name: "Elektronika", icon: "💻", count: 1542, href: "/kategoria/elektronika", color: "bg-blue-50" },
  { name: "Domácnosť", icon: "🏠", count: 2341, href: "/kategoria/domacnost", color: "bg-green-50" },
  { name: "Móda", icon: "👕", count: 3210, href: "/kategoria/moda", color: "bg-pink-50" },
  { name: "Šport", icon: "⚽", count: 1123, href: "/kategoria/sport", color: "bg-orange-50" },
  { name: "Záhrada", icon: "🌿", count: 876, href: "/kategoria/zahrada", color: "bg-emerald-50" },
  { name: "Hračky", icon: "🎮", count: 654, href: "/kategoria/hracky", color: "bg-purple-50" },
  { name: "Auto-moto", icon: "🚗", count: 432, href: "/kategoria/auto-moto", color: "bg-red-50" },
  { name: "Knihy", icon: "📚", count: 987, href: "/kategoria/knihy", color: "bg-yellow-50" },
  { name: "Zdravie", icon: "💊", count: 543, href: "/kategoria/zdravie", color: "bg-teal-50" },
  { name: "Kozmetika", icon: "🧴", count: 765, href: "/kategoria/kozmetika", color: "bg-violet-50" },
  { name: "Potraviny", icon: "🍎", count: 345, href: "/kategoria/potraviny", color: "bg-lime-50" },
  { name: "Chovateľské potreby", icon: "🐾", count: 234, href: "/kategoria/chovatelske-potreby", color: "bg-amber-50" },
];

export default function KategoriaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Kategórie produktov
            </h1>
            <span className="text-sm text-gray-500">
              {CATEGORIES.reduce((s, c) => s + c.count, 0).toLocaleString()} produktov
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} href={cat.href}
                className={`${cat.color} rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group`}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cat.count.toLocaleString()} produktov</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
