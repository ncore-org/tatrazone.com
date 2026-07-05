"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FlashSaleTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const endTime = Date.now() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-8 md:py-10">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚡</div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Flash Sale — nawet -60%!
              </h2>
              <p className="text-red-100 text-sm">
                Promocja ograniczona czasowo. Nie przegap okazji!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {[
                { value: timeLeft.hours, label: "Godz" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sek" },
              ].map((unit) => (
                <div key={unit.label} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[3rem]">
                    <span className="text-2xl font-bold text-white tabular-nums">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[10px] text-white/80 mt-1 block">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/akcje"
              className="bg-white text-red-600 font-bold px-6 py-2.5 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap"
            >
              Skorzystaj
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
