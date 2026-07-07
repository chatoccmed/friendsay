// ราคาที่เคยเห็นจริงล่าสุดรายรุ่น จาก ledger CSV — โมดูลกลางไม่พึ่งไฟล์ data อื่น
// (แยกออกจาก airCompareExtras เพื่อให้ searchIndex import ได้โดยไม่เกิด circular import)
// วันเดียวกันมีทั้ง list/promo ใช้ promo เพราะคือราคาจ่ายจริง

import acPriceCsvRaw from "./price-history/air-conditioners.csv?raw";

export const latestSeenPrice: Record<string, { price: number; date: string; priceType: string }> = {};

for (const line of acPriceCsvRaw.trim().split(/\r?\n/).slice(1)) {
  const [productKey, date, price, priceType] = line.split(",");
  if (!productKey) continue;
  const current = latestSeenPrice[productKey];
  if (!current || date > current.date || (date === current.date && priceType === "promo")) {
    latestSeenPrice[productKey] = { price: Number(price), date, priceType };
  }
}
