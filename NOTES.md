# Waste Be Gone - redesign handoff

HOME PAGE ONLY (index.html). Links to Residential, Commercial, Junk Removal, Specialty Bins and Request a Quote currently go to the
existing live pages on wastebegone.ca. About and Snow Removal jump to sections on this page (#about, #snow-removal).
The inner pages were drafted and are kept separately if wanted later.

## Needs your confirmation
1. Reviews: three Google review excerpts supplied by the client are shown exactly as received (truncated by Google). The first review's
   reviewer name and date were cut off in the paste and show as "Google review". No star rating or review count is displayed. Send the
   full text, names and ratings to extend this.
   (Earlier note, superseded:) the old site's review sections were empty, so NO review
   text was shown. Reviews sections link to the Google listing you gave. NOTE that link is for a Calgary address
   (40 Sunpark Plaza SE #208), but the old site lists 28 Page Avenue, Red Deer. Confirm the right listing, or paste the
   review text/ratings and they can be added as real quotes.
2. Address 28 Page Avenue, Red Deer T4P 1J8 comes from the old Request a Quote page. Confirm.
3. Prices: only roll-off bins have published prices (10 yd $290, 15 yd $310, 20 yd $330, 30 yd $350, "from"). Front load, secure bin,
   flat deck: no price on the old site. 5 yd concrete/dirt: "call for pricing". Commercial prices not published, so not shown.
4. Old site lists bin sizes inconsistently ("4 to 20" vs "4 to 30"). Site uses the dimension table from the residential page.
5. Photos: no 15 or 30 yard photos, no snow-plow equipment photos, no junk-removal crew photos. The junk pile photo looks like a
   generic (non-Alberta) image. Replace when real photos exist. The 20 yd, 6 yd and 5 yd photos are hot-linked from the old site.

## Forms
Fields keep the original quote form (name, company, email, phone, address with city and postal, how did you hear) plus
Service and Project details. There is no server endpoint yet: submitting opens the visitor's email app addressed to
Landon@wastebegone.ca. Connect a form service (and reCAPTCHA) to make it a true submit.

## Brand
Logo is the file provided (assets/logo.png, wordmark crop in assets/logo-wordmark.png). Accent is a deeper burnt orange
(#b6410e, one CSS variable --rust) so the bright orange of the bins and logo stays the hero of the photography.
