import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nás",
  description: "Príbeh, hodnoty a vízia spoločnosti Tatrazone.",
};

export default function ONasPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            O nás
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Náš príbeh
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Tatrazone vznikol s jednoduchou víziou – priniesť kvalitné produkty
                  za dostupné ceny s perfektným zákazníckym servisom. Od našich začiatkov
                  sme sa zameriavali na budovanie dôvery a dlhodobých vzťahov s našimi
                  zákazníkmi.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Naše hodnoty
                </h2>
                <ul className="space-y-3">
                  {[
                    { title: "Kvalita", desc: "Vyberáme len produkty, ktoré spĺňajú prísne štandardy kvality." },
                    { title: "Dôvera", desc: "Transparentné obchodné podmienky a ochrana vašich osobných údajov." },
                    { title: "Rýchlosť", desc: "Snažíme sa doručiť vašu objednávku čo najrýchlejšie." },
                    { title: "Spokojnosť", desc: "Váš názor je pre nás dôležitý, neustále sa zlepšujeme." },
                  ].map((v) => (
                    <li key={v.title} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" />
                      <div>
                        <strong className="text-gray-900">{v.title}:</strong>{" "}
                        <span className="text-gray-600">{v.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏪</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Viac ako 10 000 spokojných zákazníkov
                </h3>
                <p className="text-gray-500">Od roku 2024 na slovenskom trhu</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
