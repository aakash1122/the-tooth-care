#!/usr/bin/env node
// Usage: pnpm whatsapp:set 01778128427 [--local]
// Writes the number to the SETTINGS KV namespace. Takes effect within seconds, no redeploy.
import { spawnSync } from "node:child_process";
import { normaliseWhatsAppNumber } from "../src/lib/whatsapp.ts";

const [rawNumber, ...flags] = process.argv.slice(2);
const number = normaliseWhatsAppNumber(rawNumber);

if (!number) {
  console.error("Give a Bangladeshi mobile number, for example: pnpm whatsapp:set 01778-128427");
  process.exit(1);
}

const local = flags.includes("--local");
const args = ["wrangler", "kv", "key", "put", "--binding", "SETTINGS", "whatsapp_number", number];
args.push(local ? "--local" : "--remote");

const result = spawnSync("pnpm", args, { stdio: "inherit" });
if (result.status !== 0) process.exit(result.status ?? 1);
console.log(`WhatsApp number set to +${number}${local ? " (local preview only)" : ""}.`);
