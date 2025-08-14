// pages/index.tsx
import Link from "next/link";
import Layout from "@/components/Layout";

import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import LearnSection from "@/components/LearnSection";
import PartnerSection from "@/components/PartnerSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <Layout
      title="Improve — Wellness. Fitness. Healthness."
      description="Transformando vidas pelo equilíbrio: performance, saúde e bem‑estar com ciência e natureza ao seu lado."
    >
      {/* Fundo areia já vem do Layout (bg + blur). Mantemos somente conteúdo. */}
      {/* Sessão 1 — Hero (com news ao lado dentro do componente) */}
      <section id="home" className="pt-6 md:pt-8">
        <HeroSection />

        {/* Headline/claim principal abaixo do hero */}
        <div className="mx-auto max-w-6xl px-4 mt-6 rounded-xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Wellness. Fitness. Healthness.
          </h1>
          <p className="mt-2 text-slate-600">
            Awaken your full potential. Your journey is our commitment.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/assinatura"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
            >
              Unlock your next level
            </Link>
            <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
              Science &amp; nature
            </span>
          </div>
        </div>
      </section>

      {/* Sessão 2 — Produtos (prévia) */}
      <section id="products-preview" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="mb-4 flex items-end justify-between">
          <Link href="/products" className="group inline-flex items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-800">
              Marketplace • Produtos
            </h2>
            <span className="h-px w-10 bg-slate-300 transition-all group-hover:w-16" />
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            Ver catálogo completo →
          </Link>
        </div>

        <ProductSection />
      </section>

      {/* Sessão 3 — Conteúdo (prévia) */}
      <section id="content-preview" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="mb-4 flex items-end justify-between">
          <Link href="/conteudo" className="group inline-flex items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-800">
              Conteúdo • Learn
            </h2>
            <span className="h-px w-10 bg-slate-300 transition-all group-hover:w-16" />
          </Link>

        <Link href="/conteudo" className="text-sm font-medium text-emerald-700 hover:underline">
            Acessar conteúdos →
          </Link>
        </div>

        <LearnSection />
      </section>

      {/* Sessão 4 — Parcerias (prévia) */}
      <section id="partner-preview" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="mb-4 flex items-end justify-between">
          <Link href="/parcerias" className="group inline-flex items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-800">
              Parcerias • Vendors &amp; Producers
            </h2>
            <span className="h-px w-10 bg-slate-300 transition-all group-hover:w-16" />
          </Link>

          <Link
            href="/parcerias"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            Enviar proposta →
          </Link>
        </div>

        <PartnerSection />
      </section>

      {/* Sessão 5 — Opiniões/Depoimentos */}
      <section id="opinions" className="mx-auto max-w-6xl px-4 pt-12 pb-16 md:pt-16">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Opiniões</h2>
        </div>

        <TestimonialSection />
      </section>
    </Layout>
  );
}
