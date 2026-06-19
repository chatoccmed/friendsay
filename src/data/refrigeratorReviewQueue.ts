import type { StoreLinks } from "./airFryers";

export type RefrigeratorType =
  | "one-door"
  | "two-door"
  | "multi-door"
  | "side-by-side";

export type RefrigeratorScoreSet = {
  popularity: number;
  buyerConfidence: number;
  value: number;
  capacityFit: number;
  energyComfort: number;
  maintenanceEase: number;
  deliveryRisk: number;
};

export type RefrigeratorAdvice = {
  title: string;
  body: string;
};

export type QueuedRefrigeratorReview = {
  queueRank: number;
  productKey: string;
  reviewSlug: string;
  brand: string;
  model: string;
  name: string;
  shortName: string;
  articleTitle: string;
  type: RefrigeratorType;
  typeLabel: string;
  capacityCuFt: number;
  capacityLabel: string;
  priceLabel: string;
  sourceName: string;
  sourceUrl: string;
  rating?: number;
  reviewCount?: number;
  proofLabel: string;
  heroImage: string;
  secondaryImage: string;
  quickVerdict: string;
  summary: string;
  bestFor: string[];
  notFor: string[];
  strengths: string[];
  watchouts: string[];
  reviewAdvice: RefrigeratorAdvice[];
  questions: string[];
  score: number;
  scores: RefrigeratorScoreSet;
  links: StoreLinks;
};

type RefrigeratorSeed = {
  queueRank: number;
  brand: string;
  model: string;
  type: RefrigeratorType;
  capacityCuFt: number;
  price: number;
  rating?: number;
  reviewCount?: number;
  sourcePath?: string;
};

const shopeeSearchLink = (query: string) =>
  `https://shopee.co.th/search?keyword=${encodeURIComponent(query)}`;

const lazadaSearchLink = (query: string) =>
  `https://www.lazada.co.th/catalog/?q=${encodeURIComponent(query)}`;

const tiktokSearchLink = (query: string) =>
  `https://www.tiktok.com/search?q=${encodeURIComponent(`${query} TikTok Shop`)}`;

const homeproSearchLink = (query: string) =>
  `https://www.homepro.co.th/search?q=${encodeURIComponent(query)}`;

const slugify = (brand: string, model: string) =>
  `${brand}-${model}`
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const typeLabelMap: Record<RefrigeratorType, string> = {
  "one-door": "ตู้เย็น 1 ประตู",
  "two-door": "ตู้เย็น 2 ประตู",
  "multi-door": "ตู้เย็นมัลติดอร์",
  "side-by-side": "ตู้เย็นไซด์บายไซด์"
};

const typeHeroMap: Record<RefrigeratorType, string> = {
  "one-door": "/images/refrigerators/refrigerator-product-set.png",
  "two-door": "/images/refrigerators/refrigerator-library-hero.png",
  "multi-door": "/images/refrigerators/refrigerator-capacity-organization.png",
  "side-by-side": "/images/refrigerators/refrigerator-product-set.png"
};

const typeSecondaryMap: Record<RefrigeratorType, string> = {
  "one-door": "/images/refrigerators/refrigerator-measure-space.png",
  "two-door": "/images/refrigerators/refrigerator-capacity-organization.png",
  "multi-door": "/images/refrigerators/refrigerator-energy-warranty.png",
  "side-by-side": "/images/refrigerators/refrigerator-delivery-check.png"
};

