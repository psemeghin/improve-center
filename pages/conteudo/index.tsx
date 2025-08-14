import Head from "next/head";
import Link from "next/link";
import { contentItems } from "@/data/content";

type AnyItem = {
  id: string;
  title: string;
  kind: "newsletter" | "course" | "ebook" | string;
  excerpt?: string;
  image?: string;
  url?: string;
};

const FALLBACK_IMG = "/media/content/default-v1.jpg";

function Card({ item }: { item: AnyItem }) {
  const img = item.image || FALLBACK_IMG;
  const isExternal = item.url?.startsWith("http");
  return (
    <div className="rounded-xl border border-slate-200 bg-white/70 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-[16/9] bg-slate-100">
        <img src={img} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <span className="inline-flex px-2 py-1 text-xs rounded bg-emerald-50 text-emerald-700">
          {item.kind}
        </span>
        <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
        {item.excerpt && (
          <p className="text-sm text-slate-600 line-clamp-3">{item.excerpt}</p>
        )}
        <div className="pt-2">
          {item.url ? (
            isExternal ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline"
              >
                Acessar
              </a>
            ) : (
              <Link href={item.url} className="text-emerald-700 hover:text-emerald-800 underline">
                Acessar
              </Link>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function ContentPage() {
  const items = (contentItems as unknown as AnyItem[]) || [];
  const newsletters = items.filter((i) => i.kind?.toLowerCase() === "newsletter");
  const courses = items.filter((i) => i.kind?.toLowerCase() === "course");
  const ebooks = items.filter((i) => i.kind?.toLowerCase() === "ebook");

  return (
    <>
      <Head>
        <title>Conteúdo — Improve</title>
        <meta
          name="description"
          content="Conteúdo Premium da Improve: newsletters, cursos e e‑books para performance e bem‑estar."
        />
      </Head>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-16">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Conteúdo Premium</h1>
          <p className="text-slate-600">
            Newsletters, cursos e e‑books selecionados para acelerar sua evolução.
          </p>
        </header>

        {/* NEWSLETTERS */}
        <section id="newsletters" className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold">Newsletters</h2>
            <Link href="/#content-preview" className="text-emerald-700 hover:underline">
              Voltar à Home
            </Link>
          </div>
          {newsletters.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsletters.map((n) => (
                <Card key={n.id} item={n} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Sem itens no momento.</p>
          )}
        </section>

        {/* CURSOS */}
        <section id="cursos" className="space-y-6">
          <h2 className="text-xl font-semibold">Cursos</h2>
          {courses.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((c) => (
                <Card key={c.id} item={c} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Em breve.</p>
          )}
        </section>

        {/* E-BOOKS */}
        <section id="ebooks" className="space-y-6">
          <h2 className="text-xl font-semibold">E‑books</h2>
          {ebooks.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ebooks.map((e) => (
                <Card key={e.id} item={e} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">Em breve.</p>
          )}
        </section>
      </main>
    </>
  );
}
