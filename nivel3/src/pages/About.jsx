import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const team = [
    { name: 'Ana', role: 'CEO', photo: 'Foto' },
    { name: 'Luis', role: 'CTO', photo: 'Foto' },
    { name: 'María', role: 'COO', photo: 'Foto' },
  ];

  return (
    <>
      <section className="min-h-[70vh] py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-semibold text-blue-800">Nuestra Historia</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Somos una empresa comprometida con la calidad y la innovación. Desde nuestros inicios en 2012, hemos
            ayudado a decenas de negocios a crecer en el mundo digital.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 bg-blue-50">
        <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-blue-800">Misión</h3>
            <p className="mb-8 leading-relaxed text-gray-700">
              Proporcionar soluciones tecnológicas de vanguardia que impulsen el éxito de nuestros clientes.
            </p>
            <h3 className="mb-6 text-3xl font-semibold text-blue-800">Visión</h3>
            <p className="leading-relaxed text-gray-700">
              Ser líderes en la industria, reconocidos por nuestra innovación y servicio excepcional.
            </p>
          </div>
          <div className="flex items-center justify-center h-64 text-gray-400 bg-white rounded-lg shadow">
            Imagen/Misión-Visión
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-800 mb-14">Nuestro Equipo</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {team.map((m, idx) => (
              <div key={idx} className="p-8 rounded-lg shadow bg-gray-50">
                <div className="flex items-center justify-center mx-auto mb-4 text-gray-500 bg-gray-300 rounded-full w-28 h-28">
                  {m.photo}
                </div>
                <h4 className="mb-1 text-xl font-bold text-blue-800">{m.name}</h4>
                <p className="text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center text-white bg-blue-700">
        <h2 className="mb-6 text-3xl font-semibold">Conoce nuestros servicios</h2>
        <Link
          to="/servicios"
          className="inline-block px-8 py-3 font-semibold text-blue-700 transition bg-white rounded-lg hover:bg-gray-100"
        >
          Ver Servicios
        </Link>
      </section>
    </>
  );
}