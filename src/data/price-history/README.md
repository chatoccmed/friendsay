# Price History Ledger

บันทึกราคาที่ "เห็นจริงบนหน้าร้าน" แบบ append-only — หนึ่งแถวต่อหนึ่งครั้งที่เห็นราคา ห้ามแก้แถวเก่า ห้ามเดาราคาที่ไม่เห็น

รูปแบบ (ตามสเปกทีมวิศวกร 2026-07-03):

```
productKey,date,price,priceType,source,evidenceRef
```

- `productKey` — ตรงกับ id ใน `searchIndex.ts` (แอร์ = slug ใน `airConditioners.ts`)
- `date` — วันที่เห็นราคา (YYYY-MM-DD)
- `price` — ตัวเลขบาท ไม่มี comma
- `priceType` — `list` (ราคาปกติ/ก่อนลด) หรือ `promo` (ราคาหลังโค้ด/Flash Sale)
- `source` — URL หน้าสินค้าที่เห็นราคา
- `evidenceRef` — รอบเก็บหลักฐาน เช่น `capture-2026-07-02` (แอร์ดูรายละเอียดใน `docs/air-conditioner-shopee-evidence-ledger.csv`)

ไฟล์แยกตามหมวด: `air-conditioners.csv`, `rainy-gear.csv`

ปลายทางของข้อมูลชุดนี้: กราฟราคาย้อนหลัง + "ลดจริงหรือลดหลอก" รอบ 9.9 (ดู docs/world-class-benchmark-study-2026-07.md)
