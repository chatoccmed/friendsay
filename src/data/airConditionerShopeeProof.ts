export type ShopeeAirProofStatus =
  | "detail_verified"
  | "detail_low_signal"
  | "search_candidate_only"
  | "needs_shopee_capture";

export type AirConditionerShopeeProof = {
  queueRank: number;
  productKey: string;
  reviewSlug: string;
  brand: string;
  modelOrSeries: string;
  status: ShopeeAirProofStatus;
  productUrl?: string;
  // ลิงก์ affiliate ที่ทดสอบ redirect แล้ว — ใช้กับปุ่มซื้อ; productUrl คือหลักฐาน ห้ามสลับกัน
  affiliateUrl?: string;
  searchQuery: string;
  visiblePrice?: number;
  visibleRating?: number;
  ratingsCount?: number;
  commentsCount?: number;
  mediaCount?: number;
  soldCountVisible: boolean | "unknown";
  reviewThemeSource: string;
  nextAction: string;
  notes: string;
  lastChecked: string;
};

export const airConditionerShopeeProofSummary = {
  lastChecked: "2026-07-02",
  detailVerified: 8,
  detailLowSignal: 1,
  searchCandidateOnly: 0,
  needsShopeeCapture: 21,
  rule: "Use Shopee sold/review counts only when product-detail proof exists. Search candidates are for matching only."
} as const;

