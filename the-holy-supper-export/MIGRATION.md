# The Holy Supper — Export & Rebuild Guide

This document explains how to take this project off Lovable and rebuild it with
**Angular (frontend)** and **Java Spring Boot (backend)** while keeping the same
design, content, SEO and data model.

---

## 1. What you can reuse as-is (no rewrite needed)

| Asset | Location | Notes |
| --- | --- | --- |
| All copy in 6 languages | `src/i18n/translations.ts` | Plain TS object: EN, IT, ES, PT, FR, DE. Convert to Angular i18n JSON (see §4). |
| Design tokens / palette | `src/styles.css` | Tailwind v4 `@theme` block: burgundy, peach, cream. Copy verbatim. |
| Product & brand images | `src/assets/`, `public/` | Hero mockup, illustrations, favicon. |
| Database schema | `supabase/migrations/*.sql` | Postgres DDL for `leads` and `pricing_requests`. Feed to Flyway/Liquibase. |
| SEO metadata | `src/routes/$locale/*.tsx` (`head()` blocks) | Titles, descriptions, OG tags, JSON-LD schemas, hreflang sets. |
| Sitemap logic | `src/routes/sitemap[.]xml.ts` | 6 locales × pages with `xhtml:link` alternates. |
| `robots.txt`, `llms.txt` | `public/` | Drop straight into Angular `src/assets` or server static dir. |

## 2. What must be rewritten

- **Components**: every `.tsx` file under `src/components` and `src/routes` becomes
  an Angular component. The markup is Tailwind-classed HTML — copy the class
  strings directly into `.component.html` and only translate the JSX syntax
  (`className` → `class`, `{expr}` → `{{ expr }}`, `.map()` → `@for`).
- **Routing**: TanStack file routes → Angular Router config. Keep the same URLs:
  `/:locale`, `/:locale/contact`, `/:locale/waiting-list`, `/:locale/gluten-free`,
  `/:locale/privacy`, `/:locale/cookies`, `/:locale/terms`.
- **Server functions**: form submissions currently run through TanStack server
  functions writing to Postgres. These become Spring `@RestController` endpoints.
- **Head/meta management**: replace `head()` with Angular's `Meta` + `Title`
  services, or prerender per-locale HTML with Angular SSR for correct SEO.

## 3. Backend: Spring Boot equivalent

### 3.1 Database
Run the SQL in `supabase/migrations/` against your own Postgres. Core table:

```
pricing_requests
  id                          uuid  PK  default gen_random_uuid()
  created_at                  timestamptz default now()
  church_name                 text
  country                     text
  first_name                  text
  last_name                   text
  email                       text
  phone                       text
  congregation_size           text
  communion_attendance        text
  expected_quantity           text
  preferred_product           text
  message                     text
  notify_when_ordering_opens  boolean
  language                    text
  status                      text default 'New'
```

Note: the Row Level Security policies in the migrations are Postgres-level
protections that Supabase relies on. With Spring Boot you enforce access in the
service layer instead, so you can skip the `CREATE POLICY` statements — but keep
the table definitions, constraints and defaults.

### 3.2 Suggested Spring layout

```
com.holysupper
├─ config/          CORS, security, validation
├─ lead/
│  ├─ PricingRequest.java        @Entity
│  ├─ PricingRequestRepository   extends JpaRepository
│  ├─ PricingRequestService      persist + notify
│  ├─ PricingRequestController   POST /api/pricing-requests
│  └─ dto/PricingRequestDto      @Valid + @Email
├─ waitlist/       same shape for the waiting list
├─ mail/           SMTP / SendGrid notification on new lead
└─ admin/          secured read endpoints for your future CRM
```

Minimum viable controller:

```java
@RestController
@RequestMapping("/api/pricing-requests")
public class PricingRequestController {
  private final PricingRequestService service;

  @PostMapping
  public ResponseEntity<Void> create(@Valid @RequestBody PricingRequestDto dto) {
    service.save(dto);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}
```

Lock down CORS to your production domain, rate-limit the public POST endpoints
(Bucket4j), and require auth on every read/list endpoint.

## 4. Frontend: Angular translation of the i18n file

`src/i18n/translations.ts` exports one nested object per locale. Convert with a
one-off Node script:

```js
import { translations } from './src/i18n/translations.ts';
import { writeFileSync } from 'fs';
for (const [locale, dict] of Object.entries(translations)) {
  writeFileSync(`./i18n/${locale}.json`, JSON.stringify(dict, null, 2));
}
```

Then load the JSON with `@ngx-translate/core` (runtime switching, simplest) or
Angular's built-in `$localize` (build-time, best SEO because each locale is a
separate prerendered bundle). For your six-locale SEO strategy, prefer the
built-in i18n with one build per locale served under `/en`, `/it`, `/es`, `/pt`,
`/fr`, `/de`.

## 5. SEO parity checklist

Keep all of these — they are already implemented here and are the reason the
site indexes well:

- Unique `<title>` (<60 chars) and meta description (<160 chars) per locale page
- Self-referencing `<link rel="canonical">`
- Full `hreflang` set on every page, including `x-default`
- JSON-LD: `Organization`, `Product`, `FAQPage`, `BreadcrumbList`
- `og:*` and `twitter:card` tags
- `/sitemap.xml` with localized alternates, referenced from `robots.txt`
- Google verification meta tag: `google-site-verification` =
  `l9NK8I75AQv9pokFqLUVC5jp6AnxJTawPAcJEpjliNA`
- Hero image with explicit `width`/`height`, `fetchpriority="high"`, no lazy load;
  everything below the fold lazy-loaded
- Fonts loaded with `display=swap`

Angular SSR/prerendering is required for these to be visible to crawlers — a
plain client-rendered Angular SPA will lose most of this SEO value.

## 6. Suggested deployment

- **Frontend**: Angular SSR on Vercel/Netlify/Cloudflare, or Nginx in front of a
  Node SSR process.
- **Backend**: Spring Boot as a container on Fly.io, Render, Railway, AWS ECS or
  your own VPS.
- **Database**: managed Postgres (Neon, Supabase, RDS, Cloud SQL).
- Point the Angular app at the Spring API base URL through an environment file.

## 7. About Angular + React together

Running both frameworks in one app is technically possible via web components or
module federation, but it doubles bundle size and complexity for no benefit on a
marketing site. Pick Angular alone for the rebuild.

## 8. Existing data

Any leads already captured in the Lovable Cloud database should be exported
before you switch DNS, so you don't lose enquiries. Ask for a CSV/SQL dump of
`pricing_requests` and `leads` and import it into your new Postgres.
