import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <body className={roboto.className}>
        <main>{children}</main>
        <GoogleAnalytics gaId="G-J3WS1ZH3J6" />
        <GoogleTagManager gtmId="GTM-5VF3JZN2" />
      </body>
    </html>
  );
}
