import Image from "next/image";
import Link from "next/link";

/**
 * HeroCarousel
 * - Usa imagens em /public/media/banners
 * - Mostra 1 banner estático (MVP) com CTA.
 * - Se a imagem não existir, cai num fallback neutro.
 *
 * Caminhos esperados (coloque pelo menos 1 deles no repo):
 *  - /public/media/banners/hero-default-v1.jpg (ou .png, .webp)
 *  - /public/media/banners/hero-01.jpg
 */
const CANDIDATES = [
  "/media/banners/hero-default-v1.jpg",
  "/media/banners/hero-default-v1.png",
  "/media/banners/hero-default-v1.webp",
  "/media/banners/hero-01.jpg",
];

function pickFirstExisting(srcs: string[]) {
  // MVP: retornamos o primeiro caminho; a vercel serve /public direto.
  // (Se não existir, o <Image> vai falhar e mostramos um fallback abaixo.)
  return srcs[0];
}

export default function HeroCarousel() {
  const src = pickFirstExisting(CANDIDATES);

  return (
    <section
      id="hero"
      className="rounded-2xl bg-areia/70 backdrop-blur border border-zinc-200/40 shadow-sm p-5 sm:p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center">
        {/* Imagem */}
        <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200/40 bg-areia/60">
          {/* Usamos priority no MVP para carregar rápido o herói */}
          <Image
            src={src}
            alt="Improve — wellness hero"
            width={1600}
            height={900}
            priority
            className="h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover"
            onError={(e) => {
              // Se a imagem não existir, escondemos o elemento para usar o fallback
              (e.target as HTMLImageElement).style.display = "none";
              const fb = document.getElementById("hero-fallback");
              if (fb) fb.style.display = "flex";
            }}
          />

          {/* Fallback visual se a imagem não estiver presente */}
          <div
            id="hero-fallback"
            className="hidden h-[220px] sm:h-[260px] md:h-[300px] w-full items-center justify-center"
          >
            <div className="text-center">
              <div className="mx-auto h-10 w-10 rounded-full bg-zinc-200 mb-3" />
              <p className="text-zinc-600">Banner será exibido aqui</p>
            </div>
          </div>
        </div>

        {/* Texto + CTAs */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-improve">
            Wellness. Fitness. Healthness.
          </h1>
          <p className="text-sm sm:text-base text-zinc-700">
            Awaken your full potential. Your journey is our commitment.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/assinatura"
              className="px-4 py-2 rounded-md bg-improve text-white hover:opacity-90 transition"
            >
              Unlock your next level
            </Link>
            <Link
              href="/conteudo"
              className="px-4 py-2 rounded-md border border-zinc-300 text-zinc-800 hover:bg-white transition"
            >
              Science &amp; nature
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
