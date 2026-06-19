export type ShopeeAirProofStatus =
  | "detail_verified"
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
  lastChecked: "2026-06-18",
  detailVerified: 4,
  searchCandidateOnly: 1,
  needsShopeeCapture: 23,
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
    status: "search_candidate_only",
    productUrl: "https://shopee.co.th/product/12389480/9782528111",
    searchQuery: "MITSUBISHI MSY-GT09VF air conditioner",
    visiblePrice: 22455,
    visibleRating: 5.0,
    soldCountVisible: "unknown",
    reviewThemeSource: "shopee_search_2026-06-18",
    nextAction: "open_product_detail_with_user_capture",
    notes: "Search result showed a real MSY/GT-VF series listing, but product detail opened to Shopee traffic verification. Do not use review or sold numbers until detail is captured.",
    lastChecked: "2026-06-18"
  },
  ...[
    [6, "mitsubishi-heavy-duty-dxk10cxv-w1", "mitsubishi-heavy-duty-dxk10cxv-w1-air-conditioner", "MITSUBISHI HEAVY DUTY", "DXK10CXV-W1"],
    [7, "sharp-ah-au-xp10ymb", "sharp-ah-au-xp10ymb-air-conditioner", "SHARP", "AH/AU-XP10YMB"],
    [8, "daikin-ftkz09vv2s", "daikin-ftkz09vv2s-air-conditioner", "DAIKIN", "FTKZ09VV2S"],
    [9, "panasonic-cs-cu-xku9wkt", "panasonic-cs-cu-xku9wkt-air-conditioner", "PANASONIC", "CS/CU-XKU9WKT"],
    [10, "daikin-ftkq09yv2s", "daikin-ftkq09yv2s-air-conditioner", "DAIKIN", "FTKQ09YV2S"],
    [11, "mitsubishi-msy-ky09vf", "mitsubishi-msy-ky09vf-air-conditioner", "MITSUBISHI", "MSY-KY09VF"],
    [12, "panasonic-cs-cu-yn9ykt", "panasonic-cs-cu-yn9ykt-air-conditioner", "PANASONIC", "CS/CU-YN9YKT"],
    [13, "lg-icq11mn-ju1", "lg-icq11mn-ju1-air-conditioner", "LG", "ICQ11MN.JU1"],
    [14, "mitsubishi-heavy-duty-dxk10yyp-w1", "mitsubishi-heavy-duty-dxk10yyp-w1-air-conditioner", "MITSUBISHI HEAVY DUTY", "DXK10YYP-W1"],
    [15, "daikin-ftm09pv2s", "daikin-ftm09pv2s-air-conditioner", "DAIKIN", "FTM09PV2S"],
    [16, "panasonic-cs-cu-yu9zkt", "panasonic-cs-cu-yu9zkt-air-conditioner", "PANASONIC", "CS/CU-YU9ZKT"],
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
