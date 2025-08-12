import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b border-breeze/50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-ocean text-lg">Improve</Link>
        <nav className="flex items-center gap-6 text-ocean/90">
          <Link href="/marketplace" className="hover:text-ocean">Marketplace</Link>
          <Link href="/conteudo" className="hover:text-ocean">Conteúdo</Link>
          <Link href="/assinatura" className="hover:text-ocean">Assinatura</Link>
          <a href="#newsletter" className="btn-primary">Unlock your next level</a>
        </nav>
      </div>
    </header>
  );
}