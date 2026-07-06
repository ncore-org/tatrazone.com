import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.NODE_ENV === "production" ? "/tatrazone.com" : "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tatrazone — Sklep internetowy",
    short_name: "Tatrazone",
    description:
      "Ponad 10 000 produktów. Dostawa w 24h. Bezpieczne zakupy online.",
    start_url: `${basePath}/?utm_source=pwa`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563EB",
    orientation: "portrait",
    lang: "pl",
    scope: `${basePath}/`,
    categories: ["shopping"],

    icons: [
      {
        src: `${basePath}/icons/icon-192.svg`,
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: `${basePath}/icons/icon-512.svg`,
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: `${basePath}/icons/icon-maskable-512.svg`,
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: `${basePath}/icons/apple-touch-icon.svg`,
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],

    shortcuts: [
      {
        name: "Mój koszyk",
        url: `${basePath}/koszyk`,
        icons: [
          {
            src: `${basePath}/icons/sc-cart.png`,
            sizes: "96x96",
          },
        ],
      },
      {
        name: "Promocje",
        url: `${basePath}/akcje`,
        icons: [
          {
            src: `${basePath}/icons/sc-sale.svg`,
            sizes: "96x96",
          },
        ],
      },
      {
        name: "Moje zamówienia",
        url: `${basePath}/konto/zamowienia`,
        icons: [
          {
            src: `${basePath}/icons/sc-orders.svg`,
            sizes: "96x96",
          },
        ],
      },
      {
        name: "Szukaj",
        url: `${basePath}/szukaj`,
        icons: [
          {
            src: `${basePath}/icons/sc-search.svg`,
            sizes: "96x96",
          },
        ],
      },
    ],

    screenshots: [
      {
        src: `${basePath}/icons/icon-512.svg`,
        sizes: "512x512",
        type: "image/svg+xml",
        form_factor: "narrow",
      },
      {
        src: `${basePath}/icons/icon-512.svg`,
        sizes: "512x512",
        type: "image/svg+xml",
        form_factor: "wide",
      },
    ],
  };
}
