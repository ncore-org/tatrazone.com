import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const bestsellers = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: [
    "Laptop Gaming XYZ Pro 15",
    "Smartfon ABC Ultra 5G",
    "Słuchawki bezprzewodowe QuietSound",
    "Smartwatch FitPro X200",
    "Tablet TabMax 12.4",
    "Aparat cyfrowy FotoShot Z10",
    "Głośnik przenośny BoomBox 360",
    "Konsola GameStation 5 Pro",
  ][i],
  price: 4999 + i * 340,
  originalPrice: i % 2 === 0 ? 6999 + i * 400 : undefined,
  rating: 4.5 + (i % 4) * 0.1,
  reviews: 120 + i * 45,
  image: `https://picsum.photos/seed/best${i}/400/400`,
  badge: i === 0 ? "Bestseller" : i === 2 ? "Nowość" : i === 4 ? "-20%" : undefined,
}));

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
            href="/kategoria"
            className="text-blue-600 font-medium text-sm md:text-base hover:text-blue-700 transition-colors flex items-center gap-1"
          >
            Zobacz więcej →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
