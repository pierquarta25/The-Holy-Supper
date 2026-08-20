import { useRouterState } from "@tanstack/react-router";
import { TRANSLATIONS, type Dictionary } from "./translations";

export const LOCALES = ["en", "it", "es", "pt", "fr", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  { name: string; nativeName: string; flag: string; htmlLang: string }
> = {
  en: { name: "English", nativeName: "English", flag: "🇬🇧", htmlLang: "en" },
  it: { name: "Italian", nativeName: "Italiano", flag: "🇮🇹", htmlLang: "it" },
  es: { name: "Spanish", nativeName: "Español", flag: "🇪🇸", htmlLang: "es" },
  pt: { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", htmlLang: "pt" },
  fr: { name: "French", nativeName: "Français", flag: "🇫🇷", htmlLang: "fr" },
  de: { name: "German", nativeName: "Deutsch", flag: "🇩🇪", htmlLang: "de" },
};

export const SITE_URL = "https://theholysupper.lovable.app";

export function isLocale(v: string | undefined): v is Locale {
  return !!v && (LOCALES as readonly string[]).includes(v);
}

/** Extract the locale segment from a pathname, defaulting to English. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? seg : DEFAULT_LOCALE;
}

/** The path without the leading locale segment (starts with "/"). */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }
  return pathname === "" ? "/" : pathname;
}

/** Build a URL for a given locale, preserving the current sub-path. */
export function withLocale(locale: Locale, pathname: string): string {
  const rest = stripLocale(pathname);
  return rest === "/" ? `/${locale}` : `/${locale}${rest}`;
}

/** Read the current locale from the router. */
export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return localeFromPath(pathname);
}

/** Read the translation dictionary for the current locale. */
export function useT(): Dictionary {
  const locale = useLocale();
  return TRANSLATIONS[locale] ?? TRANSLATIONS[DEFAULT_LOCALE];
}

/** Build hreflang link entries for a route path (path without locale, starting with "/"). */
export function hreflangLinks(subPath: string) {
  const clean = subPath === "/" ? "" : subPath;
  const links = LOCALES.map((loc) => ({
    rel: "alternate" as const,
    hrefLang: LOCALE_META[loc].htmlLang,
    href: `${SITE_URL}/${loc}${clean}`,
  }));
  links.push({
    rel: "alternate" as const,
    hrefLang: "x-default",
    href: `${SITE_URL}/${DEFAULT_LOCALE}${clean}`,
  });
  return links;
}

export function canonicalFor(locale: Locale, subPath: string) {
  const clean = subPath === "/" ? "" : subPath;
  return `${SITE_URL}/${locale}${clean}`;
}
