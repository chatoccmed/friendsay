# Pre-Domain Migration Checklist

สถานะ (อัปเดต 2026-07-05): **Release blockers ปลดครบแล้ว — พร้อมชี้โดเมนได้เลย** เหลือเฉพาะขั้นตอนที่ต้องทำในหน้า Cloudflare/Search Console ด้านล่าง

## Release Blockers — เสร็จครบ

- [x] Export รูปสินค้าเก่าทั้งหมด → เก็บใน `public/images/legacy/` (11 ไฟล์) — 2026-07-02
- [x] เปลี่ยน `oldImageUrl` ใน `src/data/legacyProducts.ts` เป็น path local ครบ (ตรวจแล้วไม่มี `wp-content` เหลือใน src เลย) — 2026-07-02
- [x] Build ผ่าน + legacy pages ทั้ง 11 หน้าโหลดรูปครบบน `friendsay.pages.dev` — 2026-07-02
- [x] Canonical ทุกหน้าชี้ `https://friendsay.com` อยู่แล้ว (รวม `/` → canonical ไป `/th/` ไม่มี duplicate)
- [x] `robots.txt` + sitemap ชี้ `https://friendsay.com/sitemap.xml`
- [x] หน้า 404 มีช่องค้นหา + ลิงก์หน้าหลัก (รับ URL ยุค WordPress ที่ไม่ได้เก็บ) — 2026-07-05
- [x] JSON-LD SearchAction ชี้ `/th/?q=` (ช่องค้นหาจริง) — 2026-07-05

## ขั้นตอน Go-Live (ทำในหน้า Cloudflare — เจ้าของทำ)

1. Cloudflare Pages → โปรเจกต์ friendsay → **Custom domains** → เพิ่ม `friendsay.com` แล้วเพิ่ม `www.friendsay.com` (เพิ่มทั้งคู่ Cloudflare จะออก SSL ให้เอง)
2. ถ้าโดเมนยังชี้ WordPress เดิมอยู่: เปลี่ยน DNS record ตามที่ Cloudflare Pages บอก (CNAME → `friendsay.pages.dev`)
3. ตั้ง redirect `www` → apex (Cloudflare → Rules → Redirect Rules → `www.friendsay.com/*` → `https://friendsay.com/$1`, 301) — ให้เหลือ URL แบบเดียวกับ canonical
4. รอ SSL ออก (ปกติไม่กี่นาที) แล้วเปิด `https://friendsay.com/th/` ตรวจด้วยตา

## ตรวจหลังย้าย (ภายในวันเดียวกัน)

- [ ] เปิด URL legacy อย่างน้อย 3 ตัวจากลิสต์ด้านล่าง — ต้องเห็นหน้า + รูปครบ
- [ ] เปิด URL มั่ว ๆ เช่น `friendsay.com/old-post-xyz` — ต้องเจอหน้า 404 ที่มีช่องค้นหา ไม่ใช่ error เปล่า
- [ ] Google Search Console: เพิ่ม property `friendsay.com` → ยืนยันผ่าน DNS → submit `https://friendsay.com/sitemap.xml`
- [ ] ติด analytics (P0 ในแผน benchmark) — โดเมนจริงคือจังหวะที่ควรเริ่มเก็บตัวเลข
- [ ] เช็กว่า `friendsay.pages.dev` ยังเปิดได้ (เป็น URL สำรอง/preview — ไม่ต้องปิด)

## URL legacy ที่ต้องไม่เป็น 404 (เก็บ slug เดิมไว้ครบแล้ว)

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
