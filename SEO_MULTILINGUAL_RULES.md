# SEO and multilingual release rules

Read this file before changing routes, layouts, metadata, navigation, search, sitemap, redirects, or adding a language. Also read `E:\codex workspace\WORKSPACE_CONTEXT.md` and the current project workflow. This document records the tested baseline as of 2026-11-19.

## Current baseline

- Next.js App Router with static export. Existing public URLs are `/` and `/es/...`; the route group `app/(es)` does not change URLs.
- `app/(en)/layout.tsx` is a placeholder only. There are no public English pages, `/en/` navigation entries, or `/en/` sitemap entries. Do not imply a language is live until it has distinct researched content and a tested public route.
- Spanish content uses Spanish `html lang`, metadata, navigation, search, and site tools. New languages need their own reviewed metadata, copy, search index, navigation, and tool labels; avoid translating Spanish SEO pages mechanically.
- The existing 24 static HTML paths, page text, SEO metadata and JSON-LD were compared against the prior production Git revision before the multilingual foundation release. Sitemap, robots and `_redirects` were identical.

## Mandatory checks for every route or language change

1. Record the current Git revision and a rollback path. Compare route inventory before and after the change.
2. Preserve existing public URLs and crawlable HTML. If a URL must move, document each old/new pair and set a hosting-layer 301 or 308. Test response status and final destination; a canonical or client redirect is not a substitute.
3. Check each affected page's `html lang`, title, description, canonical, robots, OG/Twitter tags, structured data, internal links, and sitemap inclusion. Only valid public pages belong in the sitemap.
4. Keep error pages as real HTTP 404 responses. They must not canonicalize to a valid content page. Use `noindex,follow` and omit canonical/hreflang on the 404 template.
5. Check `robots.txt`, search results and no-result state, navigation, and mobile layout. Build and lint the static export. Test old redirects and nonexistent paths against the actual host after release.
6. Publish only after test review and user confirmation. Compare critical production pages and SEO files immediately after publishing. A Git push alone does not prove hosting deployed the commit; verify the live result and report any uncertainty.

## Language expansion

- Research each market's search intent and page plan separately. Define URL structure before writing pages. The planned structure is `/en/`, `/ko/`, `/ja/`, `/th/` as applicable; none is live merely because a route group exists.
- Add `hreflang` only for equivalent, published, indexable language pages with reciprocal links. Different keyword-intent pages should not be paired as translations.
- Preserve Spanish canonicals and URLs. New language pages need self-canonicals, correct language tags, distinct titles/descriptions, internal links and sitemap entries. Check for competing pages and unintended locale fallbacks.
- When adding accounts later, keep public guides and useful tool explanations crawlable without login. Keep private user data behind authentication.

## This release's 404 correction

The first multilingual release had a global 404 template that emitted a canonical to `/` and Spanish alternate link. The correction removes those alternate/canonical tags from `app/global-not-found.tsx` and adds `robots: { index: false, follow: true }`. Verify exported `out/404.html` and the live HTTP 404 response. Normal page SEO metadata should remain unchanged.