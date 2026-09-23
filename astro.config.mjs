// @ts-check
import { defineConfig } from "astro/config";
import { whatsAppDevRedirect } from "./integrations/whatsapp-dev-redirect.mjs";

// Static output. The only runtime piece is the Cloudflare Pages Function in
// functions/whatsapp.ts, which Pages picks up from the repo without an adapter.
export default defineConfig({
  site: "https://thetoothcare.com.bd",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
    inlineStylesheets: "auto",
  },
  integrations: [whatsAppDevRedirect()],
});
