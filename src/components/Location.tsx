import LocationIcon from "./icons/Location";
import Link from "next/link";
import ClockIcon from "./icons/Clock";

export default function Location() {
  return (
    <section className="py-6 lg:py-12">
      <div className="container mx-auto px-8 md:px-12 flex flex-col md:flex-row items-start gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex gap-2 items-center">
            <LocationIcon />
            <div>
              <h3 className="text-xl font-bold">Dirección</h3>
              <p className="text-sm">
                Tropero Sosa 360, San Jose, Guaymallén, Mendoza
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <div>
              <h3 className="text-xl font-bold">Horarios</h3>
              <p className="text-sm">24 horas, los 7 días a la semana.</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="text-center pt-10 pb-8">
          <Link
            href="https://www.google.com/maps/place/Cerrajeria+APRI.+24hs.+(+URGENCIAS)/@-32.8949951,-68.8088155,17z/data=!4m15!1m8!3m7!1s0x967e0ecae4861ca7:0x4c7fcf79ed295959!2sTropero+Sosa+360,+M5519+San+Jos%C3%A9,+Mendoza!3b1!8m2!3d-32.8949951!4d-68.8088155!16s%2Fg%2F11vr8_gnb5!3m5!1s0x967e0fd25c2a40e5:0xe61daffa536791aa!8m2!3d-32.8949951!4d-68.8088155!16s%2Fg%2F11n86qdw_8?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            Ver ubicación y/o dejar reseña
          </Link>
        </div>
    </section>
  );
}
