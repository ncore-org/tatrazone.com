import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { categories, getProductsByCategory } from "@/data/categories";
import { products } from "@/data/products";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories[slug];
  if (!cat) return { title: "Kategoria nie znaleziona" };
  return {
    title: cat.name,
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

  // Try shared product data first, fall back to mock data
  const categoryProducts = getProductsByCategory(slug);
  const displayProducts =
    categoryProducts.length > 0
      ? categoryProducts
      : products.filter((p) => p.slug === slug);

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
            <option value="popularne">Najpopularniejsze</option>
            <option value="najtansze">Od najtańszych</option>
            <option value="najdrozsze">Od najdroższych</option>
            <option value="ocena">Najwyżej oceniane</option>
            <option value="nowosci">Najnowsze</option>
          </select>
        </div>
        <span className="text-sm text-gray-500">
          Znaleziono:{" "}
          <strong className="text-gray-900">{displayProducts.length}</strong>{" "}
          produktów
        </span>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            reviews={product.reviews}
            image={product.image}
            badge={product.badge}
            href={`/kategoria/${product.slug}/${product.id}`}
          />
        ))}
      </div>

      {/* Pagination (placeholder for now) */}
      {displayProducts.length > 12 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-sm text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30"
            disabled
          >
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
      )}
    </div>
  );
}
