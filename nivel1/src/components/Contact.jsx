import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Contacto</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded" />
          <textarea placeholder="Mensaje" className="w-full px-4 py-3 border border-gray-300 rounded h-32"></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg">Enviar</button>
        </form>
      </div>
    </section>
  );
}
