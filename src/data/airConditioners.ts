import type { StoreLinks } from "./airFryers";

const searchLinks = (query: string, shopeeProductUrl?: string): StoreLinks => {
  const encoded = encodeURIComponent(query);
  const tiktokQuery = encodeURIComponent(`${query} TikTok Shop`);

  return {
    shopee: shopeeProductUrl ?? `https://shopee.co.th/search?keyword=${encoded}`,
    lazada: `https://www.lazada.co.th/catalog/?q=${encoded}`,
    tiktok: `https://www.tiktok.com/search?q=${tiktokQuery}`
  };
};

export type AirConditionerProduct = {
  slug: string;
  name: string;
  shortName: string;
  brand: string;
  store: string;
  status: "review_signal_pass" | "candidate" | "needs_manual_check";
  statusLabel: string;
  sourceUrl: string;
  image: {
    url: string;
    alt: string;
    source: string;
    note: string;
  };
  priceLabel: string;
  btuOptions: string[];
  rating: number;
  ratingsCount: number;
  commentsCount: number;
  mediaCount: number;
  favoritesLabel: string;
  score: number;
  popularity: number;
  buyerConfidence: number;
  value: number;
  roomFit: number;
  energyComfort: number;
  installRisk: number;
  warrantySafety: number;
  complaintRisk: number;
  bestFor: string;
  notFor: string;
  pros: string[];
  watch: string[];
  reviewSignals: string[];
  installNotes: string[];
  warrantyNotes: string[];
  sourceNotes: string[];
  links: StoreLinks;
  updated: string;
};

