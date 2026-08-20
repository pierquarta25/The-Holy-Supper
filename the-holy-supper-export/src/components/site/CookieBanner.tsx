import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useT, useLocale } from "@/i18n/config";

const KEY = "ths_cookie_consent_v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const t = useT();
  const loc = useLocale();

  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setVisible(true); } catch { /* ignore */ }
  }, []);

  const decide = (val: "accepted" | "declined") => {
    try { localStorage.setItem(KEY, val); } catch { /* ignore */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-live="polite" aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-4 z-40 mx-auto max-w-3xl px-4">
      <div className="glass relative rounded-2xl p-5 shadow-elevated sm:p-6">
        <button onClick={() => decide("declined")} aria-label={t.cookie.close}
          className="absolute right-3 top-3 rounded-full p-1 text-cream/70 hover:text-primary">
          <X className="h-4 w-4" />
        </button>
        <p className="pr-6 text-sm text-cream/80">
          {t.cookie.body}{" "}
          <a href={`/${loc}/cookies`} className="underline underline-offset-4 hover:text-primary">
            {t.cookie.cookiePolicyLink}
          </a>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={() => decide("accepted")}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110">
            {t.cookie.accept}
          </button>
          <button onClick={() => decide("declined")}
            className="rounded-full border border-border px-5 py-2 text-sm text-cream/80 transition hover:text-primary">
            {t.cookie.essential}
          </button>
        </div>
      </div>
    </div>
  );
}
