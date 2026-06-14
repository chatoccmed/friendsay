# Pre-Domain Migration Checklist

สถานะ: ต้องทำก่อนชี้ `friendsay.com` หรือ `www.friendsay.com` มาที่ Cloudflare Pages

เหตุผล: หน้า legacy ตอนนี้เก็บ URL เดิมครบแล้ว แต่รูปสินค้าเก่าหลายรูปยังอ้างจาก `https://www.friendsay.com/wp-content/uploads/...` ถ้าเราชี้โดเมนหลักมา Cloudflare ก่อนย้ายไฟล์รูป URL เหล่านี้จะวิ่งเข้าเว็บใหม่และอาจกลายเป็นรูปเสียทันที

## Release Blockers

- [ ] Export รูปสินค้าเก่าทั้งหมดจาก WordPress Media Library หรือจากโฟลเดอร์ `/wp-content/uploads/2025/07/`
- [ ] เก็บรูปไว้ในเว็บใหม่ที่ `public/images/legacy-products/`
- [ ] เปลี่ยน `oldImageUrl` ใน `src/data/legacyProducts.ts` จาก URL WordPress เป็น path local เช่น `/images/legacy-products/waterheater-haier-ei35m.jpg`
- [ ] Build และตรวจว่า legacy pages ทั้ง 11 หน้าโหลดรูปครบ
- [ ] Push ขึ้น GitHub และรอ Cloudflare deploy สำเร็จ
- [ ] ตรวจ URL เก่าบน Cloudflare Pages เช่น `https://friendsay.pages.dev/product/waterheater-haier-ei35m/`
- [ ] ค่อยเพิ่ม custom domain `friendsay.com` และ `www.friendsay.com`

## URL ที่ต้องไม่ปล่อยให้เป็น 404

- `/product/waterheater-haier-ei35m/`
- `/product/waterheater-haier-ei45m/`
- `/product/pulse-oximeter-choicemmed-md300c29/`
- `/product/waterheater-rinnai-eco-3500-4500/`
- `/product/waterheater-haier-b1wo/`
- `/product/waterheater-icic6500/`
- `/product/waterheater-sharpwh-34-3500w/`
- `/product/waterheater-stiebeleltronxg45ec/`
- `/product/waterheater-toshiba-dsk38es5kw/`
- `/product/waterheater-sharp-modi-wh-md135-md145/`
- `/product/waterheater-toshibatwh-38wth/`

## ทางเลือกถ้าต้องย้ายโดเมนเร็ว

ถ้าจำเป็นต้องย้ายโดเมนก่อน export รูปทั้งหมด ให้ทำอย่างใดอย่างหนึ่งก่อน:

- ย้าย WordPress เดิมไป subdomain เช่น `old.friendsay.com` แล้วเปลี่ยนรูปใน data ให้ชี้ไป subdomain นั้นชั่วคราว
- หรือซ่อนรูป legacy ชั่วคราวและแสดง placeholder แทน จนกว่าจะ export รูปครบ

แนวทางที่แนะนำที่สุดคือ export รูปมาไว้ใน repo ก่อน เพราะจะทำให้ Cloudflare Pages เป็นแหล่งไฟล์เดียวที่เสถียรและควบคุมได้
