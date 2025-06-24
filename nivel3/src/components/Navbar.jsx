import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 md:inline-block md:px-0 md:py-0 ${
      isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          MiEmpresa
        </Link>
        <button className="md:hidden" onClick={toggle} aria-label="menu">
          <Menu />
        </button>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex md:space-x-8 shadow md:shadow-none`}
        >
          <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className={navLinkClass} onClick={() => setOpen(false)}>
            Nosotros
          </NavLink>
          <NavLink to="/servicios" className={navLinkClass} onClick={() => setOpen(false)}>
            Servicios
          </NavLink>
          <NavLink to="/blog" className={navLinkClass} onClick={() => setOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contacto" className={navLinkClass} onClick={() => setOpen(false)}>
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
