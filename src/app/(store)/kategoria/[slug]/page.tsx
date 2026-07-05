import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const categories: Record<string, { name: string; description: string }> = {
  elektronika: {
    name: "Elektronika",
    description: "Laptopy, smartfony, tablety i akcesoria elektroniczne w najlepszych cenach.",
  },
  "rtv-agd": {
    name: "RTV i AGD",
    description: "Telewizory, pralki, lodówki i cały sprzęt kuchenny. Najlepsze marki w atrakcyjnych cenach.",
  },
  "dom-i-ogrod": {
    name: "Dom i ogród",
    description: "Meble, dekoracje, narzędzia i rośliny do Twojego domu i ogrodu.",
  },
  moda: {
    name: "Moda",
    description: "Odzież, obuwie i dodatki dla całej rodziny. Najnowsze kolekcje i trendy.",
  },
  sport: {
    name: "Sport",
    description: "Sprzęt sportowy, odzież i akcesoria dla aktywnych.",
  },
  dziecko: {
    name: "Dziecko",
    description: "Zabawki, ubranka i akcesoria dla dzieci w każdym wieku.",
  },
  "zdrowie-uroda": {
    name: "Zdrowie i uroda",
    description: "Kosmetyki, suplementy i akcesoria do pielęgnacji.",
  },
  motoryzacja: {
    name: "Motoryzacja",
    description: "Części samochodowe, akcesoria i chemia motoryzacyjna.",
  },
  ksiazki: {
    name: "Książki i media",
    description: "Książki, e-booki, gry i filmy. Bogaty wybór dla każdego.",
  },
  biuro: {
    name: "Artykuły biurowe",
    description: "Sprzęt biurowy, materiały eksploatacyjne i akcesoria.",
  },
  spozywcze: {
    name: "Spożywcze",
    description: "Żywność, napoje i delikatesy w korzystnych cenach.",
  },
  zwierzeta: {
    name: "Zwierzęta",
    description: "Karma, akcesoria i zabawki dla Twojego pupila.",
  },
};

const mockProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    "Laptop XYZ Pro 15″ 32GB RAM",
    "Smartfon ABC Ultra 5G 256GB",
    "Słuchawki bezprzewodowe QuietSound Pro",
    "Smartwatch FitPro X200 Black",
    "Tablet TabMax 12.4″ 256GB",
    "Głośnik przenośny BoomBox 360",
    "Monitor 27″ 4K UltraSharp HDR",
    "Konsola GameStation 5 Pro",
    "Robot sprzątający CleanBot X1",
    "Ekspres do kawy BaristaPro",
    "Kamera sportowa ActionCam 4K",
    "Drukarka 3D PrintPro X2",
  ][i],
  price: [4999, 3299, 349, 799, 2799, 249, 1499, 2199, 1299, 899, 399, 1899][i],
  originalPrice: [undefined, undefined, 599, undefined, undefined, 399, 2199, 2899, 1999, 1499, 699, 2399][i],
  rating: [4.8, 4.6, 4.7, 4.5, 4.5, 4.3, 4.6, 4.9, 4.5, 4.7, 4.4, 4.4][i],
  reviews: [234, 567, 890, 432, 156, 345, 123, 678, 234, 567, 456, 22][i],
  image: `https://picsum.photos/seed/cat${i}/400/400`,
}));

const sortOptions = [
  { value: "popularne", label: "Najpopularniejsze" },
  { value: "najtansze", label: "Od najtańszych" },
  { value: "najdrozsze", label: "Od najdroższych" },
  { value: "ocena", label: "Najwyżej oceniane" },
  { value: "nowosci", label: "Najnowsze" },
];

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories[slug];
  if (!cat) {
    return { title: "Kategoria nie znaleziona" };
  }
  return {
    title: `${cat.name}`,
    description: cat.description,
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories[slug];

  if (!cat) {
    return (
      <div className="container-site py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Kategoria nie znaleziona
        </h1>
        <p className="text-gray-500 mb-8">
          Przepraszamy, ta kategoria nie istnieje.
        </p>
        <Link
          href="/kategoria"
          className="text-primary-600 font-medium hover:text-primary-700"
        >
          Przeglądaj wszystkie kategorie
        </Link>
      </div>
    );
  }

  return (
    <div className="container-site py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Strona główna
        </Link>
        <span>/</span>
        <Link href="/kategoria" className="hover:text-primary-600 transition-colors">
          Kategorie
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{cat.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {cat.name}
        </h1>
        <p className="text-gray-500">{cat.description}</p>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sortuj:</span>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-primary-500 outline-none">
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <span className="text-sm text-gray-500">
          Znaleziono: <strong className="text-gray-900">{mockProducts.length}</strong> produktów
        </span>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            reviews={product.reviews}
            image={product.image}
            href={`/kategoria/${slug}/${product.id}`}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-10">
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-sm text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30" disabled>
          ‹
        </button>
        {[1, 2, 3, "...", 8].map((page, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
              page === 1
                ? "bg-primary-600 text-white"
                : "border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-sm text-gray-500 hover:bg-gray-50 transition-colors">
          ›
        </button>
      </div>
    </div>
  );
}
