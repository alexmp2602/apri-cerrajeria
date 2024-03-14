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
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center text-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">¡Nosotros!</h2>
            <p className="text-gray-600 mb-2 text-pretty">
              En Cerrajería Apri, somos tus expertos confiables en Mendoza para
              servicios de cerrajería en automóviles, hogares y seguridad.
            </p>
            <p className="text-gray-600 mb-2 text-pretty">
              Con años de experiencia, ofrecemos calidad, confianza y precios
              accesibles.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center">
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
                            src="/ntros.jpg"
                            style={{
                              aspectRatio: "600/600",
                            }}
                            width={600}
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Image
                            alt="Nosotros"
                            className="w-full h-auto rounded-lg shadow-lg"
                            height={400}
                            src="/tr1.jpg"
                            style={{
                              aspectRatio: "600/600",
                            }}
                            width={600}
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Image
                            alt="Nosotros"
                            className="w-full h-auto rounded-lg shadow-lg"
                            height={400}
                            src="/tr2.jpg"
                            style={{
                              aspectRatio: "600/600",
                            }}
                            width={600}
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Image
                            alt="Nosotros"
                            className="w-full h-auto rounded-lg shadow-lg"
                            height={400}
                            src="/tr3.jpg"
                            style={{
                              aspectRatio: "600/600",
                            }}
                            width={600}
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Image
                            alt="Nosotros"
                            className="w-full h-auto rounded-lg shadow-lg"
                            height={400}
                            src="/tr4.jpg"
                            style={{
                              aspectRatio: "600/600",
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
