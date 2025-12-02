'use client';

import { motion, scale } from 'framer-motion';

const tittleVariante = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
}

const subtitleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: {duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.6 }}
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/hero1.jpg')" }}>
            <div className="absolute inset-0 bg-dark opacity-50"></div>
        </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" variants={tittleVariante} initial="hidden" animate="visible">
            PEDALEA CON{' '}
            <motion.span className="text-primary" initial={{opacity: 0, scale: 0.8 }} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.5}}>CONFIANZA</motion.span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p className="text-xl md:text-2xl font-secondary text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" variants={subtitleVariants} initial="hidden" animate="visible">
            Descubre equipamiento y accesorios premium para ciclistas profesionales y aficionados. Mejora tu rendimiento con RoadPedal.</motion.p>
          
          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" variants={buttonsVariants} initial="hidden" animate="visible">
            <motion.button className="cursor-pointer bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-300 hover-lift transform hover:scale-105"
                    whileHover={{ scale: 1.05}}
                    whileTap={{ scale: 0.95 }}>
              Comprar Ahora
            </motion.button>

            <motion.button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark transition-all duration-300 hover-lift"
                    whileHover={{ scale: 1.05}}
                    whileTap={{ scale: 0.95 }}>
              Leer Más
            </motion.button>
          </motion.div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-400">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}