import Link from "next/link";

const categories = [
  { name: "Elektronika", icon: "💻", slug: "elektronika", color: "bg-blue-50", count: "2 340" },
  { name: "RTV i AGD", icon: "📺", slug: "rtv-agd", color: "bg-red-50", count: "1 120" },
  { name: "Dom i ogród", icon: "🏠", slug: "dom-i-ogrod", color: "bg-green-50", count: "890" },
  { name: "Moda", icon: "👕", slug: "moda", color: "bg-pink-50", count: "1 560" },
  { name: "Sport", icon: "⚽", slug: "sport", color: "bg-orange-50", count: "670" },
  { name: "Dziecko", icon: "🧸", slug: "dziecko", color: "bg-yellow-50", count: "430" },
  { name: "Zdrowie i uroda", icon: "💄", slug: "zdrowie-uroda", color: "bg-purple-50", count: "780" },
  { name: "Motoryzacja", icon: "🚗", slug: "motoryzacja", color: "bg-gray-50", count: "320" },
  { name: "Książki i media", icon: "📚", slug: "ksiazki", color: "bg-indigo-50", count: "1 100" },
  { name: "Artykuły biurowe", icon: "📎", slug: "biuro", color: "bg-teal-50", count: "250" },
  { name: "Spożywcze", icon: "🍎", slug: "spozywcze", color: "bg-lime-50", count: "190" },
  { name: "Zwierzęta", icon: "🐾", slug: "zwierzeta", color: "bg-amber-50", count: "410" },
];

export default function CategoryGrid() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-site">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Kategorie produktów
          </h2>
          <Link
            href="/kategoria"
            className="text-blue-600 font-medium text-sm md:text-base hover:text-blue-700 transition-colors flex items-center gap-1"
          >
            Wszystkie kategorie →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategoria/${cat.slug}`}
              className={`${cat.color} rounded-xl p-4 md:p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group`}
            >
              <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">{cat.count} produkty</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
