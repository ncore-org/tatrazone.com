import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Porady, nowości i inspiracje — blog Tatrazone. Przeczytaj o najnowszych trendach, poradnikach zakupowych i nowościach.",
};

const posts = [
  {
    id: 1,
    title: "Jak wybrać idealny laptop do pracy i nauki?",
    excerpt: "Kompleksowy poradnik zakupowy – na co zwrócić uwagę przy wyborze laptopa w 2025 roku. Procesor, RAM, dysk i bateria.",
    category: "Poradniki",
    date: "2025-06-28",
    image: "https://picsum.photos/seed/blog1/800/400",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Najlepsze słuchawki bezprzewodowe 2025 – ranking",
    excerpt: "Przetestowaliśmy dla Ciebie 10 modeli słuchawek bezprzewodowych. Sprawdź nasz ranking i wybierz najlepsze dla siebie.",
    category: "Rankingi",
    date: "2025-06-25",
    image: "https://picsum.photos/seed/blog2/800/400",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Smart home – jak zacząć budowę inteligentnego domu?",
    excerpt: "Od czego zacząć przygodę z inteligentnym domem? Przedstawiamy niezbędne urządzenia i praktyczne wskazówki.",
    category: "Poradniki",
    date: "2025-06-20",
    image: "https://picsum.photos/seed/blog3/800/400",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "5G w Polsce – co warto wiedzieć w 2025?",
    excerpt: "Sieć 5G w Polsce rozwija się w szybkim tempie. Sprawdź, jakie korzyści niesie dla Ciebie i czy warto kupić 5G już dziś.",
    category: "Technologie",
    date: "2025-06-18",
    image: "https://picsum.photos/seed/blog4/800/400",
    readTime: "4 min",
  },
  {
    id: 5,
    title: "Prezenty na Dzień Ojca – pomysły na każdą kieszeń",
    excerpt: "Szukasz prezentu na Dzień Ojca? Przygotowaliśmy zestawienie pomysłów w różnych kategoriach cenowych.",
    category: "Inspiracje",
    date: "2025-06-15",
    image: "https://picsum.photos/seed/blog5/800/400",
    readTime: "3 min",
  },
  {
    id: 6,
    title: "Jak dbać o baterię w smartfonie? 10 praktycznych porad",
    excerpt: "Żywotność baterii w smartfonie można znacząco wydłużyć. Poznaj sprawdzone sposoby na dłuższą pracę bez ładowania.",
    category: "Poradniki",
    date: "2025-06-12",
    image: "https://picsum.photos/seed/blog6/800/400",
    readTime: "5 min",
  },
];

export default function BlogPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Blog Tatrazone
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Porady ekspertów, nowości ze świata technologii i inspiracje zakupowe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <span className="text-xs text-gray-400">
                {new Date(post.date).toLocaleDateString("pl-PL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
