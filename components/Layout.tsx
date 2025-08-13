// components/Layout.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

/**
 * Ajuste, se quiser, para o domínio final.
 * Use sempre origin absoluto para OG/Twitter.
 */
const SITE_ORIGIN = 'https://improve.center';

type LayoutProps = {
  children: ReactNode;
  /** Título da página (aparece como <title>) */
  title?: string;
  /** Descrição para SEO/OG */
  description?: string;
  /** Caminho absoluto/relativo da imagem OG/Twitter (1200x630 recomendado) */
  ogImage?: string;
  /** Se true, adiciona noindex/nofollow (ex.: páginas privadas) */
  noIndex?: boolean;
  /** Canonical absoluto. Se não passar, gera automaticamente. */
  canonicalUrl?: string;
};

export default function Layout({
  children,
  title,
  description = 'Improve — Wellness. Fitness. Healthiness. Awaken your full potential. Your journey is our commitment.',
  ogImage = '/media/banners/og-default-v1.png',
  noIndex = false,
  canonicalUrl,
}: LayoutProps) {
  const router = useRouter();
  const path = router.asPath?.split('#')[0] ?? '/';
  const url = canonicalUrl || `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;

  // Garante URL absoluta da imagem OG
  const absoluteOg =
    ogImage.startsWith('http://') || ogImage.startsWith('https://')
      ? ogImage
      : `${SITE_ORIGIN}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const pageTitle = title ? `${title} — Improve` : 'Improve — Wellness. Fitness. Healthiness.';

  // Paleta (cores que já definimos no Tailwind)
  const themeColor = '#FFF7F2'; // cream
  const twitterUser = '@improve_center'; // ajuste se necessário

  // JSON-LD simples de Organization (pode expandir depois)
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Improve',
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/favicon.svg`,
    sameAs: [
      // adicione redes quando tiver
      // 'https://www.instagram.com/...',
      // 'https://www.linkedin.com/company/...'
    ],
  };

  return (
    <div className="min-h-screen bg-cream text-slate-900 flex flex-col">
      <Head>
        {/* Título/descrição */}
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Robots */}
        {noIndex ? (
          <meta name="robots" content="noindex,nofollow" />
        ) : (
          <meta name="robots" content="index,follow" />
        )}

        {/* Viewport + theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={themeColor} />

        {/* Favicons e Manifest (já enviados para /public) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-512.png" sizes="512x512" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Improve" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={absoluteOg} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterUser} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteOg} />

        {/* Segurança e boas práticas básicas */}
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>

      {/* NAV */}
      <Nav />

      {/* CONTEÚDO */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
