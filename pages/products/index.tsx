import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Tenta suportar ambos formatos de data:
// - export const essentials = [...]; export const improving = [...];
// - export const products = [{ category: 'essentials' | 'improving', ... }]
// - export default { essentials, improving }
import * as productsData from "@/data/products";

type AnyProduct = {
  id?: string | number;
  slug?: string;
  title: string;
  name?: string;
  price?: number | string;
  image?: string;
  cover?: string;
  img?: string;
  category?: "essentials" | "improving" | string;
  soon?: boolean; // “coming soon”
  description?: string;
};

// Utilitários para “normalizar” o data e não quebrar o build
function normalizeItem(p: any): AnyProduct {
  const title = p.title ?? p.name ?? "Produto";
  const price = typeof p.price === "number" ? p.price : Number(p.price ?? 0);
  const img =
    p.image ??
    p.cover ??
    p.img ??
    (p.slug ? `/media/products/${p.slug}.jpg` : undefined);

  return {
    id: p.id ?? p.slug ?? title,
    slug: p.slug,
    title,
    price: isNaN(price) ? undefined : price,
    image: img,
    category: p.category,
    soon: Boolean(p.soon),
    description: p.description,
  };
}

function pickArraysFromData() {
  const anyData: any = productsData?.default ?? productsData;

  let essentials: AnyProduct[] = [];
  let improving: AnyProduct[] = [];

  if (Array.isArray(anyData?.essentials)) {
    essentials = anyData.essentials.map(normalizeItem);
  }
  if (Array.isArray(anyData?.improving)) {
    improving = anyData.improving.map(normalizeItem);
  }

  // Caso tenha vindo um array único “products”
  const all: AnyProduct[] = Array.isArray(anyData?.products)
    ? anyData.products.map(normalizeItem)
    : [];

  if (!essentials.length && all.length) {
    essentials = all.filter((p) => (p.category ?? "").toLowerCase() === "essentials");
  }
  if (!improving.length && all.length) {
    improving = all.filter((p) => (p.category ?? "").toLowerCase() === "improving");
  }

  return { essentials, improving };
}

const { essentials, improving } = pickArraysFromData();

function ProductCard({ p }: { p: AnyProduct }) {
  const srcCandidates = [
    p.image,
    p.slug ? `/media/products/${p.slug}.png` : undefined,
    p.slug ? `/media/products/${p.slug}.webp` : undefined,
  ].filter(Boolean) as string[];

  const src = srcCandidates[0];

  return (
    <div className="group rounded-xl border border-zinc-200/60 bg-white shadow-sm hover:shadow transition overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-zinc-100">
        {src ? (
          <Image
            src={src}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const fb = (e.currentTarget.parentElement as HTMLElement).querySelector(
                ".fb"
              ) as HTMLElement | null;
              if (fb) fb.style.display = "flex";
            }}
          />
        ) : null}
        {/* fallback */}
        <div className="fb hidden absolute inset-0 items-center justify-center text-zinc-400">
          <span className="text-sm">Imagem em breve</span>
        </div>

        {p.soon && (
          <span className="absolute left-2 top-2 rounded-md bg-amber-500/90 px-2 py-1 text-[11px] font-medium text-white shadow">
            coming&nbsp;soon
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-zinc-900 line-clamp-2">{p.title}</h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-[13px] text-zinc-700">
            {typeof p.price === "number" && p.price > 0
              ? `$ ${p.price.toFixed(2)}`
              : "—"}
          </span>

          <Link
            href="#"
            className="text-[13px] rounded-md border border-zinc-300 px-3 py-1.5 text-zinc-800 hover:bg-zinc-50"
            aria-label={`Ver produto ${p.title}`}
          >
            Ver produto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Marketplace — Improve</title>
        <meta
          name="description"
          content="Catálogo de produtos Improve — Essentials e Improving."
        />
      </Head>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10 md:py-12">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-improve">
            Marketplace
          </h1>
          <p className="mt-2 text-sm text-zinc-700">
            Escolha sua linha. Preço visível, preview e CTA direto.
          </p>
        </header>

        {/* Essentials */}
        <section id="essentials" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Essentials
            </h2>
            <Link
              href="#improving"
              className="text-sm text-improve hover:underline"
            >
              Ir para Improving
            </Link>
          </div>

          {essentials?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {essentials.map((p) => (
                <ProductCard key={`${p.id}`} p={p} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-600">Sem itens no momento.</p>
          )}
        </section>

        {/* Divider suave */}
        <div className="my-10 h-px bg-zinc-200/70" />

        {/* Improving */}
        <section id="improving" className="scroll-mt-24">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Improving
            </h2>
            <Link href="#essentials" className="text-sm text-improve hover:underline">
              Voltar para Essentials
            </Link>
          </div>

          {improving?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {improving.map((p) => (
                <ProductCard key={`${p.id}`} p={p} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-600">Sem itens no momento.</p>
          )}
        </section>
      </main>
    </>
  );
}
