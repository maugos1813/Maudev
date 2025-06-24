import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { value: '150+', label: 'Proyectos completados' },
    { value: '5', label: 'Países alcanzados' },
    { value: '20+', label: 'Expertos en el equipo' },
    { value: '98%', label: 'Clientes satisfechos' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-blue-800 md:text-6xl">
          Bienvenido a MiEmpresa
        </h1>
        <p className="max-w-2xl mb-8 text-lg text-gray-700 md:text-xl">
          Soluciones profesionales para tu negocio. Explora nuestros servicios y conoce más sobre nosotros.
        </p>
        <Link
          to="/servicios"
          className="inline-block px-8 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Ver Servicios
        </Link>
      </section>

      {/* Servicios Destacados */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-800 mb-14">Servicios Destacados</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { id: 1, title: 'Consultoría', desc: 'Estrategias personalizadas.' },
              { id: 2, title: 'Desarrollo Web', desc: 'Soluciones digitales a medida.' },
              { id: 3, title: 'Marketing', desc: 'Impulsa tu presencia online.' },
            ].map((s) => (
              <div key={s.id} className="p-8 rounded-lg shadow-md bg-gray-50">
                <h3 className="mb-3 text-2xl font-bold text-blue-700">{s.title}</h3>
                <p className="mb-6 text-gray-600">{s.desc}</p>
                <Link
                  to="/servicios"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Saber más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="px-6 py-24 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-12 text-4xl font-semibold text-blue-800">¿Por qué elegirnos?</h2>
          <div className="grid gap-8 text-lg text-left text-gray-700 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p>Más de 10 años de experiencia brindando soluciones efectivas.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p>Atención personalizada y soporte continuo.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p>Calidad garantizada en cada proyecto.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✅</span>
              <p>Equipo multidisciplinario de expertos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-16 text-4xl font-semibold text-blue-800">Testimonios</h2>
          <div className="space-y-12">
            {[
              { name: 'Cliente 1', text: 'Excelente servicio, superó mis expectativas.' },
              { name: 'Cliente 2', text: 'Profesionales y confiables de principio a fin.' },
            ].map((t, idx) => (
              <div key={idx} className="p-10 bg-gray-100 rounded-lg shadow">
                <p className="mb-4 italic text-gray-700">"{t.text}"</p>
                <h4 className="font-semibold text-blue-800">- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section className="px-6 py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-800 mb-14">Nuestro Trabajo</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center h-56 text-gray-400 bg-white rounded-lg shadow"
              >
                Imagen {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Intermedia */}
      <section className="px-6 py-24 text-center text-white bg-blue-700">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="mb-8 text-lg">
          Contáctanos hoy mismo y comencemos a trabajar juntos.
        </p>
        <Link
          to="/contacto"
          className="inline-block px-8 py-3 font-semibold text-blue-700 transition bg-white rounded-lg hover:bg-gray-100"
        >
          Contáctanos
        </Link>
      </section>

      {/* Métricas */}
      <section className="px-6 py-24 bg-white">
        <div className="grid max-w-6xl gap-12 mx-auto text-center md:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={idx}>
              <h3 className="text-5xl font-bold text-blue-800">{s.value}</h3>
              <p className="mt-2 text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logos */}
      <section className="px-6 py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-10 text-xl font-semibold text-gray-700">Con la confianza de:</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center w-40 h-20 p-6 text-gray-400 bg-white rounded shadow"
              >
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}