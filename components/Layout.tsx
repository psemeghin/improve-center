// components/Layout.tsx
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
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

      {/* Cabeçalho fixo/transparente (implementado no Header) */}
      <Header />

      {/* Fundo areia com leve blur/transparência, sombra sutil */}
      <main className="min-h-screen bg-[#FFF6E3]">
        {children}
      </main>

      <Footer />
    </>
  );
}
