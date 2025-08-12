import Layout from "../../components/Layout";

export default function Conteudo() {
  const items = [
    { t: "Vídeo: Rotina Matinal de Alta Performance", k: "Vídeo" },
    { t: "Protocolo de Suplementos — Performance", k: "PDF" },
    { t: "Live mensal com especialistas", k: "Live" },
  ];
  return (
    <Layout title="Conteúdo Premium — Improve">
      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-ocean mb-6">Conteúdo Premium</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="card">
              <span className="badge mb-3 inline-block">{i.k}</span>
              <h3 className="font-semibold">{i.t}</h3>
              <button className="btn-primary mt-4">Acessar</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}