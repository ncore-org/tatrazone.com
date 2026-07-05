import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nowości",
  description: "Najnowsze produkty w ofercie Tatrazone. Sprawdź co nowego pojawiło się w naszym sklepie.",
};

const newProducts = [
  { id: 101, title: "Laptop UltraSlim Pro 16", price: 5499, rating: 4.9, reviews: 12, image: "https://picsum.photos/seed/new1/400/400" },
  { id: 102, title: "Smartfon PhotoMax 200MP", price: 3299, rating: 4.8, reviews: 8, image: "https://picsum.photos/seed/new2/400/400" },
  { id: 103, title: "Słuchawki NoiseCancel Pro 2", price: 799, rating: 4.7, reviews: 5, image: "https://picsum.photos/seed/new3/400/400" },
  { id: 104, title: "Smartwatch HealthPro 3000", price: 999, rating: 4.6, reviews: 15, image: "https://picsum.photos/seed/new4/400/400" },
  { id: 105, title: "Tablet ProCreate 14", price: 2799, rating: 4.5, reviews: 3, image: "https://picsum.photos/seed/new5/400/400" },
  { id: 106, title: "Głośnik SmartSound AI", price: 449, rating: 4.8, reviews: 7, image: "https://picsum.photos/seed/new6/400/400" },
  { id: 107, title: "Drukarka 3D PrintPro X2", price: 1899, originalPrice: 2399, rating: 4.4, reviews: 22, image: "https://picsum.photos/seed/new7/400/400" },
  { id: 108, title: "Lampka LED SmartDesk", price: 159, rating: 4.3, reviews: 45, image: "https://picsum.photos/seed/new8/400/400" },
];

export default function NowosciPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Nowości w ofercie
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Najświeższe produkty, które właśnie pojawiły się w naszej ofercie. Bądź pierwszy, który je wypróbuje!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {newProducts.map((product) => (
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
