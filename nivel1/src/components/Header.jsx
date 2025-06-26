import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-100 scroll-smooth">
      <h1 className="mb-4 text-5xl font-bold text-gray-800">Página web - N1</h1>
      <p className="max-w-xl p-4 mb-6 text-lg text-gray-700 bg-white rounded shadow">
        Breve descripción de tu negocio o eslogan. Puedes personalizar este texto para captar la atención del cliente.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 text-lg text-white transition bg-blue-600 rounded hover:bg-blue-700"
      >
        Contáctanos
      </a>
    </header>
  );
}