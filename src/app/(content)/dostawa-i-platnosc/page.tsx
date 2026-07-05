import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dostawa i płatność",
  description: "Sprawdź metody dostawy i płatności w Tatrazone. Darmowa dostawa od 200 zł. Płatność BLIK, kartą, Przelewy24.",
};

export default function DostawaIPlatnoscPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Dostawa i płatność
      </h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Sprawdź dostępne metody dostawy i płatności. Staramy się, aby zakupy były wygodne i bezpieczne.
      </p>

      {/* Delivery methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Metody dostawy
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Kurier InPost",
              price: "14,99 zł",
              free: "Darmowa od 200 zł",
              time: "1-2 dni robocze",
              icon: "🚚",
              desc: "Szybka dostawa kurierem InPost pod drzwi. Możliwość śledzenia przesyłki online.",
            },
            {
              name: "Paczkomat InPost",
              price: "12,99 zł",
              free: "Darmowa od 200 zł",
              time: "1-2 dni robocze",
              icon: "📦",
              desc: "Odbierz paczkę w wybranym Paczkomacie 24/7. Wygodna i szybka opcja.",
            },
            {
              name: "Kurier DPD",
              price: "16,99 zł",
              free: "Darmowa od 200 zł",
              time: "1-2 dni robocze",
              icon: "📬",
              desc: "Dostawa kurierem DPD z możliwością wyboru okna czasowego.",
            },
            {
              name: "Poczta Polska",
              price: "9,99 zł",
              free: "Darmowa od 200 zł",
              time: "2-4 dni robocze",
              icon: "🏤",
              desc: "Przesyłka pocztowa z odbiorem w wybranej placówce pocztowej.",
            },
            {
              name: "Odbiór osobisty",
              price: "0 zł",
              free: "Zawsze darmowy",
              time: "Po potwierdzeniu",
              icon: "📍",
              desc: "Odbiór w naszej siedzibie w Warszawie przy ul. Marszałkowskiej 123.",
            },
          ].map((method) => (
            <div
              key={method.name}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{method.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{method.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{method.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="font-semibold text-primary-600">{method.price}</span>
                <span className="text-gray-300">|</span>
                <span className="text-green-600 font-medium">{method.free}</span>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Czas dostawy: {method.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Metody płatności
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Karta płatnicza", desc: "Visa, Mastercard, Maestro", icon: "💳" },
            { name: "BLIK", desc: "Szybka płatność kodem BLIK", icon: "📱" },
            { name: "Przelewy24", desc: "Szybkie przelewy online", icon: "🏦" },
            { name: "Google Pay", desc: "Płatność jednym kliknięciem", icon: "▶️" },
            { name: "PayPo", desc: "Zapłać za 30 dni", icon: "⏰" },
            { name: "Za pobraniem", desc: "Płatność przy odbiorze (+5 zł)", icon: "💵" },
          ].map((payment) => (
            <div
              key={payment.name}
              className="bg-gray-50 rounded-xl p-4 flex items-center gap-4"
            >
              <span className="text-2xl">{payment.icon}</span>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{payment.name}</h3>
                <p className="text-xs text-gray-500">{payment.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info boxes */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-100 rounded-xl p-5">
          <h3 className="font-semibold text-green-900 mb-1">🚚 Darmowa dostawa</h3>
          <p className="text-sm text-green-700">
            Przy zamówieniach powyżej 200 zł dostawa jest gratis!
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
          <h3 className="font-semibold text-blue-900 mb-1">🔒 Bezpieczne zakupy</h3>
          <p className="text-sm text-blue-700">
            Wszystkie płatności są szyfrowane i w pełni bezpieczne.
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
          <h3 className="font-semibold text-purple-900 mb-1">📦 Śledzenie przesyłki</h3>
          <p className="text-sm text-purple-700">
            Każdą przesyłkę możesz śledzić online na bieżąco.
          </p>
        </div>
      </section>
    </div>
  );
}
