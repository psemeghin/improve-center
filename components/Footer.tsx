// components/Footer.tsx
import Link from "next/link";
import { IMAGES } from "./assets";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <img
            src={IMAGES.logoLight}
            alt="Improve"
            width={150}
            height={28}
            className="h-7 w-auto"
          />
          <p className="text-sm text-slate-600">
            Wellness. Fitness. Healthiness.
          </p>
        </div>

        <div className="text-sm">
          <p className="mb-2 font-medium">Plataforma</p>
          <ul className="space-y-1">
            <li><Link href="/marketplace" className="hover:underline">Marketplace</Link></li>
            <li><Link href="/conteudo" className="hover:underline">Conteúdo</Link></li>
            <li><Link href="/assinatura" className="hover:underline">Assinatura</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-2 font-medium">Contato</p>
          <ul className="space-y-1">
            <li><a href="mailto:contato@improve.center" className="hover:underline">contato@improve.center</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Improve. Todos os direitos reservados.
      </div>
    </footer>
  );
}
