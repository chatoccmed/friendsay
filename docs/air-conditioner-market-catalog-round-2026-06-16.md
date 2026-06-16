# Air Conditioner Market Catalog Round - 2026-06-16

## Scope

เริ่มทำรอบคู่ตาม workflow ใหม่:

- `catalog-round-001`: HomePro แอร์ติดผนัง first-page seed
- `catalog-round-022`: online-native seed จากรายการ Shopee เดิมที่เรามีหลักฐานแล้ว

## HomePro source snapshot

Source: https://www.homepro.co.th/search?q=แอร์ติดผนัง

วันที่เก็บ: 16 มิถุนายน 2026

สิ่งที่เห็นในหน้า source:

- คำค้น “แอร์ติดผนัง” พบ 325 ผลลัพธ์
- หมวด “เครื่องปรับอากาศติดผนัง” มี 319 รายการ
- มีบริการล้างแอร์ 6 รายการ ซึ่งไม่ใช่สินค้าแอร์ ต้องแยกออก
- brand filter ที่เห็นในหน้าแรกมี เช่น BEKO, CARRIER, DAIKIN, ELECTROLUX, HAIER, HISENSE, HITACHI, HOMEPRO, LG, MITSUBISHI, MITSUBISHI HEAVY D, PANASONIC, SAMSUNG, SHARP, TCL

## HomePro first-page products captured

รอบนี้ลงเป็น `catalog_candidate` ก่อน เพราะยังเป็น source จากร้านใหญ่แหล่งเดียว ต้อง cross-check กับเว็บแบรนด์หรือ marketplace ก่อนยืนยันเป็น `catalog_verified`

| product_key | brand | model | BTU | visible price | visible review signal |
|---|---|---|---:|---:|---:|
| panasonic-cs-cu-yn9ykt | PANASONIC | CS/CU-YN9YKT | 9220 | 13320 | 1 |
| sharp-ah-x10bb | SHARP | AH-X10BB | 9300 |  | 0 |
| mitsubishi-heavy-duty-dxk10cxv-w1 | MITSUBISHI HEAVY DUTY | DXK10CXV-W1 | 9175 | 18100 | 13 |
| daikin-ftkq09yv2s | DAIKIN | FTKQ09YV2S | 9200 | 17600 | 3 |
| mitsubishi-msy-gy09vf | MITSUBISHI | MSY-GY09VF | 9554 | 25200 | 0 |
| lg-icq11mn-ju1 | LG | ICQ11MN.JU1 | 9200 | 16490 | 1 |
| daikin-ftkc09yv2s | DAIKIN | FTKC09YV2S | 9200 | 20900 | 0 |
| mitsubishi-heavy-duty-dxk10yyp-w1 | MITSUBISHI HEAVY DUTY | DXK10YYP-W1 | 9585 | 20400 | 1 |
| daikin-ftm09pv2s | DAIKIN | FTM09PV2S | 9200 | 15890 | 1 |
| panasonic-cs-cu-yu9zkt | PANASONIC | CS/CU-YU9ZKT | 9080 | 16090 | 0 |
| lg-ice11mn-ju1 | LG | ICE11MN.JU1 | 9200 | 15490 | 0 |
| sharp-ah-au-xp10ymb | SHARP | AH/AU-XP10YMB | 9000 | 14990 | 8 |
| panasonic-cs-cu-xu9akt | PANASONIC | CS/CU-XU9AKT | 9518 | 22730 | 0 |
| mitsubishi-msy-jy09vf | MITSUBISHI | MSY-JY09VF | 9212 | 22600 | 0 |
| panasonic-cs-cu-tu9akt | PANASONIC | CS/CU-TU9AKT | 9024 | 16540 | 0 |
| carrier-42tvba010 | CARRIER | 42TVBA010 | 9200 | 21900 | 0 |
| mitsubishi-msy-ky09vf | MITSUBISHI | MSY-KY09VF | 9212 | 20600 | 2 |
| lg-ieq10en-ju1 | LG | IEQ10EN.JU1 | 9200 | 17990 | 0 |
| mitsubishi-msy-gt09vf | MITSUBISHI | MSY-GT09VF | 9554 | 24000 | 86 |
| beko-bseog090 | BEKO | BSEOG090 | 8900 | 17490 | 0 |
| daikin-ftkz09vv2s | DAIKIN | FTKZ09VV2S | 8500 | 27990 | 4 |
| samsung-ar10dyeaawknst | SAMSUNG | AR10DYEAAWKNST | 10000 | 29990 | 0 |
| carrier-42tvab010abi | CARRIER | 42TVAB010ABI | 9200 | 28400 | 0 |
| panasonic-cs-cu-xku9wkt | PANASONIC | CS/CU-XKU9WKT | 8876 | 20950 | 4 |

## Online-native seed update

ปรับสถานะสินค้าเดิม 3 รุ่นเป็น `online_native_seed` เพราะเป็นกลุ่มที่ต้องเก็บจากเลนออนไลน์โดยเฉพาะ:

- CANDY VPCT/VPGT Series
- TCL SaveIN AI Series
- Xiaomi Mijia Air Inverter Eco

Midea Celest ยังเก็บเป็น `marketplace_seed_needs_catalog` เพราะ source เดิมมาจาก reseller ไม่ใช่ official/authorized source ที่มั่นใจเท่ากลุ่ม online-native official

## Next actions

1. ทำต่อ HomePro page 2-4 เพื่อเพิ่ม seed ให้ครบ category
2. เปิด brand-official rounds สำหรับ Daikin, Mitsubishi, Panasonic, Carrier, LG, Sharp, Samsung เพื่อยืนยันรุ่นที่เจอจาก HomePro
3. ทำ `catalog-round-022` แบบเต็ม โดยค้น official/authorized marketplace source ของ CANDY, Xiaomi, TCL, CHiQ, Hisense
4. เลือก HomePro seed ที่มี review signal มากกว่า 5 เช่น Mitsubishi MSY-GT09VF, Mitsubishi Heavy Duty DXK10CXV-W1, Sharp AH/AU-XP10YMB ไปจับคู่ Shopee/Lazada/TikTok ก่อน
