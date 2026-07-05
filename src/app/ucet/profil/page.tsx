import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Môj účet",
  description: "Správa vášho účtu.",
};

export default function ProfilPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Môj účet
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <nav className="space-y-1">
                {[
                  { label: "Môj profil", href: "/ucet/profil", active: true },
                  { label: "Moje objednávky", href: "/ucet/objednavky" },
                  { label: "Moje adresy", href: "/ucet/adresy" },
                  { label: "Obľúbené", href: "/ucet/oblubene" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      link.active
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Osobné údaje
                </h2>
                <form className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meno</label>
                    <input type="text" defaultValue="Ján" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priezvisko</label>
                    <input type="text" defaultValue="Nový" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" defaultValue="jan.novy@example.com" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefón</label>
                    <input type="tel" defaultValue="+421 901 123 456" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
                  </div>
                  <div className="sm:col-span-2 flex gap-3">
                    <button type="submit" className="bg-primary-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm">
                      Uložiť zmeny
                    </button>
                    <button type="button" className="text-gray-600 font-medium px-6 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
                      Zrušiť
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
