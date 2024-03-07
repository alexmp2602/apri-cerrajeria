"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  // Función para detectar el scroll y cambiar el estado de 'scrolling'
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-4 lg:px-6 h-16 flex items-center justify-between fixed w-full z-10 ${
        scrolling ? "bg-gray-800" : "bg-transparent"
      } text-white transition-colors duration-300`}
    >
      <div>
        <Link href="#">
          <div className="flex items-center space-x-2">
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
              <Image
                alt="Cerrajería 24 horas"
                height={30}
                src="/apri.png"
                width={30}
              />
            </div>
          </div>
        </Link>
      </div>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#servicios" className="text-sm hover:underline">
          Servicios
        </Link>
        <Link href="#contacto" className="text-sm hover:underline">
          Contacto
        </Link>
      </nav>
    </header>
  );
}
