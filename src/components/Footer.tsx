"use client";

import { useState } from "react";
import SmartphoneIcone from "./icons/Smartphone";
import Image from "next/image";

export default function Footer() {
  const [phoneNumber] = useState("+5492615188484");

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <footer
      id="contacto"
      className="bg-gray-800 dark:bg-gray-800 mt-6 text-gray-50"
    >
      <div className="container mx-auto text-center py-8 pt-14">
        <h2 className="text-3xl font-bold">¡Contáctanos Ahora!</h2>
        <p className="mt-4">
          Cerrajería Apri las 24 horas, los 7 días a la semana.
        </p>
        <p className="mt-2">La mejor elección para tu Hogar o Vehículo.</p>
        <button
          className="my-6 inline-flex h-10 items-center justify-center rounded-md bg-yellow-300 dark:bg-yellow-400 p-4 text-sm font-medium text-gray-800 dark:text-gray-800 shadow gap-2 transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-50/90 dark:hover:text-gray-800 dark:focus-visible:ring-gray-300"
          onClick={handlePhoneClick}
        >
          <SmartphoneIcone /> Llámanos al +5492615188484
        </button>
      </div>
      <div className="flex gap-2 py-6 shrink-0 px-4">
        <nav className="flex w-full justify-evenly items-center">
          <div className="flex text-xs gap-2 justify-center">
            <a
              href="http://qr.afip.gob.ar/?qr=zSb1W7VsTfG2ShXu9DJtag,,"
              target="_F960AFIPInfo"
            >
              <Image
                src="/DATAWEB.jpg"
                alt="AFIP"
                width={20}
                height={20}
                className="rounded-sm"
              />
            </a>
            <p>
              Cerrajería Apri <br /> De Walter Troncoso
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <a
              href="/politicas-de-privacidad"
              className="text-xs hover:underline underline-offset-4"
            >
              Políticas de Privacidad
            </a>
            <a
              href="tel:+5492615188484"
              className="text-xs hover:underline underline-offset-4"
              style={{ display: "flex", alignItems: "center", gap: "2px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "block" }}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              +5492615188484
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
