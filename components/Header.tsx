// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Produtos" },     // pasta atual é /products
  { href: "/conteudo", label: "Conteúdo" },     // página /conteudo
  { href: "/parcerias", label: "Parceria" },    // página /parcerias
  { href: "/opinioes", label: "Opiniões" },     // se a sua página for /opinioes
  { href: "/cart", label: "Carrinho" },
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-[rgba(255,246,227,0.7)] border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo: sol + nome (o nome some ao rolar via CSS utilitário opcional) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/media/logos/Simbolo-Preto.svg"
            alt="Improve"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/media/logos/Logohorizontal-AzulOceanoProfundo.svg"
            alt="Improve"
            width={92}
            height={18}
            className="hidden sm:block"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors border-b-2 ${
                  active
                    ? "text-emerald-700 border-emerald-700"
                    : "text-slate-700 border-transparent hover:text-emerald-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/login"
          className="rounded-md bg-emerald-700 text-white px-3 py-1 text-sm hover:bg-emerald-800"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
