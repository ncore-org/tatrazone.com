import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Objednávka potvrdená",
  description: "Ďakujeme za vašu objednávku.",
};

export default function DakujemePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-20">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ďakujeme za objednávku!
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Vaša objednávka č. <strong className="text-gray-900">2024-00123</strong>{" "}
              bola úspešne prijatá. Potvrdenie sme odoslali na váš e-mail.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left text-sm space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Číslo objednávky</span>
                <span className="font-medium">2024-00123</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stav objednávky</span>
                <span className="text-success font-medium">Spracováva sa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Predpokladané doručenie</span>
                <span className="font-medium">3-5 pracovných dní</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/ucet/objednavky"
                className="bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Sledovať objednávku
              </Link>
              <Link
                href="/"
                className="text-primary-600 font-medium px-8 py-3 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
              >
                Späť na hlavnú stránku
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
