# Air Conditioner Popularity Scoring

อัปเดต: 16 มิถุนายน 2026

เอกสารนี้คือกติกาจัดลำดับทำรีวิวแอร์ของ Friendsay

เป้าหมายของผู้ใช้คือ:

> รีวิวแอร์ทุกรุ่นที่มีในไทย โดยรุ่นนั้นต้องมียอดขายหรือยอดรีวิวจริง และจัดเรียงลำดับทำตามความนิยม

ดังนั้นจากนี้ **ห้ามเลือกคิวรีวิวจากความรู้สึกว่าแบรนด์ดัง** ต้องเรียงจากหลักฐานที่ตรวจย้อนกลับได้

## นิยาม “เข้าเกณฑ์ทำรีวิว”

สินค้าจะเข้า `review_priority` ได้เมื่อมีอย่างน้อย 1 อย่าง:

1. มี review / rating / comment count จริงมากกว่า 5 จาก Shopee, Lazada, TikTok, HomePro, Power Buy หรือร้านใหญ่ที่เห็นตัวเลขได้
2. มี sold count จริงจาก marketplace มากกว่า 10 เครื่อง ถ้าแพลตฟอร์มแสดงตัวเลข
3. มีหลายแหล่งยืนยันว่าขายจริง และอย่างน้อยหนึ่งแหล่งมีรีวิวจริงมากกว่า 5

ถ้าไม่มีตัวเลขรีวิวหรือยอดขายจริง ให้ลงได้แค่ `catalog_candidate` แต่ยังไม่ใช่คิวรีวิวเต็ม

## แหล่งข้อมูลที่นับเป็นหลักฐานได้

ลำดับความน่าเชื่อถือ:

1. Marketplace product detail ที่เห็น review/comment/media/sold count ชัด
2. Retailer product page ที่เห็น review count ชัด เช่น HomePro
3. Brand official page ใช้ยืนยันรุ่นและสเปก แต่ไม่ใช้เป็น popularity ถ้าไม่มี review/sales count
4. Search result ใช้เป็น candidate เท่านั้น ยังไม่พอทำรีวิวเต็ม

## วิธีเรียงคิว

ให้เรียงด้วยหลักนี้:

1. จำนวนรีวิวหรือ ratings สูงที่สุดก่อน
2. ถ้ามี sold count จริง ให้ใช้ sold count ช่วยดันลำดับ
3. ถ้าคะแนนใกล้กัน ให้ดันรุ่นที่มี marketplace affiliate พร้อมก่อน
4. ถ้าคะแนนใกล้กันอีก ให้ดันรุ่นที่มีข้อมูล BTU / ราคา / ประกัน / รูปสินค้าชัดกว่า
5. รีวิวที่ทำเสร็จแล้วให้เก็บไว้ในตารางเพื่อเห็นภาพตลาด แต่ไม่ใช่ next action

## สถานะใน priority queue

- `full_review_done`: รีวิวเต็มเสร็จแล้ว
- `pilot_done_expand`: มี pilot แล้ว แต่ต้องขยายเป็นรีวิวเต็ม
- `ready_to_review`: หลักฐานครบและมี marketplace link พร้อม
- `needs_marketplace_match`: มี review/sales signal จริงแล้ว แต่ต้องหา Shopee/Lazada/TikTok link ก่อน
- `needs_evidence_refresh`: เคยมีหลักฐาน แต่เกิน freshness policy หรือยังไม่พอ
- `not_eligible_yet`: ยังไม่มี review/sales signal จริงมากกว่าเกณฑ์

## กติกาการทำงานจริง

ทุกครั้งที่เก็บ catalog หรือ marketplace เพิ่ม ต้องอัปเดต:

1. `docs/air-conditioner-market-catalog.csv`
2. `docs/air-conditioner-marketplace-match.csv`
3. `docs/air-conditioner-review-priority.csv`
4. `docs/air-conditioner-market-dashboard.md`

ถ้าผู้ใช้ถามว่า “ทำรุ่นไหนต่อ” ให้ตอบจาก `docs/air-conditioner-review-priority.csv` โดยเลือกตัวแรกที่ยังไม่ใช่ `full_review_done` และผ่านเกณฑ์ popularity จริงแล้ว
