import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Layout({
  title = "Improve — Wellness. Fitness. Healthness.",
  description = "Transformando vidas pelo equilíbrio: performance, saúde e bem‑estar com ciência e natureza ao seu lado.",
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Cabeçalho global */}
      <Header />

      {/* Fundo Areia + leve blur/transparência como base */}
      <main className="min-h-screen bg-[#FFF6E3] bg-opacity-95">
        {children}
      </main>

      {/* Rodapé global */}
      <Footer />
    </>
  );
}