const refrigeratorSeeds: RefrigeratorSeed[] = [
  { queueRank: 1, brand: "TOSHIBA", model: "GR-RT468WE-PMT(06)", type: "two-door", capacityCuFt: 12.8, price: 13490, rating: 5, reviewCount: 27 },
  { queueRank: 2, brand: "SAMSUNG", model: "RT20HAR1DSA/ST", type: "two-door", capacityCuFt: 7.4, price: 7390, rating: 4.89, reviewCount: 28 },
  { queueRank: 3, brand: "TOSHIBA", model: "GR-RT325WE-PMT(06)", type: "two-door", capacityCuFt: 9.2, price: 9990, rating: 5, reviewCount: 23 },
  { queueRank: 4, brand: "MITSUBISHI", model: "MR-FV22U-SSL", type: "two-door", capacityCuFt: 7.1, price: 7790, rating: 5, reviewCount: 22 },
  { queueRank: 5, brand: "TOSHIBA", model: "GR-RT416WE-PMT(06)", type: "two-door", capacityCuFt: 11.8, price: 12290, rating: 5, reviewCount: 17 },
  { queueRank: 6, brand: "HISENSE", model: "RS670N4AD1", type: "side-by-side", capacityCuFt: 16.2, price: 23990, rating: 5, reviewCount: 18 },
  { queueRank: 7, brand: "HITACHI", model: "R-HW530PDX GBW", type: "multi-door", capacityCuFt: 18.2, price: 40990, rating: 5, reviewCount: 17 },
  { queueRank: 8, brand: "HISENSE", model: "RS688N4TW1", type: "side-by-side", capacityCuFt: 18.1, price: 21990, rating: 5, reviewCount: 17 },
  { queueRank: 9, brand: "LG", model: "GN-B392PXGB", type: "two-door", capacityCuFt: 14.1, price: 16990, rating: 5, reviewCount: 16 },
  { queueRank: 10, brand: "TOSHIBA", model: "GR-RT468WE-PGT(22)", type: "two-door", capacityCuFt: 12.8, price: 13490, rating: 5, reviewCount: 15 },
  { queueRank: 11, brand: "TOSHIBA", model: "GR-RT559WE-PMT(52)", type: "two-door", capacityCuFt: 15.8, price: 18390, rating: 4.86, reviewCount: 14 },
  { queueRank: 12, brand: "MITSUBISHI", model: "MR-FC29EP-SSL", type: "two-door", capacityCuFt: 10.2, price: 9290, rating: 5, reviewCount: 14 },
  { queueRank: 13, brand: "TOSHIBA", model: "GR-RF532WE-PMT(06)", type: "multi-door", capacityCuFt: 18.3, price: 19990, rating: 5, reviewCount: 13 },
  { queueRank: 14, brand: "TOSHIBA", model: "GR-RT234WE-PMT(06)", type: "two-door", capacityCuFt: 6.4, price: 7990, rating: 4.82, reviewCount: 11, sourcePath: "/p/1266175" },
  { queueRank: 15, brand: "HAIER", model: "HRT-510MGI", type: "two-door", capacityCuFt: 17.7, price: 16490, rating: 4.7, reviewCount: 10 },
  { queueRank: 16, brand: "TCL", model: "P251TMW", type: "two-door", capacityCuFt: 8.7, price: 6990, rating: 4.89, reviewCount: 9 },
  { queueRank: 17, brand: "SAMSUNG", model: "RS62R5001M9/ST", type: "side-by-side", capacityCuFt: 22.4, price: 24990, rating: 4.86, reviewCount: 7 },
  { queueRank: 18, brand: "HISENSE", model: "RS650N4AD1", type: "side-by-side", capacityCuFt: 20.8, price: 18990, rating: 5, reviewCount: 6 },
  { queueRank: 19, brand: "TOSHIBA", model: "GR-RT624WE-PMT(37)", type: "two-door", capacityCuFt: 18, price: 18990, rating: 5, reviewCount: 4 },
  { queueRank: 20, brand: "SHARP", model: "SJ-XP550GP-SL", type: "two-door", capacityCuFt: 19.2, price: 26890, rating: 5, reviewCount: 4 },
  { queueRank: 21, brand: "HITACHI", model: "R-VGX400PF-1 GBW", type: "two-door", capacityCuFt: 14.6, price: 22690, rating: 5, reviewCount: 3 },
  { queueRank: 22, brand: "HAIER", model: "HRS-682GKU1", type: "side-by-side", capacityCuFt: 17.5, price: 19990, rating: 5, reviewCount: 2 },
  { queueRank: 23, brand: "LG", model: "GN-B372PXGB", type: "two-door", capacityCuFt: 13.2, price: 14990, rating: 5, reviewCount: 2 },
  { queueRank: 24, brand: "TOSHIBA", model: "GR-RT468WE-PMT(37)", type: "two-door", capacityCuFt: 12.8, price: 14990, rating: 5, reviewCount: 1 },
  { queueRank: 25, brand: "TOSHIBA", model: "GR-RT468WE-PMT(52)", type: "two-door", capacityCuFt: 12.8, price: 14990, rating: 5, reviewCount: 1 },
  { queueRank: 26, brand: "TOSHIBA", model: "GR-RT416WE-PMT(52)", type: "two-door", capacityCuFt: 11.8, price: 12790, rating: 5, reviewCount: 1 },
  { queueRank: 27, brand: "SHARP", model: "SJ-XP550GP-BK", type: "two-door", capacityCuFt: 19.2, price: 26890, rating: 5, reviewCount: 1 },
  { queueRank: 28, brand: "SAMSUNG", model: "RS62R50012C/ST", type: "side-by-side", capacityCuFt: 22.4, price: 30990 }
];

