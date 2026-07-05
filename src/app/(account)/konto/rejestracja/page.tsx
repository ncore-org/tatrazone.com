"use client";

import Link from "next/link";

export default function RejestracjaPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Załóż konto
        </h1>
        <p className="text-gray-500 text-sm mb-8 text-center">
          Dołącz do Tatrazone i korzystaj z szybkich zakupów!
        </p>

        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Imię
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nazwisko
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Adres e-mail *
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
              placeholder="twoj@email.pl"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
              placeholder="+48 123 456 789"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Hasło *
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
              placeholder="Minimum 8 znaków"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Powtórz hasło *
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
              placeholder="••••••••"
            />
          </div>

          <label className="flex items-start gap-3">
            <input type="checkbox" className="accent-primary-600 rounded mt-1" />
            <span className="text-sm text-gray-500">
              Akceptuję{" "}
              <Link href="/regulamin" className="text-primary-600 hover:text-primary-700">
                regulamin
              </Link>{" "}
              sklepu oraz{" "}
              <Link href="/polityka-prywatnosci" className="text-primary-600 hover:text-primary-700">
                politykę prywatności
              </Link>
              .
            </span>
          </label>

          <label className="flex items-start gap-3">
            <input type="checkbox" className="accent-primary-600 rounded mt-1" />
            <span className="text-sm text-gray-500">
              Chcę otrzymywać informacje o promocjach i nowościach (możesz zrezygnować w każdej chwili)
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors mt-2"
          >
            Załóż konto
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Masz już konto?{" "}
          <Link href="/konto/logowanie" className="text-primary-600 font-medium hover:text-primary-700">
            Zaloguj się
          </Link>
        </p>
      </div>
    </div>
  );
}
