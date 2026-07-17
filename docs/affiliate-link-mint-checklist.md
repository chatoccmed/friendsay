# Affiliate Link — Mint Checklist (ลิงก์หารายได้ที่ต้องสร้างเพิ่ม)

> อัปเดต: 17 ก.ค. 2026 · เป้าหมาย: ทุกปุ่มซื้อในเว็บเป็นลิงก์ที่ track ค่าคอมได้
> **สำคัญ:** ลิงก์ affiliate ของ Shopee/Lazada/TikTok ไทย **ไม่ใช่ "เลข ID" ที่ต่อท้าย URL ได้** — ต้องเข้า dashboard สร้างลิงก์ (short link) ต่อสินค้า แล้วเอาลิงก์นั้นมาแปะในโค้ด · AI สร้างแทนไม่ได้ · **ห้ามมั่วลิงก์** (ปุ่มจะพัง/ไม่ได้ค่าคอม)

## สถานะปัจจุบัน

| แพลตฟอร์ม | สถานะ |
|---|---|
| **Shopee** | ✅ **ครบแล้ว** — ทุกหน้าที่ index ได้ (แอร์ 10 รุ่น / catalog 6 หมวด / รีวิว 4 standalone + 7 รีวิว index / ของหน้าฝน 7) ใช้ short link `s.shopee.co.th` ที่ track แล้ว · หน้ารีวิว noindex ที่เหลือไม่ต้องรีบ (ยังไม่มี traffic) |
| **Lazada** | ❌ **ยังไม่มีเลย** — ทุกปุ่มเป็นลิงก์ค้นหา ต้องสมัคร Lazada Affiliate (หรือผ่าน Involve Asia / Accesstrade) แล้ว mint |
| **TikTok** | ❌ **ยังไม่มีเลย** — ทุกปุ่มเป็นลิงก์ค้นหา ต้องเข้า TikTok Shop Affiliate แล้ว mint |

## วิธีทำ (2 ขั้น)

1. เข้า dashboard ของแพลตฟอร์มนั้น → ค้นหาสินค้าตามรายการล่าง → กด **Generate Link / สร้างลิงก์** → คัดลอก short link
2. **ส่งลิงก์กลับมาให้ผม (หรือแปะเองใน `src/data/`)** — บอกว่าลิงก์ไหนของสินค้าไหน แพลตฟอร์มไหน เดี๋ยวผม wire เข้าปุ่มให้ + build + push ให้ทันที

> ที่แปะในโค้ด: แอร์ → `src/data/airConditioners.ts` (helper `searchLinks`) · ของหน้าฝน → `src/data/rainyGear.ts` · catalog → `src/data/catalog/*.json`
> (ตอนนี้ helper แอร์รองรับแค่ Shopee short link — ถ้าจะเพิ่ม Lazada/TikTok tracked บอกผม เดี๋ยวขยาย helper ให้รับทั้ง 3 แพลตฟอร์ม)

## รายการสินค้าที่ต้อง mint (Lazada + TikTok)

### แอร์ 10 รุ่น (`airConditioners.ts`)
| สินค้า | Lazada | TikTok |
|---|:--:|:--:|
| Candy VPCT/VPGT | ☐ | ☐ |
| TCL SaveIN AI | ☐ | ☐ |
| Xiaomi Mijia Inverter Eco | ☐ | ☐ |
| Midea Celest MSCE | ☐ | ☐ |
| Daikin FTKB Sabai | ☐ | ☐ |
| Hisense CE | ☐ | ☐ |
| Haier VQEC | ☐ | ☐ |
| Mitsubishi MSY-KA VF | ☐ | ☐ |
| Panasonic YU9ZKT | ☐ | ☐ |
| Panasonic YN9YKT | ☐ | ☐ |

### ของหน้าฝน 7 ชิ้น (`rainyGear.ts`)
| สินค้า | Lazada | TikTok |
|---|:--:|:--:|
| little Swan ตู้อบผ้า 4000W | ☐ | ☐ |
| Haier เครื่องอบผ้า 7 กก. HDV70E1 | ☐ | ☐ |
| TCL เครื่องอบผ้าฝาหน้า 9 กก. WT09KFDYW | ☐ | ☐ |
| Sothing เครื่องเป่ารองเท้า | ☐ | ☐ |
| Deerma Shoes Dryer HX10 | ☐ | ☐ |
| HAFELE เครื่องลดความชื้น 20 ตร.ม. | ☐ | ☐ |
| Xiaomi Smart Dehumidifier 22L | ☐ | ☐ |

### Catalog 6 หมวด (`catalog/*.json`)
ตอนนี้ปุ่ม catalog มีแค่ Shopee (track แล้ว) ไม่มีปุ่ม Lazada/TikTok — ถ้าจะเพิ่มค่อยว่ากัน

## หมายเหตุ
- รีวิวแอร์ในคิวที่ยัง noindex: ปุ่ม Shopee เป็นลิงก์ค้นหา จะ track ได้ก็ต่อเมื่อรุ่นนั้นมี `affiliateUrl` ใน `src/data/airConditionerShopeeProof.ts` (ปัจจุบันรุ่นที่ index แล้ว track ครบ)
- รีวิวตู้เย็น 28 หน้า: ยังไม่มี Shopee affiliate link — ต้อง mint เหมือนกันถ้าจะเปิด/ดันหน้า (ดู `PROJECT-HANDOFF.md` §6 ด้วย)
