export type Product = {
  id: string;
  name: string;
  category: "Essentials" | "Improving";
  priceUSD?: number;
  image: string;
  summary?: string;
};

export const products: Product[] = [
  { id: "creatina", name: "Creatina Gummies", category: "Essentials", priceUSD: 29, image: "/media/products/creatina.jpg", summary: "Força, potência e consistência diária." },
  { id: "complexo-b", name: "Complexo B", category: "Essentials", priceUSD: 19, image: "/media/products/complexo-b.jpg", summary: "Metabolismo e energia celular." },
  { id: "polivitaminico", name: "Polivitamínico", category: "Essentials", priceUSD: 24, image: "/media/products/polivitaminico.jpg", summary: "Base diária equilibrada." },
  { id: "vitamina-d-k2", name: "Vitamina D + K2", category: "Essentials", priceUSD: 22, image: "/media/products/vitamina-d-k2.jpg", summary: "Ossos e imunidade." },
  { id: "pre-treino", name: "Pré‑treino", category: "Essentials", priceUSD: 27, image: "/media/products/pre-treino.jpg", summary: "Foco e desempenho." },
  { id: "pos-treino", name: "Pós‑treino", category: "Essentials", priceUSD: 25, image: "/media/products/pos-treino.jpg", summary: "Recuperação eficiente." },

  { id: "omega-3", name: "Ômega‑3 (EPA/DHA)", category: "Improving", priceUSD: 28, image: "/media/products/omega3.jpg", summary: "Cérebro e inflamação balanceada." },
  { id: "colageno", name: "Colágeno", category: "Improving", priceUSD: 26, image: "/media/products/colageno.jpg", summary: "Pele e articulações." },
  { id: "longevidade", name: "Longevidade", category: "Improving", priceUSD: 39, image: "/media/products/longevidade.jpg", summary: "Resveratrol, quercetina e mais." }
];
