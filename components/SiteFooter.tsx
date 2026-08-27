import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const socialLinks = {
  tiktok: "",
  instagram: "",
  youtube: ""
};

export function SiteFooter() {
  const links = Object.entries(socialLinks).filter(([, href]) => href);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="content-wrap grid gap-6 py-8 text-sm text-slate-600 md:grid-cols-[1.4fr_auto_auto]">
        <div>
          <BrandLogo href="/es/" compact />
          <p className="mt-2 max-w-2xl">
            Herramientas de preparación para viajeros. No somos una fuente oficial ni damos asesoría legal.
          </p>
        </div>
        <nav aria-label="Empresa" className="grid gap-2">
          <p className="font-bold text-slate-950">Sitio</p>
          <Link className="font-semibold hover:text-brand-blue" href="/es/about/">
            Sobre el proyecto
          </Link>
          <Link className="font-semibold hover:text-brand-blue" href="/es/checker/">
            Preparar mi viaje
          </Link>
        </nav>
        <nav aria-label="Políticas" className="grid gap-2">
          <p className="font-bold text-slate-950">Políticas</p>
          <Link className="font-semibold hover:text-brand-blue" href="/es/privacy/">
            Privacidad
          </Link>
          <Link className="font-semibold hover:text-brand-blue" href="/es/cookies/">
            Cookies
          </Link>
        </nav>
        {links.length ? (
          <div className="flex items-center gap-3">
            {links.map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="font-bold capitalize">
                {name}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
