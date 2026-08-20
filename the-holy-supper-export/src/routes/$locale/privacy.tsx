import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useT, canonicalFor, hreflangLinks, isLocale, LOCALE_META } from "@/i18n/config";
import { TRANSLATIONS } from "@/i18n/translations";

export const Route = createFileRoute("/$locale/privacy")({
  head: ({ params }) => {
    const loc = isLocale(params.locale) ? params.locale : "en";
    const d = TRANSLATIONS[loc];
    return {
      meta: [
        { title: `${d.legal.privacyTitle} — The Holy Supper` },
        { name: "description", content: d.legal.privacyMeta },
        { property: "og:url", content: canonicalFor(loc, "/privacy") },
        { property: "og:locale", content: LOCALE_META[loc].htmlLang },
      ],
      links: [
        { rel: "canonical", href: canonicalFor(loc, "/privacy") },
        ...hreflangLinks("/privacy"),
      ],
    };
  },
  component: Privacy,
});

function Privacy() {
  const t = useT();
  return (
    <LegalShell title={t.legal.privacyTitle} updated="2026" label={t.legal.label} lastUpdated={t.legal.lastUpdated}>
      {t.legal.privacyBody.map((p, i) => (<p key={i}>{p}</p>))}
      {t.legal.privacySections.map((s) => (
        <div key={s.h}><h2>{s.h}</h2><p>{s.p}</p></div>
      ))}
    </LegalShell>
  );
}

export function LegalShell({
  title, updated, label, lastUpdated, children,
}: {
  title: string; updated: string; label: string; lastUpdated: string; children: ReactNode;
}) {
  return (
    <main className="grain pt-32 pb-24">
      <article className="mx-auto max-w-3xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{label}</p>
        <h1 className="text-display mt-4 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-cream/50">{lastUpdated}: {updated}</p>
        <div className="prose prose-invert mt-10 max-w-none space-y-5 text-cream/80 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-display [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-peach">
          {children}
        </div>
      </article>
    </main>
  );
}
