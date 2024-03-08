import Image from "next/image";
import Link from "next/link";
import SmartphoneIcone from "./icons/Smartphone";

export default function Hero() {
  return (
    <section
      id="banner"
      className="w-full py-14 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container relative flex flex-col gap-4 p-4 text-center md:px-6 lg:space-y-10 lg:px-10">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="bg-white w-60 h-60 rounded-full flex  items-center justify-center">
            <Image
              alt="Cerrajería 24 horas"
              height={180}
              src="/apri.png"
              width={180}
            />
          </div>
          <div>
            <h1 className="text-2xl tracking-tighter sm:text-5xl lg:text-6xl text-white">
              Servicio de Cerrajería Rápida y Confiable
            </h1>
          </div>
        </div>
        <div className="space-y-6">
          <p className="mx-auto max-w-[600px] text-xl md:text-lg lg:text-base text-white">
            ¡Urgencias las 24 horas!
          </p>
          <p className="mb-4 mx-auto max-w-[600px] text-xl md:text-lg lg:text-base text-white">
            Siempre a dispocisión para las soluciones que necesites en todo
            Mendoza
          </p>
          <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800 p-4 text-sm font-medium text-gray-50 shadow gap-2 transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-50 dark:hover:bg-gray-50/90 dark:hover:text-gray-800 dark:focus-visible:ring-gray-300"
          href="tel:+542615188484"
        >
          <SmartphoneIcone />
          ¡Contáctanos ahora!
        </Link>
        </div>
      </div>
    </section>
  );
}
