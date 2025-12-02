"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Categorias = [
  {
    id: 1,
    titulo: "ropa",
    imagen: "/img/3/1.jpg",
    productos: "Sí hay stock",
  },
  {
    id: 2,
    titulo: "personalizacion",
    imagen: "/img/3/2.jpg",
    productos: "Sí hay stock",
  },
  {
    id: 3,
    titulo: "zapatos",
    imagen: "/img/3/3.jpg",
    productos: "Sí hay stock",
  },
  {
    id: 4,
    titulo: "protección",
    imagen: "/img/3/4.jpg",
    productos: "Sí hay stock",
  },
  {
    id: 5,
    titulo: "repuestos",
    imagen: "/img/3/5.jpg",
    productos: "Sí hay stock",
  },
  {
    id: 6,
    titulo: "accesorios",
    imagen: "/img/3/6.jpg",
    productos: "Sí hay stock",
  },
];

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Categoria() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-dark mb-4">
            Explora por <span className="text-primary">Categoría</span>
          </h2>
          <p className="text-xl text-gray-600 font-secondary max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos organizados por categorías para encontrar exactamente lo que
            necesitas
          </p>
        </motion.div>

        {/* Grid de categorías */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {Categorias.map((categoria) => (
            <motion.div
              key={categoria.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Imagen principal */}
              <div className="absolute inset-0">
                <Image
                  src={categoria.imagen}
                  alt={categoria.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay gradiente en la parte inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />

                {/* Overlay primario sutil en hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
              </div>

              {/* Contador de productos - esquina superior derecha */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-dark text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                  {categoria.productos}
                </span>
              </div>

              {/* Icono de categoría - centrado */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                  <span className="text-3xl text-white">🚴‍♀️</span>
                </div>
              </div>

              {/* Contenido en la parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white capitalize font-oxanium mb-1 text-shadow-lg">
                      {categoria.titulo}
                    </h3>
                    <p className="text-white/80 text-sm font-secondary">{categoria.productos} disponible</p>
                  </div>

                  {/* Botón de acción */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </div>

                {/* Barra de progreso sutil */}
                <div className="mt-3 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Efecto de borde en hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action adicional */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="cursor-pointer bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto hover-lift">
            Ver Todas las Categorías
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
