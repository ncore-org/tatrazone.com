import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prihlásenie",
  description: "Prihláste sa do svojho účtu.",
};

export default function PrihlaseniePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Prihlásenie
            </h1>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Heslo
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-primary-600" />
                  Zapamätať si ma
                </label>
                <Link
                  href="/ucet/zabudnute-heslo"
                  className="text-sm text-primary-600 hover:underline"
                >
                  Zabudnuté heslo?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Prihlásiť sa
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-6">
              Nemáte účet?{" "}
              <Link
                href="/ucet/registracia"
                className="text-primary-600 font-medium hover:underline"
              >
                Registrujte sa
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
