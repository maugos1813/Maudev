import React from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    formData.append("access_key", "TU_ACCESS_KEY_AQUÍ"); // <-- tu clave aquí

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        icon: "success",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        icon: "error",
      });
    }
  };

  return (
    <section id="contacto" className="px-6 py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">Contáctanos</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 text-lg text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
