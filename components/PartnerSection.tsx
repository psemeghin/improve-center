"use client";

import Link from "next/link";

export default function PartnerSection() {
  return (
    <section
      id="partner"
      className="bg-areia/80 backdrop-blur-lg py-12 px-6 md:px-12 border-t border-slate-200"
    >
      {/* Título da sessão no topo à esquerda */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-azul">Parceria</h2>
      </div>

      {/* Duas colunas: Fornecedores e Vendedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna A – Fornecedores */}
        <article
          className="rounded-[4px] bg-white/95 backdrop-blur shadow-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          style={{ animation: "fadeSlide 420ms ease both" }}
        >
          <h3 className="text-lg font-semibold text-slate-900">Produtores / Fornecedores</h3>
          <p className="mt-2 text-sm text-slate-700">
            Qualidade, rastreabilidade e ciência. Se você produz suplementos,
            utensílios saudáveis ou conteúdos premium, queremos conhecer o seu trabalho.
          </p>
          <ul className="mt-3 text-sm text-slate-700 space-y-1">
            <li>• Curadoria Improve e compliance internacional</li>
            <li>• Presença em um hub de performance e saúde</li>
            <li>• Alcance global com logística flexível</li>
          </ul>
          <div className="mt-5">
            <Link
              href="/parcerias#produtores"
              className="inline-flex rounded-full bg-azul px-5 py-2 text-white text-sm font-medium hover:bg-azul/90"
            >
              Venha fazer parte do sucesso
            </Link>
          </div>
        </article>

        {/* Coluna B – Vendedores / Dropshippers */}
        <article
          className="rounded-[4px] bg-white/95 backdrop-blur shadow-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          style={{ animation: "fadeSlide 420ms ease 80ms both" }}
        >
          <h3 className="text-lg font-semibold text-slate-900">Vendedores / Dropshippers</h3>
          <p className="mt-2 text-sm text-slate-700">
            Construa com a Improve: catálogo validado, branding forte e audiência qualificada.
            Operação transparente, margens claras e SLA de atendimento.
          </p>
          <ul className="mt-3 text-sm text-slate-700 space-y-1">
            <li>• Catálogo em expansão contínua</li>
            <li>• Materiais e guidelines de marca</li>
            <li>• Acompanhamento e suporte de crescimento</li>
          </ul>
          <div className="mt-5">
            <Link
              href="/parcerias#vendedores"
              className="inline-flex rounded-full bg-azul px-5 py-2 text-white text-sm font-medium hover:bg-azul/90"
            >
              Venha fazer parte do sucesso
            </Link>
          </div>
        </article>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
