---
name: The Tooth Care by Dr. Uzzal
description: A near-white private practice page. Light display serif, hairline rules, navy used with discipline, brass for numerals and quotes.
colors:
  ground: "#F7F7F4"
  panel: "#FFFFFF"
  ink: "#0F1B2E"
  ink-soft: "#4A5670"
  navy: "#1B3A6B"
  navy-deep: "#12294F"
  rule: "#D4DBE6"
  rule-soft: "#E6EAF0"
  brass: "#7A6338"
  tint: "#EDF1F7"
  ink-on-navy-soft: "#C9D6EC"
typography:
  display:
    fontFamily: "Libre Caslon Display, Times New Roman, serif"
    fontSize: "clamp(40px, 5.6vw, 72px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Libre Caslon Display, Times New Roman, serif"
    fontSize: "clamp(30px, 3.6vw, 44px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title-serif:
    fontFamily: "Libre Caslon Display, Times New Roman, serif"
    fontSize: "clamp(26px, 2.8vw, 34px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  quote:
    fontFamily: "Libre Caslon Display, Times New Roman, serif"
    fontSize: "clamp(22px, 2.2vw, 28px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  numeral:
    fontFamily: "Libre Caslon Display, Times New Roman, serif"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  body-lead:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.7vw, 21px)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-small:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  action:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.005em"
rounded:
  none: "0px"
  label: "3px"
  button: "4px"
  photo: "6px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  base: "16px"
  rule-gap: "22px"
  lg: "28px"
  xl: "36px"
  column: "48px"
  hero-column: "64px"
  gutter: "clamp(20px, 5vw, 64px)"
  section: "clamp(48px, 7vw, 96px)"
  section-head: "clamp(28px, 4vw, 48px)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.panel}"
    typography: "{typography.action}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.panel}"
  button-primary-on-navy:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.navy}"
    typography: "{typography.action}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "52px"
  button-primary-on-navy-hover:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.navy}"
  button-quiet:
    textColor: "{colors.navy}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 6px"
    height: "40px"
  button-call-outline:
    textColor: "{colors.navy}"
    typography: "{typography.action}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "50px"
  index-row:
    textColor: "{colors.ink}"
    padding: "18px 0"
  ledger-row:
    textColor: "{colors.ink}"
    padding: "30px 0"
  quote-column:
    textColor: "{colors.ink}"
    typography: "{typography.quote}"
    padding: "22px 0 0"
  chamber-block:
    textColor: "{colors.ink}"
    padding: "22px 0 0"
  closing-panel:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.panel}"
    padding: "clamp(48px, 7vw, 96px) 0"
  photo-frame:
    rounded: "{rounded.photo}"
  header:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.navy}"
    height: "68px"
---

# Design System: The Tooth Care by Dr. Uzzal

## Overview

**Creative North Star: "The Private Practice"**

Confidence through restraint.
The page reads as a high-end dental practice at a glance: a near-white ground, one large photograph, a light display serif for headings, hairline rules that divide instead of boxes that contain, and the logo navy spent only on actions and emphasis rules.
It refuses both the crafty warm-clinic look and the loud blue-gradient chain.

Structure is typographic and ruled, not carded.
Every section is a hairline-topped band on the same ground; inside, content sits in two-column grids (5/7, 6/6, 1/1) that collapse to one column on phones.
Lists are ledgers and indexes: a numbered first-visit ledger, a two-column treatments index, three quote columns, two chamber blocks.
Nothing floats, nothing is tiled, nothing carries an icon except the logo tooth and the WhatsApp mark inside the primary button.

Warmth comes from the serif, the brass numerals and quote rules, and warm-graded photography, not from colour or ornament.
Motion is a single authored entrance (hero copy rises, hero photo unveils from a clipped bottom edge) plus one settle on the ledger; everything else is a 200ms state change.
The register is premium and modern, not homely; the copy is plain clinic language and the visuals never shout over it.

**Key Characteristics:**
- Near-white ground with a single white-on-navy closing panel; no other tonal blocks.
- Hairline rules (1px) structure the page; 2px rules mark emphasis (brass on quotes, navy on chambers).
- No cards, no icon tiles, no drop shadows on surfaces; the only shadow is a soft navy cast under the primary button.
- Light display serif (weight 400) for every heading, numeral, and quote; a grotesk for everything read.
- Navy is disciplined: primary button, links, section emphasis rules, focus ring, selection, scrollbar, closing panel.
- Brass is rare and owns exactly three things: step numerals, quote rules, and unconfirmed-fact markers.
- One entrance animation, exponential ease-out, fully disabled under prefers-reduced-motion.

## Colors

A near-white ground carrying two inks and one navy, with brass as a rare warm counterpoint; the palette is quiet enough that the photograph is the most colourful thing on the page.

