'use client';

import { motion } from "framer-motion";
import Imagen from "next/image";
import Link from "next/link";



const productosDestacados = [
  {
    id: 1,
    nombre: "Bicicleta Montaña Pro",
    precio: "19.160.000",
    imagen: "/img/montaña.webp",
    categoria: "MTB",
    descripcion: "Bicicleta de montaña profesional con suspensión de 150mm",
    destacado: true
  },
  {
    id: 2,
    nombre: "Bicicleta Carretera Elite",
    precio: "14.790.000",
    imagen: "/img/elite.jpg", 
    categoria: "Carretera",
    descripcion: "Bicicleta de carretera ultraligera para competición",
    destacado: true
  },
  {
    id: 3,
    nombre: "Bicicleta Urbana Style",
    precio: "1.890.000",
    imagen: "/img/urbana.webp",
    categoria: "Urbana",
    descripcion: "Bicicleta urbana elegante para ciudad",
    destacado: false
  },
  {
    id: 4,
    nombre: "Bicicleta Híbrida Adventure",
    precio: "2.500.000",
    imagen: "/img/hibrida.webp",
    categoria: "Híbrida",
    descripcion: "Perfecta para ciudad y caminos secundarios",
    destacado: true
  }
];

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};




export default function EncuentraTuBicicleta() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Titulo rincipal */}
                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.6}}
                    viewport={{ once: true  }}
                >
                    <h2 className="text-4xl font-bold text-dark mb-6">Encuentra Tu <span className="text-primary">Bicicleta</span></h2>
                    <p className="text-xl text-gray-600 font-secondary">Explora nuestra amplia gama de bicicletas para cada tipo de ciclista.</p>
                </motion.div>

                {/* Grid de productos */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true }}>

                    {productosDestacados.map((producto) => (
                        <motion.div key={producto.id} className="bg-whote group rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 " variants={itemVariants}>
                            {/* Imagen*/}
                            <div className="relative h-48 bg-white overflow-hidden group">
                                <div className="w-full h-full flex items-center justify-center transform transition-all duration-500 ease-in-out group-hover:scale-110">
                                    <Imagen 
                                        src={producto.imagen} 
                                        alt={producto.nombre} 
                                        width={250} 
                                        height={500}
                                        className="transition-all duration-500 ease-in-out group-hover:scale-105"
                                    />
                                </div>
                            
                                {/* Overlay sutil al hacer hover */}
                                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                                {producto.destacado && (<div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Destacado</div> )}
                                <div className="absolute top-3 right-3 bg-dark text-white px-3 py-1 rounded-full text-sm">{producto.categoria}</div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 flex flex-col h-64">
                                <h3 className="text-xl font-medium text-dark mb-3">{producto.nombre}</h3>
                                <p className="text-gray-600 text-sm mb-4 font-secondary line-clamp-2">{producto.descripcion}</p>
                                <div className="mb-6"><span className="text-2xl font-bold text-gray-600 font-secondary">${producto.precio}</span></div>
                                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 cursor-pointer">Más Información</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Botón ver todos los productos */}
                <motion.div className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true}}>
                    <Link className="border-2 border-dark text-dark px-8 py-4 rounded-lg font-semibold font-secondary hover:bg-dark hover:text-white transition-all duration-300" href="/tienda">Ver mas</Link>
                </motion.div>
            </div>
        </section>
    );
}