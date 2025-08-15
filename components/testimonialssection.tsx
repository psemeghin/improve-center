export default function TestimonialSection() {
  const items = [
    { id: "t1", name: "Marina", text: "Minha energia diária mudou. Conteúdo prático e direto." },
    { id: "t2", name: "Felipe", text: "Produtos essenciais com curadoria séria. Confio de olhos fechados." },
    { id: "t3", name: "Ana", text: "Newsletter excelente. Ciência e clareza, sem ruído." }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t) => (
        <div key={t.id} className="rounded-xl border border-black/5 bg-white/60 p-4 shadow-sm backdrop-blur">
          <p className="text-sm leading-relaxed">“{t.text}”</p>
          <div className="mt-3 text-xs text-slate-500">— {t.name}</div>
        </div>
      ))}
    </div>
  );
}
