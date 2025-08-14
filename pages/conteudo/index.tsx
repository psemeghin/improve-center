import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import { contentItems, plans } from "@/data/content";

type Tab = "newsletters" | "cursos" | "ebooks";

export default function ConteudoPage() {
  const [tab, setTab] = useState<Tab>("newsletters");

  const lists = useMemo(() => {
    return {
      newsletters: contentItems.filter(i => i.kind === "newsletter"),
      cursos: contentItems.filter(i => i.kind === "curso"),
      ebooks: contentItems.filter(i => i.kind === "ebook"),
    };
  }, []);

  const current = lists[tab];

  const price = (v?: number | null) =>
    v == null ? "Free" : `US$ ${v.toFixed(2)}`;

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
        <p className="text-slate-700 mt-2">Assinaturas e acervo por categorias.</p>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setTab("newsletters")}
            className={`px-3 py-1.5 rounded border text-sm ${
              tab === "newsletters" ? "bg-[#0E5162] text-white border-transparent" : "border-slate-300 hover:bg-slate-100"
            }`}
          >
            Newsletters
          </button>
          <button
            onClick={() => setTab("cursos")}
            className={`px-3 py-1.5 rounded border text-sm ${
              tab === "cursos" ? "bg-[#0E5162] text-white border-transparent" : "border-slate-300 hover:bg-slate-100"
            }`}
          >
            Cursos
          </button>
          <button
            onClick={() => setTab("ebooks")}
            className={`px-3 py-1.5 rounded border text-sm ${
              tab === "ebooks" ? "bg-[#0E5162] text-white border-transparent" : "border-slate-300 hover:bg-slate-100"
            }`}
          >
            E-books
          </button>
        </div>

        {/* Grid da categoria ativa */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {current.map((item) => (
            <article key={item.id} className="rounded-md shadow-sm bg-white p-4 hover:shadow-lg transition">
              <div className="aspect-[4/3] rounded-md bg-slate-200/70 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.excerpt}</p>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-[#0A2540]">{price(item.priceUSD)}</span>
                {item.comingSoon && (
                  <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-slate-300 text-slate-700">
                    coming soon
                  </span>
                )}
              </div>
              <button className="mt-3 w-full rounded border border-slate-300 bg-white py-2 text-sm hover:bg-slate-50">
                Ver detalhes
              </button>
            </article>
          ))}
        </div>

        {/* Planos — apenas aqui */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Planos</h2>
          <p className="text-slate-600 text-sm">Escolha o seu.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-5">
            {plans.map((p) => (
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

        <div className="h-20" />
      </main>
    </>
  );
}
