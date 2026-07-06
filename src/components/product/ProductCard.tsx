"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/providers/CartContext";
import { useToast } from "@/app/providers/ToastContext";

export interface ProductCardProps {
  id?: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  href?: string;
  onWishlist?: boolean;
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="aspect-square skeleton-pulse" />
      <div className="p-3 md:p-4 space-y-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="w-3 h-3 rounded skeleton-pulse" />
          ))}
        </div>
        <div className="h-4 skeleton-pulse w-3/4" />
        <div className="h-4 skeleton-pulse w-1/2" />
        <div className="h-3 skeleton-pulse w-1/3" />
      </div>
    </div>
  );
}

export default function ProductCard({
  id: propId,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
  href = "#",
  onWishlist: initialWishlist = false,
}: ProductCardProps) {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [wishlistAnim, setWishlistAnim] = useState(false);
  const [quickAddAnim, setQuickAddAnim] = useState(false);
  const { addItem, isInCart } = useCart();
  const { showToast } = useToast();

  const itemId = propId ?? title.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const discountPercent = originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : 0;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = !wishlist;
    setWishlist(newState);
    setWishlistAnim(true);
    setTimeout(() => setWishlistAnim(false), 400);
    showToast(
      newState ? "Dodano do ulubionych ♥" : "Usunięto z ulubionych",
      "wishlist"
    );
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart(itemId)) {
      showToast("Ten produkt jest już w koszyku", "info");
      return;
    }
    setQuickAddAnim(true);
    setTimeout(() => setQuickAddAnim(false), 500);
    addItem({
      id: itemId,
      title,
      price,
      image,
    });
    showToast(`${title} — dodano do koszyka!`, "success");
  };

  const formatPrice = (val: number) =>
    val.toLocaleString("pl-PL", {
      style: "currency",
      currency: "PLN",
    });

  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-out relative flex flex-col"
    >
      {/* Image */}
      <div className="aspect-square bg-gray-50 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {badge && (
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                badge === "Bestseller"
                  ? "bg-amber-400 text-amber-900"
                  : badge === "Nowość"
                  ? "bg-green-500 text-white"
                  : badge.startsWith("-")
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {badge}
            </span>
          )}
          {originalPrice && (
            <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded animate-badge-pulse">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          className={`absolute top-2 right-2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-sm ${
            wishlist ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
          }`}
          onClick={handleWishlist}
          aria-label={wishlist ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        >
          <svg
            className={`w-4 h-4 transition-all ${
              wishlist ? "text-red-500 scale-110" : "text-gray-400"
            } ${wishlistAnim ? "animate-scale-check" : ""}`}
            fill={wishlist ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick-add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-2 left-2 right-2 text-xs font-semibold py-2 rounded-lg transition-all duration-200 ${
            quickAddAnim
              ? "bg-green-600 text-white opacity-100 translate-y-0"
              : "bg-primary-600 text-white opacity-0 md:group-hover:opacity-100 translate-y-2 md:group-hover:translate-y-0"
          }`}
        >
          {quickAddAnim ? (
            <span className="flex items-center justify-center gap-1">
              <svg className="w-3.5 h-3.5 animate-scale-check" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Dodano!
            </span>
          ) : (
            "Dodaj do koszyka"
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4 flex-1 flex flex-col">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[11px] text-gray-400 ml-1">({reviews})</span>
        </div>

        <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors min-h-[2.5rem] flex-1">
          {title}
        </h3>

        {/* Price in PLN */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Delivery info */}
        <p className="text-[11px] text-green-600 font-medium mt-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
          Dostawa w 24h
        </p>
      </div>
    </Link>
  );
}
