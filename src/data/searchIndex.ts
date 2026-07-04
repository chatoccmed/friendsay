// ฐานค้นหาหน้าแรก — รวมทุกสินค้าที่ตรวจหลักฐานแล้ว (แอร์ 10 + ของสู้หน้าฝน 7)
// ตัวเลขราคา/ยอดขายมาจากที่เห็นจริงบนหน้าร้าน ณ วันเก็บข้อมูล (กติกา B+D: ยอดขายไม่แสดง = null ห้ามเดา)

import { airConditioners } from "./airConditioners";
import { rainySections } from "./rainyGear";

export type SearchItem = {
  id: string;
  name: string;
  shortName: string;
  category: string;
  keywords: string[];
  priceNum: number;
  priceLabel: string;
  soldNum: number | null;
  soldLabel: string;
  rating: number;
  ratingsCount: number;
  image: string;
  href: string;
  affiliateUrl: string;
  blurb: string;
};

// คำที่แอร์ทุกรุ่นควรจับคู่ได้
const AC_KEYWORDS = ["แอร์", "เครื่องปรับอากาศ", "แอร์ติดผนัง", "air"];
const INVERTER_KEYWORDS = ["อินเวอร์เตอร์", "inverter", "ประหยัดไฟ"];

// ข้อมูลเสริมรายรุ่นที่ไม่มีใน airConditioners.ts: ราคาเป็นตัวเลข, ยอดขายที่เห็นจริง, ปลายทางรีวิว
const acExtras: Record<
  string,
  { priceNum: number; priceLabel: string; soldNum: number | null; soldLabel: string; href: string; inverter: boolean; extraKeywords: string[]; blurb: string }
