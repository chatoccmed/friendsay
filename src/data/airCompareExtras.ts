// ข้อมูลเสริมกลางสำหรับหน้าเทียบทุกชนิด (X vs Y, compare, spokes)
// รวมค่าที่เคยกระจายอยู่ใน frontmatter หลายหน้าให้เป็นแหล่งเดียว — ทุกค่าคือของที่ตรวจแล้วจากหน้าร้านจริง

import { searchIndex } from "./searchIndex";
import acPriceCsvRaw from "./price-history/air-conditioners.csv?raw";

// ราคาที่เคยเห็นจริงล่าสุดรายรุ่น จาก ledger (วันเดียวกันมีทั้ง list/promo ใช้ promo เพราะคือราคาจ่ายจริง)
export const latestSeenPrice: Record<string, { price: number; date: string; priceType: string }> = {};
for (const line of acPriceCsvRaw.trim().split(/\r?\n/).slice(1)) {
  const [productKey, date, price, priceType] = line.split(",");
  if (!productKey) continue;
  const current = latestSeenPrice[productKey];
  if (!current || date > current.date || (date === current.date && priceType === "promo")) {
    latestSeenPrice[productKey] = { price: Number(price), date, priceType };
  }
}

// ยอดขายที่เห็นจริง (กติกา B+D: Shopee ไม่โชว์ = null ห้ามเดา) — จาก searchIndex
export const soldBySlug = new Map(
  searchIndex.filter((item) => item.category === "แอร์").map((item) => [item.id, { soldNum: item.soldNum, soldLabel: item.soldLabel }])
);

// ประกัน (ฉบับย่อ) — ค่าตรวจแล้วชุดเดียวกับที่ใช้ในหน้า spoke (ที่มาระบุใน warrantyNotes ของแต่ละรุ่นใน airConditioners.ts)
export const warrantyShortBySlug: Record<string, string> = {
  "candy-vpct-vpgt-series": "คอมเพรสเซอร์ 5 ปี",
  "tcl-savein-ai-series": "คอมเพรสเซอร์ 5 ปี",
  "xiaomi-mijia-air-inverter-eco": "5 ปี (ถามร้านว่าส่วนไหน)",
  "midea-celest-msce": "ถามร้านยืนยันก่อนซื้อ",
  "daikin-ftkb-sabai-series": "คอมเพรสเซอร์ 5 ปี",
  "hisense-ce-series": "คอมเพรสเซอร์ 12 ปี + onsite",
  "haier-vqec-series": "คอมเพรสเซอร์ 10 ปี",
  "mitsubishi-msy-ka-vf-series": "โรงงาน 5 ปี",
  "panasonic-cs-cu-yu9zkt": "ผู้ผลิต 5 ปี",
  "panasonic-cs-cu-yn9ykt": "ผู้ผลิต Panasonic"
};

export const THAI_MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
export const thaiDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${THAI_MONTHS[m - 1]} ${y}`;
};
