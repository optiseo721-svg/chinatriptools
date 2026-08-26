const socialLinks = {
  tiktok: "",
  instagram: "",
  youtube: ""
};

export function SiteFooter() {
  const links = Object.entries(socialLinks).filter(([, href]) => href);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="content-wrap grid gap-4 py-8 text-sm text-slate-600 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-bold text-slate-950">China Trip Tools</p>
          <p className="mt-2 max-w-2xl">
            Herramientas de preparación para viajeros. No somos una fuente oficial ni damos asesoría legal.
          </p>
        </div>
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
