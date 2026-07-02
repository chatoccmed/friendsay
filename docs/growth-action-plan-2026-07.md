# Friendsay Growth Action Plan — กรกฎาคม 2026

บันทึกจากการวิเคราะห์เว็บรอบใหญ่ 2 กรกฎาคม 2026 (วิเคราะห์โค้ดทั้ง repo + เว็บ live + สภาพตลาด)

## สถานะที่ตรวจพบ ณ 2026-07-02

จุดแข็ง: โครงหน้ารีวิวลึก, มาตรฐาน editorial (B+D + evidence ledger) เข้มจริง, ภาพ ~483 ไฟล์, trust pages ครบ, build เร็ว

จุดที่ทำให้รายได้ = 0 และไม่มีคนเห็นเว็บ:

1. ลิงก์ทั้งเว็บไม่มี affiliate tracking (Shopee URL ตรง 4 รุ่น ที่เหลือเป็นลิงก์ search; Lazada/TikTok เป็นลิงก์ search 100%)
2. friendsay.com ยังชี้เว็บเก่า (เพื่อนซี้ชี้เป้า) ส่วนเว็บใหม่อยู่ pages.dev ที่ Google ยังไม่ index และ canonical ชี้ข้ามโดเมนผิด
3. ไม่มี analytics (มี AffiliateClickTracker แต่ข้อมูลลง localStorage/dataLayer โดยไม่มีปลายทาง)
4. หน้ารีวิว dynamic จำนวนมาก proofCount = 0 → เสี่ยง scaled content abuse (Google update มี.ค. 2026)
5. ไม่มี og:image, ไม่มี Product/Review JSON-LD, ไม่แสดงวันที่อัปเดตบนหน้า
6. ไม่มีตัวตนผู้เขียน (E-E-A-T อ่อน)

## แผน 30 วัน (เรียงตามผลตอบแทน)

- [x] 1a. บัญชี Shopee Affiliate — **มีอยู่แล้ว ใช้งานได้** (ยืนยัน 2026-07-02, เข้า dashboard ได้) → เหลือสร้างลิงก์ 4 รุ่น verified แล้วเดินสายเข้าเว็บ
- [ ] 1b. สมัคร Involve Asia หรือ Accesstrade สำรอง (สำหรับ Lazada ด้วย)
- [ ] 2. ติด Cloudflare Web Analytics + Google Search Console
- [ ] 3. ย้ายโดเมน friendsay.com → เว็บใหม่ ตาม docs/pre-domain-migration-checklist.md พร้อม redirect URL เก่า (เจ้าของต้องทำเอง: กดใน Cloudflare)
- [ ] 4. ถอดหน้ารีวิวที่ proofCount = 0 ออกจาก sitemap / ใส่ noindex จนกว่าจะมี proof
- [ ] 5. เพิ่ม og:image ทุกหน้า + Product/Review/ItemList JSON-LD + ป้าย "อัปเดตล่าสุด" บนหน้ารีวิว
- [ ] 6. สร้างหน้าผู้เขียน + byline ทุกบทความ + ชูหน้า methodology สาธารณะ
- [ ] 7. เริ่มช่องทางกระจาย 1 ช่องทาง (แนะนำ Facebook Page) + เครื่องมือแรก (BTU calculator)

## ทิศทางคอนเทนต์ที่เจ้าของเลือก (2026-07-02)

ทำเว็บแนว "เพื่อนเล่าเปรียบเทียบเป็นเรื่อง ๆ" — บทความรวมจัดอันดับตามธีม (เช่น 10 แอร์ยอดนิยม / คุ้มค่า / 4 ทิศทาง / ประหยัดไฟ / แอร์เคลื่อนที่) สรุปจากรีวิวผู้ซื้อ + ให้คำแนะนำ ไม่ใช่รีวิวเชิงเทคนิคลึก

โครงที่ใช้: hub-and-spoke — บทความรวม (hub) เป็นทางเข้า traffic → ลิงก์ลงหน้ารีวิวเดี่ยว (spoke) ที่มีอยู่แล้ว → หน้า compare

แผนแม่บทหัวข้อ+ลำดับผลิตทั้งหมดของหมวดแอร์: `docs/air-conditioner-content-master-plan.md` (45 หัวข้อ, 3 เฟส)

กติกาที่ต้องรักษา (จาก docs/shopee-b-plus-d-review-system.md):
- บทความรวมต้องมี ≥10 รุ่นที่ status เป็น verified_sold หรือ review_signal_pass (ตอนนี้มีแค่ 4 → ต้องเก็บ evidence เพิ่มก่อน)
- ห้ามใช้คำ "ขายดีที่สุด" ถ้า sold_count ไม่ครบ ให้ใช้ "น่าสนใจจากจำนวนรีวิวใน Shopee"
- จัดอันดับแยกตามกลุ่มการใช้งาน ไม่เหมารวม
- ใช้สูตร Friendsay Air Score (100 คะแนน 8 หมวด) โดย re-weight ตามธีมของแต่ละบทความ และแสดงเกณฑ์บนหน้า
