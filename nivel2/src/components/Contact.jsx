import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">Contáctanos</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded" />
          <textarea placeholder="Mensaje" className="w-full h-32 px-4 py-3 border border-gray-300 rounded"></textarea>
          <button className="w-full py-3 text-lg text-white bg-blue-600 rounded hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    </section>
  );
}