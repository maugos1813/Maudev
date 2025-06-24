export default function Contact() {
  return (
    <section className="min-h-[80vh] py-24 px-6 bg-white">
      <div className="grid items-start max-w-4xl gap-16 mx-auto md:grid-cols-2">
        {/* Formulario */}
        <div>
          <h2 className="mb-8 text-4xl font-semibold text-center text-blue-800 md:text-left">Contáctanos</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Teléfono (opcional)"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full h-40 p-4 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 text-lg font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-blue-800">Información</h3>
          <p className="text-gray-600">
            Dirección: Calle Ejemplo 123, Ciudad, País
          </p>
          <p className="text-gray-600">Teléfono: +51 999 999 999</p>
          <p className="text-gray-600">Correo: info@miempresa.com</p>
          <div className="flex items-center justify-center w-full h-64 text-gray-500 bg-gray-200 rounded-lg">
            Mapa (Google Maps)
          </div>
        </div>
      </div>
    </section>
  );
}