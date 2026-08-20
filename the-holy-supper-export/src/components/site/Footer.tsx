import { Link } from "@tanstack/react-router";
import { Cross } from "./Nav";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useT, useLocale } from "@/i18n/config";

export function Footer() {
  const t = useT();
  const loc = useLocale();
  return (
    <footer className="border-t border-border/60 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-primary">
              <Cross className="h-5 w-5" />
              <span className="text-display text-xl tracking-wide">The Holy Supper</span>
            </div>
            <p className="mt-4 max-w-md text-cream/70">{t.footer.tagline}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-cream/70">
              <a href="mailto:theholysupper@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> theholysupper@gmail.com
              </a>
              <a href="tel:+393913817351" className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" /> +39 391 3817351
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              <a aria-label="Instagram" href="#" className="rounded-full border border-border p-2 text-cream/70 transition hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Facebook" href="#" className="rounded-full border border-border p-2 text-cream/70 transition hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-peach-soft">{t.footer.exploreTitle}</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><a href={`/${loc}#why`} className="hover:text-primary">{t.nav.why}</a></li>
              <li><a href={`/${loc}#benefits`} className="hover:text-primary">{t.nav.benefits}</a></li>
              <li><a href={`/${loc}#pricing`} className="hover:text-primary">{t.nav.pricing}</a></li>
              <li><a href={`/${loc}#impact`} className="hover:text-primary">{t.nav.mission}</a></li>
              <li><a href={`/${loc}#faq`} className="hover:text-primary">{t.nav.faq}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-peach-soft">{t.footer.getInTouchTitle}</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><Link to="/$locale/contact" params={{ locale: loc }} className="hover:text-primary">{t.footer.requestPricing}</Link></li>
              <li><Link to="/$locale/privacy" params={{ locale: loc }} className="hover:text-primary">{t.footer.privacyPolicy}</Link></li>
              <li><Link to="/$locale/cookies" params={{ locale: loc }} className="hover:text-primary">{t.footer.cookiePolicy}</Link></li>
              <li><Link to="/$locale/terms" params={{ locale: loc }} className="hover:text-primary">{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="divider-gilt my-12" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} The Holy Supper. {t.footer.rights}</p>
          <p className="tracking-widest uppercase">{t.footer.madeInItaly}</p>
        </div>
      </div>
    </footer>
  );
}
