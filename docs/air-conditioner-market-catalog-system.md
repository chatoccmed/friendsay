# Air Conditioner Market Catalog System

อัปเดต: 16 มิถุนายน 2026

เอกสารนี้คือระบบใหม่สำหรับงาน “รีวิวแอร์ทุกตัวที่เข้าเกณฑ์” ของ Friendsay

หลักคิดใหม่คือ **Catalog-first, Marketplace-match-second**

เราไม่เริ่มจาก Shopee เป็นฐานหลักแล้ว เพราะ Shopee มีข้อจำกัดหลายอย่าง: โดน verification ง่าย, ชื่อสินค้าปนโปรโมชัน, รุ่นซ้ำ, ร้านซ้ำ, บริการติดตั้งปนสินค้า, และบางครั้งข้อมูลยอดขาย/รีวิวไม่แสดงครบ

จากนี้ให้เริ่มจากฐานรุ่นแอร์ในตลาดไทยก่อน แล้วค่อยจับคู่กับ Shopee, Lazada, และ TikTok ทีหลัง

## ไฟล์หลัก

- `docs/air-conditioner-market-sources.csv`  
  รายชื่อแหล่งข้อมูลที่ใช้สร้าง catalog เช่น ร้านค้ารายใหญ่ เว็บแบรนด์ และแหล่งยืนยันสเปก

- `docs/air-conditioner-catalog-rounds.csv`  
  ตารางรอบงานสำหรับเก็บ catalog จากแต่ละ source หรือแต่ละแบรนด์

- `docs/air-conditioner-market-catalog.csv`  
  ฐานกลางของรุ่นแอร์ที่พบในตลาดไทย ใช้เป็น inventory หลัก

- `docs/air-conditioner-marketplace-match.csv`  
  ตารางจับคู่สินค้าจาก catalog กับ Shopee, Lazada, TikTok และลิงก์ affiliate

- `docs/air-conditioner-shopee-evidence-ledger.csv`  
  ใช้ต่อเมื่อสินค้านั้นมี Shopee match และต้องเก็บหลักฐาน marketplace

- `docs/air-conditioner-shopee-review-queue.csv`  
  คิวรีวิวเดี่ยวสำหรับสินค้าที่ผ่านเกณฑ์รีวิวแล้ว

## ลำดับงานมาตรฐาน

1. เก็บรุ่นจากแหล่งตลาดไทยที่เสถียรกว่า Shopee
   - ร้านค้ารายใหญ่: HomePro, Power Buy, Thai Watsadu, Global House, DoHome, Boonthavorn
   - เว็บแบรนด์: Daikin, Mitsubishi Electric, Mitsubishi Heavy Duty, Panasonic, Carrier, Haier, Midea, Hisense, TCL, CANDY, Xiaomi, LG, Samsung, Sharp, Toshiba
   - แหล่งยืนยันสเปก/มาตรฐาน ถ้าเข้าถึงได้: ฉลากประหยัดไฟ, มอก., หน้า product spec ของแบรนด์

2. ทำความสะอาดชื่อรุ่น
   - แยก brand, series, model, BTU options, inverter/non-inverter, warranty
   - รวมสินค้าซ้ำเป็น `product_key` เดียว
   - ตัดบริการติดตั้ง, รีโมต, อะไหล่, น้ำยาแอร์, ผ่อนสินค้า และหน้ารวมโปรโมชันออก

3. ยืนยันว่าเป็นรุ่นจริง
   - ผ่านทันทีถ้าเจอจากเว็บแบรนด์โดยตรง
   - ผ่านแบบมั่นใจถ้าเจอจากร้านค้ารายใหญ่ 2 แหล่งขึ้นไป
   - ถ้าเจอจาก marketplace อย่างเดียว ให้ตั้งเป็น `marketplace_seed_needs_catalog`

4. จับคู่ marketplace
   - ค้น Shopee ด้วย brand + series + model + BTU
   - ถ้าเจอ URL สินค้าจริง ให้บันทึกใน `air-conditioner-marketplace-match.csv`
   - ถ้ามีรีวิวมากกว่า 5 ให้ตั้งเป็น `review_qualified`
   - ถ้ายังไม่เจอ Shopee แต่มีขายในตลาดไทย ให้ตั้งเป็น `catalog_verified_not_matched`

5. เข้าคิวรีวิว
   - รีวิวเดี่ยวเต็มต้องมี `product_key`, source หลัก, marketplace link อย่างน้อย 1 ช่องทาง, และรีวิว/ratings/comments มากกว่า 5
   - ถ้า Shopee ไม่ผ่าน แต่ Lazada/TikTok มีข้อมูลรีวิวชัดกว่า ให้ใช้ marketplace นั้นเป็น proof หลักได้
   - ทุกรีวิวต้องมีลิงก์ซื้อที่หาได้จริง และบันทึก evidence id ก่อนเขียน

## สถานะใน market catalog

