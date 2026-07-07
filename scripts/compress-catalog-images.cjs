// บีบภาพ catalog: resize สูงสุด 800px (การ์ดโชว์ ~350-460px, 800 = รองรับจอ 2x) + mozjpeg q78
// Windows file lock: อ่านเข้า buffer ก่อนเสมอ แล้วค่อยเขียนทับ
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "public", "images", "catalog");

async function run() {
  const files = [];
  for (const dir of fs.readdirSync(ROOT)) {
    const full = path.join(ROOT, dir);
    if (!fs.statSync(full).isDirectory()) continue;
    for (const f of fs.readdirSync(full)) {
      if (/\.jpe?g$/i.test(f)) files.push(path.join(full, f));
    }
  }
  let before = 0, after = 0;
  for (const file of files) {
    const buf = fs.readFileSync(file);
    before += buf.length;
    const out = await sharp(buf)
      .resize({ width: 800, height: 800, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
    // เขียนทับเฉพาะเมื่อเล็กลงจริง กันกรณีไฟล์เดิมบีบมาดีแล้ว
    if (out.length < buf.length) {
      fs.writeFileSync(file, out);
      after += out.length;
    } else {
      after += buf.length;
    }
  }
  console.log(`files: ${files.length}`);
  console.log(`before: ${(before / 1024 / 1024).toFixed(1)} MB -> after: ${(after / 1024 / 1024).toFixed(1)} MB (-${(100 - (after / before) * 100).toFixed(0)}%)`);
}
run().catch((e) => { console.error(e); process.exit(1); });
