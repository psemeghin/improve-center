"use client";

import Link from "next/link";
import { useRef } from "react";

type Item = { id: number; title: string; excerpt: string; href: string };

const newsletters: Item[] = [
  { id: 1, title: "Metabolismo: 5 ajustes práticos", excerpt: "Pequenas mudanças com impacto grande no dia a dia.", href: "/conteudo" },
  { id: 2, title: "Sono de alta performance", excerpt: "Rotinas noturnas para acordar com energia.", href: "/conteudo" },
  { id: 3, title: "Micronutrientes essenciais", excerpt: "O básico que sustenta seu próximo nível.", href: "/conteudo" },
  { id: 4, title: "Treino em dias corridos", excerpt: "Protocolos curtos com alta efetividade.", href: "/conteudo" },
];

const cursos: Item[] = [
  { id: 1, title: "Fundamentos da energia", excerpt: "Do combustível certo ao uso eficiente.", href: "/conteudo" },
  { id: 2, title: "Nutrição para foco", excerpt: "Planeje seus macros para o melhor dia.", href: "/conteudo" },
  { id: 3, title: "Respiração e performance", excerpt: "Técnicas de respiração para treinar e recuperar.", href: "/conteudo" },
  { id: 4, title: "Força essencial", excerpt: "O programa base para força e longevidade.", href: "/conteudo" },
];

const ebooks: Item[] = [
  { id: 1, title: "Guia Detox 21 dias", excerpt: "Estratégia segura e baseada em ciência.", href: "/conteudo" },
  { id: 2, title: "Manual de hábitos", excerpt: "Pequenos passos para mudanças grandes.", href: "/conteudo" },
  { id: 3, title: "Suplementação inteligente", excerpt: "Como escolher o que realmente importa.", href: "/conteudo" },
  { id: 4, title: "Longevidade prática", excerpt: "Rotinas para qualidade de vida a longo prazo.", href: "/conteudo" },
];

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    features: ["Newsletters full"],
    cta: "Assinar",
    highlight: false,
  },
  {
    id: "plus",
    name: "Plus",
    price: "U$ 19,99",
    features: ["Newsletters full", "Cursos"],
    cta: "Assinar",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "U$ 69,99",
    features: ["Newsletters full", "Cursos", "1 produto essencial", "1 produto Improving"],
    cta: "Assinar",
    highlight: true, // destaque visual
  },
  {
    id: "premium",
    name: "Premium",
    price: "U$ 99,99",
    features: ["Newsletters full", "Cursos", "2 essenciais", "2 Improving"],
    cta: "Assinar",
    highlight: false,
  },
];

function ColumnSlider({
  title,
  items,
  anchor,
}: {
  title: string;
  items: Item[];
  anchor: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div aria-labelledby={anchor} className="space-y-3">
      <h3 id={anchor} className="text-base font-semibold text-azul">
        {title}
      </h3>

      {/* Rail */}
      <div className="relative">
        <div
          ref={railRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pr-2 snap-x snap-mandatory"
        >
          {items.map((it, idx) => (
            <article
              key={it.id}
              className="min-w-[260px] snap-start bg-white/90 backdrop-blur rounded-[4px] shadow-card p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ animation: `fadeSlide 420ms ease ${idx * 60}ms both` }}
            >
              {/* Texto apenas (sem imagem) */}
              <h4 className="font-semibold text-slate-900">{it.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{it.excerpt}</p>
              <Link
                href={it.href}
                className="mt-3 inline-block text-sm font-medium text-azul hover:underline underline-offset-4"
              >
                Ler mais
              </Link>
            </article>
          ))}
        </div>

        {/* Controles */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
          <button
            onClick={() => scrollBy(-280)}
            className="pointer-events-auto rounded-full bg-white/90 shadow px-2 py-1 text-slate-700 hover:bg-white"
            aria-label="Anterior"
          >
            ←
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
          <button
            onClick={() => scrollBy(280)}
            className="pointer-events-auto rounded-full bg-white/90 shadow px-2 py-1 text-slate-700 hover:bg-white"
            aria-label="Próximo"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

function PlansStrip() {
  return (
    <div className="mt-10">
      <h3 className="text-base font-semibold text-azul mb-3">Planos</h3>
      <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pr-2">
        {plans.map((p, idx) => (
          <div
            key={p.id}
            className={[
              "min-w-[220px] rounded-[4px] p-4 shadow-card bg-white/95 backdrop-blur",
              p.highlight ? "ring-2 ring-azul" : "border border-slate-200",
            ].join(" ")}
            style={{ animation: `fadeSlide 420ms ease ${idx * 60}ms both` }}
          >
            <div className="text-xs uppercase tracking-wide text-slate-500">Plano</div>
            <div className="mt-1 text-lg font-bold text-slate-900">{p.name}</div>
            <div className="text-sm text-slate-700 mb-3">{p.price}</div>
            <ul className="text-sm text-slate-700 space-y-1">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <Link
              href="/assinatura"
              className="mt-4 inline-flex rounded-full bg-azul px-4 py-2 text-white text-sm font-medium hover:bg-azul/90"
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LearnSection() {
  return (
    <section
      id="learn"
      className="bg-areia/80 backdrop-blur-lg py-12 px-6 md:px-12 border-t border-slate-200"
    >
      {/* Título da sessão no topo à esquerda */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-azul">Conteúdo</h2>
      </div>

      {/* 3 colunas (cada uma com seu slider horizontal interno) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ColumnSlider title="Newsletters" items={newsletters} anchor="col-newsletters" />
        <ColumnSlider title="Cursos" items={cursos} anchor="col-cursos" />
        <ColumnSlider title="E-books" items={ebooks} anchor="col-ebooks" />
      </div>

      {/* Faixa de planos horizontal pequena */}
      <PlansStrip />

      {/* Animação base */}
      <style jsx>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