export const airConditioners: AirConditionerProduct[] = [
  {
    slug: "candy-vpct-vpgt-series",
    name: "CANDY VPCT/VPGT Series",
    shortName: "CANDY VPCT/VPGT",
    brand: "CANDY / Haier official shop",
    store: "haier.officialshop",
    status: "review_signal_pass",
    statusLabel: "รีวิวแน่น ควรเทียบ",
    sourceUrl: "https://shopee.co.th/product/184920733/26853787935",
    image: {
      url: "/images/air-conditioners/wall-ac-condo-hero.png",
      alt: "ภาพประกอบแอร์ติดผนังในคอนโดสว่างสบาย",
      source: "/images/air-conditioners/wall-ac-condo-hero.png",
      note: "ภาพประกอบการเลือกแอร์ติดผนัง ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 7,995 บาทหลังคูปอง ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,000 BTU", "12,000 BTU", "18,000 BTU", "23,200 BTU"],
    rating: 4.9,
    ratingsCount: 10400,
    commentsCount: 2200,
    mediaCount: 2100,
    favoritesLabel: "10.3k",
    score: 8.8,
    popularity: 9.6,
    buyerConfidence: 9.0,
    value: 9.0,
    roomFit: 8.7,
    energyComfort: 8.5,
    installRisk: 7.6,
    warrantySafety: 8.0,
    complaintRisk: 7.8,
    bestFor:
      "คนที่อยากได้แอร์อินเวอร์เตอร์ราคาไม่แรง มี BTU ให้เลือกหลายขนาด และอยากเริ่มจากรุ่นที่มีรีวิวผู้ซื้อใน Shopee เยอะพอให้ตามอ่านได้จริง",
    notFor:
      "คนที่อยากกดซื้อไว ๆ โดยไม่ทักร้านเรื่องวันติดตั้งและค่าอุปกรณ์เพิ่ม รุ่นนี้ควรถามให้จบก่อนจ่าย ไม่งั้นอาจเสียเวลาตอนหน้างาน",
    pros: ["รีวิวและรูปจากผู้ซื้อเยอะ", "มี BTU ให้เลือกหลายขนาด", "ราคาเริ่มต้นชวนเทียบ", "มีตัวเลือกติดตั้งผ่าน Q-CHANG"],
    watch: ["VPCT/VPGT เป็นรหัสรุ่นย่อย ต้องเช็กช่องตัวเลือกให้ตรง", "เลือก BTU ให้ตรงห้องจริง", "อาจมีค่าอุปกรณ์ติดตั้งเพิ่ม", "ต้องถามคิวช่างก่อนจ่าย", "บางสเปกควรถามร้านซ้ำก่อนจ่าย"],
    reviewSignals: [
      "หลายรีวิวพูดว่าเย็นเร็วและรู้สึกคุ้มราคา",
      "มีรูป/วิดีโอจากผู้ซื้อให้ดูสภาพของและงานติดตั้ง",
      "มีคนชมเรื่องเสียงเงียบและหน้าตาเครื่อง",
      "มีคนเตือนเรื่องคิวนัดช่าง เลยไม่ควรดูแค่ราคาเครื่อง"
    ],
    installNotes: [
      "หน้าสินค้ามีตัวเลือกบริการติดตั้ง/Q-CHANG",
      "อาจมีค่าเพิ่ม เช่น รางครอบท่อ ขาแขวน สายไฟ หรือของที่เกินมาตรฐาน",
      "ก่อนกดซื้อควรถามวันติดตั้งและบอกสภาพห้อง โดยเฉพาะคอนโดที่ต้องแจ้งนิติบุคคล"
    ],
    warrantyNotes: [
      "สเปก Shopee ระบุระยะประกัน 12 เดือน",
      "รายละเอียดหน้าสินค้าระบุประกันตัวเครื่อง 1 ปี และคอมเพรสเซอร์ 5 ปี",
      "เก็บใบเสร็จ เลข serial และข้อความคุยกับร้านไว้ให้ครบ"
    ],
    sourceNotes: [
      "เก็บข้อมูลจาก Shopee วันที่ 15 มิถุนายน 2026",
      "ใช้คะแนน รีวิว ภาพ/วิดีโอผู้ซื้อ ราคา และเงื่อนไขติดตั้งเป็นหลักในการประเมิน",
      "ข้อมูลราคาและคูปองเปลี่ยนได้ ควรกดเช็กหน้าร้านก่อนซื้อทุกครั้ง"
    ],
    links: searchLinks("CANDY VPCT VPGT แอร์อินเวอร์เตอร์", "https://shopee.co.th/product/184920733/26853787935"),
    updated: "2026-06-15"
  },
  {
    slug: "tcl-savein-ai-series",
    name: "TCL SaveIN AI Series",
    shortName: "TCL SaveIN AI",
    brand: "TCL",
    store: "TCL Authorized Store",
    status: "review_signal_pass",
    statusLabel: "รีวิวแน่น ควรเทียบ",
    sourceUrl: "https://shopee.co.th/product/1025131800/23777230236",
    image: {
      url: "/images/air-conditioners/wall-ac-condo-hero.png",
      alt: "ภาพประกอบแอร์ติดผนังสำหรับห้องคอนโด",
      source: "/images/air-conditioners/wall-ac-condo-hero.png",
      note: "ภาพประกอบการเลือกแอร์ติดผนัง ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 8,590 บาทหลังคูปอง ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,200 BTU", "12,000 BTU", "18,100 BTU", "24,200 BTU"],
    rating: 4.9,
    ratingsCount: 9200,
    commentsCount: 1600,
    mediaCount: 1500,
    favoritesLabel: "12.8k",
    score: 8.7,
    popularity: 9.4,
    buyerConfidence: 8.8,
    value: 8.6,
    roomFit: 8.9,
    energyComfort: 8.8,
    installRisk: 7.7,
    warrantySafety: 8.2,
    complaintRisk: 7.6,
    bestFor: "คนที่อยากได้แอร์ Full DC Inverter จากแบรนด์ที่มีตัวเลือก BTU กว้าง และสนใจฟีเจอร์ประหยัดพลังงาน/ทำความสะอาดตัวเอง",
    notFor: "คนที่อยากได้ข้อมูลสเปกแบบไม่ต้องเทียบ เพราะหน้าสินค้ามีตัวเลือก BTU หลายขนาดและต้องเช็กให้ตรงห้อง",
    pros: ["รีวิวเยอะ", "BTU กว้างถึง 24,200", "ฟีเจอร์ AI/ประหยัดไฟน่าสนใจ", "ร้านตอบเร็วมาก"],
    watch: ["ต้องยืนยันค่า SEER ของแต่ละ BTU", "ต้องเช็กเงื่อนไขลงทะเบียนประกัน", "ติดตั้งผ่าน Q-CHANG ต้องดูคิว"],
    reviewSignals: ["ผู้ซื้อพูดถึงความเย็นเร็ว", "หลายรีวิวชมแพ็กกิ้งและงานติดตั้ง", "มีคนพูดถึงเสียงและความทนในทางบวก"],
    installNotes: ["มี Add-on Installation Service/Q-CHANG", "ควรเช็กวันนัดและค่าอุปกรณ์เพิ่ม", "คอนโดควรยืนยันจุดเจาะและท่อน้ำทิ้งก่อน"],
    warrantyNotes: ["หน้าสินค้าระบุคอมเพรสเซอร์ 5 ปี/อะไหล่ 1 ปี", "ควรลงทะเบียนกับ TCL ตามเงื่อนไข"],
    sourceNotes: ["เก็บข้อมูลจาก Shopee วันที่ 15 มิถุนายน 2026", "ยอดขายไม่ปรากฏชัด จึงใช้รีวิวผู้ซื้อเป็นหลักในการประเมิน"],
    links: searchLinks("TCL SaveIN AI Series แอร์ Full DC Inverter", "https://shopee.co.th/product/1025131800/23777230236"),
    updated: "2026-06-15"
  },
  {
    slug: "xiaomi-mijia-air-inverter-eco",
    name: "Xiaomi Mijia Air Inverter Eco",
    shortName: "Xiaomi Mijia Eco",
    brand: "Mijia / Xiaomi",
    store: "XIAOMI OFFICIAL STORE",
    status: "review_signal_pass",
    statusLabel: "รีวิวดี ควรเทียบต่อ",
    sourceUrl: "https://shopee.co.th/product/389528981/49105546219",
    image: {
      url: "/images/air-conditioners/xiaomi-mijia-product-set.png",
      alt: "ภาพประกอบ Xiaomi Mijia Air Inverter Eco พร้อมชุดอุปกรณ์",
      source: "/images/air-conditioners/xiaomi-mijia-product-set.png",
      note: "ภาพประกอบชุดสินค้าและอุปกรณ์สำหรับรีวิว Xiaomi Mijia"
    },
    priceLabel: "พบราคาประมาณ 7,924 บาท ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,000 BTU", "12,000 BTU", "18,000 BTU"],
    rating: 4.9,
    ratingsCount: 4300,
    commentsCount: 942,
    mediaCount: 927,
    favoritesLabel: "9.1k",
    score: 8.5,
    popularity: 8.6,
    buyerConfidence: 8.6,
    value: 8.8,
    roomFit: 8.5,
    energyComfort: 8.8,
    installRisk: 7.2,
    warrantySafety: 8.0,
    complaintRisk: 7.5,
    bestFor:
      "คนที่ใช้ ecosystem Xiaomi อยู่แล้ว หรืออยากได้แอร์ที่ควบคุมผ่านแอปได้ในงบไม่แรง เหมาะกับห้องนอน คอนโด หรือห้องนั่งเล่นขนาดทั่วไปที่เลือก BTU ได้ตรงกับห้องจริง",
    notFor:
      "คนที่ไม่อยากยุ่งกับแอปเลย หรืออยากได้แบรนด์แอร์ดั้งเดิมที่ศูนย์บริการคุ้นพื้นที่มากกว่า รุ่นนี้ควรถามเรื่องติดตั้ง ประกัน และบริการหลังซื้อให้ชัดก่อนจ่าย",
    pros: [
      "ใช้ร่วมกับ Xiaomi Home ได้ เหมาะกับสาย smart home",
      "รีวิวพูดถึงความเย็นเร็วและเสียงที่ไม่กวน",
      "มีข้อมูลการใช้ไฟในแอป ช่วยให้ตามพฤติกรรมการเปิดแอร์ได้ง่ายขึ้น",
      "ราคาเริ่มต้นน่าสนใจเมื่อเทียบกับจำนวนรีวิว",
      "มี BTU ยอดนิยม 9,000 / 12,000 / 18,000 ให้เลือก"
    ],
    watch: [
      "ต้องเช็กว่าราคารวมติดตั้งหรือเป็นราคาเครื่องเปล่า",
      "ต้องถามค่าอุปกรณ์เพิ่ม เช่น ท่อ ราง ขาแขวน สายไฟ และงานเจาะ",
      "ต้องดูบริการหลังการขายและศูนย์บริการในพื้นที่",
      "เหมาะกับคนที่รับระบบ smart home ได้ ถ้าไม่ใช้แอป จุดเด่นจะลดลง",
      "ห้องใหญ่หรือแดดแรงมากอาจต้องเทียบรุ่น BTU สูงกว่าของแบรนด์อื่น"
    ],
    reviewSignals: [
      "ผู้ซื้อชมว่าเย็นเร็วและเสียงไม่กวนห้องนอน",
      "มีรีวิวพูดถึงการใช้งานผ่านแอปและการดูค่าไฟ",
      "มีรีวิวเรื่องแพ็กสินค้าและการจัดส่ง",
      "ประเด็นที่ควรอ่านเพิ่มคือบริการหลังซื้อและค่าติดตั้งจริง"
    ],
    installNotes: [
      "เช็กว่าราคารวมติดตั้งหรือไม่ และรวมอุปกรณ์มาตรฐานกี่เมตร",
      "ยืนยันค่าเดินท่อ รางครอบท่อ ขาแขวน สายไฟ และงานเจาะพิเศษก่อนจ่าย",
      "ถ้าอยู่คอนโด ให้ถามเรื่องเอกสารนิติ จุดวางคอยล์ร้อน และท่อน้ำทิ้ง",
      "ถามวันนัดช่างและพื้นที่บริการจริง เพราะบางพื้นที่อาจต้องรอคิวหรือมีค่าเดินทาง"
    ],
    warrantyNotes: [
      "หน้าสินค้าระบุรับประกัน 5 ปี แต่ควรถามว่าเป็นส่วนไหนและมีเงื่อนไขอะไร",
      "ถามว่าต้องลงทะเบียนกับ Xiaomi/ร้านหรือไม่ และใช้เอกสารอะไรตอนเคลม",
      "เก็บใบเสร็จ เลขเครื่อง กล่องสินค้า และแชทร้านไว้ให้ครบหลังติดตั้ง"
    ],
    sourceNotes: ["เก็บข้อมูลจาก Shopee วันที่ 14 มิถุนายน 2026", "ยอดขายไม่ปรากฏชัด จึงใช้รีวิวผู้ซื้อเป็นหลักในการประเมิน"],
    links: searchLinks("Xiaomi Mijia Air Inverter Eco แอร์", "https://shopee.co.th/product/389528981/49105546219"),
    updated: "2026-06-14"
  },
  {
    slug: "midea-celest-msce",
    name: "Midea Celest MSCE",
    shortName: "Midea Celest",
    brand: "Midea",
    store: "Lucky Plaza Online",
    status: "review_signal_pass",
    statusLabel: "รีวิวดี ควรเทียบต่อ",
    sourceUrl: "https://shopee.co.th/product/338734338/57308205291",
    image: {
      url: "/images/air-conditioners/wall-ac-condo-hero.png",
      alt: "ภาพประกอบแอร์ติดผนังในห้องนั่งเล่น",
      source: "/images/air-conditioners/wall-ac-condo-hero.png",
      note: "ภาพประกอบการเลือกแอร์ติดผนัง ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบช่วงราคาประมาณ 7,490-8,490 บาท ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,360 BTU", "12,000 BTU", "18,000 BTU", "24,000 BTU"],
    rating: 5.0,
    ratingsCount: 193,
    commentsCount: 35,
    mediaCount: 41,
    favoritesLabel: "222",
    score: 8.1,
    popularity: 6.6,
    buyerConfidence: 7.4,
    value: 8.7,
    roomFit: 8.8,
    energyComfort: 8.7,
    installRisk: 7.4,
    warrantySafety: 8.5,
    complaintRisk: 7.8,
    bestFor: "คนที่อยากได้ Midea ราคาไม่แรงและสนใจประกันคอมเพรสเซอร์ยาว",
    notFor: "คนที่ต้องการร้าน official หรืออยากได้รีวิวหลักพันก่อนตัดสินใจ",
    pros: ["ราคาเริ่มต้นดี", "ระบุ SEER หลาย BTU", "ประกันคอมเพรสเซอร์ยาว", "รีวิวให้คะแนนสูง"],
    watch: ["จำนวนรีวิวยังน้อยกว่ารุ่น CANDY/TCL", "ไม่รวมติดตั้ง", "Wi-Fi อาจต้องซื้อเพิ่มหรือต้องเลือกรุ่นอื่น"],
    reviewSignals: ["รีวิวชมว่าเย็นและเงียบ", "มีผู้ซื้อซ้ำ", "มีข้อมูล SEER ชัดในคำอธิบายสินค้า"],
    installNotes: ["หน้าสินค้าระบุไม่รวมติดตั้ง", "ควรหาช่างและยืนยันค่าอุปกรณ์ก่อนซื้อ"],
    warrantyNotes: ["คำอธิบายระบุคอมเพรสเซอร์ 10 ปี/อะไหล่ 5 ปี/ค่าแรง 5 ปี", "Shopee specs ระบุ Warranty Duration 5 Years จึงควรยืนยันซ้ำ"],
    sourceNotes: ["เก็บข้อมูลจาก Shopee วันที่ 15 มิถุนายน 2026", "ยอดขายไม่ปรากฏชัด จึงใช้รีวิวผู้ซื้อเป็นหลักในการประเมิน"],
    links: searchLinks("Midea Celest MSCE แอร์ Inverter", "https://shopee.co.th/product/338734338/57308205291"),
    updated: "2026-06-15"
  }
];

export const topAirConditionerPicks = airConditioners
  .slice()
  .sort((a, b) => b.score - a.score)
  .slice(0, 3);

export const candyAirConditioner = airConditioners.find((product) => product.slug === "candy-vpct-vpgt-series") ?? airConditioners[0];
