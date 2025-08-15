// pages/404.tsx
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

type Suggestion = { label: string; href: string; aliases?: string[] };

// Rotas oficiais do site + aliases comuns que dão 404
const SUGGESTIONS: Suggestion[] = [
  { label: "Home",      href: "/" ,                aliases: ["home", "inicio"] },
  { label: "Produtos",  href: "/products",         aliases: ["produto", "produtos", "product", "products"] },
  { label: "Conteúdo",  href: "/conteudo",         aliases: ["content", "conteudo", "learn"] },
  { label: "Parcerias", href: "/parcerias",        aliases: ["parceria", "partner", "parcerias", "partners"] },
  { label: "Carrinho",  href: "/cart",             aliases: ["carrinho"] },
  { label: "Login",     href: "/login",            aliases: ["signin", "entrar"] },
];

export default function NotFoundPage() {
  const router = useRouter();
  const [path, setPath] = useState<string>("");

  // Em produção (SSG) o router.asPath pode chegar vazio por um instante;
  // guardamos quando estiver preenchido.
  useEffect(() => {
    if (router && typeof router.asPath === "string") {
      setPath(router.asPath);
    }
  }, [router]);

  // Tenta adivinhar a melhor rota a partir da URL que deu 404
  const guess = useMemo(() => {
    const lower = path.toLowerCase();

    // 1) match direto por alias
    for (const s of SUGGESTIONS) {
      for (const alias of s.aliases ?? []) {
        if (lower.includes(`/${alias}`)) return s;
      }
    }

    // 2) heurística simples por palavras-chave
    if (lower.includes("prod")) return SUGGESTIONS.find(s => s.href === "/products");
    if (lower.includes("cont")) return SUGGESTIONS.find(s => s.href === "/conteudo");
    if (lower.includes("parc") || lower.includes("partner")) return SUGGESTIONS.find(s => s.href === "/parcerias");
    if (lower.includes("cart") || lower.includes("carr")) return SUGGESTIONS.find(s => s.href === "/cart");
    if (lower.includes("login") || lower.includes("entrar")) return SUGGESTIONS.find(s => s.href === "/login");

    return null;
  }, [path]);

  return (
    <main className="min-h-screen bg-[#FAF1DF]">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-2xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">Página não encontrada</h1>
          <p className="mt-2 text-slate-700">
            O endereço <code className="rounded bg-slate-100 px-1 py-0.5">{path || "/"}</code> não existe.
          </p>

          {guess ? (
            <div className="mt-6">
              <p className="text-slate-700">Você quis dizer:</p>
              <div className="mt-3">
                <Link
                  href={guess.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-800 hover:bg-emerald-100"
                >
                  <span>Ir para {guess.label}</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ) : null}

          <div className="mt-8">
            <p className="mb-3 text-slate-700">Atalhos úteis</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
                  >
                    <span>{s.label}</span>
                    <span className="text-slate-400" aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            Dica: use <code className="rounded bg-slate-100 px-1 py-0.5">/products</code> (inglês) para produtos e{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5">/conteudo</code> (português) para conteúdo.
          </div>
        </div>
      </div>
    </main>
  );
}
