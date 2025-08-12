import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        {/* Title / meta básicos */}
        <title>Improve — Wellness. Fitness. Healthness.</title>
        <meta name="description" content="Awaken your full potential. Your journey is our commitment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon-512.png" />

        {/* Manifest PWA */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Cores do tema (usa a paleta) */}
        <meta name="theme-color" content="#25515E" /> {/* ocean */}
        <meta name="background-color" content="#FFFEE7" /> {/* cream neutra */}

        {/* Open Graph / Social */}
        <meta property="og:title" content="Improve — Wellness. Fitness. Healthness." />
        <meta property="og:description" content="Unlock your next level. Science and nature on your side." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://improve.center/" />
        {/* Quando subirmos um banner OG, ajuste o caminho abaixo: */}
        {/* <meta property="og:image" content="https://improve.center/media/banners/og-default.png" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-cream">{children}</div>
    </>
  );
}
