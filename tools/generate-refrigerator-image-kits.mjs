import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const roots = [
  "C:/Users/MacbookPro/Documents/FriendSay",
  "C:/Users/MacbookPro/Documents/FriendSay/.github-ready"
];

const width = 1200;
const height = 760;
const updatedAt = "2026-06-19";

const brandPalettes = {
  TOSHIBA: ["#e85646", "#0f8f91", "#f5f8f7"],
  SAMSUNG: ["#244a86", "#4fa2ff", "#f2f6ff"],
  MITSUBISHI: ["#d64035", "#253044", "#fff3f0"],
  HISENSE: ["#008879", "#53cdb9", "#eefaf7"],
  HITACHI: ["#7a6653", "#d2a66b", "#f7f1e8"],
  LG: ["#9c2b62", "#d95d92", "#fff1f6"],
  HAIER: ["#2d81c2", "#63c3df", "#eef8ff"],
  TCL: ["#00865f", "#63c98c", "#eefaf3"],
  SHARP: ["#d9483d", "#1f2937", "#fff2f0"]
};

const roomThemes = [
  ["#eef7f8", "#cfdfe3", "#f5d7c6", "#3e8f70"],
  ["#f7f3ed", "#dfd2c4", "#a3c7d8", "#6f8f4e"],
  ["#edf2fb", "#ccd8eb", "#e9bd8f", "#476d9b"],
  ["#f6f0f4", "#ddd4df", "#b7d1a5", "#8b5e6c"],
  ["#eef3ed", "#d1dfd2", "#d9b58c", "#2f7a61"],
  ["#f2f5f7", "#d4dde4", "#c8d4ef", "#536a7a"],
  ["#fff4ec", "#edd7c4", "#b9ded6", "#9a6a42"],
  ["#f0f0f5", "#d6d7e1", "#e3c0a8", "#5e6d8e"]
];

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function parseCsv(raw) {
  const [headerLine, ...lines] = raw.trim().split(/\r?\n/);
  const headers = headerLine.split(",");

  return lines.map((line) => {
    const values = [];
    let current = "";
    let quoted = false;

    for (const char of line) {
      if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        values.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current);

    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
  });
}

function paletteFor(row) {
  return brandPalettes[row.brand] ?? ["#ef6f5e", "#1f766f", "#f8f6f0"];
}

function finishFor(row) {
  const model = row.model.toUpperCase();
  if (model.includes("BK") || model.includes("BLACK")) return ["#23272b", "#373d43", "#0e1114"];
  if (model.includes("GBW") || model.includes("BW")) return ["#d7c7b6", "#eee4d8", "#8b7968"];
  if (model.includes("SL") || model.includes("SSL") || model.includes("DSA") || model.includes("M9")) {
    return ["#d8dee2", "#f7f9fa", "#8d989f"];
  }
  if (model.includes("PGT")) return ["#ded9d1", "#f7f3ed", "#9d9185"];
  return ["#e7eaec", "#fbfcfc", "#a6adb3"];
}

function typeShape(type) {
  if (type === "side-by-side") return { w: 360, h: 520, split: "vertical" };
  if (type === "multi-door") return { w: 390, h: 500, split: "multi" };
  return { w: 300, h: 520, split: "two" };
}

