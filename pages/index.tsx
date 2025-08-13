import Head from "next/head";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import ProductsSection from "../components/ProductsSection";
import LearnSection from "../components/LearnSection";
import PartnerSection from "../components/PartnerSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Improve Center – Wellness. Fitness. Healthness.</title>
        <meta
          name="description"
          content="Unlock your next level. Science and nature on your side."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* Cabeçalho fixo com rolagem */}
      <Header />

      {/* Conteúdo principal */}
      <main className="bg-areia text-gray-900 scroll-smooth">
        {/* Sessão 1 – Hero + News */}
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <HeroCarousel />
        </section>

        {/* Sessão 2 – Produtos */}
        <section id="products">
          <ProductsSection />
        </section>

        {/* Sessão 3 – Learn + Assinaturas */}
        <section id="learn">
          <LearnSection />
        </section>

        {/* Sessão 4 – Parcerias */}
        <section id="partner">
          <PartnerSection />
        </section>

        {/* Sessão 5 – Opiniões */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
