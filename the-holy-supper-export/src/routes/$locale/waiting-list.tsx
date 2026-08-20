import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useT, useLocale, canonicalFor, hreflangLinks, isLocale, LOCALE_META } from "@/i18n/config";
import { TRANSLATIONS } from "@/i18n/translations";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/$locale/waiting-list")({
  head: ({ params }) => {
    const loc = isLocale(params.locale) ? params.locale : "en";
    const d = TRANSLATIONS[loc];
    return {
      meta: [
        { title: d.waiting.metaTitle },
        { name: "description", content: d.waiting.metaDescription },
        { property: "og:title", content: d.waiting.metaTitle },
        { property: "og:description", content: d.waiting.metaDescription },
        { property: "og:url", content: canonicalFor(loc, "/waiting-list") },
        { property: "og:locale", content: LOCALE_META[loc].htmlLang },
      ],
      links: [
        { rel: "canonical", href: canonicalFor(loc, "/waiting-list") },
        ...hreflangLinks("/waiting-list"),
      ],
    };
  },
  component: WaitingList,
});

const buildSchema = (t: ReturnType<typeof useT>) => z.object({
  name: z.string().trim().min(2, t.waiting.errors.name).max(80),
  church: z.string().trim().min(2, t.waiting.errors.church).max(120),
  role: z.string().trim().min(2).max(80),
  country: z.string().trim().min(2).max(60),
  email: z.string().trim().email(t.waiting.errors.email).max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  quantity: z.string().trim().max(40).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: t.waiting.errors.consent }) }),
});

function WaitingList() {
  const t = useT();
  const loc = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      church: String(fd.get("church") ?? ""),
      role: String(fd.get("role") ?? ""),
      country: String(fd.get("country") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      quantity: String(fd.get("quantity") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const parsed = buildSchema(t).safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? t.waiting.errors.generic);
      return;
    }
    setSubmitting(true);
    const v = parsed.data;
    const { error } = await supabase.from("leads").insert({
      kind: "waiting_list",
      locale: loc,
      full_name: v.name,
      church: v.church,
      role: v.role,
      country: v.country,
      email: v.email,
      phone: v.phone || null,
      quantity: v.quantity || null,
      consent: true,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      referer: typeof document !== "undefined" ? document.referrer || null : null,
    });
    setSubmitting(false);
    if (error) {
      console.error(error);
      toast.error(t.waiting.errors.generic);
      return;
    }
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <main className="grain min-h-screen pt-40 pb-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h1 className="text-display mt-8 text-4xl sm:text-5xl">{t.waiting.successTitle}</h1>
          <p className="mt-5 text-cream/75">{t.waiting.successBody}</p>
          <Link to="/$locale" params={{ locale: loc }}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm text-cream transition hover:border-primary hover:text-primary">
            {t.waiting.backHome}<ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grain pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.waiting.eyebrow}</p>
          <h1 className="text-display mt-4 text-4xl sm:text-5xl">{t.waiting.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">{t.waiting.intro}</p>
        </div>
        <form onSubmit={onSubmit} className="mt-14 rounded-3xl border border-border/60 bg-card/40 p-8 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.waiting.fields.name} name="name" required autoComplete="name" />
            <Field label={t.waiting.fields.church} name="church" required autoComplete="organization" />
            <Field label={t.waiting.fields.role} name="role" required placeholder={t.waiting.placeholders.role} />
            <Field label={t.waiting.fields.country} name="country" required autoComplete="country-name" />
            <Field label={t.waiting.fields.email} name="email" type="email" required autoComplete="email" />
            <Field label={t.waiting.fields.phone} name="phone" type="tel" autoComplete="tel" />
            <div className="sm:col-span-2">
              <Field label={t.waiting.fields.quantity} name="quantity" placeholder={t.waiting.placeholders.quantity} />
            </div>
          </div>
          <label className="mt-6 flex items-start gap-3 text-sm text-cream/75">
            <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[color:var(--peach)]" />
            <span>
              {t.waiting.consent}{" "}
              <Link to="/$locale/privacy" params={{ locale: loc }} className="underline underline-offset-4 hover:text-primary">
                {t.waiting.consentPolicyLink}
              </Link>.
            </span>
          </label>
          <button type="submit" disabled={submitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:brightness-110 disabled:opacity-60">
            {submitting ? t.waiting.submitting : t.waiting.submit}<ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-xs text-cream/50">{t.waiting.noSpam}</p>
        </form>
      </div>
    </main>
  );
}

function Field({ label, name, type = "text", required, placeholder, autoComplete }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-cream/60">{label}</span>
      <input type={type} name={name} required={required} placeholder={placeholder} autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-primary focus:ring-2 focus:ring-primary/30" />
    </label>
  );
}
