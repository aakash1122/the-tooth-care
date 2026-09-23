---
target: home page (src/pages/index.astro)
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-09-23T16-31-16Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review sub-agent · B: detector sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nothing says what happens after tapping the WhatsApp button; "we reply during chamber hours" only appears in the closing panel |
| 2 | Match System / Real World | 3 | Chamber, OPG, landmarks, "till 11 PM" are right; "until 11 PM" without an opening time reads as half a sentence |
| 3 | User Control and Freedom | 2 | Nine internal destinations 404 (/first-visit, /services, 8 treatment pages, 2 chamber pages) |
| 4 | Consistency and Standards | 3 | Three visual treatments for tel links; PRODUCT.md says "Message Dr. Uzzal", page says "Message us on WhatsApp" |
| 5 | Error Prevention | 3 | Every Call button dials Bashundhara without saying so |
| 6 | Recognition Rather Than Recall | 2 | Sticky bar says only "Call"; closing panel says "call either chamber" then shows one number |
| 7 | Flexibility and Efficiency | n/a | Persuade surface; sticky bar covers the "just the number" case |
| 8 | Aesthetic and Minimalist Design | 4 | One accent, one panel, no cards, no icons |
| 9 | Error Recovery | 1 | Dead ends with no 404 page in the project |
| 10 | Help and Documentation | n/a | The first-visit ledger is the help content, inline |
| **Total** | | **21/32** | **Fair** |

## Design Specificity Verdict

**LLM assessment.** Authored, not interchangeable, but the authorship sits in the system rather than the words. Single-weight Caslon, hairline ledgers instead of cards, brass numerals, one navy panel: a real point of view that does not look like a dental template. The copy layer is the interchangeable part. "Dental care in Bashundhara and Nadda" plus "General and cosmetic dentistry led by Dr. Orko Uzzal" is a Google Business Profile line in a nice serif. Only step 1 ("If you are anxious or had a bad experience elsewhere, tell us; it changes how we work") and the three quotes could not appear on another clinic's site. With the photo missing, the fold reads closer to a boutique law practice than a dentist; the photo will fix that, the copy will not fix itself.

**Deterministic scan.** Static scan of `src/` is clean, with or without the project ignore list. URL scans could not run (puppeteer not installed). In-browser scan at 1920px found 6 items: 2 cramped-padding on the WhatsApp buttons (false positive: height comes from min-height 52px, not padding), 2 heading-rhythm on the step h3s (false positive: the ledger is a three-column grid, the rule assumes vertical flow), and 2 real line-length findings: the treatments note in `src/pages/index.astro` (~131 chars) and the footer fine print in `src/components/SiteFooter.astro` (~153 chars), both lacking a max-width.

**Visual overlays.** Overlays are visible in the [Human] tab in Chrome at http://localhost:4321/ marking those 6 elements; reloading clears them. The dev server has since been stopped, so the tab will not reload.

## Overall Impression

The page looks like the practice the owner described: premium, calm, adult. It does not yet persuade. The most convincing sentences are two screens down and fade in, every "more" link is a dead end, and the one named person the whole site is about gets a byline while two neighbourhood names get the 72px serif. Biggest opportunity: move one line of reassurance into the hero and make every link land somewhere.

## What's Working

- **The first-visit ledger.** Numbered, plain, cost disclosure baked into step 2, "a consultation on its own is a normal visit" in step 3. No other Dhaka dental site does this.
- **System discipline.** Navy fills exactly two things, brass owns numerals and quote rules, hairlines instead of cards. `global.css` reads as one hand. The quiet call link beside the filled WhatsApp button is a correct primary/secondary split.
- **The mobile contact strip.** Hidden while the hero button is on screen, slides in after, footer padded to clear it. Correct and restrained.

## Priority Issues

