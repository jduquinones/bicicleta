"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsLetter() {
  const [isHover, setIsHover] = useState(false);
  const [email, setEmail] = useState("");

  // Animaciones para los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  const dotVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <motion.section
      className="relative pb-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container px-4">
        {/* Tarjeta más compacta */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 relative z-10 overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Elemento decorativo de fondo animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"
              animate={{
                x: [0, 100, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ zIndex: -1 }}
            />

            <div className="text-center mb-8">
              <motion.div className="inline-flex items-center gap-2 mb-4" variants={itemVariants}>
                <motion.div className="w-2 h-2 bg-primary rounded-full" variants={dotVariants} animate="animate" />
                <motion.span
                  className="font-secondary font-semibold text-primary text-sm uppercase tracking-wide"
                  variants={itemVariants}
                >
                  Boletín informativo
                </motion.span>
                <motion.div
                  className="w-2 h-2 bg-primary rounded-full"
                  variants={dotVariants}
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                />
              </motion.div>

              <motion.h3
                className="font-primary text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                ¿Listo para pedalear con nosotros?
              </motion.h3>

              <motion.p className="font-secondary text-gray-600 max-w-xl mx-auto" variants={itemVariants}>
                Suscríbete y recibe contenido exclusivo, promociones especiales y todo lo que necesitas saber sobre el
                mundo ciclista.
              </motion.p>
            </div>

            {/* Formulario inline */}
            <motion.div className="max-w-xl mx-auto" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <motion.div className="flex-1" whileFocus="focus" variants={inputVariants}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full px-5 py-3 font-secondary border border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  className="cursor-pointer bg-primary text-white font-secondary font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg whitespace-nowrap relative overflow-hidden"
                >
                  {/* Efecto de brillo en el botón */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: isHover ? "100%" : "-100%",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="relative z-10">Suscribirme</span>
                </motion.button>
              </form>

              <motion.p
                className="font-secondary text-xs text-gray-400 text-center mt-4"
                variants={itemVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Sin spam. Solo contenido de valor para ciclistas.
              </motion.p>
            </motion.div>

            {/* Elementos decorativos flotantes sutiles */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 border border-primary/30 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-4 h-4 border border-secondary/30 rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
