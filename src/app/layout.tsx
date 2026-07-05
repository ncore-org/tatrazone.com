import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstallPrompt from "@/components/pwa/InstallPrompt";

export const metadata: Metadata = {
  title: {
    default: "Tatrazone — Sklep internetowy",
    template: "%s | Tatrazone",
  },
  description:
    "Ponad 10 000 produktów. Bezpieczne zakupy, szybka dostawa, paczkomaty InPost.",
  manifest: "/tatrazone.com/manifest.json",

  alternates: {
    canonical: "https://tatrazone.com",
    languages: {
      "pl-PL": "https://tatrazone.com",
    },
  },

  openGraph: {
    locale: "pl_PL",
    siteName: "Tatrazone",
    type: "website",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tatrazone",
  },

  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563EB",
  },

  keywords: [
    "tatrazone",
    "sklep internetowy",
    "zakupy online",
    "elektronika",
    "Polska",
    "darmowa dostawa",
    "promocje",
  ],
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link
          rel="apple-touch-icon"
          href="/tatrazone.com/icons/apple-touch-icon.svg"
        />
        <link rel="icon" href="/tatrazone.com/icons/icon-192.svg" />
        <link rel="mask-icon" href="/tatrazone.com/icons/icon-512.svg" color="#2563EB" />
        <meta name="application-name" content="Tatrazone" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <InstallPrompt />
      </body>
    </html>
  );
}
