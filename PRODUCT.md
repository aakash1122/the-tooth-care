# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static output, deployed to Cloudflare Pages.
Chosen by the owner on 2026-09-23 for zero client JS on content pages, built-in i18n routing for the Bangla pages, and image optimisation.
One runtime exception is required: the WhatsApp number must be changeable at any time without redeploying the site.
Every "Message Dr. Uzzal" link must therefore resolve through a small edge endpoint (Cloudflare Pages Function or Worker) that reads the current number from a dashboard-editable store such as KV or an environment variable, rather than hard-coding the number in the static HTML.

## Users

Primary: people in Dhaka choosing a dentist who want to be treated as a person by one named doctor they can return to for years.
Five confirmed segments, from docs/brand-brief.md section 3:

1. People burned by a rushed, painful, or upselling experience at a commercial chain.
2. Nervous patients and people who have avoided the dentist for years. Dental phobia appears repeatedly in reviews.
3. Families who want one dentist for everyone, long term.
4. Expats in Bashundhara and Baridhara who need an English-speaking dentist and are wary of being treated as a foreigner with a wallet.
5. Cosmetic patients who found the clinic through Facebook reels and want an honest answer about what will and will not work.

Situation: most visitors arrive on a phone, from Google Maps, Facebook, or a friend's recommendation, and their job is to decide whether to message or call this specific dentist.

## Product Purpose

A marketing and information website for The Tooth Care by Dr. Uzzal, a two-branch dental practice in Dhaka led by Dr. Orko Uzzal.
It exists so that a first-time visitor feels they already know Dr. Uzzal a little before walking in, and so nervous or burned patients lose the fear of the unknown.
Success is a visitor sending a WhatsApp message or calling, and later becoming a long-term patient.
Booking happens by phone or WhatsApp; the site never processes bookings or payments.

## Positioning

"Your dentist for life, not a clinic for today."
The mechanism a neighbouring clinic cannot truthfully copy: a single named dentist who remembers patients, talks first and treats second, and stays their dentist for years.
Painless treatment is presented as the consequence of that trust, not as a technology claim.
Modern equipment and two branches are supporting facts and are never the lead.
Brand promise: "Cared for, not processed." Supporting words: personal, gentle, honest.

## Operating Context

- Two branches, both open daily until 11 PM. Exact opening times and any weekly off day are unconfirmed.
  - Nadda (original): Ka-40/4, Harez Sorok, Nadda Bus Stand, Pragati Sarani, Dhaka 1212.
  - Bashundhara (newer): Ground Floor, House 25 (Bank Asia Building), Avenue Road, Block A, Bashundhara R/A, Dhaka.
  - Phones (owner decision, 2026-09-23): 01778-128427 is the primary number and 01767-806366 the second. Both numbers reach both chambers, so the site never labels a number with a chamber.
- WhatsApp contact for the whole site is the primary number, 01778-128427, subject to the no-redeploy update constraint under Stack.
- Appointments are recommended and made by phone or WhatsApp.
- Payments accepted: cash, credit and debit cards, NFC mobile payments. bKash and Nagad acceptance is unconfirmed.
- Free street parking and a free parking lot.
- Team: Dr. Uzzal leads and sees every patient's treatment plan; associate dentists assist or cover under him. The site speaks as "we" for the whole team and includes a team section naming the associates. Associate names, roles, and photos are not yet supplied.
- Services: root canal treatment, dental implants, orthodontics, cosmetic dentistry, crowns and veneers (including zirconia), OPG X-ray, smile makeover, teeth whitening, scaling and polishing, gap closure, teeth jewelry.
- The clinic's existing channels are a Facebook page (facebook.com/thetoothcarebd, about 18K followers) and Google Maps listings for both branches.

## Capabilities and Constraints

Confirmed launch feature set (detail in docs/brand-brief.md section 5):

- Home page ordered as a conversation: welcome in Dr. Uzzal's words, patient reviews, how a first visit goes, services, locations, a letter from the doctor.
- Pages: a letter from Dr. Uzzal, Your first visit, Nervous about the dentist?, Meet Dr. Orko Uzzal, services overview plus one page per service (eight), patient stories, reviews grouped by theme, two location pages, FAQ with schema markup, contact.
- Direct WhatsApp "Message Dr. Uzzal" on every page, sticky on mobile, opening with a pre-filled friendly greeting.
- Service pages written as answers to patient questions, each ending with an invitation to ask first with no obligation.
- Prices shown as ranges per service (for example a low-to-high BDT range with the reason for variance). The actual figures are not yet supplied by the clinic.
- Local SEO: Dentist JSON-LD for both branches, per-branch titles.
- Performance: static, under 300 KB first load, AVIF/WebP with explicit sizes, self-hosted subset fonts, Lighthouse 95+ mobile, no cookie banner, no chat widget, lightweight analytics only.

