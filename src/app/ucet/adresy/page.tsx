import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moje adresy",
  description: "Správa doručovacích adries.",
};

export default function AdresyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Moje adresy
          </h1>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <nav className="space-y-1">
                {[
                  { label: "Môj profil", href: "/ucet/profil" },
                  { label: "Moje objednávky", href: "/ucet/objednavky" },
                  { label: "Moje adresy", href: "/ucet/adresy", active: true },
                  { label: "Obľúbené", href: "/ucet/oblubene" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      link.active ? "bg-primary-50 text-primary-700" : "text-gray-600 hover:bg-gray-50"
                    }`}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="md:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Domov</h3>
                    <span className="text-xs bg-primary-50 text-primary-700 font-medium px-2 py-0.5 rounded-full">Hlavná</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Hlavná 123<br />
                    811 01 Bratislava<br />
                    Slovensko
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button className="text-sm text-primary-600 hover:underline">Upraviť</button>
                    <button className="text-sm text-gray-400 hover:text-error transition-colors">Odstrániť</button>
                  </div>
                </div>
                <button className="border-2 border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-gray-400 hover:border-primary-300 hover:text-primary-500 transition-colors min-h-[160px]">
                  <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-sm font-medium">Pridať adresu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
