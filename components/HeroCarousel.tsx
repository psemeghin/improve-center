"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/media/banner1.jpg",
    title: "Unlock your next level",
    subtitle: "Science and nature on your side",
    cta: "Saiba mais",
    link: "#products",
  },
  {
    id: 2,
    image: "/media/banner2.jpg",
    title: "Energy for your best day",
    subtitle: "Let nature be your medicine",
    cta: "Ver produtos",
    link: "#products",
  },
  {
    id: 3,
    image: "/media/banner3.jpg",
    title: "Awaken your full potential",
    subtitle: "Care that transforms",
    cta: "Assinar agora",
    link: "#learn",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagem principal */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-md">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover transition-all duration-700"
            priority
          />
        </div>

        {/* Texto e CTA */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-azul">
            {slides[current].title}
          </h2>
          <p className="text-lg text-gray-700">{slides[current].subtitle}</p>
          <Link
            href={slides[current].link}
            className="inline-block bg-azul text-white px-5 py-2 rounded-md shadow hover:bg-azul/90 transition"
          >
            {slides[current].cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
