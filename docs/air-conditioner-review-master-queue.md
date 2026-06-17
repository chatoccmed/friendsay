# Air Conditioner Review Master Queue

Updated: 17 June 2026

This is the simple operating queue for Friendsay air-conditioner reviews.
Use this file with `docs/air-conditioner-review-master-queue.csv` when the user says to collect all models and keep reviewing one by one.

## Simple Rule

- Codex owns the queue. Do not ask the user to choose every product.
- Current user direction: create review pages for every known model first. Do not block the writing round on sold-count or review-count confirmation.
- Evidence can come later from Shopee, Lazada, TikTok, HomePro, Power Buy, brand stores, or another checkable retailer source.
- If exact Shopee/Lazada/TikTok product links are not available yet, use exact model search links in the buy buttons and keep direct affiliate matching as a follow-up.
- After the user checks Shopee and sends affiliate links, replace the search links with direct affiliate links and polish the review proof section.
- Do not claim marketplace reviews when the proof source is a retailer.
- Do not invent sold counts. For pages without confirmed proof, write as an expert buyer guide and keep proof/affiliate notes internal.

## Current Snapshot

| Status | Count |
|---|---:|
| Total known models/series | 28 |
| Full reviews done | 4 |
| Draft review pages generated | 24 |
| Affiliate links pending user check | 24 |

## Next Reviews

All 28 known models now have a review path:

- Finished detailed reviews keep their hand-polished pages.
- The remaining 24 models use the data-driven review draft at `/th/reviews/[review-slug]/`.
- The index page is `/th/reviews/air-conditioners/`.

## How To Work

1. Open `docs/air-conditioner-review-master-queue.csv`.
2. Pick the first row that still needs hand polish or affiliate replacement.
3. Write or improve the review using `docs/product-review-operating-template.md` and the Candy/TCL page structure.
4. Use proof honestly when available. If proof is not confirmed yet, focus the public page on buyer decision guidance, not internal caveats.
5. Add Shopee, Lazada, and TikTok buttons. Use direct product links when known; otherwise use exact search links by brand + model.
6. After the user sends direct affiliate links, replace search links and upgrade the page from draft to polished review.

## Do Not Do

- Do not stop the whole project because Shopee blocks browsing.
- Do not invent sold counts.
- Do not block draft review creation just because proof is still pending.
- Do not use weak public copy such as "we could not see sold count"; convert missing data into internal notes.
