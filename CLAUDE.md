# Friendsay — กติกาประจำโปรเจกต์

Friendsay คือเว็บรีวิวสินค้า affiliate ภาษาไทย สร้างด้วย Astro (static site) deploy ผ่าน GitHub → Cloudflare Pages (push `main` แล้ว deploy อัตโนมัติ)

## Source of truth

- **repo นี้ (`.github-ready`) คือตัวจริงสำหรับขึ้นเว็บ** — ทำงานที่นี่เท่านั้น
- โฟลเดอร์แม่ `C:\Users\Chat\FriendSay` เป็น workspace เก่าของ Codex ห้ามสลับไฟล์ไปมา และขั้นตอน "copy ไป .github-ready" ในเอกสารเก่าไม่ต้องทำแล้ว เพราะแก้ตรงนี้โดยตรง

## คำสั่งที่ใช้ (Windows ใช้ `npm.cmd`)

```
npm.cmd run dev -- --port 4321   # เปิด local preview
npm.cmd run build                # ต้องรันให้ผ่านก่อนจบงานทุกครั้ง
```

## กติกา Git

- **ห้าม force push เด็ดขาด**
- commit เป็นชุดตามเรื่อง พร้อมข้อความ commit ที่สรุปงานชัดเจน
- push ขึ้น `origin main` = deploy จริงทันที ดังนั้น build ต้องผ่านก่อน push เสมอ

## เอกสารที่ต้องอ่านก่อนทำงานรีวิว

- `docs/product-review-operating-template.md` — แม่แบบหน้ารีวิว (โครง 20 ส่วน, เมนูย่อย 14 รายการ, checklist ก่อนเผยแพร่)
- `docs/review-quality-standard.md` — มาตรฐานคุณภาพและน้ำเสียง
- `docs/shopee-b-plus-d-review-system.md` — ระบบเก็บข้อมูล Shopee และสถานะข้อมูล (verified_sold / review_signal_pass / candidate ฯลฯ)

## กติกาเนื้อหา (สรุปข้อห้ามพลาด)

- เขียนแบบเพื่อนที่รู้จริงช่วยเลือก: อบอุ่น ตรงไปตรงมา เฉพาะเจาะจง **ไม่ใช้ภาษา AI** ไม่ hype ไม่อ้างว่าใช้เองถ้าไม่ได้ใช้จริง
- **ห้ามเดายอดขาย** ถ้าไม่เห็นตัวเลขจริงบน Shopee ให้ใช้จำนวน ratings/comments/media reviews แทน ตามระบบ B+D
- รีวิวผู้ซื้อต้องสรุปเป็น**คำแนะนำที่ actionable อย่างน้อย 6 ใบ** (หัวข้อ + เหตุผลจากรีวิว + สิ่งที่ควรทำต่อ) ไม่วาง quote ยาว ไม่สร้างชื่อผู้ซื้อปลอม
- **จุดระวังต้องเป็นความเสี่ยงซื้อจริง** (รุ่นย่อย, BTU, ค่าติดตั้งเพิ่ม, คิวช่าง, ประกัน) ห้ามเขียนว่า "หาข้อมูลไม่ได้" หรือปล่อยสถานะภายใน (`review_signal_pass`, `รอเติมลิงก์ affiliate`) หลุดขึ้นหน้าเว็บ
- ภาพเยอะ **ไม่ซ้ำกันในหน้าเดียว** สลับโทนห้องให้หลากหลาย และ**ทุกภาพกดไปหน้าซื้อได้** พร้อม `rel="sponsored noopener"` + tracking context
- ห้ามใช้ภาพสินค้าแบรนด์อื่นมาเติมหน้า และห้ามใช้ภาพ Gen ซ้ำข้ามสินค้า
- ทุกหน้ารีวิวต้องมี: **sticky buy bar Shopee/Lazada/TikTok**, เมนูย่อย (toc) ครบอย่างน้อย 14 รายการผูก id จริง, คะแนนแบบแถบพลัง (`ScoreBars`), ช่วงบทความล่างเต็มรูปแบบ (`article-layout` + `article-body` + `toc`)
- responsive ต้องผ่าน 3 ขนาด: 390px / 820px / 1440px ไม่มี horizontal overflow, sticky buy bar อยู่กึ่งกลาง (desktop กว้าง ~760px)
- แอร์ทุกหน้า: เช็ก `docs/air-conditioner-review-source-ledger.csv` ก่อนแสดง proof count และรีวิวเต็มต้องมี `evidence_id` ใน `docs/air-conditioner-shopee-evidence-ledger.csv`

## ไฟล์หลักในระบบ

- หน้ารีวิวต้นแบบ: `src/pages/th/reviews/candy-vpct-vpgt-air-conditioner.astro` (โครงสร้างอ้างอิงทุกรีวิว)
- แม่แบบ batch: `src/pages/th/reviews/[slug].astro`, ตู้เย็น: `src/pages/th/reviews/refrigerators/[slug].astro`
- ข้อมูลสินค้า: `src/data/airConditioners.ts`, `src/data/refrigeratorReviewQueue.ts`, `src/data/airConditionerReviewQueue.ts`
- Components: `src/components/PriceButtons.astro`, `ScoreBars.astro`, `AffiliateClickTracker.astro`, `AirCompareTray.astro`
- สไตล์หลัก: `src/styles/global.css`

## Definition of Done ของทุกงาน

1. เนื้อหาผ่าน QA checklist ใน `docs/product-review-operating-template.md`
2. ตรวจ responsive มือถือ/แท็บเล็ต/คอม
3. `npm.cmd run build` ผ่าน
4. commit พร้อมข้อความชัดเจน
