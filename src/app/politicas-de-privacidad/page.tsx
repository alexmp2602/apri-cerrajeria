import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function PoliticasDePrivacidad() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header isPrivacyPolicyPage />
      <main className="w-full pt-24 pb-4 flex flex-col items-center justify-center">
        <div className="container px-4 md:px-6">
          <Link
            href="/"
            className="text-blue-500 hover:underline mb-4 inline-block"
          >
            &larr; Volver a la página principal
          </Link>
          <h1 className="text-3xl font-bold mb-8">Políticas de Privacidad</h1>
          <div className="prose max-w-none">
            <p>
              En Cerrajería Apri, valoramos y respetamos tu privacidad. A
              continuación, te explicamos cómo tratamos la información que
              recopilamos cuando visitas nuestro sitio web o utilizas nuestros
              servicios:
            </p>

            <h2 className="text-xl font-bold mt-8 mb-2">
              Recopilación de Información
            </h2>
            <p>
              Cuando visitas nuestro sitio web, podemos recopilar cierta
              información sobre tu visita, como tu dirección IP, la fecha y hora
              de acceso, las páginas que visitaste y el tiempo que pasaste en
              cada página. Esta información nos ayuda a mejorar nuestros
              servicios y la experiencia del usuario.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-2">
              Uso de la Información
            </h2>
            <p>
              La información que recopilamos se utiliza para personalizar tu
              experiencia en nuestro sitio web, mejorar nuestros servicios,
              procesar tus solicitudes y proporcionarte información relevante
              sobre nuestros productos y promociones.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-2">
              Divulgación a Terceros
            </h2>
            <p>
              No vendemos, intercambiamos ni transferimos tu información
              personal a terceros sin tu consentimiento, excepto cuando sea
              necesario para cumplir con la ley o proteger nuestros derechos.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-2">
              Seguridad de la Información
            </h2>
            <p>
              Implementamos medidas de seguridad para proteger tu información
              personal contra pérdida, uso indebido o acceso no autorizado.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
