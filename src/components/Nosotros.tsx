"use client";

import * as React from "react";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Nosotros() {
  const [plugin, setPlugin] = React.useState<any>(null);

  React.useEffect(() => {
    setPlugin(Autoplay({ delay: 2000, stopOnInteraction: true }));
  }, []);

  return (
    <section id="nosotros" className="py-6 lg:py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center text-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">¡Nosotros!</h2>
            <p className="text-gray-600 mb-4 text-pretty">
              ¡En Cerrajería Apri somos tus expertos confiables en cerrajería en
              Mendoza!
            </p>
            <p className="text-gray-600 mb-4 text-pretty">
              Ofrecemos servicios especializados para automóviles, hogares y
              sistemas de seguridad, con la garantía de calidad y precios
              accesibles. Con años de experiencia y habilidades técnicas
              avanzadas, estamos aquí para ayudarte en cualquier momento del día
              o la noche.
            </p>
            <p className="text-gray-600 mb-4 text-pretty">
              Nuestro compromiso con la calidad, la confianza y la asequibilidad
              nos distingue como la elección preferida para resolver tus
              necesidades de cerrajería. Construimos relaciones basadas en la
              honestidad y el trato amable, valores que son fundamentales para
              nuestra filosofía y que nos definen como empresa.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-6">
                Trabajos realizados
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                {plugin && (
                  <Carousel
                    plugins={[plugin]}
                    className="w-full max-w-md"
                    onMouseEnter={plugin.stop}
                    onMouseLeave={plugin.reset}
                  >
                    {
                      <CarouselContent>
                        <CarouselItem>
                          <Image
                            alt="Nosotros"
                            className="w-full h-auto rounded-lg shadow-lg"
                            height={400}
                            src="/ap_auto.jpeg"
                            style={{
                              aspectRatio: "600/400",
                              objectFit: "cover",
                            }}
                            width={600}
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Image
                            alt="Nosotros"
                            className="w-full h-auto rounded-lg shadow-lg"
                            height={400}
                            src="/ap_casa.jpeg"
                            style={{
                              aspectRatio: "600/400",
                              objectFit: "cover",
                            }}
                            width={600}
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Image
                            alt="Nosotros"
                            className="w-full h-auto rounded-lg shadow-lg"
                            height={400}
                            src="/destrabe.jpeg"
                            style={{
                              aspectRatio: "600/400",
                              objectFit: "cover",
                            }}
                            width={600}
                          />
                        </CarouselItem>
                      </CarouselContent>
                    }
                  </Carousel>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
