import Link from "next/link";
import Layout from "../components/layout";
import HeroSection from "../components/herosection";
import ProductSection from "../components/productsection";
import LearnSection from "../components/learnsection";
import PartnerSection from "../components/partnersection";
import TestimonialSection from "../components/testimonialsection";

export default function Home() {
  return (
    <Layout>
      {/* Sessão 1 — Hero + News */}
      <section id="home" className="pt-6 md:pt-8">
        <HeroSection />
        <div className="mx-auto max-w-6xl px-4 mt-6 rounded-xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-extrabold tracking-tight">Wellness. Fitness. Healthness.</h1>
          <p className="mt-2 text-slate-600">Awaken your full potential. Your journey is our commitment.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/assinatura" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">
              Unlock your next level
            </Link>
            <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">Science &amp; nature</span>
          </div>
        </div>
      </section>

      {/* Sessão 2 — Produtos (prévia) */}
      <section id="products" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">Marketplace • Produtos</h2>
          <Link href="/products" className="text-sm font-medium text-emerald-700 hover:underline">Ver catálogo completo →</Link>
        </div>
        <ProductSection />
      </section>

      {/* Sessão 3 — Conteúdo (prévia) */}
      <section id="learn" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">Conteúdo • Learn</h2>
          <Link href="/conteudo" className="text-sm font-medium text-emerald-700 hover:underline">Acessar conteúdos →</Link>
        </div>
        <LearnSection />
      </section>

      {/* Sessão 4 — Parcerias (prévia) */}
      <section id="partner" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">Parcerias • Vendors &amp; Producers</h2>
          <Link href="/parcerias" className="text-sm font-medium text-emerald-700 hover:underline">Enviar proposta →</Link>
        </div>
        <PartnerSection />
      </section>

      {/* Sessão 5 — Opiniões */}
      <section id="opinions" className="mx-auto max-w-6xl px-4 pt-12 pb-16 md:pt-16">
        <h2 className="text-xl font-semibold mb-4">Opiniões</h2>
        <TestimonialSection />
      </section>
    </Layout>
  );
}
