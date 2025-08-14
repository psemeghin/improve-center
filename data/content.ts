// /data/content.ts

export type ContentKind = "newsletter" | "curso" | "ebook";

export type ContentItem = {
  id: string;               // slug
  kind: ContentKind;
  title: string;
  excerpt: string;
  image: string;            // /public/media/content/...
  comingSoon?: boolean;
  priceUSD?: number | null; // cursos/ebooks podem ter preço; newsletters ficam null/free
  url?: string;             // link interno/externo (MVP pode deixar undefined)
};

export const contentItems: ContentItem[] = [
  // NEWSLETTERS (free no plano Starter)
  {
    id: "metabolismo-5-ajustes",
    kind: "newsletter",
    title: "Metabolismo: 5 ajustes práticos",
    excerpt: "Pequenas mudanças que geram impacto grande no dia a dia.",
    image: "/media/content/news-metabolismo.jpg",
  },
  {
    id: "sono-alta-performance",
    kind: "newsletter",
    title: "Sono de alta performance",
    excerpt: "Rotinas noturnas para acordar com energia e foco.",
    image: "/media/content/news-sono.jpg",
  },
  {
    id: "micronutrientes-essenciais",
    kind: "newsletter",
    title: "Micronutrientes essenciais",
    excerpt: "O básico que sustenta seu próximo nível.",
    image: "/media/content/news-micronutrientes.jpg",
  },

  // CURSOS
  {
    id: "fundamentos-da-energia",
    kind: "curso",
    title: "Fundamentos da energia",
    excerpt: "Do combustível certo ao uso eficiente.",
    image: "/media/content/curso-energia.jpg",
    priceUSD: 149,
  },
  {
    id: "nutricao-para-foco",
    kind: "curso",
    title: "Nutrição para foco",
    excerpt: "Planeje macros para performance cognitiva.",
    image: "/media/content/curso-foco.jpg",
    priceUSD: 129,
  },
  {
    id: "respiracao-e-recovery",
    kind: "curso",
    title: "Respiração & recovery",
    excerpt: "Técnicas simples para treinar e recuperar melhor.",
    image: "/media/content/curso-respiracao.jpg",
    priceUSD: 99,
  },

  // E-BOOKS
  {
    id: "guia-detox-21-dias",
    kind: "ebook",
    title: "Guia Detox 21 dias",
    excerpt: "Estratégia segura e baseada em ciência.",
    image: "/media/content/ebook-detox.jpg",
    priceUSD: 29,
  },
  {
    id: "manual-de-habitos",
    kind: "ebook",
    title: "Manual de hábitos",
    excerpt: "Pequenos passos para mudanças grandes.",
    image: "/media/content/ebook-habitos.jpg",
    priceUSD: 19,
  },
  {
    id: "suplementacao-inteligente",
    kind: "ebook",
    title: "Suplementação inteligente",
    excerpt: "Como escolher o que realmente importa.",
    image: "/media/content/ebook-suplementacao.jpg",
    priceUSD: 24,
  },
];

// Planos — aparecem somente nesta página
export const plans = [
  { name: "Starter",  price: "Free",      perks: ["Newsletters full"] },
  { name: "Plus",     price: "U$ 19,99",  perks: ["Newsletters full", "Cursos"] },
  { name: "Pro",      price: "U$ 69,99",  perks: ["Newsletters full", "Cursos", "1 Essencial", "1 Improving"] },
  { name: "Premium",  price: "U$ 99,99",  perks: ["Newsletters full", "Cursos", "2 Essenciais", "2 Improving"] },
];
