# Refrigerator Market Catalog System

Updated: 2026-06-19

This is the catalog-first workflow for the Friendsay refrigerator category. It follows the same idea as the air-conditioner system: collect a checkable product catalog first, then match Shopee, Lazada, and TikTok affiliate links later.

## Current Source Round

- Source: HomePro refrigerator category
- URL: https://www.homepro.co.th/c/APP09
- Category count visible on source page: 476 products
- Category lanes visible on source page: 1-door, 2-door, multi-door, side-by-side, freezer, wine cooler, and display/chiller refrigerators
- Initial queue: 28 refrigerator models
- Public review route: `/th/reviews/refrigerators/`
- Detail pages generated: 28 model pages
- Models with visible review count above 5 in the first source round: 18
- Marketplace tracking file: `docs/refrigerator-marketplace-match.csv`

## Rules For Refrigerator Reviews

- Do not invent sold count.
- Do not claim hands-on use unless the model was actually used.
- If exact Shopee affiliate link is not ready, use exact brand + model search links.
- Keep "affiliate pending", "search link", "needs marketplace match", and similar workflow notes out of public pages.
- Put link-matching status only in internal docs or CSV files.
- Public copy should help the buyer decide: capacity, space, door swing, energy use, warranty, delivery, and return condition.
- Review-proof cards must become six useful recommendations, not weak text such as "there are many reviews".
- Product images and visual cards should link to Shopee search or the exact affiliate link when available.
- Large refrigerators need stronger delivery and measurement cautions than small models.

## Next Data Rounds

1. Add Power Buy refrigerator listing and filter by review count.
2. Add official brand pages for Samsung, LG, Toshiba, Hitachi, Mitsubishi, Haier, Sharp, Hisense, TCL, and Electrolux.
3. Match exact Shopee links for each queued model.
4. Replace search links with affiliate links after the user verifies the product page.
5. Add real product images for each model when license/source is safe and clean.
