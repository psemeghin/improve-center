// pages/login/index.tsx
import Layout from "../../components/layout";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Layout title="Login — Improve" description="Acesse sua conta na Improve.">
      <main className="mx-auto max-w-md px-4 py-10">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-slate-600 mb-6">
          Entre para acessar compras, conteúdos e assinaturas.
        </p>

        <form
          className="space-y-4 rounded-xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="voce@exemplo.com"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">
            Entrar
          </button>

          <div className="flex items-center justify-between text-sm">
            <Link href="#" className="text-emerald-700 hover:underline">
              Esqueci minha senha
            </Link>
            <Link href="/assinatura" className="text-emerald-700 hover:underline">
              Criar conta
            </Link>
          </div>
        </form>
      </main>
    </Layout>
  );
}
