"use client";

import { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<Event | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    ) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for beforeinstallprompt (Android/Chrome)
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Don't show immediately - wait for user engagement
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // Check if already installed
    const checkInstalled = () => {
      if (
        window.matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone === true
      ) {
        setIsInstalled(true);
      }
    };

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShowPrompt(false);
    });

    // Show prompt after user has been on page for 5 seconds
    let promptTimer: ReturnType<typeof setTimeout>;
    const engagementTimer = setTimeout(() => {
      if (!isInstalled && !isDismissed) {
        setShowPrompt(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      clearTimeout(engagementTimer);
    };
  }, [isDismissed, isInstalled]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      const result = await (deferredPrompt as any).userChoice;
      if (result.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setShowPrompt(false);
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-md mx-auto">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl font-bold">T</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm">
              Zainstaluj aplikację Tatrazone
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Szybsze zakupy, powiadomienia o promocjach, dostęp offline.
            </p>
            {isIOS && (
              <p className="text-xs text-gray-400 mt-1">
                Dotknij {" "}
                <span className="inline-block w-4 h-4 bg-gray-200 rounded text-center text-[10px] leading-4 font-semibold">
                  ↑
                </span>{" "}
                a następnie &bdquo;Dodaj do ekranu głównego&rdquo;
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          {!isIOS && deferredPrompt && (
            <button
              onClick={handleInstall}
              className="flex-1 bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Zainstaluj
            </button>
          )}
          <button
            onClick={handleDismiss}
            className="flex-1 bg-gray-100 text-gray-700 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Nie teraz
          </button>
        </div>
      </div>
    </div>
  );
}
