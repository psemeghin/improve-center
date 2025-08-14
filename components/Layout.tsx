// components/Layout.tsx
import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  /** Título da página (aparece na aba do navegador) */
  title?: string;
  /** Meta description */
  description?: string;
  /** Conteúdo da página */
  children: React.ReactNode;
};

export default function Layout({
  title = "Improve — Wellness. Fitness. Healthness.",
  description = "Transformando vidas pelo equilíbrio: performance, saúde e bem‑estar com ciência e natureza ao seu lado.",
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Cabeçalho fixo/transparente (o comportamento está no componente Header) */}
      <Header />

      {/* Fundo Areia + leve blur/transparência (seguindo seu padrão) */}
      <main className="min-h-screen bg-[#FAF1DF]/95 backdrop-blur-sm">
        {children}
      </main>

      <Footer />
    </>
  );
}
