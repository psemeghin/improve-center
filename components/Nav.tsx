import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/media/logos/LogoHorizontal-AzulOceanoProfundo.svg"
            alt="Improve"
            width={180}
            height={40}
            priority
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex space-x-6 text-slate-700 font-medium">
          <Link href="/marketplace" className="hover:text-green-600">Marketplace</Link>
          <Link href="/conteudo" className="hover:text-green-600">Conteúdo</Link>
          <Link href="/assinatura" className="hover:text-green-600">Assinatura</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#cta"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
          >
            Unlock your next level
          </Link>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2">
          <Link href="/marketplace" className="block text-slate-700 hover:text-green-600">Marketplace</Link>
          <Link href="/conteudo" className="block text-slate-700 hover:text-green-600">Conteúdo</Link>
          <Link href="/assinatura" className="block text-slate-700 hover:text-green-600">Assinatura</Link>
          <Link
            href="/#cta"
            className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow mt-2"
          >
            Unlock your next level
          </Link>
        </div>
      )}
    </header>
  );
}
