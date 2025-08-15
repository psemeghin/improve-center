type News = { id: string; title: string; date: string };
const news: News[] = [
  { id: "n1", title: "CoQ10 e energia celular — evidências recentes", date: "2025-08-01" },
  { id: "n2", title: "Sono e performance: 5 hábitos essenciais", date: "2025-07-20" },
  { id: "n3", title: "Creatina: dosagem, timing e consistência", date: "2025-07-05" }
];

export default function NewsList() {
  return (
    <aside className="rounded-xl border border-black/5 bg-white/60 p-4 shadow-sm backdrop-blur">
      <div className="mb-3">
        <h3 className="font-semibold">Novidades</h3>
        <p className="text-xs text-slate-600">Saúde, performance e bem‑estar</p>
      </div>
      <ul className="space-y-3">
        {news.map((n) => (
          <li key={n.id} className="text-sm">
            <div className="text-slate-400 text-xs">{n.date}</div>
            <div className="leading-snug">{n.title}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
