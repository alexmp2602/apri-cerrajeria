import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Link from "next/link";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Nosotros from "@/components/Nosotros";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Cta />
        <Nosotros />
        <Contact />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Cerrajería Apri - 24 horas. Todos los derechos reservados.
        </p>
      </footer>
      <div className="fixed bottom-4 right-4">
        <Link
          href="https://wa.me/+542615188484?text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          <WhatsappIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
