import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brilex - Si ça brille, c'est Brilex | Leader Algérien des Détergents",
  description:
    "Brilex, leader algérien des produits d'entretien depuis plus de 20 ans. Détergents, désodorisants et insecticides de qualité premium. Excellence industrielle algérienne.",
  keywords: [
    "Brilex",
    "détergent Algérie",
    "produits d'entretien",
    "nettoyant sol",
    "désodorisant",
    "insecticide",
    "usine Algérie",
    "qualité premium",
  ],
  authors: [{ name: "Brilex" }],
  openGraph: {
    title: "Brilex - L'Excellence Industrielle Algérienne",
    description:
      "Leader algérien des produits d'entretien. 20+ ans d'expérience, 48 wilayas couvertes, qualité premium.",
    type: "website",
    locale: "fr_DZ",
    siteName: "Brilex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
