import Head from "next/head";
import Link from "next/link";
import { contentItems } from "@/data/content";

type GroupKey = "newsletter" | "curso" | "ebook";

const KIND_LABEL: Record<GroupKey, string> = {
  newsletter: "Newsletters",
  curso: "Cursos",
  ebook: "eBooks",
};

export default function ContentCatalog() {
  // agrupa por tipo
  const grouped = contentItems.reduce<Record<GroupKey, typeof contentItems>>(
    (acc, item) => {
      const k = item.kind as GroupKey;
      (acc[k] ||= []).push(item);
      return acc;
    },
    { newsletter: [], curso: [], ebook: [] }
  );

  return (
    <>
      <Head>
        <title>Conteúdo • Improve</title>
        <meta
          name="description"
          content="Catálogo de conteúdo Improve: Newsletters, Cursos e eBooks."
        />
      </Head>

      <main className="min-h-screen bg-[#FAF1DF]">
        {/* topo / título + abas simples */}
        <section className="mx-auto w-full max-w-6xl px-4 pt-10">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Conteúdo Premium
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Materiais para performance, saúde e longevidade.
              </p>
            </div>

            <nav className="hidden gap-2 md:flex">
              <a href="#newsletters" className="text-sm text-slate-700 underline-offset-4 hover:underline">
                Newsletters
              </a>
              <a href="#cursos" className="text-sm text-slate-700 underline-offset-4 hover:underline">
                Cursos
              </a>
              <a href="#ebooks" className="text-sm text-slate-700 underline-offset-4 hover:underline">
                eBooks
              </a>
            </nav>
          </div>
        </section>

        {/* seção genérica */}
        <Section id="newsletters" title={KIND_LABEL.newsletter} items={grouped.newsletter} />
        <Section id="cursos" title={KIND_LABEL.curso} items={grouped.curso} />
        <Section id="ebooks" title={KIND_LABEL.ebook} items={grouped.ebook} />
      </main>
    </>
  );
}

function Section({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: typeof contentItems;
}) {
  if (!items?.length) return null;

  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <Link
          href="#top"
          className="text-xs text-slate-700 underline-offset-4 hover:underline"
        >
          Voltar ao topo
        </Link>
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <li
            key={it.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* imagem */}
            <div className="aspect-[16/9] w-full bg-slate-100">
              {/* Next/Image não é obrigatório; usando <img> simples para CDN pública */}
              <img
                src={it.image || "/media/content/default-1.jpg"}
                alt={it.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* corpo */}
            <div className="p-4">
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  {badgeFor(it.kind)}
                </span>

                {it.comingSoon ? (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                    Em breve
                  </span>
                ) : null}
              </div>

              <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                {humanize(it.title)}
              </h3>

              {it.excerpt ? (
                <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                  {it.excerpt}
                </p>
              ) : null}

              {/* CTA / preço */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700">
                  {priceLabel(it.price)}
                </span>

                {it.url ? (
                  <a
                    href={it.url}
                    className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 transition hover:bg-slate-50"
                  >
                    Acessar
                  </a>
                ) : (
                  <button
                    disabled
                    className="cursor-not-allowed rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-400"
                  >
                    Indisponível
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function humanize(s: string) {
  // transforma slugs como "metabolismo-ajustes" em "Metabolismo ajustes"
  return s.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function badgeFor(kind: "newsletter" | "curso" | "ebook") {
  if (kind === "newsletter") return "Newsletter";
  if (kind === "curso") return "Curso";
  return "eBook";
}

function priceLabel(price?: number | null) {
  if (price === null || typeof price === "undefined") return "Incluído";
  if (price === 0) return "Grátis";
  return `US$ ${price.toFixed(2)}`;
}
