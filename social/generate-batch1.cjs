// สร้างภาพโพสต์โซเชียลชุดที่ 1 (10 โพสต์) — โทนแบรนด์ครีม-พีช/coral ของ friendsay.com
// ตัวเลขทุกตัวมาจากข้อมูลจริงใน src/data/ และ price-history ledger — ห้ามแต่งเพิ่ม
// รัน: node social/generate-batch1.cjs  → ได้ PNG 1080x1080 ใน social/batch-1/
const sharp = require("sharp");
const path = require("path");

const FONT = "Leelawadee UI, Tahoma";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const card = (p) => {
  let y = 250;
  const parts = [];

  // headline (ใหญ่ เข้ม)
  for (const line of p.title) {
    parts.push(`<text x="80" y="${y}" font-family="${FONT}" font-size="66" font-weight="bold" fill="#1f2937">${esc(line)}</text>`);
    y += 88;
  }
  y += 18;

  // บรรทัดรอง (ถ้ามี)
  for (const line of p.sub || []) {
    parts.push(`<text x="80" y="${y}" font-family="${FONT}" font-size="40" fill="#3f4e5c">${esc(line)}</text>`);
    y += 58;
  }
  if ((p.sub || []).length) y += 12;

  // ตัวเลข/ประโยคเด่น (coral ใหญ่)
  for (const line of p.big || []) {
    parts.push(`<text x="80" y="${y}" font-family="${FONT}" font-size="${p.bigSize || 78}" font-weight="bold" fill="#ff6b5a">${esc(line)}</text>`);
    y += (p.bigSize || 78) + 22;
  }
  y += 14;

  // bullet facts
  for (const line of p.bullets || []) {
    parts.push(`<circle cx="92" cy="${y - 12}" r="7" fill="#0ea5a0"/>`);
    parts.push(`<text x="118" y="${y}" font-family="${FONT}" font-size="36" fill="#3f4e5c">${esc(line)}</text>`);
    y += 62;
  }

  return `<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#fff8ee"/>
  <circle cx="540" cy="-140" r="520" fill="#ffd6ba" opacity="0.42"/>
  <circle cx="1120" cy="1120" r="300" fill="#ffd6ba" opacity="0.28"/>

  <!-- badge หมวด -->
  <rect x="80" y="96" rx="26" width="${p.badge.length * 30 + 56}" height="52" fill="#ff6b5a"/>
  <text x="${80 + (p.badge.length * 30 + 56) / 2}" y="131" font-family="${FONT}" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">${esc(p.badge)}</text>

  ${parts.join("\n")}

  <!-- footer แบรนด์ -->
  <line x1="80" y1="920" x2="1000" y2="920" stroke="#e8d9c4" stroke-width="2"/>
  <circle cx="104" cy="975" r="24" fill="#1f2937"/>
  <text x="104" y="987" font-family="${FONT}" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">F</text>
  <text x="146" y="988" font-family="${FONT}" font-size="34" font-weight="bold" fill="#1f2937">friendsay.com</text>
  <text x="1000" y="988" font-family="${FONT}" font-size="27" fill="#8a7a68" text-anchor="end">${esc(p.footer || "ตรวจของจริง · ไม่เดายอดขาย · ไม่ขายอันดับ")}</text>
</svg>`;
};

