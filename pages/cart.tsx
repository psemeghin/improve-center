import Layout from "../components/layout";
export default function CartPage() {
  return (
    <Layout title="Carrinho — Improve">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-bold">Carrinho</h1>
        <p className="text-slate-600 mt-2">Seu carrinho está vazio por enquanto.</p>
      </div>
    </Layout>
  );
}