export const airConditionerShopeeProofs: AirConditionerShopeeProof[] = [
  {
    queueRank: 1,
    productKey: "candy-vpct-vpgt-series",
    reviewSlug: "candy-vpct-vpgt-air-conditioner",
    brand: "CANDY",
    modelOrSeries: "VPCT/VPGT Series",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/184920733/26853787935",
    affiliateUrl: "https://s.shopee.co.th/8KncHGDn7M",
    searchQuery: "CANDY VPCT VPGT air conditioner",
    visiblePrice: 7995,
    visibleRating: 4.9,
    ratingsCount: 10400,
    commentsCount: 2200,
    mediaCount: 2100,
    soldCountVisible: false,
    reviewThemeSource: "shopee_detail_2026-06-15",
    nextAction: "refresh_price_reviews_affiliate",
    notes: "Shopee detail proof exists. Sold count was not visible, so do not claim sold quantity.",
    lastChecked: "2026-06-15"
  },
  {
    queueRank: 2,
    productKey: "tcl-savein-ai-series",
    reviewSlug: "tcl-savein-ai-air-conditioner",
    brand: "TCL",
    modelOrSeries: "SaveIN AI Series",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/1025131800/23777230236",
    affiliateUrl: "https://s.shopee.co.th/6L2XtfRyjI",
    searchQuery: "TCL SaveIN AI air conditioner",
    visiblePrice: 8590,
    visibleRating: 4.9,
    ratingsCount: 9200,
    commentsCount: 1600,
    mediaCount: 1500,
    soldCountVisible: false,
    reviewThemeSource: "shopee_detail_2026-06-15",
    nextAction: "refresh_price_reviews_affiliate",
    notes: "Shopee detail proof exists. Sold count was not visible, so use review and rating counts only.",
    lastChecked: "2026-06-17"
  },
  {
    queueRank: 3,
    productKey: "xiaomi-mijia-air-inverter-eco",
    reviewSlug: "xiaomi-mijia-air-inverter-eco",
    brand: "Xiaomi",
    modelOrSeries: "Mijia Air Inverter Eco",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/389528981/49105546219",
    affiliateUrl: "https://s.shopee.co.th/9UzZfZRNTi",
    searchQuery: "Xiaomi Mijia Air Inverter Eco",
    visiblePrice: 7924,
    visibleRating: 4.9,
    ratingsCount: 4300,
    commentsCount: 942,
    mediaCount: 927,
    soldCountVisible: false,
    reviewThemeSource: "shopee_detail_2026-06-14",
    nextAction: "refresh_price_reviews_affiliate",
    notes: "Shopee detail proof exists. Sold count was not visible, so use review and rating counts only.",
    lastChecked: "2026-06-14"
  },
  {
    queueRank: 4,
    productKey: "midea-celest-msce",
    reviewSlug: "midea-celest-msce-air-conditioner",
    brand: "Midea",
    modelOrSeries: "Celest MSCE",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/338734338/57308205291",
    affiliateUrl: "https://s.shopee.co.th/6Aj7hUU7nt",
    searchQuery: "Midea Celest MSCE air conditioner",
    visiblePrice: 7490,
    visibleRating: 5.0,
    ratingsCount: 193,
    commentsCount: 35,
    mediaCount: 41,
    soldCountVisible: false,
    reviewThemeSource: "shopee_detail_2026-06-15",
    nextAction: "refresh_price_reviews_affiliate",
    notes: "Shopee detail proof exists. Sold count was not visible, so use review and rating counts only.",
    lastChecked: "2026-06-15"
  },
  {
    queueRank: 5,
    productKey: "mitsubishi-msy-gt09vf",
    reviewSlug: "mitsubishi-msy-gt09vf-air-conditioner",
    brand: "MITSUBISHI",
    modelOrSeries: "MSY-GT09VF",
    status: "detail_low_signal",
    productUrl: "https://shopee.co.th/product/12389480/9782528111",
    searchQuery: "MITSUBISHI MSY-GT09VF air conditioner",
    visiblePrice: 28069,
    visibleRating: 5.0,
    ratingsCount: 2,
    commentsCount: 2,
    soldCountVisible: true,
    reviewThemeSource: "shopee_detail_2026-07-02",
    nextAction: "park_and_track_ka_series_instead",
    notes: "Detail captured 2026-07-02: only 2 reviews and 6 sold from non-official shop (Mr.Cool). Fails B+D minimum - do not publish as full review. Mitsubishi market volume sits in MSY-KA VF (see queueRank 30). Queue proofCount 86 contradicts this evidence - verify before use.",
    lastChecked: "2026-07-02"
  },
  {
    queueRank: 12,
    productKey: "panasonic-cs-cu-yn9ykt",
    reviewSlug: "panasonic-cs-cu-yn9ykt-air-conditioner",
    brand: "PANASONIC",
    modelOrSeries: "CS/CU-YN-YKT (Eco Non-Inverter YN Series)",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/315769706/22741284722",
    affiliateUrl: "https://s.shopee.co.th/8pjtCabw1f",
    searchQuery: "แอร์ Panasonic YN-YKT",
    visiblePrice: 12750,
    visibleRating: 4.9,
    ratingsCount: 176,
    commentsCount: 45,
    mediaCount: 35,
    soldCountVisible: true,
    reviewThemeSource: "shopee_detail_2026-07-02",
    nextAction: "write_full_review",
    notes: "Panasonic official store. Sold 428 visible. CRITICAL: unit is NON-INVERTER despite energy-saving listing title - reviews must warn buyers clearly. BTU 9000/12000/18000/24000.",
    lastChecked: "2026-07-02"
  },
  {
    queueRank: 16,
    productKey: "panasonic-cs-cu-yu9zkt",
    reviewSlug: "panasonic-cs-cu-yu9zkt-air-conditioner",
    brand: "PANASONIC",
    modelOrSeries: "CS/CU-YU-ZKT (Standard Inverter YU Series)",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/315769706/25912587679",
    affiliateUrl: "https://s.shopee.co.th/5fmrQjARba",
    searchQuery: "แอร์ Panasonic YU-ZKT",
    visiblePrice: 12750,
    visibleRating: 4.9,
    ratingsCount: 118,
    commentsCount: 28,
    mediaCount: 23,
    soldCountVisible: true,
    reviewThemeSource: "shopee_detail_2026-07-02",
    nextAction: "write_full_review",
    notes: "Panasonic official store (107.5k followers). Sold 267 visible. Page carries full standard installation cost table - reuse for install-cost guide. Warranty 5y manufacturer. BTU 9000/13000/18000/24000.",
    lastChecked: "2026-07-02"
  },
  {
    queueRank: 30,
    productKey: "mitsubishi-msy-ka-vf-series",
    reviewSlug: "mitsubishi-msy-ka-happy-inverter-air-conditioner",
    brand: "MITSUBISHI ELECTRIC",
    modelOrSeries: "MSY-KA VF (Happy Inverter / Mr.Slim)",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/141005876/23280824297",
    affiliateUrl: "https://s.shopee.co.th/7AbfDRSYz6",
    searchQuery: "แอร์ Mitsubishi Happy Inverter MSY-KA",
    visiblePrice: 14668,
    visibleRating: 4.8,
    ratingsCount: 838,
    commentsCount: 157,
    mediaCount: 170,
    soldCountVisible: true,
    reviewThemeSource: "shopee_detail_2026-07-02",
    nextAction: "write_full_review",
    notes: "Shopee Mall shop Sala Electronics Plaza (46k shop rating). Sold 2k+ visible. Factory warranty 5y. Review themes: very quiet, cools fast, buyers often misread price as install-included - installation is a paid add-on. BTU 9200/12200/18000.",
    lastChecked: "2026-07-02"
  },
  {
    queueRank: 31,
    productKey: "daikin-ftkb-sabai-series",
    reviewSlug: "daikin-ftkb-sabai-inverter-air-conditioner",
    brand: "DAIKIN",
    modelOrSeries: "FTKB AV2S/ZV2S (Max Inverter Sabai Series)",
    status: "detail_verified",
    productUrl: "https://shopee.co.th/product/120361613/2148527960",
    affiliateUrl: "https://s.shopee.co.th/2LWPSgU3El",
    searchQuery: "แอร์ Daikin FTKB Sabai Inverter",
    visiblePrice: 12875,
    visibleRating: 5.0,
    ratingsCount: 6200,
    commentsCount: 2100,
    mediaCount: 1300,
    soldCountVisible: true,
    reviewThemeSource: "shopee_detail_2026-07-02",
    nextAction: "write_full_review",
    notes: "King Air shop - listed as direct Siam Daikin Sales dealer. Sold 10k+ visible - strongest listing captured so far. Warranty: compressor 5y, outdoor PCB 3y, parts 1y. Shop itself warns the 2,000 baht install option is not the final cost (90% pay extra). BTU 9200-20500 (5 sizes).",
    lastChecked: "2026-07-02"
  },
  ...[
    [6, "mitsubishi-heavy-duty-dxk10cxv-w1", "mitsubishi-heavy-duty-dxk10cxv-w1-air-conditioner", "MITSUBISHI HEAVY DUTY", "DXK10CXV-W1"],
    [7, "sharp-ah-au-xp10ymb", "sharp-ah-au-xp10ymb-air-conditioner", "SHARP", "AH/AU-XP10YMB"],
    [8, "daikin-ftkz09vv2s", "daikin-ftkz09vv2s-air-conditioner", "DAIKIN", "FTKZ09VV2S"],
    [9, "panasonic-cs-cu-xku9wkt", "panasonic-cs-cu-xku9wkt-air-conditioner", "PANASONIC", "CS/CU-XKU9WKT"],
    [10, "daikin-ftkq09yv2s", "daikin-ftkq09yv2s-air-conditioner", "DAIKIN", "FTKQ09YV2S"],
    [11, "mitsubishi-msy-ky09vf", "mitsubishi-msy-ky09vf-air-conditioner", "MITSUBISHI", "MSY-KY09VF"],
    [13, "lg-icq11mn-ju1", "lg-icq11mn-ju1-air-conditioner", "LG", "ICQ11MN.JU1"],
    [14, "mitsubishi-heavy-duty-dxk10yyp-w1", "mitsubishi-heavy-duty-dxk10yyp-w1-air-conditioner", "MITSUBISHI HEAVY DUTY", "DXK10YYP-W1"],
    [15, "daikin-ftm09pv2s", "daikin-ftm09pv2s-air-conditioner", "DAIKIN", "FTM09PV2S"],
    [17, "panasonic-cs-cu-xu9akt", "panasonic-cs-cu-xu9akt-air-conditioner", "PANASONIC", "CS/CU-XU9AKT"],
    [18, "panasonic-cs-cu-tu9akt", "panasonic-cs-cu-tu9akt-air-conditioner", "PANASONIC", "CS/CU-TU9AKT"],
    [19, "sharp-ah-x10bb", "sharp-ah-x10bb-air-conditioner", "SHARP", "AH-X10BB"],
    [20, "mitsubishi-msy-gy09vf", "mitsubishi-msy-gy09vf-air-conditioner", "MITSUBISHI", "MSY-GY09VF"],
    [21, "mitsubishi-msy-jy09vf", "mitsubishi-msy-jy09vf-air-conditioner", "MITSUBISHI", "MSY-JY09VF"],
    [22, "daikin-ftkc09yv2s", "daikin-ftkc09yv2s-air-conditioner", "DAIKIN", "FTKC09YV2S"],
    [23, "lg-ice11mn-ju1", "lg-ice11mn-ju1-air-conditioner", "LG", "ICE11MN.JU1"],
    [24, "lg-ieq10en-ju1", "lg-ieq10en-ju1-air-conditioner", "LG", "IEQ10EN.JU1"],
    [25, "carrier-42tvba010", "carrier-42tvba010-air-conditioner", "CARRIER", "42TVBA010"],
    [26, "carrier-42tvab010abi", "carrier-42tvab010abi-air-conditioner", "CARRIER", "42TVAB010ABI"],
    [27, "beko-bseog090", "beko-bseog090-air-conditioner", "BEKO", "BSEOG090"],
    [28, "samsung-ar10dyeaawknst", "samsung-ar10dyeaawknst-air-conditioner", "SAMSUNG", "AR10DYEAAWKNST"]
  ].map(([queueRank, productKey, reviewSlug, brand, modelOrSeries]) => ({
    queueRank: Number(queueRank),
    productKey: String(productKey),
    reviewSlug: String(reviewSlug),
    brand: String(brand),
    modelOrSeries: String(modelOrSeries),
    status: "needs_shopee_capture" as const,
    searchQuery: `${brand} ${modelOrSeries} air conditioner`,
    soldCountVisible: "unknown" as const,
    reviewThemeSource: "not_collected_this_round",
    nextAction: "capture_exact_search_or_user_affiliate_link",
    notes: "Shopee detail was not captured because search pages triggered Verify to Continue. Keep retailer proof separate until product detail capture is available.",
    lastChecked: "2026-06-18"
  }))
];

export const airConditionerShopeeProofByKey = Object.fromEntries(
  airConditionerShopeeProofs.map((proof) => [proof.productKey, proof])
) as Record<string, AirConditionerShopeeProof>;

export const getAirConditionerShopeeProof = (
  productKey: string
): AirConditionerShopeeProof | undefined => airConditionerShopeeProofByKey[productKey];
