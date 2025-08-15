import Layout from "@/components/Layout";
import { products } from "@/data/products";
import Link from "next/link";

export default function ProductsPage() {
  const essentials = products.filter((p) => p.category === "Essentials");
  const improving = products.filter((p) => p.category === "Improving");

  const Grid = ({ items }: { items: typeof products }) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <div key={p.id} className="rounded-xl border border-slate-200 bg-white/70 shadow-sm overflow-hidden hover:shadow-md transition">
          <div className="aspect-[4/3] bg-slate-100">
            <img src={p.image || "/media/products/default-v1.jpg"} alt={p.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="text-xs uppercase text-slate-500">{p.category}</div>
            <h3 className="text-base font-semibold">{p.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-semibold">{p.priceUSD ? `$ ${p.priceUSD.toFixed(2)}` : "—"}</span>
              <Link href="#" className="text-sm text-emerald-700 hover:underline">Ver produto</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Layout title="Produtos — Improve" description="Catálogo Improve com as linhas Essentials e Improving.">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <header>
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-slate-600">Catálogo em duas categorias.</p>
        </header>

        <section id="essentials" className="space-y-4">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-semibold">Essentials</h2>
            <Link href="/#products" className="text-emerald-700 hover:underline">Voltar à Home</Link>
          </div>
          <Grid items={essentials} />
        </section>

        <section id="improving" className="space-y-4">
          <h2 className="text-xl font-semibold">Improving</h2>
          <Grid items={improving} />
        </section>
      </div>
    </Layout>
  );
}
