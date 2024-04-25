import Link from "next/link";
import WhatsappIcon from "@/components/icons/Whatsapp";
import PhoneIcon from "@/components/icons/Phone";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import Nosotros from "@/components/Nosotros";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Cta />
        <Nosotros />
        <Location />
        <Reviews />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 md:right-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <Link
          href="https://wa.me/+5492615188484?text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          <WhatsappIcon className="h-6 w-6" />
        </Link>
        <Link
          href="tel:+5492615188484"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
        >
          <PhoneIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
