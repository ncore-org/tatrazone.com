export default function NewsletterSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Bądź na bieżąco
          </h2>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Zapisz się do newslettera i otrzymaj <strong>10% zniżki</strong> na
            pierwsze zakupy. Informacje o promocjach, nowościach i
            bestsellerach.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój adres e-mail"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap shadow-lg"
            >
              Zapisz się
            </button>
          </form>
          <p className="text-blue-200/60 text-xs mt-3">
            Możesz wypisać się w każdej chwili. Polityka prywatności dostępna
            na stronie.
          </p>
        </div>
      </div>
    </section>
  );
}
