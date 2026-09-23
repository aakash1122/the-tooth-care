/**
 * Shared by the Cloudflare Pages Function (functions/whatsapp.ts) and the
 * Astro dev-server shim (integrations/whatsapp-dev-redirect.mjs).
 * Keep this file free of Node, DOM and Astro imports.
 */

/** Pre-filled opening messages, keyed by the `intent` query parameter. */
export const whatsAppMessages = {
  appointment: "Hello, I found your website and would like to ask about an appointment.",
  question: "Hello, I have a question about a treatment.",
} as const;

export type WhatsAppIntent = keyof typeof whatsAppMessages;

export const defaultIntent: WhatsAppIntent = "appointment";

/** Site-relative link every WhatsApp button points at. */
export function whatsAppPath(intent: WhatsAppIntent = defaultIntent): string {
  return intent === defaultIntent ? "/whatsapp" : `/whatsapp?intent=${intent}`;
}

/** Accepts a number in any common written form, returns digits only, or null. */
export function normaliseWhatsAppNumber(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  // Bangladeshi mobile numbers are 13 digits with the country code (8801XXXXXXXXX).
  // Accept the local 01XXXXXXXXX form too and add the country code.
  if (/^01\d{9}$/.test(digits)) return `88${digits}`;
  if (/^8801\d{9}$/.test(digits)) return digits;
  return null;
}

export function buildWhatsAppUrl(number: string, intentParam: string | null): string {
  const intent: WhatsAppIntent =
    intentParam && intentParam in whatsAppMessages
      ? (intentParam as WhatsAppIntent)
      : defaultIntent;
  const url = new URL(`https://wa.me/${number}`);
  url.searchParams.set("text", whatsAppMessages[intent]);
  return url.toString();
}
