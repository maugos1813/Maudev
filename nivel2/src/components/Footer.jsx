import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 text-center text-white bg-blue-900">
      <div className="flex justify-center mb-4 space-x-4">
        <a href="#" className="hover:text-yellow-300">Facebook</a>
        <a href="#" className="hover:text-yellow-300">Instagram</a>
        <a href="#" className="hover:text-yellow-300">LinkedIn</a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Nombre del Negocio. Todos los derechos reservados.</p>
    </footer>
  );
}