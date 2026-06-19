# Refrigerator Review Dashboard

Updated: 2026-06-19

This dashboard tracks the first Friendsay refrigerator review batch. Public review pages must stay buyer-facing; internal matching status belongs in the CSV files.

## Current Progress

- Initial refrigerator queue: 28 models
- Public library page: `/th/reviews/refrigerators/`
- Detail page route: `/th/reviews/refrigerators/[slug]/`
- Source used for first catalog round: HomePro refrigerator category
- Source category size seen in first round: 476 products
- Models with visible review count above 5 in the first source round: 18
- Models already generated as detail pages: 28
- Generated visual kits: 28/28 models, 7 images per model
- Generated image path: `public/images/refrigerators/models/`
- Image ledger: `docs/refrigerator-image-asset-ledger.csv`
- Public copy pass: buyer-facing title, quick verdict, proof label, strengths, and summary improved for all 28 generated reviews
- Marketplace link state: exact brand + model search links are ready; exact affiliate URLs are pending user verification

## Active Files

- Public data: `src/data/refrigeratorReviewQueue.ts`
- Public library: `src/pages/th/reviews/refrigerators/index.astro`
- Public detail template: `src/pages/th/reviews/refrigerators/[slug].astro`
- Master queue: `docs/refrigerator-review-master-queue.csv`
- Marketplace matching: `docs/refrigerator-marketplace-match.csv`
- Workflow: `docs/refrigerator-market-catalog-system.md`

## Quality Rules For Next Refrigerator Work

- Public copy should sound like a helpful friend who knows appliances.
- Do not publish internal status such as "affiliate pending", "search link", or "needs matching".
- If exact Shopee/Lazada/TikTok product URLs are not ready, keep that only in `docs/refrigerator-marketplace-match.csv`.
- Watch-outs must be real buying risks: wrong size, door swing, heat clearance, dented delivery, unclear warranty, return window, high shipping cost, or variant/color confusion.
- Recommendation cards should tell the reader what to check or ask, not merely say that reviews exist.
- When product images are added later, use clean product images first and make every major visual clickable to Shopee.
- Every refrigerator detail page now has model-specific generated visuals for hero, clean product, detail, capacity, space, delivery, and warranty sections.
- Generated copy must stay useful even before exact affiliate URLs arrive: tell readers what to check, what risk matters, and who the model fits.
- Exact real product photos are tracked separately in the image ledger and should be added only after the exact marketplace or brand image source is verified.

## Next Rounds

1. Add Power Buy refrigerator listing to catch models missing from HomePro.
2. Add official brand catalogs for Samsung, LG, Toshiba, Mitsubishi, Hitachi, Haier, Sharp, Hisense, TCL, Electrolux, Beko, Panasonic, and Midea.
3. Match exact Shopee product URLs for the first 18 review-ready rows.
4. Replace exact search links with affiliate URLs after user verification.
5. Replace or add at least two clean real product images for priority models after exact source verification.