Phase 2 (not launch): "Ask Dr. Uzzal a question" form, six-month check-up reminder opt-in, family page, international patients page, embedded reels, aftercare notes, "patient since" badges.

Bangla versions of home, first visit, services, locations, and contact are planned but were not confirmed as a launch requirement on 2026-09-23; treat as phase 2 until the owner says otherwise. When written, Bangla must read like spoken Bangla, not a translation.

Explicitly out of scope: online booking calendars, patient portals, logins, online payment, chatbots, pop-ups, promotions, discount banners, urgency copy.

Terminology: "patient stories" not "gallery"; "Message us on WhatsApp" or "Message Dr. Uzzal" not "Contact the clinic"; "Dr. Orko Uzzal" once per page, then "Dr. Uzzal".

Undecided product facts: exact opening times and off days, Dr. Uzzal's qualifications and BMDC registration number, his personal bio, price figures, associate dentists' names, bKash and Nagad acceptance, preferred domain name.

## Brand Commitments

- Name: The Tooth Care by Dr. Uzzal. Lead dentist: Dr. Orko Uzzal.
- Existing logo: "The Tooth Care" in a bold serif, a stylised blue tooth outline on the left, "By Dr. Uzzal" in a small italic serif below. Navy and mid blue are the incumbent brand colours and must remain recognisable alongside signage and the Facebook page.
- Voice (owner decision, 2026-09-23): first person plural, "we" and "you". The practice and its team speak together, with Dr. Uzzal named as the lead. Warm, unhurried, plain, honest, zero sales pressure. Small doses of friendly humour are allowed. Never "the clinic" or "our facility" as a third-person subject. This replaces the brief's earlier "I" voice; a signed letter from Dr. Uzzal may still use "I" inside its own section.
- Recommended tagline: "A dentist who knows your name." Alternatives in docs/brand-brief.md. The social-media line "Modern Dentistry, Premium Experience" is not used on the website.
- Owner's binding direction (2026-09-23): the story is personal, long-term, friend-like care led by a named dentist, not the equipment. Owner's second direction (2026-09-23): everyday visitors must recognise the site as a dental practice at a glance; distinctiveness never outranks familiarity. Owner's third direction (2026-09-23): the register is premium and modern, not homely or crafty; clean, spacious, confident, with the logo blue kept. The story stays personal care; the finish says high-end practice. Every design and copy decision must hint at this.
- Hero copy (owner decision, 2026-09-23, after the first critique): the home page headline is "Confident smiles start with better dental care." with the sentence "Trusted general and cosmetic dentistry in Bashundhara and Nadda, led by Dr. Orko Uzzal. Open every day until 11 PM." The owner supplied both lines verbatim. This is the one exception to the plain-copy, no-slogan rule; other pages keep plain headings.
- Owner's binding visual constraints volunteered in the brief: warm rather than clinical, keep the logo blue, no stock models, no surgical close-ups, one real scanned signature as the only handwriting element. Recorded here without expansion; the visual world is decided in new-work.
- Imagery: the doctor is the hero, candid over posed, real patients with consent, photos of conversation and follow-up rather than equipment.

## Evidence on Hand

- docs/brand-brief.md: full research brief dated 2026-09-23 with clinic facts, review analysis, positioning, feature set, site map, and open questions.
- Google reviews: Bashundhara 4.8 from 52 reviews, Nadda 5.0 from 6 reviews. Facebook: 100% recommend from 9 reviews. Keyword counts and recurring themes are in the brief.
- Real review themes usable as proof: painless treatment, clear explanations, sincere and gentle staff, clean modern clinic, welcoming to international patients, confidence after cosmetic work.
- Absent, must not be fabricated: patient photos and consent, named long-term patient quotes with "patient since" years, the doctor's signature scan, doctor and clinic photography, qualifications and BMDC number, price figures, associate dentist names, exact hours.
- Existing logo files are not yet in the repository.

## Product Principles

1. The relationship is the product. Lead with Dr. Uzzal the person; equipment and branch count support, never headline.
2. Remove fear of the unknown. Say exactly what happens, what it costs to talk, and that nothing starts without explanation.
3. Talk like a friend, never sell. No urgency, no booking systems, no bots; every call to action is an invitation to message a person.
4. Be honest and specific. Real reviews, real names with consent, real price ranges, plain language about discomfort.
5. Fast and light on a phone in Dhaka. Static pages, small payloads, one-thumb tap targets.

## Accessibility & Inclusion

- Primary audience is on mobile, often on slower connections; performance is an access requirement.
- English primary with a Bangla path planned; Bangla copy must be written natively, not machine-translated.
- Anxious patients are a core segment: no alarming imagery, no time pressure, calm and predictable interaction.
- Expat patients: English that does not assume local context, with landmarks and a front-door photo on location pages.