const capacityUse = (capacity: number, type: RefrigeratorType) => {
  if (type === "side-by-side") {
    return {
      best: "บ้านที่ซื้อของเข้าบ้านทีละเยอะ ชอบแยกช่องแช่ชัด และมีพื้นที่ครัวพอให้เปิดประตูสองฝั่ง",
      caution: "ครัวแคบหรือคอนโดที่ประตูตู้ชนเคาน์เตอร์ เพราะตู้กลุ่มนี้กินพื้นที่หน้าตู้มากกว่าที่คิด"
    };
  }
  if (type === "multi-door") {
    return {
      best: "บ้านที่อยากจัดของเป็นหมวด ชอบช่องแช่หลายโซน และเน้นภาพรวมพรีเมียมในครัว",
      caution: "คนที่อยากคุมงบให้ต่ำที่สุด เพราะราคาซื้อและค่าซ่อมบางชิ้นมักสูงกว่าตู้สองประตู"
    };
  }
  if (capacity <= 8) {
    return {
      best: "คอนโด ห้องเช่า หรือบ้าน 1-2 คนที่ซื้อของสดไม่เยอะและอยากได้ตู้ประหยัดพื้นที่",
      caution: "บ้านที่ทำอาหารบ่อย แช่กล่องอาหารหลายวัน หรือชอบซื้อของแพ็กใหญ่จากห้าง"
    };
  }
  if (capacity <= 13) {
    return {
      best: "บ้าน 2-3 คนที่อยากได้ตู้เย็นใช้ง่าย ขนาดไม่ใหญ่เกินไป และราคาไม่กระโดดแรง",
      caution: "ครอบครัวใหญ่หรือคนที่แช่อาหารแช่แข็งเยอะ เพราะช่องฟรีซอาจเต็มเร็ว"
    };
  }
  return {
    best: "บ้าน 3-5 คน หรือคนที่ทำอาหารบ่อยและอยากมีพื้นที่แช่ของสด ของแช่แข็ง และเครื่องดื่มแบบไม่อึดอัด",
    caution: "ครัวที่เว้นช่องตู้ไว้พอดีมาก เพราะตู้ใหญ่ต้องเผื่อระบายความร้อนและเปิดประตูให้สุด"
  };
};

