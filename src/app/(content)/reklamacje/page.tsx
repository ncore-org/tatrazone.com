import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reklamacje i zwroty",
  description: "Procedura reklamacji i zwrotów w Tatrazone. Dowiedz się jak złożyć reklamację lub zwrócić towar.",
};

export default function ReklamacjePage() {
  return (
    <div className="container-site py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Reklamacje i zwroty
      </h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Masz prawo do reklamacji towaru niezgodnego z umową oraz do odstąpienia od umowy w ciągu 30 dni.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left column - Returns */}
        <div className="space-y-6">
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-4xl mb-4">↩️</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Zwrot towaru</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Zgodnie z ustawą o prawach konsumenta masz 30 dni na zwrot towaru bez podania przyczyny.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Warunki zwrotu:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Towar musi być w stanie niezmienionym (nieużywany)",
                "Towar musi być w oryginalnym opakowaniu",
                "Do zwrotu dołącz formularz zwrotu lub informację o odstąpieniu od umowy",
                "Koszt zwrotu pokrywa kupujący (z wyjątkiem reklamacji)",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">📝 Formularz zwrotu</h3>
            <p className="text-sm text-gray-600 mb-4">
              Pobierz i wypełnij formularz zwrotu, a następnie wyślij go wraz z towarem na adres:
            </p>
            <div className="bg-white rounded-lg p-4 text-sm text-gray-600">
              Tatrazone Sp. z o.o.<br />
              Dział zwrotów<br />
              ul. Marszałkowska 123<br />
              00-001 Warszawa
            </div>
          </section>
        </div>

        {/* Right column - Complaints */}
        <div className="space-y-6">
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Reklamacja towaru</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Jeśli zakupiony towar ma wadę fizyczną lub prawną, przysługuje Ci prawo do reklamacji.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Jak złożyć reklamację:</h3>
            <ol className="space-y-3 text-sm text-gray-600">
              {[
                "Przygotuj dowód zakupu (paragon, faktura, potwierdzenie zamówienia)",
                "Opisz wadę towaru",
                "Określ żądanie: naprawa, wymiana, obniżenie ceny lub odstąpienie od umowy",
                "Wyślij reklamację na e-mail: reklamacje@tatrazone.com",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">⏱ Czas rozpatrzenia</h3>
            <p className="text-sm text-blue-700">
              Rozpatrujemy reklamacje w terminie do 14 dni od dnia ich otrzymania.
              W przypadku uznania reklamacji, koszty zwrotu pokrywa Sklep.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">📞 Pomoc</h3>
            <p className="text-sm text-gray-600">
              Masz pytania dotyczące reklamacji lub zwrotu? Skontaktuj się z nami:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><strong>E-mail:</strong> reklamacje@tatrazone.com</li>
              <li><strong>Telefon:</strong> +48 22 123 45 67</li>
              <li><strong>Adres:</strong> Tatrazone Sp. z o.o., ul. Marszałkowska 123, 00-001 Warszawa</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