const posts = [
  {
    file: "01-fake-discount.png",
    badge: "ลดจริงหรือลดหลอก",
    title: ["ป้ายลด 46%", "ไม่ได้แปลว่าคุณประหยัด 46%"],
    sub: ["เจอจริงบนหน้าเดียวกัน วันเดียวกัน (2 ก.ค. 2026):", "เครื่องลดความชื้นรุ่นดัง"],
    big: ["ราคาตั้ง ฿13,599 → ขายจริง ฿7,290"],
    bigSize: 62,
    bullets: [
      "ราคาตั้ง = ตัวเลขที่ร้านกำหนดเองได้",
      "อีกรุ่นในหมวดเดียวกัน ตั้ง ฿2,690 ขาย ฿2,434 (ลด 10%)",
      "ก่อนกดซื้อ เทียบกับ “ราคาที่เคยขายจริง” เท่านั้น"
    ]
  },
  {
    file: "02-fake-eco-ac.png",
    badge: "เช็กก่อนโดน",
    title: ["แอร์ชื่อ “ประหยัดไฟ”", "ที่ไม่ใช่อินเวอร์เตอร์"],
    sub: ["เจอจริงในคลังของเรา: ชื่อลิสติ้งเขียนว่าแอร์ประหยัดไฟ", "แต่สเปกจริงเป็นเครื่องธรรมดา (Non-Inverter)"],
    big: ["ราคา ~฿12,750 เท่ารุ่นอินเวอร์เตอร์"],
    bigSize: 56,
    bullets: [
      "เปิดยาวทั้งคืน ค่าไฟแพงกว่าอินเวอร์เตอร์ชัดเจน",
      "คำในชื่อสินค้า ใครก็พิมพ์ใส่ได้ ไม่ต้องพิสูจน์",
      "ดูคำว่า Inverter ในสเปก ไม่ใช่ในชื่อ"
    ]
  },
  {
    file: "03-hisense-vs-haier.png",
    badge: "เทียบกันชัด ๆ",
    title: ["Hisense CE vs Haier VQEC", "อินเวอร์เตอร์ต่ำหมื่น เอาตัวไหน?"],
    sub: ["ราคาที่เคยเห็นจริง: ฿8,452 vs ฿9,545 (ต่างกัน ฿1,093)"],
    big: ["ประกันคอม 12 ปี vs 10 ปี"],
    bigSize: 58,
    bullets: [
      "เอา Hisense ถ้าคุมงบ + อยากได้ประกันคอมยาวสุด",
      "เอา Haier ถ้าเน้นค่าไฟ (แจ้ง SEER ชัด 18.08-18.97)",
      "คำตัดสินเต็ม ๆ อยู่ที่เว็บ (ฟรี ไม่ต้องล็อกอิน)"
    ]
  },
  {
    file: "04-quiet-bedroom.png",
    badge: "ห้องนอนต้องเงียบ",
    title: ["แอร์เงียบสำหรับคนหลับยาก", "รีวิวผู้ซื้อจริงชี้ 3 ตัวนี้"],
    big: ["Mitsubishi · Daikin · Xiaomi"],
    bigSize: 56,
    bullets: [
      "Mitsubishi MSY-KA: รีวิวชมเรื่องเงียบซ้ำมากสุดในคลังเรา",
      "Daikin FTKB: คอยล์ร้อนเงียบ 40dB (รีวิว 6,200+)",
      "งบต่ำหมื่น: Xiaomi ~฿7,924 “เสียงไม่กวนห้องนอน”",
      "เราไม่มีเครื่องวัดเสียง — สรุปจากรีวิวจริง บอกตรง ๆ"
    ]
  },
  {
    file: "05-warranty-truth.png",
    badge: "ความจริงที่คนไม่รู้",
    title: ["จ่ายแพงกว่า", "ไม่ได้แปลว่าประกันยาวกว่า"],
    sub: ["ประกันคอมเพรสเซอร์ (จากหน้าร้านจริง):"],
    big: ["Hisense 12 ปี · Haier 10 ปี", "แบรนด์ญี่ปุ่น 5 ปีเท่ากันหมด"],
    bigSize: 54,
    bullets: [
      "Daikin / Mitsubishi / Panasonic: หน้าร้านระบุ 5 ปีเท่ากัน",
      "สิ่งที่ญี่ปุ่นชนะจริงคือธีมรีวิว “เสียงเงียบ”",
      "เลือกจากโจทย์ตัวเอง ไม่ใช่จากราคาแพง"
    ]
  },
  {
    file: "06-btu-calculator.png",
    badge: "เครื่องมือฟรี",
    title: ["ซื้อแอร์ผิดขนาด", "= จ่ายค่าไฟทิ้งทุกเดือน"],
    sub: ["แอร์เล็กเกินห้อง จะเร่งรอบตลอดเวลา:", "กินไฟกว่า เสียงดังกว่า พังไวกว่า"],
    big: ["คิด BTU ห้องคุณใน 30 วินาที"],
    bigSize: 56,
    bullets: [
      "กรอกแค่ขนาดห้อง แดด และเพดาน",
      "ได้ตัวเลข BTU + รุ่นที่ตรวจแล้วในช่วงนั้น",
      "ฟรี ไม่ต้องล็อกอิน — friendsay.com"
    ]
  },
  {
    file: "07-under-10k.png",
    badge: "งบไม่ถึงหมื่น",
    title: ["แอร์อินเวอร์เตอร์ต่ำหมื่น", "มีจริง และรีวิวไม่ได้แย่"],
    sub: ["ราคาที่เคยเห็นจริง (2 ก.ค. 2026 — เปลี่ยนได้ทุกวัน):"],
    big: ["฿7,490 / ฿7,924 / ฿7,995"],
    bigSize: 62,
    bullets: [
      "Midea Celest ~฿7,490 (เช็กร้าน reseller ให้ดีก่อน)",
      "Xiaomi Mijia ~฿7,924 ร้าน official ดูค่าไฟในแอปได้",
      "CANDY ~฿7,995 รีวิวเยอะสุดในกลุ่ม 10,400+ รายการ"
    ]
  },
  {
    file: "08-install-cost.png",
    badge: "ก่อนโอนต้องรู้",
    title: ["ราคาแอร์บนหน้าเว็บ", "ไม่ใช่ราคาจบ"],
    sub: ["ร้านตัวแทน Daikin รายใหญ่เตือนไว้เองบนหน้าร้าน:"],
    big: ["90% ของงานติดตั้ง", "มีค่าใช้จ่ายหน้างานเพิ่ม"],
    bigSize: 56,
    bullets: [
      "รางครอบท่อ / ขาแขวน / ท่อส่วนเกิน จ่ายเพิ่มหน้างาน",
      "ถามร้านก่อนโอน: ราคานี้รวมอะไรบ้าง กี่เมตร",
      "เช็กลิสต์คำถามช่างฉบับเต็ม อยู่บนเว็บเรา"
    ]
  },
  {
    file: "09-seer.png",
    badge: "ศัพท์ต้องรู้",
    title: ["SEER คือตัวเลขเดียว", "ที่บอกว่าแอร์กินไฟแค่ไหน"],
    sub: ["ยิ่งสูงยิ่งประหยัด — แต่ร้านส่วนใหญ่ไม่แจ้งตัวเลขนี้"],
    big: ["ในคลังเรา มีรุ่นเดียวที่แจ้งครบ"],
    bigSize: 50,
    bullets: [
      "Haier VQEC แจ้ง SEER รายขนาด 18.08-18.97",
      "รุ่นที่คุณเล็งไม่แจ้ง? ทักถามร้านได้เลย",
      "ร้านที่ตอบไม่ได้ = สัญญาณให้ระวัง"
    ]
  },
  {
    file: "10-who-we-are.png",
    badge: "เราคือใคร",
    title: ["Friendsay", "เพื่อนช่วยเลือกก่อนกดซื้อ"],
    sub: ["เว็บเทียบสินค้า Shopee ที่ทำงานด้วยกติกาเดียว:", "ทุกตัวเลขต้องมาจากหน้าร้านจริง มีวันที่กำกับ"],
    big: ["ไม่เดายอดขาย · ไม่ขายอันดับ"],
    bigSize: 54,
    bullets: [
      "เทียบสินค้ารายคู่ พร้อมคำตัดสินแบบเพื่อน",
      "บันทึกราคาย้อนหลัง จับป้ายลดหลอก",
      "เครื่องคิด BTU ฟรี + จุดระวังก่อนจ่ายทุกรุ่น"
    ]
  }
];

(async () => {
  for (const p of posts) {
    await sharp(Buffer.from(card(p))).png().toFile(path.join(__dirname, "batch-1", p.file));
    console.log("✓", p.file);
  }
})();
