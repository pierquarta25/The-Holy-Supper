import { createFileRoute } from "@tanstack/react-router";
import { LOCALES, SITE_URL } from "@/i18n/config";

const PAGES = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/gluten-free", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/waiting-list", changefreq: "weekly", priority: "0.9" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/cookies", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls: string[] = [];
        for (const p of PAGES) {
          for (const loc of LOCALES) {
            const loc_url = `${SITE_URL}/${loc}${p.path}`;
            const alts = LOCALES.map((l) =>
              `      <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}${p.path}"/>`
            ).join("\n");
            urls.push(
              `  <url>
    <loc>${loc_url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
${alts}
      <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en${p.path}"/>
  </url>`
            );
          }
        }
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
