# Shopee Air Conditioner Data System

## Workflow update

ตั้งแต่ 16 มิถุนายน 2026 ระบบแอร์ของ Friendsay ไม่ใช้ Shopee เป็นฐานค้นหารุ่นหลักแล้ว

ให้ใช้เอกสาร `docs/air-conditioner-market-catalog-system.md` เป็น workflow หลัก โดยเก็บรุ่นจากร้านค้ารายใหญ่และเว็บแบรนด์ก่อน จากนั้นจึงจับคู่ Shopee, Lazada, และ TikTok ในไฟล์ `docs/air-conditioner-marketplace-match.csv`

เอกสารนี้ยังใช้กับการเก็บหลักฐาน Shopee หลังจากมี product key ใน market catalog แล้วเท่านั้น

อัปเดต: 16 มิถุนายน 2026

เป้าหมายของระบบนี้คือทำให้โปรเจกต์ “รีวิวแอร์ทุกตัวที่เข้าเกณฑ์ใน Shopee” ไม่พึ่งความจำหรือการเปิด Shopee แบบสุ่ม แต่มีฐานข้อมูลที่ตรวจย้อนหลังได้เสมอว่าแต่ละรุ่นมาจากไหน ผ่านเกณฑ์เพราะอะไร และต้องกลับไปเช็กเมื่อไหร่

## ข้อเท็จจริงตอนนี้

คิวรีวิวเดิมมี 4 รุ่น แต่ยังไม่เท่ากับ “แอร์ทั้งหมดที่เข้าเกณฑ์ใน Shopee”

- มี candidate จากคำค้นหลัก “แอร์ติดผนัง” รอบแรก 15 รายการ
- เปิดหน้ารายละเอียดและยืนยันข้อมูลได้ครบ 4 รายการ
- ทำรีวิวเต็มแล้ว 3 รายการ
- TCL ทำเป็น pilot แล้ว แต่ยังต้องขยายให้เป็นรีวิวเต็ม
- คำค้น BTU, แบรนด์, และคำค้น “แอร์พร้อมติดตั้ง” ยังไม่ได้เก็บครบ

ดังนั้นงานที่ถูกต้องคือ “ขยาย inventory ก่อน” แล้วค่อยทำรีวิวทีละรุ่นจากรายการที่ยืนยันแล้ว

## ชั้นข้อมูลที่ต้องแยก

### 1. Coverage Map

ไฟล์: `docs/air-conditioner-shopee-coverage-map.csv`

ใช้บอกว่าเราสแกน Shopee ครอบคลุมแค่ไหนแล้ว เช่น คำค้นหลัก, คำค้นตาม BTU, คำค้นตามแบรนด์, คำค้นติดตั้ง และแต่ละรอบเจอ candidate กี่รายการ

สถานะที่ใช้:

- `pending`: ยังไม่ได้เก็บ
- `search_captured`: เก็บจากหน้า search แล้ว แต่ยังไม่เปิดหน้ารายละเอียดครบ
- `detail_in_progress`: กำลังเปิดหน้ารายละเอียดทีละรายการ
- `detail_verified`: เปิดหน้ารายละเอียดครบตามเป้ารอบนั้นแล้ว
- `blocked_by_verification`: Shopee เด้ง/verification ต้องหยุดรอบนั้น

### 2. Candidate Inventory

ไฟล์: `docs/air-conditioner-shopee-2026-candidates.csv`

ใช้เก็บสินค้าที่เจอจาก search หรือจากคำค้นแบรนด์ ยังไม่ถือว่าผ่านเกณฑ์รีวิวเต็มจนกว่าจะเปิดหน้ารายละเอียดและบันทึกหลักฐานเพิ่ม

ข้อมูลจาก search ใช้ได้แค่:

- ชื่อสินค้าที่เห็น
- ราคาเริ่มต้นที่เห็น
- rating ที่เห็น
- URL
- คำค้น/อันดับที่เจอ
- ข้อสงสัย เช่น อาจเป็นหน้าผ่อน, อุปกรณ์, บริการ, หรือ SKU ซ้ำ

### 3. Verified Inventory

ไฟล์: `docs/air-conditioner-shopee-2026-verified.csv`

ใช้เฉพาะสินค้าที่เปิดหน้ารายละเอียดแล้ว และมีข้อมูลพอสำหรับตัดสินใจรีวิว

ต้องมีอย่างน้อย:

- product URL แบบ `/product/{shop_id}/{item_id}` ถ้าแปลงได้
- brand, series, model
- BTU options
- price
- rating
- ratings/comments/media counts
- shop name/shop type
- installation option
- warranty
- TIS/Moก. ถ้าเห็น
- source date
- source status
- confidence

### 4. Evidence Ledger

ไฟล์: `docs/air-conditioner-shopee-evidence-ledger.csv`

นี่คือไฟล์หลักสำหรับตรวจย้อนหลัง ทุกสินค้าที่จะทำรีวิวต้องมี `evidence_id`

หลักฐานที่บันทึกได้:

- product URL
- วันที่เก็บ
- วิธีเก็บ เช่น search capture, product detail capture, user-assisted logged-in capture
- ไฟล์ notes ที่บันทึกข้อมูลที่หน้า Shopee แสดง
- screenshot path ถ้ามี
- HTML/PDF path ถ้ามี
- fields ที่ยืนยันได้จริง
- sold count เห็นหรือไม่
- วันที่ควรกลับไปเช็กซ้ำ

