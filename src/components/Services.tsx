import Image from "next/image";

// Datos de servicios
const servicios = [
    {
      title: "Apertura de Casa",
      description: "Servicio de apertura de casas las 24 horas.",
      image: "/ap_casa.jpeg",
    },
    {
      title: "Apertura de Auto",
      description: "Servicio de apertura de autos las 24 horas.",
      image: "/ap_auto.jpeg",
    },
    {
      title: "Destrabe de autos y casas",
      description: "Servicio de destrabe de autos y casas.",
      image: "/destrabe.jpeg",
    },
    {
      title: "Cambio de Combinación",
      description: "Servicio de cambio de combinación de cerraduras.",
      image: "/apri.png",
    },
  ];

export default function Services() {
    return (
        <section
          id="servicios"
          className="w-full pt-8 lg:py-12 border-t"
        >
          <div className="container grid items-center px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Nuestros servicios
              </h2>
              <p className="text-gray-600 md:text-lg lg:text-base">
                Ofrecemos una variedad de servicios de cerrajería, desde abrir
                cerraduras hasta instalar sistemas de seguridad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
              {servicios.map((servicio) => (
                <div
                  key={servicio.title}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <Image
                    alt={servicio.title}
                    className="mx-auto rounded-lg mb-4"
                    height={250}
                    src={servicio.image}
                    width={400}
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    {servicio.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {servicio.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}