function shadow(cx, cy, rx, opacity = 0.16) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="34" fill="#0f172a" opacity="${opacity}"/>`;
}

function fridge(row, x, y, scale = 1, open = false) {
  const [dark, light, stroke] = finishFor(row);
  const shape = typeShape(row.type);
  const w = shape.w * scale;
  const h = shape.h * scale;
  const r = 24 * scale;
  const side = 18 * scale;
  const handle = stroke === "#0e1114" ? "#eef2f4" : "#6c737a";
  const accent = paletteFor(row)[0];

  let splits = "";
  if (shape.split === "vertical") {
    splits = `
      <line x1="${x + w / 2}" y1="${y + 18 * scale}" x2="${x + w / 2}" y2="${y + h - 18 * scale}" stroke="${stroke}" stroke-width="${2.5 * scale}" opacity="0.7"/>
      <rect x="${x + w / 2 - 32 * scale}" y="${y + 120 * scale}" width="${7 * scale}" height="${190 * scale}" rx="${4 * scale}" fill="${handle}" opacity="0.75"/>
      <rect x="${x + w / 2 + 24 * scale}" y="${y + 120 * scale}" width="${7 * scale}" height="${190 * scale}" rx="${4 * scale}" fill="${handle}" opacity="0.75"/>
    `;
  } else if (shape.split === "multi") {
    splits = `
      <line x1="${x + w / 2}" y1="${y + 18 * scale}" x2="${x + w / 2}" y2="${y + h * 0.56}" stroke="${stroke}" stroke-width="${2.5 * scale}" opacity="0.7"/>
      <line x1="${x + 16 * scale}" y1="${y + h * 0.56}" x2="${x + w - 16 * scale}" y2="${y + h * 0.56}" stroke="${stroke}" stroke-width="${2.5 * scale}" opacity="0.7"/>
      <line x1="${x + 16 * scale}" y1="${y + h * 0.74}" x2="${x + w - 16 * scale}" y2="${y + h * 0.74}" stroke="${stroke}" stroke-width="${2 * scale}" opacity="0.5"/>
      <rect x="${x + w / 2 - 40 * scale}" y="${y + 120 * scale}" width="${7 * scale}" height="${135 * scale}" rx="${4 * scale}" fill="${handle}" opacity="0.75"/>
      <rect x="${x + w / 2 + 32 * scale}" y="${y + 120 * scale}" width="${7 * scale}" height="${135 * scale}" rx="${4 * scale}" fill="${handle}" opacity="0.75"/>
    `;
  } else {
    splits = `
      <line x1="${x + 14 * scale}" y1="${y + h * 0.34}" x2="${x + w - 14 * scale}" y2="${y + h * 0.34}" stroke="${stroke}" stroke-width="${2.5 * scale}" opacity="0.66"/>
      <rect x="${x + w - 42 * scale}" y="${y + 86 * scale}" width="${7 * scale}" height="${105 * scale}" rx="${4 * scale}" fill="${handle}" opacity="0.75"/>
      <rect x="${x + w - 42 * scale}" y="${y + h * 0.48}" width="${7 * scale}" height="${190 * scale}" rx="${4 * scale}" fill="${handle}" opacity="0.75"/>
    `;
  }

  const door = open
    ? `<path d="M ${x + w * 0.52} ${y + 25 * scale} L ${x + w + 110 * scale} ${y - 10 * scale} L ${x + w + 108 * scale} ${y + h - 18 * scale} L ${x + w * 0.52} ${y + h - 24 * scale} Z" fill="${light}" stroke="${stroke}" stroke-width="${2 * scale}" opacity="0.92"/>`
    : "";

  return `
    ${shadow(x + w / 2, y + h + 25 * scale, w * 0.48)}
    <rect x="${x + side}" y="${y + 12 * scale}" width="${w}" height="${h}" rx="${r}" fill="${dark}" opacity="0.18"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="url(#fridgeFace)" stroke="${stroke}" stroke-width="${2.2 * scale}"/>
    <rect x="${x + 18 * scale}" y="${y + 18 * scale}" width="${w - 36 * scale}" height="${h - 36 * scale}" rx="${18 * scale}" fill="#ffffff" opacity="0.12"/>
    ${splits}
    ${door}
    <circle cx="${x + w * 0.5}" cy="${y + h * 0.18}" r="${4 * scale}" fill="${accent}" opacity="0.65"/>
  `;
}

function baseSvg(row, themeIndex = 0) {
  const [accent, accent2, tint] = paletteFor(row);
  const [wall, floor, warm, green] = roomThemes[themeIndex % roomThemes.length];
  const [dark, light] = finishFor(row);

  return {
    accent,
    accent2,
    tint,
    wall,
    floor,
    warm,
    green,
    dark,
    light,
    start: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${wall}"/>
          <stop offset="58%" stop-color="#fffdfa"/>
          <stop offset="100%" stop-color="${tint}"/>
        </linearGradient>
        <linearGradient id="fridgeFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${light}"/>
          <stop offset="50%" stop-color="#f8fafb"/>
          <stop offset="100%" stop-color="${dark}"/>
        </linearGradient>
        <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="${accent2}"/>
        </linearGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#1f2937" flood-opacity="0.16"/>
        </filter>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <path d="M0 618 C180 565 292 657 458 610 C662 552 768 618 960 572 C1068 545 1125 555 1200 518 L1200 760 L0 760 Z" fill="${floor}" opacity="0.78"/>
      <circle cx="1020" cy="132" r="210" fill="${accent2}" opacity="0.10"/>
      <circle cx="192" cy="660" r="180" fill="${warm}" opacity="0.22"/>
      <rect x="70" y="72" width="168" height="16" rx="8" fill="${accent}" opacity="0.24"/>
      <rect x="70" y="102" width="238" height="18" rx="9" fill="#17202a" opacity="0.08"/>
      <rect x="70" y="136" width="188" height="14" rx="7" fill="#64748b" opacity="0.11"/>`,
    end: `</svg>`
  };
}

