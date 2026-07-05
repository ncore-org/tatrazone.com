import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov Tatrazone.",
};

export default function OchranaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ochrana osobných údajov
          </h1>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
                  Spoločnosť Tatrazone s.r.o. (ďalej len „Prevádzkovateľ") si
                  uvedomuje dôležitosť ochrany osobných údajov a zaväzuje sa
                  chrániť súkromie všetkých svojich zákazníkov.
                </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">
              Aké údaje zhromažďujeme
            </h2>
            <p>
              Zhromažďujeme len údaje, ktoré nám dobrovoľne poskytnete pri
              registrácii, objednávke alebo komunikácii: meno, priezvisko,
              e-mailová adresa, telefónne číslo, fakturačná a dodacia adresa.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">
              Ako údaje používame
            </h2>
            <p>
              Vaše osobné údaje používame výhradne na spracovanie objednávok,
              komunikáciu ohľadom objednávok a zasielanie newslettera (ak ste
              nám na to dali súhlas).
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">
              Súbory cookies
            </h2>
            <p>
              Náš web používa cookies na zlepšenie používateľského zážitku,
              analýzu návštevnosti a personalizáciu obsahu. Súhlas s cookies
              môžete kedykoľvek odvolať v nastaveniach prehliadača.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">
              Vaše práva
            </h2>
            <p>
              Máte právo na prístup k svojim osobným údajom, ich opravu,
              výmaz alebo prenosnosť. Tieto práva môžete uplatniť zaslaním
              žiadosti na info@tatrazone.com.
            </p>

            <p className="text-sm text-gray-400 mt-8">
              Posledná aktualizácia: 1.1.2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
