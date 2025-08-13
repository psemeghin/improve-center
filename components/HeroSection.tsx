"use client";

import Image from "next/image";
import { useState } from "react";

const heroSlides = [
  {
    id: 1,
    img: "/media/produto1.jpg",
    title: "Creatina Improve",
    desc: "More energy for your best day.",
    tag: "em breve",
  },
  {
    id: 2,
    img: "/media/produto2.jpg",
    title: "Coenzima Q10 Premium",
    desc: "Science and nature on your side.",
    tag: "em breve",
  },
  {
    id: 3,
    img: "/media/produto3.jpg",
    title: "Omega-3 Essencial",
    desc: "Let nature be your medicine.",
    tag: "em breve",
  },
];

const newsMock = [
  { id: 1, title: "5 hábitos para otimizar sua saúde", date: "14 Ago 2025" },
  { id: 2, title: "Treino matinal: por que ajuda no foco", date: "13 Ago 2025" },
  { id: 3, title: "Micronutrientes que você precisa hoje", date: "12 Ago 2025" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="home"
      className="bg-areia/80 backdrop-blur-lg py-12 px-6 md:px-12 flex flex-col md:flex-row gap-8 items-center"
    >
      {/* Carrossel */}
      <div className="md:w-2/3 relative">
        <div className="overflow-hidden rounded-md shadow-lg">
          <Image
            src={heroSlides[current].img}
            alt={heroSlides[current].title}
            width={800}
            height={450}
            className="object-cover"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-azul">
            {heroSlides[current].title}
          </h2>
          <p className="text-gray-700">{heroSlides[current].desc}</p>
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {heroSlides[current].tag}
          </span>
        </div>

        {/* Controles */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 px-4 py-2 rounded hover:bg-white shadow"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 px-4 py-2 rounded hover:bg-white shadow"
          >
            →
          </button>
        </div>
      </div>

      {/* Notícias */}
      <div className="md:w-1/3">
        <h3 className="text-lg font-semibold mb-4 text-azul">Últimas notícias</h3>
        <ul className="space-y-3">
          {newsMock.map((n) => (
            <li key={n.id} className="border-b pb-2">
              <p className="text-gray-800">{n.title}</p>
              <span className="text-sm text-gray-500">{n.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
