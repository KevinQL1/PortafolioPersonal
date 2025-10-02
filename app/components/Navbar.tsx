"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // estado del menú móvil

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Kevin.dev</h1>

        {/* Links desktop */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-black">Inicio</a></li>
          <li><a href="#about" className="hover:text-black">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-black">Habilidades</a></li>
          <li><a href="#contact" className="hover:text-black">Contacto</a></li>
        </ul>

        {/* Botón Dark Mode */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-6 px-3 py-1 rounded-lg border transition hidden md:block"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Hamburguesa mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-4 p-2 rounded-md border border-gray-400"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 p-4 font-medium">
            <li><a href="#home" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#about" onClick={toggleMenu}>Sobre mí</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Proyectos</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Habilidades</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
            <li>
              <button
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  toggleMenu();
                }}
                className="px-3 py-2 rounded-lg border border-gray-400 transition"
              >
                {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
