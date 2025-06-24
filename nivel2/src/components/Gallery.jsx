import React from 'react';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg'
];

export default function Gallery() {
  return (
    <section id="galeria" className="px-6 py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-10 text-3xl font-semibold text-gray-800">Galería</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`galeria-${index}`} className="object-cover w-full rounded shadow h-60" />
          ))}
        </div>
      </div>
    </section>
  );
}