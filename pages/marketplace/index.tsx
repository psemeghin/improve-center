import Layout from "../../components/Layout";

const products = [
  { id: 1, name: "CoQ10 Ultra (200mg)", tag: "Suplemento", price: "R$ 189", desc: "Performance e energia celular." },
  { id: 2, name: "Omega-3 Pure", tag: "Suplemento", price: "R$ 149", desc: "EPA/DHA de alta pureza." },
  { id: 3, name: "Detox 21 dias", tag: "Programa", price: "R$ 249", desc: "Protocolo guiado com cardápios." },
  { id: 4, name: "E-book: Sono Profundo", tag: "E-book", price: "R$ 79", desc: "Guia prático de higiene do sono." },
];

export default function Marketplace() {
  return (
    <Layout title="Marketplace — Improve">
      <section className="container py-12">
        <h1 className="text-3xl font-semibold text-ocean mb-6">Marketplace</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="card">
              <div className="badge mb-3 inline-block">{p.tag}</div>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-ocean/80 text-sm mt-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-ocean">{p.price}</span>
                <button className="btn-primary">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}