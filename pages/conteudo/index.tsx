import Head from 'next/head'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import NewsList from '@/components/NewsList'
import ProductSection from '@/components/ProductSection'
import LearnSection from '@/components/LearnSection'
import PartnerSection from '@/components/PartnerSection'
import TestimonialSection from '@/components/TestimonialSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Improve — Wellness. Fitness. Healthness.</title>
        <meta
          name="description"
          content="Plataforma Improve — produtos, conteúdos e parcerias para alta performance e bem-estar."
        />
      </Head>

      <main className="space-y-20">
        
        {/* Sessão 1 — Hero + News */}
        <section id="hero" className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <HeroCarousel images={["/media/banners/hero-default-v1.jpg"]} />
          </div>
          <div className="flex-1">
            <NewsList />
          </div>
        </section>

        {/* Sessão 2 — Produtos em destaque */}
        <section id="products" className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Produtos em destaque</h2>
            <Link href="/products" className="text-emerald-600 hover:underline">
              Ver todos
            </Link>
          </div>
          <ProductSection limit={4} />
        </section>

        {/* Sessão 3 — Conteúdo/Learn */}
        <section id="content" className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Conteúdo & Learn</h2>
            <Link href="/conteudo" className="text-emerald-600 hover:underline">
              Acessar conteúdos
            </Link>
          </div>
          <LearnSection limit={3} />
        </section>

        {/* Sessão 4 — Parcerias */}
        <section id="partner" className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Parcerias (preview)</h2>
            <Link href="/partner" className="text-emerald-600 hover:underline">
              Envie proposta
            </Link>
          </div>
          <PartnerSection />
        </section>

        {/* Sessão 5 — Depoimentos */}
        <section id="testimonials" className="container mx-auto px-4">
          <TestimonialSection />
        </section>
      </main>
    </>
  )
}
