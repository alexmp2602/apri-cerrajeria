"use client";

import React from "react";

import dynamic from "next/dynamic";

const ScrollCarousel = dynamic(() => import("@/components/ScrollCarousel"), {
  ssr: false,
});

const Reviews = () => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">
          Lo que dicen nuestros clientes
        </h3>
      </div>
      <ScrollCarousel />
    </section>
  );
};

export default Reviews;