const makeAdvice = (seed: RefrigeratorSeed): RefrigeratorAdvice[] => {
  const isLarge = seed.capacityCuFt >= 16;
  const isSide = seed.type === "side-by-side";
  const isCompact = seed.capacityCuFt <= 8;

  return [
    {
      title: "วัดช่องวางก่อนดูโปร",
      body: `ตู้ขนาด ${seed.capacityCuFt} คิวดูจากตัวเลขอย่างเดียวไม่พอ ต้องเช็กความกว้าง ความลึก ความสูง และเผื่อด้านหลังกับด้านข้างให้ระบายความร้อนได้จริง`
    },
    {
      title: "ดูประตูเปิดชนอะไรไหม",
      body: isSide
        ? "ไซด์บายไซด์ต้องมีพื้นที่หน้าตู้มากกว่าตู้สองประตู ถ้าครัวแคบให้ลองจินตนาการตอนเปิดสองฝั่งพร้อมกันก่อน"
        : "ตู้สองประตูบางรุ่นเปิดบานกว้าง ถ้าติดผนังหรือเคาน์เตอร์มากไป อาจดึงลิ้นชักด้านในออกไม่สุด"
    },
    {
      title: "คิดจากนิสัยซื้อของ",
      body: isCompact
        ? "ถ้าซื้อของสดบ่อยแต่ปริมาณน้อย รุ่นเล็กจะพอดี แต่ถ้าชอบซื้อแพ็กใหญ่หรือแช่กล่องอาหารหลายวัน ควรขยับความจุขึ้น"
        : "ถ้าซื้อของเข้าบ้านสัปดาห์ละครั้ง ให้ดูพื้นที่ช่องแช่ผัก ช่องขวดน้ำ และช่องฟรีซมากกว่าดูคิวอย่างเดียว"
    },
    {
      title: "เช็กค่าไฟกับ Inverter",
      body: "ตู้เย็นเปิดตลอด 24 ชั่วโมง รุ่น Inverter มักน่าเลือกกว่าในบ้านที่ใช้นานหลายปี แต่ควรเทียบฉลากประหยัดไฟและเงื่อนไขรับประกันไปพร้อมกัน"
    },
    {
      title: "ถามประกันคอมเพรสเซอร์",
      body: "ก่อนจ่ายเงินให้ถามแยกเลยว่าเครื่องรับประกันกี่ปี คอมเพรสเซอร์กี่ปี ต้องลงทะเบียนไหม และถ้าซื้อออนไลน์ใครเป็นคนดูแลเคลม"
    },
    {
      title: "ตรวจรับของทันที",
      body: isLarge
        ? "ตู้ใหญ่เสี่ยงรอยบุบจากขนส่งมากกว่า ให้ถ่ายคลิปตอนแกะ เช็กมุมตู้ บานประตู ขาตั้ง และเสียงคอมเพรสเซอร์ก่อนทิ้งกล่อง"
        : "ถ่ายรูปกล่องและตัวเครื่องไว้ตั้งแต่รับของ เช็กขอบยาง ประตูปิดสนิท และให้ตู้ตั้งนิ่งก่อนเสียบปลั๊กตามคู่มือ"
    }
  ];
};

