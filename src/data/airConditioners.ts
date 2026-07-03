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
      url: "/images/air-conditioners/candy-vpct-real-product-plain-1.jpg",
      alt: "ภาพสินค้าจริงแอร์ CANDY VPCT/VPGT จากหน้าร้าน Shopee",
      source: "/images/air-conditioners/candy-vpct-real-product-plain-1.jpg",
      note: "ภาพสินค้าจริงจากหน้าร้าน Shopee ณ วันที่เก็บข้อมูล"
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
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/candyvpct) — ห้ามแทนด้วย URL ตรง ไม่งั้นเสียค่าคอม
    links: searchLinks("CANDY VPCT VPGT แอร์อินเวอร์เตอร์", "https://s.shopee.co.th/8KncHGDn7M"),
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
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/tclsavein)
    links: searchLinks("TCL SaveIN AI Series แอร์ Full DC Inverter", "https://s.shopee.co.th/6L2XtfRyjI"),
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
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/xiaomieco)
    links: searchLinks("Xiaomi Mijia Air Inverter Eco แอร์", "https://s.shopee.co.th/9UzZfZRNTi"),
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
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/mideacelest)
    links: searchLinks("Midea Celest MSCE แอร์ Inverter", "https://s.shopee.co.th/6Aj7hUU7nt"),
    updated: "2026-06-15"
  },
  {
    slug: "daikin-ftkb-sabai-series",
    name: "Daikin FTKB Max Inverter Sabai Series",
    shortName: "Daikin FTKB Sabai",
    brand: "Daikin",
    store: "King Air (ตัวแทนตรงสยามไดกิ้นเซลล์ ตามหน้าร้าน)",
    status: "review_ready",
    statusLabel: "ขายแล้ว 10พัน+ รีวิวแน่นสุดในกลุ่ม",
    sourceUrl: "https://shopee.co.th/product/120361613/2148527960",
    image: {
      url: "/images/air-conditioners/wall-ac-installation-check.jpg",
      alt: "ภาพประกอบการเช็กงานติดตั้งแอร์ติดผนังก่อนจ่ายเงิน",
      source: "/images/air-conditioners/wall-ac-installation-check.jpg",
      note: "ภาพประกอบการเช็กงานติดตั้ง ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 12,875 บาทช่วง Flash Sale ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,200 BTU", "12,300 BTU", "15,000 BTU", "18,100 BTU", "20,500 BTU"],
    rating: 5.0,
    ratingsCount: 6200,
    commentsCount: 2100,
    mediaCount: 1300,
    favoritesLabel: "10.7k",
    score: 9.1,
    popularity: 9.8,
    buyerConfidence: 9.2,
    value: 8.8,
    roomFit: 9.0,
    energyComfort: 9.0,
    installRisk: 7.8,
    warrantySafety: 8.8,
    complaintRisk: 9.5,
    bestFor:
      "คนที่อยากได้แบรนด์ญี่ปุ่นตัวมาตรฐานที่รีวิวแน่นที่สุดในกลุ่ม (6,200+ รีวิว เห็นยอดขาย 10,000+ เครื่อง) มี BTU ให้เลือกถึง 5 ขนาด และอยากจ้างช่างใกล้บ้านติดตั้งเองเพื่อคุมงบ",
    notFor:
      "คนที่ตั้งใจกดซื้อบริการติดตั้ง 2,000 บาทแล้วคิดว่าจบ เพราะร้านเขียนเตือนเองว่า 90% ของงานมีค่าอุปกรณ์หน้างานเพิ่ม ถ้าไม่อยากลุ้นค่าใช้จ่ายควรหาช่างเหมาจ่ายก่อนสั่ง",
    pros: [
      "รีวิว 6.2 พันรายการ คะแนนเต็ม 5.0 และเห็นยอดขายจริง 10พัน+ เครื่อง",
      "มี BTU 5 ขนาดตั้งแต่ 9,200 ถึง 20,500 เลือกตรงห้องได้ง่าย",
      "แผงวงจร Super PCB Pro ทนไฟตก 150V ไฟกระชาก 450V เหมาะกับพื้นที่ไฟไม่นิ่ง",
      "รีวิวหลายรายยืนยันซื้อเครื่องอย่างเดียวแล้วจ้างช่างเอง (~2,500) ถูกกว่าซื้อพร้อมติดตั้ง"
    ],
    watch: [
      "ร้านเตือนเอง: ค่าติดตั้ง 2,000 บาทผ่านคิวช้างไม่ใช่ราคาจบ 90% มีค่าอุปกรณ์เพิ่มหน้างาน",
      "ต้องเลือกช่องชำระเงินให้ตรงวิธีจ่าย (เต็มจำนวน/ผ่อน) ไม่งั้นร้านเก็บส่วนต่างก่อนส่ง",
      "ไม่มีบริการเก็บเงินปลายทาง",
      "รุ่นปี 2025 กับ 2026 ต่างกันที่ขนาดคอยล์ร้อน เช็กปีที่ได้รับกับร้านก่อนโอน"
    ],
    reviewSignals: [
      "รีวิวย้ำซ้ำเรื่องของแท้ เย็นเร็ว และเสียงเงียบ (outdoor 40dB)",
      "หลายรายซื้อซ้ำเครื่องที่ 2-3 และชมว่าร้านส่งเองถึงมือ (Seller Own Fleet)",
      "มีรีวิวเทียบชัดว่าซื้อเครื่อง+จ้างช่างเองถูกกว่าดีลพร้อมติดตั้ง",
      "คะแนน 1 ดาวมีแค่ 5 จาก 6,200 รีวิว ต่ำผิดปกติสำหรับสินค้าปริมาณนี้"
    ],
    installNotes: [
      "ในกล่องมีท่อน้ำยา 4 เมตร แต่ไม่รวมขาแขวนและรางครอบท่อ",
      "ติดตั้งผ่าน Shopee ใช้ทีมคิวช้าง (ไม่ใช่ช่างของร้าน) ค่าใช้จ่ายเพิ่มจ่ายกับคิวช้างโดยตรง",
      "ร้านแนะนำเองว่าถ้าหาช่างใกล้บ้านแบบเหมาจ่ายได้ให้ใช้ช่างเอง"
    ],
    warrantyNotes: [
      "คอมเพรสเซอร์ 5 ปี ฟรีค่าบริการ 1 ปี / แผงวงจรคอยล์ร้อน 3 ปี / อะไหล่อื่น 1 ปี",
      "รังผึ้งคอยล์เย็นรับประกัน 5 ปี คอยล์ร้อน 1 ปี",
      "มอก. 2134-2553 (ท8832-29/62368) ตรวจได้ที่เว็บ TISI"
    ],
    sourceNotes: [
      "เก็บข้อมูลจาก Shopee วันที่ 2 กรกฎาคม 2026 เห็นยอดขายจริงบนหน้า",
      "ราคา Flash Sale เปลี่ยนได้ทุกวัน ควรกดเช็กหน้าร้านก่อนซื้อ"
    ],
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/daikinftkb)
    links: searchLinks("แอร์ Daikin FTKB Sabai Inverter", "https://s.shopee.co.th/2LWPSgU3El"),
    updated: "2026-07-02"
  },
  {
    slug: "hisense-ce-series",
    name: "Hisense CE Series Inverter",
    shortName: "Hisense CE",
    brand: "Hisense",
    store: "Hisense Official Store (Shopee Mall)",
    status: "review_ready",
    statusLabel: "ถูกสุดในกลุ่ม ประกันคอม 12 ปี",
    sourceUrl: "https://shopee.co.th/product/54473054/25171357270",
    image: {
      url: "/images/air-conditioners/wall-ac-cost-warranty.jpg",
      alt: "ภาพประกอบการเช็กราคาและประกันก่อนซื้อแอร์ติดผนัง",
      source: "/images/air-conditioners/wall-ac-cost-warranty.jpg",
      note: "ภาพประกอบการเช็กราคาและประกัน ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 8,452 บาทช่วง Flash Sale ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,500 BTU", "12,000 BTU", "18,000 BTU", "23,500 BTU"],
    rating: 4.8,
    ratingsCount: 4700,
    commentsCount: 1000,
    mediaCount: 913,
    favoritesLabel: "7.2k",
    score: 9.0,
    popularity: 9.5,
    buyerConfidence: 9.4,
    value: 9.5,
    roomFit: 8.6,
    energyComfort: 8.4,
    installRisk: 7.8,
    warrantySafety: 9.0,
    complaintRisk: 8.6,
    bestFor:
      "คนงบจำกัดที่อยากได้ inverter ราคาต่ำสุดในกลุ่มที่ยังซื้อจากร้าน official โดยตรง (Shopee Mall ผู้ติดตาม 1.8 ล้าน) พร้อมประกันคอมเพรสเซอร์ยาว 12 ปีและ onsite service",
    notFor:
      "คนที่ต้องการบานสวิงส่ายซ้าย-ขวาอัตโนมัติ เพราะรุ่นนี้ปรับได้เฉพาะขึ้น-ลง ถ้าตำแหน่งติดตั้งอยู่มุมห้องอาจกระจายลมด้านข้างได้ไม่เต็มที่",
    pros: [
      "ราคา inverter ต่ำกว่า 9,000 บาท ถูกสุดในกลุ่มที่ผ่านเกณฑ์รีวิว",
      "ซื้อตรงจาก Hisense Official Store ขายแล้ว 10พัน+ เครื่อง รีวิว 4.7 พันรายการ",
      "ประกันตัวเครื่อง 3 ปี + คอมเพรสเซอร์ 12 ปี + onsite service ศูนย์ไทย",
      "รีวิวระบุใช้บริการติดตั้งผ่านคิวช้างช่วงโปรได้ส่วนลดค่าติดตั้งถึง 50%"
    ],
    watch: [
      "บานสวิงปรับได้เฉพาะขึ้น-ลง ไม่รองรับส่ายซ้าย-ขวา",
      "คะแนน 1 ดาวมี 54 รายการ ควรกดอ่านหน้ารีวิวจริงก่อนตัดสินใจ",
      "โค้ดส่วนลดหลายใบมีขั้นต่ำและวันหมดอายุต่างกัน เช็กก่อนกดใช้",
      "ค่าอุปกรณ์ติดตั้งหน้างานเพิ่มจ่ายกับทีมช่างโดยตรง"
    ],
    reviewSignals: [
      "รีวิวชมความเย็นเร็วและความเงียบเทียบกับราคา",
      "หลายรายซื้อซ้ำและระบุว่าเคยใช้แบรนด์นี้แล้วประทับใจ",
      "รุ่น 23,500 BTU มีรีวิวชมระบบพลาสม่าฟอกอากาศ",
      "ร้านตอบแชทภายในไม่กี่นาที (อัตราตอบ 100%)"
    ],
    installNotes: [
      "กดเลือกบริการติดตั้งเพิ่มได้ตอนสั่ง ทีมคิวช้างโทรนัดล่วงหน้า",
      "รีวิวหลายรายระบุช่วงแคมเปญมีส่วนลดค่าติดตั้ง 50%",
      "ค่าอุปกรณ์เกินมาตรฐานจ่ายหน้างานกับทีมช่าง"
    ],
    warrantyNotes: [
      "ตัวเครื่อง 3 ปี คอมเพรสเซอร์ 12 ปี พร้อม onsite service",
      "ศูนย์บริการไทย โทร 02-017-0077",
      "มอก. 812-2558 (น30547-978/812) ตรวจได้ที่เว็บ TISI"
    ],
    sourceNotes: [
      "เก็บข้อมูลจาก Shopee วันที่ 2 กรกฎาคม 2026 เห็นยอดขายจริงบนหน้า",
      "ราคาหลังโค้ดขึ้นกับโค้ดที่ใช้ ควรเช็กหน้าร้านก่อนซื้อ"
    ],
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/hisensece)
    links: searchLinks("Hisense แอร์ติดผนัง CE Series Inverter", "https://s.shopee.co.th/3g1n8tmR7w"),
    updated: "2026-07-02"
  },
  {
    slug: "haier-vqec-series",
    name: "Haier VQEC Series Inverter",
    shortName: "Haier VQEC",
    brand: "Haier",
    store: "haier.officialshop",
    status: "review_ready",
    statusLabel: "ประกันคอม 10 ปี ราคาต่ำหมื่น",
    sourceUrl: "https://shopee.co.th/product/184920733/29154242468",
    image: {
      url: "/images/air-conditioners/wall-ac-condo-hero.jpg",
      alt: "ภาพประกอบแอร์ติดผนังในคอนโดสว่างสบาย",
      source: "/images/air-conditioners/wall-ac-condo-hero.jpg",
      note: "ภาพประกอบการเลือกแอร์ติดผนัง ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 9,545 บาทหลังโค้ดร้าน ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,000 BTU", "12,000 BTU", "18,000 BTU", "24,000 BTU"],
    rating: 4.9,
    ratingsCount: 3000,
    commentsCount: 678,
    mediaCount: 614,
    favoritesLabel: "3.6k",
    score: 8.9,
    popularity: 9.2,
    buyerConfidence: 9.3,
    value: 9.3,
    roomFit: 8.6,
    energyComfort: 8.8,
    installRisk: 7.6,
    warrantySafety: 8.8,
    complaintRisk: 8.8,
    bestFor:
      "คนที่อยากได้ inverter ราคาต่ำหมื่นจากร้าน official ใหญ่ (ผู้ติดตาม 836k) ที่แจ้งค่า SEER ชัดทุกขนาด (18.08-18.97) และให้ประกันคอมเพรสเซอร์ยาว 10 ปี",
    notFor:
      "คนที่จะให้ช่างมือใหม่ติดตั้ง เพราะในกล่องไม่มีขาแขวนคอยล์ร้อน และเงื่อนไขเคลมเข้มงวด ต้องถ่ายวิดีโอตอนแกะกล่องแบบต่อเนื่องไม่ตัดต่อจึงจะเคลมกรณีขนส่งได้",
    pros: [
      "ราคาหลังโค้ดต่ำหมื่นพร้อมรีวิว 3 พันรายการ ขายแล้ว 8พัน+ เครื่อง",
      "แจ้งค่า SEER รายขนาดบนหน้าสินค้า (9K=18.29, 12K=18.97, 18K=18.73, 24K=18.08) โปร่งใสกว่าร้านส่วนใหญ่",
      "ประกันตัวเครื่อง 5 ปี คอมเพรสเซอร์ 10 ปี",
      "โหมด Self-Cleaning ล้างคอยล์เย็นอัตโนมัติ และ Eco Mode ลดการใช้ไฟ 20-60%"
    ],
    watch: [
      "ในกล่องไม่มีขาแขวนแอร์ ต้องเตรียมหรือซื้อเพิ่มหน้างาน",
      "เคลมกรณีขนส่งต้องมีวิดีโอตอนแกะกล่องแบบถ่ายต่อเนื่องเท่านั้น",
      "มีรีวิวระบุคอมเพรสเซอร์รุ่น 18,000 BTU ตัวใหญ่และเสียงดังกว่าที่คาด",
      "ท่อคอยล์ร้อนเป็นอลูมิเนียม (คอยล์เย็นทองแดง) ถามร้านเรื่องการดูแลระยะยาว"
    ],
    reviewSignals: [
      "รีวิวชมว่าเย็นเร็วและราคาช่วงแคมเปญถูกกว่าหน้าร้าน",
      "หลายบ้านใช้หลายเครื่องและกลับมาซื้อซ้ำ",
      "ร้านตอบกลับรีวิวทุกใบ อัตราตอบแชท 100%",
      "เคสจริง: 18,000 BTU กับห้อง 25 ตร.ม. เปิด 25 องศาเย็นทั่วถึง"
    ],
    installNotes: [
      "ซื้อแบบรวมติดตั้ง ทีมคิวช้างจะ SMS นัดวันติดตั้งแยกหลังของถึง",
      "สถานที่ส่งของกับสถานที่ติดตั้งต้องเป็นที่เดียวกัน",
      "ค่าอุปกรณ์เพิ่ม เช่น รางครอบท่อ ขาแขวน จ่ายกับคิวช้างโดยตรง"
    ],
    warrantyNotes: [
      "ตัวเครื่อง 5 ปี คอมเพรสเซอร์ 10 ปี ประกันของโรงงาน",
      "ศูนย์บริการทั่วประเทศ โทร 1789 (8.30-17.30 น.)",
      "มอก. 2134-2553 ตรวจได้ที่เว็บ TISI"
    ],
    sourceNotes: [
      "เก็บข้อมูลจาก Shopee วันที่ 2 กรกฎาคม 2026 เห็นยอดขายจริงบนหน้า",
      "ราคาหลังโค้ดลด 2,000 บาท ขึ้นกับแคมเปญ ควรเช็กหน้าร้านก่อนซื้อ"
    ],
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/haiervqec)
    links: searchLinks("แอร์ Haier VQEC Inverter", "https://s.shopee.co.th/LlLAiiBoB"),
    updated: "2026-07-02"
  },
  {
    slug: "mitsubishi-msy-ka-vf-series",
    name: "Mitsubishi Electric MSY-KA VF (Happy Inverter)",
    shortName: "Mitsubishi KA",
    brand: "Mitsubishi Electric",
    store: "ศาลา อีเล็คโทรนิคส์ พลาซ่า (Shopee Mall)",
    status: "review_ready",
    statusLabel: "แบรนด์ญี่ปุ่นยอดฮิต เสียงเงียบ",
    sourceUrl: "https://shopee.co.th/product/141005876/23280824297",
    image: {
      url: "/images/air-conditioners/wall-ac-btu-bedroom.jpg",
      alt: "ภาพประกอบการเลือก BTU แอร์สำหรับห้องนอน",
      source: "/images/air-conditioners/wall-ac-btu-bedroom.jpg",
      note: "ภาพประกอบการเลือกแอร์ห้องนอน ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 14,668 บาทช่วง Flash Sale ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,200 BTU", "12,200 BTU", "18,000 BTU"],
    rating: 4.8,
    ratingsCount: 838,
    commentsCount: 157,
    mediaCount: 170,
    favoritesLabel: "4.2k",
    score: 8.5,
    popularity: 8.6,
    buyerConfidence: 8.8,
    value: 8.2,
    roomFit: 8.2,
    energyComfort: 8.8,
    installRisk: 7.4,
    warrantySafety: 8.2,
    complaintRisk: 8.4,
    bestFor:
      "คนที่อยากได้ Mitsubishi Electric แท้รุ่น Happy Inverter สำหรับห้องนอน เพราะจุดที่รีวิวชมซ้ำมากที่สุดคือความเงียบ พร้อมแผ่นกรอง PM2.5 และ Dual Barrier Coating",
    notFor:
      "คนที่คิดว่าราคาเครื่องรวมค่าติดตั้งแล้ว เพราะรีวิวหลายรายเข้าใจผิดจุดนี้ การติดตั้งเป็นบริการเสริมที่ต้องกดซื้อเพิ่มและมีค่าใช้จ่ายหน้างานอีกชั้น",
    pros: [
      "ธีมรีวิวที่ชัดที่สุดคือเสียงเงียบมาก เหมาะห้องนอนและเด็กเล็ก",
      "ซื้อจากร้าน Shopee Mall คะแนนร้าน 46k ขายแล้ว 2พัน+ เครื่อง",
      "Fast Cool เร่งความเย็นเต็มกำลัง 15 นาที + แผ่นกรอง PM2.5",
      "Dual Barrier Coating ลดฝุ่นและคราบน้ำมันเกาะภายในเครื่อง"
    ],
    watch: [
      "รีวิวหลายรายเข้าใจผิดว่าราคารวมติดตั้ง — ติดตั้งต้องกดซื้อเพิ่ม",
      "จะผ่อน 0% หรือใช้ SPayLater ต้องเลือกช่องชำระเงินเฉพาะ ห้ามกดเต็มจำนวน/ปลายทาง",
      "ราคาต่อ BTU สูงกว่าแบรนด์จีนราว 30-50% แลกกับแบรนด์และความเงียบ",
      "มีตัวเลือก 3 ขนาด ถ้าต้องการ 24,000 BTU ต้องดูซีรีส์อื่น"
    ],
    reviewSignals: [
      "รีวิวย้ำซ้ำเรื่องเสียงเงียบและเหมาะห้องนอนมากที่สุดในบรรดารุ่นที่เก็บข้อมูล",
      "เคสจริง: ซื้อช่วง 4.4 ได้ราคา 13,000 ต้น ๆ พร้อมโค้ดส่วนลด",
      "หลายรายชมว่าระบบอินเวอร์เตอร์ประหยัดไฟและเย็นเร็ว",
      "มีรีวิวติดตั้งเองและใช้ช่างนอกเพื่อประหยัดค่าใช้จ่าย"
    ],
    installNotes: [
      "การติดตั้งเป็นบริการเสริม กดเลือกเพิ่มตอนสั่งซื้อ",
      "ค่าอุปกรณ์เกินมาตรฐานประเมินหน้างานโดยทีมช่าง",
      "ก่อนโอนควรถามร้านเรื่องคิวช่างและของแถมท่อน้ำยาให้ชัด"
    ],
    warrantyNotes: [
      "ประกันของโรงงาน 5 ปี (สเปกหน้า Shopee)",
      "มอก. 1529-2561 (ท5850-2081/2134) ตรวจได้ที่เว็บ TISI",
      "เก็บใบเสร็จและเลขเครื่องไว้เคลมผ่านศูนย์ Mitsubishi Electric"
    ],
    sourceNotes: [
      "เก็บข้อมูลจาก Shopee วันที่ 2 กรกฎาคม 2026 เห็นยอดขายจริงบนหน้า",
      "ตลาด Mitsubishi บน Shopee อยู่ที่ซีรีส์ KA (Happy Inverter) เป็นหลัก"
    ],
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/mitsukavf)
    links: searchLinks("แอร์ Mitsubishi Happy Inverter MSY-KA", "https://s.shopee.co.th/7AbfDRSYz6"),
    updated: "2026-07-02"
  },
  {
    slug: "panasonic-cs-cu-yu9zkt",
    name: "Panasonic YU-ZKT (Standard Inverter YU Series)",
    shortName: "Panasonic YU-ZKT",
    brand: "Panasonic",
    store: "Panasonic official store",
    status: "review_ready",
    statusLabel: "ร้าน official แจ้งค่าติดตั้งชัดสุด",
    sourceUrl: "https://shopee.co.th/product/315769706/25912587679",
    image: {
      url: "/images/air-conditioners/panasonic-yu9zkt-hero-room.jpg",
      alt: "ภาพประกอบแอร์ Panasonic YU-ZKT ในห้องนั่งเล่นโทนสว่าง",
      source: "/images/air-conditioners/panasonic-yu9zkt-hero-room.jpg",
      note: "ภาพประกอบบรรยากาศการใช้งาน ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 12,750 บาทช่วง Flash Sale ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,000 BTU", "13,000 BTU", "18,000 BTU", "24,000 BTU"],
    rating: 4.9,
    ratingsCount: 118,
    commentsCount: 28,
    mediaCount: 23,
    favoritesLabel: "1.3k",
    score: 8.3,
    popularity: 7.8,
    buyerConfidence: 9.0,
    value: 8.2,
    roomFit: 8.4,
    energyComfort: 8.4,
    installRisk: 7.8,
    warrantySafety: 8.4,
    complaintRisk: 8.6,
    bestFor:
      "คนที่อยากซื้อตรงจากร้าน Panasonic official (ผู้ติดตาม 107.5k) และอยากรู้ค่าใช้จ่ายติดตั้งล่วงหน้า เพราะหน้าสินค้าแจกแจงราคาอุปกรณ์เพิ่มทุกรายการชัดที่สุดในกลุ่ม พร้อม Gear Mode เลือกจำกัดการใช้ไฟ 50/75/100%",
    notFor:
      "คนที่คาดหวังงานประกอบระดับพรีเมียมญี่ปุ่นเต็มขั้น เพราะมีรีวิวเชิงลบที่คนกดว่ามีประโยชน์มากที่สุดระบุว่าวัสดุงานประกอบดูลดต้นทุนและผลิตในจีน",
    pros: [
      "ร้าน official โดยตรง ขายแล้ว 267 เครื่อง (เห็นยอดจริง) คะแนน 4.9",
      "หน้าสินค้าแจกแจงค่าติดตั้งมาตรฐานทุกรายการ เช่น รางครอบท่อ 350/ม. ขาแขวน 600-1,300",
      "Gear Mode คุมเพดานการใช้ไฟได้เอง + i-Clean ลดเชื้อราในเครื่อง",
      "ติดตั้งผ่านคิวช้าง รีวิวชมงานเนี้ยบและมาตามนัด"
    ],
    watch: [
      "รีวิวเชิงลบยอดนิยม (49 คนว่ามีประโยชน์): วัสดุดูลดต้นทุน ไม่สมราคาแบรนด์ญี่ปุ่น",
      "เคสจริงติด 2 เครื่อง: ค่าติดตั้ง+อุปกรณ์หน้างานรวม 13,300 บาท เกือบเท่าค่าเครื่องอีกตัว",
      "จำนวนรีวิว (118) น้อยกว่าคู่แข่งราคาใกล้กันมาก เทียบ pattern ได้จำกัด",
      "ค่าอุปกรณ์เกินมาตรฐานแพง เช่น ท่อน้ำยาเกินเมตรละ 530-1,190 บาท"
    ],
    reviewSignals: [
      "รีวิวชมเย็นเร็ว เสียงเงียบ ส่งไวแพ็คดี",
      "การติดตั้งผ่านคิวช้างได้รับคำชมเรื่องงานเรียบร้อย",
      "มีเคสค่าใช้จ่ายหน้างานสูงจนคนรีวิวแนะนำให้เทียบช่างนอก",
      "ซื้อช่วงแคมเปญ 4.4 ได้ราคาคุ้มกว่าปกติ"
    ],
    installNotes: [
      "ของฟรีมาตรฐาน: เบรกเกอร์+ฝาครอบ ยางรองคอยล์ร้อน ท่อน้ำทิ้ง 4 ม. สายดิน 4 ม.",
      "ค่ารื้อเครื่องเก่า 700 บาท/เครื่อง รางครอบท่อ 350 บาท/ม. ขาแขวน 600-1,300 บาท",
      "งานสูงเกิน 3 เมตรลูกค้าต้องจัดนั่งร้านเอง — เผื่องบถ้าติดชั้นลอย"
    ],
    warrantyNotes: [
      "ประกันผู้ผลิต 5 ปี",
      "มอก. 1529-2561 ตรวจได้ที่เว็บ TISI",
      "เคลมผ่านศูนย์ Panasonic หรือร้าน official ได้โดยตรง"
    ],
    sourceNotes: [
      "เก็บข้อมูลจาก Shopee วันที่ 2 กรกฎาคม 2026 เห็นยอดขายจริงบนหน้า",
      "ตารางค่าติดตั้งบนหน้าเป็นของร้าน official ใช้อ้างอิงประเมินงบได้"
    ],
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/panayuzkt)
    links: searchLinks("แอร์ Panasonic YU-ZKT Inverter", "https://s.shopee.co.th/5fmrQjARba"),
    updated: "2026-07-02"
  },
  {
    slug: "panasonic-cs-cu-yn9ykt",
    name: "Panasonic YN-YKT (Eco Non-Inverter YN Series)",
    shortName: "Panasonic YN-YKT",
    brand: "Panasonic",
    store: "Panasonic official store",
    status: "review_ready",
    statusLabel: "ตัวธรรมดาจากร้าน official — ไม่ใช่ inverter",
    sourceUrl: "https://shopee.co.th/product/315769706/22741284722",
    image: {
      url: "/images/air-conditioners/panasonic-yn9ykt-hero-room.jpg",
      alt: "ภาพประกอบแอร์ Panasonic YN-YKT ในห้องนอนโทนอบอุ่น",
      source: "/images/air-conditioners/panasonic-yn9ykt-hero-room.jpg",
      note: "ภาพประกอบบรรยากาศการใช้งาน ไม่ใช่ภาพสินค้าจริงจากร้าน"
    },
    priceLabel: "พบราคาประมาณ 12,750 บาทช่วง Flash Sale ณ วันที่เก็บข้อมูล",
    btuOptions: ["9,000 BTU", "12,000 BTU", "18,000 BTU", "24,000 BTU"],
    rating: 4.9,
    ratingsCount: 176,
    commentsCount: 45,
    mediaCount: 35,
    favoritesLabel: "1.8k",
    score: 8.0,
    popularity: 8.0,
    buyerConfidence: 9.0,
    value: 7.6,
    roomFit: 8.2,
    energyComfort: 6.8,
    installRisk: 7.8,
    warrantySafety: 8.2,
    complaintRisk: 8.8,
    bestFor:
      "คนที่ตั้งใจเลือกแอร์ระบบธรรมดา (Non-Inverter) เพราะเปิดใช้เป็นช่วงสั้น ๆ หรืออยากได้เครื่องที่โครงสร้างเรียบง่าย ซ่อมง่าย พร้อม Follow Me Sensor วัดอุณหภูมิจากรีโมท",
    notFor:
      "คนที่กำลังหา inverter ประหยัดไฟ — ชื่อลิสติ้งเขียนว่า 'แอร์ประหยัดไฟ' แต่ตัวเครื่องเป็น Eco Non-Inverter ถ้าเปิดยาวทั้งคืนทุกวัน ค่าไฟจะสูงกว่ารุ่น inverter ราคาใกล้กันชัดเจน",
    pros: [
      "ซื้อตรงจากร้าน Panasonic official ขายแล้ว 428 เครื่อง (เห็นยอดจริง)",
      "คะแนน 1-2 ดาวรวมแค่ 1 รายการจาก 176 รีวิว",
      "Follow Me Sensor วัดอุณหภูมิที่ตัวเรา ไม่ใช่ที่ตัวเครื่อง",
      "Golden Coating เคลือบคอยล์กันกัดกร่อน ยืดอายุการใช้งาน"
    ],
    watch: [
      "สำคัญที่สุด: เป็น Non-Inverter แม้ชื่อลิสติ้งจะเขียนว่าประหยัดไฟ — เช็กให้ชัวร์ก่อนกด",
      "ราคาใกล้เคียงรุ่น inverter ของแบรนด์อื่น เทียบค่าไฟระยะยาวก่อนตัดสินใจ",
      "ตารางค่าอุปกรณ์ติดตั้งเพิ่มชุดเดียวกับ YU-ZKT เผื่องบหน้างาน",
      "ถ้าเปิดต่อเนื่องวันละหลายชั่วโมง inverter จะคืนส่วนต่างราคาผ่านค่าไฟ"
    ],
    reviewSignals: [
      "รีวิวชมการแพ็คสินค้า ส่งเร็ว และดีลช่างผ่านคิวช้างสะดวก",
      "มีเคสได้โค้ดส่วนลดจนถูกกว่าที่ช่างคาด และติดตั้งเองได้เพราะอุปกรณ์ครบ",
      "ผู้ซื้อหลายรายซื้อเป็นเครื่องที่สองของบ้าน",
      "ความไม่พอใจน้อยมากในกลุ่มรีวิวที่เก็บ"
    ],
    installNotes: [
      "เงื่อนไขและราคาอุปกรณ์ติดตั้งเพิ่มชุดเดียวกับ YU-ZKT (รื้อเครื่องเก่า 700, รางครอบท่อ 350/ม.)",
      "นัดติดตั้งผ่านแอปหลังยืนยันคำสั่งซื้อ",
      "งานสูงเกิน 3 เมตรต้องจัดนั่งร้านเอง"
    ],
    warrantyNotes: [
      "ประกันจากผู้ผลิต Panasonic",
      "มอก. 1529-2561 ตรวจได้ที่เว็บ TISI",
      "เก็บใบเสร็จและเลขเครื่องไว้ให้ครบ"
    ],
    sourceNotes: [
      "เก็บข้อมูลจาก Shopee วันที่ 2 กรกฎาคม 2026 เห็นยอดขายจริงบนหน้า",
      "จุดที่ต้องสื่อสารชัด: ลิสติ้งใช้คำว่าประหยัดไฟกับเครื่อง Non-Inverter"
    ],
    // ลิงก์ affiliate (สร้าง 2026-07-02, sub_id: friendsay/panaynykt)
    links: searchLinks("แอร์ Panasonic YN-YKT", "https://s.shopee.co.th/8pjtCabw1f"),
    updated: "2026-07-02"
  }
];

export const topAirConditionerPicks = airConditioners
  .slice()
  .sort((a, b) => b.score - a.score)
  .slice(0, 3);

export const candyAirConditioner = airConditioners.find((product) => product.slug === "candy-vpct-vpgt-series") ?? airConditioners[0];
