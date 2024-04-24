import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
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
  // Asegura que el título y la descripción tengan valores predeterminados si son null o undefined
  const title = metadata.title ?? "Título predeterminado";
  const description = metadata.description ?? "Descripción predeterminada";

  // Verifica si metadata.icons existe y tiene la propiedad icon, de lo contrario, usa un valor predeterminado
  let iconHref: string = "/favicon.ico"; // Valor predeterminado

  if (
    typeof metadata.icons === "object" &&
    metadata.icons !== null &&
    "icon" in metadata.icons
  ) {
    const icon = metadata.icons.icon;
    if (typeof icon === "string") {
      iconHref = icon;
    } else if (Array.isArray(icon) && icon.length > 0) {
      if (typeof icon[0] === "string") {
        iconHref = icon[0];
      } else if (icon[0] instanceof URL) {
        // Asegurarse explícitamente de que el resultado es tratado como una cadena
        iconHref = icon[0].href; // Usar .href para obtener la cadena directamente
      } else {
        // Asumiendo que el elemento es de tipo IconDescriptor y tiene una propiedad url
        // Aquí también debes asegurarte de que icon[0].url sea una cadena.
        // Si icon[0].url podría ser de un tipo diferente (como URL), necesitas manejarlo adecuadamente.
        iconHref =
          typeof icon[0].url === "string" ? icon[0].url : icon[0].url.href;
      }
    }
  }

  return (
    <>
      <Head>
        <title>{title as string}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={iconHref} />
        {/* Meta etiqueta de verificación de Google Search Console */}
        <meta name="google-site-verification" content="7WWgxFhVNpCczm1PL-D2RyxEWwT5kp0cf_TfA2AjwWA" />
      </Head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J3WS1ZH3J6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J3WS1ZH3J6');
        `}
      </Script>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </>
  );
}