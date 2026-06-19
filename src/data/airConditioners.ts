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
  status: "review_ready" | "candidate" | "needs_manual_check";
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
    status: "review_ready",
    statusLabel: "รีวิวแน่น ควรเทียบ",
    sourceUrl: "https://shopee.co.th/product/184920733/26853787935",
    image: {
      url: "/images/air-conditioners/wall-ac-condo-hero.jpg",
      alt: "ภาพประกอบแอร์ติดผนังในคอนโดสว่างสบาย",
      source: "/images/air-conditioners/wall-ac-condo-hero.jpg",
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
    status: "review_ready",
    statusLabel: "รีวิวแน่น ควรเทียบ",
    sourceUrl: "https://shopee.co.th/product/1025131800/23777230236",
    image: {
      url: "/images/air-conditioners/tcl-savein-ai-product-set.jpg",
      alt: "ภาพ TCL SaveIN AI Series พร้อมชุดคอยล์ร้อน รีโมต และอุปกรณ์ติดตั้ง",
      source: "/images/air-conditioners/tcl-savein-ai-product-set.jpg",
      note: "ภาพชุดสินค้าและอุปกรณ์สำหรับรีวิว TCL SaveIN AI Series"
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
    bestFor:
      "คนที่อยากได้แอร์ Full DC Inverter จากแบรนด์ใหญ่ มี BTU ให้เลือกกว้าง และอยากเริ่มจากรุ่นที่มีรีวิวผู้ซื้อให้เช็กทั้งเรื่องความเย็น เสียง และงานติดตั้ง",
    notFor:
      "คนที่อยากกดซื้อแบบไม่ถามร้านก่อน เพราะรุ่นนี้มีหลายขนาดและงานติดตั้งมีรายละเอียดเยอะ ถ้าไม่เช็ก BTU คิวช่าง และค่าอุปกรณ์เพิ่ม อาจไม่ได้ราคาจบอย่างที่คิด",
    pros: [
      "มีรีวิวผู้ซื้อจำนวนมากให้ไล่อ่านก่อนจ่ายจริง",
      "BTU กว้างตั้งแต่ 9,200 ถึง 24,200 เหมาะกับการเทียบหลายขนาดห้อง",
      "จุดขาย Full DC Inverter / AI / ทำความสะอาดตัวเองช่วยให้เทียบกับรุ่นคุ้มค่าได้ดี",
      "ร้านเป็น TCL Authorized Store และมีข้อมูลประกันให้ถามต่อได้เป็นเรื่องเป็นราว"
    ],
    watch: [
      "ต้องเลือก BTU ให้ตรงห้องจริง โดยเฉพาะห้องแดดแรงหรือห้องเปิดโล่ง",
      "ต้องถามว่าราคานี้รวมติดตั้งแบบไหน รวมท่อ ราง ขาแขวน และสายไฟกี่เมตร",
      "รุ่นใหญ่ 18,100/24,200 BTU ต้องเช็กไฟ จุดวางคอยล์ร้อน และหน้างานก่อนซื้อ",
      "ถ้าอยู่คอนโด ต้องถามเรื่องเอกสารนิติ จุดเจาะผนัง และการวางท่อน้ำทิ้ง",
      "ประกันคอมเพรสเซอร์/อะไหล่ควรถามขั้นตอนลงทะเบียนและเอกสารที่ต้องเก็บ"
    ],
    reviewSignals: [
      "หลายรีวิวพูดถึงความเย็นและความคุ้มเมื่อเลือก BTU ถูก",
      "มีประเด็นเรื่องงานติดตั้งและการนัดช่างที่ควรถามก่อนจ่าย",
      "ห้องนอนควรอ่านรีวิวมีวิดีโอเรื่องเสียงลมและเสียงคอยล์ร้อน",
      "ควรเก็บหลักฐานรับของ แกะกล่อง และเลขเครื่องไว้ตั้งแต่วันแรก"
    ],
    installNotes: [
      "มี Add-on Installation Service/Q-CHANG ให้เช็ก แต่ควรถามพื้นที่บริการและวันช่างก่อนจ่าย",
      "ถามให้ครบว่ารวมท่อทองแดง รางครอบท่อ ขาแขวน สายไฟ ท่อน้ำทิ้ง และงานเจาะกี่เมตร",
      "คอนโดควรยืนยันจุดเจาะ จุดวางคอยล์ร้อน เอกสารนิติ และช่วงเวลาที่ช่างเข้าได้",
      "ถ้าหน้างานซับซ้อน ให้ขอราคาประเมินเพิ่มเป็นข้อความก่อนกดซื้อ"
    ],
    warrantyNotes: [
      "หน้าสินค้าระบุคอมเพรสเซอร์ 5 ปี/อะไหล่ 1 ปี",
      "ควรถามว่าต้องลงทะเบียนผ่าน TCL เองหรือร้านช่วยดำเนินการ",
      "เก็บใบเสร็จ หลักฐานแชท เลข serial และภาพตอนรับของไว้ให้ครบ"
    ],
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
    status: "review_ready",
    statusLabel: "รีวิวดี ควรเทียบต่อ",
    sourceUrl: "https://shopee.co.th/product/389528981/49105546219",
    image: {
      url: "/images/air-conditioners/xiaomi-mijia-product-set.jpg",
      alt: "ภาพประกอบ Xiaomi Mijia Air Inverter Eco พร้อมชุดอุปกรณ์",
      source: "/images/air-conditioners/xiaomi-mijia-product-set.jpg",
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
    status: "review_ready",
    statusLabel: "ราคาเริ่มดี ประกันเด่น",
    sourceUrl: "https://shopee.co.th/product/338734338/57308205291",
    image: {
      url: "/images/air-conditioners/midea-celest-product-set.jpg",
      alt: "ภาพประกอบ Midea Celest MSCE พร้อมชุดอุปกรณ์แอร์",
      source: "/images/air-conditioners/midea-celest-product-set.jpg",
      note: "ภาพชุดสินค้าและอุปกรณ์สำหรับรีวิว Midea Celest MSCE"
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
    bestFor:
      "คนที่อยากได้แอร์ Midea ราคาเริ่มไม่แรง มี BTU ให้เลือกกว้างตั้งแต่ห้องนอนเล็กถึงห้องใหญ่ และยอมถามค่าติดตั้งกับเงื่อนไขประกันให้จบก่อนจ่าย",
    notFor:
      "คนที่อยากซื้อจากร้าน official โดยตรง ต้องการแพ็กเกจรวมติดตั้งในตัว หรืออยากได้รุ่นที่มีรีวิวหลักพันให้เทียบเยอะกว่านี้ก่อนตัดสินใจ",
    pros: [
      "ราคาเริ่มต้นดูดีเมื่อเทียบกับ BTU ที่มีให้เลือก",
      "มี 9,360 / 12,000 / 18,000 / 24,000 BTU ครอบคลุมหลายขนาดห้อง",
      "จุดขายเรื่องประกันน่าสนใจ เหมาะกับคนที่ให้ความสำคัญกับความสบายใจหลังซื้อ",
      "มีข้อมูล SEER และสเปกหลายขนาด ช่วยให้เทียบกับรุ่นอื่นได้เป็นระบบ",
      "คะแนนรีวิวสูง เหมาะใช้เป็นรุ่นเปรียบเทียบสำหรับคนคุมงบ"
    ],
    watch: [
      "หน้าสินค้าระบุไม่รวมติดตั้ง ต้องบวกค่าช่างและอุปกรณ์หน้างานเอง",
      "จำนวนรีวิวยังน้อยกว่ารุ่นยอดนิยมอย่าง CANDY, TCL และ Xiaomi จึงควรอ่านรีวิวมีภาพให้ละเอียด",
      "ร้านเป็น reseller ไม่ใช่ official store โดยตรง ควรถามใบเสร็จ ช่องทางเคลม และผู้รับผิดชอบหลังติดตั้ง",
      "Wi-Fi อาจไม่ใช่ฟีเจอร์มาตรฐานของตัวเลือกนี้ ถ้าอยากคุมผ่านมือถือควรถามร้านก่อน",
      "รายละเอียดประกันมีหลายส่วน ต้องถามให้ชัดว่าคอมเพรสเซอร์ อะไหล่ และค่าแรงครอบคลุมกี่ปีจริง"
    ],
    reviewSignals: [
      "ใช้ราคา Midea รุ่นนี้เป็นตัวเทียบ แต่ต้องเทียบราคาจบรวมช่าง",
      "เลือก BTU จากขนาดห้องจริง ไม่ใช่เลือกตามราคาที่ใกล้กัน",
      "ขอรายละเอียดค่าติดตั้ง ท่อ ราง ขาแขวน และสายไฟเป็นข้อความก่อนซื้อ",
      "ถามเงื่อนไขประกันและช่องทางเคลมให้ชัด เพราะเป็นจุดขายสำคัญของรุ่นนี้",
      "ถ้าต้องการ Wi-Fi ให้ยืนยันกับร้านก่อนว่ารุ่นที่เลือกใช้งานได้จริงหรือไม่",
      "เก็บแชท ใบเสร็จ และเลขเครื่องไว้หลังติดตั้ง เผื่อใช้ตอนเคลม"
    ],
    installNotes: [
      "หน้าสินค้าระบุไม่รวมติดตั้ง จึงควรหาช่างหรือถามร้านว่ามีช่างแนะนำหรือไม่",
      "ให้ช่างประเมินระยะท่อ รางครอบท่อ ขาแขวน สายไฟ ท่อน้ำทิ้ง และงานเจาะก่อนสรุปราคา",
      "ห้องคอนโดควรถามนิติเรื่องจุดวางคอยล์ร้อน เอกสารช่าง และแนวท่อน้ำทิ้งก่อนนัดติดตั้ง"
    ],
    warrantyNotes: [
      "คำอธิบายสินค้าพูดถึงประกันคอมเพรสเซอร์/อะไหล่/ค่าแรงหลายช่วงเวลา ควรถามให้ร้านยืนยันเป็นข้อความ",
      "ถามว่าเคลมผ่าน Midea ร้าน หรือศูนย์บริการช่องทางไหน และต้องใช้ใบเสร็จหรือเลขเครื่องอะไรบ้าง",
      "เก็บใบเสร็จ เลขเครื่อง กล่องสินค้า รูปตอนติดตั้ง และแชทร้านไว้ให้ครบหลังซื้อ"
    ],
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
