# Celebrate for Change

A student-built guide for finding organisations to support on birthdays and other celebrations. Visitors browse by cause and where organisations work, then continue to official websites. This site does not collect or process donations.

## Run locally

Use Node.js 20.9 or later (Node 24 was used for this review).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For the optimized version:

```sh
npm run build
npm start -- --hostname 127.0.0.1
```

## Pages and content

Original routes `/`, `/india`, `/usa`, `/uk`, `/about` and `/disclaimer` remain. `/global`, `/methodology` and `/message` add international work, transparent checking notes and an optional editable birthday message. All 15 destinations on the original live site are retained.

`data/charities.ts` holds the listings. Locations describe work, not donor eligibility or legal domicile. Update the source-check date only after actually reviewing the source and destination. Record limits in the card and in `review/SOURCES.md`.

Message drafts live in React state only. There are no databases, analytics, ad pixels, accounts or payment handlers. Clipboard and native sharing are user-initiated, with manual text selection when unavailable. Hosting logs and external websites have separate privacy implications.

## Indexing and deployment

Nothing in this change has been published. Local and preview builds default to `noindex, nofollow`, an `X-Robots-Tag` header and `Disallow: /`. Their sitemap is empty. Canonicals and social URLs point to https://www.celebrateforchange.org.

After owner approval, build the actual production deployment with `SITE_INDEXABLE=true`; on Vercel this also requires `VERCEL_ENV=production`. Set that variable only for the production environment, never globally for all environments. Rebuild when changing it. This enables the production sitemap and crawl directives. No new external service is required.

The site uses Next.js prerendered HTML, native CSS/SVG artwork and system fonts. Existing photos remain in `public/images` but are unused because licensing/provenance is undocumented.

## Review package

See `review/REVIEW.md` for actual checks, unresolved facts and known limitations, `review/SOURCES.md` for source evidence, and `review/comparison.html` for before/after screenshots. `review/original-source.tar.gz` preserves the starting local source; the supplied folder was not a Git repository.
