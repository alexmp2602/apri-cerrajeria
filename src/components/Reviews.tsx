"use client";

import React from "react";
import StarIcon from "@/components/icons/Star"; // Importa el StarIcon desde la ruta correcta

const Reviews = () => {
  const reviews = [
    {
      name: "Abril Constantini",
      text: "Walter es increíble, lo llame y a los 15 minutos estaba en mi casa. Se me quedó la llave del auto adentro, el auto cerrado, en 1 minuto la sacó. Lo recomiendo mil veces!! Gracias genio!",
      rating: 5,
    },
    {
      name: "Mayra Celem",
      text: "Muy buen servicio y muy rápido no se demoró nada en llega... En menos de 3 minutos soluciono el problema... Super recomendado.. y muy amable..",
      rating: 4,
    },
    {
      name: "Gabriela Aguilera",
      text: "Lo contacté un día feriado a las 2am, me dijo que en 20 min llegaba y fue exactamente así. Muy puntual y eficaz realizando su trabajo, en 5 min solucionó el problema 👏👏",
      rating: 5,
    },
    {
      name: "Icaro Bicalho",
      text: "Excelente profesional! Vino rápido a ayudarme y con menos de 1min solucionó el problema.",
      rating: 5,
    },
    {
      name: "Alberto Alonso",
      text: "Muy rápida repuesta y muy buena atención!!Muy recomendable!!A las 12 de la noche me salvó las papas con el auto!",
      rating: 5,
    },
  ];

  return (
    <section className="py-6 lg:py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">
          Lo que dicen nuestros clientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col gap-3 border border-gray-200"
            >
              <h4 className="text-lg font-semibold">{review.name}</h4>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
