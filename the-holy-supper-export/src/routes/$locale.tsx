import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { isLocale, DEFAULT_LOCALE } from "@/i18n/config";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params, location }) => {
    if (!isLocale(params.locale)) {
      const rest = location.pathname.replace(/^\/[^/]+/, "");
      throw redirect({ href: `/${DEFAULT_LOCALE}${rest || ""}` });
    }
  },
  component: () => <Outlet />,
});
