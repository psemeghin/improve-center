import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Improve — Wellness. Fitness. Healthness.">
      <section className="container py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-ocean">
            Wellness. Fitness. <span className="text-leaf">Healthness.</span>
          </h1>
          <p className="mt-6 text-lg text-ocean/80 max-w-xl">
            Awaken your full potential. Your journey is our commitment.
          </p>
          <div className="mt-8 flex gap-3">
            <Link className="btn-primary" href="/marketplace">Unlock your next level</Link>
            <Link className="badge" href="/conteudo">Science & nature</Link>
          </div>
          <ul className="mt-8 space-y-2 text-ocean/80 text-sm">
            <li>• Let nature be your medicine.</li>
            <li>• Energy for your best day.</li>
            <li>• Care that transforms.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Newsletter semanal</h3>
          <p className="text-ocean/80 mb-4">Curadoria científica, dicas práticas e novidades.</p>
          <form id="newsletter" className="flex gap-2">
            <input type="email" placeholder="seu@email.com"
              className="flex-1 rounded-xl border border-breeze/60 px-4 py-3 outline-none focus:ring-2 focus:ring-leaf/40" />
            <button className="btn-primary" type="button">Assinar</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}