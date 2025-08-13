"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  source?: string;
  link: string;
};

export default function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Dados de exemplo - futuramente substituir por API Instagram/Twitter
    setNews([
      {
        id: 1,
        title: "Novo suplemento Improve é destaque na mídia",
        date: "14 Ago 2025",
        source: "Improve Center",
        link: "#",
      },
      {
        id: 2,
        title: "Estudo confirma benefícios da creatina para performance",
        date: "12 Ago 2025",
        source: "Journal of Sports Science",
        link: "#",
      },
      {
        id: 3,
        title: "Nutrição de alta performance em 5 passos",
        date: "10 Ago 2025",
        source: "Improve Blog",
        link: "#",
      },
    ]);
  }, []);

  return (
    <aside className="w-full space-y-4">
      <h3 className="text-xl font-semibold text-azul">Últimas Notícias</h3>
      <ul className="space-y-3">
        {news.map((item) => (
          <li
            key={item.id}
            className="border-b border-gray-200 pb-2 hover:bg-gray-50 transition rounded-sm px-2"
          >
            <Link href={item.link} className="block">
              <p className="text-sm text-gray-800 font-medium">
                {item.title}
              </p>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>{item.date}</span>
                {item.source && <span>{item.source}</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
