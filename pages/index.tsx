// pages/index.tsx
import Head from "next/head";
import { IMAGES } from "../components/assets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Improve — Wellness. Fitness. Healthiness.</title>
        <meta name="description" content="Awaken your full potential. Your journey is our commitment." />
        {/* OG/Twitter (imediato; depois podemos gerar dinâmico) */}
        <meta property="og:title" content="Improve — Wellness. Fitness. Healthiness." />
        <meta property="og:description" content="Awaken your full potential. Your journey is our commitment." />
        <meta property="og:image" content={IMAGES.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={IMAGES.ogImage} />
      </Head>

      <main className="bg-cream">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight text-ocean md:text-5xl">
              Wellness. Fitness. <span className="text-leaf">Healthiness.</span>
            </h1>
            <p className="max-w-prose text-slate-700">
              Awaken your full potential. Your journey is our commitment.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/#cta"
                className="rounded-full bg-leaf px-5 py-2 text-white shadow-soft hover:opacity-90"
              >
                Unlock your next level
              </a>
              <span className="rounded-full bg-breeze px-3 py-1 text-xs text-ocean">
                Science &amp; nature
              </span>
            </div>

            <ul className="mt-6 list-disc pl-5 text-sm text-slate-700">
              <li>Let nature be your medicine.</li>
              <li>Energy for your best day.</li>
              <li>Care that transforms.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={IMAGES.heroLight}
              alt="Improve — wellness hero"
              width={960}
              height={640}
              className="h-auto w-full rounded-2xl shadow-soft"
            />
          </div>
        </section>
      </main>
    </>
  );
}
