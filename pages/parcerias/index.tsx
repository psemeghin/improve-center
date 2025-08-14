import Layout from "@/components/Layout";

export default function ParceriasPage() {
  return (
    <Layout title="Parcerias — Improve" description="Junte-se à Improve: produtores, fornecedores e vendedores em operação sólida para crescermos juntos.">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Parcerias</h1>
          <p className="text-slate-600">
            Se você é produtor/fornecedor de qualidade ou vendedor com operação sólida,
            queremos construir uma rede confiável e de alto impacto. Preencha o formulário:
          </p>
        </header>

        <form className="rounded-xl border border-slate-200 bg-white/70 shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Nome*</label>
            <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" required />
          </div>
          <div>
            <label className="text-sm font-medium">Empresa</label>
            <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">E‑mail*</label>
            <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" required />
          </div>
          <div>
            <label className="text-sm font-medium">Site</label>
            <input placeholder="https://" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Categorias</label>
            <input placeholder="Suplementos, utensílios, cursos..." className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Mensagem</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Upload (catálogo/portfólio) — PDF até 10MB</label>
            <input type="file" accept="application/pdf" className="mt-1 block" />
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <input id="agree" type="checkbox" className="h-4 w-4" required />
            <label htmlFor="agree" className="text-sm">
              Li e concordo com as políticas da Improve.
            </label>
          </div>
          <div className="md:col-span-2">
            <button className="rounded-md bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700">
              Enviar proposta
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
