"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Zamówienia",
    questions: [
      { q: "Jak złożyć zamówienie?", a: "Zamówienie składasz w kilku prostych krokach: (1) wybierz produkt i dodaj do koszyka, (2) przejdź do koszyka i kliknij 'Przejdź do kasy', (3) wypełnij dane do dostawy, (4) wybierz metodę dostawy i płatności, (5) potwierdź zamówienie. Potwierdzenie otrzymasz na e-mail." },
      { q: "Czy mogę zmienić lub anulować zamówienie?", a: "Możesz zmienić lub anulować zamówienie, jeśli nie zostało jeszcze przekazane do realizacji. Skontaktuj się z nami jak najszybciej telefonicznie lub przez e-mail, a postaramy się pomóc." },
      { q: "Czy otrzymam fakturę do zamówienia?", a: "Tak, każda faktura jest generowana automatycznie i wysyłana na adres e-mail podany przy zamówieniu. Jeśli potrzebujesz faktury VAT, zaznacz odpowiednią opcję w koszyku." },
    ],
  },
  {
    category: "Dostawa",
    questions: [
      { q: "Jakie są koszty dostawy?", a: "Dostawa jest darmowa dla zamówień powyżej 200 zł. Dla zamówień poniżej 200 zł koszt dostawy wynosi od 9,99 zł (Poczta Polska) do 16,99 zł (Kurier DPD). Wysyłamy również Paczkomatem InPost za 12,99 zł." },
      { q: "Jaki jest czas dostawy?", a: "Zamówienia realizujemy w ciągu 24h. Czas dostawy wynosi: Kurier 1-2 dni robocze, Paczkomat InPost 1-2 dni, Poczta Polska 2-4 dni." },
      { q: "Czy wysyłacie za granicę?", a: "Obecnie wysyłamy tylko na terenie Polski. Pracujemy nad uruchomieniem wysyłki do innych krajów UE." },
    ],
  },
  {
    category: "Płatność",
    questions: [
      { q: "Jakie metody płatności są dostępne?", a: "Akceptujemy: karty płatnicze (Visa, Mastercard), BLIK, Przelewy24, Google Pay, PayPo (zakupy na raty) oraz płatność za pobraniem." },
      { q: "Czy płatność jest bezpieczna?", a: "Tak, wszystkie płatności są w pełni bezpieczne. Korzystamy z certyfikatu SSL oraz sprawdzonych bramek płatniczych (Przelewy24). Twoje dane są szyfrowane i chronione." },
      { q: "Czy mogę zapłacić przy odbiorze?", a: "Tak, oferujemy płatność za pobraniem. Należy jednak pamiętać, że za tę usługę doliczana jest dodatkowa opłata w wysokości 5 zł." },
    ],
  },
  {
    category: "Zwroty i reklamacje",
    questions: [
      { q: "Jaki jest termin na zwrot towaru?", a: "Masz 30 dni na zwrot towaru bez podania przyczyny, zgodnie z ustawą o prawach konsumenta. Towar musi być w stanie niezmienionym, w oryginalnym opakowaniu." },
      { q: "Jak złożyć reklamację?", a: "Reklamację możesz złożyć przez e-mail na adres reklamacje@tatrazone.com lub wysyłając list na adres naszej siedziby. Odpowiadamy na reklamacje w ciągu 14 dni." },
      { q: "Kto pokrywa koszty zwrotu?", a: "Koszty zwrotu w przypadku odstąpienia od umowy pokrywa kupujący. W przypadku reklamacji - koszty zwrotu pokrywa sprzedawca." },
    ],
  },
  {
    category: "Konto i karta stałego klienta",
    questions: [
      { q: "Jak założyć konto?", a: "Konto możesz założyć w kilkanaście sekund. Kliknij 'Załóż konto' w prawym górnym rogu, podaj adres e-mail, imię i hasło. Możesz również zalogować się przez Google." },
      { q: "Czy posiadanie konta jest płatne?", a: "Nie, posiadanie konta w Tatrazone jest całkowicie darmowe. Daje Ci dostęp do historii zamówień, listy ulubionych i szybszego składania zamówień." },
    ],
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  let globalIndex = 0;

  return (
    <div className="container-site py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        FAQ - Najczęściej zadawane pytania
      </h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Masz pytanie? Sprawdź, czy odpowiedź znajduje się poniżej. Jeśli nie – skontaktuj się z nami!
      </p>

      <div className="max-w-3xl space-y-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-500 rounded-full" />
              {section.category}
            </h2>
            <div className="space-y-2">
              {section.questions.map((faq) => {
                const idx = globalIndex++;
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 text-sm md:text-base pr-4">
                        {faq.q}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
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
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
