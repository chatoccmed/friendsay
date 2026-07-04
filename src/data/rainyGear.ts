// ข้อมูลของสู้หน้าฝน — เก็บจากหน้า Shopee จริง 2 ก.ค. 2026 (ย้ายออกจากไฟล์หน้าเพจตามกติกา: ข้อมูลสดแยกจากโค้ดหน้าเว็บ)

export type RainyPick = {
  name: string;
  shortName: string;
  price: string;
  priceNum: number;
  soldNum: number;
  rating: number;
  reviews: string;
  sold: string;
  shopNote: string;
  best: string;
  fitShort: string;
  watch: string;
  image: string;
  affiliateUrl: string;
  sourceUrl: string;
};

export type RainySection = {
  id: string;
  pain: string;
  headline: string;
  intro: string;
  picks: RainyPick[];
};

export const rainySections: RainySection[] = [
  {
    id: "dryer",
    pain: "ผ้าไม่แห้ง เหม็นอับ",
    headline: "เครื่องอบผ้า: ตากในห้องกี่วันก็ไม่แห้งเท่ากดปุ่มเดียว",
    intro:
      "หน้าฝนผ้าตากสามวันยังชื้น กลิ่นอับติดเสื้อ เครื่องอบผ้าคือทางออกที่ตรงที่สุด — เลือกตามงบ: ตู้อบราคาหลักร้อยสำหรับห้องเช่า จนถึงเครื่องอบฝาหน้าจริงจังสำหรับบ้านทั้งหลัง",
    picks: [
      {
        name: "little Swan ตู้อบผ้า 4000W",
        shortName: "ตัวเริ่มต้นหลักร้อย",
        price: "~644 บาท",
        priceNum: 644,
        soldNum: 2000,
        rating: 4.8,
        reviews: "688 รีวิว",
        sold: "ขายแล้ว 2พัน+ ชิ้น",
        shopNote: "ร้านทั่วไป — เช็กคะแนนร้านก่อนซื้อ",
        best: "ห้องเช่า/หอพักที่อยากได้ตู้อบผ้าถูกสุดที่รีวิวยังแน่น มี 2 รุ่นย่อย (ฆ่าเชื้อ/แห้งเร็ว) เก็บเงินปลายทางได้",
        fitShort: "ตู้อบถูกสุดที่รีวิวแน่น เหมาะห้องเช่า",
        watch: "เป็นตู้อบผ้าแบบเป่าลมร้อน ไม่ใช่เครื่องอบฝาหน้า — เหมาะผ้าจำนวนน้อย และควรเผื่อเวลาอบมากกว่าที่โฆษณา",
        image: "/images/rainy-gear/little-swan-dryer-real-product.jpg",
        affiliateUrl: "https://s.shopee.co.th/30m8ZdNsig",
        sourceUrl: "https://shopee.co.th/product/1235343041/27353400058"
      },
      {
        name: "Haier เครื่องอบผ้า 7 กก. รุ่น HDV70E1",
        shortName: "ตัวกลางจากร้าน official",
        price: "~6,290 บาท",
        priceNum: 6290,
        soldNum: 1000,
        rating: 4.9,
        reviews: "726 รีวิว",
        sold: "ขายแล้ว 1พัน+ ชิ้น",
        shopNote: "haier.officialshop (ร้านเดียวกับแอร์ Haier ที่เราตรวจแล้ว)",
        best: "ครอบครัวเล็กที่อยากได้เครื่องอบจริงจังจากร้าน official ถังสเตนเลสแท้ ราคาหลังโค้ดคุ้มสุดในกลุ่มแบรนด์",
        fitShort: "เครื่องอบจริงจังจากร้าน official",
        watch: "ขนาด 7 กก. เหมาะผ้ารอบซัก 1-2 คน ถ้าซักครั้งละเยอะควรขยับไป 9 กก.",
        image: "/images/rainy-gear/haier-hdv70e1-real-product.jpg",
        affiliateUrl: "https://s.shopee.co.th/2qSiNKOW3d",
        sourceUrl: "https://shopee.co.th/product/184920733/28534442763"
      },
      {
        name: "TCL เครื่องอบผ้าฝาหน้า 9 กก. รุ่น WT09KFDYW",
        shortName: "ตัวท็อปยอดขายสูงสุด",
        price: "~7,290 บาท",
        priceNum: 7290,
        soldNum: 8000,
        rating: 4.9,
        reviews: "1.6พัน รีวิว",
        sold: "ขายแล้ว 8พัน+ ชิ้น",
        shopNote: "TCL Authorized Store (ร้านเดียวกับแอร์ TCL ที่เราตรวจแล้ว)",
        best: "บ้านที่ซักผ้าบ่อย อยากได้เครื่องอบฝาหน้าตัวจริง มีตรวจจับความชื้นและโปรแกรมลดรอยยับ ยอดขายสูงสุดในหมวดที่เราเจอ",
        fitShort: "เครื่องอบยอดขายสูงสุด ครบฟังก์ชัน",
        watch: "ตอนเก็บข้อมูลขึ้นสถานะพรีออเดอร์ จัดส่งใน 30 วัน — ถ้ารีบใช้หน้าฝนนี้ต้องเช็กรอบส่งกับร้านก่อนกด",
        image: "/images/rainy-gear/tcl-wt09kfdyw-real-product.jpg",
        affiliateUrl: "https://s.shopee.co.th/2g9IB1P9Oa",
        sourceUrl: "https://shopee.co.th/product/1025131800/26169839808"
      }
    ]
  },
  {
    id: "shoes",
    pain: "รองเท้าเปียก เหม็นอับ",
    headline: "เครื่องอบรองเท้า: ของเล็กที่คนลืม แต่ใช้ทุกวันหน้าฝน",
    intro:
      "รองเท้าโดนฝนแล้วตากไม่ทันเช้า คือปัญหาที่คนซื้อเครื่องอบรองเท้าหลักหมื่นชิ้นต่อเดือนใน Shopee — ราคาไม่ถึงพันแต่ตัดปัญหากลิ่นอับและเชื้อราได้ทั้งฤดู",
    picks: [
      {
        name: "Sothing เครื่องเป่ารองเท้า กำจัดกลิ่น",
        shortName: "ตัวคุ้มยอดนิยม",
        price: "~319-676 บาท",
        priceNum: 319,
        soldNum: 8000,
        rating: 4.7,
        reviews: "3.2พัน รีวิว",
        sold: "ขายแล้ว 8พัน+ ชิ้น",
        shopNote: "ร้านยอดนิยม Favorite 9.9k",
        best: "จุดเริ่มต้นที่ถูกสุดสำหรับบ้านที่รองเท้าเปียกประจำ เสียบทิ้งไว้ข้ามคืนแห้งหอมพร้อมใส่",
        fitShort: "เริ่มต้นถูกสุดของหมวดรองเท้า",
        watch: "มีหลายเวอร์ชัน (มาตรฐาน/ตั้งเวลาได้) ราคาต่างกัน — เช็กตัวเลือกให้ตรงก่อนกด เวอร์ชันตั้งเวลาคุ้มกว่าถ้าใช้ทุกวัน",
        image: "/images/rainy-gear/sothing-shoe-dryer-real-product.jpg",
        affiliateUrl: "https://s.shopee.co.th/3B5YlwNFNj",
        sourceUrl: "https://shopee.co.th/product/72571276/4904134878"
      },
      {
        name: "Deerma Shoes Dryer HX10",
        shortName: "ตัวขายดีที่สุด",
        price: "~925 บาท",
        priceNum: 925,
        soldNum: 10000,
        rating: 4.9,
        reviews: "2.1พัน รีวิว",
        sold: "ขายแล้ว 10พัน+ ชิ้น",
        shopNote: "ร้าน thgogadget (คะแนนร้าน 94.3k)",
        best: "แบรนด์ในระบบนิเวศ Xiaomi ที่ขายทะลุหมื่นชิ้น งานประกอบเนี้ยบกว่า เหมาะคนอยากได้ของที่ใช้ยาว ๆ",
        fitShort: "ขายดีสุดในหน้านี้ 10พัน+ ชิ้น",
        watch: "ตอนเก็บข้อมูลเป็นพรีออเดอร์ส่งใน 30 วัน — ถ้ารอไม่ได้ให้ดู Sothing ที่ส่งภายในสัปดาห์",
        image: "/images/rainy-gear/deerma-hx10-real-product.jpg",
        affiliateUrl: "https://s.shopee.co.th/3LOyyFMc2m",
        sourceUrl: "https://shopee.co.th/product/163255636/5228924497"
      }
    ]
  },
  {
    id: "dehumidifier",
    pain: "ห้องชื้น ผนังขึ้นรา",
    headline: "เครื่องลดความชื้น: แก้ที่ต้นเหตุของกลิ่นอับทั้งห้อง",
    intro:
      "ความชื้นหน้าฝนคือสาเหตุของเชื้อราบนผนัง เสื้อผ้าในตู้เหม็นอับ และไรฝุ่น — เครื่องลดความชื้นทำงานเงียบ ๆ แต่เปลี่ยนทั้งห้องได้จริง โดยเฉพาะคอนโดที่เปิดระบายอากาศไม่ได้",
    picks: [
      {
        name: "HAFELE เครื่องลดความชื้น สำหรับห้อง 20 ตร.ม.",
        shortName: "ตัวคุ้มขายดี",
        price: "~2,434-2,690 บาท",
        priceNum: 2434,
        soldNum: 6000,
        rating: 4.9,
        reviews: "2พัน รีวิว",
        sold: "ขายแล้ว 6พัน+ ชิ้น",
        shopNote: "แบรนด์ฮาร์ดแวร์เยอรมันที่คนไทยรู้จัก",
        best: "ห้องนอน/คอนโดขนาดไม่เกิน 20 ตร.ม. ราคาสมเหตุสมผลที่สุดในกลุ่มที่รีวิวแน่นระดับพันรีวิว",
        fitShort: "ลดชื้นห้อง ≤20 ตร.ม. คุ้มสุด",
        watch: "ระบุพื้นที่ห้อง 20 ตร.ม. — ห้องใหญ่กว่านี้หรือเปิดโล่งถึงกัน ควรขยับไปรุ่นความจุสูงกว่า",
        image: "/images/rainy-gear/hafele-dehumidifier-real-product.jpg",
        affiliateUrl: "https://s.shopee.co.th/2Vprykk0tA",
        sourceUrl: "https://shopee.co.th/product/105090190/10632577009"
      },
      {
        name: "Xiaomi Smart Dehumidifier 22 ลิตร/วัน",
        shortName: "ตัวแรงสำหรับบ้านชื้นจัด",
        price: "~7,290 บาท",
        priceNum: 7290,
        soldNum: 772,
        rating: 5.0,
        reviews: "213 รีวิว",
        sold: "ขายแล้ว 772 ชิ้น",
        shopNote: "สินค้า Xiaomi — เชื่อมแอป Mi Home ได้",
        best: "บ้าน/ห้องใหญ่ที่ชื้นจัด ดูดถึง 22 ลิตรต่อวัน คุมผ่านแอปได้ เหมาะสาย Smart Home ที่ใช้ Xiaomi อยู่แล้ว",
        fitShort: "แรงสุด 22 ลิตร/วัน คุม 10-40 ตร.ม.",
        watch: "ราคาช่วงลดแรง (-46%) จาก 13,599 — ถ้าพลาดโปรราคาเต็มจะไม่คุ้มเท่า ควรกดช่วงแคมเปญ",
        image: "/images/rainy-gear/xiaomi-dehumidifier-real-product.jpg",
        affiliateUrl: "https://s.shopee.co.th/2LWRmRkeE9",
        sourceUrl: "https://shopee.co.th/product/30330278/43973076326"
      }
    ]
  }
];
