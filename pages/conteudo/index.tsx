import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const DATA = {
  newsletters: [
    { id: 1, title: "Metabolismo prático", excerpt: "Pequenas mudanças, grande impacto." },
    { id: 2, title: "Sono de elite", excerpt: "Rotinas noturnas eficientes." },
    { id: 3, title: "Micronutrientes essenciais", excerpt: "O que realmente importa." },
  ],
  cursos: [
    { id: 1, title: "Fundamentos de energia", excerpt: "Do combustível certo ao uso eficiente." },
    { id: 2, title: "Nutrição para foco", excerpt: "Macros e performance cognitiva." },
    { id: 3, title: "Respiração & recovery", excerpt: "Técnicas para treinar e recuperar." },
  ],
  ebooks: [
    { id: 1, title: "Detox 21 dias", excerpt: "Estratégia segura baseada em ciência." },
    { id: 2, title: "Manual de hábitos", excerpt: "Pequenos passos, grandes mudanças." },
    { id: 3, title: "Suplementação inteligente", excerpt: "Como escolher o essencial." },
  ],
};

const PLANS = [
  { name: "Starter",  price: "Free",       perks: ["Newsletters full"] },
  { name: "Plus",     price: "U$ 19,99",   perks: ["Newsletters full", "Cursos"] },
  { name: "Pro",      price: "U$ 69,99",   perks: ["Newsletters full", "Cursos", "1 Essencial", "1 Improving"] },
  { name: "Premium",  price: "U$ 99,99",   perks: ["Newsletters full", "Cursos", "2 Essenciais", "2 Improving"] },
];

export default function ConteudoPage() {
  const [tab, setTab] = useState<"newsletters"|"cursos"|"ebooks">("newsletters");

  return (
    <>
      <Head>
        <title>Conteúdo — Improve</title>
        <meta name="description" content="Marketplace de conteúdo Improve: newsletters, cursos e e-books." />
      </Head>

      <main className="max-w-7xl mx-auto px-4">
        <div className="h-24 md:h-28" />
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold text-[#0A2540]">Conteúdo</h1>
          <Link href="/" className="text-sm text-[#0A2540] hover:underline underline-offset-4">
            ← Voltar à Home
          </Link>
        </div>
        <p className="text-slate-700 mt-2">Assinaturas e acervo organizado por categorias.</p>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { key: "newsletters", label: "Newsletters" },
            { key: "cursos", label: "Cursos" },
            { key: "ebooks", label: "E-books" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key as any)}
              className={`px-3 py-1.5 rounded border text-sm ${
                tab === key ? "bg-[#0E5162] text-white border-transparent" : "border-slate-300 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid da categoria ativa */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {DATA[tab].map((item) => (
            <article key={item.id} className="rounded-md shadow-sm bg-white p-4 hover:shadow-lg transition">
              <div className="aspect-[4/3] rounded-md bg-slate-200/70" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.excerpt}</p>
              <button className="mt-3 w-full rounded border border-slate-300 bg-white py-2 text-sm hover:bg-slate-50">
                Ver detalhes
              </button>
            </article>
          ))}
        </div>

        {/* Planos — aparecem SOMENTE aqui */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Planos</h2>
          <p className="text-slate-600 text-sm">Escolha o seu.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-5">
            {PLANS.map((p) => (
              <div key={p.name} className="rounded-md border border-slate-200 bg-white p-4">
                <div className="text-sm text-slate-500">{p.name}</div>
                <div className="text-lg font-bold text-[#0A2540]">{p.price}</div>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  {p.perks.map((perk) => <li key={perk}>• {perk}</li>)}
                </ul>
                <button className="mt-3 w-full rounded bg-[#0E5162] text-white py-2 text-sm hover:opacity-90">
                  Assinar
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
