"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState("dane");

  const tabs = [
    { id: "dane", label: "Dane osobowe" },
    { id: "haslo", label: "Zmiana hasła" },
    { id: "preferencje", label: "Preferencje" },
  ];

  return (
    <div className="container-site py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Moje konto
      </h1>
      <p className="text-gray-500 text-sm mb-8">Zarządzaj swoimi danymi osobowymi i ustawieniami konta.</p>

      {/* Navigation tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "text-primary-600 border-primary-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "dane" && (
        <div className="max-w-2xl">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dane osobowe</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Imię</label>
                <input type="text" defaultValue="Jan" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nazwisko</label>
                <input type="text" defaultValue="Kowalski" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail</label>
                <input type="email" defaultValue="jan.kowalski@email.pl" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input type="tel" defaultValue="+48 123 456 789" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
            </div>
            <button className="mt-6 bg-primary-600 text-white font-medium px-8 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              Zapisz zmiany
            </button>
          </div>
        </div>
      )}

      {activeTab === "haslo" && (
        <div className="max-w-md">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Zmiana hasła</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Obecne hasło</label>
                <input type="password" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nowe hasło</label>
                <input type="password" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Powtórz nowe hasło</label>
                <input type="password" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <button className="bg-primary-600 text-white font-medium px-8 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm">
                Zmień hasło
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "preferencje" && (
        <div className="max-w-lg">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferencje</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">Newsletter</span>
                  <p className="text-xs text-gray-500">Otrzymuj informacje o promocjach</p>
                </div>
                <input type="checkbox" defaultChecked className="accent-primary-600 rounded" />
              </label>
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">Powiadomienia SMS</span>
                  <p className="text-xs text-gray-500">Status zamówienia SMS-em</p>
                </div>
                <input type="checkbox" defaultChecked className="accent-primary-600 rounded" />
              </label>
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">Oferty spersonalizowane</span>
                  <p className="text-xs text-gray-500">Dopasowane oferty na podstawie historii</p>
                </div>
                <input type="checkbox" className="accent-primary-600 rounded" />
              </label>
            </div>
            <button className="mt-6 bg-primary-600 text-white font-medium px-8 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              Zapisz preferencje
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
