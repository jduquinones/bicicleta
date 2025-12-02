'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const
    }
  },
  tap: {
    scale: 0.95
  }
};

const colorButtonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.9
  }
};

const bicicletaNueva = [
    {
        id: 1,
        nombre: "Bicicleta Montaña Pro",
        precio: "15.999.000",
        especificaciones: "Quick CX, aleación SmartForm C2, AHORRO, tubo de dirección cónico de 1-1/2 a 1-1/8 pulgadas",
        path: "/img/2/3.webp",
        colores: [
            { nombre: "Azul", valor: "blue" },
            { nombre: "Negra", valor: "black" },
            { nombre: "Blanca", valor: "white" }
        ],
        imagenes: [
            "/img/2/1.webp",
            "/img/2/2.webp",
        ]
    }
];

export default function DetalleBicicleta() {
    return (
        <motion.section 
            className="bg-white py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                {bicicletaNueva.map((nueva) => (
                    <motion.div 
                        key={nueva.id} 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                        variants={containerVariants}
                    >

                        {/* Columna 1 - Imagen Principal */}
                        <motion.div 
                            className="flex justify-center"
                            variants={imageVariants}
                        >
                            <div className="relative w-full max-w-md">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image 
                                        src={nueva.path}
                                        alt={nueva.nombre}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto rounded-2xl shadow-lg"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Columna 2 - Información del Producto */}
                        <motion.div 
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <motion.h3 
                                className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold"
                                variants={itemVariants}
                            >
                                NUEVO MODELO
                            </motion.h3>
                            
                            <motion.h1 
                                className="text-4xl lg:text-5xl font-bold text-dark leading-tight font-oxanium"
                                variants={itemVariants}
                            >
                                {nueva.nombre}
                            </motion.h1>
                            
                            <motion.div 
                                className="flex items-center gap-4"
                                variants={itemVariants}
                            >
                                <span className="text-3xl font-bold text-gray-600 font-secondary">
                                    ${nueva.precio}
                                </span>
                                <motion.span 
                                    className="text-primary-600 text-sm font-semibold"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    En stock
                                </motion.span>
                            </motion.div>

                            {/* Especificaciones */}
                            <motion.div 
                                className="space-y-3"
                                variants={itemVariants}
                            >
                                <h4 className="text-dark font-bold tracking-wide font-oxanium">
                                    ESPECIFICACIONES
                                </h4>
                                <motion.p 
                                    className="text-gray-600 leading-relaxed text-lg font-secondary"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                >
                                    {nueva.especificaciones}
                                </motion.p>
                            </motion.div>

                            {/* Colores */}
                            <motion.div 
                                className="space-y-4"
                                variants={itemVariants}
                            >
                                <h4 className="text-lg font-semibold text-dark tracking-wide font-oxanium">
                                    COLORES
                                </h4>
                                <div className="flex gap-4">
                                    {nueva.colores.map((color, index) => (
                                        <motion.button 
                                            key={color.valor}
                                            className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                                                color.valor === 'blue' 
                                                    ? 'bg-blue-500 border-blue-600 shadow-lg scale-110' 
                                                    : color.valor === 'black'
                                                    ? 'bg-gray-900 border-gray-800'
                                                    : 'bg-white border-gray-300'
                                            }`}
                                            title={color.nombre}
                                            variants={colorButtonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Botón */}                
                            <motion.button 
                                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2 hover-lift"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                initial="hidden"
                                whileInView="visible"
                            >
                                Más Información
                                <motion.span 
                                    className="text-xl"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                        </motion.div>

                        {/* Columna 3 - Galería de Imágenes */}
                        <motion.div 
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            {nueva.imagenes.map((imagen, index) => (
                                <motion.div 
                                    key={index} 
                                    className="relative"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image 
                                        src={imagen}
                                        alt={`${nueva.nombre} ${index + 1}`}
                                        width={400}
                                        height={300}
                                        className="w-full h-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                    />
                                </motion.div>            
                            ))}                            
                        </motion.div>
                    </motion.div>
                ))}                
            </div>
        </motion.section>
    );
}