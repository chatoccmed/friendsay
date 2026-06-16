---
name: friendsay-product-reviewer
description: Create and improve Friendsay product reviews from marketplace research. Use when the user asks to collect Shopee, Lazada, or TikTok products, build a review inventory or queue, write a Friendsay-style single-product review, continue reviewing products one by one, apply the Candy air-conditioner review template, create review-proof sections, add affiliate buy buttons, or verify responsive review pages.
---

# Friendsay Product Reviewer

Use this skill to create Friendsay product reviews that are useful, visual, honest, friendly, and built for affiliate conversion without sounding pushy.

## Required Project References

When working inside the Friendsay project, read these first:

- `docs/product-review-operating-template.md`
- `docs/shopee-b-plus-d-review-system.md` when collecting Shopee data
- `docs/air-conditioner-shopee-inventory-queue.md` for air-conditioner batch work
- `docs/air-conditioner-shopee-review-queue.csv` for the active air-conditioner queue
- `src/pages/th/reviews/candy-vpct-vpgt-air-conditioner.astro` as the current review-page reference

If a reference is missing, continue with the closest available source and note the gap.

## Core Workflow

1. Start with inventory, not writing. Confirm the product is a real SKU or identifiable series.
2. Record source data: brand, series, model, BTU or spec options, price, rating, review counts, media counts, shop, warranty, product URL, and collection date.
3. Qualify products using the Friendsay rule: reviews, ratings, or comments must be greater than 5 for a full review.
4. If sold count is hidden, use `review_signal_pass`. Never invent sales numbers.
5. Select the next product by priority: strong review evidence, clear model or specs, trusted shop, useful comparison value.
6. Write one review at a time using the product review operating template.
7. Include a clear verdict near the top: buy, shortlist, or skip, who it fits, who it does not fit, and what to ask before paying.
8. After the top proof and category guide, build a full lower article section using `article-layout`, `article-body`, and `toc`; do not stop with a thin summary section.
9. Include at least 2 clean real product images when available, plus unique generated or contextual visuals matching the section.
10. Include at least 6 review-proof cards or review-theme cards. Do not create fake buyer names.
11. Add Shopee, Lazada, and TikTok buy buttons when links exist, plus a centered responsive sticky buy bar.
12. Add comparison UX: alternatives, compare CTA, or compare tray when available.
13. Verify mobile, tablet, and desktop, including actual clicks on at least two table-of-contents links.
14. Build, copy changes to `.github-ready`, build there, and commit when deploy workflow is expected.

## Writing Rules

- Write Thai copy like a knowledgeable friend explaining the product, not like an AI report.
- Be specific about buyer decisions.
- Keep repeated information out of long paragraphs. Use cards, bullets, tables, snapshots, and short verdicts.
- Turn missing data into an internal note, not a weak public paragraph.
- Public watch-outs must be real buyer risks, such as wrong BTU, unclear installation cost, unclear warranty, variant confusion, repeated buyer complaints, noisy outdoor unit, drainage, pipe distance, or service queue.
- Do not claim hands-on testing unless it is true.
- Avoid overhype, fake urgency, vague praise, and generic phrases.
- Avoid public process explanations such as saying data was collected from Shopee unless it directly helps the buyer.
- Every lower-article heading must help the buyer decide. Avoid headings with only one or two weak lines.

## Shopee Collection Rules

- Collect in short rounds.
- Use one keyword at a time.
- Open product pages one by one.
- Stop when Shopee starts verification, rate limiting, or repeated blocking.
- Save partial results immediately.
- Merge duplicates into one model or series review when appropriate.
- Reject accessories, installment service pages, remote controls, cleaning services, and non-product listings.
- Keep product links and evidence fields in the inventory file before writing.

## Review Page Requirements

Every full review should include:

- Hero with product, verdict, and buy buttons
- Decision cockpit or quick answer section
- Buyer snapshots
- Real product proof section
- Review proof section with 6 or more cards
- Category guide, such as BTU for air conditioners
- Good points
- Real watch-outs
- Real cost and installation considerations
- Friendsay score bars
- Longform lower article with a right-side table of contents on desktop
- Alternatives or comparison CTA
- Questions to ask the shop before buying
- FAQ and final verdict
- Sticky buy bar

## Lower Article And TOC Requirements

Every full review must keep the Candy-style lower article structure:

- Use `article-layout`, `article-body`, and `toc`.
- Include fit and not-fit cards before score bars.
- Include at least 14 TOC links: quick answer, review proof, category guide, score, good points, watch-outs, real cost, setup/installation/usage, warranty/safety, alternatives, shop questions, price check, FAQ, and final verdict.
- Keep the lower article substantial: score explanation, good points, real watch-outs, total cost, setup or installation reality, warranty or safety, alternatives, questions before buying, FAQ, and final verdict.
- Adapt category labels, but do not remove the decision jobs. If installation does not apply, use setup, usage, care, or maintenance.
- Add `scroll-margin-top` when sticky UI can cover anchors.
- Confirm TOC links click to the correct sections on desktop and mobile.

## Visual Rules

- Use at least 2 clean real product images when possible.
- Real product images should show the product clearly, not heavily decorated banners.
- Do not repeat the same image in multiple sections.
- Generated images must support the exact section topic, such as room sizing, installation, cost planning, or review themes.
- Product images and major visual cards should link to the Shopee product page when a Shopee link exists.

## Validation Checklist

- Confirm proof cards are complete.
- Confirm no public process or internal caveat paragraphs remain.
- Confirm no horizontal overflow on mobile or desktop.
- Confirm affiliate links use `rel="sponsored noopener"`.
- Confirm generated images are not duplicated within the same review.
- Confirm the lower article is not sparse after the score section.
- Confirm TOC has 14 or more useful links and works when clicked.
- Run the site build if code or content changed.
- Commit changes in `.github-ready` if deploy workflow is expected.
