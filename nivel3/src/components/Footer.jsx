import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 mt-20 text-white bg-gray-900">
      <div className="px-6 mx-auto text-center max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <Link to="/servicios" className="hover:underline">
            Servicios
          </Link>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <Link to="/contacto" className="hover:underline">
            Contacto
          </Link>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} MiEmpresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}