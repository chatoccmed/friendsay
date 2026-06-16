# Air Conditioner Market Catalog Dashboard

อัปเดต: 16 มิถุนายน 2026

Dashboard นี้ใช้ตอบคำถามว่า “เรารวบรวมแอร์ในตลาดไทยไปถึงไหนแล้ว” และ “เหลืออีกกี่รุ่นที่ควรทำรีวิว”

จากนี้ตัวเลขหลักต้องดูจาก market catalog ไม่ใช่จากจำนวนรอบ Shopee

## คำตอบสั้น

ตอนนี้เราเพิ่งเริ่มระบบ catalog-first และมีสินค้าที่นำเข้าเป็น seed จาก Shopee แล้ว **4 รุ่น/ซีรีส์**

สถานะปัจจุบัน:

| รายการ | จำนวน |
|---|---:|
| Market catalog seed | 4 |
| Catalog verified จากแหล่งร้าน/แบรนด์ | 0 |
| Marketplace matched | 4 |
| Review qualified | 4 |
| รีวิวเต็มเสร็จแล้ว | 3 |
| Pilot ที่ควรขยายเป็นรีวิวเต็ม | 1 |

ตัวเลขนี้ยังไม่ใช่จำนวนแอร์ทั้งหมดในตลาดไทย เป็นแค่ฐานเริ่มต้นก่อนเก็บจากร้านใหญ่และเว็บแบรนด์

## ตัวชี้วัดใหม่

ใช้ 4 ไฟล์นี้เป็นตัวนับหลัก:

1. `docs/air-conditioner-market-sources.csv`
   - ดูว่าแหล่งข้อมูลไหนพร้อมเก็บ แหล่งไหนต้องหา category URL เพิ่ม

2. `docs/air-conditioner-catalog-rounds.csv`
   - ดูว่ารอบเก็บ catalog จากร้าน/แบรนด์ไหนทำแล้วหรือยัง

3. `docs/air-conditioner-market-catalog.csv`
   - ดูจำนวนรุ่นทั้งหมดที่เรารู้จัก ยืนยันแล้ว จับคู่ marketplace แล้ว และรีวิวแล้ว

4. `docs/air-conditioner-marketplace-match.csv`
   - ดูว่าแต่ละรุ่นมี Shopee/Lazada/TikTok link หรือยัง และรีวิวเกิน 5 หรือไม่

## จะรู้ได้ยังไงว่าใกล้ครบ

ให้ดูตามสถานะนี้:

- `catalog_candidate`: ยังไม่ครบ เพราะยังไม่ยืนยันรุ่น
- `catalog_verified`: รุ่นนี้รู้จักแล้วในตลาดไทย
- `marketplace_matched`: มีลิงก์ซื้ออย่างน้อย 1 marketplace
- `review_qualified`: พร้อมทำรีวิวเต็ม เพราะมีรีวิว/ratings/comments มากกว่า 5
- `review_done`: ปิดงานรีวิวเดี่ยวแล้ว

งาน “รวบรวมครบเฟสแรก” จะถือว่าใช้ได้เมื่อ:

1. เก็บ retailer rounds หลักครบ 6 แหล่ง
2. เก็บ brand rounds หลักอย่างน้อย 12 แบรนด์
3. เก็บ online-native rounds อย่างน้อย 4 รอบ เพื่อไม่ให้พลาด CANDY, Xiaomi, TCL, CHiQ และรุ่นออนไลน์
4. สินค้าซ้ำถูก merge เป็น product key เดียว
5. ทุกตัวที่เข้าเกณฑ์มี marketplace match อย่างน้อย 1 ช่องทาง
6. ทุกตัวที่รีวิวเกิน 5 ถูกส่งเข้า review queue

## ลำดับงานถัดไป

รอบถัดไปควรทำเป็น 2 เลนคู่กัน ไม่ใช่เก็บ HomePro อย่างเดียว

### เลน A: `catalog-round-001`

**HomePro แอร์ติดผนังทั้งหมด**

เหตุผล:

- เป็นร้านใหญ่และมีหมวดแอร์ติดผนังกว้าง
- เห็นแบรนด์และรุ่นจำนวนมากกว่าเริ่มจาก marketplace
- ใช้เป็นฐานสร้าง product key ได้ดี
- พอได้รายชื่อรุ่นแล้วค่อยกลับไปจับคู่ Shopee แบบเจาะจง

### เลน B: `catalog-round-022`

**Online-native air conditioner seeds**

เหตุผล:

- ป้องกันไม่ให้พลาดแบรนด์ที่อาจไม่มีหรือมีน้อยในร้านใหญ่ เช่น CANDY, Xiaomi, TCL บางรุ่น, CHiQ, Hisense บางรุ่น
- เป็นกลุ่มที่มีโอกาส affiliate สูง เพราะคนซื้อจริงบน Shopee/Lazada/TikTok
- ใช้รีวิวผู้ซื้อจำนวนมากเป็น proof ได้เร็วกว่าแบรนด์ห้างบางรุ่น
- ต้องเก็บจาก official/authorized store ก่อน เพื่อลดความเสี่ยงสินค้าปลอม/ชื่อรุ่นเพี้ยน

หลังจบ 2 เลนแรก ให้ทำ 3 อย่าง:

1. เพิ่ม/อัปเดตรุ่นใน `air-conditioner-market-catalog.csv`
2. อัปเดตสถานะ `catalog-round-001` และ `catalog-round-022` ใน `air-conditioner-catalog-rounds.csv`
3. เลือก 10-20 รุ่นที่น่าทำ marketplace match ก่อน

## วิธีตอบผู้ใช้เมื่อถามว่า “เหลืออีกกี่รุ่น”

ให้ตอบจาก market catalog:

- จำนวน `catalog_verified`
- จำนวน `marketplace_matched`
- จำนวน `review_qualified`
- จำนวน `review_done`
- จำนวนรอบ catalog ที่ยัง pending

ถ้ายังเก็บ catalog ไม่ครบ ให้พูดตรง ๆ ว่า “ยังบอกจำนวนสุดท้ายไม่ได้ แต่ตอนนี้รู้จำนวนจาก source ที่เก็บแล้วเท่าไร” แทนการเดาจำนวนทั้งตลาด
