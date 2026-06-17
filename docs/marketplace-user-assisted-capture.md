# Friendsay Marketplace Capture Workflow

อัปเดต: 17 มิถุนายน 2026

## ใช้เมื่อไหร่

ใช้วิธีนี้เมื่อ Codex หรือ browser automation เข้า Shopee, Lazada, TikTok หรือเว็บร้านค้าไม่ได้ เพราะโดนบล็อก เครือข่ายถูกจำกัด หรือเว็บเด้ง verification แต่ผู้ใช้ยังเปิดหน้าเว็บได้ตามปกติใน browser ของตัวเอง

หลักคิดคือให้ browser ที่ผู้ใช้เปิดได้จริงเป็นคนเห็นหน้าเว็บ แล้วบันทึกข้อมูลที่มองเห็นออกมาเป็นไฟล์ JSON ให้ Codex นำไปตรวจและจัดคิวรีวิวต่อ

## วิธีใช้แบบง่าย

1. เปิด Shopee, Lazada, TikTok หรือเว็บร้านค้าที่ต้องการเก็บข้อมูล
2. ค้นชื่อรุ่นแบบเจาะจง เช่น `Mitsubishi MSY-GT09VF`, `แอร์ Mitsubishi 9000 BTU`, หรือชื่อรุ่นจาก catalog
3. เปิดหน้าสินค้าหรือหน้าค้นหาที่เห็นข้อมูลชัด
4. ใช้ bookmarklet จาก `tools/friendsay-marketplace-capture-bookmarklet.txt`
5. ระบบจะดาวน์โหลดไฟล์ชื่อ `friendsay-capture-...json`
6. บอก Codex ว่า “import capture ล่าสุด” แล้ว Codex จะดึงไฟล์ล่าสุดจาก Downloads เข้า `research/inbox/`

ถ้า bookmarklet ใช้ไม่ได้ ให้เปิด DevTools Console แล้ววางโค้ดจาก `tools/friendsay-marketplace-capture-console.js` แทน

## สิ่งที่ไฟล์ capture เก็บ

- URL และชื่อหน้า
- ข้อความที่มองเห็นบนหน้า
- ลิงก์สินค้าและลิงก์ร้านที่เจอ
- รูปภาพที่หน้าเว็บโหลด
- meta และ JSON-LD ถ้ามี
- วันเวลาที่เก็บข้อมูล

ไฟล์นี้ไม่ได้ใช้แทนการตัดสินใจทั้งหมด แต่ใช้เป็นหลักฐานให้เราเช็กว่า “เห็นข้อมูลอะไรจริง” ก่อนทำรีวิว

## เกณฑ์ผ่านก่อนทำรีวิว

สินค้าจะเข้ารีวิวเต็มได้เมื่อมีข้อมูลครบอย่างน้อย:

- เป็นแอร์ติดผนังจริง ไม่ใช่อะไหล่ รีโมต บริการล้างแอร์ หรือหน้าผ่อนสินค้า
- มีชื่อแบรนด์ รุ่น หรือซีรีส์ชัด
- มี BTU หรือช่วง BTU ที่อ่านได้
- มีรีวิว/คะแนน/คอมเมนต์มากกว่า 5 หรือมียอดขายที่เห็นจริงมากกว่า 10
- มีลิงก์ซื้ออย่างน้อย 1 ช่องทาง

ถ้าข้อมูลยังไม่ครบ ให้ตั้งสถานะเป็น `needs_fresh_capture` หรือ `needs_marketplace_match` แล้วไม่เขียนรีวิวเต็ม

## วิธีใช้กับงานแอร์

ลำดับที่แนะนำ:

1. ยืนยันชื่อรุ่นจาก catalog/brand/retailer ก่อน
2. ใช้ capture helper กับ marketplace แบบเจาะจงชื่อรุ่น
3. นำไฟล์ capture เข้า `research/inbox/`
4. สรุปหลักฐานลง `docs/air-conditioner-marketplace-match.csv`
5. ถ้าผ่านเกณฑ์ เพิ่มหรืออัปเดต `docs/air-conditioner-review-priority.csv`
6. เขียนรีวิวโดยใช้ `docs/product-review-operating-template.md` และ skill `friendsay-product-reviewer`

## ข้อควรระวัง

- ห้ามเดายอดขายถ้าหน้าเว็บไม่ได้แสดง
- ห้ามใช้หน้าค้นหาอย่างเดียวทำรีวิวเต็ม ถ้ายังไม่เปิดหน้าสินค้าหรือยังไม่มีหลักฐานรีวิว
- ถ้าชื่อรุ่นใน catalog หาไม่เจอใน marketplace ให้บันทึกว่า `needs_fresh_capture` ไม่ใช่ฝืนทำรีวิว
- ถ้าเว็บแสดงรูปหรือข้อความโฆษณาเยอะ ให้แยกข้อมูลสินค้าออกจากแบนเนอร์ก่อนใช้เขียน

## Codex import and analysis commands

หลังผู้ใช้กด capture แล้ว ให้ Codex ใช้คำสั่งนี้เพื่อดึงไฟล์ล่าสุดจาก Downloads และสร้าง summary:

```powershell
.\tools\import-latest-marketplace-capture.ps1
node .\tools\analyze-marketplace-capture.mjs
```

ไฟล์ summary จะอยู่ข้างไฟล์ capture ใน `research/inbox/` และใช้ช่วยดึงชื่อรุ่น BTU ราคา บรรทัดรีวิว/ยอดขาย และลิงก์สินค้าที่พบ
