# Shopee Air Conditioner Collection Dashboard

## Workflow update

ตั้งแต่ 16 มิถุนายน 2026 dashboard นี้ไม่ใช่ตัวชี้วัดหลักของคำว่า “รวบรวมแอร์ให้ครบ” อีกต่อไป

ตัวชี้วัดหลักย้ายไปที่ระบบ **Catalog-first, Marketplace-match-second**:

- `docs/air-conditioner-market-catalog-system.md`
- `docs/air-conditioner-catalog-rounds.csv`
- `docs/air-conditioner-market-catalog.csv`
- `docs/air-conditioner-marketplace-match.csv`

ไฟล์นี้ยังใช้ดูงาน Shopee ที่ค้างอยู่ได้ แต่ถ้าถามว่าเหลือแอร์อีกกี่รุ่น ต้องตอบจาก market catalog ไม่ใช่จากจำนวนรอบ Shopee

อัปเดต: 16 มิถุนายน 2026

เอกสารนี้ตอบคำถามว่า “ต้องทำอีกกี่รอบถึงจะรวบรวมแอร์ Shopee ให้ครบตามเป้าหมาย Friendsay”

## คำตอบสั้น

ตอนนี้เรามีงานเก็บข้อมูลที่นับได้แน่นอนอย่างน้อย **21 รอบที่ยังต้องทำ** เพื่อให้ coverage map ชุดแรกครบระดับ search + candidate verification เริ่มต้น

แยกเป็น:

- **3 รอบ**: เปิดตรวจ candidate ที่เหลือจากคำค้นหลัก “แอร์ติดผนัง” รอบแรก
- **18 รอบ**: เก็บคำค้นที่ยัง pending ใน coverage map เช่น BTU, inverter, พร้อมติดตั้ง, และแบรนด์หลัก

หลัง 18 รอบ search จะมี candidate ใหม่เพิ่มขึ้น ต้องทำรอบ detail verification เพิ่มอีก โดยประเมินจากวิธีเก็บแบบช้าและไม่ให้โดน verification:

- คาดว่า detail verification เพิ่มอีกประมาณ **15-25 รอบ**
- ดังนั้นเฟส “รวบรวมให้ครอบคลุมจริง” น่าจะอยู่ที่ประมาณ **36-46 รอบ**
- ถ้า Shopee เด้ง verification บ่อย อาจขยับเป็น **50+ รอบ**

ตัวเลขนี้จะอัปเดตทุกครั้งที่เราเก็บ keyword ใหม่และรู้จำนวน candidate จริง

## แล้วจะรู้ได้ยังไงว่าจะครบ 50 รอบเมื่อไหร่

ให้ใช้ `docs/air-conditioner-shopee-collection-eta.csv` เป็นตัวนับเวลา

กติกาการนับ:

- “50 รอบ” หมายถึง active collection rounds ใหม่ ไม่รวม baseline `air-round-000`
- ครบ 50 รอบเมื่อจำนวนรอบที่สถานะเป็น `done` ในงาน active ถึง 50
- ถ้ารอบไหน Shopee เด้ง ให้ตั้งสถานะเป็น `blocked_by_verification` และไม่นับเป็น done จนกว่าจะกลับมาเก็บต่อ
- ถ้ารอบไหนพบว่าไม่มีสินค้าที่เกี่ยวข้องจริง ให้ตั้งเป็น `done_no_candidate` หรือ `rejected_cleanup_done` ได้ และนับเป็นรอบที่เสร็จ เพราะเราได้ปิด coverage นั้นแล้ว

ETA จากวันที่เริ่มทำรอบใหม่ **17 มิถุนายน 2026**:

| จังหวะทำงาน | รอบต่อวันทำงาน | วันทำงานที่ใช้ | คาดว่าจบ 50 รอบ |
|---|---:|---:|---|
| ปลอดภัยมาก | 2 รอบ/วัน | 25 วันทำงาน | 21 กรกฎาคม 2026 |
| มาตรฐานที่แนะนำ | 3 รอบ/วัน | 17 วันทำงาน | 9 กรกฎาคม 2026 |
| เร็ว | 5 รอบ/วัน | 10 วันทำงาน | 30 มิถุนายน 2026 |
| Sprint | 8 รอบ/วัน | 7 วันทำงาน | 25 มิถุนายน 2026 |

