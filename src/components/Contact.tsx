import Link from "next/link";
import SmartphoneIcone from "./icons/Smartphone";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="w-full py-6 md:py-12 lg:py-24 bg-yellow-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8">¡Contáctanos Ahora!</h2>
        <p className="text-lg text-gray-800 mb-4">
          ¿Necesitas ayuda con cerraduras o llaves? ¡Llámanos ahora y estaremos
          en tu ubicación en minutos!
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800 p-4 text-sm font-medium text-gray-50 shadow gap-2 transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-50 dark:hover:bg-gray-50/90 dark:hover:text-gray-800 dark:focus-visible:ring-gray-300"
          href="tel:+542615188484"
        >
          <SmartphoneIcone />
          Llámanos ahora
        </Link>
      </div>
    </section>
  );
}
