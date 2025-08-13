"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Creatina Improve",
    price: "U$ 24,99",
    img: "/media/produto1.jpg",
    tag: "coming soon",
  },
  {
    id: 2,
    name: "Coenzima Q10 Premium",
    price: "U$ 39,99",
    img: "/media/produto2.jpg",
    tag: "coming soon",
  },
  {
    id: 3,
    name: "Omega-3 Essencial",
    price: "U$ 19,99",
    img: "/media/produto3.jpg",
    tag: "coming soon",
  },
  {
    id: 4,
    name: "Multivitamínico Advanced",
    price: "U$ 29,99",
    img: "/media/produto4.jpg",
    tag: "coming soon",
  },
  {
    id: 5,
    name: "Vitamina D + K2",
    price: "U$ 14,99",
    img: "/media/produto5.jpg",
    tag: "coming soon",
  },
];

export default function ProductsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const next = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section
      id="products"
      className="bg-areia/80 backdrop-blur-lg py-12 px-6 md:px-12"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-azul">Produtos</h2>
        <div className="space-x-2">
          <button
            onClick={prev}
            className="bg-white/80 px-3 py-1 rounded hover:bg-white shadow"
          >
            ←
          </button>
          <button
            onClick={next}
            className="bg-white/80 px-3 py-1 rounded hover:bg-white shadow"
          >
            →
          </button>
        </div>
      </div>

      {/* Carrossel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-300">
        {products
          .slice(startIndex, startIndex + itemsPerPage)
          .map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <button className="mt-auto bg-azul text-white px-4 py-2 rounded hover:bg-blue-900 transition">
                  Ver produto
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
