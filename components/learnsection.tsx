import { contentItems } from "../data/content";

export default function LearnSection() {
  const newsletters = contentItems.filter((i) => i.kind === "newsletter").slice(0, 3);
  const cursos = contentItems.filter((i) => i.kind === "curso").slice(0, 3);
  const ebooks = contentItems.filter((i) => i.kind === "ebook").slice(0, 3);

  const Col = ({ title, items }: { title: string; items: typeof newsletters }) => (
    <div className="rounded-xl border border-black/5 bg-white/60 p-4 shadow-sm backdrop-blur">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-3">
        {items.map((i) => (
          <div key={i.id} className="flex gap-3">
            <div className="w-20 h-14 bg-slate-100 rounded overflow-hidden">
              <img src={i.image} alt={i.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-sm">
              <div className="font-medium leading-snug">{i.title}</div>
              <div className="text-slate-600 line-clamp-2">{i.excerpt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Col title="Newsletters" items={newsletters} />
      <Col title="Cursos" items={cursos} />
      <Col title="E-books" items={ebooks} />
    </div>
  );
}