- **[P0] Nine internal links 404.** `/first-visit`, `/services`, eight `/services/*`, two `/locations/*`; `src/pages` has only `index.astro` and there is no 404 page. The treatments section promises pages that explain visits and cost, then dead-ends. **Why:** a comparing parent who clicks "Root canal treatment" leaves. **Fix:** ship the pages as minimal stubs from `src/data/clinic.ts`, or drop the hrefs until they exist, and add `404.astro` with both numbers and the WhatsApp button. Command: `/impeccable shape services` then `/impeccable harden`.
- **[P1] The reassurance is buried and animated away.** "Tell us; it changes how we work", "with the cost range for each option", and "no longer afraid" are all below the fold; the ledger is wrapped in `.reveal` with a 2000ms fallback, so a fast scroll on a slow phone shows blank space. **Fix:** replace "Open every day until 11 PM" in the hero promise with one reassurance sentence (hours already live in the header and chambers), e.g. "We explain what we find, with the cost of each option, before anything is done." Drop `.reveal` from the ledger or cut the fallback to about 600ms. Command: `/impeccable clarify`.
- **[P1] Every Call button dials Bashundhara without saying so.** Hero, closing panel, and sticky bar all use the primary branch; labels are "Call 01778-128427" or "Call". A Nadda visitor calls the wrong chamber. **Fix:** name the chamber in every call label; show both numbers in the closing panel since the copy says "call either chamber"; give the sticky "Call" an aria-label naming the chamber. Command: `/impeccable clarify`.
- **[P2] Treatments index is 13 items at one decision point.** Eight rows, "All treatments", and four more in the note, with descriptors of mixed kind (outcome, material, process). **Fix:** group into three short ledgers (Repair / Straighten and whiten / Diagnosis) or cut to the four treatments the reels audience arrives for; normalise descriptors to what each fixes. Command: `/impeccable distill`.
- **[P2] Chambers block splits facts from actions.** The door photo sits between the Phone/Hours/Parking list and the map link, about 200px apart on mobile. **Fix:** order heading, address, landmark, photo, facts, links; or put the map link in the facts list. Command: `/impeccable layout`.
- **[P3] The h1 is a location line the header already states.** Within the owner's rules (short, plain, no slogan, "we" voice): lead with the person, e.g. "Dr. Uzzal's dental practice, Bashundhara and Nadda", and let the promise sentence carry the reassurance. Command: `/impeccable clarify`.

## Persona Red Flags

**Anxious first-time patient on a phone.** Sees h1, "General and cosmetic dentistry", a navy button, a beige box. Nothing addresses fear until step 1, two screens down, which fades in. The hero's pre-filled WhatsApp text commits her to "an appointment" when she may only want to ask; the `question` intent exists but only the closing panel uses it.

**Parent comparing clinics.** Wants who treats, credentials, price signal, children. Gets unnamed associates (known gap), cost promised only on pages that 404, no mention of children or families anywhere despite being a named segment in PRODUCT.md, and two chambers presented as identical with no reason to pick one.

**Returning patient who wants the number.** Fine on desktop (both numbers labelled in the header). On mobile the header shows only the logo, the first number has no chamber label, the Nadda number is five screens down, and the sticky "Call" rings Bashundhara.

## Minor Observations

- Two real line-length hits: `.note` in the treatments section and `.fine` in the footer need a max-width (36em fits the system).
- `.index a:hover` translates the row 8px, pulling the right-aligned descriptor out of column alignment; a rule-darkening hover fits the system better.
- Hero photo is 1:1 on desktop and 4:5 on mobile; pin one crop in the photographer brief.
- Hero promise breaks "Dr. / Orko Uzzal." across lines at 390px.
- "Cash, cards, and mobile payments accepted" is useful and appears only in the footer.
- Six sections share the same rule + 5/7 heading rhythm; one break in cadence (the quotes section dropping its lead-in) would help.
- Meta title is 88 characters; trim under 60.
- Stand-ins (photos, logo, reviewer names, degrees, BMDC number, opening time, parking type) are known gaps, counted once.

## Questions to Consider

- If the h1 and the tooth mark were removed, would anything at the fold say "dentist"? What is the one dental thing the fold could own without becoming the blue-gradient chain?
- The whole practice is one named person. Why is his name a 13px byline and a mid-sentence mention while two neighbourhood names get the 72px serif?
- What does a nervous patient need to read in the three seconds before tapping "Message us on WhatsApp", and where on this page does that sentence live today?
