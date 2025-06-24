import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="mb-6 text-5xl font-bold text-blue-800">404</h2>
      <p className="mb-8 text-lg text-gray-700">Página no encontrada</p>
      <Link
        to="/"
        className="inline-block px-8 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Volver al Inicio
      </Link>
    </section>
  );
}