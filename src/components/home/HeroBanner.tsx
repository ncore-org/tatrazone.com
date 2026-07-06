"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Sezonowa wyprzedaż",
    subtitle: "Nawet do -60%",
    description:
      "Najlepsze okazje na elektronikę, modę i sprzęt AGD. Promocja ograniczona czasowo!",
    cta: "Sprawdź promocje",
    href: "/akcje",
    bg: "bg-gradient-to-r from-blue-600 to-blue-800",
    accent: "bg-yellow-400 text-blue-900",
  },
  {
    title: "Nowości w ofercie",
    subtitle: "Najnowsze produkty",
    description:
      "Zobacz co nowego w naszej ofercie. Setki produktów w konkurencyjnych cenach.",
    cta: "Zobacz nowości",
    href: "/nowosci",
    bg: "bg-gradient-to-r from-purple-600 to-purple-800",
    accent: "bg-white text-purple-700",
  },
  {
    title: "Darmowa dostawa",
    subtitle: "Od 200 zł",
    description:
      "Zamów już dziś, a dostarczymy paczkę gratis! Paczkomaty InPost, kurier DPD i Poczta Polska.",
    cta: "Zobacz szczegóły",
    href: "/dostawa-i-platnosc",
    bg: "bg-gradient-to-r from-green-600 to-green-800",
    accent: "bg-yellow-400 text-green-900",
  },
  {
    title: "Smart Home w promocji",
    subtitle: "Inteligentny dom",
    description:
      "Oświetlenie, termostaty, kamery i czujniki — wszystko w jednej aplikacji. Oszczędzaj energię i pieniądze!",
    cta: "Zobacz ofertę",
    href: "/kategoria/dom-i-ogrod",
    bg: "bg-gradient-to-r from-teal-600 to-teal-800",
    accent: "bg-yellow-400 text-teal-900",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      } else {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }
    setTouchStart(null);
  };

  return (
    <section
      ref={containerRef}
      className={`${slides[current].bg} text-white overflow-hidden relative`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Promocje i oferty specjalne"
    >
      <div className="container-site py-10 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5 max-w-xl" key={current}>
            <span
              className={`inline-block ${slides[current].accent} text-sm font-bold px-4 py-1.5 rounded-full animate-slide-content-in`}
              style={{ animationDelay: "0ms" }}
            >
              {slides[current].subtitle}
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-slide-content-in"
              style={{ animationDelay: "100ms" }}
            >
              {slides[current].title}
            </h1>
            <p
              className="text-base md:text-lg text-white/80 leading-relaxed animate-slide-content-in"
              style={{ animationDelay: "200ms" }}
            >
              {slides[current].description}
            </p>
            <Link
              href={slides[current].href}
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl group animate-slide-content-in"
              style={{ animationDelay: "300ms" }}
            >
              {slides[current].cta}
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-72 h-72 lg:w-96 lg:h-96 bg-white/10 rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Animated floating shapes */}
              <div className="absolute w-16 h-16 bg-white/5 rounded-lg -top-4 -left-4 animate-pulse" style={{ animationDuration: "4s" }} />
              <div className="absolute w-10 h-10 bg-white/5 rounded-full bottom-8 right-6 animate-pulse" style={{ animationDuration: "3s" }} />
              <div className="absolute w-20 h-20 bg-white/5 rounded-xl top-12 -right-8 animate-pulse" style={{ animationDuration: "5s" }} />
              <svg className="w-40 h-40 lg:w-56 lg:h-56 text-white/30 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Dots - desktop left-aligned */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-8 h-2.5"
                : "bg-white/40 hover:bg-white/60 w-2.5 h-2.5"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
