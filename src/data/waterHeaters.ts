import { legacyProducts } from "./legacyProducts";
import type { StoreLinks } from "./airFryers";

const productBySlug = new Map(legacyProducts.map((product) => [product.slug, product]));

const searchLinks = (query: string): StoreLinks => {
  const encoded = encodeURIComponent(query);
  const tiktokQuery = encodeURIComponent(`${query} TikTok Shop`);

  return {
    shopee: `https://shopee.co.th/search?keyword=${encoded}`,
    lazada: `https://www.lazada.co.th/catalog/?q=${encoded}`,
    tiktok: `https://www.tiktok.com/search?q=${tiktokQuery}`
  };
};

const legacy = (slug: string) => {
  const product = productBySlug.get(slug);
  if (!product) {
    throw new Error(`Missing legacy product: ${slug}`);
  }
  return product;
};

export type WaterHeaterProduct = {
  slug: string;
  name: string;
  shortName: string;
  brand: string;
  award: string;
  price: number;
  regularPrice: number;
  watt: number;
  wattLabel: string;
  score: number;
  safety: number;
  value: number;
  install: number;
  comfort: number;
  bestFor: string;
  notFor: string;
  reviewType: "Archive Rewrite" | "Research Review";
  updated: string;
  image: {
    url: string;
    alt: string;
    source: string;
  };
  pros: string[];
  watch: string[];
  reviewShort: string;
  evidence: string;
  verifyChecklist: string[];
  links: StoreLinks;
  legacyUrl: string;
  preservedPath: string;
};

