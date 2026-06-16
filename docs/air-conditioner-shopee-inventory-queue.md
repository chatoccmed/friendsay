# Air Conditioner Shopee Inventory and Review Queue

## Workflow update

ตั้งแต่ 16 มิถุนายน 2026 ระบบรวบรวมแอร์เปลี่ยนเป็น **Catalog-first, Marketplace-match-second**

เอกสารนี้ยังใช้ได้สำหรับคิว Shopee และ evidence ของสินค้าที่จับคู่ Shopee แล้ว แต่ไม่ใช่ฐาน inventory หลักอีกต่อไป

ไฟล์หลักสำหรับรวบรวมแอร์ทั้งตลาดคือ:

- `docs/air-conditioner-market-catalog-system.md`
- `docs/air-conditioner-market-sources.csv`
- `docs/air-conditioner-catalog-rounds.csv`
- `docs/air-conditioner-market-catalog.csv`
- `docs/air-conditioner-marketplace-match.csv`

เมื่อทำงานหมวดแอร์ ให้เริ่มจาก market catalog ก่อน แล้วค่อยใส่ Shopee link เฉพาะรุ่นที่ตรงกับ catalog

อัปเดต: 16 มิถุนายน 2026

เอกสารนี้คือระบบตั้งต้นสำหรับรวบรวมแอร์ติดผนังจาก Shopee และจัดคิวทำรีวิวเดี่ยวตามแม่แบบ Friendsay

## ไฟล์ที่ใช้

- `docs/air-conditioner-shopee-review-queue.csv` คือคิวสินค้าแอร์ที่ผ่านการตรวจแล้วหรือรอทำรีวิว
- `docs/air-conditioner-shopee-discovery-keywords.csv` คือคิวคำค้นสำหรับเก็บสินค้าเพิ่มทีละรอบ
- `docs/air-conditioner-shopee-coverage-map.csv` คือแผนที่ว่าเก็บคำค้นไหนแล้ว และยังเหลือคำค้นไหน
- `docs/air-conditioner-shopee-collection-dashboard.md` คือสรุปว่าต้องทำอีกกี่รอบและทำถึงไหนแล้ว
- `docs/air-conditioner-shopee-collection-rounds.csv` คือรายการรอบงานแบบนับได้ทีละรอบ
- `docs/air-conditioner-shopee-collection-eta.csv` คือ ETA ว่าถ้าทำวันละกี่รอบ จะครบเป้าหมายเมื่อไหร่
- `docs/air-conditioner-shopee-evidence-ledger.csv` คือบัญชีหลักฐานของแต่ละสินค้า ใช้ตรวจย้อนหลังว่าเห็นข้อมูลจากหน้าไหน วันที่เท่าไร
- `docs/air-conditioner-shopee-2026-candidates.csv` คือสินค้าที่พบจากหน้า search แต่ยังไม่ผ่านการยืนยันหน้ารายละเอียดครบ
- `docs/air-conditioner-shopee-2026-verified.csv` คือสินค้าที่เปิดหน้ารายละเอียดแล้วและมีข้อมูลพอสำหรับรีวิว
- `docs/product-review-operating-template.md` คือแม่แบบการทำรีวิวเดี่ยว
- `docs/shopee-b-plus-d-review-system.md` คือกติกาเก็บข้อมูล Shopee แบบไม่ให้โดนเด้งง่าย
- `docs/air-conditioner-shopee-data-system.md` คือมาตรฐานระบบข้อมูลและ evidence สำหรับหมวดแอร์

## เกณฑ์เข้าคิวรีวิว

สินค้าจะเข้า `review-queue` ได้เมื่อผ่านเงื่อนไขขั้นต่ำ:

1. เป็นแอร์ติดผนังจริง ไม่ใช่บริการผ่อน อะไหล่ รีโมต หรือหน้ารวมบริการ
2. มีชื่อแบรนด์และชื่อรุ่น/ซีรีส์พอระบุได้
3. มี BTU หรือช่วง BTU ชัดเจน
4. มีจำนวนรีวิว/ratings/comments มากกว่า 5
5. มี URL สินค้า Shopee ที่เปิดตรวจได้
6. ถ้าเห็นยอดขายจริงให้บันทึก ถ้าไม่เห็นห้ามเดา
7. ต้องมี `evidence_id` ใน `air-conditioner-shopee-evidence-ledger.csv` ก่อนเริ่มรีวิวเต็ม

## สถานะสินค้า

- `done`: ทำรีวิวเดี่ยวแล้ว
- `queued`: ผ่านเกณฑ์และรอทำรีวิว
- `researching`: กำลังเก็บข้อมูลเพิ่ม
- `needs_manual_check`: ข้อมูลยังคลุมเครือ ต้องเปิดตรวจซ้ำ
- `rejected`: ไม่ใช่สินค้าเป้าหมายหรือข้อมูลไม่น่าใช้

