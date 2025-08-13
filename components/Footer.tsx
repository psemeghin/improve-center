import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LOGO + SLOGAN */}
        <div>
          <Image
            src="/media/logos/LogoHorizontal-Branco.svg"
            alt="Improve"
            width={180}
            height={40}
          />
          <p className="mt-4 text-sm leading-6">
            Wellness. Fitness. Healthiness.<br />
            Awaken your full potential.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/marketplace" className="hover:text-white">Marketplace</Link></li>
            <li><Link href="/conteudo" className="hover:text-white">Conteúdo</Link></li>
            <li><Link href="/assinatura" className="hover:text-white">Assinatura</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Ajuda</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            <li><Link href="/politicas" className="hover:text-white">Políticas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Siga-nos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-slate-700 pt-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Improve. All rights reserved.
      </div>
    </footer>
  );
}
