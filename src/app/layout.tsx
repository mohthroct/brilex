import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brilex - Si ça brille, c'est Brilex | Produits d'entretien",
  description:
    "Brilex, leader algérien des produits d'entretien. Détergents, désodorisants, insecticides et lessives de qualité supérieure. Plus de 20 ans d'expérience.",
  keywords: [
    "Brilex",
    "détergent Algérie",
    "produits d'entretien",
    "nettoyant sol",
    "désodorisant",
    "insecticide",
    "lessive",
    "ménage",
    "Algérie",
  ],
  authors: [{ name: "Brilex" }],
  openGraph: {
    title: "Brilex - Si ça brille, c'est Brilex",
    description:
      "Leader algérien des produits d'entretien. Qualité supérieure depuis plus de 20 ans.",
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
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
