import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import {
  useT,
  useLocale,
  canonicalFor,
  hreflangLinks,
  isLocale,
  LOCALE_META,
} from "@/i18n/config";
import { TRANSLATIONS } from "@/i18n/translations";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/$locale/contact")({
  head: ({ params }) => {
    const loc = isLocale(params.locale) ? params.locale : "en";
    const d = TRANSLATIONS[loc];
    return {
      meta: [
        { title: d.contact.metaTitle },
        { name: "description", content: d.contact.metaDescription },
        { property: "og:title", content: d.contact.metaTitle },
        { property: "og:description", content: d.contact.metaDescription },
        { property: "og:url", content: canonicalFor(loc, "/contact") },
        { property: "og:locale", content: LOCALE_META[loc].htmlLang },
        { property: "og:type", content: "website" },
      ],
      links: [
        { rel: "canonical", href: canonicalFor(loc, "/contact") },
        ...hreflangLinks("/contact"),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: d.contact.metaTitle,
            description: d.contact.metaDescription,
            url: canonicalFor(loc, "/contact"),
            inLanguage: LOCALE_META[loc].htmlLang,
          }),
        },
      ],
    };
  },
  component: Contact,
});

const buildSchema = (t: ReturnType<typeof useT>) =>
  z.object({
    church: z.string().trim().min(2).max(200),
    country: z.string().trim().min(2).max(60),
    firstName: z.string().trim().min(2).max(60),
    lastName: z.string().trim().min(2).max(60),
    email: z.string().trim().email(t.contact.errors.generic).max(255),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    congregation: z.string().trim().max(40).optional().or(z.literal("")),
    attendance: z.string().trim().max(40).optional().or(z.literal("")),
    quantity: z.string().trim().max(40).optional().or(z.literal("")),
    product: z.string().trim().max(80).optional().or(z.literal("")),
    message: z.string().trim().max(2000).optional().or(z.literal("")),
  });

function Contact() {
  const t = useT();
  const loc = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = buildSchema(t).safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? t.contact.errors.generic);
      return;
    }
    setSubmitting(true);
    const v = parsed.data;
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : null;
    const ref = typeof document !== "undefined" ? document.referrer || null : null;
    const { error } = await supabase.from("pricing_requests").insert({
      church_name: v.church,
      country: v.country,
      first_name: v.firstName,
      last_name: v.lastName,
      email: v.email,
      phone: v.phone || null,
      congregation_size: v.congregation || null,
      communion_attendance: v.attendance || null,
      expected_quantity: v.quantity || null,
      preferred_product: v.product || null,
      message: v.message || null,
      notify_when_ordering_opens: fd.get("notify") === "on",
      language: loc,
      status: "New",
      user_agent: ua,
      referer: ref,
    });
    setSubmitting(false);
    if (error) {
      console.error(error);
      toast.error(t.contact.errors.generic);
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
          <h1 className="text-display mt-8 text-4xl sm:text-5xl">{t.contact.successTitle}</h1>
          <p className="mt-5 text-cream/75">{t.contact.successBody}</p>
          <Link
            to="/$locale"
            params={{ locale: loc }}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm text-cream transition hover:border-primary hover:text-primary"
          >
            {t.contact.backHome}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grain pt-32 pb-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
        <aside className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.contact.eyebrow}</p>
          <h1 className="text-display mt-4 text-4xl sm:text-5xl">{t.contact.title}</h1>
          <p className="mt-5 text-cream/75">{t.contact.intro}</p>
          <div className="mt-8 space-y-3 text-sm text-cream/75">
            <a href="mailto:theholysupper@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> theholysupper@gmail.com
            </a>
            <br />
            <a href="tel:+393913817351" className="inline-flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> +39 391 3817351
            </a>
          </div>
          <p className="mt-8 rounded-2xl border border-border/60 bg-card/40 p-5 text-sm text-cream/70">
            {t.contact.sampleNote}
          </p>
        </aside>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border/60 bg-card/40 p-8 sm:p-10 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.contact.fields.church} name="church" required />
            <Field label={t.contact.fields.country} name="country" required autoComplete="country-name" />
            <Field label={t.contact.fields.firstName} name="firstName" required autoComplete="given-name" />
            <Field label={t.contact.fields.lastName} name="lastName" required autoComplete="family-name" />
            <Field label={t.contact.fields.email} name="email" type="email" required autoComplete="email" />
            <Field label={t.contact.fields.phone} name="phone" type="tel" autoComplete="tel" />
            <Field label={t.contact.fields.congregation} name="congregation" placeholder={t.contact.placeholders.congregation} />
            <Field label={t.contact.fields.attendance} name="attendance" placeholder={t.contact.placeholders.attendance} />
            <Field label={t.contact.fields.quantity} name="quantity" placeholder={t.contact.placeholders.quantity} />
            <Field label={t.contact.fields.product} name="product" placeholder={t.contact.placeholders.product} />
          </div>

          <label className="mt-5 block">
            <span className="text-xs uppercase tracking-widest text-cream/60">{t.contact.fields.message}</span>
            <textarea
              name="message"
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>

          <label className="mt-6 flex items-start gap-3 text-sm text-cream/75">
            <input type="checkbox" name="notify" className="mt-1 h-4 w-4 accent-[color:var(--peach)]" />
            <span>{t.contact.notify}</span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
          >
            {submitting ? t.contact.submitting : t.contact.submit}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-cream/60">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}
