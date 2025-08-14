import Head from "next/head";
import Link from "next/link";

const PRODUCTS = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: `Produto ${i + 1}`,
  price: (19.9 + (i % 8) * 3).toFixed(2),
  soon: i % 5 === 0, // alguns com "coming soon"
}));

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Produtos — Improve</title>
        <meta name="description" content="Catálogo completo de produtos Improve." />
      </Head>

      <main className="max-w-7xl mx-auto px-4">
        <div className="h-24 md:h-28" />
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold text-[#0A2540]">Produtos</h1>
          <Link href="/" className="text-sm text-[#0A2540] hover:underline underline-offset-4">
            ← Voltar à Home
          </Link>
        </div>
        <p className="text-slate-700 mt-2">Catálogo com 24 itens (MVP).</p>

        {/* filtros simples (opcional) */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Todos", "Suplementos", "E-books", "Cursos"].map((f) => (
            <button key={f} className="px-3 py-1.5 rounded border border-slate-300 text-sm hover:bg-slate-100">
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="rounded-md shadow-sm bg-white p-4 hover:shadow-lg transition">
              <div className="aspect-square rounded-md bg-slate-200/70" />
              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-sm font-medium">{p.name}</h3>
                {p.soon && <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-slate-300 text-slate-700">coming soon</span>}
              </div>
              <div className="text-sm text-[#0A2540] font-semibold">US$ {p.price}</div>
              <button className="mt-2 w-full rounded border border-slate-300 bg-white py-2 text-sm hover:bg-slate-50">
                Ver produto
              </button>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
