// pages/assinatura/index.tsx
import Layout from "../../components/layout";
import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  perks: string[];
};

const plans: Plan[] = [
  { name: "Starter",  price: "Free",      perks: ["Newsletters full"] },
  { name: "Plus",     price: "U$ 19,99",  perks: ["Newsletters full", "Cursos"] },
  { name: "Pro",      price: "U$ 49,99",  perks: ["Newsletters full", "Cursos", "1 Essencial", "1 Improving"] },
  { name: "Premium",  price: "U$ 89,99",  perks: ["Newsletters full", "Cursos", "2 Essenciais", "2 Improving"] },
];

export default function PlansPage() {
  return (
    <Layout
      title="Assinatura — Improve"
      description="Escolha um plano para desbloquear conteúdos e benefícios."
    >
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Planos de assinatura</h1>
          <p className="text-slate-600 mt-2">
            Desbloqueie conteúdos premium e benefícios de produtos.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <div className="text-sm uppercase tracking-wide text-slate-500">
                {p.name}
              </div>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Link
                href="/parcerias"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
              >
                Inscrever-se
              </Link>

              <p className="mt-2 text-xs text-slate-500">
                Ao assinar, você concorda com nossos{" "}
                <Link href="/termos" className="underline hover:text-slate-700">
                  Termos
                </Link>{" "}
                e{" "}
                <Link href="/privacidade" className="underline hover:text-slate-700">
                  Política de Privacidade
                </Link>.
              </p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
