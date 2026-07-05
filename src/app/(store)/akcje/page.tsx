import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promocje i wyprzedaże",
  description: "Sprawdź aktualne promocje i wyprzedaże w Tatrazone. Nawet do -60% na wybrane produkty. Oferta ograniczona czasowo!",
};

const promotions = [
  { id: 1, title: "Laptop Gaming XYZ Pro 15", price: 3999, originalPrice: 5999, rating: 4.8, reviews: 234, image: "https://picsum.photos/seed/prom1/400/400" },
  { id: 2, title: "Smartfon ABC Ultra 5G", price: 2499, originalPrice: 3499, rating: 4.6, reviews: 567, image: "https://picsum.photos/seed/prom2/400/400" },
  { id: 3, title: "Słuchawki bezprzewodowe QuietSound", price: 349, originalPrice: 599, rating: 4.7, reviews: 890, image: "https://picsum.photos/seed/prom3/400/400" },
  { id: 4, title: "Smartwatch FitPro X200", price: 799, originalPrice: 1299, rating: 4.5, reviews: 432, image: "https://picsum.photos/seed/prom4/400/400" },
  { id: 5, title: "Tablet TabMax 12.4", price: 1899, originalPrice: 2599, rating: 4.4, reviews: 156, image: "https://picsum.photos/seed/prom5/400/400" },
  { id: 6, title: "Aparat cyfrowy FotoShot Z10", price: 1599, originalPrice: 2199, rating: 4.6, reviews: 98, image: "https://picsum.photos/seed/prom6/400/400" },
  { id: 7, title: "Głośnik przenośny BoomBox 360", price: 249, originalPrice: 399, rating: 4.3, reviews: 345, image: "https://picsum.photos/seed/prom7/400/400" },
  { id: 8, title: "Konsola GameStation 5 Pro", price: 2199, originalPrice: 2899, rating: 4.9, reviews: 678, image: "https://picsum.photos/seed/prom8/400/400" },
  { id: 9, title: "Robot sprzątający CleanBot X1", price: 1299, originalPrice: 1999, rating: 4.5, reviews: 234, image: "https://picsum.photos/seed/prom9/400/400" },
  { id: 10, title: "Ekspres do kawy BaristaPro", price: 899, originalPrice: 1499, rating: 4.7, reviews: 567, image: "https://picsum.photos/seed/prom10/400/400" },
  { id: 11, title: "Monitor 27\" 4K UltraSharp", price: 1499, originalPrice: 2199, rating: 4.6, reviews: 123, image: "https://picsum.photos/seed/prom11/400/400" },
  { id: 12, title: "Kamera sportowa ActionCam 4K", price: 399, originalPrice: 699, rating: 4.4, reviews: 456, image: "https://picsum.photos/seed/prom12/400/400" },
];

export default function AkcjePage() {
  return (
    <div className="container-site py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Promocja ograniczona czasowo
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Okazje i promocje
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Skorzystaj z naszych najlepszych ofert. Produkty w obniżonych cenach dostępne przez ograniczony czas.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {promotions.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            reviews={product.reviews}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
