// pages/politicas-de-privacidad.js

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apri - Políticas de Privacidad",
  description:
    "Políticas de privacidad de Cerrajería Apri. Información sobre cómo tratamos tus datos personales.",
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
