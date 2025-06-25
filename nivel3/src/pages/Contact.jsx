// Contact.jsx
import React from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "TU_ACCESS_KEY");   // pon tu clave aquí

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      }).then((r) => r.json());

      if (!res.success) throw new Error();

      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        icon: "success",
      });
      form.reset();
    } catch {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        icon: "error",
      });
    }
  };

  return (
    <section className="min-h-[80vh] py-24 px-6 bg-white">
      <div className="grid items-start max-w-4xl gap-16 mx-auto md:grid-cols-2">
        {/* Formulario */}
        <div>
          <h2 className="mb-8 text-4xl font-semibold text-center text-blue-800 md:text-left">
            Contáctanos
          </h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono (opcional)"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="w-full h-40 p-4 border border-gray-300 rounded-lg"
              required
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
          <p className="text-gray-600">Teléfono: +51&nbsp;999&nbsp;999&nbsp;999</p>
          <p className="text-gray-600">Correo: info@miempresa.com</p>
          <div className="flex items-center justify-center w-full h-64 text-gray-500 bg-gray-200 rounded-lg">
            Mapa (Google Maps)
          </div>
        </div>
      </div>
    </section>
  );
}
