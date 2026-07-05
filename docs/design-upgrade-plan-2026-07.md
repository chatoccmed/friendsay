# Friendsay Design Upgrade Plan — สู่ระดับประกวด

จัดทำ: 2 กรกฎาคม 2026 (จาก design audit ทั้ง 4 แบบหน้า: หน้าหลัก / จัดอันดับ / เปรียบเทียบ / รีวิวเดี่ยว)
เป้าหมาย: โทนเดิม (ครีม-พีช-coral, "เพื่อนช่วยเลือก") แต่ยกระดับ craft + motion + art direction ให้ถึงมาตรฐานรางวัล (Awwwards: Design 40 / Usability 30 / Creativity 20 / Content 10)

## การวินิจฉัย: 7 จุดฉุดความพรีเมียม

1. Typography ใช้ font ระบบ weight หนัก (800-950) แทบทุกหัวข้อ ไม่มีลำดับชั้น
2. ไม่มี motion เลย — เว็บนิ่งเหมือนเอกสาร
3. Art direction ภาพไม่คุมกัน (ภาพ annotated หลุดขึ้นหน้าแรก, สัดส่วน/พื้นหลังภาพสินค้าต่างกัน)
4. ตัวเลข hero หน้าแรกเป็นเป้าหมาย ("50+", "100%") ไม่ใช่ของจริง — ขัดหลักซื่อสัตย์ของแบรนด์
5. จังหวะ spacing ไม่สม่ำเสมอ, sidebar หน้าแรกโล่ง
6. เงา/ขอบเป็นค่า default ไม่มี depth hierarchy
7. หน้าแรกเล่าเรื่องเก่า (flagship = หม้อทอด ทั้งที่หมวดแข็งแรงจริงคือแอร์)

⚠️ พบเพิ่มระหว่างตรวจ: `legacyProducts.ts` hotlink รูปจาก `www.friendsay.com/wp-content/...` (เว็บ WordPress เก่า) — **วันที่ย้ายโดเมน รูปพวกนี้จะแตกทั้งหมด** ต้องดาวน์โหลดเข้า repo ก่อนย้ายโดเมน

## เฟส 1 — Foundation (เริ่ม 2026-07-02)

- [x] Font "Anuphan" (Google Fonts) ทั้งเว็บ + type scale ใหม่ (ลด weight หนัก, letter-spacing, line-height)
- [x] เงา 2 ระดับ + hover lift การ์ด
- [x] แก้ตัวเลข hero หน้าแรกเป็นของจริง (10 รุ่น verified / 10,000+ ยอดขายที่เห็น / อัปเดตล่าสุด)
- [x] Flagship banner หน้าแรก: หม้อทอด → แอร์ 2026 (+ลิงก์เครื่องคิด BTU)
- [x] แก้ sticky ซ้อน 2 ชั้นบนหน้ารีวิวเดี่ยว (compare tray ลอยเหนือ buy bar)
- [ ] Normalize ภาพสินค้าให้พื้นหลัง/สัดส่วนเดียวกันทุกรุ่น (batch แต่งภาพ)
- [ ] เปลี่ยนภาพ annotated (เครื่องวัดออกซิเจน) บนหน้าแรก — ต้องหา/ทำภาพ health & safety ใหม่ก่อน
- [x] ดาวน์โหลดรูป legacy ทั้งหมด (11 ไฟล์) เข้า /images/legacy/ + เขียน path ใหม่ใน legacyProducts.ts — ปลดบล็อกการย้ายโดเมนแล้ว (2026-07-02)

## เฟส 2 — Motion pass (เริ่ม 2026-07-02)

- [x] Scroll reveal (fade + rise 14px, stagger ตามลำดับในกลุ่ม) ผ่าน IntersectionObserver — ข้ามของที่อยู่ใน viewport แรกกัน FOUC
- [x] ตัวเลข count-up ([data-countup]) ที่แถบสถิติหน้าแรก
- [x] ScoreBars เติมค่าเมื่อเลื่อนถึง
- [x] Hover states การ์ด (ยก 4px + เงาเข้ม + ภาพ scale 1.03, transform-only)
- [x] เคารพ prefers-reduced-motion ทุก animation
- [ ] View Transitions (Astro ClientRouter) — ภาพ morph ข้ามหน้า ⚠️ ต้อง refactor สคริปต์ทุกหน้า (BTU calc, compare tray, tracker) ให้ผูกกับ astro:page-load ก่อนเปิด ไม่งั้นพังตอน client-side navigation
- [ ] Sticky buy bar slide-in เมื่อเลื่อนพ้น hero

## เฟส 3 — Signature pieces (ทีละชิ้น)