### Primary
- **Logo Navy** (`{colors.navy}`): the practice's blue, kept recognisable against signage and the Facebook page.
  Owns primary actions (WhatsApp button), all text links, the 2px chamber rules, the focus outline, text selection, the scrollbar thumb, the logo mark, and the full-bleed closing panel.
- **Navy Deep** (`{colors.navy-deep}`): primary button hover only.
- **Navy Tint** (`{colors.tint}`): hover fill for the white-on-navy button in the closing panel.
- **Soft Text on Navy** (`{colors.ink-on-navy-soft}`): body copy inside the navy closing panel where pure white would be too loud.

### Tertiary
- **Brass** (`{colors.brass}`): a muted old-gold that never fills an area.
  Used as the display-serif step numerals in the first-visit ledger and the 2px rule above each patient quote.
  The build also uses it, italicised, for unconfirmed-fact markers; that use is temporary and leaves with the facts (see Do's and Don'ts).

### Neutral
- **Ground** (`{colors.ground}`): the page background, warm off-white; also the sticky header and phone bar at 90 to 92 percent opacity over a backdrop blur.
- **Panel** (`{colors.panel}`): pure white, used for text on navy, the inverted button in the closing panel, and the translucent photo label.
  It is not a card colour; there are no white cards on the ground.
- **Ink** (`{colors.ink}`): headings, body copy, addresses, phone numbers, index titles.
- **Ink Soft** (`{colors.ink-soft}`): section lead-ins, descriptions, roles, landmarks, captions, footer text, the italic "By Dr. Uzzal" line.
- **Rule** (`{colors.rule}`): every 1px hairline: header bottom, section tops, ledger rows, index rows, associates divider, footer fine-print divider, quiet-button underline, phone bar top.
- **Rule Soft** (`{colors.rule-soft}`): declared in the token set for lighter interior dividers; the home page does not yet consume it.

### Named Rules
**The Disciplined Navy Rule.** Navy fills exactly two things: the primary button and the closing panel. Everywhere else it is a line, an outline, or a word.
**The Brass Is Never a Fill Rule.** Brass appears only as a numeral, a 2px rule, or italic marker text; it never colours a surface, a button, or a heading.
**The Ground Is the Only Surface Rule.** Sections are bands of the same ground separated by hairlines; a different background appears only in the navy closing panel and inside photo frames.

## Typography

**Display Font:** Libre Caslon Display (with Times New Roman, serif)
**Body Font:** Schibsted Grotesk (with Helvetica Neue, Arial, sans-serif)

**Character:** A light, high-contrast display serif at a single weight (400) set tight and large against a plain, slightly wide grotesk at 17px.
The serif carries every heading, numeral, and quote; the grotesk carries everything meant to be read quickly.
Phone numbers use tabular numerals.
Headings use `text-wrap: balance`.

