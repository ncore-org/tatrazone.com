import { products, getProductById, getRelatedProducts } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
    productId: String(product.id),
  }));
}

const categoryNames: Record<string, string> = {
  elektronika: "Elektronika",
  "rtv-agd": "RTV i AGD",
  "dom-i-ogrod": "Dom i ogród",
  moda: "Moda",
  sport: "Sport",
  dziecko: "Dziecko",
  "zdrowie-i-uroda": "Zdrowie i uroda",
  motoryzacja: "Motoryzacja",
  "ksiazki-i-media": "Książki i media",
  "artykuly-biurowe": "Artykuły biurowe",
  spozywcze: "Spożywcze",
  zwierzeta: "Zwierzęta",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; productId: string }>;
}) {
  const { productId } = await params;
  const product = getProductById(Number(productId));
  const relatedProducts = product ? getRelatedProducts(product) : [];

  return (
    <ProductDetailClient
      product={product ?? null}
      relatedProducts={relatedProducts}
      categoryName={product ? categoryNames[product.slug] ?? product.category : ""}
    />
  );
}
