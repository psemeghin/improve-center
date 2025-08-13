"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      nome: "Maria L.",
      texto:
        "A Improve mudou minha rotina. Mais energia, mais foco e produtos com qualidade incrível.",
      origem: "Trustpilot",
      estrelas: 5,
    },
    {
      nome: "Carlos M.",
      texto:
        "Assinatura perfeita para quem busca bem-estar. Conteúdo e produtos muito bem selecionados.",
      origem: "Google Reviews",
      estrelas: 5,
    },
    {
      nome: "Fernanda R.",
      texto:
        "A curadoria da Improve me ajudou a encontrar suplementos que realmente funcionam.",
      origem: "Facebook",
      estrelas: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-white/90 backdrop-blur py-12 px-6 md:px-12 border-t border-slate-200"
    >
      {/* Título da sessão */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-azul">Opiniões de Clientes</h2>
        <p className="text-sm text-slate-600">
          Depoimentos reais e avaliações em outras plataformas.
        </p>
      </div>

      {/* Grid de depoimentos */}
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            className="rounded-[4px] bg-areia/40 shadow-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ animation: `fadeSlide 420ms ease ${idx * 80}ms both` }}
          >
            {/* Nome e estrelas */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-900">{t.nome}</h3>
              <div className="flex">
                {Array.from({ length: t.estrelas }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>

            {/* Texto */}
            <p className="text-sm text-slate-700">{t.texto}</p>

            {/* Origem */}
            <div className="mt-4 text-xs text-slate-500 italic">
              {t.origem}
            </div>
          </article>
        ))}
      </div>

      {/* Logos de plataformas externas */}
      <div className="mt-10 flex flex-wrap items-center gap-6 opacity-80">
        <img
          src="/media/trustpilot-logo.svg"
          alt="Trustpilot"
          className="h-6"
        />
        <img
          src="/media/google-reviews-logo.svg"
          alt="Google Reviews"
          className="h-6"
        />
        <img
          src="/media/facebook-logo.svg"
          alt="Facebook"
          className="h-6"
        />
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
