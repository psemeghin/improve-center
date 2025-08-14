// components/Layout.tsx
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Layout({
  title = "Improve — Wellness. Fitness. Healthness.",
  description = "Produtos e conteúdos para performance, saúde e bem-estar.",
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header fixo (fundo areia com leve blur) */}
      <Header />

      {/* Conteúdo principal com espaçamento para o header fixo */}
      <main className="min-h-screen pt-20 bg-[#FFF6E3]">
        {children}
      </main>

      <Footer />
    </>
  );
}