จังหวะที่ผมแนะนำคือ **3 รอบ/วันทำงาน** เพราะยังพออ่านข้อมูลละเอียด เก็บ evidence และลดโอกาสโดน Shopee verification

ถ้าทำตามจังหวะนี้:

- 21 รอบที่รู้แน่ตอนนี้จะจบประมาณ **25 มิถุนายน 2026**
- 36 รอบกรณี candidate ใหม่ไม่เยอะจะจบประมาณ **2 กรกฎาคม 2026**
- 46 รอบกรณี candidate ใหม่เยอะจะจบประมาณ **8 กรกฎาคม 2026**
- เป้า 50 รอบจะจบประมาณ **9 กรกฎาคม 2026**

ทุกครั้งที่จบรอบ ให้ทำ 3 อย่าง:

1. อัปเดต `docs/air-conditioner-shopee-collection-rounds.csv`
2. อัปเดต `docs/air-conditioner-shopee-collection-eta.csv`
3. สรุปตัวเลขใหม่ใน dashboard นี้

## ตัวเลขสถานะปัจจุบัน

| รายการ | จำนวน |
|---|---:|
| Coverage groups ทั้งหมด | 19 |
| Coverage groups ที่เก็บจาก search แล้ว | 1 |
| Coverage groups ที่ยัง pending | 18 |
| Candidate จากรอบแรก | 15 |
| เปิดหน้ารายละเอียดและยืนยันแล้ว | 4 |
| Candidate ที่ยังต้องเปิด/คัดออก/รวมซ้ำ | 11 |
| Verified inventory | 4 |
| รีวิวเต็มเสร็จแล้ว | 3 |
| Pilot ที่ต้องขยายเป็นรีวิวเต็ม | 1 |

## วิธีรู้ว่าใกล้ครบหรือยัง

ใช้ 3 ไฟล์นี้เป็นตัวนับหลัก:

1. `docs/air-conditioner-shopee-collection-rounds.csv`
   - ดูว่ารอบไหนเสร็จแล้ว รอบไหนค้าง รอบไหนโดนบล็อก
   - เป้าระยะสั้นคือปิดรอบ pending 21 รอบที่รู้แน่
   - เป้าระยะกลางคือ active done 50 รอบ

2. `docs/air-conditioner-shopee-collection-eta.csv`
   - ดูวันที่คาดว่าจะครบตาม pace ต่าง ๆ
   - อัปเดตทุกครั้งที่จำนวน done/blocked เปลี่ยน

3. `docs/air-conditioner-shopee-coverage-map.csv`
   - ดูว่าคำค้น/แบรนด์ไหนเก็บแล้วหรือยัง
   - เป้าคือไม่มีแถว `pending`

4. `docs/air-conditioner-shopee-2026-candidates.csv`
   - ดู candidate ทั้งหมดที่เจอจาก search
   - เป้าคือ candidate ที่ไม่ใช่สินค้าแอร์จริงต้องถูก `rejected` และตัวที่น่าใช้ต้องถูกส่งต่อไป verified

5. `docs/air-conditioner-shopee-evidence-ledger.csv`
   - ดูว่าสินค้าที่จะทำรีวิวมีหลักฐานตรวจย้อนหลังหรือยัง
   - เป้าคือทุกสินค้าที่อยู่ใน review queue ต้องมี `evidence_id`

## ลำดับทำงานที่ควรทำต่อ

### Phase 1: ปิดหนี้จากคำค้นหลัก

ต้องเปิดตรวจ candidate ที่เหลือจากรอบแรกก่อน เพราะเราเจอรายการแล้วแต่ยังไม่ได้ยืนยัน

รอบที่ต้องทำ:

1. ตรวจ Midea Tornado EASY, Hisense CE, Hisense CE/DB, CANDY PCT
2. ตรวจ Midea Numen, TCL 24,200 BTU, Zinney ZAC-BP12A, Zinney ZAC-BP09A-24A
3. ตรวจ/ตัด ChiQ หน้าผ่อน, unknown mini wall ac, และ merge duplicate Zinney/TCL/Midea

