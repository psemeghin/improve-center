import Layout from "../../components/layout";

export default function ParceriasPage() {
  return (
    <Layout title="Parcerias — Improve" description="Seja parceiro da Improve. Produtores, fornecedores, vendedores e dropshippers.">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Parcerias</h1>
          <p className="text-slate-600">Construa com a Improve. Qualidade, compliance e alcance global.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <form className="rounded-xl border border-slate-200 bg-white/70 shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold">Produtor / Fornecedor</h2>
            <input placeholder="Nome *" className="w-full rounded-md border-slate-300" required />
            <input placeholder="Empresa" className="w-full rounded-md border-slate-300" />
            <input type="email" placeholder="E‑mail *" className="w-full rounded-md border-slate-300" required />
            <input placeholder="Site (https://)" className="w-full rounded-md border-slate-300" />
            <input placeholder="País" className="w-full rounded-md border-slate-300" />
            <input placeholder="Categorias (suplementos, utensílios...)" className="w-full rounded-md border-slate-300" />
            <textarea rows={4} placeholder="Mensagem" className="w-full rounded-md border-slate-300" />
            <label className="text-sm flex items-center gap-2"><input type="checkbox" required /> Li e concordo com as políticas da Improve.</label>
            <button className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Enviar proposta</button>
          </form>

          <form className="rounded-xl border border-slate-200 bg-white/70 shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold">Vendedor / Dropshipper</h2>
            <input placeholder="Nome *" className="w-full rounded-md border-slate-300" required />
            <input placeholder="Empresa" className="w-full rounded-md border-slate-300" />
            <input type="email" placeholder="E‑mail *" className="w-full rounded-md border-slate-300" required />
            <input placeholder="Site (https://)" className="w-full rounded-md border-slate-300" />
            <input placeholder="País" className="w-full rounded-md border-slate-300" />
            <input placeholder="Região/vertical que atua..." className="w-full rounded-md border-slate-300" />
            <textarea rows={4} placeholder="Mensagem" className="w-full rounded-md border-slate-300" />
            <label className="text-sm flex items-center gap-2"><input type="checkbox" required /> Li e concordo com as políticas da Improve.</label>
            <button className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Enviar proposta</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