- [x] โพเดียมอันดับ 1-2-3 บนหน้าจัดอันดับ (แถบขอบทอง/เงิน/ทองแดง + glow อันดับ 1) — 2026-07-02
- [x] ตารางเทียบ: best-in-column highlight (✓ เขียว 6 จุดจากข้อมูลจริง) + row hover + คอลัมน์แรก sticky บนมือถือ — 2026-07-02 (sticky header ติดข้อจำกัด overflow container ไว้รอบ redesign ตาราง)
- [x] Radar chart คะแนน 8 แกน (SVG animate scale-in ทีละรุ่น) บนหน้าเปรียบเทียบ — 2026-07-02 (เหลือ: ภาพสินค้าบนหัวคอลัมน์ + fly-in ตอนเลือกรุ่น)
- [ ] หน้ารีวิวเดี่ยว: hero split แบบ magazine + score ring animate + gallery lightbox + TOC scroll-spy + carousel รีวิวผู้ซื้อ + pull quote
- [x] BTU calculator: ผลลัพธ์เป็น gauge เข็มกวาด + ปุ่มแชร์ผล — 2026-07-05
- [ ] Homepage hero ใหม่: kinetic typography + parallax + การ์ดเครื่องมือ interactive
- [ ] Performance budget: LCP < 2s, CLS < 0.05, รูป AVIF/WebP + blur-up

## Audit ครั้งที่ 2 (2026-07-02 ค่ำ) — ดีไซน์ × โครงลิงก์ × คุณค่าเนื้อหา

บทเรียนสำคัญ: หน้า "ของสู้หน้าฝน" v1 ถูกเจ้าของให้ 1/10 (ไม่มีภาพ/ตาราง/กราฟ) — ห้ามเกิดซ้ำ ใช้ Publish Gate ข้างล่างบังคับทุกบทความ

หมายเหตุจากเจ้าของ: หมวดที่ยังไม่มีเนื้อหา (สุขภาพ, นักท่องเที่ยว ฯลฯ) เป็น **roadmap ที่ตั้งใจวางหัวข้อไว้ก่อนแล้วค่อยเติมเนื้อหา** — ไม่ลบทิ้ง แต่ให้ติดป้ายสถานะชัดเจน ("เร็ว ๆ นี้") และห้ามเป็นลิงก์หลอกวนกลับที่เดิม

### Publish Gate — ห้าม commit บทความ roundup ถ้าขาดข้อใดข้อหนึ่ง

1. ภาพสินค้าจริงทุกรายการ (จาก gallery ลิสติ้งจริง บันทึกที่มา)
2. ตารางเปรียบเทียบรวม + best-in-column highlight
3. กราฟ/visual อย่างน้อย 1 ชิ้น (แท่งราคา×ยอดขาย, radar ฯลฯ)
4. Quick-pick box บนสุด
5. จุดระวังจริงรายตัว
6. FAQ + schema
7. วันที่อัปเดตมองเห็นได้
8. ลิงก์ affiliate ทดสอบ redirect แล้วทุกลิงก์
+ ตรวจหน้า live ด้วยตา (screenshot/DOM) ก่อนรายงานว่าเสร็จ

### งานจาก Audit ครั้งที่ 2 (เรียงตามความเสียหายที่ลูกค้าเจอ)

- [x] 1. (2026-07-02) ซ่อม "ของสู้หน้าฝน" ผ่าน Gate ครบ 8 ข้อ + ตรวจหน้า live ด้วยตาแล้ว: ภาพจริง 7 ตัว + ตารางเทียบ + กราฟแท่งราคา×ยอดขาย + quick-pick + hero มีภาพ
- [x] 2. (2026-07-05) สร้างหน้าแรกใหม่ **แบบ search-first** (ตัดสินใจโดยเจ้าของ 2026-07-03 — ยุบรวมกับงาน v1 search ของแผนเครื่องมือเป็นชิ้นเดียว) — ทำครบ: hero ค้นหา + chips + ฐาน `searchIndex.ts` 17 รุ่น + parser หมวด/เพดานราคา/เรียงยอดขาย + ช่องค้นหาบน header ทุกหน้า (GET /th/?q=) + แก้ลิงก์วน/หน้า sample/ภาพ annotated + ป้าย "เร็ว ๆ นี้" + ตรวจ live 390/1440 แล้ว:
  - Hero โล่ง: ช่องค้นหาใหญ่ช่องเดียว + chips คำค้นแนะนำที่ฐานรองรับ ("แอร์ต่ำกว่า 10,000", "เครื่องอบผ้า", "ของสู้หน้าฝน") + ประกาศขอบเขต "ค้นจาก X รุ่นที่ตรวจหลักฐานแล้ว"
  - ค้นฝั่ง client จากฐาน verified (pre-baked ตอน build): parser เข้าใจ หมวด + เพดานราคา + เรียงยอดขาย → การ์ด top 5 พร้อมรูปจริง
  - ใต้ fold: แถบตัวเลขจริง / การ์ดเด่น 3 ใบ (จัดอันดับแอร์, ของสู้หน้าฝน, BTU) / เราทำงานยังไง / บทความล่าสุด
  - ช่องค้นหาตัวย่อขึ้น header ทุกหน้า (คน landing ที่หน้ารีวิวต้องเจอเครื่องมือ)
  - ยังคงแก้: ลิงก์วน #product-worlds, ถอดลิงก์หน้า sample, หมวด roadmap ติดป้าย "เร็ว ๆ นี้", เมนูใหม่
  - หลักการ funnel: บทความ = ซื้อคนเข้า (SEO/แชร์) · ช่องค้นหา = ใช้ซ้ำ · LINE = ดึงกลับ
