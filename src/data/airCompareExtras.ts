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

// สรุปเสียงรีวิว "เฉพาะตัวสินค้า" (คัดจาก reviewSignals/watch ที่บันทึกจริงตอนรอบเก็บข้อมูล)
// กติกา: ตัดเรื่องบริการร้าน/ขนส่ง/คิวช่าง/แพ็คของ ออกทั้งหมด — เหลือเฉพาะความเย็น เสียง วัสดุ ฟีเจอร์ ค่าไฟ ความทน
export const reviewProsBySlug: Record<string, string[]> = {
  "candy-vpct-vpgt-series": [
    "หลายรีวิวพูดว่าเย็นเร็วและรู้สึกคุ้มราคา",
    "มีคนชมเรื่องเสียงเงียบและหน้าตาเครื่อง"
  ],
  "tcl-savein-ai-series": [
    "รีวิวพูดถึงความเย็นและความคุ้มเมื่อเลือก BTU ถูกกับห้อง"
  ],
  "xiaomi-mijia-air-inverter-eco": [
    "ผู้ซื้อชมว่าเย็นเร็วและเสียงไม่กวนห้องนอน",
    "มีรีวิวชมการใช้งานผ่านแอปและการดูค่าไฟ"
  ],
  "midea-celest-msce": [
    "คะแนนรีวิวเต็ม 5.0 แต่ฐานรีวิวยังเล็ก (193 รายการ) — สรุปเสียงรีวิวตัวเครื่องแบบมั่นใจยังไม่ได้"
  ],
  "daikin-ftkb-sabai-series": [
    "รีวิวย้ำซ้ำเรื่องของแท้ เย็นเร็ว และเสียงเงียบ (คอยล์ร้อน 40dB)",
    "หลายรายซื้อซ้ำเป็นเครื่องที่ 2-3 ของบ้าน",
    "คะแนน 1 ดาวมีแค่ 5 จาก 6,200 รีวิว — ต่ำผิดปกติสำหรับปริมาณนี้"
  ],
  "hisense-ce-series": [
    "รีวิวชมความเย็นเร็วและความเงียบเทียบกับราคา",
    "หลายรายเคยใช้แบรนด์นี้แล้วกลับมาซื้อซ้ำ",
    "รุ่น 23,500 BTU มีรีวิวชมระบบพลาสม่าฟอกอากาศ"
  ],
  "haier-vqec-series": [
    "รีวิวชมว่าเย็นเร็ว หลายบ้านใช้หลายเครื่องและกลับมาซื้อซ้ำ",
    "เคสจริงจากรีวิว: 18,000 BTU กับห้อง 25 ตร.ม. เปิด 25 องศาเย็นทั่วถึง"
  ],
  "mitsubishi-msy-ka-vf-series": [
    "ธีมรีวิวที่ชัดที่สุดคือเสียงเงียบมาก เหมาะห้องนอนและเด็กเล็ก",
    "หลายรายชมว่าระบบอินเวอร์เตอร์ประหยัดไฟและเย็นเร็ว"
  ],
  "panasonic-cs-cu-yu9zkt": [
    "รีวิวชมว่าเย็นเร็วและเสียงเงียบ"
  ],
  "panasonic-cs-cu-yn9ykt": [
    "คะแนน 1-2 ดาวรวมแค่ 1 รายการจาก 176 รีวิว — ความไม่พอใจน้อยมากในกลุ่มที่เก็บ"
  ]
};

export const reviewConsBySlug: Record<string, string[]> = {
  "candy-vpct-vpgt-series": [
    "ยังไม่เจอข้อติเรื่องตัวเครื่องซ้ำ ๆ ในรีวิวที่ไล่อ่าน — จุดที่ต้องระวังคือ VPCT/VPGT เป็นรหัสรุ่นย่อย ต้องเช็กตัวเลือกให้ตรงก่อนกด"
  ],
  "tcl-savein-ai-series": [
    "จะเอาเข้าห้องนอน ควรเปิดรีวิวที่มีวิดีโอฟังเสียงลมและเสียงคอยล์ร้อนของขนาดที่จะซื้อก่อน"
  ],
  "xiaomi-mijia-air-inverter-eco": [
    "จุดเด่นครึ่งหนึ่งอยู่ที่แอป — ถ้าไม่ใช้ smart home เลย สิ่งที่จ่ายไปจะได้ใช้ไม่ครบ"
  ],
  "midea-celest-msce": [
    "Wi-Fi อาจไม่ใช่ฟีเจอร์มาตรฐานของทุกตัวเลือก ต้องยืนยันกับร้านก่อนถ้าอยากคุมผ่านมือถือ",
    "ฐานรีวิวเล็กกว่ารุ่นยอดนิยมมาก เทียบ pattern ปัญหาได้จำกัด"
  ],
  "daikin-ftkb-sabai-series": [
    "รุ่นปี 2025 กับ 2026 ต่างกันที่ขนาดคอยล์ร้อน — เช็กปีที่จะได้รับก่อนโอน"
  ],
  "hisense-ce-series": [
    "บานสวิงปรับได้เฉพาะขึ้น-ลง ไม่ส่ายซ้าย-ขวาอัตโนมัติ — ติดมุมห้องลมอาจกระจายด้านข้างไม่เต็ม",
    "มีรีวิว 1 ดาวอยู่ 54 รายการ ควรกดอ่านหน้ารีวิวจริงก่อนตัดสินใจ"
  ],
  "haier-vqec-series": [
    "มีรีวิวระบุว่าคอมเพรสเซอร์รุ่น 18,000 BTU ตัวใหญ่และเสียงดังกว่าที่คาด",
    "ท่อคอยล์ร้อนเป็นอลูมิเนียม (คอยล์เย็นทองแดง) — ถามร้านเรื่องการดูแลระยะยาว"
  ],
  "mitsubishi-msy-ka-vf-series": [
    "ราคาต่อ BTU สูงกว่าแบรนด์จีนราว 30-50% — จ่ายเพิ่มเพื่อแบรนด์กับความเงียบ",
    "มีให้เลือกแค่ 3 ขนาด ถ้าต้องการ 24,000 BTU ต้องดูซีรีส์อื่น"
  ],
  "panasonic-cs-cu-yu9zkt": [
    "รีวิวเชิงลบที่คนกดว่ามีประโยชน์มากที่สุด (49 คน) ระบุว่าวัสดุงานประกอบดูลดต้นทุน ไม่สมราคาแบรนด์ญี่ปุ่น"
  ],
  "panasonic-cs-cu-yn9ykt": [
    "สำคัญที่สุด: เป็น Non-Inverter แม้ชื่อลิสติ้งเขียนว่าประหยัดไฟ — เปิดยาวทั้งคืนค่าไฟสูงกว่าอินเวอร์เตอร์ราคาใกล้กันชัดเจน"
  ]
};

export const THAI_MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
export const thaiDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${THAI_MONTHS[m - 1]} ${y}`;
};
