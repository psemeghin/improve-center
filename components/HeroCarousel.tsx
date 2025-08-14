"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Slide = {
  src: string;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    src: "/media/banners/hero-1.jpg", // coloque seus arquivos aqui
    title: "Wellness. Fitness. Healthness.",
    subtitle: "Science and nature on your side.",
    cta: { label: "Unlock your next level", href: "/products" },
  },
  {
    src: "/media/banners/hero-2.jpg",
    title: "Energy for your best day.",
    subtitle: "Curadoria com evidência científica.",
    cta: { label: "Ver produtos", href: "/products" },
  },
  {
    src: "/media/banners/hero-3.jpg",
    title: "Awaken your full potential.",
    subtitle: "Conteúdo, cursos e e‑books.",
    cta: { label: "Explorar conteúdo", href: "/conteudo" },
  },
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  // autoplay suave
  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => {
      setIdx((p) => (p + 1) % SLIDES.length);
    }, 5000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [idx, paused]);

  return (
    <div
      className="relative rounded-md overflow-hidden bg-slate-200/60"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slide ativo */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          key={SLIDES[idx].src}
          src={SLIDES[idx].src}
          alt={SLIDES[idx].title}
          fill
          priority
          className="object-cover transition-opacity duration-500"
        />
      </div>

      {/* Texto sobreposto (margem esquerda; “ultrapassa” levemente o centro) */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full md:w-[58%] lg:w-[55%] px-6 pb-6">
          <div className="rounded-md bg-white/75 backdrop-blur p-5 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">
              {SLIDES[idx].title}
            </h2>
            <p className="mt-1 text-slate-700">{SLIDES[idx].subtitle}</p>
            {SLIDES[idx].cta && (
              <Link
                href={SLIDES[idx].cta.href}
                className="mt-3 inline-block rounded-md bg-[#0E5162] px-4 py-2 text-white text-sm hover:opacity-90"
              >
                {SLIDES[idx].cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Controles (pontos) */}
      <div className="absolute bottom-3 right-4 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === idx ? "bg-[#0E5162]" : "bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
