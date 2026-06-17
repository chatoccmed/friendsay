import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inbox = path.join(repoRoot, "research", "inbox");

const inputArg = process.argv[2];
const inputPath = inputArg
  ? path.resolve(inputArg)
  : fs
      .readdirSync(inbox)
      .filter((name) => /^friendsay-capture-.*\.json$/i.test(name))
      .map((name) => ({ name, file: path.join(inbox, name), time: fs.statSync(path.join(inbox, name)).mtimeMs }))
      .sort((a, b) => b.time - a.time)[0]?.file;

if (!inputPath || !fs.existsSync(inputPath)) {
  console.error("No capture JSON found. Import one with tools/import-latest-marketplace-capture.ps1 first.");
  process.exit(1);
}

const capture = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const visibleLines = Array.isArray(capture.visibleText) ? capture.visibleText : [];
const allText = visibleLines.join("\n");

const brands = [
  "CANDY",
  "TCL",
  "Xiaomi",
  "Midea",
  "Mitsubishi",
  "MITSUBISHI",
  "Daikin",
  "Panasonic",
  "Sharp",
  "SHARP",
  "LG",
  "Samsung",
  "Carrier",
  "Haier",
  "Hisense",
  "CHiQ",
  "Zinney"
];

const modelMatches = [...new Set(allText.match(/\b[A-Z]{2,5}[-\s]?[A-Z0-9]{2,}(?:[-\s]?[A-Z0-9]{2,}){0,3}\b/g) ?? [])]
  .filter((value) => !/^(THE|AND|FOR|WITH|SHOP|SALE|OFF|NEW|HOT|COD|VAT)$/i.test(value))
  .slice(0, 60);

const btuMatches = [...new Set(allText.match(/\b\d{1,2}[,.]?\d{3}\s*BTU\b/gi) ?? [])].slice(0, 40);
const priceMatches = [...new Set(allText.match(/(?:฿\s*)?\d{1,3}(?:,\d{3})+(?:\.\d{2})?/g) ?? [])].slice(0, 60);
const reviewLines = visibleLines
  .filter((line) => /(รีวิว|review|rating|คะแนน|คอมเมนต์|ความคิดเห็น|ขายแล้ว|sold)/i.test(line))
  .slice(0, 80);
const brandLines = visibleLines
  .filter((line) => brands.some((brand) => line.toLowerCase().includes(brand.toLowerCase())))
  .slice(0, 80);
const btuLines = visibleLines.filter((line) => /BTU|บีทียู/i.test(line)).slice(0, 80);
const likelyProductLinks = (capture.productLinks ?? [])
  .map((item) => ({ text: item.text, href: item.href }))
  .slice(0, 80);

const summary = {
  sourceFile: inputPath,
  capturedAt: capture.capturedAt,
  url: capture.url,
  title: capture.title,
  host: capture.host,
  detected: {
    models: modelMatches,
    btu: btuMatches,
    prices: priceMatches,
    productLinks: likelyProductLinks
  },
  evidenceLines: {
    brandLines,
    btuLines,
    reviewLines
  }
};

const outPath = inputPath.replace(/\.json$/i, ".summary.json");
fs.writeFileSync(outPath, JSON.stringify(summary, null, 2), "utf8");
console.log(JSON.stringify(summary, null, 2));
console.error(`Saved summary: ${outPath}`);
