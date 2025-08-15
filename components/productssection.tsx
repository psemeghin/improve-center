import Link from "next/link";
import { products } from "../data/products";

export default function ProductSection() {
  const featured = products.slice(0, 6);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((p) => (
        <div key={p.id} className="rounded-xl border border-slate-200 bg-white/70 shadow-sm overflow-hidden hover:shadow-md transition">
          <div className="aspect-[4/3] bg-slate-100">
            <img src={p.image || "/media/products/default-v1.jpg"} alt={p.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="text-xs uppercase text-slate-500">{p.category}</div>
            <h3 className="text-base font-semibold">{p.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-semibold">{p.priceUSD ? `$ ${p.priceUSD.toFixed(2)}` : "—"}</span>
              <Link href="/products" className="text-sm text-emerald-700 hover:underline">Ver produto</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
