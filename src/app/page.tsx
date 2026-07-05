"use client";

import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import BestsellerSection from "@/components/home/BestsellerSection";
import FlashSaleTimer from "@/components/home/FlashSaleTimer";
import TrustBar from "@/components/home/TrustBar";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <BestsellerSection />
      <section className="bg-gray-50">
        <FlashSaleTimer />
      </section>
      <TrustBar />
      <NewsletterSection />
    </>
  );
}