> = {
  "candy-vpct-vpgt-series": {
    priceNum: 7995,
    priceLabel: "~7,995.- หลังคูปอง",
    soldNum: null,
    soldLabel: "ยอดขายไม่แสดง · รีวิว 10.4พัน รายการ",
    href: "/th/reviews/candy-vpct-vpgt-air-conditioner/",
    inverter: true,
    extraKeywords: ["candy", "แคนดี้", "haier"],
    blurb: "อินเวอร์เตอร์ราคาไม่แรงที่รีวิวแน่นสุดในกลุ่ม (10.4พัน รายการ)"
  },
  "tcl-savein-ai-series": {
    priceNum: 8590,
    priceLabel: "~8,590.- หลังคูปอง",
    soldNum: null,
    soldLabel: "ยอดขายไม่แสดง · รีวิว 9.2พัน รายการ",
    href: "/th/reviews/tcl-savein-ai-air-conditioner/",
    inverter: true,
    extraKeywords: ["tcl", "ทีซีแอล"],
    blurb: "Full DC Inverter แบรนด์ใหญ่ BTU ให้เลือกกว้าง 9,200-24,200"
  },
  "xiaomi-mijia-air-inverter-eco": {
    priceNum: 7924,
    priceLabel: "~7,924.-",
    soldNum: null,
    soldLabel: "ยอดขายไม่แสดง · รีวิว 4.3พัน รายการ",
    href: "/th/reviews/xiaomi-mijia-air-inverter-eco/",
    inverter: true,
    extraKeywords: ["xiaomi", "เสียวหมี่", "mijia", "smart home"],
    blurb: "คุมผ่านแอป Mi Home ได้ เหมาะสาย Xiaomi ecosystem"
  },
  "midea-celest-msce": {
    priceNum: 7490,
    priceLabel: "~7,490-8,490.-",
    soldNum: null,
    soldLabel: "ยอดขายไม่แสดง · รีวิว 193 รายการ",
    href: "/th/reviews/midea-celest-msce-air-conditioner/",
    inverter: true,
    extraKeywords: ["midea", "ไมเดีย"],
    blurb: "ราคาเริ่มถูกสุดในกลุ่ม จุดขายเรื่องประกัน — แต่ไม่รวมติดตั้ง"
  },
  "daikin-ftkb-sabai-series": {
    priceNum: 12875,
    priceLabel: "~12,875.- ช่วง Flash Sale",
    soldNum: 10000,
    soldLabel: "ขายแล้ว 10พัน+ เครื่อง",
    href: "/th/best/air-conditioners/#daikin-ftkb-sabai-series",
    inverter: true,
    extraKeywords: ["daikin", "ไดกิ้น", "sabai"],
    blurb: "แบรนด์ญี่ปุ่นรีวิวแน่นสุด 6.2พัน รายการ คะแนนเต็ม 5.0"
  },
  "hisense-ce-series": {
    priceNum: 8452,
    priceLabel: "~8,452.- ช่วง Flash Sale",
    soldNum: 10000,
    soldLabel: "ขายแล้ว 10พัน+ เครื่อง",
    href: "/th/best/air-conditioners/#hisense-ce-series",
    inverter: true,
    extraKeywords: ["hisense", "ไฮเซนส์"],
    blurb: "อินเวอร์เตอร์ถูกสุดจากร้าน official + ประกันคอม 12 ปี"
  },
  "haier-vqec-series": {
    priceNum: 9545,
    priceLabel: "~9,545.- หลังโค้ดร้าน",
    soldNum: 8000,
    soldLabel: "ขายแล้ว 8พัน+ เครื่อง",
    href: "/th/best/air-conditioners/#haier-vqec-series",
    inverter: true,
    extraKeywords: ["haier", "ไฮเออร์"],
    blurb: "ต่ำหมื่นจากร้าน official แจ้งค่า SEER ชัดทุกขนาด ประกันคอม 10 ปี"
  },
  "mitsubishi-msy-ka-vf-series": {
    priceNum: 14668,
    priceLabel: "~14,668.- ช่วง Flash Sale",
    soldNum: 2000,
    soldLabel: "ขายแล้ว 2พัน+ เครื่อง",
    href: "/th/best/air-conditioners/#mitsubishi-msy-ka-vf-series",
    inverter: true,
    extraKeywords: ["mitsubishi", "มิตซูบิชิ", "มิตซู", "happy inverter", "เงียบ", "ห้องนอน"],
    blurb: "แบรนด์ญี่ปุ่นที่รีวิวชมเรื่องความเงียบมากที่สุด เหมาะห้องนอน"
  },
  "panasonic-cs-cu-yu9zkt": {
    priceNum: 12750,
    priceLabel: "~12,750.- ช่วง Flash Sale",
    soldNum: 267,
    soldLabel: "ขายแล้ว 267 เครื่อง",
    href: "/th/reviews/panasonic-cs-cu-yu9zkt-air-conditioner/",
    inverter: true,
    extraKeywords: ["panasonic", "พานาโซนิค"],
    blurb: "ร้าน official ที่แจกแจงค่าติดตั้งทุกรายการชัดที่สุดในกลุ่ม"
  },
  "panasonic-cs-cu-yn9ykt": {
    priceNum: 12750,
    priceLabel: "~12,750.- ช่วง Flash Sale",
    soldNum: 428,
    soldLabel: "ขายแล้ว 428 เครื่อง",
    href: "/th/reviews/panasonic-cs-cu-yn9ykt-air-conditioner/",
    inverter: false,
    extraKeywords: ["panasonic", "พานาโซนิค", "non-inverter", "ธรรมดา"],
    blurb: "ตัวธรรมดา (Non-Inverter) จากร้าน official — เปิดสั้น ๆ คุ้ม เปิดยาวเปลืองไฟ"
  }
};