function kitchenScene(row, index) {
  const b = baseSvg(row, index);
  const side = row.type === "side-by-side" || row.type === "multi-door";
  const fridgeX = side ? 706 : 780;
  return `${b.start}
    <rect x="56" y="240" width="460" height="276" rx="34" fill="#ffffff" opacity="0.58"/>
    <rect x="92" y="320" width="360" height="132" rx="18" fill="${b.warm}" opacity="0.35"/>
    <rect x="96" y="332" width="96" height="105" rx="14" fill="#f9fafb" opacity="0.8"/>
    <rect x="214" y="332" width="96" height="105" rx="14" fill="#f9fafb" opacity="0.8"/>
    <rect x="332" y="332" width="96" height="105" rx="14" fill="#f9fafb" opacity="0.8"/>
    <rect x="64" y="492" width="500" height="52" rx="18" fill="#d9b58c" opacity="0.72"/>
    <rect x="92" y="252" width="170" height="32" rx="16" fill="${b.green}" opacity="0.24"/>
    <circle cx="136" cy="236" r="24" fill="${b.green}" opacity="0.18"/>
    <circle cx="182" cy="230" r="16" fill="${b.green}" opacity="0.22"/>
    <g filter="url(#softShadow)">${fridge(row, fridgeX, 168, side ? 0.95 : 1.02, false)}</g>
    <rect x="764" y="88" width="350" height="28" rx="14" fill="#ffffff" opacity="0.42"/>
    ${b.end}`;
}

function cleanProduct(row, index) {
  const b = baseSvg(row, index + 2);
  const side = row.type === "side-by-side" || row.type === "multi-door";
  return `${b.start}
    <rect x="118" y="222" width="964" height="410" rx="44" fill="#ffffff" opacity="0.7"/>
    <rect x="172" y="588" width="858" height="22" rx="11" fill="#dbe4ea"/>
    <g filter="url(#softShadow)">${fridge(row, side ? 432 : 466, 180, side ? 0.98 : 1.04, false)}</g>
    <rect x="90" y="206" width="215" height="72" rx="28" fill="${b.accent}" opacity="0.10"/>
    <circle cx="954" cy="232" r="54" fill="${b.accent2}" opacity="0.16"/>
    <circle cx="1010" cy="296" r="24" fill="${b.accent}" opacity="0.13"/>
    ${b.end}`;
}

function productDetail(row, index) {
  const b = baseSvg(row, index + 3);
  const [dark, light, stroke] = finishFor(row);
  return `${b.start}
    <rect x="116" y="210" width="968" height="420" rx="46" fill="#ffffff" opacity="0.72"/>
    <rect x="186" y="254" width="396" height="324" rx="32" fill="url(#fridgeFace)" stroke="${stroke}" stroke-width="3"/>
    <rect x="224" y="300" width="320" height="5" rx="3" fill="${stroke}" opacity="0.52"/>
    <rect x="512" y="326" width="10" height="168" rx="5" fill="${stroke}" opacity="0.62"/>
    <circle cx="378" cy="420" r="48" fill="#ffffff" opacity="0.36"/>
    <circle cx="378" cy="420" r="8" fill="${b.accent}" opacity="0.65"/>
    <rect x="646" y="274" width="340" height="66" rx="24" fill="${b.tint}" opacity="0.88"/>
    <rect x="646" y="370" width="294" height="26" rx="13" fill="${b.accent}" opacity="0.16"/>
    <rect x="646" y="420" width="372" height="26" rx="13" fill="${b.accent2}" opacity="0.20"/>
    <rect x="646" y="470" width="254" height="26" rx="13" fill="#94a3b8" opacity="0.22"/>
    <path d="M692 552 C746 508 830 510 884 552" fill="none" stroke="${b.green}" stroke-width="9" stroke-linecap="round" opacity="0.34"/>
    ${b.end}`;
}

