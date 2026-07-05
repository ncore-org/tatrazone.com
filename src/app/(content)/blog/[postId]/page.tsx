import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ postId: string }>;
}

const posts = [
  {
    id: "1",
    title: "Jak wybrać idealny laptop do pracy i nauki?",
    excerpt: "Kompleksowy poradnik zakupowy – na co zwrócić uwagę przy wyborze laptopa w 2025 roku.",
    content: `
      <p>Wybór odpowiedniego laptopa to jedna z najważniejszych decyzji zakupowych. W 2025 roku rynek oferuje ogromny wybór modeli w różnych przedziałach cenowych. Poniżej przedstawiamy kluczowe aspekty, na które warto zwrócić uwagę.</p>
      <h2>Procesor – serce laptopa</h2>
      <p>Do codziennej pracy i nauki wystarczy procesor Intel Core i5 lub AMD Ryzen 5 nowszej generacji. Do bardziej wymagających zastosowań, jak obróbka wideo czy programowanie, warto rozważyć i7/i9 lub Ryzen 7/9.</p>
      <h2>Pamięć RAM</h2>
      <p>Minimum 8 GB RAM to standard, ale zalecamy 16 GB – zwłaszcza jeśli często pracujesz na wielu aplikacjach jednocześnie. Dla graczy i profesjonalistów 32 GB będzie optymalnym wyborem.</p>
      <h2>Dysk SSD</h2>
      <p>Dysk SSD to must-have w 2025 roku. Najlepiej wybrać model z dyskiem NVMe o pojemności co najmniej 512 GB. System i programy będą działać błyskawicznie.</p>
      <h2>Bateria i mobilność</h2>
      <p>Jeśli często pracujesz poza domem, zwróć uwagę na pojemność baterii. Nowoczesne ultrabooki oferują nawet 12-15 godzin pracy na jednym ładowaniu.</p>
    `,
    category: "Poradniki",
    date: "2025-06-28",
    image: "https://picsum.photos/seed/blog1/1200/600",
    author: "Redakcja Tatrazone",
    readTime: "5 min",
    tags: ["laptop", "poradnik zakupowy", "elektronika"],
  },
  {
    id: "2",
    title: "Najlepsze słuchawki bezprzewodowe 2025 – ranking",
    excerpt: "Przetestowaliśmy 10 modeli słuchawek bezprzewodowych. Sprawdź nasz ranking i wybierz najlepsze dla siebie.",
    content: `
      <p>Rynek słuchawek bezprzewodowych rozwija się w zawrotnym tempie. Przygotowaliśmy dla Ciebie ranking najlepszych modeli, które warto rozważyć w 2025 roku.</p>
      <h2>1. QuietSound Pro – najlepsza redukcja szumów</h2>
      <p>Lider naszego rankingu oferuje znakomitą aktywną redukcję szumów (ANC), świetną jakość dźwięku i do 40 godzin pracy na baterii.</p>
      <h2>2. SoundMax Air – najlepszy stosunek jakości do ceny</h2>
      <p>Doskonałe słuchawki w przystępnej cenie. Oferują dobry dźwięk, wygodę noszenia i 30 godzin pracy.</p>
      <h2>3. BassBoost Xtreme – dla miłośników basu</h2>
      <p>Jeśli lubisz mocny, głęboki bas, ten model jest dla Ciebie. Potężne brzmienie i nowoczesny design.</p>
      <p>Wybierając słuchawki, zwróć uwagę na: jakość dźwięku, komfort noszenia, czas pracy na baterii i oczywiście budżet.</p>
    `,
    category: "Rankingi",
    date: "2025-06-25",
    image: "https://picsum.photos/seed/blog2/1200/600",
    author: "Redakcja Tatrazone",
    readTime: "7 min",
    tags: ["słuchawki", "ranking", "audio"],
  },
  {
    id: "3",
    title: "Smart home – jak zacząć budowę inteligentnego domu?",
    excerpt: "Od czego zacząć przygodę z inteligentnym domem? Przedstawiamy niezbędne urządzenia i praktyczne wskazówki.",
    content: `
      <p>Inteligentny dom przestaje być futurystyczną wizją – w 2025 roku to dostępna rzeczywistość. Podpowiadamy, od czego zacząć przygodę z smart home.</p>
      <h2>Od czego zacząć?</h2>
      <p>Najlepiej od małych kroków. Zacznij od inteligentnych żarówek lub gniazdek – to najprostszy i najtańszy sposób na wejście w świat smart home.</p>
      <h2>Wybierz ekosystem</h2>
      <p>Zdecyduj się na jeden ekosystem – Google Home, Apple HomeKit lub Amazon Alexa. Dzięki temu wszystkie urządzenia będą ze sobą współpracować.</p>
      <h2>Niezbędne urządzenia</h2>
      <p>Oświetlenie, termostat, czujniki ruchu, inteligentne zamki i kamery – to podstawa funkcjonalnego inteligentnego domu.</p>
      <h2>Bezpieczeństwo przede wszystkim</h2>
      <p>Pamiętaj o zabezpieczeniu swojej sieci Wi-Fi i regularnych aktualizacjach oprogramowania urządzeń.</p>
    `,
    category: "Poradniki",
    date: "2025-06-20",
    image: "https://picsum.photos/seed/blog3/1200/600",
    author: "Redakcja Tatrazone",
    readTime: "6 min",
    tags: ["smart home", "inteligentny dom", "IoT"],
  },
  {
    id: "4",
    title: "5G w Polsce – co warto wiedzieć w 2025?",
    excerpt: "Sieć 5G w Polsce rozwija się dynamicznie. Sprawdź, jakie korzyści niesie dla Ciebie i czy warto kupić 5G już dziś.",
    content: `
      <p>Sieć 5G w Polsce rozwija się dynamicznie. W 2025 roku zasięg obejmuje już większość dużych miast. Sprawdź, co to oznacza dla Ciebie.</p>
      <h2>Co to jest 5G?</h2>
      <p>5G to piąta generacja sieci komórkowej, oferująca nawet 100 razy większe prędkości niż 4G LTE. To nie tylko szybszy internet, ale też mniejsze opóźnienia.</p>
      <h2>Zasięg 5G w Polsce</h2>
      <p>Wszyscy główni operatorzy – Orange, Play, T-Mobile i Plus – oferują już 5G w większości polskich miast. Zasięg stale się rozszerza.</p>
      <h2>Czy warto kupić telefon 5G?</h2>
      <p>Zdecydowanie tak. Nawet jeśli nie korzystasz z 5G codziennie, telefon z modemem 5G jest lepiej przygotowany na przyszłość i ma wyższą wartość odsprzedaży.</p>
    `,
    category: "Technologie",
    date: "2025-06-18",
    image: "https://picsum.photos/seed/blog4/1200/600",
    author: "Redakcja Tatrazone",
    readTime: "4 min",
    tags: ["5G", "technologia", "smartfon"],
  },
  {
    id: "5",
    title: "Prezenty na Dzień Ojca – pomysły na każdą kieszeń",
    excerpt: "Szukasz prezentu na Dzień Ojca? Przygotowaliśmy zestawienie pomysłów w różnych kategoriach cenowych.",
    content: `
      <p>Szukasz idealnego prezentu na Dzień Ojca? Przygotowaliśmy zestawienie sprawdzonych pomysłów w różnych kategoriach cenowych.</p>
      <h2>Do 100 zł</h2>
      <p>Kubek termiczny, portfel, etui na telefon, książka, zestaw do pielęgnacji brody – to sprawdzone pomysły w przystępnej cenie.</p>
      <h2>Do 300 zł</h2>
      <p>Słuchawki bezprzewodowe, inteligentna żarówka, powerbank, głośnik przenośny, zestaw narzędzi.</p>
      <h2>Do 500 zł</h2>
      <p>Smartwatch, czytnik e-booków, zestaw do domowego barku, gra planszowa premium.</p>
      <h2>Powyżej 500 zł</h2>
      <p>Ekspres do kawy, konsola do gier, tablet, sprzęt sportowy (rower, hulajnoga elektryczna).</p>
      <p>Pamiętaj, że najlepszy prezent to taki, który trafia w zainteresowania obdarowywanego!</p>
    `,
    category: "Inspiracje",
    date: "2025-06-15",
    image: "https://picsum.photos/seed/blog5/1200/600",
    author: "Redakcja Tatrazone",
    readTime: "3 min",
    tags: ["prezenty", "Dzień Ojca", "inspiracje"],
  },
  {
    id: "6",
    title: "Jak dbać o baterię w smartfonie? 10 praktycznych porad",
    excerpt: "Żywotność baterii w smartfonie można znacząco wydłużyć. Poznaj sprawdzone sposoby na dłuższą pracę bez ładowania.",
    content: `
      <p>Żywotność baterii w smartfonie można znacząco wydłużyć, stosując kilka prostych zasad. Oto 10 sprawdzonych porad.</p>
      <h2>1. Unikaj skrajnych temperatur</h2>
      <p>Baterie litowo-jonowe najlepiej czują się w temperaturach 15-25°C. Unikaj zostawiania telefonu na słońcu lub w mrozie.</p>
      <h2>2. Nie ładuj do 100%</h2>
      <p>Optymalny zakres ładowania to 20-80%. Ładowanie do 100% i rozładowywanie do 0% przyspiesza degradację baterii.</p>
      <h2>3. Używaj ładowarki dobrej jakości</h2>
      <p>Tanie, niecertyfikowane ładowarki mogą uszkodzić baterię. Zawsze używaj oryginalnej lub sprawdzonej ładowarki.</p>
      <h2>4. Wyłącz niepotrzebne funkcje</h2>
      <p>Bluetooth, GPS, NFC – wyłączaj je, gdy nie są potrzebne. To znacznie wydłuży czas pracy na baterii.</p>
      <h2>5. Zmniejsz jasność ekranu</h2>
      <p>Ekran to największy konsument energii. Używaj automatycznej jasności lub ustaw ją na poziomie 50-60%.</p>
      <p>Stosując te porady, możesz znacząco wydłużyć żywotność baterii swojego smartfona!</p>
    `,
    category: "Poradniki",
    date: "2025-06-12",
    image: "https://picsum.photos/seed/blog6/1200/600",
    author: "Redakcja Tatrazone",
    readTime: "5 min",
    tags: ["bateria", "smartfon", "poradnik"],
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ postId: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;
  const post = posts.find((p) => p.id === postId);
  if (!post) return { title: "Artykuł nie znaleziony" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { postId } = await params;
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="container-site py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Artykuł nie znaleziony
        </h1>
        <p className="text-gray-500 mb-8">
          Przepraszamy, ten artykuł nie istnieje.
        </p>
        <Link
          href="/blog"
          className="text-primary-600 font-medium hover:text-primary-700"
        >
          Powrót do bloga
        </Link>
      </div>
    );
  }

  return (
    <article className="container-site py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600 transition-colors">
          Strona główna
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary-600 transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.readTime} czytania</span>
          <span className="text-xs text-gray-400">
            {new Date(post.date).toLocaleDateString("pl-PL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-500 text-lg">{post.excerpt}</p>
        <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
          <span>Autor: {post.author}</span>
        </div>
      </header>

      {/* Featured image */}
      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <div
          className="prose prose-gray max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
            prose-h2:text-2xl
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-200">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 font-medium px-3 py-1.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            ← Powrót do bloga
          </Link>
        </div>
      </div>
    </article>
  );
}
