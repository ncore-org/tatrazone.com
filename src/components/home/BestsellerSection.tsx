import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

const bestsellers = products
  .filter((p) => p.badge === "Bestseller" || p.id <= 8)
  .slice(0, 8);

const getSlugHref = (product: (typeof products)[number]) =>
  `/kategoria/${product.slug}/${product.id}`;

export default function BestsellerSection() {
  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container-site">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Bestsellery
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Najchętniej kupowane produkty w tym miesiącu
            </p>
          </div>
          <Link
            href="/akcje"
            className="text-blue-600 font-medium text-sm md:text-base hover:text-blue-700 transition-colors flex items-center gap-1 group"
          >
            Zobacz więcej
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviews={product.reviews}
              image={product.image}
              badge={product.badge}
              href={getSlugHref(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
