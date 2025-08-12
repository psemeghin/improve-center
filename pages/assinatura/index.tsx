import Layout from "../../components/Layout";

export default function Assinatura() {
  const plans = [
    { n: "Starter", v: "R$ 19/mês", f: ["Newsletter semanal", "Curadoria de artigos", "Lives abertas"] },
    { n: "Premium", v: "R$ 49/mês", f: ["Tudo do Starter", "Protocolos e guias", "Acesso prioritário"] },
  ];
  return (
    <Layout title="Assinatura — Improve">
      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-ocean mb-6">Planos de Assinatura</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          {plans.map((p, idx) => (
            <div key={idx} className="card">
              <h3 className="text-xl font-semibold">{p.n}</h3>
              <p className="text-ocean mt-1">{p.v}</p>
              <ul className="mt-4 space-y-2 text-sm text-ocean/80">
                {p.f.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
              <button className="btn-primary mt-6">Assinar</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}