- [x] 3. (2026-07-05) หน้าเปรียบเทียบ: ภาพสินค้าบน chip เลือกรุ่น + การ์ดรุ่นที่เลือก (กดไป Shopee ได้) + หัวคอลัมน์ตาราง, fly-in ตอนเลือก (เคารพ reduced-motion), เพิ่ม tracking ลิงก์ซื้อทั้งหน้า (เดิมไม่มี data-affiliate-link เลย)
- [ ] 4. รีวิวเดี่ยว: progress bar + TOC scroll-spy, hero split + score ring, gallery lightbox, รวม sticky บาร์เดียว, pull-quote รีวิวจริง
- [x] 5. (2026-07-05) BTU: gauge เข็มกวาด SVG (โค้ง 0-36,000 + เข็ม + แถบ coral, animate 700ms) + ปุ่มแชร์ (Web Share / คัดลอกลิงก์) + จำค่าใน URL ?sqm=&sun=&top=&ceil= เปิดลิงก์แชร์แล้วได้ค่าเดิม
- [ ] 6. Refresh หม้อทอด/น้ำอุ่นให้ถึงมาตรฐานก่อนกลับขึ้นเมนูเด่น
- [x] 7. (2026-07-05) กติกาลิงก์: footer เพิ่มคอลัมน์ 'รีวิวและเครื่องมือ' 5 ลิงก์ (จัดอันดับแอร์/หน้าฝน/รีวิวละเอียด/เทียบ/BTU) — content หลักทุกหน้ามีทางเข้า ≥3 ทางแล้ว (เมนู + หน้าแรก + footer)

## Tone Unification (2026-07-05 — เจ้าของอนุมัติจาก hero หน้าแรกใหม่: "ปรับทั้งเว็บให้ออกโทนสีและแบบอักษรแบบนี้")

ภาษากลางของทั้งเว็บ = โทนครีม-พีชของ hero หน้าแรก:
- พื้นหลัง hero ทุกแบบ: `radial-gradient(1100px 480px at 50% -80px, rgba(255,214,186,.5), transparent 70%) + linear-gradient(180deg, paper-strong, paper)`
- hero ที่มีภาพ: เปลี่ยนชั้นเงามืดเป็น "cream wash" (ครีมทึบฝั่งตัวหนังสือ → จางฝั่งภาพ) ตัวหนังสือ ink/muted
- การ์ดบน hero: ขาวทึบ `rgba(255,255,255,.92)` + เส้นขอบ line + เงา soft (เลิกใช้ glass มืด)
- ปุ่มทั้งเว็บ: ทรง pill (`border-radius: 999px`) รวม scoped styles ทุก template
- ฟอนต์: Anuphan ขึ้นเป็นตัวแรกใน `--font-sans`/`--font-display` (ก่อนหน้านี้มีแค่ที่ body ทำให้โลโก้ header หลุดเป็น system font)
- ink เข้มยังใช้ได้เป็น "จุดเน้น" เท่านั้น: แถบตัวเลขหน้าแรก, footer, การ์ด CTA กลางบทความ, ปุ่ม dark
- แปลงแล้ว: roundup-hero (แอร์/หม้อทอด/น้ำอุ่น), air-review-hero (รีวิวเดี่ยว+คิว [slug]), review-hero+fridge-hero (ตู้เย็น), air-library-hero, legacy-hero, compare-page-hero

## กติกา Motion Language (ใช้ทุกชิ้นใหม่)

- เข้าฉาก: fade + translateY 14px, 600ms, cubic-bezier(.22,.61,.36,1), stagger 70ms
- ตอบ hover ภายใน 200ms, ใช้ transform/opacity เท่านั้น (ห้าม animate layout)
- ทุก animation ปิดอัตโนมัติเมื่อ prefers-reduced-motion
