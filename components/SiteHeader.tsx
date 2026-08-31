import { Check, ChevronDown, Globe2, Menu } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { TrackedLink } from "./TrackedLink";

const guideLinks = [
  { href: "/es/lista-para-viajar-a-china/", label: "Lista para viajar a China" },
  { href: "/es/internet-esim-china/", label: "Internet y eSIM" }
];

const summaryClass =
  "flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 font-bold text-slate-700 hover:bg-slate-100 [&::-webkit-details-marker]:hidden";

const languageSummaryClass =
  "flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 font-black text-slate-800 hover:bg-slate-200 [&::-webkit-details-marker]:hidden";

function GuideMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <details className={mobile ? "group/guide" : "group/guide relative"} name={mobile ? "mobile-header-menu" : "desktop-header-menu"}>
      <summary className={summaryClass}>
        Guías
        <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open/guide:rotate-180" strokeWidth={2.5} />
      </summary>
      <div
        className={
          mobile
            ? "mt-1 grid gap-1 border-l border-slate-200 pl-3"
            : "absolute right-0 top-[calc(100%+8px)] z-30 grid w-72 gap-1 rounded-lg border border-slate-200 bg-white p-2 shadow-lg"
        }
      >
        {guideLinks.map((link) => (
          <TrackedLink
            key={link.href}
            className="rounded-md px-3 py-2.5 font-semibold text-slate-700 hover:bg-slate-100"
            href={link.href}
            eventName="nav_click"
            eventLabel={`guide:${link.label}`}
          >
            {link.label}
          </TrackedLink>
        ))}
      </div>
    </details>
  );
}

function LanguageMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <details className={mobile ? "group/language" : "group/language relative"} name={mobile ? "mobile-header-menu" : "desktop-header-menu"}>
      <summary className={mobile ? summaryClass : languageSummaryClass} aria-label="Cambiar idioma">
        <Globe2 aria-hidden="true" className={mobile ? "size-4" : "size-5"} strokeWidth={2.5} />
        <span>ES</span>
        <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open/language:rotate-180" strokeWidth={2.5} />
      </summary>
      <div
        className={
          mobile
            ? "mt-1 border-l border-slate-200 pl-3"
            : "absolute right-0 top-[calc(100%+8px)] z-30 w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-lg"
        }
      >
        <TrackedLink
          className="flex items-center justify-between rounded-md px-3 py-2.5 font-semibold text-slate-900 hover:bg-slate-100"
          href="/es/"
          eventName="language_click"
          eventLabel="es"
        >
          Español
          <Check aria-hidden="true" className="size-4 text-blue-600" strokeWidth={3} />
        </TrackedLink>
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="content-wrap flex min-h-16 items-center justify-between gap-4 py-3">
        <BrandLogo href="/es/" />
        <nav aria-label="Navegación principal" className="hidden items-center gap-2 text-sm md:flex">
          <TrackedLink
            className="rounded-md px-3 py-2 font-bold text-slate-700 hover:bg-slate-100"
            href="/es/checker/"
            eventName="nav_click"
            eventLabel="prepare_trip"
          >
            Preparar mi viaje
          </TrackedLink>
          <GuideMenu />
          <span aria-hidden="true" className="mx-1 h-6 w-px bg-slate-200" />
          <LanguageMenu />
        </nav>
        <details className="relative md:hidden">
          <summary
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 [&::-webkit-details-marker]:hidden"
            aria-label="Abrir navegación"
          >
            <Menu aria-hidden="true" className="size-5" strokeWidth={2.5} />
          </summary>
          <nav
            aria-label="Navegación móvil"
            className="absolute right-0 top-[calc(100%+8px)] z-30 grid w-[min(19rem,calc(100vw-32px))] gap-1 rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-lg"
          >
            <TrackedLink
              className="min-h-11 rounded-md px-3 py-3 font-bold text-slate-800 hover:bg-slate-100"
              href="/es/checker/"
              eventName="nav_click"
              eventLabel="mobile_prepare_trip"
            >
              Preparar mi viaje
            </TrackedLink>
            <GuideMenu mobile />
            <div className="my-1 h-px bg-slate-200" />
            <LanguageMenu mobile />
          </nav>
        </details>
      </div>
    </header>
  );
}
