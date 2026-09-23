# The Tooth Care by Dr. Uzzal

Website for a two-chamber dental practice in Bashundhara and Nadda, Dhaka.
Product truth lives in `PRODUCT.md`, the visual system in `DESIGN.md`.

## Stack

- Astro, static output (`pnpm build` writes `dist/`).
- Cloudflare Pages hosts the static files and runs one Pages Function, `functions/whatsapp.ts`.
- Fonts are self-hosted from `public/fonts/` (latin subsets, see `src/styles/fonts.css`).

## Commands

```sh
pnpm install
pnpm dev        # Astro dev server; /whatsapp is answered by integrations/whatsapp-dev-redirect.mjs
pnpm build      # static build into dist/
pnpm preview    # serves dist/ with wrangler, including the real Pages Function and local KV
pnpm check      # Astro and TypeScript diagnostics for the site
pnpm typecheck  # TypeScript diagnostics for the Pages Function
pnpm lint       # prettier --check
```

## WhatsApp number without a redeploy

Every "Message us on WhatsApp" link points at `/whatsapp`, not at a wa.me URL.
The Pages Function reads the number from the `whatsapp_number` key in the `SETTINGS` KV namespace and redirects to WhatsApp with a pre-filled message.
If the key is missing or not a valid Bangladeshi mobile number, it falls back to `WHATSAPP_NUMBER` in `wrangler.jsonc`.

One-time setup:

1. `pnpm wrangler kv namespace create SETTINGS` and paste the returned id into `wrangler.jsonc`.
2. In the Cloudflare Pages project, add the same namespace under Settings > Bindings with the variable name `SETTINGS`.

Changing the number, any time, takes effect within seconds:

```sh
pnpm whatsapp:set 01778-128427            # production KV
pnpm whatsapp:set 01778-128427 --local    # local preview only
```

The number can also be edited in the Cloudflare dashboard under Workers & Pages > KV > SETTINGS > `whatsapp_number`.

Optional pre-filled messages are chosen with `?intent=appointment` (default) or `?intent=question`; the texts live in `src/lib/whatsapp.ts`.

## Deploying

Connect the repository to Cloudflare Pages with build command `pnpm build` and output directory `dist`.
Pages picks up `functions/`, `public/_headers`, and `wrangler.jsonc` automatically.
Set the production domain in `astro.config.mjs` (`site`) before the first deploy so canonical URLs are correct.

## Layout of the source

- `src/data/clinic.ts` - branch addresses, phones, hours, treatments, review fragments.
- `src/layouts/Base.astro` - document head, header, footer, sticky contact strip, page script.
- `src/components/` - `Photo.astro` renders a labelled stand-in until real photographs arrive.
- `src/styles/global.css` - design tokens and shared structure from `DESIGN.md`.
- `prototype/` - the single-file prototypes the design was chosen from; kept as evidence, not deployed.

Facts still waiting on the clinic are marked in the page with the brass `.todo` class.
