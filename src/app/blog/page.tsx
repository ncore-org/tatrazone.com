import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Tatrazone - tipy na nákupy, novinky a zaujímavosti.",
};

const POSTS = Array.from({ length: 6 }, (_, i) => ({
  title: [
    "Ako vybrať perfektný darček pre blízkych",
    "5 tipov pre úsporné nakupovanie online",
    "Novinky v sortimente letné 2024",
    "Prečo je dôležitá kvalitná elektronika",
    "Ako sa starať o záhradu v lete",
    "Trendy v domácnosti pre tento rok",
  ][i],
  excerpt: [
    "Objavte naše tipy ako vybrať darček, ktorý poteší každého. Od elektroniky po módu, máme pre vás pripravené inšpirácie.",
    "Ušetrite peniaze pri online nakupovaní s našimi overenými tipmi a trikmi. Naučte sa využívať zľavy a akcie.",
    "Pozrite si najnovšie produkty v našej ponuke. Letná kolekcia je tu s množstvom skvelých noviniek.",
    "Investícia do kvalitnej elektroniky sa oplatí. Poradíme vám, na čo si dať pozor pri výbere.",
    "Pripravte si záhradu na leto s našimi osvedčenými radami pre pestovanie a starostlivosť.",
    "Domácnosť 2024 prináša nové trendy v dizajne aj funkcionalite. Inšpirujte sa s nami.",
  ][i],
  date: `2024-${String(i + 3).padStart(2, "0")}-15`,
  category: ["Tipy", "Nakupovanie", "Novinky", "Elektronika", "Záhrada", "Domácnosť"][
    i
  ],
  image: `https://picsum.photos/seed/blog${i}/800/500`,
}));

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Blog
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <article
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <Link href={`/blog/${i + 1}`}>
                  <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary-50 text-primary-700 font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <Link href={`/blog/${i + 1}`}>
                    <h2 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
