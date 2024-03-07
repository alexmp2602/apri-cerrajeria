import SmartphoneIcon from "@/components/icons/Smartphone";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-f2f2f2 text-black">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-slate-400">
        <Link className="flex items-center justify-center" href="#">
          <Image
            alt="Cerrajería 24 horas"
            height="50"
            src="/apri.png"
            width="50"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#servicios"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Sobre nosotros
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-4 px-4 text-center md:px-6 lg:space-y-10 lg:px-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cerrajería 24 horas
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Servicio de cerrajería rápido y confiable. Llegamos en minutos
                para ayudarte a entrar en tu casa o coche.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="grid max-w-sm items-start gap-2">

                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-400 px-4 text-sm font-medium text-gray-50 shadow gap-2 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-400 dark:text-gray-900 dark:hover:bg-green-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  <SmartphoneIcon className="h-4 w-4" />
                  2615188484
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="servicios">
          <div className="container grid items-center gap-10 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Nuestros servicios
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ofrecemos una variedad de servicios de cerrajería, desde abrir
                cerraduras hasta instalar sistemas de seguridad.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6 relative group">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Apertura Casa</h3>
                  <p className="text-sm">
                    Servicio de apertura de casas las 24 horas.
                  </p>
                </div>
                <Image
                  alt="Apertura Casa"
                  className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/ap_casa.jpeg"
                  width="550"
                />
              </div>
              <div className="grid gap-6 relative group">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Apertura Auto</h3>
                  <p className="text-sm">
                    Servicio de apertura de autos las 24 horas.
                  </p>
                </div>
                <Image
                  alt="Apertura Auto"
                  className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/ap_auto.jpeg"
                  width="550"
                />
              </div>
              <div className="grid gap-6 relative group">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Destrabe auto & Casa</h3>
                  <p className="text-sm">
                    Servicio de destrabe de autos y casas.
                  </p>
                </div>
                <Image
                  alt="Destrabe auto & Casa"
                  className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/destrabe.jpeg"
                  width="550"
                />
              </div>
              <div className="grid gap-6 relative group">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Cambio de Combinacion</h3>
                  <p className="text-sm">
                    Servicio de cambio de combinación de cerraduras.
                  </p>
                </div>
                <Image
                  alt="Cambio de Combinacion"
                  className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/apri.png"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Cerrajería 24 horas. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos del servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
