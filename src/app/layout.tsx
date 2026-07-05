import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tatrazone | Váš online obchod",
    template: "%s | Tatrazone",
  },
  description:
    "Tatrazone - moderný online obchod s širokým výberom produktov za skvelé ceny. Rýchle doručenie, bezpečná platba.",
  keywords: [
    "tatrazone",
    "online obchod",
    "eshop",
    "nakupovanie",
    "Slovensko",
  ],
  openGraph: {
    title: "Tatrazone - Váš online obchod",
    description: "Moderný online obchod s širokým výberom produktov.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className="flex min-h-screen flex-col">
        <div id="page-wrapper" className="flex flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
