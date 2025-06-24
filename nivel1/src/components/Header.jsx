export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Nombre del Negocio</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6 bg-white p-4 rounded shadow">
        Breve descripción de tu negocio o eslogan. Puedes personalizar este texto para captar la atención del cliente.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-lg">
        Llamada a la acción
      </button>
    </header>
  );
}