export const waterHeaters: WaterHeaterProduct[] = [
  {
    slug: "waterheater-stiebeleltronxg45ec",
    name: "Stiebel Eltron XG 45 EC",
    shortName: "XG 45 EC",
    brand: "Stiebel Eltron",
    award: "ตัวพรีเมียมที่น่าดูที่สุด",
    price: legacy("waterheater-stiebeleltronxg45ec").oldPrice,
    regularPrice: legacy("waterheater-stiebeleltronxg45ec").oldRegularPrice,
    watt: 4500,
    wattLabel: "4,500W",
    score: 9.1,
    safety: 9.4,
    value: 8.1,
    install: 8.7,
    comfort: 9.1,
    bestFor: "คนที่ให้ความสำคัญกับความปลอดภัย งานประกอบ และหน้าตาเครื่องมากกว่าราคาต่ำสุด",
    notFor: "คนที่ต้องการเครื่องถูกที่สุด หรือบ้านที่ยังไม่ได้เช็กสายไฟ/เบรกเกอร์สำหรับ 4,500W",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-stiebeleltronxg45ec").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Stiebel Eltron XG 45 EC สีดำ",
      source: legacy("waterheater-stiebeleltronxg45ec").oldImageUrl
    },
    pros: ["แบรนด์แข็งแรง", "ดีไซน์พรีเมียม", "เหมาะกับห้องน้ำที่อยากให้ดูเรียบร้อย"],
    watch: ["ราคาสูงกว่ารุ่นพื้นฐาน", "ต้องเช็กสเปกติดตั้งให้ตรง", "ควรซื้อร้านที่ระบุประกันชัด"],
    reviewShort:
      "ถ้าจะมีรุ่นหนึ่งที่ทำหน้าที่เป็นตัวเทียบมาตรฐานของบทความนี้ XG 45 EC คือรุ่นนั้น จุดขายไม่ใช่ราคาถูก แต่คือภาพรวมที่ดูน่าไว้ใจ ทั้งแบรนด์ งานออกแบบ และความรู้สึกพรีเมียมเมื่ออยู่ในห้องน้ำจริง เหมาะกับบ้านหรือคอนโดที่อยากซื้อครั้งเดียวแล้วจบมากกว่าไล่หาราคาต่ำสุด จุดที่ต้องคิดคือกำลังไฟ 4,500W ต้องให้ช่างเช็กระบบไฟ เบรกเกอร์ และสายดินให้เรียบร้อยก่อนติดตั้ง",
    evidence:
      "มี URL รีวิวเก่าของ Friendsay พร้อมราคาตั้งต้น และควรตรวจซ้ำกับร้าน official/ห้างก่อนฟันธงราคา 2026",
    verifyChecklist: ["รุ่นย่อยและสี", "ELCB/RCD", "IP rating", "ประกันและศูนย์บริการ", "ราคา official ล่าสุด"],
    links: searchLinks("Stiebel Eltron XG 45 EC เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-stiebeleltronxg45ec").oldUrl,
    preservedPath: legacy("waterheater-stiebeleltronxg45ec").preservedPath
  },
  {
    slug: "waterheater-haier-ei35m",
    name: "Haier EI35M",
    shortName: "EI35M",
    brand: "Haier",
    award: "คุ้มค่าสำหรับคอนโด",
    price: legacy("waterheater-haier-ei35m").oldPrice,
    regularPrice: legacy("waterheater-haier-ei35m").oldRegularPrice,
    watt: 3500,
    wattLabel: "3,500W",
    score: 8.8,
    safety: 8.7,
    value: 9.2,
    install: 8.9,
    comfort: 8.4,
    bestFor: "คอนโด หอพัก หรือบ้านน้ำแรงที่อยากได้เครื่องราคาไม่แรง ใช้ง่าย และไม่ต้องการปั๊ม",
    notFor: "บ้านน้ำเบา หรือคนที่อยากได้ความร้อนแรงมากในวันที่น้ำเย็นจัด",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-haier-ei35m").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Haier EI35M สีขาว",
      source: legacy("waterheater-haier-ei35m").oldImageUrl
    },
    pros: ["ราคาเข้าถึงง่าย", "ใช้ไม่ซับซ้อน", "เหมาะกับบ้านน้ำแรงอยู่แล้ว"],
    watch: ["ไม่มีปั๊ม", "ต้องดูแรงดันน้ำจริง", "ควรยืนยันรุ่น F1W/F1CW ก่อนซื้อ"],
    reviewShort:
      "Haier EI35M เป็นตัวเลือกที่เหมาะมากสำหรับคนที่อยากได้เครื่องทำน้ำอุ่นพื้นฐานที่ดูคุ้ม ไม่ต้องมีลูกเล่นเยอะ และใช้กับห้องน้ำขนาดเล็กได้ดี จุดเด่นคือราคาไม่แรง ใช้งานง่าย และไม่กินพื้นที่สายตาในห้องน้ำ แต่ Friendsay จะไม่แนะนำแบบเหมารวมให้ทุกบ้าน เพราะรุ่นแนวนี้เหมาะกับบ้านที่น้ำแรงอยู่แล้ว ถ้าน้ำไหลเบา ความสบายตอนอาบน้ำอาจไม่ดีเท่ารุ่นที่มีปั๊มหรือกำลังไฟสูงกว่า",
    evidence:
      "หน้าเก่าเก็บข้อมูลจุดเด่นเรื่องราคา การใช้งานง่าย และข้อสังเกตเรื่องบ้านน้ำเบาไว้ชัดเจน",
    verifyChecklist: ["แรงดันน้ำขั้นต่ำ", "F1W หรือ F1CW", "วัสดุหม้อต้ม", "ร้าน official", "รีวิวปัญหาเรื่องน้ำไม่แรง"],
    links: searchLinks("Haier EI35M เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-haier-ei35m").oldUrl,
    preservedPath: legacy("waterheater-haier-ei35m").preservedPath
  },
  {
    slug: "waterheater-rinnai-eco-3500-4500",
    name: "Rinnai ECO 3500 / 4500",
    shortName: "Rinnai ECO",
    brand: "Rinnai",
    award: "ดีไซน์มินิมอลน่าใช้",
    price: legacy("waterheater-rinnai-eco-3500-4500").oldPrice,
    regularPrice: legacy("waterheater-rinnai-eco-3500-4500").oldRegularPrice,
    watt: 4500,
    wattLabel: "3,500 / 4,500W",
    score: 8.7,
    safety: 8.8,
    value: 8.7,
    install: 8.5,
    comfort: 8.6,
    bestFor: "คนที่อยากได้แบรนด์ที่ดูน่าเชื่อถือ หน้าตาเรียบ และเลือกระหว่าง 3,500W กับ 4,500W ได้",
    notFor: "คนที่ไม่อยากเทียบรุ่นย่อย เพราะต้องดูให้ชัดว่าร้านขาย 3,500W หรือ 4,500W",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-rinnai-eco-3500-4500").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Rinnai ECO",
      source: legacy("waterheater-rinnai-eco-3500-4500").oldImageUrl
    },
    pros: ["มีตัวเลือกกำลังไฟ", "หน้าตาเรียบ", "แบรนด์คุ้นหู"],
    watch: ["ต้องเช็กรุ่นย่อย", "ราคาแต่ละร้านต่างกัน", "ควรยืนยันอุปกรณ์ในกล่อง"],
    reviewShort:
      "Rinnai ECO เป็นรุ่นที่เหมาะกับคนที่อยากได้เครื่องหน้าตาเรียบ ไม่ฉูดฉาด และมีตัวเลือกกำลังไฟให้ปรับตามบ้านจริง ถ้าเป็นคอนโดหรือห้องน้ำที่ใช้งานไม่หนัก รุ่น 3,500W อาจพอ แต่ถ้าอยากให้น้ำอุ่นไวขึ้นหรือบ้านมีแรงดันน้ำค่อนข้างดี รุ่น 4,500W น่าสนใจกว่า จุดสำคัญคือต้องดูหน้าร้านให้ชัดว่ากำลังซื้อรุ่นไหน เพราะชื่อสินค้าใน marketplace บางครั้งรวมหลายกำลังไฟไว้ในหน้าเดียว",
    evidence:
      "หน้าเก่าเป็นรีวิวคู่ 3500/4500 จึงเหมาะนำมาทำบทเปรียบเทียบกำลังไฟใหม่",
    verifyChecklist: ["รุ่น 3500 หรือ 4500", "ระบบตัดไฟ", "อุปกรณ์ฝักบัว", "เงื่อนไขติดตั้ง", "ราคาแต่ละ platform"],
    links: searchLinks("Rinnai ECO 3500 4500 เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-rinnai-eco-3500-4500").oldUrl,
    preservedPath: legacy("waterheater-rinnai-eco-3500-4500").preservedPath
  },
  {
    slug: "waterheater-toshibatwh-38wth",
    name: "Toshiba TWH-38WTH",
    shortName: "TWH-38WTH",
    brand: "Toshiba",
    award: "ตัวสมดุลจากแบรนด์ญี่ปุ่น",
    price: legacy("waterheater-toshibatwh-38wth").oldPrice,
    regularPrice: legacy("waterheater-toshibatwh-38wth").oldRegularPrice,
    watt: 3800,
    wattLabel: "3,800W",
    score: 8.5,
    safety: 8.6,
    value: 8.8,
    install: 8.5,
    comfort: 8.3,
    bestFor: "คนที่อยากได้ Toshiba ราคาไม่แรง และต้องการกำลังไฟกลาง ๆ ระหว่าง 3,500W กับ 4,500W",
    notFor: "คนที่ต้องการรุ่นไฟแรงสุดหรือดีไซน์หรูมาก",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-toshibatwh-38wth").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Toshiba TWH-38WTH",
      source: legacy("waterheater-toshibatwh-38wth").oldImageUrl
    },
    pros: ["กำลังไฟกลาง ๆ", "แบรนด์น่าเชื่อถือ", "ราคาเก่าอยู่ในช่วงจับต้องได้"],
    watch: ["ต้องเทียบกับ DSK38ES5KW", "ดูประกันให้ชัด", "เช็กรีวิวติดตั้งจริง"],
    reviewShort:
      "Toshiba TWH-38WTH เป็นตัวเลือกที่อยู่ตรงกลางดีมากสำหรับคนที่ไม่แน่ใจว่า 3,500W จะน้อยไปไหม แต่ก็ยังไม่อยากขยับไป 4,500W จุดที่น่าสนใจคือราคาเก่าจัดอยู่ในช่วงที่หลายคนตัดสินใจง่าย และชื่อแบรนด์ช่วยเพิ่มความมั่นใจ แต่ก่อนแนะนำจริงต้องเทียบกับ Toshiba อีกรุ่นในกลุ่มเดียวกันว่าต่างกันตรงไหน เพราะถ้าราคาใกล้กัน รุ่นที่ให้ระบบความปลอดภัยหรือประกันดีกว่าจะน่าเลือกกว่า",
    evidence:
      "เป็นหนึ่งใน URL เก่าที่ควรนำกลับมาเทียบคู่กับ Toshiba DSK38ES5KW",
    verifyChecklist: ["ความต่างกับ DSK38ES5KW", "ระบบนิรภัย", "ราคาใหม่", "ประกัน", "รีวิวหลังติดตั้ง"],
    links: searchLinks("Toshiba TWH-38WTH เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-toshibatwh-38wth").oldUrl,
    preservedPath: legacy("waterheater-toshibatwh-38wth").preservedPath
  },
  {
    slug: "waterheater-sharpwh-34-3500w",
    name: "Sharp WH-34",
    shortName: "WH-34",
    brand: "Sharp",
    award: "รุ่นพื้นฐานจากแบรนด์ใหญ่",
    price: legacy("waterheater-sharpwh-34-3500w").oldPrice,
    regularPrice: legacy("waterheater-sharpwh-34-3500w").oldRegularPrice,
    watt: 3500,
    wattLabel: "3,500W",
    score: 8.4,
    safety: 8.5,
    value: 8.6,
    install: 8.6,
    comfort: 8.1,
    bestFor: "คนที่อยากได้เครื่องพื้นฐาน ใช้ง่าย จากแบรนด์ที่คุ้นเคย",
    notFor: "คนที่อยากได้ดีไซน์พรีเมียมหรือฟีเจอร์เยอะ",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-sharpwh-34-3500w").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Sharp WH-34",
      source: legacy("waterheater-sharpwh-34-3500w").oldImageUrl
    },
    pros: ["ใช้งานง่าย", "แบรนด์คุ้นเคย", "เหมาะกับงบกลางล่าง"],
    watch: ["ดีไซน์เรียบมาก", "กำลังไฟพื้นฐาน", "ควรเช็กประกันศูนย์"],
    reviewShort:
      "Sharp WH-34 เหมาะกับคนที่ไม่ได้มองหาเครื่องทำน้ำอุ่นซับซ้อน แต่อยากได้ของจากแบรนด์ใหญ่ที่ใช้ง่ายและราคาไม่โดดเกินไป จุดแข็งคือความเป็นรุ่นพื้นฐานที่คนส่วนใหญ่เข้าใจได้ทันที ไม่ต้องเรียนรู้เยอะ แต่ก็ต้องยอมรับว่ามันอาจไม่ใช่รุ่นที่ดูหรูหรือมีฟีเจอร์เด่นแบบรุ่นแพงกว่า ถ้าจะซื้อ ควรดูว่าร้านมีประกันศูนย์จริงไหม และรีวิวผู้ใช้พูดถึงความทนกับการติดตั้งอย่างไร",
    evidence:
      "หน้าเก่าระบุเป็นรุ่นเบสิกที่ควร rewrite ให้เน้นความง่ายและความปลอดภัย",
    verifyChecklist: ["ระบบนิรภัย", "ประกันศูนย์", "อุปกรณ์ในกล่อง", "รีวิวความทน", "ราคาเทียบ Haier"],
    links: searchLinks("Sharp WH-34 3500W เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-sharpwh-34-3500w").oldUrl,
    preservedPath: legacy("waterheater-sharpwh-34-3500w").preservedPath
  },
  {
    slug: "waterheater-haier-ei45m",
    name: "Haier EI45M",
    shortName: "EI45M",
    brand: "Haier",
    award: "ไฟแรงขึ้นในงบยังคุมได้",
    price: legacy("waterheater-haier-ei45m").oldPrice,
    regularPrice: legacy("waterheater-haier-ei45m").oldRegularPrice,
    watt: 4500,
    wattLabel: "4,500W",
    score: 8.4,
    safety: 8.6,
    value: 8.7,
    install: 8.3,
    comfort: 8.7,
    bestFor: "คนที่ชอบ Haier EI35M แต่ต้องการน้ำอุ่นแรงขึ้นหรืออยากเผื่อกำลังไฟ",
    notFor: "บ้านที่ระบบไฟยังไม่พร้อมสำหรับ 4,500W หรือคนที่ต้องการจ่ายน้อยที่สุด",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-haier-ei45m").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Haier EI45M",
      source: legacy("waterheater-haier-ei45m").oldImageUrl
    },
    pros: ["อุ่นไวกว่า 3,500W", "ราคาเก่ายังไม่แรงมาก", "เหมาะทำคู่เปรียบเทียบกับ EI35M"],
    watch: ["ต้องเช็กระบบไฟ", "ราคาอาจใกล้คู่แข่งแบรนด์อื่น", "ดูรุ่นย่อยให้ชัด"],
    reviewShort:
      "Haier EI45M คือคำตอบของคนที่ดู EI35M แล้วรู้สึกว่าอยากได้กำลังไฟเพิ่มอีกนิด รุ่นนี้น่าสนใจเพราะยังอยู่ในโซนราคาที่หลายบ้านรับได้ แต่ให้ความมั่นใจเรื่องน้ำอุ่นไวขึ้นกว่า 3,500W อย่างไรก็ตาม การขยับเป็น 4,500W ไม่ใช่แค่จ่ายเพิ่มแล้วจบ ต้องดูระบบไฟ เบรกเกอร์ และสายดินให้ถูกต้อง ถ้าติดตั้งไม่ดี เครื่องไฟแรงก็ไม่ควรเสี่ยง",
    evidence:
      "หน้าเก่าเหมาะมากสำหรับทำ comparison ระหว่าง EI35M กับ EI45M",
    verifyChecklist: ["ขนาดเบรกเกอร์", "สายไฟที่แนะนำ", "ระบบตัดไฟ", "ราคาใหม่", "รีวิวเรื่องความร้อน"],
    links: searchLinks("Haier EI45M เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-haier-ei45m").oldUrl,
    preservedPath: legacy("waterheater-haier-ei45m").preservedPath
  },
  {
    slug: "waterheater-toshiba-dsk38es5kw",
    name: "Toshiba DSK38ES5KW",
    shortName: "DSK38ES5KW",
    brand: "Toshiba",
    award: "สเปกแน่นในสาย Toshiba",
    price: legacy("waterheater-toshiba-dsk38es5kw").oldPrice,
    regularPrice: legacy("waterheater-toshiba-dsk38es5kw").oldRegularPrice,
    watt: 3800,
    wattLabel: "ประมาณ 3,800W",
    score: 8.3,
    safety: 8.7,
    value: 8.1,
    install: 8.4,
    comfort: 8.3,
    bestFor: "คนที่อยากได้ Toshiba และยอมจ่ายเพิ่มเพื่อสเปกหรือฟีเจอร์ที่ดูแน่นขึ้น",
    notFor: "คนที่ดูราคาเป็นหลัก เพราะอาจมีรุ่นถูกกว่าที่พอใช้งานได้",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-toshiba-dsk38es5kw").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Toshiba DSK38ES5KW",
      source: legacy("waterheater-toshiba-dsk38es5kw").oldImageUrl
    },
    pros: ["แบรนด์ญี่ปุ่น", "เหมาะกับคนชอบสเปกแน่น", "น่าเทียบกับ TWH-38WTH"],
    watch: ["ราคาสูงกว่า Toshiba อีกรุ่น", "ชื่อรุ่นต้องยืนยัน", "ควรตรวจสเปก official"],
    reviewShort:
      "DSK38ES5KW ควรถูกวางเป็นรุ่นที่ต้องเทียบกับ Toshiba TWH-38WTH โดยตรง เพราะคนซื้อจำนวนมากอาจจำชื่อรุ่นไม่ได้และตัดสินจากราคาเป็นหลัก ถ้ารุ่นนี้ให้ระบบความปลอดภัย วัสดุ หรือประกันดีกว่า ส่วนต่างราคาก็มีเหตุผล แต่ถ้าสเปกจริงต่างกันไม่มาก รุ่นที่ถูกกว่าอาจน่าซื้อกว่า บทรีวิวฉบับเต็มควรเจาะให้ชัดว่าเงินที่จ่ายเพิ่มได้อะไรกลับมา",
    evidence:
      "หน้าเก่าให้โจทย์ชัดว่าต้องตรวจความคุ้มเมื่อเทียบ Sharp/Haier/Toshiba รุ่นใกล้กัน",
    verifyChecklist: ["สเปก official", "ระบบตัดไฟ", "ราคาเทียบ TWH-38WTH", "ประกัน", "รีวิวเสียงผู้ใช้"],
    links: searchLinks("Toshiba DSK38ES5KW เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-toshiba-dsk38es5kw").oldUrl,
    preservedPath: legacy("waterheater-toshiba-dsk38es5kw").preservedPath
  },
  {
    slug: "waterheater-sharp-modi-wh-md135-md145",
    name: "Sharp Modi WH-MD135 / WH-MD145",
    shortName: "Sharp Modi",
    brand: "Sharp",
    award: "ดีไซน์เล็กน่ารัก",
    price: legacy("waterheater-sharp-modi-wh-md135-md145").oldPrice,
    regularPrice: legacy("waterheater-sharp-modi-wh-md135-md145").oldRegularPrice,
    watt: 4500,
    wattLabel: "3,500 / 4,500W",
    score: 8.2,
    safety: 8.5,
    value: 8.0,
    install: 8.4,
    comfort: 8.2,
    bestFor: "คนที่อยากได้เครื่องเล็ก ดีไซน์สวย และยังอยากได้แบรนด์ใหญ่",
    notFor: "คนที่ต้องการสรุปเร็วมาก เพราะต้องแยก WH-MD135 กับ WH-MD145 ให้ถูก",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-sharp-modi-wh-md135-md145").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Sharp Modi",
      source: legacy("waterheater-sharp-modi-wh-md135-md145").oldImageUrl
    },
    pros: ["ขนาดดูเป็นมิตร", "ดีไซน์เข้าห้องน้ำง่าย", "มีรุ่นย่อยให้เลือก"],
    watch: ["ต้องแยกรุ่นย่อย", "ราคาอาจสูงกว่ารุ่นพื้นฐาน", "ดูวัตต์ให้ตรงบ้าน"],
    reviewShort:
      "Sharp Modi เหมาะกับคนที่ไม่ได้มองเครื่องทำน้ำอุ่นเป็นแค่กล่องสีขาวบนผนัง แต่สนใจว่าห้องน้ำจะดูดีขึ้นด้วย จุดขายคือดีไซน์ที่ดูเป็นมิตรและขนาดที่เหมาะกับพื้นที่เล็ก แต่ข้อควรระวังคือชื่อรุ่น WH-MD135 และ WH-MD145 อาจทำให้คนซื้อสับสน ถ้าร้านรวมหลายรุ่นไว้ในหน้าเดียว ต้องเช็กกำลังไฟ สี และอุปกรณ์ที่ได้ก่อนกดซื้อทุกครั้ง",
    evidence:
      "หน้าเก่าเป็นรีวิวคู่รุ่นย่อย เหมาะทำภาพเปรียบเทียบความต่างแบบชัด ๆ",
    verifyChecklist: ["WH-MD135 vs WH-MD145", "กำลังไฟ", "สี", "ขนาดจริง", "ราคาโปรล่าสุด"],
    links: searchLinks("Sharp Modi WH-MD135 WH-MD145 เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-sharp-modi-wh-md135-md145").oldUrl,
    preservedPath: legacy("waterheater-sharp-modi-wh-md135-md145").preservedPath
  },
  {
    slug: "waterheater-haier-b1wo",
    name: "Haier B1WO",
    shortName: "B1WO",
    brand: "Haier",
    award: "ตัวเลือกเล็กสายมินิมอล",
    price: legacy("waterheater-haier-b1wo").oldPrice,
    regularPrice: legacy("waterheater-haier-b1wo").oldRegularPrice,
    watt: 4500,
    wattLabel: "ต้องยืนยันจากรุ่นย่อย",
    score: 8.1,
    safety: 8.2,
    value: 8.4,
    install: 8.3,
    comfort: 8.1,
    bestFor: "คนที่ชอบหน้าตาเรียบ เครื่องไม่ใหญ่ และอยากได้ Haier ในงบกลาง",
    notFor: "คนที่ต้องการข้อมูลสเปกชัดก่อนซื้อ เพราะรุ่นนี้ควรตรวจซ้ำละเอียด",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-haier-b1wo").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น Haier B1WO",
      source: legacy("waterheater-haier-b1wo").oldImageUrl
    },
    pros: ["ดีไซน์เรียบ", "ราคาเก่าอยู่ในช่วงน่าสนใจ", "เหมาะกับห้องน้ำมินิมอล"],
    watch: ["สเปกต้องยืนยัน", "อย่าซื้อจากชื่อรุ่นอย่างเดียว", "เช็กรีวิวความทน"],
    reviewShort:
      "Haier B1WO เป็นรุ่นที่ดูน่าสนใจจากมุมดีไซน์และราคา แต่ในฐานะรีวิวที่จริงใจกับคนอ่าน เราควรจัดให้เป็นรุ่นที่ต้องตรวจซ้ำก่อนแนะนำเต็มปาก จุดแข็งคือหน้าตาเรียบและเข้ากับห้องน้ำสมัยใหม่ได้ง่าย จุดที่ยังต้องเก็บข้อมูลเพิ่มคือกำลังไฟจริง รุ่นย่อย และเสียงผู้ใช้ระยะยาว ถ้าจะซื้อวันนี้ ให้กดดูรายละเอียดร้านและเทียบกับ EI35M/EI45M ก่อน",
    evidence:
      "หน้าเก่าระบุชัดว่าเป็นรุ่นเล็กดีไซน์มินิมอล แต่ต้องตรวจว่าคำว่า 'สเปกแรง' ยังจริงไหมในตลาดปัจจุบัน",
    verifyChecklist: ["กำลังไฟจริง", "รุ่นย่อย", "ราคาเทียบ EI45M", "รีวิวเสีย/เคลม", "ร้าน official"],
    links: searchLinks("Haier B1WO เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-haier-b1wo").oldUrl,
    preservedPath: legacy("waterheater-haier-b1wo").preservedPath
  },
  {
    slug: "waterheater-icic6500",
    name: "ICIC 6500W",
    shortName: "ICIC 6500W",
    brand: "ICIC",
    award: "ไฟแรงราคาถูกที่ต้องเช็กหนัก",
    price: legacy("waterheater-icic6500").oldPrice,
    regularPrice: legacy("waterheater-icic6500").oldRegularPrice,
    watt: 6500,
    wattLabel: "6,500W",
    score: 7.6,
    safety: 7.0,
    value: 8.5,
    install: 6.8,
    comfort: 8.4,
    bestFor: "คนงบจำกัดมากที่เข้าใจเรื่องระบบไฟ และยอมตรวจมาตรฐาน/ร้านค้าอย่างละเอียดก่อนซื้อ",
    notFor: "มือใหม่ บ้านที่ไม่เคยเช็กระบบไฟ หรือคนที่อยากซื้อแบบสบายใจที่สุด",
    reviewType: "Archive Rewrite",
    updated: "2026-06-14",
    image: {
      url: legacy("waterheater-icic6500").oldImageUrl,
      alt: "เครื่องทำน้ำอุ่น ICIC 6500W",
      source: legacy("waterheater-icic6500").oldImageUrl
    },
    pros: ["ราคาดึงดูด", "กำลังไฟสูง", "น่าสนใจสำหรับคนงบจำกัด"],
    watch: ["ต้องเช็กมาตรฐานหนัก", "6,500W ต้องระบบไฟพร้อม", "ควรดูรีวิวเสีย/เคลมก่อนซื้อ"],
    reviewShort:
      "ICIC 6500W เป็นรุ่นที่เรียกความสนใจได้ทันทีเพราะราคาเก่าใน archive ต่ำมากเมื่อเทียบกับกำลังไฟ แต่ Friendsay ควรรีวิวแบบระวังเป็นพิเศษ เพราะเครื่องทำน้ำอุ่นคือสินค้าที่ความปลอดภัยสำคัญกว่าความถูก ถ้าจะใส่ใน Top 10 ต้องวางบทบาทให้ถูก: เป็นตัวเลือกงบประหยัดที่ต้องตรวจมาตรฐาน ร้านค้า ระบบไฟ และประกันให้ครบ ไม่ใช่รุ่นที่แนะนำแบบไม่คิด",
    evidence:
      "หน้าเก่าเองก็ชี้ว่าเป็นรุ่นราคาต่ำมาก จึงต้องยกระดับรีวิวใหม่ให้เน้น safety-first",
    verifyChecklist: ["มาตรฐานความปลอดภัย", "ขนาดสายไฟ/เบรกเกอร์", "ระบบตัดไฟ", "รีวิวเสีย/เคลม", "ความน่าเชื่อถือร้าน"],
    links: searchLinks("ICIC 6500W เครื่องทำน้ำอุ่น"),
    legacyUrl: legacy("waterheater-icic6500").oldUrl,
    preservedPath: legacy("waterheater-icic6500").preservedPath
  }
];

