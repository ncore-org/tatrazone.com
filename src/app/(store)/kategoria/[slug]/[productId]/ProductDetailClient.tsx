"use client";

import { useState } from "react";
import Link from "next/link";
import ProductGallery from "@/components/product/ProductGallery";
import ReviewSection from "@/components/product/ReviewSection";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/data/products";

interface Props {
  product: Product | null;
  relatedProducts: Product[];
  categoryName: string;
}

export default function ProductDetailClient({ product, relatedProducts, categoryName }: Props) {
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const formatPrice = (val: number) =>
    val.toLocaleString("pl-PL", { style: "currency", currency: "PLN" });

  if (!product) {
    return (
      <div className="container-site py-20 text-center">
        <div className="max-w-md mx-auto">
          <svg className="w-20 h-20 mx-auto text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Produkt nie znaleziony</h1>
          <p className="text-gray-500 mb-6">Przepraszamy, ten produkt nie istnieje lub został usunięty.</p>
          <Link href="/kategoria" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors">
            Przeglądaj kategorie
          </Link>
        </div>
      </div>
    );
  }

  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-100">
        <div className="container-site py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link>
            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18l6-6-6-6" /></svg>
            <Link href="/kategoria" className="hover:text-primary-600 transition-colors">Kategorie</Link>
            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18l6-6-6-6" /></svg>
            <Link href={`/kategoria/${product.slug}`} className="hover:text-primary-600 transition-colors">{categoryName}</Link>
            <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 18l6-6-6-6" /></svg>
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="container-site py-6 md:py-10">
        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* Right: Product Info */}
          <div className="space-y-5">
            {/* Badge + Category */}
            <div className="flex items-center gap-2 flex-wrap">
              {product.badge && (
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  product.badge === "Bestseller" ? "bg-amber-100 text-amber-800" :
                  product.badge === "Nowość" ? "bg-green-100 text-green-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {product.badge}
                </span>
              )}
              <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">{categoryName}</span>
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews} opinii)</span>
            </div>

            {/* Divider */}
            <hr className="border-gray-100" />

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                    <span className="bg-red-500 text-white text-sm font-bold px-2.5 py-0.5 rounded-lg">-{discountPercent}%</span>
                  </>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-green-600 font-medium">Oszczędzasz {formatPrice(product.originalPrice - product.price)}</p>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${product.inStock ? "bg-green-500 animate-pulse-dot" : "bg-red-500"}`} />
              <span className={`text-sm font-medium ${product.inStock ? "text-green-700" : "text-red-600"}`}>
                {product.inStock ? "Produkt dostępny" : "Produkt niedostępny"}
              </span>
              {product.inStock && <span className="text-xs text-gray-400">| {product.delivery}</span>}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30"
                  disabled={qty <= 1}
                  aria-label="Zmniejsz ilość"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 12H4" /></svg>
                </button>
                <span className="w-12 text-center font-medium text-gray-900 text-sm">{qty}</span>
                <button
                  onClick={() => setQty(Math.min(99, qty + 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-30"
                  disabled={qty >= 99}
                  aria-label="Zwiększ ilość"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                  addedToCart
                    ? "bg-green-600 text-white"
                    : "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {addedToCart ? (
                  <>
                    <svg className="w-5 h-5 animate-scale-check" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 13l4 4L19 7" /></svg>
                    Dodano!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                    Dodaj do koszyka
                  </>
                )}
              </button>
            </div>

            {/* Wishlist + Compare */}
            <div className="flex gap-3">
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
                  wishlist
                    ? "border-red-200 bg-red-50 text-red-600"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <svg className={`w-4 h-4 ${wishlist ? "text-red-500 fill-red-500" : ""}`} fill={wishlist ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlist ? "W ulubionych" : "Dodaj do ulubionych"}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 5l7 7-7 7" />
                </svg>
                Porównaj
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span><strong>InPost Paczkomat</strong> — od 12,99 zł</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span><strong>Kurier DHL / DPD</strong> — od 14,99 zł</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Darmowa dostawa od 200 zł</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span><strong>Zwrot do 30 dni</strong> bez podania przyczyny</span>
              </div>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Płatność:</span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded">Visa</span>
              <span className="px-2 py-0.5 bg-red-50 text-red-700 text-[10px] font-bold rounded">Mastercard</span>
              <span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 text-[10px] font-bold rounded">BLIK</span>
              <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded">P24</span>
              <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-bold rounded">PayU</span>
            </div>
          </div>
        </div>

        {/* Description + Specs */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Opis produktu</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Specyfikacja techniczna</h2>
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              {product.specs.map((spec, i) => (
                <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <span className="text-sm text-gray-500">{spec.label}</span>
                  <span className="text-sm font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Opinie klientów</h2>
          <ReviewSection />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Produkty powiązane</h2>
              <Link href={`/kategoria/${product.slug}`} className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Zobacz wszystkie →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard
                  key={rp.id}
                  title={rp.title}
                  price={rp.price}
                  originalPrice={rp.originalPrice}
                  rating={rp.rating}
                  reviews={rp.reviews}
                  image={rp.image}
                  badge={rp.badge}
                  href={`/kategoria/${rp.slug}/${rp.id}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
