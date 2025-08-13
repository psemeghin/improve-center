"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-areia/90 backdrop-blur border-t border-slate-300 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
        
        {/* Coluna 1 - Logo e descrição */}
        <div>
          <img src="/media/logo-sol.svg" alt="Improve" className="h-10 mb-4" />
          <p className="text-sm text-slate-700 leading-relaxed">
            Transformando vidas pelo equilíbrio 🌱. Produtos e conteúdos para quem busca performance, saúde e bem-estar com ciência e natureza ao seu lado.
          </p>
        </div>

        {/* Coluna 2 - Institucional */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Institucional</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#home" className="hover:underline">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline">Sobre nós</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3 - Legal */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacidade" className="hover:underline">Política de Privacidade</Link></li>
            <li><Link href="/termos" className="hover:underline">Termos de Uso</Link></li>
            <li><Link href="/trocas" className="hover:underline">Trocas e Devoluções</Link></li>
          </ul>
        </div>

        {/* Coluna 4 - Newsletter */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Receba novidades</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Inscrição realizada!");
            }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              required
              placeholder="Seu e-mail"
              className="flex-1 px-3 py-2 rounded-[4px] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-azul"
            />
            <button
              type="submit"
              className="bg-azul text-white text-sm px-4 py-2 rounded-[4px] hover:bg-azul/90 transition"
            >
              Inscrever
            </button>
          </form>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mt-10 border-t border-slate-300 pt-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Improve Center. Todos os direitos reservados.
      </div>
    </footer>
  );
}
