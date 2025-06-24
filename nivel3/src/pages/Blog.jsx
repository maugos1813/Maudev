import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'articulo-1',
    title: 'Artículo 1',
    excerpt: 'Resumen del artículo 1...'
  },
  {
    slug: 'articulo-2',
    title: 'Artículo 2',
    excerpt: 'Resumen del artículo 2...'
  },
];

export default function Blog() {
  return (
    <section className="min-h-[80vh] py-24 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-blue-800 mb-14">Blog y Noticias</h2>
        <div className="space-y-12">
          {posts.map((post, idx) => (
            <div key={idx} className="p-8 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-3xl font-bold text-gray-800">{post.title}</h3>
              <p className="mb-6 text-gray-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="font-medium text-blue-600 hover:underline"
              >
                Leer más →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}