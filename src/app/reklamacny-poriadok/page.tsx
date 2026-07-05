import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reklamačný poriadok",
  description: "Reklamačný poriadok a postup pri reklamácii tovaru v Tatrazone.",
};

export default function ReklamacnyPoriadokPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Reklamačný poriadok
          </h1>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Tento reklamačný poriadok upravuje postup pri uplatnení zodpovednosti
              za vady tovaru zakúpeného v internetovom obchode Tatrazone.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">1. Zodpovednosť za vady</h2>
            <p>
              Predávajúci zodpovedá za vady, ktoré má tovar pri prevzatí Kupujúcim.
              Záručná doba je 24 mesiacov od prevzatia tovaru, pokiaľ nie je
              uvedené inak.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">2. Postup pri reklamácii</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Kontaktujte nás prostredníctvom e-mailu na reklamacie@tatrazone.com</li>
              <li>Popíšte vadu tovaru a uveďte číslo objednávky</li>
              <li>Tovar nám zašlite na adresu: Tatrazone s.r.o., Hlavná 123, 811 01 Bratislava</li>
              <li>O vašej reklamácii rozhodneme do 30 dní od jej doručenia</li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">3. Zamietnutie reklamácie</h2>
            <p>
              Reklamácia bude zamietnutá v prípade, že vada vznikla nesprávnym
              používaním, mechanickým poškodením, bežným opotrebením alebo
              zásahom do tovaru neoprávnenou osobou.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">4. Vyriešenie reklamácie</h2>
            <p>
              V prípade oprávnenej reklamácie má Kupujúci právo na: výmenu
              tovaru, opravu tovaru, primeranú zľavu z ceny alebo odstúpenie
              od zmluvy a vrátenie peňazí.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
