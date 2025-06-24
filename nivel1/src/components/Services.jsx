import React from 'react';

const services = [
  'Servicio 1',
  'Servicio 2',
  'Servicio 3',
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">Servicios</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 shadow p-8 rounded-lg w-full md:w-1/3">
              <h3 className="text-xl font-medium text-gray-700">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
