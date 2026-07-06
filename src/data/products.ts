export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  badge?: string;
  category: string;
  slug: string;
  description: string;
  specs: { label: string; value: string }[];
  delivery: string;
  inStock: boolean;
  color?: string;
}

export const products: Product[] = [
  // Elektronika
  {
    id: 1, title: "Laptop Gaming XYZ Pro 15″ 32GB RAM", price: 4999, rating: 4.8, reviews: 234,
    image: "https://picsum.photos/seed/laptop1/600/600",
    images: [
      "https://picsum.photos/seed/laptop1/600/600",
      "https://picsum.photos/seed/laptop2/600/600",
      "https://picsum.photos/seed/laptop3/600/600",
      "https://picsum.photos/seed/laptop4/600/600",
    ],
    badge: "Bestseller", category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Profesjonalny laptop gamingowy z procesorem Intel Core i9-13900H, 32GB RAM DDR5, kartą graficzną NVIDIA GeForce RTX 4070 oraz dyskiem SSD 1TB. Idealny do wymagających gier i pracy twórczej.",
    specs: [
      { label: "Procesor", value: "Intel Core i9-13900H" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Dysk", value: "SSD 1TB NVMe" },
      { label: "Karta graficzna", value: "NVIDIA GeForce RTX 4070" },
      { label: "Ekran", value: "15.6″ IPS 165Hz" },
      { label: "System", value: "Windows 11 Pro" },
    ],
  },
  {
    id: 2, title: "Smartfon ABC Ultra 5G 256GB", price: 3299, originalPrice: 3999, rating: 4.6, reviews: 567,
    image: "https://picsum.photos/seed/phone1/600/600",
    images: [
      "https://picsum.photos/seed/phone1/600/600",
      "https://picsum.photos/seed/phone2/600/600",
      "https://picsum.photos/seed/phone3/600/600",
    ],
    badge: "-18%", category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Najnowszy smartfon z 6.7″ ekranem AMOLED 120Hz, procesorem Snapdragon 8 Gen 2, 256GB pamięci wewnętrznej i potrójnym aparatem 108MP. Wodoodporność IP68.",
    specs: [
      { label: "Ekran", value: "6.7″ AMOLED 120Hz" },
      { label: "Procesor", value: "Snapdragon 8 Gen 2" },
      { label: "Pamięć", value: "256GB" },
      { label: "Aparat", value: "108+12+8MP" },
      { label: "Bateria", value: "5000 mAh" },
      { label: "System", value: "Android 14" },
    ],
  },
  {
    id: 3, title: "Słuchawki bezprzewodowe QuietSound Pro", price: 349, originalPrice: 599, rating: 4.7, reviews: 890,
    image: "https://picsum.photos/seed/headphones1/600/600",
    images: [
      "https://picsum.photos/seed/headphones1/600/600",
      "https://picsum.photos/seed/headphones2/600/600",
      "https://picsum.photos/seed/headphones3/600/600",
    ],
    badge: "-42%", category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa pojutrze",
    description: "Bezprzewodowe słuchawki nauszne z aktywną redukcją szumów ANC, 40h pracy na baterii i szybkim ładowaniem USB-C. Dźwięk Hi-Res Audio z kodekiem LDAC.",
    specs: [
      { label: "Typ", value: "Nauszne, zamknięte" },
      { label: "Redukcja szumów", value: "ANC (adaptacyjna)" },
      { label: "Czas pracy", value: "40h" },
      { label: "Ładowanie", value: "USB-C, 10min = 3h" },
      { label: "Kodek", value: "LDAC, AAC, SBC" },
      { label: "Waga", value: "250g" },
    ],
  },
  {
    id: 4, title: "Smartwatch FitPro X200 Black", price: 799, rating: 4.5, reviews: 432,
    image: "https://picsum.photos/seed/watch1/600/600",
    images: [
      "https://picsum.photos/seed/watch1/600/600",
      "https://picsum.photos/seed/watch2/600/600",
    ],
    category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Zaawansowany smartwatch z pomiarem EKG, ciśnienia, saturacji SpO2 i temperatury. GPS, 100 trybów sportowych, 14 dni na baterii.",
    specs: [
      { label: "Ekran", value: "1.43″ AMOLED" },
      { label: "Bateria", value: "14 dni" },
      { label: "Wodoodporność", value: "5ATM (50m)" },
      { label: "GPS", value: "Tak (L1+L5)" },
      { label: "Czujniki", value: "EKG, SpO2, ciśnienie" },
      { label: "System", value: "RTOS" },
    ],
  },
  // RTV i AGD
  {
    id: 5, title: "Tablet TabMax 12.4″ 256GB", price: 2799, originalPrice: 3599, rating: 4.5, reviews: 156,
    image: "https://picsum.photos/seed/tablet1/600/600",
    images: [
      "https://picsum.photos/seed/tablet1/600/600",
      "https://picsum.photos/seed/tablet2/600/600",
    ],
    badge: "-22%", category: "RTV i AGD", slug: "rtv-agd", inStock: true,
    delivery: "Dostawa jutro",
    description: "Profesjonalny tablet z 12.4″ ekranem Super AMOLED, procesorem Snapdragon 8cx Gen 3, 256GB pamięci i rysikiem S-Pen w zestawie.",
    specs: [
      { label: "Ekran", value: "12.4″ Super AMOLED" },
      { label: "Procesor", value: "Snapdragon 8cx Gen 3" },
      { label: "Pamięć", value: "256GB + microSD" },
      { label: "RAM", value: "12GB" },
      { label: "Bateria", value: "10090 mAh" },
      { label: "Waga", value: "608g" },
    ],
  },
  {
    id: 6, title: "Głośnik przenośny BoomBox 360", price: 249, originalPrice: 399, rating: 4.3, reviews: 345,
    image: "https://picsum.photos/seed/speaker1/600/600",
    images: [
      "https://picsum.photos/seed/speaker1/600/600",
      "https://picsum.photos/seed/speaker2/600/600",
    ],
    badge: "-38%", category: "RTV i AGD", slug: "rtv-agd", inStock: true,
    delivery: "Dostawa pojutrze",
    description: "Przenośny głośnik Bluetooth 5.3 z dźwiękiem 360°, wodoodpornością IPX7 i 24h pracy. Funkcja TWS do łączenia dwóch głośników.",
    specs: [
      { label: "Moc", value: "60W RMS" },
      { label: "Łączność", value: "Bluetooth 5.3" },
      { label: "Wodoodporność", value: "IPX7" },
      { label: "Bateria", value: "24h" },
      { label: "Waga", value: "1.2kg" },
    ],
  },
  {
    id: 7, title: "Monitor 27″ 4K UltraSharp HDR", price: 1499, originalPrice: 2199, rating: 4.6, reviews: 123,
    image: "https://picsum.photos/seed/monitor1/600/600",
    images: [
      "https://picsum.photos/seed/monitor1/600/600",
      "https://picsum.photos/seed/monitor2/600/600",
    ],
    badge: "-32%", category: "RTV i AGD", slug: "rtv-agd", inStock: true,
    delivery: "Dostawa jutro",
    description: "Profesjonalny monitor 27″ 4K UHD (3840×2160) z technologią IPS Black, HDR600 i pokryciem AdobeRGB 99%. Idealny do pracy graficznej.",
    specs: [
      { label: "Przekątna", value: "27″" },
      { label: "Rozdzielczość", value: "3840×2160 (4K)" },
      { label: "Matryca", value: "IPS Black" },
      { label: "HDR", value: "HDR600" },
      { label: "AdobeRGB", value: "99%" },
      { label: "Łączność", value: "USB-C, HDMI 2.1, DP 1.4" },
    ],
  },
  {
    id: 8, title: "Konsola GameStation 5 Pro", price: 2199, originalPrice: 2899, rating: 4.9, reviews: 678,
    image: "https://picsum.photos/seed/console1/600/600",
    images: [
      "https://picsum.photos/seed/console1/600/600",
      "https://picsum.photos/seed/console2/600/600",
    ],
    badge: "Bestseller", category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa pojutrze",
    description: "Najpotężniejsza konsola nowej generacji z dyskiem SSD 1TB, obsługą 8K, ray tracingiem i kompatybilnością wsteczną z tysiącami gier.",
    specs: [
      { label: "Dysk", value: "SSD 1TB NVMe" },
      { label: "RAM", value: "16GB GDDR6" },
      { label: "Rozdzielczość", value: "8K / 4K 120fps" },
      { label: "Ray tracing", value: "Tak, sprzętowy" },
      { label: "Łączność", value: "Wi-Fi 6, BT 5.2" },
      { label: "Złącza", value: "HDMI 2.1, USB-C, LAN" },
    ],
  },
  // Dom i ogród
  {
    id: 9, title: "Robot sprzątający CleanBot X1", price: 1299, originalPrice: 1999, rating: 4.5, reviews: 234,
    image: "https://picsum.photos/seed/robot1/600/600",
    images: [
      "https://picsum.photos/seed/robot1/600/600",
      "https://picsum.photos/seed/robot2/600/600",
    ],
    badge: "-35%", category: "Dom i ogród", slug: "dom-i-ogrod", inStock: true,
    delivery: "Dostawa jutro",
    description: "Inteligentny robot sprzątający z nawigacją LiDAR, mapowaniem pomieszczeń, funkcją mopowania i automatycznym opróżnianiem pojemnika na kurz.",
    specs: [
      { label: "Nawigacja", value: "LiDAR + SLAM" },
      { label: "Mopowanie", value: "Tak (elektroniczna kontrola wody)" },
      { label: "Pojemnik na kurz", value: "Auto-empty 2.5L" },
      { label: "Czas pracy", value: "180 min" },
      { label: "Moc ssania", value: "5000 Pa" },
      { label: "Aplikacja", value: "Wi-Fi, HomeKit, Alexa" },
    ],
  },
  {
    id: 10, title: "Ekspres do kawy BaristaPro", price: 899, originalPrice: 1499, rating: 4.7, reviews: 567,
    image: "https://picsum.photos/seed/coffee1/600/600",
    images: [
      "https://picsum.photos/seed/coffee1/600/600",
      "https://picsum.photos/seed/coffee2/600/600",
    ],
    badge: "-40%", category: "RTV i AGD", slug: "rtv-agd", inStock: true,
    delivery: "Dostawa pojutrze",
    description: "Automatyczny ekspres ciśnieniowy z mlynkiem ceramicznym, spieniaczem mleka i 8 przepisami kawowymi. Ciśnienie 19 bar, pojemnik na wodę 1.8L.",
    specs: [
      { label: "Ciśnienie", value: "19 bar" },
      { label: "Pojemnik na wodę", value: "1.8L" },
      { label: "Młynek", value: "Ceramiczny (stożkowy)" },
      { label: "Przepisy", value: "8 (m.in. espresso, latte, cappuccino)" },
      { label: "Spieniacz mleka", value: "Automatyczny" },
      { label: "Moc", value: "1450W" },
    ],
  },
  {
    id: 11, title: "Kamera sportowa ActionCam 4K", price: 399, originalPrice: 699, rating: 4.4, reviews: 456,
    image: "https://picsum.photos/seed/camera1/600/600",
    images: [
      "https://picsum.photos/seed/camera1/600/600",
      "https://picsum.photos/seed/camera2/600/600",
    ],
    badge: "-43%", category: "Sport", slug: "sport", inStock: true,
    delivery: "Dostawa jutro",
    description: "Kamera sportowa 4K z stabilizacją EIS, wodoodpornością do 30m bez obudowy, podwójnym ekranem i zestawem uchwytów w zestawie.",
    specs: [
      { label: "Rozdzielczość", value: "4K 60fps / 2.7K 120fps" },
      { label: "Stabilizacja", value: "EIS 6.0" },
      { label: "Wodoodporność", value: "30m (bez obudowy)" },
      { label: "Ekran", value: "2.33″ dotykowy + 1.5″ przedni" },
      { label: "Bateria", value: "1800 mAh" },
      { label: "Waga", value: "132g" },
    ],
  },
  {
    id: 12, title: "Drukarka 3D PrintPro X2", price: 1899, originalPrice: 2399, rating: 4.4, reviews: 22,
    image: "https://picsum.photos/seed/print1/600/600",
    images: [
      "https://picsum.photos/seed/print1/600/600",
      "https://picsum.photos/seed/print2/600/600",
    ],
    badge: "-21%", category: "Dom i ogród", slug: "dom-i-ogrod", inStock: true,
    delivery: "Dostawa w 3-5 dni",
    description: "Drukarka 3D FDM z polem wydruku 300×300×400mm, drukowaniem z 8 materiałów, automatycznym poziomowaniem i kamerą do monitoringu wydruku.",
    specs: [
      { label: "Technologia", value: "FDM" },
      { label: "Pole wydruku", value: "300×300×400mm" },
      { label: "Materiały", value: "PLA, PETG, TPU, ABS, ASA, Nylon" },
      { label: "Poziomowanie", value: "Automatyczne (BLTouch)" },
      { label: "Maks. temp. dyszy", value: "300°C" },
      { label: "Łączność", value: "Wi-Fi, USB, karta SD" },
    ],
  },
  // Extra bestseller section products - map to elektronika
  {
    id: 13, title: "Laptop Gaming XYZ Pro 15", price: 4999, originalPrice: 6999, rating: 4.8, reviews: 120,
    image: "https://picsum.photos/seed/best0/400/400",
    images: ["https://picsum.photos/seed/best0/400/400", "https://picsum.photos/seed/best0b/400/400"],
    badge: "Bestseller", category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Wydajny laptop gamingowy z procesorem Intel Core i7, 16GB RAM i kartą RTX 4060.",
    specs: [{ label: "Procesor", value: "Intel Core i7-13700H" }, { label: "RAM", value: "16GB DDR5" }, { label: "GPU", value: "RTX 4060" }],
  },
  {
    id: 14, title: "Smartfon ABC Ultra 5G", price: 3399, rating: 4.7, reviews: 165,
    image: "https://picsum.photos/seed/best1/400/400",
    images: ["https://picsum.photos/seed/best1/400/400", "https://picsum.photos/seed/best1b/400/400"],
    category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Smartfon z flagowym procesorem, 256GB pamięci i aparatem 200MP.",
    specs: [{ label: "Procesor", value: "Snapdragon 8 Gen 3" }, { label: "Pamięć", value: "256GB" }, { label: "Aparat", value: "200MP" }],
  },
  {
    id: 15, title: "Słuchawki bezprzewodowe QuietSound", price: 579, originalPrice: 799, rating: 4.6, reviews: 210,
    image: "https://picsum.photos/seed/best2/400/400",
    images: ["https://picsum.photos/seed/best2/400/400", "https://picsum.photos/seed/best2b/400/400"],
    badge: "Nowość", category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Nowe słuchawki z ANC, 50h pracy i dźwiękiem przestrzennym 360°.",
    specs: [{ label: "ANC", value: "Adaptacyjna" }, { label: "Czas pracy", value: "50h" }, { label: "Dźwięk", value: "360° Spatial Audio" }],
  },
  {
    id: 16, title: "Smartwatch FitPro X200", price: 619, rating: 4.5, reviews: 255,
    image: "https://picsum.photos/seed/best3/400/400",
    images: ["https://picsum.photos/seed/best3/400/400", "https://picsum.photos/seed/best3b/400/400"],
    category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Smartwatch z pomiarem EKG, SpO2, GPS i 14-dniową baterią.",
    specs: [{ label: "Czujniki", value: "EKG, SpO2, ciśnienie" }, { label: "GPS", value: "Tak" }, { label: "Bateria", value: "14 dni" }],
  },
  {
    id: 17, title: "Tablet TabMax 12.4", price: 2599, originalPrice: 3599, rating: 4.5, reviews: 300,
    image: "https://picsum.photos/seed/best4/400/400",
    images: ["https://picsum.photos/seed/best4/400/400", "https://picsum.photos/seed/best4b/400/400"],
    badge: "-28%", category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Tablet 12.4″ AMOLED z rysikiem, idealny do pracy twórczej i nauki.",
    specs: [{ label: "Ekran", value: "12.4″ AMOLED" }, { label: "Rysik", value: "W zestawie" }, { label: "Pamięć", value: "256GB" }],
  },
  {
    id: 18, title: "Aparat cyfrowy FotoShot Z10", price: 5299, rating: 4.6, reviews: 345,
    image: "https://picsum.photos/seed/best5/400/400",
    images: ["https://picsum.photos/seed/best5/400/400", "https://picsum.photos/seed/best5b/400/400"],
    category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa jutro",
    description: "Bezlusterkowiec 24MP z nagrywaniem 4K 60fps i stabilizacją IBIS.",
    specs: [{ label: "Matryca", value: "24MP APS-C" }, { label: "Wideo", value: "4K 60fps" }, { label: "Stabilizacja", value: "IBIS 5-stopniowa" }],
  },
  {
    id: 19, title: "Głośnik przenośny BoomBox 360", price: 539, originalPrice: 799, rating: 4.3, reviews: 390,
    image: "https://picsum.photos/seed/best6/400/400",
    images: ["https://picsum.photos/seed/best6/400/400", "https://picsum.photos/seed/best6b/400/400"],
    badge: "-33%", category: "RTV i AGD", slug: "rtv-agd", inStock: true,
    delivery: "Dostawa pojutrze",
    description: "Głośnik Bluetooth 360° z IPX7 i 30h pracy na baterii.",
    specs: [{ label: "Moc", value: "80W" }, { label: "Wodoodporność", value: "IPX7" }, { label: "Bateria", value: "30h" }],
  },
  {
    id: 20, title: "Konsola GameStation 5 Pro", price: 2379, rating: 4.9, reviews: 435,
    image: "https://picsum.photos/seed/best7/400/400",
    images: ["https://picsum.photos/seed/best7/400/400", "https://picsum.photos/seed/best7b/400/400"],
    category: "Elektronika", slug: "elektronika", inStock: true,
    delivery: "Dostawa pojutrze",
    description: "Konsola nowej generacji z SSD 1TB i obsługą 8K.",
    specs: [{ label: "Dysk", value: "SSD 1TB" }, { label: "GPU", value: "RDNA 3" }, { label: "Rozdzielczość", value: "8K" }],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter(p => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter(p => p.slug === product.slug && p.id !== product.id)
    .slice(0, count);
}
