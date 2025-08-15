import Image from "next/image";
import NewsList from "./newslist";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 rounded-xl border border-black/5 bg-white/60 p-4 md:p-6 shadow-sm backdrop-blur">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-100">
          <Image
            src="/media/banners/hero-default-v1.jpg"
            alt="Improve — performance, saúde e bem‑estar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Unlock your next level.</h2>
          <p className="text-slate-600 text-sm">Science and nature on your side.</p>
        </div>
      </div>
      <div><NewsList /></div>
    </div>
  );
}
