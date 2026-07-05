import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

const orders = [
  {
    id: "TZ-20250701",
    date: "2025-07-01",
    status: "Dostarczone",
    statusColor: "text-green-600 bg-green-50",
    total: 5298.99,
    items: [
      { name: "Laptop Gaming XYZ Pro 15", price: 4999, quantity: 1, image: "https://picsum.photos/seed/od1/100/100" },
      { name: "Słuchawki bezprzewodowe QuietSound", price: 299.99, quantity: 1, image: "https://picsum.photos/seed/od2/100/100" },
    ],
    shipping: "Kurier InPost",
    shippingCost: 0,
    payment: "Karta płatnicza",
    address: {
      name: "Jan Kowalski",
      street: "ul. Marszałkowska 123",
      city: "Warszawa",
      zip: "00-001",
    },
  },
  {
    id: "TZ-20250628",
    date: "2025-06-28",
    status: "W realizacji",
    statusColor: "text-blue-600 bg-blue-50",
    total: 349.99,
    items: [
      { name: "Słuchawki bezprzewodowe QuietSound", price: 349.99, quantity: 1, image: "https://picsum.photos/seed/od3/100/100" },
    ],
    shipping: "Paczkomat InPost",
    shippingCost: 0,
    payment: "BLIK",
  },
  {
    id: "TZ-20250615",
    date: "2025-06-15",
    status: "Dostarczone",
    statusColor: "text-green-600 bg-green-50",
    total: 2599.00,
    items: [
      { name: "Smartwatch FitPro X200", price: 799, quantity: 1, image: "https://picsum.photos/seed/od4/100/100" },
      { name: "Smartfon ABC Ultra 5G", price: 1800, quantity: 1, image: "https://picsum.photos/seed/od5/100/100" },
    ],
    shipping: "Kurier DPD",
    shippingCost: 0,
    payment: "Przelewy24",
  },
  {
    id: "TZ-20250601",
    date: "2025-06-01",
    status: "Anulowane",
    statusColor: "text-red-600 bg-red-50",
    total: 799.00,
    items: [
      { name: "Smartwatch FitPro X200", price: 799, quantity: 1, image: "https://picsum.photos/seed/od6/100/100" },
    ],
    shipping: "Paczkomat InPost",
    shippingCost: 0,
    payment: "BLIK",
  },
  {
    id: "TZ-20250520",
    date: "2025-05-20",
    status: "Dostarczone",
    statusColor: "text-green-600 bg-green-50",
    total: 1599.99,
    items: [
      { name: "Głośnik przenośny BoomBox 360", price: 249, quantity: 1, image: "https://picsum.photos/seed/od7/100/100" },
      { name: "Kamera sportowa ActionCam 4K", price: 399, quantity: 1, image: "https://picsum.photos/seed/od8/100/100" },
      { name: "Ekspres do kawy BaristaPro", price: 899, quantity: 1, image: "https://picsum.photos/seed/od9/100/100" },
    ],
    shipping: "Kurier InPost",
    shippingCost: 52.99,
    payment: "Karta płatnicza",
  },
];

export async function generateStaticParams() {
  return orders.map((order) => ({ id: encodeURIComponent(order.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const order = orders.find((o) => o.id === id);
  return {
    title: order ? `Zamówienie ${order.id}` : "Zamówienie nie znalezione",
  };
}

export default async function OrderDetailPage({ params }: Props) {
  const { id } = await params;
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="container-site py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Zamówienie nie znalezione
        </h1>
        <Link
          href="/konto/zamowienia"
          className="text-primary-600 font-medium hover:text-primary-700"
        >
          ← Powrót do zamówień
        </Link>
      </div>
    );
  }

  return (
    <div className="container-site py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Strona główna</Link>
        <span>/</span>
        <Link href="/konto/zamowienia" className="hover:text-primary-600">Moje zamówienia</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{order.id}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Zamówienie {order.id}
          </h1>
          <p className="text-gray-500 text-sm">
            Złożone: {new Date(order.date).toLocaleDateString("pl-PL", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </p>
        </div>
        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${order.statusColor}`}>
          {order.status}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Produkty w zamówieniu</h2>
          {order.items.map((item, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
              <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                <p className="text-sm text-gray-500">Ilość: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">
                  {item.price.toLocaleString("pl-PL", { style: "currency", currency: "PLN" })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary sidebar */}
        <div className="space-y-6">
          {/* Order summary */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Podsumowanie</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Wartość produktów</span>
                <span className="font-medium">
                  {(order.total - (order.shippingCost || 0)).toLocaleString("pl-PL", { style: "currency", currency: "PLN" })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Dostawa</span>
                <span className="font-medium">
                  {order.shippingCost === 0 ? "Darmowa" : order.shippingCost.toLocaleString("pl-PL", { style: "currency", currency: "PLN" })}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between text-base">
                <span className="font-semibold text-gray-900">Razem</span>
                <span className="font-bold text-lg">
                  {order.total.toLocaleString("pl-PL", { style: "currency", currency: "PLN" })}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery & payment */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dostawa i płatność</h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500 block">Sposób dostawy</span>
                <span className="font-medium">{order.shipping}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Płatność</span>
                <span className="font-medium">{order.payment}</span>
              </div>
              {order.address && (
                <div>
                  <span className="text-gray-500 block">Adres dostawy</span>
                  <span className="font-medium block">{order.address.name}</span>
                  <span className="text-gray-600 block">{order.address.street}</span>
                  <span className="text-gray-600 block">{order.address.zip} {order.address.city}</span>
                </div>
              )}
            </div>
          </div>

          <Link
            href="/konto/zamowienia"
            className="block text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Powrót do zamówień
          </Link>
        </div>
      </div>
    </div>
  );
}
