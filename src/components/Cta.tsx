import Link from "next/link";
import WhatsappIcon from "./icons/Whatsapp";

export default function Cta() {
  return (
    <section className="w-full py-12 flex justify-center">
      <Link
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 dark:bg-gray-800 p-4 text-sm font-medium text-gray-50 shadow gap-2 transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-50 dark:hover:bg-gray-50/90 dark:hover:text-gray-800 dark:focus-visible:ring-gray-300"
        href="tel:+542615188484"
      >
        <WhatsappIcon />
        ¡Escribinos y te asesoramos al instante!
      </Link>
    </section>
  );
}
