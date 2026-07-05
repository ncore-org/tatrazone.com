"use client";

import { useState } from "react";

export default function AdresyPage() {
  const [showForm, setShowForm] = useState(false);

  const addresses = [
    {
      id: 1,
      name: "Jan Kowalski",
      street: "ul. Marszałkowska 123",
      city: "Warszawa",
      zip: "00-001",
      phone: "+48 123 456 789",
      isDefault: true,
    },
  ];

  return (
    <div className="container-site py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Moje adresy
          </h1>
          <p className="text-gray-500 text-sm">
            Zarządzaj swoimi adresami dostawy.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary-600 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm"
        >
          {showForm ? "Anuluj" : "Dodaj adres"}
        </button>
      </div>

      {showForm && (
        <div className="max-w-lg mb-8 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Nowy adres</h2>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Imię *</label>
                <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nazwisko *</label>
                <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ulica i numer *</label>
              <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Miasto *</label>
                <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kod pocztowy *</label>
                <input type="text" placeholder="00-000" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input type="tel" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary-600 rounded" />
              <span className="text-sm text-gray-700">Ustaw jako adres domyślny</span>
            </label>
            <button className="bg-primary-600 text-white font-medium px-8 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              Zapisz adres
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white border border-gray-200 rounded-xl p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{addr.name}</h3>
                  {addr.isDefault && (
                    <span className="text-xs bg-primary-50 text-primary-600 font-medium px-2 py-0.5 rounded-full">
                      Domyślny
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{addr.street}</p>
                <p className="text-sm text-gray-600">
                  {addr.zip} {addr.city}
                </p>
                <p className="text-sm text-gray-600">{addr.phone}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Edytuj
                </button>
                <button className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                  Usuń
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
