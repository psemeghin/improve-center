import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Layout({
  title = "Improve — Wellness. Fitness. Healthness.",
  description = "Transformando vidas pelo equilíbrio: performance, saúde e bem‑estar com ciência e natureza ao seu lado.",
  children
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
