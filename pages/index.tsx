import Layout from "@/components/Layout";
import { products } from "../../data/products"; // caminho relativo p/ evitar erro no build
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <Layout
      title="Produtos — Improve"
      description="Catálogo de produtos Improve: Essenciais e Improving para saúde, performance e bem-estar."
    >
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-16">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Produtos</h1>
          <p className="text-slate-600">
            Explore nossa seleção de produtos essenciais e fórmulas avançadas para otimizar sua vida.
          </p>
        </header>

        {/* Essenciais */}
        <section id="essentials" className="space-y-6">
          <h2 className="text-xl font-semibold">Essentials</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category?.toLowerCase() === "essentials")
              .map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border border-slate-200 bg-white/70 shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="aspect-[1/1] bg-slate-100 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold">{product.name}</h3>
                    {product.priceUSD && (
                      <p className="text-sm text-slate-700">
                        ${product.priceUSD.toFixed(2)}
                      </p>
                    )}
                    <Link
                      href={`/products/${product.id}`}
                      className="text-emerald-700 hover:underline text-sm"
                    >
                      Ver produto
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Improving */}
        <section id="improving" className="space-y-6">
          <h2 className="text-xl font-semibold">Improving</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category?.toLowerCase() === "improving")
              .map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border border-slate-200 bg-white/70 shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="aspect-[1/1] bg-slate-100 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold">{product.name}</h3>
                    {product.priceUSD && (
                      <p className="text-sm text-slate-700">
                        ${product.priceUSD.toFixed(2)}
                      </p>
                    )}
                    <Link
                      href={`/products/${product.id}`}
                      className="text-emerald-700 hover:underline text-sm"
                    >
                      Ver produto
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
