import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moje zamówienia",
  description: "Historia zamówień w sklepie Tatrazone. Sprawdź status swoich zamówień.",
};

const orders = [
  { id: "TZ-20250701", date: "2025-07-01", status: "Dostarczone", total: 5298.99, items: 3, statusColor: "text-green-600 bg-green-50" },
  { id: "TZ-20250628", date: "2025-06-28", status: "W realizacji", total: 349.99, items: 1, statusColor: "text-blue-600 bg-blue-50" },
  { id: "TZ-20250615", date: "2025-06-15", status: "Dostarczone", total: 2599.00, items: 2, statusColor: "text-green-600 bg-green-50" },
  { id: "TZ-20250601", date: "2025-06-01", status: "Anulowane", total: 799.00, items: 1, statusColor: "text-red-600 bg-red-50" },
  { id: "TZ-20250520", date: "2025-05-20", status: "Dostarczone", total: 1599.99, items: 4, statusColor: "text-green-600 bg-green-50" },
];

export default function ZamowieniaPage() {
  return (
    <div className="container-site py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Moje zamówienia
      </h1>
      <p className="text-gray-500 text-sm mb-8">Przeglądaj historię swoich zamówień i śledź ich status.</p>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">Zamówienie</p>
                <p className="font-semibold text-gray-900">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data</p>
                <p className="font-medium text-gray-900">
                  {new Date(order.date).toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Produkty</p>
                <p className="font-medium text-gray-900">{order.items} szt.</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Kwota</p>
                <p className="font-bold text-gray-900">{order.total.toFixed(2)} zł</p>
              </div>
              <div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                  {order.status}
                </span>
              </div>
              <Link
                href={`/konto/zamowienia/${order.id}`}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Szczegóły →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
