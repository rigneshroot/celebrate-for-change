import fs from "node:fs/promises";
import { charities } from "../data/charities.ts";
const links = [...new Set(charities.flatMap((c) => [c.url, c.source]))];
const results = await Promise.all(
  links.map(async (url) => {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(25000) });
      const html = await response.text();
      return {
        url,
        status: response.status,
        finalUrl: response.url,
        title: html
          .match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
          ?.replace(/\s+/g, " ")
          .slice(0, 180),
        bytes: Buffer.byteLength(html),
      };
    } catch (error) {
      return { url, error: error.message };
    }
  }),
);
await fs.writeFile(
  "review/link-checks.json",
  JSON.stringify(
    {
      checkedOn: "2026-10-21",
      method:
        "Read-only HTTP GET; no payments or forms submitted. A successful response is not proof of a working payment flow.",
      results,
    },
    null,
    2,
  ),
);
console.log(results);
