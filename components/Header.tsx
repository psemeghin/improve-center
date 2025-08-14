import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const { pathname, asPath } = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    // ativa por prefixo de rota; para "#testimonials" usa asPath
    if (href.startsWith("/#")) return asPath.endsWith("#testimonials");
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur bg-[#f5f0e8]/80 shadow-md h-14" : "bg-transparent h-20"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo: sol sempre; wordmark some ao rolar */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/media/logos/Simbolo-AzulOceanoProfundo.svg" alt="Improve" width={28} height={28} priority />
          {!scrolled && (
            <Image src="/media/logos/LogotipoHorizontal-AzulOceanoProfundo.svg" alt="Improve" width={120} height={24} priority />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Produtos" },
            { href: "/conteudo", label: "Conteúdo" },
            { href: "/parcerias", label: "Parceria" },
            { href: "/#testimonials", label: "Opiniões" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors ${isActive(link.href) ? "text-[#0A2540]" : "text-slate-700 hover:text-slate-900"}`}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#0A2540] transition-all ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
          <span className="h-6 w-px bg-slate-300/70" />
          <Link href="/cart" className="text-slate-700 hover:text-slate-900">Carrinho</Link>
          <Link href="/login" className="rounded-md px-3 py-1.5 text-white" style={{ backgroundColor: "#0E5162" }}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
