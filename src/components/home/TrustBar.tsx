export default function TrustBar() {
  const items = [
    {
      icon: "🚚",
      title: "Darmowa dostawa",
      desc: "Od 200 zł",
    },
    {
      icon: "🔒",
      title: "Bezpieczne zakupy",
      desc: "SSL + Przelewy24",
    },
    {
      icon: "↩️",
      title: "30 dni na zwrot",
      desc: "Bez podania przyczyny",
    },
    {
      icon: "📞",
      title: "Pomoc 24/7",
      desc: "Infolinia + czat",
    },
    {
      icon: "⭐",
      title: "4.8 / 5.0",
      desc: "Opinie klientów",
    },
    {
      icon: "📦",
      title: "InPost Paczkomat",
      desc: "Nadajemy paczkomaty",
    },
  ];

  return (
    <section className="py-8 md:py-10 border-b border-gray-100">
      <div className="container-site">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl mb-1.5">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-sm">
                {item.title}
              </h3>
              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
