import Layout from "../components/layout";
import Link from "next/link";

type CartItem = {
  id: string;
  name: string;
  priceUSD: number;
  qty: number;
  image?: string;
  category?: string;
};

const FALLBACK_IMG = "/media/products/default-v1.jpg";

// 🔹 MOCK: Itens de exemplo (substitua depois por estado/integração real)
const mockCart: CartItem[] = [
  {
    id: "creatina",
    name: "Creatina Gummies",
    priceUSD: 29,
    qty: 1,
    image: "/media/products/creatina.jpg",
    category: "Essentials",
  },
  {
    id: "omega-3",
    name: "Ômega‑3 (EPA/DHA)",
    priceUSD: 28,
    qty: 2,
    image: "/media/products/omega3.jpg",
    category: "Improving",
  },
];

function formatUSD(n: number) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(n);
  } catch {
    return `$ ${n.toFixed(2)}`;
  }
}

export default function CartPage() {
  const items = mockCart; // troque por estado global/DB quando integrar
  const subtotal = items.reduce((acc, it) => acc + it.priceUSD * it.qty, 0);
  const shipping = 0; // MVP: frete zero (definir depois)
  const total = subtotal + shipping;

  return (
    <Layout title="Carrinho — Improve" description="Revise seus itens antes de finalizar a compra.">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* COLUNA ESQUERDA — Itens */}
        <section>
          <h1 className="text-2xl font-bold mb-4">Carrinho</h1>

          {items.length === 0 ? (
            <div className="rounded-xl border border-black/5 bg-white/60 p-8 shadow-sm backdrop-blur text-center">
              <p className="text-slate-600">Seu carrinho está vazio no momento.</p>
              <div className="mt-4">
                <Link
                  href="/products"
                  className="inline-flex rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700"
                >
                  Explorar produtos
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="grid grid-cols-[96px_1fr_auto] gap-4 rounded-xl border border-black/5 bg-white/70 p-3 shadow-sm backdrop-blur"
                >
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100">
                    <img
                      src={it.image || FALLBACK_IMG}
                      alt={it.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500">
                        {it.category ?? "—"}
                      </div>
                      <h3 className="font-semibold leading-snug">{it.name}</h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-600">Qtd:</span>
                      <span className="inline-flex items-center rounded-md border border-slate-300 px-2 py-1">
                        {it.qty}
                      </span>
                      {/* MVP: sem handlers de +/-, apenas visual. Integração vem depois */}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold">{formatUSD(it.priceUSD)}</div>
                    <div className="text-xs text-slate-500 mt-1">
                      {formatUSD(it.priceUSD * it.qty)} total
                    </div>
                    <button
                      className="mt-3 text-xs text-slate-500 underline hover:text-slate-700"
                      // onClick={() => removeItem(it.id)} // integrar depois
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* COLUNA DIREITA — Resumo */}
        <aside className="h-max rounded-xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur lg:sticky lg:top-20">
          <h2 className="text-lg font-semibold">Resumo</h2>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-medium">{formatUSD(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Frete</span>
              <span className="font-medium">{shipping === 0 ? "Grátis" : formatUSD(shipping)}</span>
            </div>
            <div className="h-px bg-slate-200 my-2" />
            <div className="flex justify-between text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{formatUSD(total)}</span>
            </div>
          </div>

          <button
            className="mt-6 w-full rounded-md bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700"
            // onClick={goCheckout} // integrar Stripe/checkout depois
          >
            Finalizar compra
          </button>

          <p className="mt-3 text-xs text-slate-500">
            Ao continuar, você concorda com nossos{" "}
            <Link href="/termos" className="underline hover:text-slate-700">
              Termos
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="underline hover:text-slate-700">
              Política de Privacidade
            </Link>.
          </p>
        </aside>
      </div>
    </Layout>
  );
}
