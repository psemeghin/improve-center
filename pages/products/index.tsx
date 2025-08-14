import Layout from "@/components/Layout";
import Link from "next/link";
import { products as RAW } from "@/data/products"; // seu arquivo existente

type AnyProduct = {
  id?: string | number;
  slug?: string;
  title?: string;
  name?: string;
  price?: number | string | null;
  image?: string;
  img?: string;
  category?: string; // "Essentials" | "Improving"
  c?: string;
  summary?: string;
};

const asMoney = (p: number | string | null | undefined) => {
  const n = typeof p === "string" ? Number(p) : p ?? 0;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(n);
  } catch {
    return `$ ${n}`;
  }
};

const FALLBACK_IMG = "/media/products/default-v1.jpg";

function Card({ p }: { p: AnyProduct }) {
  const title = p.title ?? p.name ?? "Produto";
  const img = p.image ?? p.img ?? FALLBACK_IMG;
  const href = p.slug ? `/products/${p.slug}` : "#";
  const price = asMoney(p.price);

  return (
    <Link
      href={href}
      className="rounded-xl border border-slate-200 bg-white/70 shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <div className="aspect-[4/3] bg-slate-100">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="text-base font-semibold leading-snug">{title}</h3>
        <p className="text-sm text-slate-600">{price}</p>
        <span className="mt-2 inline-flex text-xs rounded px-2 py-1 bg-emerald-50 text-emerald-700">
          Ver produto
        </span>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  const items: AnyProduct[] = (RAW as unknown as AnyProduct[]) ?? [];
  const essentials = items.filter(
    (p) => (p.category ?? p.c ?? "").toLowerCase() === "essentials"
  );
  const improving = items.filter(
    (p) => (p.category ?? p.c ?? "").toLowerCase() === "improving"
  );

  return (
    <Layout title="Produtos — Improve" description="Catálogo Improve: Essentials & Improving.">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-slate-600">Catálogo com categorias Essentials e Improving.</p>
        </header>

        <section id="essentials" className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold">Essentials</h2>
            <Link href="/#products-preview" className="text-emerald-700 hover:underline">
              Voltar à Home
            </Link>
          </div>
          {essentials.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {essentials.map((p, i) => (
                <Card key={`${p.slug ?? p.title ?? "e"}-${i}`} p={p} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Em breve.</p>
          )}
        </section>

        <section id="improving" className="space-y-4">
          <h2 className="text-xl font-semibold">Improving</h2>
          {improving.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {improving.map((p, i) => (
                <Card key={`${p.slug ?? p.title ?? "i"}-${i}`} p={p} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Em breve.</p>
          )}
        </section>
      </div>
    </Layout>
  );
}
