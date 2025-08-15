import Layout from "../components/layout";
export default function LoginPage() {
  return (
    <Layout title="Login — Improve">
      <div className="mx-auto max-w-sm px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Entrar</h1>
        <form className="rounded-xl border border-slate-200 bg-white/70 shadow-sm p-6 space-y-4">
          <input type="email" placeholder="E‑mail" className="w-full rounded-md border-slate-300" />
          <input type="password" placeholder="Senha" className="w-full rounded-md border-slate-300" />
          <button className="w-full rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Entrar</button>
        </form>
      </div>
    </Layout>
  );
}
