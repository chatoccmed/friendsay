# Air Conditioner Review Master Queue

Updated: 17 June 2026

This is the simple operating queue for Friendsay air-conditioner reviews.
Use this file with `docs/air-conditioner-review-master-queue.csv` when the user says to collect all models and keep reviewing one by one.

## Simple Rule

- Codex owns the queue. Do not ask the user to choose every product.
- Review the highest-ranked item that is not done and has real review, rating, comment, or sold evidence above 5.
- Evidence can come from Shopee, Lazada, TikTok, HomePro, Power Buy, brand stores, or another checkable retailer source.
- If exact Shopee/Lazada/TikTok product links are not available yet, use exact model search links in the buy buttons and keep direct affiliate matching as a follow-up.
- Do not claim marketplace reviews when the proof source is a retailer.
- If a product has no enough evidence, keep it in the queue, mark the next action, and move to the next ready product.

## Current Snapshot

| Status | Count |
|---|---:|
| Total known models/series | 28 |
| Full reviews done | 4 |
| Ready for retailer-proof review | 3 |
| Needs more review or sales evidence | 21 |

## Next Reviews

1. Mitsubishi MSY-GT09VF - HomePro reviews 86
2. Mitsubishi Heavy Duty DXK10CXV-W1 - HomePro reviews 13
3. Sharp AH/AU-XP10YMB - HomePro reviews 8

## How To Work

1. Open `docs/air-conditioner-review-master-queue.csv`.
2. Pick the first row with `work_status` equal to `ready_retailer_review`.
3. Write the review using `docs/product-review-operating-template.md` and the Candy/TCL page structure.
4. Use the retailer proof honestly in the article and turn buyer review patterns into 6 useful recommendations.
5. Add Shopee, Lazada, and TikTok buttons. Use direct product links when known; otherwise use exact search links by brand + model.
6. After publishing the review, change `work_status` to `done`, add the `review_slug`, and move to the next ready row.

## Do Not Do

- Do not stop the whole project because Shopee blocks browsing.
- Do not invent sold counts.
- Do not write a full review for rows with `needs_more_evidence` or `needs_sales_or_review_evidence` until another source pushes proof above 5.
- Do not use weak public copy such as "we could not see sold count"; convert missing data into internal notes.