// ข้อมูลเสริมของสู้หน้าฝน คีย์ด้วย path รูป (unique ต่อชิ้น)
const rainyExtras: Record<string, { id: string; category: string; extraKeywords: string[] }> = {
  "/images/rainy-gear/little-swan-dryer-real-product.jpg": {
    id: "little-swan-dryer",
    category: "ตู้อบผ้า",
    extraKeywords: ["ตู้อบผ้า", "อบผ้า", "เครื่องอบผ้า", "ผ้าไม่แห้ง", "หน้าฝน", "ของสู้หน้าฝน", "little swan"]
  },
  "/images/rainy-gear/haier-hdv70e1-real-product.jpg": {
    id: "haier-hdv70e1-dryer",
    category: "เครื่องอบผ้า",
    extraKeywords: ["เครื่องอบผ้า", "อบผ้า", "ผ้าไม่แห้ง", "หน้าฝน", "ของสู้หน้าฝน", "haier", "ไฮเออร์"]
  },
  "/images/rainy-gear/tcl-wt09kfdyw-real-product.jpg": {
    id: "tcl-wt09kfdyw-dryer",
    category: "เครื่องอบผ้า",
    extraKeywords: ["เครื่องอบผ้า", "อบผ้า", "ผ้าไม่แห้ง", "หน้าฝน", "ของสู้หน้าฝน", "tcl", "ทีซีแอล"]
  },
  "/images/rainy-gear/sothing-shoe-dryer-real-product.jpg": {
    id: "sothing-shoe-dryer",
    category: "เครื่องอบรองเท้า",
    extraKeywords: ["เครื่องอบรองเท้า", "อบรองเท้า", "เป่ารองเท้า", "รองเท้า", "หน้าฝน", "ของสู้หน้าฝน", "sothing"]
  },
  "/images/rainy-gear/deerma-hx10-real-product.jpg": {
    id: "deerma-hx10-shoe-dryer",
    category: "เครื่องอบรองเท้า",
    extraKeywords: ["เครื่องอบรองเท้า", "อบรองเท้า", "เป่ารองเท้า", "รองเท้า", "หน้าฝน", "ของสู้หน้าฝน", "deerma", "xiaomi"]
  },
  "/images/rainy-gear/hafele-dehumidifier-real-product.jpg": {
    id: "hafele-dehumidifier",
    category: "เครื่องลดความชื้น",
    extraKeywords: ["เครื่องลดความชื้น", "ลดความชื้น", "ความชื้น", "ห้องชื้น", "ขึ้นรา", "เหม็นอับ", "หน้าฝน", "ของสู้หน้าฝน", "hafele", "ฮาเฟเล่"]
  },
  "/images/rainy-gear/xiaomi-dehumidifier-real-product.jpg": {
    id: "xiaomi-smart-dehumidifier",
    category: "เครื่องลดความชื้น",
    extraKeywords: ["เครื่องลดความชื้น", "ลดความชื้น", "ความชื้น", "ห้องชื้น", "ขึ้นรา", "เหม็นอับ", "หน้าฝน", "ของสู้หน้าฝน", "xiaomi", "เสียวหมี่", "smart home"]
  }
};

const rainySectionHref: Record<string, string> = {
  dryer: "/th/best/rainy-season-gear/#dryer",
  shoes: "/th/best/rainy-season-gear/#shoes",
  dehumidifier: "/th/best/rainy-season-gear/#dehumidifier"
};

const acItems: SearchItem[] = airConditioners.map((product) => {
  const extra = acExtras[product.slug];
  if (!extra) throw new Error(`searchIndex: missing acExtras for ${product.slug}`);
  return {
    id: product.slug,
    name: product.name,
    shortName: product.shortName,
    category: "แอร์",
    keywords: [...AC_KEYWORDS, ...(extra.inverter ? INVERTER_KEYWORDS : []), ...extra.extraKeywords],
    priceNum: extra.priceNum,
    priceLabel: extra.priceLabel,
    soldNum: extra.soldNum,
    soldLabel: extra.soldLabel,
    rating: product.rating,
    ratingsCount: product.ratingsCount,
    image: product.image.url,
    href: extra.href,
    affiliateUrl: product.links.shopee,
    blurb: extra.blurb
  };
});

const parseReviewCount = (reviews: string): number => {
  const compact = reviews.match(/([\d.]+)\s*พัน/);
  if (compact) return Math.round(parseFloat(compact[1]) * 1000);
  const plain = reviews.match(/([\d,]+)/);
  return plain ? parseInt(plain[1].replace(/,/g, ""), 10) : 0;
};

const rainyItems: SearchItem[] = rainySections.flatMap((section) =>
  section.picks.map((pick) => {
    const extra = rainyExtras[pick.image];
    if (!extra) throw new Error(`searchIndex: missing rainyExtras for ${pick.image}`);
    return {
      id: extra.id,
      name: pick.name,
      shortName: pick.shortName,
      category: extra.category,
      keywords: extra.extraKeywords,
      priceNum: pick.priceNum,
      priceLabel: pick.price,
      soldNum: pick.soldNum,
      soldLabel: pick.sold,
      rating: pick.rating,
      ratingsCount: parseReviewCount(pick.reviews),
      image: pick.image,
      href: rainySectionHref[section.id] ?? "/th/best/rainy-season-gear/",
      affiliateUrl: pick.affiliateUrl,
      blurb: pick.fitShort
    };
  })
);

export const searchIndex: SearchItem[] = [...acItems, ...rainyItems];

export const searchIndexCount = searchIndex.length;
