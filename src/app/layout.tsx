import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

const metadata: Metadata = {
  title: "Apri - Cerrajería 24 horas",
  description:
    "Servicio de cerrajería rápido y confiable. Llegamos en minutos para ayudarte a entrar en tu casa o coche.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J3WS1ZH3J6"
        ></Script>
        <Script id="google-analytics">
          {`
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
 
   gtag('config', 'G-J3WS1ZH3J6');
  `}
        </Script>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