export const topWaterHeaterPicks = waterHeaters
  .slice()
  .sort((a, b) => b.score - a.score)
  .slice(0, 3);

export const waterHeaterSourcePlan = [
  {
    step: "01",
    title: "เริ่มจาก URL เก่า",
    detail: "ใช้ 10 รีวิวเครื่องทำน้ำอุ่นเดิมเป็น seed list เพื่อรักษา SEO และไม่ทิ้งทรัพย์สินเดิมของ Friendsay"
  },
  {
    step: "02",
    title: "เช็กตลาดสด",
    detail: "เปิด Shopee, Lazada และ TikTok เพื่อดูร้าน official, ราคาโปร, จำนวนรีวิว, คะแนน และคำบ่นที่ซ้ำกัน"
  },
  {
    step: "03",
    title: "ยืนยันสเปก",
    detail: "เทียบข้อมูลจากแบรนด์ ห้าง และคู่มือ โดยเฉพาะกำลังไฟ ระบบตัดไฟ IP rating สายดิน และประกัน"
  },
  {
    step: "04",
    title: "เขียนแบบเพื่อนเตือนเพื่อน",
    detail: "รีวิวรวมใช้เลือกเร็ว ส่วนรีวิวเดี่ยวลงลึกว่าควรซื้อไหม เหมาะกับบ้านแบบไหน และข้อเสียคืออะไร"
  }
];
