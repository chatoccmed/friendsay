export type LegacyProduct = {
  id: number;
  slug: string;
  title: string;
  productName: string;
  brand: string;
  category: string;
  subcategory?: string;
  oldUrl: string;
  preservedPath: string;
  oldImageUrl: string;
  oldPrice: number;
  oldRegularPrice: number;
  reviewAngle: string;
  bestFor: string;
  verifyList: string[];
  rewritePriority: "สูง" | "กลาง";
};

export const legacyProducts: LegacyProduct[] = [
  {
    id: 990,
    slug: "waterheater-haier-ei35m",
    title: "รีวิว เครื่องทำน้ำอุ่น EI35M : เครื่องทำน้ำอุ่นฟังก์ชันครบ คุณภาพเกินราคา",
    productName: "Haier EI35M",
    brand: "Haier",
    category: "เครื่องทำน้ำอุ่น",
    oldUrl: "https://www.friendsay.com/product/waterheater-haier-ei35m/",
    preservedPath: "/product/waterheater-haier-ei35m/",
    oldImageUrl: "/images/legacy/fe4f7aaf0f596eea1b4c96c8c382fc38.jpg",
    oldPrice: 1490,
    oldRegularPrice: 2000,
    reviewAngle: "รุ่นเริ่มต้นที่ควรตรวจความคุ้มค่า ความปลอดภัย และความนิ่งของอุณหภูมิน้ำใหม่อีกครั้ง",
    bestFor: "คนที่อยากได้เครื่องทำน้ำอุ่นราคาประหยัดสำหรับคอนโดหรือห้องน้ำขนาดเล็ก",
    verifyList: ["ELCB/ระบบตัดไฟ", "แรงดันน้ำขั้นต่ำ", "ความร้อนจริงเมื่อเปิดน้ำต่อเนื่อง", "เสียงและความแน่นของตัวเครื่อง"],
    rewritePriority: "สูง"
  },
  {
    id: 1078,
    slug: "waterheater-haier-ei45m",
    title: "รีวิว เครื่องทำน้ำอุ่น Haier EI45M : เครื่องทำน้ำอุ่นไฟแรง ฟังก์ชันครบ ราคาสบายกระเป๋า",
    productName: "Haier EI45M",
    brand: "Haier",
    category: "เครื่องทำน้ำอุ่น",
    oldUrl: "https://www.friendsay.com/product/waterheater-haier-ei45m/",
    preservedPath: "/product/waterheater-haier-ei45m/",
    oldImageUrl: "/images/legacy/haier-ei45m-water-heater.webp",
    oldPrice: 2090,
    oldRegularPrice: 2390,
    reviewAngle: "รุ่นกำลังไฟสูงกว่า EI35M เหมาะทำบทเทียบคู่เพื่อให้คนเข้าใจว่าควรเพิ่มเงินหรือไม่",
    bestFor: "บ้านที่ต้องการน้ำอุ่นแรงขึ้นและมีงบเพิ่มจากรุ่นเริ่มต้น",
    verifyList: ["ความร้อนเมื่อแรงดันน้ำเปลี่ยน", "ความคุ้มค่ากับส่วนต่างราคา", "การติดตั้งจริง", "คะแนนรีวิวล่าสุดจากร้านค้า"],
    rewritePriority: "สูง"
  },
  {
    id: 1172,
    slug: "pulse-oximeter-choicemmed-md300c29",
    title: "รีวิว เครื่องวัดออกซิเจนปลายนิ้ว ChoiceMMed MD300C29 : ของต้องมี ติดบ้านไว้ อุ่นใจกว่าเยอะ",
    productName: "ChoiceMMed MD300C29",
    brand: "ChoiceMMed",
    category: "อุปกรณ์ทางการแพทย์",
    subcategory: "เครื่องวัดออกซิเจนปลายนิ้ว",
    oldUrl: "https://www.friendsay.com/product/pulse-oximeter-choicemmed-md300c29/",
    preservedPath: "/product/pulse-oximeter-choicemmed-md300c29/",
    oldImageUrl: "/images/legacy/S__71721030_0.jpg",
    oldPrice: 490,
    oldRegularPrice: 990,
    reviewAngle: "ควรรีไรต์อย่างระมัดระวัง เพราะเกี่ยวกับสุขภาพ ต้องแยกข้อมูลใช้งานทั่วไปออกจากคำแนะนำทางการแพทย์",
    bestFor: "บ้านที่ต้องการอุปกรณ์วัดค่าเบื้องต้นและเข้าใจข้อจำกัดของเครื่องวัดปลายนิ้ว",
    verifyList: ["ความสม่ำเสมอของค่า SpO2", "ความเร็วในการอ่านค่า", "คำเตือนด้านการแพทย์", "มาตรฐาน/การรับประกัน"],
    rewritePriority: "สูง"
  },
  {
    id: 1080,
    slug: "waterheater-rinnai-eco-3500-4500",
    title: "รีวิว Rinnai ECO 3500, 4500 : เครื่องทำน้ำอุ่นมินิมอล สไตล์ญี่ปุ่น อุ่นไว คุ้มราคา",
    productName: "Rinnai ECO 3500 / 4500",
    brand: "Rinnai",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Rinnai",
    oldUrl: "https://www.friendsay.com/product/waterheater-rinnai-eco-3500-4500/",
    preservedPath: "/product/waterheater-rinnai-eco-3500-4500/",
    oldImageUrl: "/images/legacy/S__71581742.jpg",
    oldPrice: 1790,
    oldRegularPrice: 3590,
    reviewAngle: "เหมาะทำเป็นรีวิวเทียบรุ่น 3500W กับ 4500W พร้อมคำแนะนำเลือกตามบ้าน/คอนโด",
    bestFor: "คนที่ชอบดีไซน์เรียบและอยากได้แบรนด์ที่ดูเชื่อถือได้ในงบกลาง",
    verifyList: ["ความต่าง 3500W/4500W", "ความเสถียรของอุณหภูมิ", "งานประกอบ", "การรับประกันและศูนย์บริการ"],
    rewritePriority: "สูง"
  },
  {
    id: 1163,
    slug: "waterheater-haier-b1wo",
    title: "รีวิว เครื่องทำน้ำอุ่น Haier B1WO : เครื่องเล็ก สเปคแรง ดีไซน์มินิมอล ราคาเบาเว่อร์",
    productName: "Haier B1WO",
    brand: "Haier",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Haier",
    oldUrl: "https://www.friendsay.com/product/waterheater-haier-b1wo/",
    preservedPath: "/product/waterheater-haier-b1wo/",
    oldImageUrl: "/images/legacy/S__71721011_0.jpg",
    oldPrice: 1790,
    oldRegularPrice: 3990,
    reviewAngle: "ควรตรวจว่าคำว่าเครื่องเล็กแต่สเปคแรงยังจริงไหมเมื่อเทียบกับราคาและคู่แข่งปัจจุบัน",
    bestFor: "คนที่ต้องการเครื่องหน้าตาเรียบ วางกับห้องน้ำมินิมอล และไม่อยากจ่ายแพง",
    verifyList: ["ขนาดจริง", "กำลังไฟ", "ความง่ายในการติดตั้ง", "รีวิวเรื่องความทนทาน"],
    rewritePriority: "กลาง"
  },
  {
    id: 1166,
    slug: "waterheater-icic6500",
    title: "รีวิว เครื่องทำน้ำอุ่น ICIC 6500 W : ร้อนจัดเต็ม ไฟแรง ดีไซน์มินิมอล ราคาถูกที่สุดในรุ่น !!",
    productName: "ICIC 6500W",
    brand: "ICIC",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Haier",
    oldUrl: "https://www.friendsay.com/product/waterheater-icic6500/",
    preservedPath: "/product/waterheater-icic6500/",
    oldImageUrl: "/images/legacy/S__71721021_0.jpg",
    oldPrice: 890,
    oldRegularPrice: 1798,
    reviewAngle: "เป็นรุ่นราคาต่ำมาก ต้องเน้นตรวจความปลอดภัย มาตรฐาน และความน่าเชื่อถือร้านก่อนแนะนำ",
    bestFor: "คนงบจำกัดมากที่ยังต้องการเครื่องกำลังไฟสูง แต่ต้องยอมเช็กความเสี่ยงละเอียด",
    verifyList: ["มาตรฐานความปลอดภัย", "รีวิวเสีย/เคลม", "อุปกรณ์ในกล่อง", "ราคาจริงจากหลายร้าน"],
    rewritePriority: "สูง"
  },
  {
    id: 1098,
    slug: "waterheater-sharpwh-34-3500w",
    title: "รีวิว เครื่องทำน้ำอุ่น Sharp WH-34 : เครื่องทำน้ำอุ่นเบสิค ที่ไม่เบสิค ใช้ง่าย ราคาสบายกระเป๋า",
    productName: "Sharp WH-34 3500W",
    brand: "Sharp",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Sharp",
    oldUrl: "https://www.friendsay.com/product/waterheater-sharpwh-34-3500w/",
    preservedPath: "/product/waterheater-sharpwh-34-3500w/",
    oldImageUrl: "/images/legacy/S__71581728_0.jpg",
    oldPrice: 1900,
    oldRegularPrice: 2990,
    reviewAngle: "รีวิวควรชูความง่าย ความปลอดภัย และความคุ้มค่าของแบรนด์ใหญ่ในรุ่นพื้นฐาน",
    bestFor: "คนที่อยากได้เครื่องใช้ง่ายจากแบรนด์คุ้นเคย ไม่ต้องการฟีเจอร์ซับซ้อน",
    verifyList: ["ระบบนิรภัย", "แรงน้ำที่เหมาะสม", "บริการหลังการขาย", "เสียงตอบรับเรื่องความทน"],
    rewritePriority: "กลาง"
  },
  {
    id: 1093,
    slug: "waterheater-stiebeleltronxg45ec",
    title: "รีวิว เครื่องทำน้ำอุ่น Stiebel Eltron XG 45 EC : ตัวท็อปในใจเพื่อนซี้ อุ่นไว ปลอดภัย สวยแพง",
    productName: "Stiebel Eltron XG 45 EC",
    brand: "Stiebel Eltron",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Stiebel Eltron",
    oldUrl: "https://www.friendsay.com/product/waterheater-stiebeleltronxg45ec/",
    preservedPath: "/product/waterheater-stiebeleltronxg45ec/",
    oldImageUrl: "/images/legacy/S__71581720_0.jpg",
    oldPrice: 2960,
    oldRegularPrice: 5090,
    reviewAngle: "ควรทำเป็นรีวิวพรีเมียม เทียบเหตุผลว่าราคาสูงขึ้นแล้วได้อะไรจริง",
    bestFor: "คนที่ให้ความสำคัญกับความปลอดภัย ดีไซน์ และแบรนด์มากกว่าราคาต่ำสุด",
    verifyList: ["ระบบตัดไฟ", "วัสดุ/งานประกอบ", "ความนิ่งของน้ำอุ่น", "ความคุ้มเทียบรุ่นกลาง"],
    rewritePriority: "สูง"
  },
  {
    id: 1157,
    slug: "waterheater-sharp-modi-wh-md135-md145",
    title: "รีวิว เครื่องทำน้ำอุ่น Sharp Modi WH-MD135 & WH-MD145 เครื่องเล็ก ดีไซน์คิวท์ แต่สเปกไม่ธรรมดา!",
    productName: "Sharp Modi WH-MD135 / WH-MD145",
    brand: "Sharp",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Sharp",
    oldUrl: "https://www.friendsay.com/product/waterheater-sharp-modi-wh-md135-md145/",
    preservedPath: "/product/waterheater-sharp-modi-wh-md135-md145/",
    oldImageUrl: "/images/legacy/S__71720999_0.jpg",
    oldPrice: 2400,
    oldRegularPrice: 3690,
    reviewAngle: "เหมาะกับบทรีวิวสายดีไซน์ แต่ต้องเทียบ WH-MD135 กับ WH-MD145 ให้เห็นว่าต่างกันตรงไหน",
    bestFor: "คนที่อยากได้เครื่องขนาดเล็ก หน้าตาน่ารัก และยังอยากได้แบรนด์ใหญ่",
    verifyList: ["ความต่างสองรุ่น", "ขนาดและสีจริง", "ความแรงน้ำ", "ราคาโปรโมชันล่าสุด"],
    rewritePriority: "กลาง"
  },
  {
    id: 1153,
    slug: "waterheater-toshiba-dsk38es5kw",
    title: "รีวิว เครื่องทำน้ำอุ่น Toshiba DSK38ES5KW : เครื่องเล็ก สเปกแน่น มาตรฐานญี่ปุ่น คุ้มค่าคุ้มราคา",
    productName: "Toshiba DSK38ES5KW",
    brand: "Toshiba",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Toshiba",
    oldUrl: "https://www.friendsay.com/product/waterheater-toshiba-dsk38es5kw/",
    preservedPath: "/product/waterheater-toshiba-dsk38es5kw/",
    oldImageUrl: "/images/legacy/S__71581771_0.jpg",
    oldPrice: 2467,
    oldRegularPrice: 3390,
    reviewAngle: "ควรตรวจความคุ้มค่าของรุ่น Toshiba เมื่อเทียบกับ Sharp/Haier ในราคาใกล้กัน",
    bestFor: "คนที่ชอบแบรนด์ญี่ปุ่นและต้องการสเปกสมดุลมากกว่าราคาถูกสุด",
    verifyList: ["กำลังไฟและแรงดันน้ำ", "ระบบนิรภัย", "ขนาดจริง", "รีวิวร้านค้าล่าสุด"],
    rewritePriority: "กลาง"
  },
  {
    id: 1085,
    slug: "waterheater-toshibatwh-38wth",
    title: "รีวิว เครื่องทำน้ำอุ่น Toshiba TWH-38WTH : อุ่นไว สวยเนี๊ยบ คุ้มจนต้องบอกต่อ!",
    productName: "Toshiba TWH-38WTH",
    brand: "Toshiba",
    category: "เครื่องทำน้ำอุ่น",
    subcategory: "เครื่องทำน้ำอุ่น Toshiba",
    oldUrl: "https://www.friendsay.com/product/waterheater-toshibatwh-38wth/",
    preservedPath: "/product/waterheater-toshibatwh-38wth/",
    oldImageUrl: "/images/legacy/S__71581714_0.jpg",
    oldPrice: 1900,
    oldRegularPrice: 2990,
    reviewAngle: "ควรทำเป็นรีวิวคู่กับ DSK38ES5KW เพื่อช่วยคนเลือก Toshiba รุ่นไหนดี",
    bestFor: "คนที่ต้องการเครื่อง Toshiba ราคาไม่แรงและอยากได้หน้าตาเรียบ",
    verifyList: ["ความต่างกับ DSK38ES5KW", "ราคาโปรล่าสุด", "ฟีเจอร์ความปลอดภัย", "ประสบการณ์ติดตั้งจริง"],
    rewritePriority: "กลาง"
  }
];

export const legacyProductsBySlug = new Map(legacyProducts.map((product) => [product.slug, product]));
