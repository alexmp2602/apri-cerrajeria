"use client";

import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import Star from "./icons/Star";

const reviews = [
  { name: "Nombre 1", text: "Reseña 1", rating: 3 },
  { name: "Nombre 2", text: "Reseña 2", rating: 4 },
  { name: "Nombre 3", text: "Reseña 3", rating: 5 },
  { name: "Nombre 4", text: "Reseña 4", rating: 2 },
  { name: "Nombre 5", text: "Reseña 5", rating: 1 },
];

const ScrollCarouselComponent = () => {
  return (
    <ScrollCarousel margin={15} autoplay autoplaySpeed={0} speed={0}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48 p-4 flex flex-col items-center"
        >
          <div className="flex">
            {Array(review.rating)
              .fill(null)
              .map((_, i) => (
                <Star key={i} />
              ))}
          </div>
          <h4 className="font-bold">{review.name}</h4>
          <p>{review.text}</p>
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default ScrollCarouselComponent;
