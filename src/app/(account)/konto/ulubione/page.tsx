import ProductCard from "@/components/product/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulubione",
  description: "Twoja lista ulubionych produktów w Tatrazone. Szybki dostęp do produktów, które Ci się podobają.",
};

const favorites = [
  { id: 1, title: "Laptop Gaming XYZ Pro 15", price: 4999, originalPrice: 6999, rating: 4.8, reviews: 234, image: "https://picsum.photos/seed/fav1/400/400" },
  { id: 2, title: "Słuchawki bezprzewodowe QuietSound", price: 349, originalPrice: 599, rating: 4.7, reviews: 890, image: "https://picsum.photos/seed/fav2/400/400" },
  { id: 3, title: "Smartwatch FitPro X200", price: 799, rating: 4.5, reviews: 432, image: "https://picsum.photos/seed/fav3/400/400" },
  { id: 4, title: "Konsola GameStation 5 Pro", price: 2199, rating: 4.9, reviews: 678, image: "https://picsum.photos/seed/fav4/400/400" },
  { id: 5, title: "Robot sprzątający CleanBot X1", price: 1299, originalPrice: 1999, rating: 4.5, reviews: 234, image: "https://picsum.photos/seed/fav5/400/400" },
  { id: 6, title: "Ekspres do kawy BaristaPro", price: 899, originalPrice: 1499, rating: 4.7, reviews: 567, image: "https://picsum.photos/seed/fav6/400/400" },
];

export default function UlubionePage() {
  return (
    <div className="container-site py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Ulubione
          </h1>
          <p className="text-gray-500 text-sm">
            {favorites.length} produktów na Twojej liście
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {favorites.map((product) => (
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
