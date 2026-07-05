import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin sklepu internetowego Tatrazone. Warunki korzystania ze sklepu, składania zamówień i prawa konsumenta.",
};

export default function RegulaminPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Regulamin sklepu internetowego
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        Ostatnia aktualizacja: 1 stycznia 2025
      </p>

      <div className="prose prose-gray max-w-3xl space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§1. Postanowienia ogólne</h2>
          <p className="text-gray-600 leading-relaxed">
            1.1. Sklep internetowy Tatrazone (zwany dalej "Sklepem") prowadzony jest przez
            Tatrazone Sp. z o.o. z siedzibą w Warszawie (00-001), ul. Marszałkowska 123,
            wpisaną do Rejestru Przedsiębiorców KRS pod numerem 0000000000, NIP: 525-000-00-00,
            REGON: 000000000.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            1.2. Niniejszy regulamin określa zasady korzystania ze Sklepu internetowego oraz
            zasady i warunki składania zamówień.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            1.3. Każdy Klient korzystający ze Sklepu zobowiązany jest do przestrzegania
            postanowień niniejszego regulaminu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§2. Definicje</h2>
          <ul className="space-y-2 text-gray-600">
            {[
              ["Klient", "osoba fizyczna, osoba prawna lub jednostka organizacyjna dokonująca zamówienia w Sklepie"],
              ["Konsument", "Klient będący osobą fizyczną dokonującą zamówienia niezwiązanego bezpośrednio z działalnością gospodarczą"],
              ["Towar", "produkty oferowane w Sklepie"],
              ["Umowa sprzedaży", "umowa zawarta pomiędzy Klientem a Sklepem na zasadach określonych w regulaminie"],
              ["Kodeks cywilny", "ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny (Dz.U. nr 16, poz. 93 z późn. zm.)"],
            ].map(([term, def]) => (
              <li key={term} className="flex gap-2">
                <span className="font-semibold text-gray-900 min-w-[140px]">{term}</span>
                <span>– {def}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§3. Zamówienia</h2>
          <p className="text-gray-600 leading-relaxed">
            3.1. Zamówienia można składać za pośrednictwem strony internetowej Sklepu 24 godziny na dobę,
            7 dni w tygodniu.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            3.2. Złożenie zamówienia stanowi ofertę zawarcia Umowy sprzedaży zgodnie z regulaminem.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            3.3. Potwierdzenie przyjęcia zamówienia oraz warunków Umowy sprzedaży następuje poprzez
            wysłanie wiadomości e-mail na adres podany przez Klienta.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            3.4. Umowa sprzedaży zostaje zawarta z chwilą wysłania przez Sklep wiadomości e-mail
            potwierdzającej przyjęcie zamówienia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§4. Ceny i płatności</h2>
          <p className="text-gray-600 leading-relaxed">
            4.1. Wszystkie ceny podawane w Sklepie są cenami brutto (zawierają podatek VAT).
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            4.2. Ceny produktów mogą ulec zmianie. Klient otrzymuje potwierdzenie ceny w e-mailu
            potwierdzającym zamówienie.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            4.3. W Sklepie dostępne są następujące metody płatności: karta płatnicza (Visa, Mastercard),
            BLIK, Przelewy24, Google Pay, PayPo oraz za pobraniem.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§5. Dostawa</h2>
          <p className="text-gray-600 leading-relaxed">
            5.1. Wysyłka zamówionego towaru następuje na adres wskazany przez Klienta w formularzu zamówienia.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            5.2. Koszty dostawy są uzależnione od wybranej metody dostawy i wartości zamówienia.
            Szczegółowe informacje znajdują się na stronie Dostawa i płatność.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            5.3. Termin realizacji zamówienia wynosi do 24 godzin od momentu potwierdzenia zamówienia,
            a czas dostawy jest uzależniony od wybranej metody.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§6. Prawo odstąpienia od umowy</h2>
          <p className="text-gray-600 leading-relaxed">
            6.1. Konsument ma prawo odstąpić od umowy bez podania przyczyny w terminie 30 dni od daty
            otrzymania towaru.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            6.2. Aby skorzystać z prawa odstąpienia, należy poinformować Sklep o swojej decyzji
            poprzez jednoznaczne oświadczenie (np. e-mail na adres reklamacje@tatrazone.com).
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            6.3. W przypadku odstąpienia od umowy zwracamy wszystkie otrzymane od Konsumenta płatności
            niezwłocznie, nie później niż 14 dni od dnia otrzymania oświadczenia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§7. Reklamacje</h2>
          <p className="text-gray-600 leading-relaxed">
            7.1. Sklep odpowiada za zgodność towaru z umową oraz za wady fizyczne i prawne towaru
            na zasadach określonych w Kodeksie cywilnym.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            7.2. Reklamację można złożyć przez e-mail na adres reklamacje@tatrazone.com lub
            pisemnie na adres siedziby Sklepu.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            7.3. Sklep rozpatruje reklamację w terminie 14 dni od dnia jej otrzymania.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">§8. Postanowienia końcowe</h2>
          <p className="text-gray-600 leading-relaxed">
            8.1. Regulamin wchodzi w życie z dniem opublikowania na stronie Sklepu.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            8.2. Sklep zastrzega sobie prawo do zmiany regulaminu. Zmiany wchodzą w życie w terminie
            14 dni od dnia ich opublikowania.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            8.3. W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy
            Kodeksu cywilnego oraz ustawy o prawach konsumenta.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            8.4. Spory powstałe na tle zawartych umów rozstrzygane będą przez sąd właściwy
            dla siedziby Sklepu.
          </p>
        </section>
      </div>
    </div>
  );
}
