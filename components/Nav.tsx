// components/Nav.tsx
import Link from "next/link";
import { IMAGES } from "./assets";

export default function Nav() {
  return (
    <header className="w-full border-b bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Improve - Início">
          {/* SVG não precisa de next/image; usa <img> direto */}
          <img
            src={IMAGES.logoLight}
            alt="Improve"
            width={168}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/marketplace" className="hover:underline">Marketplace</Link>
          <Link href="/conteudo" className="hover:underline">Conteúdo</Link>
          <Link href="/assinatura" className="hover:underline">Assinatura</Link>
          <Link
            href="/#cta"
            className="rounded-full bg-leaf px-4 py-2 font-medium text-white shadow-soft hover:opacity-90"
          >
            Unlock your next level
          </Link>
        </nav>
      </div>
    </header>
  );
}
