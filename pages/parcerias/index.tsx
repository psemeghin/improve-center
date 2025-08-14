// pages/parcerias/index.tsx
import Layout from "@/components/Layout";

export default function PartnerPage() {
  return (
    <Layout
      title="Parcerias — Improve"
      description="Seja parceiro da Improve. Produtores, fornecedores, vendedores e dropshippers."
    >
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Parcerias</h1>
          <p className="text-slate-600 max-w-3xl">
            Junte-se à Improve. Se você é produtor/fornecedor de qualidade ou vendedor
            com operação sólida, queremos construir uma rede confiável e de alto
            impacto. Preencha os formulários abaixo.
          </p>
        </header>

        {/* Tabs simples (placeholder) */}
        <div className="rounded-xl border border-slate-200 bg-white/70 p-3 text-sm text-slate-600">
          <div className="flex gap-4">
            <span className="font-medium text-slate-800">Produtor</span>
            <span className="opacity-60">Vendedor</span>
          </div>
        </div>

        {/* Formulário: Produtor / Fornecedor */}
        <section className="rounded-xl border border-slate-200 bg-white/70 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold">Sou Produtor / Fornecedor</h2>
            <p className="text-sm text-slate-600">
              Qualidade, compliance e rastreabilidade. Conte-nos sobre seus produtos e diferenciais.
            </p>
          </div>

          <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome*</label>
                <input className="mt-1 w-full rounded-md border-slate-300" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Empresa</label>
                <input className="mt-1 w-full rounded-md border-slate-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">E‑mail*</label>
                <input type="email" className="mt-1 w-full rounded-md border-slate-300" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Site</label>
                <input placeholder="https://" className="mt-1 w-full rounded-md border-slate-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">País</label>
                <input className="mt-1 w-full rounded-md border-slate-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Categorias</label>
                <input placeholder="Suplementos, utensílios, cursos..." className="mt-1 w-full rounded-md border-slate-300" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Mensagem</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300" />
            </div>

            <div className="text-sm text-slate-600">
              Upload (catálogo/portfólio) — PDF até 10MB
            </div>
            <input type="file" accept="application/pdf" className="block" />

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" className="rounded border-slate-300" /> Li e concordo com as políticas da Improve.
            </label>

            <div className="pt-2">
              <button className="rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">
                Enviar
              </button>
            </div>
          </form>
        </section>

        {/* Formulário: Vendedor / Dropshipper */}
        <section className="rounded-xl border border-slate-200 bg-white/70 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold">Sou Vendedor / Dropshipper</h2>
            <p className="text-sm text-slate-600">
              Operação transparente, margens claras e acompanhamento. Diga-nos onde você atua e como podemos crescer juntos.
            </p>
          </div>

          <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome*</label>
                <input className="mt-1 w-full rounded-md border-slate-300" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Empresa</label>
                <input className="mt-1 w-full rounded-md border-slate-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">E‑mail*</label>
                <input type="email" className="mt-1 w-full rounded-md border-slate-300" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Site</label>
                <input placeholder="https://" className="mt-1 w-full rounded-md border-slate-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">País</label>
                <input className="mt-1 w-full rounded-md border-slate-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Categorias</label>
                <input placeholder="Região/vertical que atua..." className="mt-1 w-full rounded-md border-slate-300" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Mensagem</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300" />
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" className="rounded border-slate-300" /> Li e concordo com as políticas da Improve.
            </label>

            <div className="pt-2">
              <button className="rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">
                Enviar
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
