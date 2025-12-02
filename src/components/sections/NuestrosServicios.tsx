"use client";

import Image from "next/image";

const ImageService = [
  {
    id: 1,
    pathImage: "/img/4/s1.jpg",
    titulo: "Reparación de bicicletas",
    descripcion:
      "Servicio completo de reparación: desde pinchazos hasta problemas mecánicos complejos. Garantía en todos nuestros trabajos.",
  },
  {
    id: 2,
    pathImage: "/img/4/s2.jpg",
    titulo: "Ajuste de bicicletas",
    descripcion:
      "Personalización y ajuste fino para optimizar tu bicicleta. Ajustamos frenos, cambios, suspensión y posición de manejo.",
  },
  {
    id: 3,
    pathImage: "/img/4/s3.jpg",
    titulo: "Alquiler de bicicletas",
    descripcion:
      "Amplia variedad de bicicletas para alquilar por hora, día o semana. Incluye cascos y accesorios de seguridad.",
  },
];

export default function NuestrosServicios() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4">
        {/* Título opcional */}
        <div className="text-center mb-12">
          <h2 className="font-primary text-3xl md:text-4xl font-bold text-dark mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-secondary">
            Ofrecemos soluciones integrales para ciclistas de todos los niveles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ImageService.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.pathImage}
                  alt={item.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.titulo}</h3>
                <p className="text-gray-600 mb-6 flex-1">{item.descripcion}</p>
                <button className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300 group/btn">
                  Más Información
                  <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">&gt;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
