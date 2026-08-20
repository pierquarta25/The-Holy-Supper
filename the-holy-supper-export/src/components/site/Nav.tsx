import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useT, useLocale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useT();
  const loc = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: `/${loc}#why`, label: t.nav.why },
    { href: `/${loc}#benefits`, label: t.nav.benefits },
    { href: `/${loc}#pricing`, label: t.nav.pricing },
    { href: `/${loc}#impact`, label: t.nav.mission },
    { href: `/${loc}#faq`, label: t.nav.faq },
    { href: `/${loc}/contact`, label: t.nav.contact },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${scrolled ? "glass shadow-card" : ""}`}
        style={{ marginInline: scrolled ? "1rem" : "1.5rem" }}>
        <Link to="/$locale" params={{ locale: loc }} className="flex items-center gap-2 text-primary" aria-label="The Holy Supper">
          <Cross className="h-5 w-5" />
          <span className="text-display text-lg tracking-wide">The Holy Supper</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-cream/80 transition hover:text-primary">{item.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link to="/$locale/contact" params={{ locale: loc }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110">
            {t.nav.cta}
          </Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher variant="mobile" />
          <button className="rounded-full border border-border p-2 text-primary" onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-6 mt-2 rounded-2xl glass p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base text-cream/90">
                {item.label}
              </a>
            ))}
            <Link to="/$locale/contact" params={{ locale: loc }} onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Cross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2v20M6 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
