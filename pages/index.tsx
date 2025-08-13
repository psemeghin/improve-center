import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Improve — Wellness. Fitness. Healthness.</title>
        <meta name="description" content="Awaken your full potential. Your journey is our commitment." />
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Espaço do header */}
        <div className="h-24 md:h-28" />

        {/* HOME / HERO */}
        <section id="home" className="anchor-section">
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-8">
            {/* Carrossel (placeholder estático) */}
            <div className="md:col-span-7">
              <div className="card-soft p-6">
                <div className="aspect-[16/9] relative overflow-hidden rounded-[10px]">
                  <Image
                    src="/media/banners/og-default-v1.png"
                    alt="Hero"
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
                  Wellness. Fitness. Healthness.
                </h1>
                <p className="mt-2 text-slate-700">
                  Awaken your full potential. Your journey is our commitment.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#products"
                    className="rounded-[10px] px-4 py-2 text-white"
                    style={{ backgroundColor: '#0E5162' }}
                  >
                    Unlock your next level
                  </a>
                  <span className="inline-flex items-center rounded-full bg-slate-200/70 px-3 py-1 text-[13px] text-slate-700">
                    Science &amp; nature
                  </span>
                </div>
              </div>
            </div>

            {/* News (placeholder) */}
            <div className="md:col-span-5">
              <div className="card-soft p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900 font-medium">Wellness news</h3>
                  <span className="text-sm text-slate-500">Hoje</span>
                </div>
                <ul className="mt-3 space-y-3">
                  <li className="text-sm text-slate-700">• Curadoria científica, novidades e dicas práticas.</li>
                  <li className="text-sm text-slate-700">• Conteúdos que transformam performance e bem-estar.</li>
                  <li className="text-sm text-slate-700">• Atualizações automáticas (futuro: Instagram/Twitter).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="my-14 section-hairline" />

        {/* PRODUCTS */}
        <section id="products" className="anchor-section">
          <h2 className="text-xl font-semibold text-slate-900">Produtos em destaque</h2>
          <p className="text-slate-600 mt-1">Energia para o seu melhor dia.</p>

          {/* Grade simples como placeholder (trocar por carrosséis) */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="card-soft p-3">
                <div className="aspect-square rounded-[10px] bg-slate-200/60" />
                <div className="mt-2 text-sm font-medium text-slate-900">Produto {i + 1}</div>
                <div className="text-[13px] text-slate-600">$ 29,90</div>
                <a href="#" className="mt-2 inline-block text-[13px] text-slate-900 hover:underline">
                  Ver produto
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="my-14 section-hairline" />

        {/* LEARN + PLANS */}
        <section id="learn" className="anchor-section">
          <h2 className="text-xl font-semibold text-slate-900">Conteúdo</h2>
          <p className="text-slate-600 mt-1">Últimos artigos &amp; matérias.</p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Newsletters', 'Cursos', 'E-books'].map((title) => (
              <div key={title} className="card-soft p-4">
                <div className="aspect-[4/3] rounded-[10px] bg-slate-200/60" />
                <div className="mt-3 font-medium text-slate-900">{title}</div>
                <p className="text-sm text-slate-600">Prévia do conteúdo (deslize/carrossel na versão final).</p>
              </div>
            ))}
          </div>

          {/* Planos (faixa compacta) */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Starter', price: 'Free', desc: 'Newsletters full' },
              { name: 'Plus', price: 'U$ 19,99', desc: 'Newsletters + Cursos' },
              { name: 'Pro', price: 'U$ 69,99', desc: 'Newsletters + Cursos + 1 Essencial + 1 Improving' },
              { name: 'Premium', price: 'U$ 99,99', desc: 'Newsletters + Cursos + 2 Essenciais + 2 Improving' },
            ].map((p) => (
              <div key={p.name} className="card-soft p-4">
                <div className="text-sm text-slate-500">{p.name}</div>
                <div className="text-lg font-semibold text-slate-900">{p.price}</div>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                <a
                  href="/partner"
                  className="mt-3 inline-block rounded-[10px] px-3 py-1.5 text-white text-sm"
                  style={{ backgroundColor: '#0E5162' }}
                >
                  Inscrever-se
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="my-14 section-hairline" />

        {/* PARTNER */}
        <section id="partner" className="anchor-section">
          <h2 className="text-xl font-semibold text-slate-900">Parceria</h2>
          <p className="text-slate-600 mt-1">Fornecedores &amp; Vendedores.</p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-soft p-5">
              <h3 className="font-medium text-slate-900">Fornecedores</h3>
              <p className="mt-1 text-sm text-slate-600">
                Qualidade, critérios claros e alcance global. Envie seus dados para avaliarmos.
              </p>
              <a href="/partner" className="mt-3 inline-block text-[14px] text-slate-900 hover:underline">
                Quero ser fornecedor
              </a>
            </div>
            <div className="card-soft p-5">
              <h3 className="font-medium text-slate-900">Vendedores</h3>
              <p className="mt-1 text-sm text-slate-600">
                Como vender, margens e SLA. Envie seu cadastro e comece com a Improve.
              </p>
              <a href="/partner" className="mt-3 inline-block text-[14px] text-slate-900 hover:underline">
                Quero vender
              </a>
            </div>
          </div>
        </section>

        <div className="my-14 section-hairline" />

        {/* TESTIMONIALS */}
        <section id="testimonials" className="anchor-section mb-20">
          <h2 className="text-xl font-semibold text-slate-900">Opiniões</h2>
          <p className="text-slate-600 mt-1">Avaliações e comentários.</p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card-soft p-5">
                <div className="text-[15px] text-slate-900">“Conteúdo excelente e curadoria confiável.”</div>
                <div className="mt-2 text-sm text-slate-500">Usuário verificado</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
