import React from 'react';

export default function Header() {
  return (
    <header id="inicio" className="flex flex-col items-center justify-center min-h-screen px-6 text-center text-white bg-gradient-to-r from-blue-900 to-blue-600">
      <h1 className="mb-4 text-5xl font-bold">Nombre del Negocio</h1>
      <p className="max-w-xl mb-6 text-lg">Slogan o frase destacada que represente el negocio.</p>
      <a href="#contacto" className="px-6 py-3 font-semibold text-blue-900 transition bg-yellow-400 rounded hover:bg-yellow-300">Contáctanos</a>
    </header>
  );
}