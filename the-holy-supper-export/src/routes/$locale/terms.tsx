import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "./privacy";
import { useT, canonicalFor, hreflangLinks, isLocale, LOCALE_META } from "@/i18n/config";
import { TRANSLATIONS } from "@/i18n/translations";

export const Route = createFileRoute("/$locale/terms")({
  head: ({ params }) => {
    const loc = isLocale(params.locale) ? params.locale : "en";
    const d = TRANSLATIONS[loc];
    return {
      meta: [
        { title: `${d.legal.termsTitle} — The Holy Supper` },
        { name: "description", content: d.legal.termsMeta },
        { property: "og:url", content: canonicalFor(loc, "/terms") },
        { property: "og:locale", content: LOCALE_META[loc].htmlLang },
      ],
      links: [
        { rel: "canonical", href: canonicalFor(loc, "/terms") },
        ...hreflangLinks("/terms"),
      ],
    };
  },
  component: () => {
    const t = useT();
    return (
      <LegalShell title={t.legal.termsTitle} updated="2026" label={t.legal.label} lastUpdated={t.legal.lastUpdated}>
        <p>{t.legal.termsBody}</p>
        {t.legal.termsSections.map((s) => (
          <div key={s.h}><h2>{s.h}</h2><p>{s.p}</p></div>
        ))}
      </LegalShell>
    );
  },
});