ถ้า Shopee ลบ/เปลี่ยนหน้าในอนาคต เรายังกลับมาดู evidence ledger และ notes ของเราได้ว่า ณ วันที่เก็บข้อมูล เราเห็นอะไรจริง

## Product Key ที่ใช้กันข้อมูลซ้ำ

ทุกสินค้าต้องมี `product_key` แบบอ่านง่าย เช่น:

- `candy-vpct-vpgt-series`
- `tcl-savein-ai-series`
- `xiaomi-mijia-air-inverter-eco`
- `midea-celest-msce`

และควรมี canonical Shopee product URL แบบ:

```text
https://shopee.co.th/product/{shop_id}/{item_id}
```

ข้อดีคือ URL แบบนี้ไม่พังง่ายเท่า URL ที่มีชื่อสินค้าไทยยาว ๆ และใช้เทียบสินค้าซ้ำได้ดี

## เกณฑ์ผ่านเข้าคิวรีวิว

ใช้กติกานี้แทนการตัดสินจากความรู้สึก:

1. เป็นแอร์ติดผนังหรือ split-type wall-mounted air conditioner จริง
2. มีรุ่น/ซีรีส์ที่ระบุได้
3. มี BTU options หรือ BTU range ชัดเจน
4. มี ratings/comments มากกว่า 5
5. ถ้า Shopee แสดง sold count ต้องมากกว่า 10
6. ถ้า Shopee ไม่แสดง sold count ให้ใช้ `review_signal_pass` แต่ห้ามเขียนว่า “ขายดี/ขายแล้ว X เครื่อง”
7. ต้องมี evidence id ก่อนเริ่มทำรีวิวเต็ม

## สถานะข้อมูลที่ต้องใช้

- `verified_sold`: เห็นยอดขายจริงและเกิน 10 เครื่อง
- `review_signal_pass`: ไม่เห็นยอดขาย แต่ ratings/comments/media ผ่านเกณฑ์
- `candidate`: เจอจาก search แต่ยังไม่ได้เปิดหน้ารายละเอียด
- `needs_manual_check`: ข้อมูลคลุมเครือ เช่น เป็นหน้าผ่อน บริการ อะไหล่ หรือ SKU ซ้ำ
- `rejected`: ไม่ใช่สินค้าเป้าหมาย

## รอบเก็บข้อมูลมาตรฐาน

หนึ่งรอบไม่ควรพยายามเก็บทั้ง Shopee เพราะจะโดน verification ง่าย ให้ทำรอบสั้น:

1. เลือก keyword 1 คำจาก coverage map
2. เก็บ candidate จาก search 10-20 รายการ
3. บันทึกลง candidate inventory ทันที
4. เปิดหน้าสินค้าทีละ 1 รายการ
5. บันทึกข้อมูล product detail ลง verified inventory ถ้าผ่านเกณฑ์
6. เพิ่ม evidence ledger ทุกครั้ง
7. หยุดทันทีถ้า Shopee เริ่ม verification
8. กลับมาเก็บต่อรอบถัดไป

## หลักฐานที่ควรเก็บต่อสินค้า

อย่างน้อยต้องมี notes ใน repo:

- product title
- shop
- rating
- ratings count
- comments count
- media count
- price visible
- BTU options
- installation option
- warranty
- TIS/Moก.
- review themes 6 ข้อ

ถ้าทำได้ ให้เก็บ screenshot หรือ PDF เพิ่มแบบ local evidence:

```text
research/evidence/shopee-air-conditioners/{product_key}/{capture_date}/
```

แต่ถ้า repository เป็น public ไม่ควรเอา screenshot เต็มหน้าของ Shopee ขึ้น public โดยไม่จำเป็น ให้เก็บเป็น structured notes และเฉพาะตัวเลข/ประเด็นที่ใช้ตรวจงาน

## Freshness Policy

ข้อมูล Shopee เปลี่ยนเร็ว ต้องมีวันหมดอายุของข้อมูล:

- ราคาและคูปอง: เช็กก่อนเผยแพร่ทุกครั้ง
- rating/review counts: เช็กซ้ำทุก 14-30 วันสำหรับบทความที่ยัง active
- warranty/installation: เช็กซ้ำก่อนเขียนหรืออัปเดตรีวิว
- product discontinued/หมดสต็อก: เช็กก่อนใส่ในบทความรวม

ถ้าเกินกำหนด ให้ใช้สถานะ `stale_needs_recheck` ใน notes ก่อนเอาไปเขียนรีวิวใหม่

## ลำดับงานจากนี้

ใช้ `docs/air-conditioner-shopee-collection-dashboard.md` และ `docs/air-conditioner-shopee-collection-rounds.csv` เป็นตัวนับรอบหลัก

1. ขยาย detail verification จาก candidate รอบแรกให้ครบก่อน โดยเริ่มจากสินค้าที่น่าจะเป็น SKU จริง
2. ขยาย TCL จาก pilot เป็นรีวิวเต็ม
3. เปิดตรวจ candidate ที่น่าสนใจ: Midea Tornado EASY, Midea Numen, Hisense CE, Hisense CE/DB, CANDY PCT, TCL 24,200 BTU, Zinney ZAC-BP12A
4. ตัด candidate ที่เป็นหน้าผ่อน/บริการ/อุปกรณ์ออก
5. เก็บคำค้น BTU และแบรนด์ทีละรอบ
6. หลังแต่ละ search round ให้เพิ่ม detail verification wave จาก candidate ใหม่
7. เมื่อ verified inventory มี 10+ รุ่น ค่อยทำบทความรวม “แอร์ Shopee รุ่นน่าสนใจปี 2026”
