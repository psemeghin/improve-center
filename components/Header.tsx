"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-areia/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/media/logo-sol.svg"
            alt="Improve"
            width={40}
            height={40}
            className="transition-all duration-300"
          />
          {scrolled && (
            <Image
              src="/media/logo-nome.svg"
              alt="Improve text logo"
              width={100}
              height={24}
              className="transition-all duration-300"
            />
          )}
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-azul font-medium">
          <li>
            <Link href="#home" className="hover:underline underline-offset-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="#products" className="hover:underline underline-offset-4">
              Produtos
            </Link>
          </li>
          <li>
            <Link href="#learn" className="hover:underline underline-offset-4">
              Conteúdo
            </Link>
          </li>
          <li>
            <Link href="#partner" className="hover:underline underline-offset-4">
              Parceria
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:underline underline-offset-4">
              Opiniões
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:underline underline-offset-4">
              Carrinho
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline underline-offset-4">
              Login
            </Link>
          </li>
        </ul>
      </nav>
      {/* Sub-linha animada */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-azul/40 to-transparent animate-pulse" />
    </header>
  );
}
