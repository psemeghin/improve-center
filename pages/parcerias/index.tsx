import React, { useState } from "react";

type FormState = {
  role: "produtor" | "vendedor";
  nome: string;
  empresa?: string;
  email: string;
  site?: string;
  pais?: string;
  categorias?: string;
  volume?: string;
  mensagem?: string;
  arquivo?: File | null;
  agree: boolean;
};

export default function ParceriasPage() {
  const [state, setState] = useState<FormState>({
    role: "produtor",
    nome: "",
    empresa: "",
    email: "",
    site: "",
    pais: "",
    categorias: "",
    volume: "",
    mensagem: "",
    arquivo: null,
    agree: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    if (type === "checkbox") {
      setState((s) => ({ ...s, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setState((s) => ({ ...s, [name]: value }));
    }
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setState((s) => ({ ...s, arquivo: file }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // MVP: apenas simula envio
    alert("Recebido! Entraremos em contato por email.");
  };

  return (
    <main className="min-h-screen bg-areia">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-bold text-azul mb-2">Parcerias</h1>
        <p className="text-slate-700 max-w-prose">
          Junte-se à Improve. Se você é produtor/fornecedor de qualidade ou vendedor com operação sólida,
          queremos construir uma rede confiável e de alto impacto. Preencha o formulário abaixo:
        </p>

        {/* Âncoras para navegação direta */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#produtores" className="rounded-full bg-azul px-3 py-1 text-white text-sm">Produtores</a>
          <a href="#vendedores" className="rounded-full bg-azul px-3 py-1 text-white text-sm">Vendedores</a>
        </div>

        {/* PRODUTORES */}
        <div id="produtores" className="mt-10 rounded-[4px] bg-white/95 backdrop-blur shadow-card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Sou Produtor / Fornecedor</h2>
          <p className="text-sm text-slate-600 mt-1">
            Qualidade, compliance e rastreabilidade. Conte-nos sobre seus produtos e diferenciais.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="hidden" name="role" value="produtor" />
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome*</label>
              <input
                name="nome"
                value={state.nome}
                onChange={onChange}
                required
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
              <input
                name="empresa"
                value={state.empresa}
                onChange={onChange}
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail*</label>
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={onChange}
                required
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Site</label>
              <input
                name="site"
                value={state.site}
                onChange={onChange}
                placeholder="https://"
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">País</label>
              <input
                name="pais"
                value={state.pais}
                onChange={onChange}
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Categorias</label>
              <input
                name="categorias"
                value={state.categorias}
                onChange={onChange}
                placeholder="Suplementos, utensílios, cursos..."
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
              <textarea
                name="mensagem"
                value={state.mensagem}
                onChange={onChange}
                rows={4}
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Upload (catálogo/portfólio) — PDF até 10MB
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={onFile}
                className="w-full text-sm"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input
                id="agree-p"
                type="checkbox"
                name="agree"
                checked={state.agree}
                onChange={onChange}
                className="h-4 w-4"
              />
              <label htmlFor="agree-p" className="text-sm text-slate-700">
                Li e concordo com as políticas da Improve.
              </label>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-azul px-6 py-2 text-white font-medium hover:bg-azul/90"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* VENDEDORES */}
        <div id="vendedores" className="mt-10 rounded-[4px] bg-white/95 backdrop-blur shadow-card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Sou Vendedor / Dropshipper</h2>
          <p className="text-sm text-slate-600 mt-1">
            Operação transparente, margens claras e acompanhamento. Diga-nos onde você atua e como podemos crescer juntos.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="hidden" name="role" value="vendedor" />
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome*</label>
              <input
                name="nome"
                value={state.nome}
                onChange={onChange}
                required
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
              <input
                name="empresa"
                value={state.empresa}
                onChange={onChange}
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail*</label>
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={onChange}
                required
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Site</label>
              <input
                name="site"
                value={state.site}
                onChange={onChange}
                placeholder="https://"
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">País</label>
              <input
                name="pais"
                value={state.pais}
                onChange={onChange}
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Categorias</label>
              <input
                name="categorias"
                value={state.categorias}
                onChange={onChange}
                placeholder="Suplementos, utensílios, cursos..."
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
              <textarea
                name="mensagem"
                value={state.mensagem}
                onChange={onChange}
                rows={4}
                className="w-full rounded-[4px] border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-azul/30"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Upload (catálogo/portfólio) — PDF até 10MB
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={onFile}
                className="w-full text-sm"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input
                id="agree-v"
                type="checkbox"
                name="agree"
                checked={state.agree}
                onChange={onChange}
                className="h-4 w-4"
              />
              <label htmlFor="agree-v" className="text-sm text-slate-700">
                Li e concordo com as políticas da Improve.
              </label>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-azul px-6 py-2 text-white font-medium hover:bg-azul/90"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
