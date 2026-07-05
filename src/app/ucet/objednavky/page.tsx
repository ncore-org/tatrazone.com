import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moje objednávky",
  description: "História mojich objednávok.",
};

const ORDERS = [
  { id: "2024-00123", date: "15.6.2024", status: "Doručené", total: 89.97, items: 3 },
  { id: "2024-00118", date: "2.6.2024", status: "Na ceste", total: 45.99, items: 1 },
  { id: "2024-00105", date: "18.5.2024", status: "Doručené", total: 129.95, items: 4 },
];

export default function ObjednavkyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Moje objednávky
          </h1>
          <div className="space-y-4">
            {ORDERS.map((order) => (
              <div key={order.id} className="bg-white border border-gray-200 rounded-xl p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Objednávka č.</p>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      order.status === "Doručené" ? "bg-success/10 text-success" :
                      order.status === "Na ceste" ? "bg-warning/10 text-warning" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {order.status}
                    </span>
                    <span className="text-sm text-gray-500">{order.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{order.items} produkty</span>
                  <span className="text-lg font-bold text-gray-900">{order.total.toFixed(2)} €</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href={`/ucet/objednavky/${order.id}`} className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    Zobraziť detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
