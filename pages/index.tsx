import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Improve — Wellness. Fitness. Healthness.</title>
        <meta name="description" content="Unlock your next level. Science and nature on your side." />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4">
        <div className="h-24 md:h-28" />

        {/* HOME / HERO (prévia) */}
        <section id="home" className="py-12">
          <h1 className="text-4xl font-bold text-[#0A2540]">Unlock your next level</h1>
          <p className="mt-3 text-slate-700">Science and nature on your side.</p>
        </section>

        {/* PRODUCTS (prévia) */}
        <section className="py-12 border-t border-slate-200">
          <div className="flex items-baseline justify-between">
            <Link href="/products" className="text-2xl font-semibold text-slate-900 hover:underline underline-offset-4">
              Produtos
            </Link>
            <Link href="/products" className="text-sm text-[#0A2540] hover:underline underline-offset-4">
              Ver tudo →
            </Link>
          </div>
          <p className="text-slate-600 mt-1">Destaques (amostra de 4–6 itens).</p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[1,2,3,4].map((i) => (
              <article key={i} className="rounded-md shadow-sm bg-white p-4 hover:shadow-lg transition">
                <div className="aspect-square rounded-md bg-slate-200/70" />
                <div className="mt-2 text-sm font-medium">Produto {i}</div>
                <div className="text-sm text-[#0A2540] font-semibold">US$ {(19.9 + i).toFixed(2)}</div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTEÚDO (prévia) */}
        <section className="py-12 border-t border-slate-200">
          <div className="flex items-baseline justify-between">
            <Link href="/conteudo" className="text-2xl font-semibold text-slate-900 hover:underline underline-offset-4">
              Conteúdo
            </Link>
            <Link href="/conteudo" className="text-sm text-[#0A2540] hover:underline underline-offset-4">
              Ver tudo →
            </Link>
          </div>
          <p className="text-slate-600 mt-1">Newsletters, Cursos e E‑books (amostras).</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {["Newsletters", "Cursos", "E-books"].map((col) => (
              <div key={col} className="rounded-md shadow-sm bg-white p-4">
                <div className="text-sm font-semibold">{col}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Item 1 (prévia)</li>
                  <li>• Item 2 (prévia)</li>
                  <li>• Item 3 (prévia)</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PARCERIA (prévia) */}
        <section className="py-12 border-t border-slate-200">
          <div className="flex items-baseline justify-between">
            <Link href="/parcerias" className="text-2xl font-semibold text-slate-900 hover:underline underline-offset-4">
              Parceria
            </Link>
            <Link href="/parcerias" className="text-sm text-[#0A2540] hover:underline underline-offset-4">
              Ver tudo →
            </Link>
          </div>
          <p className="text-slate-600 mt-1">Fornecedores e Vendedores com formulário e upload.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-md shadow-sm bg-white p-5">
              <div className="text-sm font-semibold">Fornecedores</div>
              <p className="text-sm text-slate-700 mt-1">
                Qualidade, rastreabilidade e ciência. Venha fazer parte do sucesso.
              </p>
            </div>
            <div className="rounded-md shadow-sm bg-white p-5">
              <div className="text-sm font-semibold">Vendedores / Dropshippers</div>
              <p className="text-sm text-slate-700 mt-1">
                Catálogo curado e branding forte. Vamos crescer juntos.
              </p>
            </div>
          </div>
        </section>

        {/* OPINIÕES (âncora na home) */}
        <section id="testimonials" className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Opiniões</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1,2,3].map((i) => (
              <blockquote key={i} className="rounded-md shadow-sm bg-white p-5 text-sm text-slate-700">
                “Conteúdo excelente e curadoria confiável.”
                <footer className="mt-2 text-xs text-slate-500">— Usuário verificado</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
