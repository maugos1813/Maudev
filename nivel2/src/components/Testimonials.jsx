import React from 'react';

const testimonials = [
  { name: 'Cliente 1', text: 'Excelente servicio, muy recomendado.' },
  { name: 'Cliente 2', text: 'Profesionales y confiables.' }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="px-6 py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-12 text-3xl font-semibold text-gray-800">Testimonios</h2>
        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded shadow">
              <p className="italic text-gray-600">"{item.text}"</p>
              <h4 className="mt-4 font-semibold text-gray-800">- {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
