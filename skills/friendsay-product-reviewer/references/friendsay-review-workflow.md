# Friendsay Product Review Workflow

This project skill package is stored in the repository so the workflow can be versioned with the Friendsay site. To activate it as a Codex skill, copy this folder to the Codex skills directory and reload the session.

## Inventory First

For batch categories such as air conditioners, always start from inventory files:

- `docs/air-conditioner-shopee-review-queue.csv`
- `docs/air-conditioner-shopee-discovery-keywords.csv`
- `docs/air-conditioner-shopee-inventory-queue.md`

The queue is the source of truth for what to review next. Add products as `candidate`, upgrade to `queued` after the review-signal rule passes, set to `in_progress` while writing, and set to `done` only after the page is built and verified.

## Review-Signal Rule

A product is eligible when it has more than 5 visible buyer signals from ratings, comments, reviews, or media. If Shopee hides sold count, do not block the review. Mark the product as `review_signal_pass` and rely on visible buyer-review evidence.

Never invent:

- sold count
- warranty details
- included installation
- energy label level
- shop service promises
- hands-on test results

## Shopee Data Collection Pattern

Shopee often limits long automated browsing sessions. Use a light B plus D pattern:

1. Collect from search result pages in short rounds.
2. Save obvious candidates immediately.
3. Open a product page only long enough to collect core fields.
4. Capture clean product images when visible.
5. Stop and resume later when verification appears.
6. Cross-check important specs with brand pages, shop pages, Lazada, TikTok Shop, or retailer pages.

## Single Review Structure

Use the Candy air-conditioner page as the current product-review reference. A strong Friendsay review should help the reader decide quickly, then support that decision with proof.

Recommended order:

1. Hero with product name, verdict, visual, and buy buttons
2. Quick answer within 90 seconds
3. Decision cockpit
4. Clean product images and section-specific visuals
5. Review proof from buyer comments
6. Fit and not-fit buyer profiles
7. Important model or variant guide
8. Category education, such as BTU selection
9. Pros
10. Watch-outs
11. Real cost checklist
12. Installation or usage concerns
13. Alternatives and compare CTA
14. Questions to ask the shop
15. FAQ
16. Final verdict

## Lower Article And Table Of Contents

Do not let the page become thin after the first proof sections. From the fit/not-fit area onward, use the full Candy/TCL longform pattern:

- Wrap the lower article in `article-layout`.
- Put all main content in `article-body`.
- Add a `toc` sidebar with numbered links on desktop.
- Keep the TOC useful on mobile, either as a compact section or readable stacked links.

Minimum TOC jobs:

1. Quick answer
2. Review proof
3. Category guide
4. Score
5. Good points
6. Watch-outs
7. Real cost
8. Setup, installation, usage, or maintenance
9. Warranty, safety, or standards
10. Alternatives
11. Questions before buying
12. Price check
13. FAQ
14. Final verdict

Each linked section must contain buyer-useful content, not just a heading. If a topic repeats something already said, compress it into cards, bullets, or a short checklist instead of writing another long paragraph.

For air conditioners, always include:

- fit and not-fit cards,
- Friendsay score bars,
- BTU or model-selection guidance,
- real installation and total-cost checks,
- warranty or safety notes,
- alternatives in nearby price or use cases,
- six shop questions before buying.

Use `scroll-margin-top` for anchor targets when sticky navigation or sticky buy buttons can cover headings. Test at least two TOC clicks before calling the page done.

## Friendsay Voice

Write as a practical friend who has done the homework:

- Short paragraphs
- Concrete decisions
- Friendly but not cute
- No fake first-person use
- No generic AI phrases
- No report-like caveats in public copy

Good style:

- "ถ้าห้องคุณเป็นคอนโดขนาดไม่ใหญ่มาก รุ่นนี้เริ่มน่าสนใจตรงราคาและรีวิวเยอะ แต่ต้องถามร้านเรื่องติดตั้งให้ชัดก่อนจ่ายเงิน"
- "จุดที่ไม่ควรมองข้ามคือเลือก BTU ให้ตรงห้อง ถ้าเลือกเล็กไป แอร์จะทำงานหนักและค่าไฟอาจไม่สวยอย่างที่คิด"

Avoid:

- "น่าดูมาก"
- "ตอบโจทย์ไลฟ์สไตล์"
- "เป็นตัวเลือกที่น่าสนใจสำหรับผู้บริโภคยุคใหม่"
- "จากข้อมูลที่รวบรวมได้"

## Visual And Affiliate Rules

- At least 2 real product images where possible.
- Generated visuals should explain the section, not merely decorate.
- Every major product image should link to the primary Shopee URL.
- Buy buttons should be visible in hero, decision areas, and sticky bar.
- Sticky bar should be centered and responsive on desktop, tablet, and mobile.
- Use Shopee first when Shopee is the source product, then Lazada, then TikTok if links exist.

## Completion Definition

A product review is done when:

- the page exists,
- the queue row is updated,
- internal caveats are removed from public copy,
- the visual set is not repetitive,
- the review proof section has 6 or more cards,
- the lower longform article exists with a working 14-link TOC,
- the score section is followed by substantial good points, watch-outs, cost, setup, warranty, alternatives, questions, FAQ, and final verdict,
- sticky buy buttons work responsively,
- build passes,
- `.github-ready` contains the same changes,
- and the deploy repository has a commit ready to push.