- `catalog_candidate`  
  เจอชื่อรุ่นแล้ว แต่ยังไม่ยืนยันว่าเป็นรุ่นจริง

- `catalog_verified`  
  ยืนยันจากเว็บแบรนด์หรือร้านค้ารายใหญ่แล้วว่าเป็นรุ่นจริง

- `marketplace_seed_needs_catalog`  
  เจอจาก Shopee/Lazada/TikTok ก่อน แต่ยังต้องย้อนกลับไปหาแหล่ง catalog ที่นิ่งกว่า

- `catalog_verified_not_matched`  
  เป็นรุ่นจริงในตลาดไทย แต่ยังไม่เจอ marketplace link ที่เหมาะทำ affiliate

- `marketplace_matched`  
  เจอลิงก์ marketplace แล้ว แต่ยังไม่ตรวจจำนวนรีวิวครบ

- `review_qualified`  
  มีข้อมูลรีวิว/ratings/comments มากกว่า 5 และพร้อมเข้าคิวรีวิว

- `review_done`  
  ทำรีวิวเดี่ยวเสร็จแล้ว

- `duplicate_merged`  
  รวมเข้ากับ product key หลักแล้ว

- `rejected`  
  ไม่ใช่สินค้าเป้าหมาย เช่น บริการติดตั้ง อะไหล่ รีโมต หรือหน้าผ่อน

## เกณฑ์ “ครบ” แบบใหม่

เราไม่ใช้ “ครบ 50 รอบ Shopee” เป็นตัวชี้วัดหลักอีกต่อไป

ตัวชี้วัดใหม่คือ:

1. source หลักใน `air-conditioner-market-sources.csv` ถูกเก็บครบตาม phase
2. รุ่นที่พบถูกบันทึกใน `air-conditioner-market-catalog.csv`
3. รุ่นซ้ำถูก merge แล้ว
4. รุ่นที่มีขายใน marketplace ถูกจับคู่ใน `air-conditioner-marketplace-match.csv`
5. รุ่นที่มีรีวิวมากกว่า 5 ถูกส่งเข้า review queue
6. รีวิวเดี่ยวค่อยทำทีละรุ่นตาม priority

ถ้าผู้ใช้ถามว่า “เหลืออีกกี่รุ่น” ให้ตอบจาก market catalog ไม่ใช่ตอบจากจำนวนรอบ Shopee

## Priority สำหรับทำรีวิวก่อน

เรียงตามนี้:

1. รุ่นที่มีรีวิวเยอะและมี marketplace link พร้อม
2. รุ่นจากแบรนด์ที่คนไทยค้นหาสูง เช่น Daikin, Mitsubishi, Panasonic, Carrier, Haier, Midea, LG, Samsung, Sharp
3. รุ่นที่มี BTU ยอดนิยม 9,000 / 12,000 / 18,000 / 24,000 BTU
4. รุ่นที่มีจุดขายชัด เช่น inverter, ประหยัดไฟเบอร์ 5, ฟอกอากาศ, Wi-Fi, พร้อมติดตั้ง
5. รุ่นที่ช่วยเปรียบเทียบกับรีวิวเดิมได้ เช่น CANDY, TCL, Xiaomi, Midea

## วิธีทำงานกับ Shopee หลังจากมี catalog

ให้ใช้ Shopee แบบเจาะจง ไม่ใช่ไล่ search กว้าง:

1. เลือก product key จาก `air-conditioner-market-catalog.csv`
2. ค้นด้วย `brand + series + model + BTU + Shopee`
3. เปิดเฉพาะหน้าที่น่าจะเป็นสินค้าแท้จริง
4. บันทึก URL, shop, price, rating, review count, comment count, media count
5. ถ้า review count เกิน 5 ให้ตั้งเป็น `review_qualified`
6. ถ้า Shopee เด้ง ให้หยุดและใช้ Lazada/TikTok หรือ retailer source ต่อได้

## หลักฐานที่ต้องมีต่อหนึ่งรุ่น

ก่อนเขียนรีวิวเต็ม ควรมีอย่างน้อย:

- ชื่อ brand/series/model ที่สะอาด
- BTU options
- รูปสินค้าจริงอย่างน้อย 2 ภาพ ถ้าหาได้
- ราคาเริ่มต้นหรือช่วงราคาจาก source ล่าสุด
- warranty หรือข้อมูลประกัน
- marketplace link อย่างน้อย 1 ช่องทาง
- review signal มากกว่า 5
- ประเด็นรีวิวผู้ซื้ออย่างน้อย 6 ข้อที่นำไปใช้เขียนคำแนะนำได้จริง

ระบบนี้ทำให้ Friendsay ขยายเป็นคลังรีวิวแอร์ระดับประเทศได้ดีกว่าการเก็บจาก Shopee อย่างเดียว เพราะเราจะรู้ก่อนว่า “ตลาดมีรุ่นอะไรบ้าง” แล้วค่อยเลือกช่องทางซื้อที่ดีที่สุดให้คนอ่าน
