# Air Conditioner Market Catalog Dashboard

อัปเดต: 17 มิถุนายน 2026

Dashboard นี้ใช้ตอบคำถามว่า “เรารวบรวมแอร์ในตลาดไทยไปถึงไหนแล้ว” และ “เหลืออีกกี่รุ่นที่ควรทำรีวิว”

จากนี้ตัวเลขหลักต้องดูจาก market catalog ไม่ใช่จากจำนวนรอบ Shopee

## คำตอบสั้น

ตอนนี้เราเริ่มระบบ catalog-first แล้ว และมีสินค้าใน market catalog **28 รุ่น/ซีรีส์**

สถานะปัจจุบัน:

| รายการ | จำนวน |
|---|---:|
| Market catalog ทั้งหมด | 28 |
| HomePro first-page seed | 24 |
| Online-native seed | 3 |
| Marketplace seed ที่ยังต้องหา catalog source | 1 |
| Catalog verified จากแหล่งร้าน/แบรนด์ | 0 |
| Marketplace matched | 4 |
| Review qualified | 4 |
| Popularity review queue | 28 |
| รีวิวเต็มเสร็จแล้ว | 4 |
| Pilot ที่ควรขยายเป็นรีวิวเต็ม | 0 |

ตัวเลขนี้ยังไม่ใช่จำนวนแอร์ทั้งหมดในตลาดไทย เป็นฐานเริ่มต้นจาก HomePro first-page seed + online-native seed เดิม ต้องเก็บหน้าถัดไป ร้านอื่น เว็บแบรนด์ และ marketplace official เพิ่ม

## ตัวชี้วัดใหม่

ใช้ 6 ไฟล์นี้เป็นตัวนับหลัก:

1. `docs/air-conditioner-market-sources.csv`
   - ดูว่าแหล่งข้อมูลไหนพร้อมเก็บ แหล่งไหนต้องหา category URL เพิ่ม

2. `docs/air-conditioner-catalog-rounds.csv`
   - ดูว่ารอบเก็บ catalog จากร้าน/แบรนด์ไหนทำแล้วหรือยัง

3. `docs/air-conditioner-market-catalog.csv`
   - ดูจำนวนรุ่นทั้งหมดที่เรารู้จัก ยืนยันแล้ว จับคู่ marketplace แล้ว และรีวิวแล้ว

4. `docs/air-conditioner-marketplace-match.csv`
   - ดูว่าแต่ละรุ่นมี Shopee/Lazada/TikTok link หรือยัง และรีวิวเกิน 5 หรือไม่

5. `docs/air-conditioner-popularity-scoring.md`
   - ดูกติกาเรียงลำดับทำรีวิวตามยอดรีวิวหรือยอดขายจริง

6. `docs/air-conditioner-review-priority.csv`
   - ดูคิวรีวิวจริงที่เรียงตามความนิยมแล้ว

## จะรู้ได้ยังไงว่าใกล้ครบ

ให้ดูตามสถานะนี้:

- `catalog_candidate`: ยังไม่ครบ เพราะยังไม่ยืนยันรุ่น
- `catalog_verified`: รุ่นนี้รู้จักแล้วในตลาดไทย
- `marketplace_matched`: มีลิงก์ซื้ออย่างน้อย 1 marketplace
- `review_qualified`: พร้อมทำรีวิวเต็ม เพราะมีรีวิว/ratings/comments มากกว่า 5
- `review_done`: ปิดงานรีวิวเดี่ยวแล้ว

## คิวรีวิวตามความนิยม

กติกาหลัก: รุ่นที่ยังไม่มียอดขายหรือยอดรีวิวจริงมากกว่าเกณฑ์ จะยังไม่เข้าคิวรีวิวเต็ม

คิวปัจจุบันจาก `docs/air-conditioner-review-priority.csv` ครบทั้ง 28 รุ่นแล้ว โดยเรียงจากรุ่นที่มีหลักฐานความนิยมมากที่สุดลงไป

