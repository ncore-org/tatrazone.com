import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z Tatrazone. Adres, telefon, e-mail oraz formularz kontaktowy. Jesteśmy do Twojej dyspozycji!",
};

export default function KontaktPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Kontakt
      </h1>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Masz pytanie? Chcesz złożyć reklamację? Potrzebujesz pomocy przy zamówieniu?
        Jesteśmy tu dla Ciebie!
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Adres</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Tatrazone Sp. z o.o.<br />
                  ul. Marszałkowska 123<br />
                  00-001 Warszawa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">E-mail</h3>
                <p className="text-gray-600 text-sm mt-1">
                  info@tatrazone.com<br />
                  zamowienia@tatrazone.com<br />
                  reklamacje@tatrazone.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telefon</h3>
                <p className="text-gray-600 text-sm mt-1">
                  +48 22 123 45 67<br />
                  Pon-Pt: 8:00 - 18:00<br />
                  Sob: 9:00 - 14:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Godziny otwarcia</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Poniedziałek - Piątek: 8:00 - 18:00<br />
                  Sobota: 9:00 - 14:00<br />
                  Niedziela: niehandlowa
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900 mb-1">📞 Infolinia</h3>
            <p className="text-sm text-blue-700">
              Masz pytanie? Zadzwoń na naszą infolinię.<br />
              <strong>+48 22 123 45 67</strong> — połączenie według taryfy operatora.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Napisz do nas
            </h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko *</label>
                  <input type="text" id="name" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input type="email" id="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Temat</label>
                <select id="topic" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm bg-white">
                  <option>Zapytanie o produkt</option>
                  <option>Zamówienie i płatność</option>
                  <option>Dostawa i zwroty</option>
                  <option>Reklamacja</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość *</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm resize-none" />
              </div>
              <button type="submit" className="bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
