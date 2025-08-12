import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = { title?: string; children: React.ReactNode };

export default function Layout({ title = "Improve Center", children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Wellness. Fitness. Healthness. Unlock your next level." />
      </Head>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}