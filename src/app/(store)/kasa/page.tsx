"use client";

import { useState } from "react";
import Link from "next/link";

const steps = ["Koszyk", "Dostawa i płatność", "Podsumowanie"];

export default function KasaPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="container-site py-8 md:py-12">
      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                i <= step
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`text-sm hidden sm:inline ${
                i <= step ? "text-gray-900 font-medium" : "text-gray-400"
              }`}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <div
                className={`w-8 h-0.5 ${
                  i < step ? "bg-primary-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        {step === 0 ? "Koszyk" : step === 1 ? "Dostawa i płatność" : "Podsumowanie zamówienia"}
      </h1>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Delivery form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            1. Dane do dostawy
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Imię *</label>
              <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nazwisko *</label>
              <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
              <input type="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
              <input type="tel" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Adres *</label>
              <input type="text" placeholder="Ulica i numer" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Miejscowość *</label>
              <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kod pocztowy *</label>
              <input type="text" placeholder="00-000" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
          </div>
        </div>

        {/* Delivery method */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            2. Sposób dostawy
          </h2>
          <div className="space-y-3">
            {[
              { label: "Kurier InPost", price: "14,99 zł", time: "1-2 dni" },
              { label: "Paczkomat InPost", price: "12,99 zł", time: "1-2 dni" },
              { label: "Kurier DPD", price: "16,99 zł", time: "1-2 dni" },
              { label: "Poczta Polska", price: "9,99 zł", time: "2-4 dni" },
              { label: "Odbiór osobisty", price: "0 zł", time: "Warszawa" },
            ].map((d) => (
              <label
                key={d.label}
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50"
              >
                <input type="radio" name="delivery" className="accent-primary-600" />
                <div className="flex-1">
                  <span className="font-medium text-sm text-gray-900">{d.label}</span>
                  <span className="text-xs text-gray-500 ml-2">({d.time})</span>
                </div>
                <span className="text-sm font-medium">{d.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment method */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            3. Sposób płatności
          </h2>
          <div className="space-y-3">
            {[
              { label: "Karta płatnicza (Visa/MC)", icon: "💳" },
              { label: "BLIK", icon: "📱" },
              { label: "Przelewy24", icon: "🏦" },
              { label: "Google Pay", icon: "▶️" },
              { label: "PayPo - zapłać za 30 dni", icon: "⏰" },
              { label: "Za pobraniem", icon: "💵", note: "+5,00 zł" },
            ].map((p) => (
              <label
                key={p.label}
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50"
              >
                <input type="radio" name="payment" className="accent-primary-600" />
                <span className="text-lg">{p.icon}</span>
                <span className="flex-1 font-medium text-sm text-gray-900">{p.label}</span>
                {p.note && <span className="text-xs text-gray-400">{p.note}</span>}
              </label>
            ))}
          </div>
        </div>

        <Link
          href="/kasa/dziekujemy"
          className="block w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl hover:bg-primary-700 transition-colors text-center"
        >
          Zamawiam i płacę
        </Link>
      </div>
    </div>
  );
}
