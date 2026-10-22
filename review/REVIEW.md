# Celebrate for Change — redesign review

The working redesign is in the existing Next.js project. Nothing was published; no access permissions, purchases, accounts or analytics were added. All original routes and all 15 organisation destinations on the live website are retained. The provided directory has no Git repository, so the starting local source is preserved in `original-source.tar.gz` and source changes are supplied in `changes.patch`.

Run `npm run dev` in the project to review the site at http://localhost:3000. An optimized build is already present; `npm start -- --hostname 127.0.0.1` serves it. See `comparison.html` for desktop and mobile before/after images, and `SOURCES.md` for listing evidence.

## What changed, and why

- **A usable first screen:** a compact task-led headline, visible browsing action and nearby no-donation-processing statement replace the full-screen brand treatment. Location and cause controls fit within the 390 × 844 and 375 × 844 homepage viewports; at 320px, the cause control needs a small scroll. The original desktop H1 was measured at 96px with 19.2px tracking.
- **A warm visual identity:** forest green, pale green and restrained lilac, familiar sans-serif text, and an original gift/leaf SVG retain the green connection without rainbow text, glow or entrance effects. Informational text uses solid backgrounds. Existing photos are unused because their licences/provenance are undocumented.
- **Useful comparisons:** cards show the organisation’s name, concrete work, work locations, cause, official source, outgoing action type and giving notes. The site does not represent work locations as donor eligibility. International activities are separately browsable; Plastic Fischer appears in India and International, and WWF-UK in UK and International.
- **Honest trust language:** removed unsupported verification/impact claims. The methodology explains that checks cover official descriptions and destination types, not effectiveness, registrations or completed payments. Dates reflect the actual source review. The legal disclaimer’s no-processing and student-project substance is preserved, with precise wording for gift and product links.
- **A useful invitation tool:** users choose an optional organisation, edit a starter, copy it, use native sharing, or select text manually. Product/gift messages do not pretend to be donation campaigns. No persistence or sending service was added.
- **Crawlable pages:** unique titles/descriptions, production canonicals, social metadata, a generated 1200 × 630 PNG, robots and sitemap routes, and a custom real 404. The existing architecture already prerenders meaningful HTML. No rich-result, rating or charity structured-data claims were added.

## Actual verification

| Check | Result and evidence |
|---|---|
| Optimized production build / TypeScript | Passed. `build.log`. All content pages prerendered. The local environment blocked Turbopack’s compiler subprocess; build/dev scripts use Next’s supported webpack mode. |
| Route/status/metadata checks | 14 checks passed for each configuration. All 9 content pages return 200 with one H1, unique title/description, expected canonical and social metadata. Two invalid paths return 404 with noindex. PNG, robots and sitemap endpoints work. `route-checks-preview.json`, `route-checks-production.json`. |
| Preview protection | Default build emits `noindex, nofollow` in HTML and X-Robots-Tag, disallows crawling and provides an empty sitemap. Production opt-in emits index/follow and 9 sitemap URLs. Production configuration was tested locally, not deployed. |
| Responsive layout | 55 route/width combinations passed with no horizontal document overflow. Directory routes: 320, 375, 390, 768, 1180, 1440px. About, disclaimer, methodology, message and 404: 320, 375, 390, 768, 1440px. Final homepage adjustment rechecked at all 6 widths. `responsive-checks.json`, `final-home-checks.json`. No global overflow clipping is used. |
| Region/cause journeys | All 30 combinations returned the expected organisation counts. Empty states, reset, cross-location recovery, region switching with cause preservation, filter history and Back were exercised. `filter-checks.json`. |
| External links | Official source reading plus 17 distinct read-only HTTP requests. CRY’s HTTP challenge and WWF’s initial web-retrieval challenge were resolved by normal browser inspection. Pratham’s outgoing link and Back navigation were exercised; its external page loaded but logged a JavaScript error. No transaction completion was tested. `link-checks.json`, `SOURCES.md`. |
| Message UI | Organisation starter, gift wording, editing, clipboard contents, manual full-text selection, blank-message disabled controls and draft reset on reload verified in the browser. No message was sent. |
| Failure/cancellation logic | 7 tests passed for clipboard success, denial and absence; share absence, cancellation, failure and successful resolution. `sharing-tests.log`. Native share was invoked but its OS sheet could not be inspected or dismissed by the available app tooling; genuine device cancellation is **not** claimed as tested. |
| Keyboard | Tab revealed a visible-focus skip link; Enter moved focus to main. Native cause selection and disclosure opening worked from the keyboard. Back restored filter results. |
| Contrast | 10 selected foreground/background or control pairs passed their thresholds: ordinary text ≥4.5:1; tested border/focus ≥3:1. `contrast-checks.json`. This is not an exhaustive accessibility audit. |
| Dependencies | Updated Next.js/config within major version and applied compatible fixes. Runtime audit: 0 known advisories at check time. Full audit: 5 high advisories in the existing lint-tool chain (`braces` → `micromatch` → `fast-glob` → Next ESLint tooling). The proposed forced downgrade was not applied. `dependency-audit-runtime.json`, `dependency-audit-final.json`. |

## Verification limits

- No WCAG 2.2 AA conformance claim. A screen-reader session, physical mobile devices, actual browser zoom and a full automated accessibility audit remain to be completed. The available in-app browser’s zoom shortcuts did not change the viewport; 320px reflow was tested separately.
- Reduced-motion support is implemented; there are no entrance animations. The OS reduced-motion preference was not toggled during testing.
- Meaningful no-JavaScript HTML and a message fallback are present in server responses. A separate browser session with JavaScript disabled was not exercised.
- No Lighthouse score or field Core Web Vitals measurement was obtained. The browser tool did not expose Performance entries. System fonts, inline SVG, prerendering and no remote photo requests reduce avoidable work, but do not establish LCP/INP/CLS compliance. The whole generated static directory is approximately 1 MB on disk; this is not a per-page transfer measurement.
- No donation, membership or certificate checkout, account creation, real message delivery or human usability study was performed. The generic route error boundary was added but not forced into a runtime exception during QA.
- Browser checks used one in-app browser engine. Cross-browser and real-device coverage remain open.

## Content questions before publication

1. What public email address or correction channel should the guide provide? It currently states that a direct correction contact is unavailable; no placeholder address was invented.
2. Would you like a specific first-person explanation of why you built it? The current introduction uses only the supplied facts about Rignesh and the student project.
3. If an established date or photos should return, confirm the date (live: 2025; local source: 2024) and image rights. Both are currently omitted from the redesign.

A short first user test can ask a friend or parent to explain who handles donations, find an organisation for a chosen cause/location, and reach its official destination without help. Record confusion and task completion; no results are assumed here.

## Publication handoff

Keep this review build private/local. After explicit approval, set `SITE_INDEXABLE=true` only for the actual production environment and rebuild. Vercel preview deployments are additionally guarded by `VERCEL_ENV`. Recheck deployed responses and social-card URLs after release. The temporary review servers used for testing are stopped at handoff.
