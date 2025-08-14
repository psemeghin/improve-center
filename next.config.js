/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Otimiza imagens estáticas servidas do /public
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Cabeçalhos de cache para estáticos
  async headers() {
    return [
      // Tudo em /public/media/** (banners, produtos, conteúdo): 1 ano, immutable
      {
        source: "/media/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Favicons e manifest
      {
        source: "/:file(favicon.*|site.webmanifest|apple-touch-icon.png)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Fontes
      {
        source: "/:path*\\.(woff2|woff|ttf)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
