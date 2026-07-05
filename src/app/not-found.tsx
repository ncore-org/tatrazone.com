import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strona nie znaleziona",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-primary-200 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Strona nie znaleziona
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Powrót do strony głównej
          </Link>
          <Link
            href="/kategoria"
            className="text-primary-600 font-medium px-8 py-3 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
          >
            Przeglądaj produkty
          </Link>
        </div>
      </div>
    </div>
  );
}
