import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności sklepu Tatrazone. Dowiedz się, jak chronimy Twoje dane osobowe i jakie masz prawa.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Polityka prywatności
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        Ostatnia aktualizacja: 1 stycznia 2025
      </p>

      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Administrator danych</h2>
          <p className="text-gray-600 leading-relaxed">
            Administratorem Twoich danych osobowych jest Tatrazone Sp. z o.o. z siedzibą w Warszawie
            (00-001), ul. Marszałkowska 123, wpisana do Rejestru Przedsiębiorców KRS pod numerem 0000000000.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Kontakt z administratorem: e-mail: rodo@tatrazone.com, telefon: +48 22 123 45 67.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Zakres zbieranych danych</h2>
          <p className="text-gray-600 leading-relaxed">
            Podczas korzystania ze Sklepu możemy gromadzić następujące dane osobowe:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Adres dostawy</li>
            <li>Adres rozliczeniowy</li>
            <li>Historia zamówień</li>
            <li>Dane dotyczące płatności (przetwarzane przez zewnętrzne bramki płatnicze)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cel przetwarzania danych</h2>
          <p className="text-gray-600 leading-relaxed">
            Twoje dane osobowe przetwarzamy w następujących celach:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
            <li>Realizacja zamówień i umów sprzedaży</li>
            <li>Kontakt w sprawie zamówień</li>
            <li>Obsługa reklamacji i zwrotów</li>
            <li>Marketing bezpośredni (za Twoją zgodą)</li>
            <li>Wysyłka newslettera (za Twoją zgodą)</li>
            <li>Spełnienie obowiązków prawnych (np. księgowych)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Podstawa prawna przetwarzania</h2>
          <p className="text-gray-600 leading-relaxed">
            Przetwarzamy Twoje dane na podstawie:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
            <li>Art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy</li>
            <li>Art. 6 ust. 1 lit. c RODO – obowiązek prawny</li>
            <li>Art. 6 ust. 1 lit. a RODO – Twoja zgoda</li>
            <li>Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Okres przechowywania danych</h2>
          <p className="text-gray-600 leading-relaxed">
            Twoje dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których
            zostały zebrane, a po tym czasie przez okres wymagany przepisami prawa (np. dla celów
            podatkowych i księgowych).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Twoje prawa</h2>
          <p className="text-gray-600 leading-relaxed">
            Przysługuje Ci prawo do:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych („prawo do bycia zapomnianym")</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            <li>Cofnięcia zgody w dowolnym momencie</li>
            <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Pliki cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Nasz Sklep wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia prawidłowego
            działania strony, analizy ruchu oraz dostosowania treści marketingowych.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Możesz zarządzać ustawieniami cookies w swojej przeglądarce internetowej.
            Wyłączenie cookies może wpłynąć na niektóre funkcjonalności Sklepu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Kontakt w sprawie prywatności</h2>
          <p className="text-gray-600 leading-relaxed">
            W sprawach związanych z ochroną danych osobowych skontaktuj się z nami:
            e-mail: rodo@tatrazone.com, telefon: +48 22 123 45 67.
          </p>
        </section>
      </div>
    </div>
  );
}
