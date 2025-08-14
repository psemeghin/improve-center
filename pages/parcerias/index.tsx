import Head from "next/head";

export default function PartnerPage() {
  return (
    <>
      <Head>
        <title>Parcerias — Improve</title>
        <meta
          name="description"
          content="Parcerias Improve: junte-se como produtor, fornecedor ou vendedor para crescermos com qualidade e transparência."
        />
      </Head>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Parcerias</h1>
          <p className="text-slate-600 max-w-3xl">
            Junte-se à Improve. Se você é produtor/fornecedor de qualidade ou vendedor com
            operação sólida, queremos construir uma rede confiável e de alto impacto.
            Preencha o formulário abaixo:
          </p>
        </header>

        {/* Guia de abas simples (apenas visual por enquanto) */}
        <nav className="flex gap-4 text-sm">
          <span className="rounded-full bg-white/70 backdrop-blur px-3 py-1 border border-slate-200">
            Produtor / Fornecedor
          </span>
          <span className="rounded-full bg-white/50 backdrop-blur px-3 py-1 border border-slate-200">
            Vendedor / Dropshipper
          </span>
        </nav>

        {/* Produtor / Fornecedor */}
        <section className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Sou Produtor / Fornecedor</h2>
            <p className="text-slate-600 text-sm">
              Qualidade, compliance e rastreabilidade. Conte-nos sobre seus produtos e diferenciais.
            </p>

            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Nome*</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Empresa</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">E‑mail*</label>
                <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Site</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">País</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Categorias</label>
                <input placeholder="Suplementos, utensílios, cursos..."
                       className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Mensagem</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">
                  Upload (catálogo/portfólio) — PDF até 10MB
                </label>
                <input type="file" accept="application/pdf"
                       className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white" />
              </div>

              <div className="md:col-span-2 flex items-center gap-2">
                <input id="agree-1" type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <label htmlFor="agree-1" className="text-sm text-slate-700">
                  Li e concordo com as políticas da Improve.
                </label>
              </div>

              <div className="md:col-span-2">
                <button type="button"
                        className="rounded-md bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700">
                  Enviar proposta →
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Vendedor / Dropshipper */}
        <section className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Sou Vendedor / Dropshipper</h2>
            <p className="text-slate-600 text-sm">
              Operação transparente, margens claras e acompanhamento. Conte-nos onde atua e como podemos crescer juntos.
            </p>

            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Nome*</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Empresa</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">E‑mail*</label>
                <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Site</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">País</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Categorias</label>
                <input placeholder="Marketplace, cursos, mídia..."
                       className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div className="md:col-span-2">
                <button type="button"
                        className="rounded-md bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700">
                  Enviar proposta →
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
