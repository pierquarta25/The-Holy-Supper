import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ChevronDown, Sparkles, ShieldCheck, Zap, HeartHandshake, Leaf,
  MapPin, Truck, PackageCheck, Volume2, BadgeCheck, Wallet,
  ClipboardList, Factory, Send, Church, Droplets, School, Users,
} from "lucide-react";
import cupAsset from "@/assets/communion-cup-hero.png.asset.json";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useT, useLocale, canonicalFor, hreflangLinks, isLocale, LOCALE_META } from "@/i18n/config";
import { TRANSLATIONS } from "@/i18n/translations";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const loc = isLocale(params.locale) ? params.locale : "en";
    const d = TRANSLATIONS[loc];
    return {
      meta: [
        { title: d.meta.homeTitle },
        { name: "description", content: d.meta.homeDescription },
        { name: "keywords", content: d.meta.keywords },
        { property: "og:type", content: "website" },
        { property: "og:title", content: d.meta.homeTitle },
        { property: "og:description", content: d.meta.homeDescription },
        { property: "og:url", content: canonicalFor(loc, "/") },
        { property: "og:locale", content: LOCALE_META[loc].htmlLang },
      ],
      links: [
        { rel: "canonical", href: canonicalFor(loc, "/") },
        ...hreflangLinks("/"),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Pre-filled Communion Cups",
            brand: { "@type": "Brand", name: "The Holy Supper" },
            description: d.meta.homeDescription,
            countryOfOrigin: "IT",
            offers: {
              "@type": "AggregateOffer", priceCurrency: "EUR",
              lowPrice: "0.21", highPrice: "0.32", offerCount: "4",
              availability: "https://schema.org/PreOrder",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faqs.map((f) => ({
              "@type": "Question", name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: Home,
});

function Home() {
  return (
    <main className="grain">
      <Hero /><TrustBar /><Why /><Benefits /><Pricing />
      <Impact /><HowItWorks /><Faq /><FinalCta />
    </main>
  );
}

function Hero() {
  const t = useT();
  const loc = useLocale();
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(ellipse 60% 40% at 70% 30%, color-mix(in oklab, var(--peach) 22%, transparent), transparent 60%)" }} />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-widest text-peach-soft">
            <Sparkles className="h-3.5 w-3.5" />{t.home.heroEyebrow}
          </div>
          <h1 className="text-display mt-6 text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">{t.home.heroSub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/$locale/contact" params={{ locale: loc }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:brightness-110">
              {t.home.heroCta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { k: t.home.heroStat1Label, v: t.home.heroStat1Value },
              { k: t.home.heroStat2Label, v: t.home.heroStat2Value },
              { k: t.home.heroStat3Label, v: t.home.heroStat3Value },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-widest text-cream/50">{s.k}</dt>
                <dd className="text-display mt-1 text-xl text-peach">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square max-w-md">
            <div aria-hidden="true" className="absolute inset-6 rounded-full"
              style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--peach) 30%, transparent) 0%, transparent 70%)", filter: "blur(30px)" }} />
            <img src={cupAsset.url}
              alt="Pre-filled communion cup with sealed foil lid, wafer and grape juice"
              width={800} height={800} loading="eager" fetchPriority="high"
              className="animate-float relative z-10 h-full w-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
      </div>
      <a href="#why" aria-label="Scroll" className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-cream/50 transition hover:text-primary">
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

function TrustBar() {
  const t = useT();
  const icons = [MapPin, Truck, ShieldCheck, PackageCheck, HeartHandshake, BadgeCheck];
  return (
    <section className="border-y border-border/50 bg-card/30 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-cream/70">
        {t.home.trust.map((label, i) => {
          const Icon = icons[i] ?? MapPin;
          return (
            <div key={label} className="inline-flex items-center gap-2 text-sm">
              <Icon className="h-4 w-4 text-primary" /><span>{label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Why() {
  const t = useT();
  const solutionIcons = [Volume2, PackageCheck, ShieldCheck];
  return (
    <section id="why" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.home.whyEyebrow}</p>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl">{t.home.whyTitle}</h2>
          <p className="mt-6 text-cream/70">{t.home.whyIntro}</p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-card/40 p-8">
            <h3 className="text-display text-2xl text-cream">{t.home.whyProblemsTitle}</h3>
            <ul className="mt-6 space-y-4">
              {t.home.problems.map((p) => (
                <li key={p.t} className="flex items-start gap-3 text-cream/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <div>
                    <p className="font-medium text-cream">{p.t}</p>
                    <p className="mt-1 text-sm text-cream/65">{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-primary/20 p-8"
            style={{ background: "linear-gradient(160deg, color-mix(in oklab, var(--peach) 12%, transparent), transparent)" }}>
            <p className="text-xs uppercase tracking-widest text-peach">The Holy Supper</p>
            <h3 className="text-display mt-3 text-2xl text-peach">{t.home.solution.title}</h3>
            <p className="mt-6 text-cream/80">{t.home.solution.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const t = useT();
  const icons = [PackageCheck, Leaf, Zap, Volume2, ShieldCheck, HeartHandshake, Wallet, MapPin, Truck];
  return (
    <section id="benefits" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.home.benefitsEyebrow}</p>
            <h2 className="text-display mt-4 text-4xl sm:text-5xl">{t.home.benefitsTitle}</h2>
          </div>
          <p className="max-w-sm text-cream/70">{t.home.benefitsSub}</p>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.benefits.map((b, i) => {
            const Icon = icons[i] ?? PackageCheck;
            return (
              <div key={b.t} className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 transition hover:border-primary/50">
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-display relative mt-6 text-xl text-cream">{b.t}</h3>
                <p className="relative mt-2 text-sm text-cream/70">{b.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const t = useT();
  const loc = useLocale();
  const rows = [
    { qty: "100", market: "€42", ours: "€32", savings: "€10", per: "€0.32" },
    { qty: "250", market: "€81", ours: "€60", savings: "€21", per: "€0.24" },
    { qty: "500", market: "€158", ours: "€115", savings: "€43", per: "€0.23" },
    { qty: "1000", market: "€289", ours: "€219", savings: "€70", per: "€0.21", highlight: true },
  ];
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.home.pricingEyebrow}</p>
          <h2 className="text-display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">{t.home.pricingTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">{t.home.pricingSub}</p>
        </div>
        <div className="mt-14 overflow-hidden rounded-3xl border border-border/60">
          <div className="grid grid-cols-4 gap-0 border-b border-border/60 bg-card/40 px-6 py-4 text-xs uppercase tracking-widest text-cream/50 sm:px-8">
            <div>{t.home.pricingHeaderQty}</div>
            <div>{t.home.pricingHeaderMarket}</div>
            <div>{t.home.pricingHeaderOurs}</div>
            <div className="text-right">{t.home.pricingHeaderSave}</div>
          </div>
          {rows.map((r) => (
            <div key={r.qty} className={`grid grid-cols-4 items-center gap-0 border-b border-border/40 px-6 py-6 last:border-0 sm:px-8 ${r.highlight ? "bg-primary/5" : ""}`}>
              <div>
                <div className="text-display text-lg text-cream">{r.qty}</div>
                <div className="mt-0.5 text-xs text-cream/50">{r.per}</div>
              </div>
              <div className="text-cream/60 line-through">{r.market}</div>
              <div className="text-display text-2xl text-peach">{r.ours}</div>
              <div className="text-right">
                <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">{r.savings}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-cream/50">{t.home.pricingDisclaimer}</p>
        <div className="mt-10 text-center">
          <Link to="/$locale/contact" params={{ locale: loc }}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:brightness-110">
            {t.home.pricingCta}<ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const t = useT();
  const icons = [Church, HeartHandshake, School, Droplets];
  return (
    <section id="impact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.home.impactEyebrow}</p>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl leading-[1.05]">{t.home.impactTitle}</h2>
          <p className="mt-6 text-lg text-cream/75">{t.home.impactSubhead}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Church className="h-5 w-5" />
            </span>
            <p className="mt-6 text-xs uppercase tracking-widest text-peach-soft">01 — Today</p>
            <h3 className="text-display mt-2 text-2xl text-cream">Communion for every church</h3>
            <p className="mt-4 text-cream/75">{t.home.impactBody}</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 p-8"
            style={{ background: "linear-gradient(160deg, color-mix(in oklab, var(--peach) 12%, transparent), transparent)" }}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="mt-6 text-xs uppercase tracking-widest text-peach">02 — Tomorrow</p>
            <h3 className="text-display mt-2 text-2xl text-peach">A vision beyond the local church</h3>
            <p className="mt-4 text-cream/80">
              As The Holy Supper grows, our desire is for every purchase to become part of something bigger — supporting Christian mission and humanitarian initiatives around the world.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-cream/50">
            Areas we hope to invest in as we grow
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.impactPillars.map((it, i) => {
              const Icon = icons[i] ?? School;
              return (
                <div key={it.t} className="group rounded-2xl border border-border/60 bg-card/30 p-6 transition hover:border-primary/40">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-display mt-4 text-lg text-cream">{it.t}</p>
                  <p className="mt-1 text-xs text-cream/60">{it.d}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-xs italic text-cream/55">
            Aspirational — these are the causes we hope to support as the company develops, not projects we currently fund.
          </p>
        </div>

        <div className="mt-14 relative overflow-hidden rounded-[2rem] border border-border/60 p-10 sm:p-14">
          <div aria-hidden="true" className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 20% 30%, color-mix(in oklab, var(--peach) 18%, transparent), transparent 65%)" }} />
          <div className="relative grid items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <svg viewBox="0 0 200 200" className="mx-auto h-auto w-full max-w-[220px]" aria-hidden="true">
                <defs>
                  <radialGradient id="globe" cx="35%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="var(--peach)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--wine-700)" stopOpacity="0.15" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#globe)" stroke="color-mix(in oklab, var(--peach) 35%, transparent)" strokeWidth="1" />
                {Array.from({ length: 7 }).map((_, i) => (
                  <ellipse key={`h${i}`} cx="100" cy="100" rx="80" ry={80 - i * 22 < 6 ? 6 : 80 - i * 22}
                    fill="none" stroke="color-mix(in oklab, var(--peach) 22%, transparent)" strokeWidth="0.6" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <ellipse key={`v${i}`} cx="100" cy="100" rx={80 - i * 25 < 6 ? 6 : 80 - i * 25} ry="80"
                    fill="none" stroke="color-mix(in oklab, var(--peach) 22%, transparent)" strokeWidth="0.6" />
                ))}
                <circle cx="122" cy="96" r="4" fill="var(--peach)" />
                <circle cx="122" cy="96" r="10" fill="var(--peach)" opacity="0.25" />
              </svg>
            </div>
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">Where the vision was born</p>
              <p className="mt-4 text-cream/80 leading-relaxed">{t.home.impactCaption}</p>
            </div>
          </div>
        </div>

        <p className="mt-14 mx-auto max-w-3xl text-center text-lg italic text-cream/75">
          "{t.home.impactClosing}"
        </p>
      </div>
    </section>
  );
}


function HowItWorks() {
  const t = useT();
  const icons = [ClipboardList, Send, Factory, Truck];
  return (
    <section id="how" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.home.howEyebrow}</p>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl">{t.home.howTitle}</h2>
        </div>
        <ol className="mt-16 grid gap-6 md:grid-cols-4">
          {t.home.howSteps.map((s, i) => {
            const Icon = icons[i] ?? Send;
            return (
              <li key={s.t} className="relative rounded-3xl border border-border/60 bg-card/40 p-7">
                <span className="text-display text-6xl leading-none text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-display mt-4 text-lg text-cream">{s.t}</p>
                <p className="mt-1 text-sm text-cream/65">{s.d}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  const t = useT();
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.home.faqEyebrow}</p>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl">{t.home.faqTitle}</h2>
        </div>
        <Accordion type="single" collapsible className="mt-14">
          {t.faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
              <AccordionTrigger className="py-6 text-left text-lg text-cream hover:no-underline data-[state=open]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-cream/70 whitespace-pre-line">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCta() {
  const t = useT();
  const loc = useLocale();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 p-12 text-center sm:p-16">
          <div aria-hidden="true" className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--peach) 22%, transparent), transparent 70%)" }} />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">{t.home.finalCtaEyebrow}</p>
            <h2 className="text-display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">{t.home.finalCtaTitle}</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/$locale/contact" params={{ locale: loc }}
                className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:brightness-110">
                {t.home.finalCtaButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