function capacityScene(row, index) {
  const b = baseSvg(row, index + 4);
  const side = row.type === "side-by-side" || row.type === "multi-door";
  const x = side ? 370 : 440;
  const w = side ? 430 : 330;
  const h = 470;
  const [dark, light, stroke] = finishFor(row);
  const shelf = (y, color) => `<rect x="${x + 34}" y="${y}" width="${w - 68}" height="12" rx="6" fill="${stroke}" opacity="0.18"/><rect x="${x + 52}" y="${y - 44}" width="78" height="38" rx="12" fill="${color}" opacity="0.72"/><rect x="${x + 150}" y="${y - 58}" width="112" height="52" rx="14" fill="#ffffff" opacity="0.76"/><rect x="${x + w - 140}" y="${y - 36}" width="84" height="30" rx="12" fill="${b.accent2}" opacity="0.46"/>`;
  return `${b.start}
    <rect x="94" y="224" width="1012" height="398" rx="48" fill="#ffffff" opacity="0.64"/>
    ${shadow(x + w / 2, 658, w * 0.55)}
    <rect x="${x}" y="168" width="${w}" height="${h}" rx="34" fill="url(#fridgeFace)" stroke="${stroke}" stroke-width="3"/>
    <rect x="${x + 28}" y="202" width="${w - 56}" height="${h - 74}" rx="28" fill="#f8fafc" opacity="0.9"/>
    ${shelf(310, b.green)}
    ${shelf(420, b.warm)}
    ${shelf(530, b.accent)}
    <rect x="${x + 52}" y="556" width="${w - 104}" height="48" rx="18" fill="${b.accent}" opacity="0.12"/>
    <path d="M${x + w + 18} 194 C${x + w + 140} 226 ${x + w + 138} 548 ${x + w + 18} 600" fill="${light}" stroke="${stroke}" stroke-width="2" opacity="0.72"/>
    <rect x="118" y="308" width="170" height="170" rx="30" fill="${b.tint}" opacity="0.84"/>
    <circle cx="204" cy="392" r="44" fill="${b.accent2}" opacity="0.18"/>
    ${b.end}`;
}

function spaceScene(row, index) {
  const b = baseSvg(row, index + 5);
  const side = row.type === "side-by-side" || row.type === "multi-door";
  const fx = side ? 696 : 780;
  return `${b.start}
    <rect x="112" y="218" width="436" height="360" rx="38" fill="#ffffff" opacity="0.62"/>
    <rect x="156" y="282" width="330" height="222" rx="24" fill="${b.floor}" opacity="0.72"/>
    <path d="M180 520 L498 520 M180 520 L180 258 M498 520 L498 258" stroke="#1f2937" stroke-width="5" stroke-linecap="round" opacity="0.22"/>
    <path d="M204 548 L474 548" stroke="${b.accent}" stroke-width="10" stroke-linecap="round"/>
    <path d="M520 292 L520 506" stroke="${b.accent2}" stroke-width="10" stroke-linecap="round"/>
    <circle cx="204" cy="548" r="13" fill="${b.accent}"/>
    <circle cx="474" cy="548" r="13" fill="${b.accent}"/>
    <circle cx="520" cy="292" r="13" fill="${b.accent2}"/>
    <circle cx="520" cy="506" r="13" fill="${b.accent2}"/>
    <g filter="url(#softShadow)">${fridge(row, fx, 168, side ? 0.86 : 0.96, false)}</g>
    <path d="M${fx - 40} 176 C${fx - 150} 254 ${fx - 150} 432 ${fx - 42} 580" fill="none" stroke="${b.accent}" stroke-width="6" stroke-dasharray="13 16" opacity="0.52"/>
    ${b.end}`;
}

function deliveryScene(row, index) {
  const b = baseSvg(row, index + 6);
  const side = row.type === "side-by-side" || row.type === "multi-door";
  return `${b.start}
    <rect x="82" y="220" width="1036" height="394" rx="46" fill="#ffffff" opacity="0.64"/>
    <rect x="156" y="262" width="320" height="350" rx="22" fill="#d6b08a" opacity="0.72"/>
    <path d="M178 298 L454 298 M178 548 L454 548" stroke="#9a6a42" stroke-width="6" opacity="0.42"/>
    <path d="M226 268 L226 606 M410 268 L410 606" stroke="#9a6a42" stroke-width="5" opacity="0.24"/>
    <circle cx="226" cy="628" r="24" fill="#1f2937" opacity="0.72"/>
    <circle cx="408" cy="628" r="24" fill="#1f2937" opacity="0.72"/>
    <g filter="url(#softShadow)">${fridge(row, side ? 606 : 662, 208, side ? 0.68 : 0.76, false)}</g>
    <rect x="892" y="272" width="148" height="198" rx="22" fill="#f8fafc" stroke="${b.accent}" stroke-width="3" opacity="0.92"/>
    <rect x="920" y="316" width="92" height="12" rx="6" fill="${b.accent}" opacity="0.4"/>
    <rect x="920" y="356" width="92" height="12" rx="6" fill="${b.accent2}" opacity="0.42"/>
    <rect x="920" y="396" width="92" height="12" rx="6" fill="${b.green}" opacity="0.42"/>
    <path d="M910 528 C948 492 992 498 1028 526" stroke="${b.accent}" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.44"/>
    ${b.end}`;
}

