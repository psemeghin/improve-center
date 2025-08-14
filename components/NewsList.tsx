import Image from "next/image";

type News = { id: string; title: string; date: string; image: string; href?: string };

const NEWS: News[] = [
  {
    id: "n1",
    title: "5 hábitos para sua melhor manhã",
    date: "Hoje",
    image: "/media/news/n1.jpg",
  },
  {
    id: "n2",
    title: "Nutrição baseada em evidência",
    date: "Ontem",
    image: "/media/news/n2.jpg",
  },
  {
    id: "n3",
    title: "Sono: o upgrade esquecido",
    date: "2d",
    image: "/media/news/n3.jpg",
  },
];

export default function NewsList() {
  return (
    <aside className="rounded-md bg-white/80 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-900 font-medium">Wellness news</h3>
        <span className="text-sm text-slate-500">Atualizado</span>
      </div>

      <ul className="mt-4 space-y-3">
        {NEWS.map((n) => (
          <li key={n.id} className="flex gap-3">
            <div className="relative h-14 w-20 overflow-hidden rounded">
              <Image src={n.image} alt={n.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-slate-800 line-clamp-2">{n.title}</div>
              <div className="text-xs text-slate-500">{n.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