เป้าหมายของ Phase 1:

- เพิ่ม verified inventory ให้ได้อย่างน้อย 5-8 รุ่น ถ้าผ่านเกณฑ์จริง
- ตัด candidate ที่ไม่ใช่ SKU แอร์จริงออก
- อัปเดต evidence ledger ทุกตัว

### Phase 2: เก็บคำค้นตามการใช้งาน

มี 6 รอบ:

1. แอร์ 9000 BTU
2. แอร์ 12000 BTU
3. แอร์ 18000 BTU
4. แอร์ 24000 BTU
5. แอร์ inverter
6. แอร์พร้อมติดตั้ง

เป้าหมาย:

- เจอรุ่นแยกตามขนาดห้อง
- เจอรุ่นที่รวมติดตั้งหรือมี Q-CHANG/บริการช่าง
- ลดช่องว่างสำหรับคนค้นตาม BTU

### Phase 3: เก็บคำค้นตามแบรนด์หลัก

มี 12 รอบ:

1. Daikin
2. Mitsubishi
3. Panasonic
4. Carrier
5. Haier
6. Midea
7. Hisense
8. TCL
9. CANDY
10. Xiaomi
11. LG
12. Samsung

เป้าหมาย:

- ให้เว็บครอบคลุมแบรนด์ที่คนไทยรู้จัก
- ตรวจว่ารุ่น official/authorized มีตัวไหนรีวิวเกิน 5
- แยกรุ่นซ้ำจาก search หลักออก

### Phase 4: Detail verification จาก candidate ใหม่

หลัง Phase 2-3 จะมี candidate ใหม่จำนวนมาก ต้องเปิดหน้ารายละเอียดทีละ 3-5 สินค้าต่อรอบ

กติกา:

- ถ้าเห็น verification ให้หยุดทันที
- สินค้าที่ผ่านต้องเข้า verified inventory + evidence ledger
- สินค้าที่ไม่ใช่แอร์จริงหรือเป็นบริการต้อง rejected
- สินค้าที่ซ้ำต้อง merge เป็น product key เดียว

## เป้าหมายขั้นต่ำก่อนทำบทความรวม

เราควรเริ่มทำบทความรวม “แอร์ติดผนัง Shopee รุ่นน่าสนใจปี 2026” เมื่อมี:

- verified inventory อย่างน้อย **10 รุ่น**
- รีวิวเดี่ยวเต็มอย่างน้อย **6-8 รุ่น**
- ทุกตัวมี evidence id
- coverage map อย่างน้อย Phase 1-2 เสร็จ

แต่ถ้าจะตั้งเป้าเป็นเว็บอันดับ 1 ของไทย ควรไปไกลกว่านั้น:

- verified inventory **30-50 รุ่น**
- รีวิวเดี่ยวเต็ม **20+ รุ่น**
- บทความรวมแยกตาม intent เช่น ห้องนอน, คอนโด, ประหยัดไฟ, พร้อมติดตั้ง, งบประหยัด, แบรนด์พรีเมียม

## นิยามคำว่า “รวบรวมหมด”

สำหรับ Shopee คำว่า “หมด” ต้องนิยามตาม coverage ไม่ใช่ตามจำนวนสินค้าทั้งเว็บ เพราะ Shopee เปลี่ยนผลค้นหาและมีสินค้าซ้ำตลอด

ในระบบ Friendsay “รวบรวมหมดเฟสแรก” หมายถึง:

1. Coverage map ทั้ง 19 กลุ่มไม่มีสถานะ `pending`
2. Candidate ทุกตัวถูกจัดสถานะเป็น verified / needs_manual_check / rejected / duplicate_merged
3. Verified ทุกตัวมี evidence id
4. Review queue มีลำดับงานถัดไปชัดเจน
5. ข้อมูลราคาหรือรีวิวที่เกิน 30 วันถูกตั้งสถานะให้ recheck ก่อนนำไปใช้

นี่คือวิธีที่ทำให้เราทำงานแบบเว็บอันดับ 1 ได้จริง: ไม่ใช่เร็วที่สุด แต่กลับมาตรวจได้ทุกชิ้น และไม่มั่วตัวเลข