const makeReview = (seed: RefrigeratorSeed): QueuedRefrigeratorReview => {
  const name = `${seed.brand} ${seed.model}`;
  const query = `${name} ตู้เย็น`;
  const reviewSlug = `${slugify(seed.brand, seed.model)}-refrigerator`;
  const typeLabel = typeLabelMap[seed.type];
  const useCase = capacityUse(seed.capacityCuFt, seed.type);
  const priceLabel = `ประมาณ ${seed.price.toLocaleString("th-TH")} บาท`;
  const reviewPart = seed.reviewCount
    ? `มีรีวิวจากแหล่งอ้างอิง ${seed.reviewCount.toLocaleString("th-TH")} รายการ`
    : "ควรเช็กรีวิวล่าสุดในร้านก่อนตัดสินใจ";
  const isLarge = seed.capacityCuFt >= 16;
  const isPremium = seed.price >= 20000 || seed.type !== "two-door";
  const titleBenefit = isLarge
    ? "พื้นที่แช่เยอะ เหมาะกับบ้านที่ซื้อของเข้าครัวจริงจัง"
    : "ตัวเลือกใช้ง่ายสำหรับบ้านที่อยากซื้อตู้เย็นให้จบแบบไม่พลาด";
  const scoreBase = Math.min(9.4, 7.7 + Math.min(seed.reviewCount ?? 1, 30) / 20 + (seed.rating ?? 4.6) / 12);

  return {
    queueRank: seed.queueRank,
    productKey: slugify(seed.brand, seed.model),
    reviewSlug,
    brand: seed.brand,
    model: seed.model,
    name,
    shortName: seed.model,
    articleTitle: `${name}: ${seed.capacityCuFt} คิว ${titleBenefit}`,
    type: seed.type,
    typeLabel,
    capacityCuFt: seed.capacityCuFt,
    capacityLabel: `${seed.capacityCuFt.toLocaleString("th-TH")} คิว`,
    priceLabel,
    sourceName: "HomePro",
    sourceUrl: seed.sourcePath ? `https://www.homepro.co.th${seed.sourcePath}` : homeproSearchLink(query),
    rating: seed.rating,
    reviewCount: seed.reviewCount,
    proofLabel: `${reviewPart} พร้อมข้อมูลราคาและชื่อรุ่นสำหรับเทียบก่อนซื้อ`,
    heroImage: typeHeroMap[seed.type],
    secondaryImage: typeSecondaryMap[seed.type],
    quickVerdict: `${name} น่าเริ่มดูถ้าคุณอยากได้${typeLabel}ขนาด ${seed.capacityCuFt} คิว ในงบ ${priceLabel} จุดที่ควรเช็กก่อนจ่ายคือพื้นที่วางจริง ประตูเปิดสุดไหม และเงื่อนไขประกันหลังซื้อออนไลน์`,
    summary: `รุ่นนี้อยู่ในกลุ่มที่ควรเปิดดู เพราะชื่อรุ่น ราคา และความจุค่อนข้างชัด เหมาะกับคนที่อยากเริ่มเทียบจากรุ่นจริง แล้วค่อยดูโปร สี ประกัน ค่าขนส่ง และร้านที่ตอบคำถามหลังการขายได้ครบก่อนจ่ายเงิน`,
    bestFor: [
      useCase.best,
      `คนที่อยากเทียบตู้เย็น ${seed.brand} ในงบ ${priceLabel} แบบมีชื่อรุ่นชัดเจน`,
      isPremium ? "บ้านที่ยอมจ่ายเพิ่มเพื่อพื้นที่และหน้าตาที่ดูพรีเมียมขึ้น" : "คนที่อยากได้ตู้เย็นใช้ง่าย ไม่ต้องจ่ายเกินความจำเป็น"
    ],
    notFor: [
      useCase.caution,
      "คนที่ยังไม่ได้วัดพื้นที่หน้าครัว ลิฟต์ บันได หรือทางเข้าบ้าน",
      "คนที่อยากซื้อทันทีโดยไม่เช็กชื่อรุ่น สี ประกัน ค่าขนส่ง และเงื่อนไขเปลี่ยนคืนให้ตรงกัน"
    ],
    strengths: [
      `${typeLabel} ขนาด ${seed.capacityCuFt} คิว เหมาะกับการเทียบตามขนาดบ้านได้ง่าย`,
      `ราคาอ้างอิง ${priceLabel} ทำให้ประเมินงบคร่าว ๆ ก่อนเทียบโปรในร้านออนไลน์ได้`,
      seed.rating ? `คะแนนอ้างอิง ${seed.rating.toFixed(2)} จากหน้าร้านที่ตรวจได้` : "ชื่อรุ่นชัด เหมาะกับการค้นหาร้านที่ขายตรงรุ่น",
      isLarge ? "พื้นที่แช่เยอะ เหมาะกับบ้านที่ซื้อของสดและเครื่องดื่มเข้าบ้านทีละมาก" : "ขนาดไม่เวอร์จนเกินไปสำหรับบ้านไทยทั่วไป"
    ],
    watchouts: [
      "ต้องวัดพื้นที่จริงและเผื่อช่องระบายความร้อนด้านหลังกับด้านข้าง",
      "ต้องถามร้านว่าเป็นสินค้าใหม่ ศูนย์ไทย และประกันเริ่มนับจากวันไหน",
      "ต้องเช็กค่าขนส่ง ยกขึ้นชั้น และเงื่อนไขเปลี่ยนคืนเมื่อเจอบุบหรือประตูไม่สนิท",
      seed.type === "side-by-side" ? "ตู้ไซด์บายไซด์ต้องเช็กความกว้างประตูบ้านและทางเดินมากเป็นพิเศษ" : "ตู้สองประตูควรเช็กช่องฟรีซว่าพอกับนิสัยแช่ของหรือไม่"
    ],
    reviewAdvice: makeAdvice(seed),
    questions: [
      "รุ่นนี้เป็นศูนย์ไทยหรือเครื่องนำเข้า และออกใบกำกับภาษีได้ไหม",
      "รับประกันตัวเครื่องและคอมเพรสเซอร์กี่ปี ต้องลงทะเบียนเองหรือร้านจัดการให้",
      "ค่าขนส่งรวมยกขึ้นชั้นไหม ถ้าบ้านไม่มีลิฟต์คิดเพิ่มเท่าไร",
      "ถ้าเครื่องบุบ ประตูเอียง หรือเสียงดังผิดปกติหลังรับของ เปลี่ยนเครื่องได้ภายในกี่วัน",
      "มีบริการติดตั้ง ตั้งระดับขาตู้ และแนะนำการตั้งทิ้งไว้ก่อนเสียบปลั๊กหรือไม่",
      "สีและรหัสรุ่นตรงกับรูปสินค้าไหม โดยเฉพาะรุ่นที่มีหลายสีใกล้กัน"
    ],
    score: Number(scoreBase.toFixed(1)),
    scores: {
      popularity: Number(Math.min(9.6, 7.4 + Math.min(seed.reviewCount ?? 1, 30) / 12).toFixed(1)),
      buyerConfidence: Number(Math.min(9.4, 7.2 + (seed.rating ?? 4.5) / 3 + Math.min(seed.reviewCount ?? 0, 20) / 25).toFixed(1)),
      value: Number((seed.price < 10000 ? 9 : seed.price < 18000 ? 8.7 : seed.price < 25000 ? 8.2 : 7.8).toFixed(1)),
      capacityFit: Number((isLarge ? 9 : seed.capacityCuFt >= 9 ? 8.7 : 8.2).toFixed(1)),
      energyComfort: Number((seed.brand === "TOSHIBA" || seed.brand === "LG" || seed.brand === "HITACHI" ? 8.8 : 8.4).toFixed(1)),
      maintenanceEase: Number((seed.type === "two-door" ? 8.8 : seed.type === "one-door" ? 9 : 8.1).toFixed(1)),
      deliveryRisk: Number((seed.type === "side-by-side" || seed.type === "multi-door" ? 7.8 : isLarge ? 8.1 : 8.6).toFixed(1))
    },
    links: {
      shopee: shopeeSearchLink(query),
      lazada: lazadaSearchLink(query),
      tiktok: tiktokSearchLink(query)
    }
  };
};

export const queuedRefrigeratorReviews: QueuedRefrigeratorReview[] =
  refrigeratorSeeds.map(makeReview);

export const refrigeratorReviewSummary = {
  total: queuedRefrigeratorReviews.length,
  source: "HomePro refrigerator category and product listing",
  sourceUrl: "https://www.homepro.co.th/c/APP09",
  collectedAt: "2026-06-18",
  categoryCount: 476,
  types: Array.from(new Set(queuedRefrigeratorReviews.map((item) => item.typeLabel))),
  reviewSignalReady: queuedRefrigeratorReviews.filter((item) => (item.reviewCount ?? 0) > 5).length
};

export const refrigeratorReviewsBySlug = new Map(
  queuedRefrigeratorReviews.map((review) => [review.reviewSlug, review])
);
