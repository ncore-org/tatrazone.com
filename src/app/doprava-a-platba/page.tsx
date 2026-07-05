import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doprava a platba",
  description: "Informácie o spôsoboch dopravy a platby v Tatrazone.",
};

export default function DopravaAPlatbaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Doprava a platba
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Spôsoby dopravy</h2>
              <div className="space-y-4">
                {[
                  {
                    method: "Kuriérska služba",
                    price: "4,90 €",
                    free: "Zadarmo pri nákupe nad 50 €",
                    time: "1-2 pracovné dni",
                  },
                  {
                    method: "Slovenská pošta",
                    price: "3,90 €",
                    free: "Zadarmo pri nákupe nad 50 €",
                    time: "2-4 pracovné dni",
                  },
                  {
                    method: "Osobný odber",
                    price: "Zadarmo",
                    time: "Po potvrdení e-mailom",
                    free: "Bratislava",
                  },
                ].map((d) => (
                  <div key={d.method} className="border border-gray-200 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900">{d.method}</h3>
                    <p className="text-sm text-gray-500 mt-1">Cena: {d.price}</p>
                    <p className="text-sm text-success">{d.free}</p>
                    <p className="text-sm text-gray-400">Dodanie: {d.time}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Spôsoby platby</h2>
              <div className="space-y-4">
                {[
                  {
                    method: "Platobná karta",
                    desc: "Visa, Mastercard cez bezpečnú bránu Stripe",
                    icon: "💳",
                  },
                  {
                    method: "Bankový prevod",
                    desc: "IBAN: SK68 1234 5678 9012 3456 7890",
                    icon: "🏦",
                  },
                  {
                    method: "Dobierka",
                    desc: "Platba v hotovosti pri prevzatí (+1,50 €)",
                    icon: "💵",
                  },
                  {
                    method: "Google Pay / Apple Pay",
                    desc: "Rýchla platba cez mobilné zariadenie",
                    icon: "📱",
                  },
                ].map((p) => (
                  <div key={p.method} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{p.method}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