### Hierarchy
- **Display** (400, `clamp(40px, 5.6vw, 72px)`, 1.02, -0.015em): the hero headline only, capped at 12ch.
- **Headline** (400, `clamp(30px, 3.6vw, 44px)`, 1.1, -0.01em): section headings, and the closing-panel heading in white capped at 18ch.
- **Title Serif** (400, `clamp(26px, 2.8vw, 34px)`, 1.15): named-person and named-place headings (the dentist's name; chamber names at a fixed 30px).
- **Quote** (400, `clamp(22px, 2.2vw, 28px)`, 1.3, -0.005em): patient quotes, set in the serif in ink.
- **Numeral** (400, 34px, 1, brass): the step numbers in the ledger.
- **Title** (600, 21px, 1.3, -0.005em): sans-serif step titles; index titles use the same weight at 18px.
- **Body Lead** (400, `clamp(18px, 1.7vw, 21px)`, 1.5, ink-soft): the single factual hero sentence, capped at 26em.
- **Body** (400, 17px, 1.6): all running text, capped at 36em in descriptions and bios.
- **Body Small** (400, 15.5px, 1.5): roles, landmarks, chamber detail lists, index descriptions (15px), footer and quote attributions (14.5px, caption).
- **Action** (600, 16px, 0.005em): button and quiet-link labels.

### Named Rules
**The One Weight Serif Rule.** The display serif is used only at weight 400. Emphasis comes from size and colour, never from a bolder serif.
**The 36em Measure Rule.** Descriptive paragraphs are capped at 36em; the hero sentence at 26em; the hero headline at 12ch.
**The No Kicker Rule.** Sections open with the serif heading itself. There are no eyebrows, overlines, or small-caps labels above headings.

## Layout

A single centred column, max 1240px, with a fluid gutter of `clamp(20px, 5vw, 64px)`.
Sections are full-width bands with a 1px top hairline and vertical padding of `clamp(48px, 7vw, 96px)`; the hero omits its top rule and uses slightly shorter padding (`clamp(40px, 7vw, 96px)` top, `clamp(36px, 6vw, 80px)` bottom).

Two breakpoints.
At 720px the treatments index, chamber blocks, and footer split into two (footer: three) columns with a 48px column gap.
At 900px the header phone links appear, the hero and team go two-column (hero 6/6 with a 64px gap; team 5/7 with 64px), section heads go 5/7 with 48px, the quote columns go three-up with 40px, the ledger rows gain a third column (96px / 4fr / 7fr), and the fixed phone bar is removed.
Below 900px everything stacks at 28 to 36px gaps, the ledger runs 56px / 1fr, and the footer carries 120px bottom padding to clear the fixed bar.

The section head is itself a two-column grid: serif heading left, one ink-soft sentence right, aligned to the baseline end, with `clamp(28px, 4vw, 48px)` below it.
Inside components the rhythm is 14px between grouped lines, 16px between paragraphs, 22px from an emphasis rule to its content, 24 to 30px of row padding in ledgers.

The header is sticky, 68px tall, on a 90 percent ground with an 8px backdrop blur and a hairline below.
On phones a fixed bottom bar (WhatsApp primary plus an outlined Call button) sits on a 92 percent ground with a 10px blur and a hairline above, honouring safe-area insets; it is hidden while the hero's primary button is in view and slides in (380ms) once the button scrolls out.

## Elevation & Depth

Flat by doctrine.
Depth is conveyed by hairlines and by the one tonal inversion of the navy closing panel; surfaces themselves never lift.
The single exception is the primary navy button, which carries a soft, navy-tinted cast shadow that deepens and lifts 1px on hover, and which drops that shadow entirely when it sits inverted on the navy panel.
The sticky header and phone bar use translucency plus backdrop blur instead of shadow to separate from content scrolling beneath them.
Photo frames get depth from a subtle multiplied grain overlay, not from borders or shadows.

### Shadow Vocabulary
- **Action cast** (`box-shadow: 0 8px 20px -12px rgba(27, 58, 107, 0.6)`): resting primary button on the ground.
- **Action cast, hover** (`box-shadow: 0 12px 24px -12px rgba(27, 58, 107, 0.65)`): primary button hover, paired with `translateY(-1px)`.

### Named Rules
**The Only the Button Casts Rule.** The primary button is the only element with a box-shadow. Containers, photos, headers, and bars never cast.
**The Hairline Over Box Rule.** When two things need separating, draw a 1px rule between them; do not wrap either in a bordered or shaded container.

## Shapes

Rectilinear with barely softened corners.
Buttons take a 4px radius; photo frames 6px; the translucent photo caption 3px; quiet links and all rules are square.
There are no pills, no circles, and no bordered boxes.
Rules come in two weights: 1px in `{colors.rule}` for structure, 2px in brass (quotes) or navy (chambers) for emphasis, always on the top edge of the block they introduce.
Photo frames are fixed-ratio: 1:1 in the hero on desktop, 4:5 for portraits and the hero on phones, 16:8 for chamber door photos.
The only icons are two inline stroke SVGs (the tooth logo at 34px and the WhatsApp mark at 20px inside the primary button), both drawn at 2 to 2.2px stroke in currentColor.

## Components

Refined and restrained: things read as text with rules around them, and the only object with mass is the primary button.

### Buttons
- **Shape:** barely softened rectangle (4px), 52px min-height, inline-flex with a 10px gap for an optional 20px stroke icon.
- **Primary:** navy fill, white 16px semibold text, 0 24px padding, soft navy cast shadow. Hover: navy-deep fill, lifts 1px, deeper cast. Active: returns to rest.
- **Primary on navy:** inside the closing panel the same button inverts to white fill with navy text and no shadow; hover fills with tint.
- **Quiet:** navy text with a 1px rule-coloured underline, 0 6px padding, 40px min-height, square corners. Hover: the underline turns navy. On navy it turns white with a 40 percent white underline that goes solid on hover.
- **Call outline (phone bar only):** 1.5px navy border, navy text, 4px radius, 50px min-height.
- **Focus:** 2px solid navy outline offset 4px, for every focusable element on the page.
- **Transitions:** background, colour, transform, and shadow at 200ms on the exponential ease-out.

### Links
- Navy text with no underline at rest in running copy; in indexes and link rows a 1px rule-coloured underline that turns navy on hover.
- Footer links are ink with a transparent underline that turns ink on hover.
- Phone links use tabular numerals and are 600 weight.

### Navigation
- **Header:** sticky, 68px, 90 percent ground with 8px blur, hairline below. Left: the logo (34px navy stroke tooth, serif wordmark at 21px, italic 13px ink-soft byline). Right, from 900px: both chamber phone numbers as ink semibold links with ink-soft area labels.
- **Phone bar:** fixed bottom, from 0 to 899px only. Grid of primary WhatsApp button plus outlined Call button, 10px gap, 92 percent ground with 10px blur, hairline above. Hidden by translate and fade while the hero button is on screen.
- **Skip link:** navy fill, white text, revealed on focus at top-left.

### Ledger (numbered steps)
Hairline-topped ordered list, one hairline between each row.
Each row: brass serif numeral (34px) in a fixed first column (56px on phones, 96px on desktop), then a 21px semibold sans title, then an ink-soft description capped at 36em.
On desktop the title and description sit side by side (4fr / 7fr); on phones they stack under the numeral.
The whole list settles in once (16px rise, 700ms) when it enters the viewport.

### Index (treatments)
Hairline-topped grid of link rows, one column below 720px, two above with a 48px column gap.
Each row: ink semibold title (18px) left, ink-soft description (15px) right-aligned on the same baseline, 18px vertical padding, hairline below.
Hover slides the row 8px right over 240ms; nothing else changes.
A closing ink-soft note with an underlined navy link follows the index.

### Quote columns
Three columns from 900px (40px gap), stacked at 28px below.
Each opens with a 2px brass top rule and 22px of air, then the quote in the display serif in ink, then a 16px gap to a 14.5px attribution: ink semibold name over an ink-soft italic source line.
No quotation card, no avatar, no stars, no rating figures.

### Chamber block
Two columns from 720px (48px gap), stacked at 28px below.
Each opens with a 2px navy top rule and 22px of air, then: serif chamber name (30px), address in ink, ink-soft landmark sentence, a two-column definition list (88px label column, 15.5px, ink-soft labels, semibold phone link), a 16:8 door photo frame, and a row of underlined links with a 22px gap.

### Photo frame
6px radius, overflow hidden, fixed aspect ratio (1:1, 4:5, or 16:8).
A multiplied fractal-noise grain overlay sits over the image.
Photography is warm-graded and candid; the doctor and conversation are the subject.
In the prototype every frame is a labelled stand-in (warm putty gradient plus a translucent "Photo to supply" caption); the caption and gradient are not part of the system.

### Closing panel
A full-bleed navy section carrying the only inverted colour on the page: white serif heading (capped at 18ch), soft blue-white body copy (capped at 36em), then the inverted white button and a white quiet link.

### Footer
Three ink-soft columns from 720px (chamber, chamber, elsewhere), each a semibold ink label over 14.5px lines and ink links.
A full-width fine-print line follows above a hairline.

## Do's and Don'ts

### Do:
- **Do** open every section with a 1px `{colors.rule}` top hairline and `clamp(48px, 7vw, 96px)` of vertical padding on the shared ground.
- **Do** set every heading, numeral, and quote in Libre Caslon Display at weight 400; set everything else in Schibsted Grotesk.
- **Do** reserve navy fills for the primary button and the closing panel, and spend navy elsewhere only as lines, outlines, text, focus, and selection.
- **Do** mark emphasis with a 2px top rule: brass for patient words, navy for places.
- **Do** cap running text at 36em, the hero sentence at 26em, and the hero headline at 12ch.
- **Do** ship exactly one entrance moment per page (hero rise plus photo unveil) and, at most, one settle on a list, all on `cubic-bezier(0.16, 1, 0.3, 1)` and all removed under `prefers-reduced-motion: reduce`.
- **Do** keep the 2px navy focus outline at 4px offset on every focusable element, and navy-on-white text selection.
- **Do** draw icons, when unavoidable, as inline stroke SVGs in currentColor at 2 to 2.2px; the page has two (logo tooth, WhatsApp mark).
- **Do** hold photos in 6px frames at fixed ratios (1:1 hero on desktop, 4:5 portraits, 16:8 doors) with warm grading and candid subjects.

### Don't:
- **Don't** put content in cards, tiles, or bordered boxes; separate with hairlines instead.
- **Don't** add box-shadows to anything but the primary button; surfaces, photos, headers, and bars stay flat.
- **Don't** add kickers, eyebrows, overlines, or uppercase labels above headings.
- **Don't** fill any area with brass or use brass on headings or buttons.
- **Don't** use the display serif at any weight other than 400, or set body copy in it.
- **Don't** introduce a third background colour beyond the ground and the navy closing panel.
- **Don't** show star ratings, review counts, or rating figures anywhere; quotes carry a name and a source line only.
- **Don't** treat the prototype's stand-ins as final: the putty gradient photo fields, the "Photo to supply" captions, the brass italic "to confirm" markers, and the inline tooth logo are all placeholders that leave when the real logo, photographs, degrees, BMDC number, opening time, reviewer names, and associate names arrive.
- **Don't** carry the Google Fonts `<link>` into the Astro build; the fonts are owed as self-hosted subsets.
