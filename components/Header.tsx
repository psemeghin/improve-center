import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useActiveSection } from './useActiveSection'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Produtos' },
  { id: 'learn', label: 'Conteúdo' },
  { id: 'partner', label: 'Parceria' },
  { id: 'testimonials', label: 'Opiniões' },
] as const

export default function Header() {
  const activeId = useActiveSection(NAV.map(n => n.id))
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled
          ? 'bg-white/70 blur-bg shadow-[0_6px_24px_rgba(10,37,64,0.08)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={[
            'flex items-center justify-between gap-6 transition-all',
            scrolled ? 'h-14' : 'h-20',
          ].join(' ')}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            {/* Sol (sempre visível) */}
            <Image
              src="/media/icons/Simbolo-Preto.svg"
              alt="Improve (símbolo)"
              width={28}
              height={28}
              priority
            />
            {/* Wordmark: some quando rolar */}
            <div
              className={[
                'overflow-hidden transition-opacity duration-200',
                scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100',
              ].join(' ')}
            >
              <Image
                src="/media/logos/LogotipoHorizontal-AzulOceanoProfundo.svg"
                alt="Improve"
                width={120}
                height={24}
                priority
              />
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className={[
                  'nav-link text-[15px] text-slate-800/90 hover:text-slate-900 transition-colors',
                  activeId === id ? 'is-active' : '',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
            <div className="h-6 w-px bg-slate-300/70 mx-2" />
            <Link href="/cart" className="text-[15px] text-slate-800/90 hover:text-slate-900">
              Carrinho
            </Link>
            <Link
              href="/login"
              className="rounded-[10px] px-3 py-1.5 text-[14px] font-medium text-white"
              style={{ backgroundColor: '#0E5162' }}
            >
              Login
            </Link>
          </nav>

          {/* Botão mobile */}
          <button
            className="md:hidden inline-flex items-center rounded-md px-3 py-2 text-slate-800/90 ring-1 ring-slate-300/70"
            onClick={() => setOpen(v => !v)}
            aria-label="Abrir menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 rounded-[12px] bg-white/80 p-3 shadow-[0_8px_28px_rgba(10,37,64,0.10)]">
              {NAV.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="px-3 py-2 rounded-md hover:bg-slate-100/70"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="h-px bg-slate-200 my-2" />
              <Link href="/cart" className="px-3 py-2 rounded-md hover:bg-slate-100/70" onClick={() => setOpen(false)}>
                Carrinho
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-white text-center"
                style={{ backgroundColor: '#0E5162' }}
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
