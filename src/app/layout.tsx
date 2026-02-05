import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cobro y Gestión de Cartera en Bucaramanga | Pravice",
  description:
    "Especialistas en cobro y gestión de cartera en Bucaramanga y Santander. Recuperamos obligaciones vencidas para empresas y organizaciones mediante procesos legales, responsables y efectivos en Colombia.",

  keywords: [
    "cobro de cartera Bucaramanga",
    "gestión de cartera Bucaramanga",
    "recuperación de cartera Colombia",
    "recaudo de cartera empresas",
    "cobranza legal en Colombia",
    "cobro de cartera sector salud",
  ],

  authors: [{ name: "Pravice" }],
  creator: "Pravice",

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.pravice.com",
    siteName: "Pravice",
    title: "Cobro y Gestión de Cartera en Bucaramanga | Pravice",
    description:
      "Firma especializada en cobro y gestión de cartera en Bucaramanga. Acompañamos a empresas y organizaciones en procesos de recuperación efectiva de obligaciones vencidas.",
    images: [
      {
        url: "/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobro y gestión de cartera en Bucaramanga",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
