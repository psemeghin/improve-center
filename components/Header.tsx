import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur bg-areia/90 border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/media/logos/simbolo-azul.svg" alt="Improve" width={22} height={22} priority />
          {/* nome some quando rola */}
          <Image
            src="/media/logos/logo-horizontal-azul.svg"
            alt="Improve"
            width={98}
            height={18}
            className={`${scrolled ? "opacity-0 w-0" : "opacity-100"} transition-all duration-200 hidden sm:block`}
            priority
          />
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Produtos</Link>
          <Link href="/conteudo" className="hover:underline">Conteúdo</Link>
          <Link href="/parcerias" className="hover:underline">Parceria</Link>
          <Link href="/#opinions" className="hover:underline">Opiniões</Link>
          <Link href="/cart" className="hidden md:inline hover:underline">Carrinho</Link>
          <Link href="/login" className="ml-1 rounded-md bg-emerald-600 px-3 py-1.5 text-white hover:bg-emerald-700">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
