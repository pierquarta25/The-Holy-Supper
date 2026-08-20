import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { LOCALES, LOCALE_META, useLocale, withLocale, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);
  const current = useLocale();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const choose = (loc: Locale) => {
    setOpen(false);
    if (loc === current) return;
    navigate({ to: withLocale(loc, pathname) });
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${LOCALE_META[current].nativeName}`}
        className={
          variant === "desktop"
            ? "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-widest text-cream/80 transition hover:border-primary hover:text-primary"
            : "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-sm text-cream/80"
        }
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="font-medium">{current.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-border bg-card/95 py-1.5 shadow-elevated backdrop-blur"
        >
          {LOCALES.map((loc) => {
            const active = loc === current;
            return (
              <li key={loc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => choose(loc)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-sm transition hover:bg-primary/10 ${
                    active ? "text-primary" : "text-cream/85"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true">{LOCALE_META[loc].flag}</span>
                    <span>{LOCALE_META[loc].nativeName}</span>
                  </span>
                  {active && <Check className="h-3.5 w-3.5" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
