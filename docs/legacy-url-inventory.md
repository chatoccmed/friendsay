# Legacy Friendsay URL Inventory

รวบรวมจากเว็บเดิม `https://www.friendsay.com/` และ WooCommerce Store API วันที่ 2026-06-14

เป้าหมายคือเก็บ URL เดิมแบบ `/product/.../` ไว้ในเว็บ Astro/Cloudflare Pages เพื่อไม่ให้ traffic และ backlink เก่ากลายเป็น 404 จากนั้นทยอยเขียนรีวิวใหม่ตามมาตรฐาน Friendsay v2

| Priority | Old URL | Product | Category | Old price | New action |
| --- | --- | --- | --- | ---: | --- |
| สูง | `/product/waterheater-haier-ei35m/` | Haier EI35M | เครื่องทำน้ำอุ่น | 1,490 | รีไรต์เป็นรีวิวรุ่นเริ่มต้น + เทียบ EI45M |
| สูง | `/product/waterheater-haier-ei45m/` | Haier EI45M | เครื่องทำน้ำอุ่น | 2,090 | รีไรต์คู่กับ EI35M |
| สูง | `/product/pulse-oximeter-choicemmed-md300c29/` | ChoiceMMed MD300C29 | อุปกรณ์ทางการแพทย์ | 490 | รีไรต์แบบระวัง medical claims |
| สูง | `/product/waterheater-rinnai-eco-3500-4500/` | Rinnai ECO 3500 / 4500 | เครื่องทำน้ำอุ่น | 1,790 | ทำรีวิวเทียบ 3500W vs 4500W |
| กลาง | `/product/waterheater-haier-b1wo/` | Haier B1WO | เครื่องทำน้ำอุ่น | 1,790 | ตรวจราคาและรีวิวร้านล่าสุด |
| สูง | `/product/waterheater-icic6500/` | ICIC 6500W | เครื่องทำน้ำอุ่น | 890 | ตรวจความปลอดภัยก่อนแนะนำ |
| กลาง | `/product/waterheater-sharpwh-34-3500w/` | Sharp WH-34 3500W | เครื่องทำน้ำอุ่น | 1,900 | รีไรต์เป็นรุ่นพื้นฐานแบรนด์ใหญ่ |
| สูง | `/product/waterheater-stiebeleltronxg45ec/` | Stiebel Eltron XG 45 EC | เครื่องทำน้ำอุ่น | 2,960 | รีไรต์เป็นตัวเลือกพรีเมียม |
| กลาง | `/product/waterheater-sharp-modi-wh-md135-md145/` | Sharp Modi WH-MD135 / WH-MD145 | เครื่องทำน้ำอุ่น | 2,400 | เทียบสองรุ่นในบทเดียว |
| กลาง | `/product/waterheater-toshiba-dsk38es5kw/` | Toshiba DSK38ES5KW | เครื่องทำน้ำอุ่น | 2,467 | เทียบกับ Toshiba TWH-38WTH |
| กลาง | `/product/waterheater-toshibatwh-38wth/` | Toshiba TWH-38WTH | เครื่องทำน้ำอุ่น | 1,900 | เทียบกับ DSK38ES5KW |

## Migration Rules

- เก็บ URL เดิมทั้งหมดใน Astro route `src/pages/product/[slug].astro`
- ห้าม redirect ไปหน้า generic เพราะเสีย intent และทำให้ผู้ใช้ไม่เจอสินค้าที่ค้นหา
- หน้า legacy ต้องบอกชัดว่ากำลังรีวิวใหม่ ไม่อ้างว่าทดสอบแล้วถ้ายังไม่ได้ทดสอบจริง
- ก่อนชี้โดเมน `friendsay.com` หรือ `www.friendsay.com` มาที่ Cloudflare ต้อง export รูปจาก WordPress (`/wp-content/uploads/...`) มาไว้ใน `public/images/legacy-products/`
- สินค้าสุขภาพต้องมี disclaimer และหลีกเลี่ยง medical claims
