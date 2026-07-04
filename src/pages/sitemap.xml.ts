import { legacyProducts } from "../data/legacyProducts";
import { queuedAirConditionerReviews } from "../data/airConditionerReviewQueue";
import { queuedRefrigeratorReviews } from "../data/refrigeratorReviewQueue";
import { airConditionerShopeeProofByKey } from "../data/airConditionerShopeeProof";

const site = "https://friendsay.com";

const staticPaths = [
  "/",
  "/th/",
  "/th/best/air-conditioners/",
  "/th/best/rainy-season-gear/",
  "/th/guides/btu-calculator/",
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
