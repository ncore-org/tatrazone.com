import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obchodné podmienky",
  description: "Obchodné podmienky spoločnosti Tatrazone.",
};

export default function ObchodnePodmienkyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Obchodné podmienky
          </h1>
          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-gray-600">
              Tieto obchodné podmienky (ďalej len „Podmienky") upravujú vzťahy medzi
              spoločnosťou Tatrazone s.r.o., so sídlom Hlavná 123, 811 01 Bratislava,
              IČO: 12345678, zapísanou v Obchodnom registri Okresného súdu Bratislava I,
              Oddiel: Sro, Vložka číslo: 12345/R (ďalej len „Predávajúci") a kupujúcim
              (ďalej len „Kupujúci").
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">1. Všeobecné ustanovenia</h2>
            <p className="text-gray-600">
              Tieto obchodné podmienky sa vzťahujú na nákup tovaru prostredníctvom
              internetového obchodu Tatrazone umiestneného na webovej stránke
              www.tatrazone.com. Kupujúci odoslaním objednávky potvrdzuje, že sa
              oboznámil s týmito obchodnými podmienkami a súhlasí s nimi.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">2. Objednávka a uzavretie kúpnej zmluvy</h2>
            <p className="text-gray-600">
              Objednávka je Kupujúcim vykonaná prostredníctvom elektronického
              objednávkového systému. Po odoslaní objednávky Kupujúci obdrží
              automatické potvrdenie o prijatí objednávky. Kúpna zmluva je uzavretá
              až po potvrdení objednávky zo strany Predávajúceho.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">3. Cena a platobné podmienky</h2>
            <p className="text-gray-600">
              Ceny uvedené pri jednotlivých produktoch sú konečné, vrátane DPH.
              Platba môže byť vykonaná nasledujúcimi spôsobmi: platobnou kartou,
              bankovým prevodom alebo dobierkou.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">4. Dodacie podmienky</h2>
            <p className="text-gray-600">
              Tovar je doručovaný prostredníctvom kuriérskej spoločnosti alebo
              Slovenskej pošty. Dodacia lehota je spravidla 2-5 pracovných dní.
              Presné podmienky dopravy sú uvedené v sekcii Doprava a platba.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">5. Odstúpenie od zmluvy</h2>
            <p className="text-gray-600">
              Kupujúci má právo odstúpiť od zmluvy bez udania dôvodu do 14 dní
              odo dňa prevzatia tovaru. Odstúpenie je potrebné zaslať písomne na
              e-mailovú adresu info@tatrazone.com.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">6. Záverečné ustanovenia</h2>
            <p className="text-gray-600">
              Tieto obchodné podmienky sú platné a účinné od 1.1.2024.
              Predávajúci si vyhradzuje právo na ich zmenu. O zmene podmienok
              budú Kupujúci informovaní prostredníctvom webovej stránky.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
