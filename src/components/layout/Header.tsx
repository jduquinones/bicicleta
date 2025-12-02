"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/tienda" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="bg-header shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white">
              ROAD<span className="text-primary">PEDAL</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-oxanium transition-all duration-200 ${
                    isActive ? "text-primary font-bold text-lg" : "text-white hover:text-primary font-medium text-lg"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-dark hover:text-primary font-medium transition-colors duration-200">Login</button>
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-all duration-300 hover-lift">
              Inicio
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark hover:text-primary font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <button className="text-dark hover:text-primary font-medium py-2 text-left">Login</button>
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
