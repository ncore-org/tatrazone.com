import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstallPrompt from "@/components/pwa/InstallPrompt";
import CookieConsent from "@/components/CookieConsent";
import CartDrawer from "@/components/cart/CartDrawer";
import { Providers } from "@/app/providers";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Tatrazone — Sklep internetowy",
    template: "%s | Tatrazone",
  },
  description:
    "Ponad 10 000 produktów. Bezpieczne zakupy, szybka dostawa, paczkomaty InPost. Sprawdź promocje i nowości!",
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
    title: "Tatrazone — Sklep internetowy",
    description: "Ponad 10 000 produktów. Bezpieczne zakupy, szybka dostawa.",
    url: "https://tatrazone.com",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Tatrazone",
  },

  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563EB",
    "msapplication-tap-highlight": "no",
  },

  keywords: [
    "tatrazone", "sklep internetowy", "zakupy online", "elektronika",
    "Polska", "darmowa dostawa", "promocje", "AGD", "RTV", "moda",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563EB" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <head>
        <link
          rel="apple-touch-icon"
          href="/tatrazone.com/icons/apple-touch-icon.svg"
        />
        <link rel="icon" href="/tatrazone.com/icons/icon-192.svg" />
        <link rel="mask-icon" href="/tatrazone.com/icons/icon-512.svg" color="#2563EB" />
        <meta name="application-name" content="Tatrazone" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <InstallPrompt />
          <CookieConsent />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
