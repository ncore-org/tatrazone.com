"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tz-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("tz-cookie-consent", "all");
    setVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("tz-cookie-consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        <div className="container-site py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-semibold text-gray-900 text-sm">Pliki cookie</span>
              </div>
              <p className="text-sm text-gray-600">
                Używamy plików cookie, aby zapewnić najlepsze doświadczenia zakupowe,
                personalizować treści i reklamy oraz analizować ruch na stronie.
              </p>
              {showDetails && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 space-y-2">
                  <p><strong>Niezbędne (zawsze aktywne):</strong> Umożliwiają korzystanie z koszyka, procesu zamówienia i logowania.</p>
                  <p><strong>Analityczne:</strong> Pomagają nam ulepszać stronę poprzez analizę sposobu korzystania z niej.</p>
                  <p><strong>Marketingowe:</strong> Pozwalają wyświetlać spersonalizowane oferty i promocje.</p>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-gray-500 hover:text-gray-700 underline underline-offset-2 whitespace-nowrap px-3 py-1.5"
              >
                {showDetails ? "Schowaj" : "Dostosuj"}
              </button>
              <button
                onClick={acceptEssential}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors whitespace-nowrap"
              >
                Tylko niezbędne
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors whitespace-nowrap"
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
