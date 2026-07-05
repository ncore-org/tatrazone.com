"use client";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  discount?: number;
}

export default function CartSummary({
  subtotal,
  shipping,
  discount = 0,
}: CartSummaryProps) {
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Podsumowanie
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Wartość koszyka</span>
          <span>
            {subtotal.toLocaleString("pl-PL", {
              style: "currency",
              currency: "PLN",
            })}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Kod rabatowy</span>
            <span>
              -
              {discount.toLocaleString("pl-PL", {
                style: "currency",
                currency: "PLN",
              })}
            </span>
          </div>
        )}

        <div className="flex justify-between text-gray-500">
          <span>Dostawa</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-600 font-medium">Darmowa</span>
            ) : (
              shipping.toLocaleString("pl-PL", {
                style: "currency",
                currency: "PLN",
              })
            )}
          </span>
        </div>

        <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900 text-base">
          <span>Razem</span>
          <span>
            {total.toLocaleString("pl-PL", {
              style: "currency",
              currency: "PLN",
            })}
          </span>
        </div>

        <p className="text-[10px] text-gray-400">
          Ceny zawierają podatek VAT. Koszty dostawy mogą się różnić w
          zależności od metody dostawy.
        </p>
      </div>
    </div>
  );
}
