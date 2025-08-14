// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-4 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-4">
      <div className="rounded-xl overflow-hidden border border-black/5 bg-white shadow-sm">
        <Image
          src="/media/banners/hero-default-v1.jpg"
          alt="Improve hero"
          width={1600}
          height={900}
          priority
          className="w-full h-[300px] md:h-[360px] object-cover"
        />
      </div>

      <aside className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-slate-800">Wellness news</h3>
        <ul className="mt-2 text-sm text-slate-600 space-y-2 list-disc list-inside">
          <li>Curadoria científica, novidades e dicas práticas.</li>
          <li>Conteúdos que transformam performance e bem-estar.</li>
          <li>Atualizações automáticas (futuro: Instagram/Twitter).</li>
        </ul>

        <div className="mt-4 flex gap-2">
          <Link
            href="/assinatura"
            className="rounded-md bg-emerald-700 text-white px-3 py-1 text-sm hover:bg-emerald-800"
          >
            Assinar
          </Link>
          <Link
            href="/conteudo"
            className="rounded-md border border-emerald-700 text-emerald-700 px-3 py-1 text-sm hover:bg-emerald-50"
          >
            Ver conteúdos
          </Link>
        </div>
      </aside>
    </section>
  );
}
