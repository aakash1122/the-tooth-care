import { buildWhatsAppUrl, normaliseWhatsAppNumber } from "../src/lib/whatsapp";

interface Env {
  /** KV namespace bound in wrangler.jsonc and in the Pages project settings. */
  SETTINGS?: KVNamespace;
  /** Build-time fallback, used only when the KV key is missing or invalid. */
  WHATSAPP_NUMBER?: string;
}

/** KV key that holds the current WhatsApp number. Edit it in the Cloudflare dashboard or with `pnpm whatsapp:set`. */
export const WHATSAPP_NUMBER_KEY = "whatsapp_number";

/**
 * GET /whatsapp[?intent=appointment|question]
 * Redirects to wa.me with the current number and a pre-filled message.
 * The number lives in KV so the clinic can change it without a redeploy.
 */
export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const fromKv = env.SETTINGS ? await env.SETTINGS.get(WHATSAPP_NUMBER_KEY) : null;
  const number = normaliseWhatsAppNumber(fromKv) ?? normaliseWhatsAppNumber(env.WHATSAPP_NUMBER);

  if (!number) {
    return new Response("WhatsApp number is not configured.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const intent = new URL(request.url).searchParams.get("intent");
  return Response.redirect(buildWhatsAppUrl(number, intent), 302);
};
