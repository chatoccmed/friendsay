// บีบภาพ catalog: resize สูงสุด 800px (การ์ดโชว์ ~350-460px, 800 = รองรับจอ 2x) + mozjpeg q78
// และ gen .webp คู่กันทุกไฟล์ — template ใช้ <picture> webp ก่อน fallback jpg
// รันซ้ำได้เสมอ (เขียนทับ jpg เฉพาะเมื่อเล็กลง, webp gen ใหม่ทุกครั้งจาก jpg ปัจจุบัน)
// หมวดใหม่: โหลดภาพเสร็จแล้วรัน `node scripts/compress-catalog-images.cjs` หนึ่งครั้ง
// Windows file lock: อ่านเข้า buffer ก่อนเสมอ แล้วค่อยเขียนทับ
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// รับ path เป็น argument ได้ (relative จาก repo root) — default = catalog
// เช่น node scripts/compress-catalog-images.cjs public/images/refrigerators/models
const ROOT = process.argv[2]
  ? path.join(__dirname, "..", process.argv[2])
  : path.join(__dirname, "..", "public", "images", "catalog");

function collect(dir, files) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) collect(full, files);
    else if (/\.jpe?g$/i.test(f)) files.push(full);
  }
}

async function run() {
  const files = [];
  collect(ROOT, files);
  let before = 0, after = 0, webpTotal = 0;
  for (const file of files) {
    const buf = fs.readFileSync(file);
    before += buf.length;
    const out = await sharp(buf)
      .resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
    // เขียนทับเฉพาะเมื่อเล็กลงจริง กันกรณีไฟล์เดิมบีบมาดีแล้ว
    let finalBuf = buf;
    if (out.length < buf.length) {
      fs.writeFileSync(file, out);
      finalBuf = out;
      after += out.length;
    } else {
      after += buf.length;
    }
    // webp คู่กัน — gen จาก jpg ตัวสุดท้ายเสมอให้ภาพตรงกัน
    const webp = await sharp(finalBuf).webp({ quality: 75 }).toBuffer();
    fs.writeFileSync(file.replace(/\.jpe?g$/i, ".webp"), webp);
    webpTotal += webp.length;
  }
  console.log(`files: ${files.length}`);
  console.log(`jpg before: ${(before / 1024 / 1024).toFixed(1)} MB -> after: ${(after / 1024 / 1024).toFixed(1)} MB`);
  console.log(`webp generated: ${files.length} files, ${(webpTotal / 1024 / 1024).toFixed(1)} MB (-${(100 - (webpTotal / after) * 100).toFixed(0)}% vs jpg)`);
}
run().catch((e) => { console.error(e); process.exit(1); });
