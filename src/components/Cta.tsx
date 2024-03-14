"use client"

import WhatsappIcon from "./icons/Whatsapp";

export default function Cta() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const whatsappUrl = "https://wa.me/+542615188484?text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20sus%20servicios.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full py-6 flex justify-center">
      <button
        className="gap-2 p-4 my-4 inline-flex h-10 items-center justify-center rounded-md bg-green-600 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 active:bg-green-600"
        onClick={handleClick}
      >
      <WhatsappIcon />
        ¡Escribinos y te asesoramos al instante!
      </button>
    </section>
  );
}
