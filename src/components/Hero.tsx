import Image from "next/image";

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
            <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-white">
              Servicio de Cerrajería Rápida y Confiable
            </h1>
          </div>
        </div>
        <div className="space-y-6">
          <p className="mx-auto max-w-[600px] text-xl md:text-lg lg:text-base text-white">
            ¡Llegamos en minutos para ayudarte a entrar en tu casa o coche!
          </p>
        </div>
      </div>
    </section>
  );
}