function warrantyScene(row, index) {
  const b = baseSvg(row, index + 7);
  return `${b.start}
    <rect x="112" y="222" width="976" height="392" rx="48" fill="#ffffff" opacity="0.66"/>
    <rect x="184" y="282" width="302" height="260" rx="30" fill="#f8fafc" stroke="${b.accent}" stroke-width="3" opacity="0.92"/>
    <rect x="222" y="332" width="210" height="16" rx="8" fill="${b.accent}" opacity="0.34"/>
    <rect x="222" y="382" width="166" height="16" rx="8" fill="${b.accent2}" opacity="0.36"/>
    <rect x="222" y="432" width="210" height="16" rx="8" fill="#94a3b8" opacity="0.34"/>
    <circle cx="410" cy="506" r="34" fill="${b.accent}" opacity="0.16"/>
    <path d="M398 506 L408 518 L430 490" stroke="${b.accent}" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="560" y="270" width="190" height="300" rx="24" fill="${b.tint}" opacity="0.88"/>
    <rect x="590" y="314" width="130" height="34" rx="17" fill="${b.accent2}" opacity="0.42"/>
    <rect x="590" y="382" width="92" height="92" rx="18" fill="${b.accent}" opacity="0.18"/>
    <rect x="826" y="306" width="158" height="230" rx="24" fill="url(#fridgeFace)" stroke="${finishFor(row)[2]}" stroke-width="2.5"/>
    <line x1="844" y1="390" x2="966" y2="390" stroke="${finishFor(row)[2]}" stroke-width="2" opacity="0.5"/>
    <path d="M784 568 C822 534 878 536 920 568" stroke="#1f2937" stroke-width="8" stroke-linecap="round" opacity="0.16" fill="none"/>
    ${b.end}`;
}

const renderers = [
  ["hero", kitchenScene],
  ["product-clean", cleanProduct],
  ["product-detail", productDetail],
  ["capacity", capacityScene],
  ["space", spaceScene],
  ["delivery", deliveryScene],
  ["warranty", warrantyScene]
];

async function ensureDir(target) {
  await fs.mkdir(target, { recursive: true });
}

async function exists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

const queuePath = path.join(roots[0], "docs/refrigerator-review-master-queue.csv");
const rows = parseCsv(await fs.readFile(queuePath, "utf8"));
const ledgerRows = [
  "product_key,brand,model,generated_image_count,generated_status,real_product_image_status,next_action,updated_at"
];

let written = 0;
let bytes = 0;

for (const root of roots) {
  if (!(await exists(root))) continue;
  const outDir = path.join(root, "public/images/refrigerators/models");
  await ensureDir(outDir);

  for (const row of rows) {
    const themeIndex = Number(row.queue_rank) - 1;
    for (const [suffix, render] of renderers) {
      const target = path.join(outDir, `${row.product_key}-${suffix}.jpg`);
      const svg = render(row, themeIndex);
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(target);
      const stat = await fs.stat(target);
      bytes += stat.size;
      written += 1;
    }
  }
}

for (const row of rows) {
  ledgerRows.push([
    row.product_key,
    row.brand,
    row.model,
    renderers.length,
    "generated_complete",
    "pending_exact_product_source",
    "add two clean real product photos after exact marketplace or brand image source is verified",
    updatedAt
  ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
}

await fs.writeFile(
  path.join(roots[0], "docs/refrigerator-image-asset-ledger.csv"),
  `${ledgerRows.join("\n")}\n`,
  "utf8"
);

console.log(JSON.stringify({
  models: rows.length,
  imagesPerModel: renderers.length,
  filesWritten: written,
  totalMB: Number((bytes / 1048576).toFixed(2))
}, null, 2));
