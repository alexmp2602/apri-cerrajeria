"use client"

import Image from "next/image";

// Datos de servicios
const servicios = [
  {
    title: "Apertura de Casa",
    description: "Servicio de apertura de casas las 24 horas.",
    image: "/ap_casa.jpeg",
    link: "apertura-casa",
  },
  {
    title: "Apertura de Auto",
    description: "Servicio de apertura de autos las 24 horas.",
    image: "/ap_auto.jpeg",
    link: "apertura-auto",
  },
  {
    title: "Destrabe de autos y casas",
    description: "Servicio de destrabe de autos y casas.",
    image: "/destrabe.jpeg",
    link: "destrabe",
  },
  {
    title: "Cambio de Combinación",
    description: "Servicio de cambio de combinación de cerraduras.",
    image: "/apri.png",
    link: "cambio-combinacion",
  },
];

export default function Services() {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLButtonElement>, link: string) => {
    e.preventDefault();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5492615188484&text=Hola%20me%20gustar%C3%ADa%20solicitar%20el%20servicio%20de%20*${link}*.`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="servicios" className="w-full py-6 lg:py-12 border-t">
      <div className="container mx-auto grid items-center px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 py-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Servicios Profesionales
          </h2>
          <p className="text-center text-gray-600 md:text-lg lg:text-base">
            En cerrajería Apri somos especialistas en Aperturas, Destrabes,
            Reparación y Cambios de combinación de autos, casas y sistemas de
            seguridad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.title}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <button
                onClick={(e) => handleWhatsAppClick(e, servicio.link)}
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <Image
                  alt={servicio.title}
                  className="mx-auto rounded-lg mb-4"
                  height={250}
                  src={servicio.image}
                  width={400}
                />
                <h3 className="text-lg font-semibold mb-2">{servicio.title}</h3>
                <p className="text-sm text-gray-600">{servicio.description}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
