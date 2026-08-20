import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf, HeartHandshake } from "lucide-react";
import {
  canonicalFor,
  hreflangLinks,
  isLocale,
  LOCALE_META,
  useLocale,
} from "@/i18n/config";

const TITLE = "Gluten-Free Communion Cups for Churches | The Holy Supper";
const DESCRIPTION =
  "Pre-filled gluten-free communion cups with a wafer and juice sealed together. Safe for members with celiac disease and gluten sensitivity, made in Italy, shipped across Europe and worldwide.";

const FAQS = [
  {
    q: "Are your pre-filled communion cups gluten-free?",
    a: "Yes. Our gluten-free communion cups pair a certified gluten-free wafer with pure grape juice, sealed in a single-serve cup so nothing touches wheat during preparation or distribution.",
  },
  {
    q: "Is it safe for members with celiac disease?",
    a: "Our gluten-free wafers are produced in a dedicated environment to avoid cross-contamination, so they are suitable for members with celiac disease and gluten intolerance. We can share the current certification with your church on request.",
  },
  {
    q: "Do you also offer regular (non gluten-free) communion cups?",
    a: "Yes. Most churches order our standard pre-filled cups and add a smaller quantity of gluten-free cups for members with dietary needs. Both come in the same easy-open design.",
  },
  {
    q: "How is the gluten-free wafer different from a regular wafer?",
    a: "It uses a rice and corn-based recipe instead of wheat, with a neutral taste and a similar texture to a traditional communion wafer. Congregants receive the same reverent experience without any gluten exposure.",
  },
  {
    q: "How do we order gluten-free communion cups?",
    a: "Request a personalised quotation through the pricing form. Let us know the estimated quantity of gluten-free cups alongside your regular order and we will prepare a tailored offer with lead times and shipping.",
  },
];

export const Route = createFileRoute("/$locale/gluten-free")({
  head: ({ params }) => {
    const loc = isLocale(params.locale) ? params.locale : "en";
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        {
          name: "keywords",
          content:
            "gluten free communion cups, gluten free communion wafers, celiac communion, gluten free Lord's Supper, gluten free eucharist, pre-filled gluten free communion",
        },
        { property: "og:type", content: "article" },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:url", content: canonicalFor(loc, "/gluten-free") },
        { property: "og:locale", content: LOCALE_META[loc].htmlLang },
      ],
      links: [
        { rel: "canonical", href: canonicalFor(loc, "/gluten-free") },
        ...hreflangLinks("/gluten-free"),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Gluten-Free Pre-filled Communion Cups",
            brand: { "@type": "Brand", name: "The Holy Supper" },
            description: DESCRIPTION,
            countryOfOrigin: "IT",
            category: "Church Supplies / Communion Supplies",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: canonicalFor(loc, "/") },
              {
                "@type": "ListItem",
                position: 2,
                name: "Gluten-Free Communion Cups",
                item: canonicalFor(loc, "/gluten-free"),
              },
            ],
          }),
        },
      ],
    };
  },
  component: GlutenFree,
});

function GlutenFree() {
  const loc = useLocale();
  return (
    <main className="grain">
      <section className="pt-40 pb-16 sm:pt-48">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-peach-soft">
            Gluten-Free Communion
          </p>
          <h1 className="text-display mt-4 text-4xl sm:text-6xl">
            Gluten-Free Communion Cups, Safe for Every Member of Your Church
          </h1>
          <p className="mt-6 text-lg text-cream/80">
            Pre-filled communion cups with a certified gluten-free wafer and pure grape juice —
            sealed together so every congregant, including those with celiac disease, can share
            the Lord's Supper without hesitation.
          </p>
          <Link
            to="/$locale/contact"
            params={{ locale: loc }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            Request pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Safe for celiac members",
              body: "Certified gluten-free wafers produced in a dedicated environment to avoid cross-contamination.",
            },
            {
              icon: Leaf,
              title: "Rice & corn based wafer",
              body: "A neutral flavour and traditional texture, without any wheat, barley or rye.",
            },
            {
              icon: HeartHandshake,
              title: "One reverent experience",
              body: "Same premium cup, same silent distribution — no one feels singled out at the Table.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl border border-border/60 bg-card/40 p-8"
            >
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="text-display mt-4 text-2xl">{title}</h2>
              <p className="mt-3 text-cream/75">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-display text-3xl sm:text-4xl">
            Why churches choose gluten-free pre-filled communion cups
          </h2>
          <div className="mt-8 space-y-5 text-cream/80">
            <p>
              For churches serving members with celiac disease, gluten intolerance, or a
              wheat allergy, communion can become a source of anxiety instead of unity. A
              shared loaf or a wafer prepared next to gluten-containing bread carries a
              real risk of cross-contamination — even a trace amount can trigger a
              reaction.
            </p>
            <p>
              Pre-filled gluten-free communion cups solve the problem at the root. Each
              cup contains a certified gluten-free wafer sealed above pure grape juice,
              produced separately from our standard wafers. There is no handling, no
              plating and no exposure to wheat between production and the moment your
              member opens the cup.
            </p>
            <p>
              The result is a table that is genuinely open. Your gluten-free members
              receive the same premium single-serve experience as everyone else,
              distributed silently, without a separate line or a whispered explanation to
              the elder holding the tray.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Certified gluten-free wafer and pure grape juice",
              "Sealed single-serve cup — no cross-contamination",
              "Same easy-open design as our regular cups",
              "Order alongside standard cups in one shipment",
              "Made in Italy, shipped across Europe and worldwide",
              "Personalised quotation with no obligation to purchase",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-cream/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-display text-3xl sm:text-4xl">
            Gluten-free communion cups — frequently asked questions
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border/60 bg-card/40 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-cream">
                  {f.q}
                </summary>
                <p className="mt-3 text-cream/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-display text-3xl sm:text-4xl">
            Request a quotation for gluten-free communion cups
          </h2>
          <p className="mt-5 text-cream/75">
            Tell us how many gluten-free cups your church needs alongside your regular
            order. We will prepare a personalised quotation with lead times and shipping —
            no obligation to purchase.
          </p>
          <Link
            to="/$locale/contact"
            params={{ locale: loc }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            Request pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
