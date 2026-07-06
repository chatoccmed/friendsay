import { legacyProducts } from "../data/legacyProducts";
import { airConditioners } from "../data/airConditioners";
import { queuedAirConditionerReviews } from "../data/airConditionerReviewQueue";
import { queuedRefrigeratorReviews } from "../data/refrigeratorReviewQueue";
import { airConditionerShopeeProofByKey } from "../data/airConditionerShopeeProof";

const site = "https://friendsay.com";

// หน้าเทียบรายคู่ X vs Y (/th/vs/) — ทุกคู่จากคลังแอร์
const vsPaths: string[] = [];
for (let i = 0; i < airConditioners.length; i += 1) {
  for (let j = i + 1; j < airConditioners.length; j += 1) {
    vsPaths.push(`/th/vs/${airConditioners[i].slug}-vs-${airConditioners[j].slug}/`);
  }
}

// หน้า catalog ยอดฮิต (/th/c/<slug>/) — เพิ่มอัตโนมัติตามไฟล์ใน src/data/catalog/
const catalogModules = import.meta.glob("../data/catalog/*.json", { eager: true });
const catalogPaths = Object.values(catalogModules).map((mod) => {
  const catalog = (mod as { default?: { slug: string } }).default ?? (mod as { slug: string });
  return `/th/c/${(catalog as { slug: string }).slug}/`;
});

const staticPaths = [
  "/",
  "/th/",
  "/th/best/air-conditioners/",
  "/th/best/air-conditioners-under-10000/",
  "/th/best/air-conditioners-energy-saving/",
  "/th/best/air-conditioners-quiet-bedroom/",
  "/th/best/air-conditioners-japanese-brands/",
  "/th/best/rainy-season-gear/",
  "/th/guides/btu-calculator/",
  "/th/guides/price-history/",
  "/th/compare/air-conditioners/",
  "/th/best/air-fryers/",
  "/th/best/water-heaters/",
  "/th/legacy-reviews/",
  "/th/reviews/air-conditioners/",
  "/th/reviews/refrigerators/",
  "/th/reviews/candy-vpct-vpgt-air-conditioner/",
  "/th/reviews/tcl-savein-ai-air-conditioner/",
  "/th/reviews/xiaomi-mijia-air-inverter-eco/",
  "/th/reviews/midea-celest-msce-air-conditioner/",
  "/th/reviews/sample-air-fryer-pro/",
  "/en/tourist/",
  "/about/",
  "/editorial-policy/",
  "/affiliate-disclosure/"
];

// เฉพาะรุ่นที่มีหลักฐาน Shopee ระดับ detail_verified เท่านั้น — หน้าที่เหลือติด noindex อยู่
const airConditionerReviewPaths = queuedAirConditionerReviews
  .filter((review) => airConditionerShopeeProofByKey[review.productKey]?.status === "detail_verified")
  .map((review) => `/th/reviews/${review.reviewSlug}/`);
const refrigeratorReviewPaths = queuedRefrigeratorReviews.map((review) => `/th/reviews/refrigerators/${review.reviewSlug}/`);

const paths = [
  ...staticPaths,
  ...catalogPaths,
  ...vsPaths,
  ...airConditionerReviewPaths,
  ...refrigeratorReviewPaths,
  ...legacyProducts.map((product) => product.preservedPath)
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const lastmod = new Date().toISOString();
  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${escapeXml(new URL(path, site).href)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
