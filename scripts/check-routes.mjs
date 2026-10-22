import fs from "node:fs/promises";
import assert from "node:assert/strict";
import { charities } from "../data/charities.ts";
const base = process.argv[2] || "http://127.0.0.1:3000";
const production = process.argv.includes("--production");
const pages = [
  "/",
  "/india",
  "/usa",
  "/uk",
  "/global",
  "/about",
  "/disclaimer",
  "/methodology",
  "/message",
];
const results = [];
for (const path of [
  ...pages,
  "/robots.txt",
  "/sitemap.xml",
  "/opengraph-image",
  "/missing-review-page",
  "/india/nonexistent",
]) {
  const response = await fetch(base + path);
  const bytes = Buffer.from(await response.arrayBuffer());
  const html = bytes.toString();
  const result = {
    path,
    status: response.status,
    bytes: bytes.length,
    type: response.headers.get("content-type"),
    robotsHeader: response.headers.get("x-robots-tag"),
  };
  if (pages.includes(path)) {
    assert.equal(response.status, 200, path);
    result.title = html.match(/<title>(.*?)<\/title>/)?.[1];
    result.canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    result.metaRobots = html.match(
      /<meta name="robots" content="([^"]+)"/,
    )?.[1];
    result.h1s = (html.match(/<h1[ >]/g) || []).length;
    result.description = html.match(
      /<meta name="description" content="([^"]+)"/,
    )?.[1];
    assert.equal(result.h1s, 1, path + " h1");
    assert.equal(
      result.canonical,
      `https://www.celebrateforchange.org${path === "/" ? "" : path}`,
    );
    assert.ok(result.title && result.description);
    assert.ok(html.includes('property="og:image"'));
    assert.ok(html.includes('name="twitter:card"'));
    if (production) {
      assert.equal(result.metaRobots, "index, follow");
      assert.equal(result.robotsHeader, null);
    } else {
      assert.equal(result.metaRobots, "noindex, nofollow");
      assert.equal(result.robotsHeader, "noindex, nofollow");
    }
    if (path === "/")
      for (const c of charities)
        assert.ok(
          html.includes(`href="${c.url}"`),
          "Missing destination " + c.id,
        );
  } else if (path.includes("nonexistent") || path.includes("missing-review")) {
    assert.equal(response.status, 404);
    assert.ok(html.includes("noindex"));
    assert.ok(html.includes("Browse organisations"));
  } else if (path === "/robots.txt") {
    assert.equal(response.status, 200);
    assert.ok(html.includes(production ? "Allow: /" : "Disallow: /"));
    result.body = html;
  } else if (path === "/sitemap.xml") {
    assert.equal(response.status, 200);
    result.urls = (html.match(/<loc>/g) || []).length;
    assert.equal(result.urls, production ? 9 : 0);
  } else {
    assert.equal(response.status, 200);
    assert.ok(result.type.includes("image/png"));
    await fs.writeFile("review/after/social-preview.png", bytes);
  }
  results.push(result);
}
assert.equal(
  new Set(results.filter((r) => r.title).map((r) => r.title)).size,
  9,
  "Unique titles",
);
await fs.writeFile(
  `review/route-checks-${production ? "production" : "preview"}.json`,
  JSON.stringify(results, null, 2),
);
console.log(
  `PASS: ${results.length} HTTP checks, unique metadata, canonical URLs, server-rendered destinations, social image, real 404s and ${production ? "production" : "preview"} indexing rules.`,
);
