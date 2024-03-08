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
    <section id="nosotros" className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center text-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">¡Nosotros!</h2>
            <p className="text-gray-600 mb-4 text-pretty">
              En cerrajería Apri, nos enorgullece ser tus expertos confiables en
              todo lo relacionado con cerrajería en Mendoza. Brindamos los
              mejores servicios especializados para automóviles, hogares y
              sistemas de seguridad. Ya sea que enfrentes una urgencia en medio
              de la noche o necesites asistencia durante el día.
            </p>
            <p className="text-gray-600 mb-4 text-pretty">
              Respaldados por años de experiencia y habilidades técnicas
              avanzadas. Nuestra dedicación a la calidad, la confianza y
              accesibilidad de precios nos distingue como la elección preferida
              para resolver cualquier problema de cerrajería.
            </p>
            <p className="text-gray-600 text-pretty">
              Nos esforzamos por construir relaciones basadas en la honestidad y
              el trato amable. Estos principios son fundamentales para nuestra
              filosofía y constituyen el sello distintivo que nos define.
            </p>
            <p className="text-gray-600 mt-4">
              Ubicados estratégicamente en San José, nos encontramos en el
              corazón de la provincia, listos para servir a toda la comunidad
              con la máxima diligencia.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-3xl font-semibold mb-6">
                  Trabajos realizados
                </h2>
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
