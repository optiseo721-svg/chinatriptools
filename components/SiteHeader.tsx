import Link from "next/link";
import { Check, ChevronDown, Languages, Menu } from "lucide-react";

const guideLinks = [
  { href: "/es/lista-para-viajar-a-china/", label: "Lista para viajar a China" },
  { href: "/es/internet-esim-china/", label: "Internet y eSIM" },
  { href: "/es/viajar-a-china-desde-espana/", label: "Viajar desde España" },
  { href: "/es/viajar-a-china-desde-mexico/", label: "Viajar desde México" }
];

const summaryClass =
  "flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 font-bold text-slate-700 hover:bg-slate-100 [&::-webkit-details-marker]:hidden";

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
          <Link key={link.href} className="rounded-md px-3 py-2.5 font-semibold text-slate-700 hover:bg-slate-100" href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

function LanguageMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <details className={mobile ? "group/language" : "group/language relative"} name={mobile ? "mobile-header-menu" : "desktop-header-menu"}>
      <summary className={summaryClass} aria-label="Cambiar idioma">
        <Languages aria-hidden="true" className="size-4" strokeWidth={2.5} />
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
        <Link className="flex items-center justify-between rounded-md px-3 py-2.5 font-semibold text-slate-900 hover:bg-slate-100" href="/es/" lang="es">
          Español
          <Check aria-hidden="true" className="size-4 text-blue-600" strokeWidth={3} />
        </Link>
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="content-wrap flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/es/" className="flex flex-col" aria-label="China Trip Tools home">
          <span className="text-base font-black text-slate-950">China Trip Tools</span>
          <span className="text-xs font-semibold text-slate-500">Plan de respaldo para China</span>
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-2 text-sm md:flex">
          <Link className="rounded-md px-3 py-2 font-bold text-slate-700 hover:bg-slate-100" href="/es/checker/">
            Herramienta
          </Link>
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
            <Link className="min-h-11 rounded-md px-3 py-3 font-bold text-slate-800 hover:bg-slate-100" href="/es/checker/">
              Herramienta
            </Link>
            <GuideMenu mobile />
            <div className="my-1 h-px bg-slate-200" />
            <LanguageMenu mobile />
          </nav>
        </details>
      </div>
    </header>
  );
}
