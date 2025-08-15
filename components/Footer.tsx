import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="mt-16 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">Improve</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/sobre" className="hover:underline">Sobre nós</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacidade" className="hover:underline">Política de privacidade</Link></li>
            <li><Link href="/termos" className="hover:underline">Termos de uso</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Siga</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="https://instagram.com" className="hover:underline" target="_blank">Instagram</a></li>
            <li><a href="https://twitter.com" className="hover:underline" target="_blank">Twitter</a></li>
            <li><a href="https://facebook.com" className="hover:underline" target="_blank">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">
        © {new Date().getFullYear()} Improve LTDA • Wellness. Fitness. Healthness.
      </div>
    </footer>
  );
}
