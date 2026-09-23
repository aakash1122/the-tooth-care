// @ts-check
/**
 * `astro dev` serves no Pages Functions, so this shim answers /whatsapp during
 * local development with the fallback number from wrangler.jsonc.
 * Production and `pnpm preview` use functions/whatsapp.ts instead.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/** @returns {import("astro").AstroIntegration} */
export function whatsAppDevRedirect() {
  return {
    name: "whatsapp-dev-redirect",
    hooks: {
      "astro:server:setup": async ({ server }) => {
        const { buildWhatsAppUrl, normaliseWhatsAppNumber } =
          await import("../src/lib/whatsapp.ts");
        const number = normaliseWhatsAppNumber(readFallbackNumber());
        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url ?? "/", "http://localhost");
          if (url.pathname !== "/whatsapp") return next();
          if (!number) {
            res.statusCode = 503;
            res.end("WHATSAPP_NUMBER is missing from wrangler.jsonc");
            return;
          }
          res.statusCode = 302;
          res.setHeader("Location", buildWhatsAppUrl(number, url.searchParams.get("intent")));
          res.end();
        });
      },
    },
  };
}

function readFallbackNumber() {
  const path = fileURLToPath(new URL("../wrangler.jsonc", import.meta.url));
  const source = readFileSync(path, "utf8");
  const match = source.match(/"WHATSAPP_NUMBER"\s*:\s*"([^"]+)"/);
  return match ? match[1] : null;
}
