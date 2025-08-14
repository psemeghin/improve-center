// pages/products/index.tsx
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  price: number;
  category: "Essentials" | "Improving" | string;
  image?: string;
  comingSoon?: boolean;
  summary?: string;
};

const FALLBACK_IMG = "/media/products/default-v1.jpg";

function ProductCard({ p }: { p: Product }) {
  const img = p.image || FALLBACK_IMG;

  return (
    <div className="rounded-xl border border-slate-200 bg-white/70 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-[4/3] bg-slate-100">
        <img src={img} alt={p.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-slate-500">
            {p.category}
          </span>

          {p.comingSoon ? (
            <span className="text-[10px] px-2 py-1 rounded bg-amber-100 text-amber-800">
              coming soon
            </span>
          ) : null}
        </div>

        <h3 className="text-base font-semibold leading-snug">{p.title}</h3>

        {p.summary ? (
          <p className="text-sm text-slate-600 line-clamp-2">{p.summary}</p>
        ) : null}

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-semibold text-slate-800">
            {typeof p.price === "number" ? `$ ${p.price.toFixed(2)}` : "—"}
          </span>

          <Link
            href="#"
            className="text-sm text-emerald-700 hover:text-emerald-800 underline"
          >
            Ver produto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const essentials = (products as Product[]).filter(
    (p) => p.category?.toLowerCase() === "essentials"
  );
  const improving = (products as Product[]).filter(
    (p) => p.category?.toLowerCase() === "improving"
  );

  return (
    <Layout
      title="Produtos — Improve"
      description="Catálogo Improve com as linhas Essentials e Improving."
    >
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-slate-600">
            Catálogo com as categorias <strong>Essentials</strong> e{" "}
            <strong>Improving</strong>.
          </p>
        </header>

        {/* Essentials */}
        <section id="essentials" className="space-y-4">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-semibold">Essentials</h2>
            <Link href="/#products-preview" className="text-emerald-700 hover:underline">
              Voltar à Home
            </Link>
          </div>

          {essentials.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {essentials.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Sem produtos nessa categoria.</p>
          )}
        </section>

        {/* Improving */}
        <section id="improving" className="space-y-4">
          <h2 className="text-xl font-semibold">Improving</h2>

          {improving.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {improving.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Sem produtos nessa categoria.</p>
          )}
        </section>
      </div>
    </Layout>
  );
}
