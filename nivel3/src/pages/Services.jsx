import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Consultoría Estratégica',
    desc: 'Análisis y planificación para optimizar tus procesos y crecer.',
    icon: '📊',
  },
  {
    title: 'Desarrollo Web a Medida',
    desc: 'Creamos sitios rápidos, seguros y escalables paralando tu marca.',
    icon: '💻',
  },
  {
    title: 'Marketing Digital',
    desc: 'Campañas que convierten y aumentan tu visibilidad.',
    icon: '📈',
  },
  {
    title: 'E‑commerce',
    desc: 'Tiendas online robustas con pasarelas de pago integradas.',
    icon: '🛒',
  },
  {
    title: 'Branding & Diseño',
    desc: 'Creamos identidades visuales coherentes y memorables.',
    icon: '🎨',
  },
  {
    title: 'Soporte & Mantenimiento',
    desc: 'Nos encargamos de que todo siga funcionando al 100%.',
    icon: '🛠️',
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-blue-800 mb-14">Nuestros Servicios</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((s, idx) => (
            <div key={idx} className="flex flex-col p-8 bg-white shadow-lg rounded-xl">
              <div className="mb-6 text-5xl text-blue-600">{s.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-800">{s.title}</h3>
              <p className="flex-1 text-gray-600">{s.desc}</p>
              <Link
                to="/contacto"
                className="inline-block mt-6 font-medium text-blue-600 hover:underline"
              >
                Solicitar Información →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