| ลำดับ | รุ่น | หลักฐานความนิยม | สถานะ | งานถัดไป |
|---:|---|---:|---|---|
| 1 | CANDY VPCT/VPGT Series | Shopee reviews 10,400 | รีวิวเต็มแล้ว | รีเฟรชราคา/ลิงก์ |
| 2 | TCL SaveIN AI Series | Shopee reviews 9,200 | รีวิวเต็มแล้ว | รีเฟรชราคา/ลิงก์ |
| 3 | Xiaomi Mijia Air Inverter Eco | Shopee reviews 4,300 | รีวิวเต็มแล้ว | รีเฟรชราคา/ลิงก์ |
| 4 | Midea Celest MSCE | Shopee reviews 193 | รีวิวเต็มแล้ว | รีเฟรชราคา/ลิงก์ |
| 5 | Mitsubishi MSY-GT09VF | HomePro reviews 86 | ต้องจับคู่ marketplace | หา Shopee/Lazada/TikTok |
| 6 | Mitsubishi Heavy Duty DXK10CXV-W1 | HomePro reviews 13 | ต้องจับคู่ marketplace | หา Shopee/Lazada/TikTok |
| 7 | Sharp AH/AU-XP10YMB | HomePro reviews 8 | ต้องจับคู่ marketplace | หา Shopee/Lazada/TikTok |
| 8-15 | รุ่นที่มีรีวิวจริง 1-4 รีวิว | HomePro reviews 1-4 | ต้องหา evidence เพิ่ม | หา Shopee/Lazada/TikTok หรือ retailer อื่น |
| 16-28 | รุ่นที่ยังไม่เห็นรีวิว/ยอดขาย | none visible | ต้องหา evidence ก่อน | ยังไม่เขียนรีวิวเต็มจนกว่าจะมีหลักฐาน |

ถ้าถามว่า “ทำรีวิวรุ่นไหนต่อ” คำตอบตอนนี้คือ **Mitsubishi MSY-GT09VF** แต่ต้องจับคู่ Shopee/Lazada/TikTok และยืนยันลิงก์ซื้อก่อนเขียนรีวิวเต็ม เพราะหลักฐานความนิยมหลักตอนนี้มาจาก HomePro ไม่ใช่ marketplace affiliate

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

- เป็นร้านใหญ่และมีหมวดแอร์ติดผนังกว้าง รอบแรกเก็บ first-page seed ได้แล้ว 24 รุ่น
- เห็นแบรนด์และรุ่นจำนวนมากกว่าเริ่มจาก marketplace
- ใช้เป็นฐานสร้าง product key ได้ดี
- พอได้รายชื่อรุ่นแล้วค่อยกลับไปจับคู่ Shopee แบบเจาะจง

### เลน B: `catalog-round-022`

**Online-native air conditioner seeds**

เหตุผล:

- ป้องกันไม่ให้พลาดแบรนด์ที่อาจไม่มีหรือมีน้อยในร้านใหญ่ เช่น CANDY, Xiaomi, TCL บางรุ่น, CHiQ, Hisense บางรุ่น ตอนนี้ตั้ง seed แล้ว 3 รุ่นจาก CANDY/TCL/Xiaomi
- เป็นกลุ่มที่มีโอกาส affiliate สูง เพราะคนซื้อจริงบน Shopee/Lazada/TikTok
- ใช้รีวิวผู้ซื้อจำนวนมากเป็น proof ได้เร็วกว่าแบรนด์ห้างบางรุ่น
- ต้องเก็บจาก official/authorized store ก่อน เพื่อลดความเสี่ยงสินค้าปลอม/ชื่อรุ่นเพี้ยน

หลังจากนี้ให้ทำ 3 อย่าง:

1. เก็บ HomePro หน้าถัดไปและ cross-check รุ่นที่มี review signal สูง
2. เก็บ online-native official/authorized source ของ CANDY, Xiaomi, TCL, CHiQ, Hisense เพิ่ม
3. เลือก seed ที่มี review signal มากกว่า 5 ไปจับคู่ marketplace ก่อน

## วิธีตอบผู้ใช้เมื่อถามว่า “เหลืออีกกี่รุ่น”

ให้ตอบจาก market catalog:

- จำนวน `catalog_verified`
- จำนวน `marketplace_matched`
- จำนวน `review_qualified`
- จำนวน `review_done`
- จำนวนรอบ catalog ที่ยัง pending

ถ้ายังเก็บ catalog ไม่ครบ ให้พูดตรง ๆ ว่า “ยังบอกจำนวนสุดท้ายไม่ได้ แต่ตอนนี้รู้จำนวนจาก source ที่เก็บแล้วเท่าไร” แทนการเดาจำนวนทั้งตลาด
