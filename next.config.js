/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // tudo que estiver em /public/media/** 
        source: '/media/:all*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
      {
        // se tiver fontes próprias em /public/fonts/**
        source: '/fonts/:all*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
      {
        // favicons e manifest na raiz de /public
        source: '/:file(favicon.svg|favicon-192.png|favicon-512.png|site.webmanifest)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ],
      },
    ];
  },
};

module.exports = nextConfig;
