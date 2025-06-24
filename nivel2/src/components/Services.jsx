const services = [
    'Servicio 1',
    'Servicio 2',
    'Servicio 3'
  ];
  
  export default function Services() {
    return (
      <section id="servicios" className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-12 text-3xl font-semibold text-gray-800">Nuestros Servicios</h2>
          <div className="flex flex-col justify-center gap-8 md:flex-row">
            {services.map((service, index) => (
              <div key={index} className="w-full p-6 bg-white rounded-lg shadow md:w-1/3">
                <h3 className="text-xl font-medium text-gray-700">{service}</h3>
                <p className="mt-2 text-sm text-gray-500">Descripción breve del servicio.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }