import Head from "next/head";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  const essentials = products.filter((p) => p.category === "Essentials");
  const improving = products.filter((p) => p.category === "Improving");

  const money = (v: number | null) => (v == null ? "—" : `US$ ${v.toFixed(2)}`);

  return (
    <>
      <Head>
        <title>Produtos — Improve</title>
        <meta name="description" content="Catálogo Improve: Essentials & Improving." />
      </Head>

      <main className="max-w-7xl mx-auto px-4">
        <div className="h-24 md:h-28" />
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold text-[#0A2540]">Produtos</h1>
          <Link href="/" className="text-sm text-[#0A2540] hover:underline underline-offset-4">
            ← Voltar à Home
          </Link>
        </div>
        <p className="text-slate-700 mt-2">Marketplace com categorias Essentials e Improving.</p>

        {/* Essentials */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">Essentials</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {essentials.map((p) => (
              <article key={p.id} className="rounded-md shadow-sm bg-white p-4 hover:shadow-lg transition">
                <div className="aspect-square rounded-md bg-slate-200/70 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{p.name}</h3>
                  {p.comingSoon && (
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-slate-300 text-slate-700">
                      coming soon
                    </span>
                  )}
                </div>
                <div className="text-sm text-[#0A2540] font-semibold">{money(p.priceUSD)}</div>
                <details className="mt-2 text-sm text-slate-700">
                  <summary className="cursor-pointer select-none">Composição</summary>
                  <ul className="mt-1 space-y-1">
                    {p.ingredients.map((ing, idx) => (
                      <li key={idx}>• {ing.name}: {ing.amount} {ing.unit}</li>
                    ))}
                  </ul>
                  {p.doseNotes && <p className="mt-2 text-xs text-slate-500">{p.doseNotes}</p>}
                  {p.notes && <p className="mt-1 text-xs text-slate-500 italic">{p.notes}</p>}
                </details>
                <button className="mt-3 w-full rounded border border-slate-300 bg-white py-2 text-sm hover:bg-slate-50">
                  Ver produto
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Improving */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Improving</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {improving.map((p) => (
              <article key={p.id} className="rounded-md shadow-sm bg-white p-4 hover:shadow-lg transition">
                <div className="aspect-square rounded-md bg-slate-200/70 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{p.name}</h3>
                  {p.comingSoon && (
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-slate-300 text-slate-700">
                      coming soon
                    </span>
                  )}
                </div>
                <div className="text-sm text-[#0A2540] font-semibold">{money(p.priceUSD)}</div>
                <details className="mt-2 text-sm text-slate-700">
                  <summary className="cursor-pointer select-none">Composição</summary>
                  <ul className="mt-1 space-y-1">
                    {p.ingredients.map((ing, idx) => (
                      <li key={idx}>• {ing.name}: {ing.amount} {ing.unit}</li>
                    ))}
                  </ul>
                  {p.doseNotes && <p className="mt-2 text-xs text-slate-500">{p.doseNotes}</p>}
                  {p.notes && <p className="mt-1 text-xs text-slate-500 italic">{p.notes}</p>}
                </details>
                <button className="mt-3 w-full rounded border border-slate-300 bg-white py-2 text-sm hover:bg-slate-50">
                  Ver produto
                </button>
              </article>
            ))}
          </div>
        </section>

        <div className="h-20" />
      </main>
    </>
  );
}
