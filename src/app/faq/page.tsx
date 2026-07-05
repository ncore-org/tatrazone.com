import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Často kladené otázky",
  description: "Odpovede na najčastejšie otázky o nakupovaní v Tatrazone.",
};

const FAQS = [
  {
    q: "Ako dlho trvá doručenie objednávky?",
    a: "Objednávky spracúvame do 24 hodín. Doručenie trvá 1-2 pracovné dni kuriérom, 2-4 dni poštou.",
  },
  {
    q: "Môžem vrátiť tovar do 14 dní?",
    a: "Áno, máte právo odstúpiť od zmluvy do 14 dní od prevzatia tovaru bez udania dôvodu.",
  },
  {
    q: "Ako môžem zaplatiť?",
    a: "Prijímame platby kartou (Visa, Mastercard), bankovým prevodom, Google Pay, Apple Pay a dobierkou.",
  },
  {
    q: "Je nakupovanie u vás bezpečné?",
    a: "Áno, všetky platby prebiehajú cez šifrované spojenie. Vaše údaje sú v bezpečí.",
  },
  {
    q: "Ako zistím stav svojej objednávky?",
    a: "Po odoslaní objednávky dostanete potvrdzovací e-mail. Po expedícii Vám pošleme sledovacie číslo zásielky.",
  },
  {
    q: "Môžem zmeniť alebo zrušiť objednávku?",
    a: "Objednávku je možné zmeniť alebo zrušiť do momentu jej spracovania. Kontaktujte nás čo najskôr.",
  },
  {
    q: "Ako reklamovať tovar?",
    a: "Reklamáciu môžete uplatniť do 24 mesiacov od kúpy. Kontaktujte nás na reklamacie@tatrazone.com.",
  },
  {
    q: "Máte kamennú predajňu?",
    a: "Momentálne fungujeme výhradne ako online obchod. Tovar si môžete vyzdvihnúť osobne v Bratislave po dohode.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Často kladené otázky
          </h1>
          <p className="text-gray-600 mb-10">
            Nenašli ste odpoveď?{" "}
            <Link href="/kontakt" className="text-primary-600 hover:underline">
              Kontaktujte nás
            </Link>
            .
          </p>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
