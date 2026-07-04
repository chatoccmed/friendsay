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
- [ ] BTU calculator: ผลลัพธ์เป็น gauge เข็มกวาด + ปุ่มแชร์ผล
- [ ] Homepage hero ใหม่: kinetic typography + parallax + การ์ดเครื่องมือ interactive
- [ ] Performance budget: LCP < 2s, CLS < 0.05, รูป AVIF/WebP + blur-up

## กติกา Motion Language (ใช้ทุกชิ้นใหม่)

- เข้าฉาก: fade + translateY 14px, 600ms, cubic-bezier(.22,.61,.36,1), stagger 70ms
- ตอบ hover ภายใน 200ms, ใช้ transform/opacity เท่านั้น (ห้าม animate layout)
- ทุก animation ปิดอัตโนมัติเมื่อ prefers-reduced-motion
