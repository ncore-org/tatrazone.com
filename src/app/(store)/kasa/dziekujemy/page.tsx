import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dziękujemy za zamówienie",
  description: "Twoje zamówienie zostało złożone pomyślnie. Potwierdzenie wysłaliśmy na Twój e-mail.",
};

export default function DziekujemyPage() {
  return (
    <div className="container-site py-16 md:py-20 text-center">
      <div className="max-w-lg mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Dziękujemy za zamówienie! 🎉
        </h1>
        <p className="text-gray-500 mb-2">
          Twoje zamówienie zostało złożone pomyślnie.
        </p>
        <p className="text-gray-500 mb-8">
          Potwierdzenie zamówienia wysłaliśmy na Twój adres e-mail.
          Numer zamówienia: <strong className="text-gray-900">TZ-{String(Math.floor(Math.random() * 100000)).padStart(5, "0")}</strong>
        </p>
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">Co dalej?</h3>
          <ol className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
              Otrzymasz e-mail z potwierdzeniem zamówienia
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
              Przygotujemy Twoje zamówienie w ciągu 24h
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
              Otrzymasz numer przesyłki do śledzenia
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
              Ciesz się swoimi zakupami! 🎁
            </li>
          </ol>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/konto/zamowienia"
            className="bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Moje zamówienia
          </Link>
          <Link
            href="/kategoria"
            className="bg-white text-primary-600 font-medium px-8 py-3 rounded-lg border-2 border-primary-200 hover:border-primary-300 transition-all"
          >
            Kontynuuj zakupy
          </Link>
        </div>
      </div>
    </div>
  );
}
