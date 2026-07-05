"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VyhladavaniePage() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setQuery(q);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Výsledky vyhľadávania
          </h1>
          <p className="text-gray-500 mb-8">
            {query ? (
              <>Hľadaný výraz: <strong className="text-gray-700">&ldquo;{query}&rdquo;</strong></>
            ) : (
              "Zadajte hľadaný výraz do vyhľadávacieho poľa."
            )}
          </p>

          {query && (
            <div className="text-center py-12 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p>Pre tento hľadaný výraz sme nenašli žiadne produkty.</p>
              <p className="text-sm mt-2">Skúste použiť iné kľúčové slová.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
