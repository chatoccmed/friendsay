import { legacyProducts } from "../data/legacyProducts";

const site = "https://friendsay.com";

const staticPaths = [
  "/",
  "/th/",
  "/th/best/air-fryers/",
  "/th/best/water-heaters/",
  "/th/legacy-reviews/",
  "/th/reviews/sample-air-fryer-pro/",
  "/en/tourist/",
  "/about/",
  "/editorial-policy/",
  "/affiliate-disclosure/"
];

const paths = [...staticPaths, ...legacyProducts.map((product) => product.preservedPath)];

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
