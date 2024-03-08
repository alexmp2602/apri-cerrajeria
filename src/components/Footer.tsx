import Link from "next/link";
import SmartphoneIcone from "./icons/Smartphone";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-800 dark:bg-gray-800 py-8 mt-6 text-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">¡Contáctanos Ahora!</h2>
        <p className="mt-4">
          Cerrajería Apri las 24 horas, los 7 días a la semana.
        </p>
        <p className="mt-2">La mejor elección para tu Hogar o Vehículo.</p>
        <Link
          className="my-4 inline-flex h-10 items-center justify-center rounded-md bg-yellow-300 dark:bg-yellow-400 p-4 text-sm font-medium text-gray-800 dark:text-gray-800 shadow gap-2 transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-50/90 dark:hover:text-gray-800 dark:focus-visible:ring-gray-300"
          href="tel:+542615188484"
        >
          <SmartphoneIcone />
          Llámanos ahora
        </Link>
      </div>
      <div className="text-center text-sm">
        Cerrajería Apri | Walter Troncoso <br /> © 2024 - Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
