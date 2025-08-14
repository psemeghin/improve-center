import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#FFF6E3]/90 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Marca: sol + logotipo (sol sempre visível; nome some com scroll via CSS se desejar) */}
        <Link href="/" className="flex items-center gap-2">
          {/* Ajuste os caminhos das logos conforme seu /public/media/logos/... */}
          <Image
            src="/media/logos/simbolo-azul.svg"
            alt="Improve"
            width={20}
            height={20}
            priority
          />
          <Image
            src="/media/logos/logo-horizontal-azul.svg"
            alt="Improve"
            width={92}
            height={18}
            className="hidden sm:block"
            priority
          />
        </Link>

        {/* Navegação */}
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Produtos</Link>
          <Link href="/conteudo" className="hover:underline">Conteúdo</Link>
          <Link href="/parcerias" className="hover:underline">Parceria</Link>
          <Link href="/#opinions" className="hover:underline">Opiniões</Link>
          <Link
            href="/carrinho"
            className="hidden md:inline-flex hover:underline"
          >
            Carrinho
          </Link>
          <Link
            href="/login"
            className="ml-2 rounded-md border border-emerald-200 px-3 py-1.5 text-emerald-700 hover:bg-emerald-50"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