## สถานะข้อมูล

- `verified_sold`: เห็นยอดขายจริงและผ่านเกณฑ์
- `review_signal_pass`: ไม่เห็นยอดขาย แต่รีวิว/ratings/comments ผ่านเกณฑ์
- `candidate`: เจอจากหน้า search แต่ยังไม่ได้เปิดหน้ารายละเอียด
- `needs_manual_check`: ต้องตรวจด้วยมือก่อนใช้

## วิธีเก็บข้อมูลรอบใหม่

ใช้รอบสั้นเพื่อเลี่ยงการโดน Shopee เด้ง:

1. เปิดรอบถัดไปจาก `air-conditioner-shopee-collection-rounds.csv`
2. ถ้าเป็น search round ให้เปิดคำค้น 1 คำจาก `air-conditioner-shopee-coverage-map.csv`
3. เก็บรายการจากหน้า search ไม่เกิน 10-20 รายการ
4. บันทึก candidate พร้อม keyword/rank/product_url ลง `air-conditioner-shopee-2026-candidates.csv`
5. ถ้าเป็น detail round ให้เปิดหน้ารายละเอียดทีละ 1 สินค้า
6. บันทึกเฉพาะข้อมูลที่หน้าแสดงจริงลง `air-conditioner-shopee-2026-verified.csv` ถ้าผ่านเกณฑ์
7. เพิ่มแถวใน `air-conditioner-shopee-evidence-ledger.csv` ทุกครั้งที่ยืนยันสินค้า
8. ถ้าเริ่มเจอ verification ให้หยุดทันทีและอัปเดต round status เป็น `blocked_by_verification`
9. กลับมาเก็บต่อรอบถัดไป

## คิวเริ่มต้น

คิวเริ่มต้นมี 4 รุ่นที่ยืนยันหน้ารายละเอียดแล้ว แต่ยังไม่ถือว่าครอบคลุมทั้ง Shopee:

1. CANDY VPCT/VPGT Series - ทำรีวิวแล้ว ใช้เป็นต้นแบบ
2. TCL SaveIN AI Series - ควรทำต่อ เพราะรีวิวเยอะและข้อมูลติดตั้งชัด
3. Xiaomi Mijia Air Inverter Eco - รีวิวเยอะและเป็นแบรนด์ที่คนสนใจ
4. Midea Celest MSCE - สเปกละเอียด แต่ต้องตรวจร้านและประกันเพิ่ม

จากรอบ search หลักยังมี candidate อีก 11 รายการที่ต้องเปิดหน้ารายละเอียดและคัดออก/ยืนยัน เช่น Midea Tornado EASY, Midea Numen, Hisense CE, Hisense CE/DB, CANDY PCT, TCL 24,200 BTU และ Zinney บางรุ่น

## ลำดับทำรีวิว

เมื่อมีสินค้าใหม่ผ่านเกณฑ์ ให้เรียงคิวโดยดู:

1. จำนวนรีวิว/ratings/comments สูง
2. ความชัดของรุ่นและ BTU
3. ความน่าเชื่อถือร้าน
4. ความชัดของประกันและมาตรฐาน
5. ความสำคัญของสินค้าในตลาด
6. โอกาสเปรียบเทียบกับรุ่นอื่น

## การเริ่มรีวิวแต่ละรุ่น

เมื่อเลือกสินค้า 1 รุ่นจากคิว:

1. อ่าน `docs/product-review-operating-template.md`
2. อ่านหน้า CANDY เป็นตัวอย่างโครงสร้าง
3. อัปเดตข้อมูลสินค้าใน data file
4. เตรียมภาพจริงอย่างน้อย 2 ภาพ
5. เตรียมภาพ Gen ที่ไม่ซ้ำและตรงกับแต่ละ section
6. สรุปรีวิว/ประเด็นรีวิวอย่างน้อย 6 ใบ
7. สร้างหน้ารีวิวเดี่ยว
8. ใส่ปุ่ม Shopee/Lazada/TikTok และ sticky buy bar
9. ใส่ compare CTA และ compare tray
10. ตรวจ mobile, tablet, desktop
11. build และ commit

## ข้อห้าม

- ห้ามเขียนว่า “ขายดีที่สุด” ถ้าไม่เห็นยอดขายจริงครบ
- ห้ามเดายอดขาย
- ห้ามใส่ข้อความยาวแนวชี้แจงกระบวนการบนหน้าเว็บ
- ห้ามใช้ภาพซ้ำใน proof section
- ห้ามใช้ชื่อผู้ซื้อปลอม
- ห้ามทำรีวิวเต็มจากสินค้าที่รีวิวไม่เกิน 5 หรือข้อมูลคลุมเครือ
