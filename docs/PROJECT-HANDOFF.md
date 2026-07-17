# Friendsay — เอกสารส่งมอบโปรเจกต์ (Project Handoff)

> **นี่คือจุดเริ่มต้นเดียว** สำหรับใครก็ตามที่มาดูแล/ตรวจสอบโปรเจกต์นี้ต่อ — อ่านไฟล์นี้ก่อนเสมอ แล้วค่อยเจาะไฟล์อื่นตามลิงก์
> อัปเดตล่าสุด: **17 กรกฎาคม 2026** · ไฟล์นี้แทนที่ (supersede) `docs/handoff-2026-07-05.md` ซึ่งเก็บไว้เป็นบันทึกย้อนหลัง
> ถ้าคุณแก้อะไรที่เปลี่ยนภาพรวมโปรเจกต์ **กรุณาอัปเดตไฟล์นี้ให้ทันสมัยด้วย** (โดยเฉพาะหัวข้อ 7 Backlog)

---

## 0. Quick orientation (for any developer, English)

**Friendsay** is a Thai-language affiliate product-review / buying-decision site. Static [Astro](https://astro.build) site → GitHub → Cloudflare Pages (push to `main` = instant production deploy). Live at **https://friendsay.com**.

```bash
# Windows — use npm.cmd, NOT npm
npm.cmd install
npm.cmd run dev -- --port 4321   # local preview at http://localhost:4321
npm.cmd run build                # MUST pass before every push (emits ./dist)
```

- **Source of truth = this repo** (`.github-ready`). Never sync with the dead parent workspace `C:\Users\Chat\FriendSay`.
- **Content is data-driven:** all real numbers/prices/images/affiliate-links live in `src/data/`. Pages (`.astro`) never hard-code numbers — they import from data.
- **Core rule:** never invent sales/price numbers. Every claim traces to captured evidence with a date. (See §10.)
- Start reading: this file → `CLAUDE.md` → the docs in §1.

---

## 1. อ่านอะไรก่อน (ตามลำดับ)

1. **ไฟล์นี้** (`docs/PROJECT-HANDOFF.md`) — ภาพรวม สถานะ โครงสร้าง และสิ่งที่เหลือทั้งหมด
2. `CLAUDE.md` (root) — กติกาประจำโปรเจกต์ + Definition of Done + Publish Gate 8 ข้อ
3. `docs/competitive-study-20-sites-2026-07.md` — การวิเคราะห์คู่แข่ง 20 เว็บ + roadmap P0-P3 (เอกสารยุทธศาสตร์ที่ใหม่และครบสุด)
4. `docs/product-review-operating-template.md` — แม่แบบหน้ารีวิว (ต้องอ่านก่อนเขียน/ตรวจรีวิวทุกครั้ง)
5. `docs/shopee-b-plus-d-review-system.md` + `docs/shopee-capture-pipeline-v2.md` — ระบบเก็บหลักฐาน Shopee (กฎห้ามเดา)
6. สารบบ docs ทั้งหมด 50 ไฟล์ → หัวข้อ 9 ของไฟล์นี้

---

## 2. สถานะเว็บ ณ วันส่งมอบ (17 ก.ค. 2026)

| รายการ | สถานะ |
|---|---|
| โดเมนจริง | **https://friendsay.com** (apex ชี้ Cloudflare Pages) · `www` → apex 301 · มีหน้า 404 + ช่องค้นหา |
| URL สำรอง/preview | https://friendsay.pages.dev (ยังใช้ได้) |
| จำนวนหน้าที่ build | **140 หน้า** (`dist/**/index.html`) |
| Indexable (ใน sitemap) | ~116 หน้า · ที่เหลือ noindex โดยตั้งใจ (ดู §6 หนี้เทคนิค) |
| Google Analytics 4 | ติดแล้วทุกหน้า · Measurement ID `G-WY18XP1JEJ` (ยิงเฉพาะ production build) |
| Google Search Console | **ยังไม่ได้ทำ** — งานเจ้าของ (ดู §7 P0) |
| Deploy | push `origin main` → Cloudflare build อัตโนมัติ ~1-3 นาที |

**ระบบเนื้อหาที่ live 4 แบบ** (รายละเอียด §4):
- **Roundup "best"** 6 หน้า (แอร์ hub + งบต่ำกว่าหมื่น + 3 spoke + ของหน้าฝน) — *(air-fryers/water-heaters มีอยู่แต่ noindex ไว้)*
- **หน้าเทียบ X vs Y** 45 หน้า (auto จากคลังแอร์ 10 รุ่น)
- **Catalog "สินค้ายอดฮิต"** 6 หมวด + hub (พัดลม/พัดลมไอเย็น/ฟอกอากาศ/ดูดฝุ่นไร้สาย/กระติกน้ำร้อน/หม้อหุงข้าว)
- **รีวิวเดี่ยว** — แอร์ (คิว 24 + standalone 4) + ตู้เย็น (คิว 28)

---

## 3. Timeline — ทำอะไรไปแล้ว (milestones)

เรียงจากรากฐาน → ล่าสุด (ดู `git log` เพื่อ commit จริงรายตัว):

1. **รากฐาน** — Astro static, สถาปัตยกรรม data-driven (`src/data/` แยกจากหน้า), แม่แบบรีวิว 20 ส่วน
2. **ระบบเนื้อหา** — roundup แอร์ (hub + งบต่ำหมื่น + 3 spoke: ประหยัดไฟ/ญี่ปุ่น/ห้องนอนเงียบ), หน้า vs 45 หน้า, catalog 6 หมวด, คิวรีวิวแอร์/ตู้เย็น
3. **Design system** — โทนครีม-พีช + ฟอนต์ Anuphan ทั้งเว็บ, หน้าแรกแบบ **search-first** + ช่องค้นหาบน header
4. **Trust / E-E-A-T** — หน้า About จุดยืน "ไม่มีของขาย", `NeutralityBadge` ทุก roundup, `PageChangelog` "อัปเดตล่าสุดเพราะอะไร", trust strip, บล็อก "รุ่นที่ควรเลี่ยง/กับดัก" (บน hub แอร์)
5. **SEO** — JSON-LD ครบ (FAQ/Breadcrumb/ItemList/Product/Review/Video), ตาข่ายลิงก์ภายใน (roundup→vs, review→vs, catalog↔catalog), บล็อก "ทำไม A ดีกว่า B" ดัก featured snippet บนหน้า vs ทั้ง 45, sitemap แบบ curated
6. **Infra** — GA4, ย้ายโดเมน friendsay.com live + redirect www→apex
7. **Data integrity** — ระบบ B+D (ห้ามเดา), price ledger append-only, proof-gate รีวิว, ราคาใน searchIndex ดึงจาก ledger แหล่งเดียว, บีบภาพ/WebP หลายรอบ
8. **QA** — ตรวจใหญ่ 141 หน้า (`docs/qa-report-2026-07-16.md`) ผ่านสะอาด
9. **Trust/mesh parity + integrity (รอบล่าสุด 17 ก.ค.)** — breadcrumb+badge+changelog+vs-mesh ครบทั้ง 3 spoke; noindex + ตัด air-fryers/water-heaters ออกจาก sitemap (เป็นหน้า demo/data สมมติ)

---

## 4. สถาปัตยกรรม: ระบบเนื้อหา 4 แบบ + วิธีเพิ่มหน้าใหม่

> หลักการทองคำ: **หน้า `.astro` ห้ามฮาร์ดโค้ดตัวเลข** — import จาก `src/data/` เสมอ ทุกตัวเลขต้องมีหลักฐาน

### 4.1 Roundup "best" pages — `/th/best/<name>/`
- **ตัวสร้าง:** `src/pages/th/best/*.astro` (หนึ่งไฟล์ = หนึ่งหน้า ไม่มี getStaticPaths) · **แม่แบบ:** `air-conditioners-under-10000.astro`
- **ข้อมูล:** import จาก `src/data/*.ts` + const blocks ในไฟล์ (prose/intro/scenarios) — ตัวเลขต้องจริง
- **live:** มี 8 ไฟล์ แต่ sitemap นับ 6 (air-fryers/water-heaters ถูก noindex)
- **เพิ่มหน้าใหม่:** copy แม่แบบ → import data → เขียนร้อยแก้วใหม่ → **ต้องเพิ่ม path `/th/best/<name>/` ใน `src/pages/sitemap.xml.ts` เอง** → ผ่าน Publish Gate 8 ข้อ → `npm.cmd run build`

### 4.2 หน้าเทียบ X vs Y — `/th/vs/[pair]/`
- **ตัวสร้าง:** `src/pages/th/vs/[pair].astro` — getStaticPaths วน `for(i) for(j=i+1)` บนคลัง `airConditioners` (pair = `${a.slug}-vs-${b.slug}`, เรียงตาม index)
- **ข้อมูล:** `src/data/airConditioners.ts` + `src/data/airCompareExtras.ts` (ราคา/ยอดขาย/ประกัน/pros/cons)
- **live:** แอร์ 10 รุ่น → C(10,2) = **45 หน้า** · sitemap regenerate 45 URL เดียวกันอัตโนมัติ
- **เพิ่มหน้าใหม่:** **ไม่เขียนรายหน้า** — เพิ่ม product 1 ตัวใน `airConditioners.ts` (+ maps ใน `airCompareExtras.ts`) → ได้หน้า vs ใหม่ N-1 หน้าอัตโนมัติ ทั้ง generator และ sitemap รับเอง

### 4.3 Catalog "สินค้ายอดฮิต" — `/th/c/[slug]/` + hub `/th/c/`
- **ตัวสร้าง:** `src/pages/th/c/[slug].astro` (getStaticPaths ใช้ `import.meta.glob('../../../data/catalog/*.json')`) + `index.astro`
- **ข้อมูล:** `src/data/catalog/*.json` (หนึ่งไฟล์ = หนึ่งหมวด) + ภาพใน `public/images/catalog/<slug>/`
- **live:** 6 JSON → 6 หน้า + hub · เข้าsitemap อัตโนมัติ (glob เดียวกัน)
- **เพิ่มหน้าใหม่:** สร้าง `src/data/catalog/<slug>.json` ตามรูปแบบ `fan.json` (ตัวเลขต้องเป็น Shopee จริง) + ใส่ภาพ → **ไม่ต้องแก้โค้ดหรือ sitemap เลย** ทุกอย่าง glob รับเอง

### 4.4 รีวิวเดี่ยว — `/th/reviews/...`
- **ตัวสร้าง:** batch แอร์ `[slug].astro` (map จาก `airConditionerReviewQueue.ts`) · batch ตู้เย็น `refrigerators/[slug].astro` (จาก `refrigeratorReviewQueue.ts`) · standalone: ไฟล์มือ (แม่แบบ `candy-vpct-vpgt-air-conditioner.astro`)
- **Proof gate:** รีวิวแอร์ index เฉพาะรุ่นที่ `airConditionerShopeeProof.ts` มี status `detail_verified` (คิว 24 → index 10) · ⚠️ **รีวิวตู้เย็น 28 หน้า เข้า sitemap ทั้งหมดโดยไม่มี gate นี้** (ดู §6 หนี้เทคนิค)
- **เพิ่มรีวิวใหม่:** batch = เพิ่ม object ในคิว (+ proof `detail_verified` ถ้าจะให้ index) · standalone = copy แม่แบบ + เพิ่ม path ใน sitemap เอง

---

## 5. แผนที่ข้อมูล — ไฟล์ไหนคือ source of truth ของอะไร

### `src/data/` (แก้ตัวเลข/ลิงก์ที่นี่)
| ไฟล์ | เป็น source of truth ของ |
|---|---|
| `airConditioners.ts` | **คลังแอร์ 10 รุ่นหลัก** — identity, คะแนน, pros/watch, **ลิงก์ affiliate short-link** (ห้ามแทนด้วย URL ตรง = เสียค่าคอม) |
| `acPriceLedger.ts` | ราคาจริงล่าสุดต่อรุ่น (read-model ที่ reduce จาก CSV) — dependency-free กัน circular import |
| `price-history/*.csv` | **ledger ราคา append-only** (แอร์ + ของหน้าฝน) — หนึ่งแถว = หนึ่งการเห็นราคา ห้ามแก้/ลบแถวเก่า ห้ามเดา |
| `airConditionerShopeeProof.ts` | สถานะหลักฐาน Shopee ต่อรุ่น (gate ว่ารุ่นไหนโชว์ proof/เข้า sitemap ได้) + คู่ productUrl(หลักฐาน) vs affiliateUrl(ลิงก์ซื้อ) |
| `searchIndex.ts` | corpus ค้นหาทั้งเว็บ + ยอดขายจริงต่อรุ่น (soldNum = null เมื่อ Shopee ไม่โชว์ ตามกฎ B+D) |
| `airCompareExtras.ts` | ประกัน/pros ย่อ ต่อรุ่น (ใช้บนหน้า compare/vs/spoke) + จุดเข้าถึงราคา/ยอดขายรวม |
| `airConditionerReviewQueue.ts` / `refrigeratorReviewQueue.ts` | คิว/เมทาดาทารีวิวแอร์ / ตู้เย็น |
| `airFryers.ts` / `waterHeaters.ts` | สินค้าหม้อทอด/น้ำอุ่น (หน้ายัง noindex) · `airFryers.ts` นิยาม type `StoreLinks` ที่ทั้งระบบใช้ |
| `legacyProducts.ts` | URL เก่า WordPress ที่ preserve ไว้กัน 404 (`preservedPath`) + ข้อมูลเก่าให้ waterHeaters ใช้ |
| `pageUpdates.ts` | changelog ต่อหน้า (`PageChangelog` อ่านจากที่นี่) — วันที่ entry ล่าสุด = updatedLabel |
| `catalog/*.json` | หน้า catalog แต่ละหมวด (สินค้า/คำเตือน/FAQ/provenance) + ป้อน searchIndex |

### `src/components/` (14 ตัว — ที่สำคัญ)
`PriceButtons` (ปุ่มซื้อ + rel=sponsored + tracking) · `ScoreBars` (แถบคะแนน) · `AffiliateClickTracker` (log คลิก, bind ครั้งเดียว รอด View Transitions) · `AirCompareTray` (ถาดเลือกเทียบ) · `NeutralityBadge` · `PageChangelog` · `RelatedVsLinks` (review→vs) · `ReadingAids` (progress/TOC/lightbox, re-run ทุก client-nav) · `VideoClip` (facade embed กัน LCP) · `HomePage` · `SiteHeader`/`SiteFooter` · `ComparisonTable`/`ProductCard`

### อื่น ๆ
`src/layouts/BaseLayout.astro` (ครอบทุกหน้า: font/GA4/meta/noindex prop/ClientRouter) · `src/utils/jsonLd.ts` (faqSchema/breadcrumbSchema/videoSchema) · `src/styles/global.css` (CSS หลัก ต่อท้ายเป็นบล็อกใหม่พร้อมวันที่) · `src/pages/sitemap.xml.ts` (curated allowlist)

---

## 6. Operational — deploy, credentials, gotchas, หนี้เทคนิค

### Deploy pipeline
Static Astro → **Cloudflare Pages ผ่าน GitHub integration** (ไม่มี `.github/workflows` ในเรโป — CI อยู่ที่ Cloudflare dashboard, mirror ใน `wrangler.toml`)
1. ทำงานใน `.github-ready` เท่านั้น
2. `npm.cmd run build` ต้องผ่าน (build รัน `sitemap.xml.ts` ด้วย)
3. `git push origin main` = **deploy production ทันที** (ไม่มี staging, ห้าม force push)
4. โดเมน apex + www→apex 301 อยู่ที่ Cloudflare Rules
5. Manual deploy สำรอง: `npm run deploy:cloudflare` (= build + `wrangler pages deploy dist`, ต้องมี Cloudflare auth)

### Credentials / assets inventory (ที่อยู่ ไม่ใช่ค่าลับ)
| สิ่งของ | อยู่ที่ |
|---|---|
| GitHub repo (push=deploy) | `github.com/chatoccmed/friendsay.git` · login `chatoccmed` |
| Cloudflare Pages "friendsay" + โดเมน + redirect rule + SSL | Cloudflare account `Chatoccmed@gmail.com` |
| GA4 `G-WY18XP1JEJ` (ID สาธารณะ, hardcode ใน BaseLayout — ที่หวงคือ dashboard) | บัญชี GA `topofhotel` (Google ของเจ้าของ) |
| ลิงก์ affiliate Shopee `s.shopee.co.th/xxx` (มี sub_id, สร้างรายได้) | commit ใน `airConditioners.ts`/`rainyGear.ts` · สร้างใหม่ใน Shopee Affiliate dashboard (เจ้าของ) |
| Cloudflare API token (เฉพาะ manual deploy) | ไม่อยู่ในเรโป (`.env*` gitignored) — อยู่ในเครื่อง maintainer |
| Google Search Console | **ยังไม่สร้าง** — งานเจ้าของ (verify ผ่าน DNS ใน Cloudflare zone) |

### Gotchas (กับดักที่คนใหม่จะเจอ)
- **Windows ใช้ `npm.cmd` ไม่ใช่ `npm`**
- **GA4 ยิงเฉพาะ production build** (`import.meta.env.PROD`) — `dev` จะไม่เห็น event อย่าไปแก้
- **View Transitions (ClientRouter) เปิดอยู่** — สคริปต์ใหม่ทุกตัวต้อง bind `astro:page-load` (หรือ `data-astro-rerun`) ไม่งั้นพังหลัง client-nav แรก
- push = deploy จริงทันที · build ต้องเขียวก่อน
- ตรวจ live: **screenshot ล้มเหลวถ้า Chrome minimize** → ใช้ DOM/javascript_tool แทน
- **sitemap + noindex ทำมือและต้อง sync กันเอง** — เพิ่มหน้าใหม่ต้องเติมใน `sitemap.xml.ts`; หน้า noindex ต้องเอาออกจากที่นั่นด้วย
- ไม่มี `.gitattributes` → LF/CRLF churn ได้บน Windows (เห็น warning ตอน commit เป็นปกติ)

### หนี้เทคนิคที่รู้อยู่ (Known debt)
1. **`/th/best/air-fryers/`** — หน้า demo ข้อมูลสมมติ ("AirChef"/"MALA") → **noindex + ตัดจาก sitemap** รอรีเฟรชด้วยข้อมูลจริง
2. **`/th/best/water-heaters/`** — หน้าเก่าก่อนมาตรฐาน B+D → noindex + ตัดจาก sitemap เช่นกัน
3. **⚠️ รีวิวตู้เย็น 28 หน้า เข้า sitemap ทั้งหมดโดยไม่มี proof-gate** (`sitemap.xml.ts` ~บรรทัด 55) — ต่างจากรีวิวแอร์ที่กรอง `detail_verified` **ควรใส่ gate เดียวกันให้ตู้เย็น** (งานทำได้เลย ไม่ติดใคร)
4. `sample-air-fryer-pro.astro` + `legacy-reviews/index.astro` — noindex อยู่แล้ว
5. รีวิวแอร์ในคิวส่วนใหญ่ noindex จนกว่าจะมี proof (กัน scaled-content-abuse — ตั้งใจ)
6. **Analytics under-count risk:** page_view เป็น manual ผูก `astro:page-load` — ถ้าสคริปต์ไหน throw ก่อน listener หรือหน้าใหม่ลืม bind ยอดวิวหายเงียบ ๆ (ไม่มี error monitoring)

---

## 7. Backlog — เหลืออะไร (P0-P3) พร้อมสถานะจริง

> ✅ done · 🟡 partial · ⛔ blocked (รอเจ้าของ/data/infra) · ⬜ todo (ทำได้เลย ยังไม่เริ่ม)
> ที่มา: `docs/competitive-study-20-sites-2026-07.md` + `growth-action-plan` + `design-upgrade-plan` (reconcile กับโค้ดจริงแล้ว 17 ก.ค.)

### P0
| สถานะ | งาน | หมายเหตุ / ตัวบล็อก |
|---|---|---|
| ⛔ | **Submit Google Search Console + verify** | รอเจ้าของ login + verify DNS · GA4 ทำแล้ว แต่ GSC ยังไม่ทำ |
| ⛔ | **ย้าย/ชี้ friendsay.com สมบูรณ์ + redirect URL เก่า** | ตัด cutover เป็นงาน Cloudflare ของเจ้าของ (`pre-domain-migration-checklist.md`) |
| ⛔ | **หน้าตัวตน/ผู้เขียน + author JSON-LD + byline** | รอเจ้าของตัดสินใจว่าจะนำเสนอตัวตน/authorship ยังไง (About มีแล้ว แต่ไม่มี Person schema/byline) |
| 🟡 | **ลิงก์ affiliate ครบทุกรุ่น** | มี deep link จริง 4 รุ่น (Candy/TCL/Xiaomi/Midea) ที่เหลือเป็น search link → รายได้รั่ว รอเจ้าของ mint ลิงก์ |
| 🟡 | **บล็อก "รุ่นที่ควรเลี่ยง" ในทุก roundup** | มีแค่ hub แอร์ · **ยังขาดที่ budget + 3 spoke** — งาน editorial ทำได้เลย (ให้ skeptic ตรวจก่อน) |
| 🟡 | **noindex รีวิวที่ไม่มี proof** | แอร์ + air-fryers/water-heaters ทำแล้ว · **ตู้เย็น 28 หน้ายังไม่ gate** (ดู §6 ข้อ 3) |
| ✅ | ตาข่ายลิงก์ภายใน (vs↔roundup↔review↔catalog) | RelatedVsLinks + compare-pairs mesh + sitemap ครบ |
| ✅ | จุดยืน "ไม่มีของขาย" + NeutralityBadge ทุก roundup | About + affiliate-disclosure + badge 6 roundup |

### P1
| สถานะ | งาน | หมายเหตุ / ตัวบล็อก |
|---|---|---|
| ✅ | "ทำไม A ดีกว่า B" ดัก featured snippet | ครบ 45 หน้า vs |
| ✅ | og:image + Product/Review JSON-LD บนรีวิว | ครบทุก page type |
| 🟡 | **Chip ราคา "ถูก/ปกติ/แพง" + sparkline** | ledger บางเกิน (<8 จุด/รุ่น) แสดง chip ซื่อสัตย์ยังไม่ได้ — รอเก็บราคาสม่ำเสมอ |
| ⬜ | **Chip เรตติ้ง "ระบุแหล่ง + จำนวนรีวิว" ต่อรุ่น** | มี `rating` แล้ว แต่ต้องเก็บ count+แหล่งต่อ SKU (piggyback กับเก็บราคา) แล้วโชว์บน card |
| ⬜ | **สไลเดอร์ปรับน้ำหนัก** บนเครื่องมือเทียบ | ต้องมี scoring model + JS รอด client-nav |
| ⬜ | **วิดเจ็ต "มาแรงสัปดาห์นี้"** จาก GA4 | ต้องต่อ GA4 Data API (ต้อง service-account key) |
| ⛔ | สมัคร affiliate network สำรอง (Involve/Accesstrade) | สมัครบัญชี = งานเจ้าของ |
| ⛔ | ช่องทาง distribution (เพจ Facebook) | เปิด/โพสต์ = งานเจ้าของ |

### P2-P3
| สถานะ | งาน | ตัวบล็อก |
|---|---|---|
| 🟡 | Hub ดีลตามปฏิทิน + จับ "ขึ้นก่อนลด" | มีบทเรียน "ลด จริง/หลอก" แล้วที่ price-history · ขาด landing แคมเปญ + snapshot ก่อน-หลัง |
| ⬜ | "โค้ดส่วนลดวันนี้" ท้าย funnel | ต้องมีฟีดคูปอง |
| ⛔ | แจ้งเตือนราคาลด LINE/อีเมล | ต้อง price feed สด + backend + LINE API + เจ้าของอนุมัติ |
| ⬜ | Finder ตัวช่วยเลือกด้วยสเปก | ต้องมีฐานสเปก structured ต่อหมวด |
| ⬜ | ปุ่มโหวต "ช่วยตัดสินใจได้/ยังสงสัย" | ต้องมี backend + traffic |
| ⬜ | Normalize ภาพสินค้า / sticky bar slide-in / performance budget (LCP<2s) | งาน polish ทำได้เลย |
| ✅ | View Transitions (ClientRouter) | live แล้ว (เอกสาร design เก่ายังไม่ติ๊ก) |
| ✅ | หน้าแรก search-first | supersede kinetic hero เดิม (เจ้าของเลือก 3 ก.ค.) |

**ถ้าจะทำต่อทันทีโดยไม่ต้องรอใคร** ลำดับแนะนำ: (1) gate sitemap ตู้เย็น [§6.3] → (2) "รุ่นที่ควรเลี่ยง" budget+3 spoke → (3) chip เรตติ้งระบุแหล่ง → (4) polish (ภาพ/sticky/perf)

---

## 8. รายละเอียดงานที่ต้องรอเจ้าของ (ทำแทนไม่ได้)

1. **Search Console** — เพิ่ม property `friendsay.com` → verify DNS → submit `https://friendsay.com/sitemap.xml`
2. **ลิงก์ affiliate** — mint deep link ต่อรุ่นใน Shopee Affiliate dashboard (ตอนนี้จริงแค่ 4 รุ่น) + สมัคร Lazada/network สำรอง
3. **ตัวตน/ผู้เขียน** — ตัดสินใจ persona ก่อนใส่ author schema (ต้องซื่อสัตย์: ทีมเล็ก + AI ช่วย ไม่มีของจริง)
4. **เก็บราคา/เรตติ้ง Shopee สม่ำเสมอ** — ปลดล็อก chip ราคา + chip เรตติ้ง + hub ดีล (ผ่าน Chrome เจ้าของ ตาม `shopee-capture-pipeline-v2.md`, ห้ามเดา)
5. **รีเฟรช หม้อทอด/น้ำอุ่น** ด้วยข้อมูลจริงให้ถึงมาตรฐาน B+D แล้วค่อยเอา noindex ออก + ใส่กลับ sitemap
6. **เปิดเพจ Facebook** (asset ~483 ภาพพร้อม) + infra ใด ๆ (LINE OA, backend โหวต/alert)

---

## 9. สารบบเอกสาร docs/ (เปิดไฟล์ไหนตอนไหน)

**ยุทธศาสตร์/positioning:** `master-blueprint.md` (north-star แบรนด์) · `growth-action-plan-2026-07.md` (ทำไมรายได้=0, จัดลำดับ) · `roundup-topics-revenue-analysis-2026-07.md` (เลือกหัวข้อ roundup ถัดไปตามค่าคอม) · `keyword-inventory-2026-07.md`

**คู่แข่ง/benchmark:** `competitive-study-20-sites-2026-07.md` (**gap analysis + P0-P3 หลัก**) · `world-class-benchmark-study-2026-07.md` · `world-class-ux-teardown-2026-07.md` · `design-upgrade-plan-2026-07.md` · `check-sure-tool-plan-2026-07.md`

**Shopee B+D data:** `shopee-b-plus-d-review-system.md` (กฎ) · `shopee-capture-pipeline-v2.md` (วิธีเก็บจริง) · `marketplace-user-assisted-capture.md` (fallback) · `air-conditioner-shopee-*.md/.csv` (สถานะ/หลักฐานรายรุ่น — `*-evidence-ledger.csv` = audit trail สืบ claim→proof)

**แอร์ catalog/market:** `air-conditioner-content-master-plan.md` · `air-conditioner-market-catalog-system.md` · `air-conditioner-market-dashboard.md` · `air-conditioner-popularity-scoring.md` · `air-conditioner-market-catalog.csv` (ลิสต์รุ่น source of truth)

**คิวรีวิว:** `air-conditioner-review-master-queue.md/.csv` · `air-conditioner-review-priority.csv` · `air-conditioner-review-source-ledger.csv` (รีวิว live พูดอะไรต่อสาธารณะได้)

**ตู้เย็น:** `refrigerator-market-catalog-system.md` · `refrigerator-review-dashboard.md` · `refrigerator-review-master-queue.csv` · `refrigerator-image-asset-ledger.csv`

**แม่แบบ/คุณภาพ:** `product-review-operating-template.md` (**bible การเขียนรีวิว**) · `review-quality-standard.md` (gate ก่อนเผยแพร่)

**QA/migration/ops:** `qa-report-2026-07-16.md` · `pre-domain-migration-checklist.md` · `legacy-url-inventory.md`

**Handoff เก่า:** `handoff-2026-07-05.md` (ย้อนหลัง — ไฟล์นี้แทนที่แล้ว)

---

## 10. กติกา + หลักคิดแบรนด์ (ถ้าลืมทุกอย่าง ให้จำอันนี้)

**กติกาที่ห้ามพลาด** (เต็มใน `CLAUDE.md`):
1. Source of truth = repo `.github-ready` · Windows ใช้ `npm.cmd`
2. `npm.cmd run build` ผ่านก่อน commit · push `main` = deploy จริง · **ห้าม force push**
3. **Publish Gate 8 ข้อ** (roundup ขาดข้อเดียวห้าม commit): ภาพจริงทุกรายการ / ตารางเทียบ best-in-column / กราฟ / quick-pick / จุดระวังจริงรายตัว / FAQ+schema / วันที่ / ลิงก์ทดสอบแล้ว
4. **B+D:** ห้ามเดายอดขาย — Shopee ไม่โชว์ให้เขียน "ไม่แสดง" ใช้จำนวนรีวิวแทน · ทุกตัวเลขมีวันที่เก็บ
5. ไม่ใช้ภาษา AI/hype · ห้ามอ้างว่าใช้เอง (ไม่มีของจริง) · ห้ามสร้างชื่อผู้ซื้อ/quote ปลอม · สถานะร้านตรงจริง (official/authorized/reseller อย่ารวบ)
6. ตรวจ live ด้วยตา (DOM/screenshot) ก่อนรายงานเสร็จ

**หลักคิด (ทำไมถึงทำแบบนี้):**
Friendsay ชนะด้วย **ความเชื่อใจ + เครื่องมือช่วยตัดสินใจ** ไม่ใช่การเป็นนักรีวิวมีของจริง (สู้ TikTok ไม่ได้) จุดยืน 3 ขาที่คู่แข่งไทยลอกไม่ได้เชิงโครงสร้าง: **คำฟันธง + หลักฐานตรวจย้อนได้ + ความเป็นกลาง (ไม่มีของขาย เชียร์ได้ทุกยี่ห้อ และกล้าบอกตัวที่ไม่ควรซื้อ)** — บทเรียนจาก Honey (โดนแฉเรื่องไม่โปร่งใสแล้วพังในสัปดาห์เดียว) คือเหตุผลที่เราไม่เดาตัวเลข ไม่ขายอันดับ และบอกข้อเสียทุกรุ่น
funnel: **บทความ = ดึงคนเข้า (SEO/แชร์) · ช่องค้นหา = ใช้ซ้ำ · (อนาคต) LINE alert = ดึงกลับ**
