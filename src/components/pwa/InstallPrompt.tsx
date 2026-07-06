"use client";

import { useState, useEffect, useCallback } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [neverShow, setNeverShow] = useState(false);

  const checkInstalled = useCallback(() => {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    );
  }, []);

  useEffect(() => {
    if (checkInstalled()) {
      setIsInstalled(true);
      return;
    }

    // Check localStorage for dismissed state
    const dismissed = localStorage.getItem("tz-pwa-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      setShowPrompt(false);
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
      // Show prompt after user engagement
      setTimeout(() => {
        if (!isInstalled) setShowPrompt(true);
      }, 5000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // If no beforeinstallprompt after 10s, show iOS-style prompt
    const iosTimer = setTimeout(() => {
      if (!deferredPrompt && iOS && !isInstalled && !localStorage.getItem("tz-pwa-dismissed")) {
        setShowPrompt(true);
      }
    }, 10000);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShowPrompt(false);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      clearTimeout(iosTimer);
    };
  }, [deferredPrompt, isInstalled, checkInstalled]);

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
    if (neverShow) {
      localStorage.setItem("tz-pwa-dismissed", "true");
    }
    setIsDismissed(true);
    setShowPrompt(false);
  };

  const [isDismissed, setIsDismissed] = useState(false);

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
              <div className="mt-2 text-xs text-gray-500 space-y-1 bg-gray-50 p-2 rounded-lg">
                <p className="font-medium text-gray-700">Jak zainstalować na iOS:</p>
                <p className="flex items-center gap-1.5">
                  1. Dotknij{" "}
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 5v14m-7-7h14" />
                  </svg>
                  {/* Share icon */}
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                  </svg>
                </p>
                <p>2. Przewiń w dół i wybierz &bdquo;Dodaj do ekranu głównego&rdquo;</p>
                <p>3. Dotknij &bdquo;Dodaj&rdquo; w prawym górnym rogu</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={neverShow}
              onChange={(e) => setNeverShow(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-[11px] text-gray-400">Nie pokazuj więcej</span>
          </label>
        </div>

        <div className="flex gap-2 mt-3">
          {!isIOS && deferredPrompt && (
            <button
              onClick={handleInstall}
              className="flex-1 bg-primary-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
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
