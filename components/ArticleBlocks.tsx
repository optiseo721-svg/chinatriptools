import { CheckCircle2, ExternalLink } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";

export type FAQItem = {
  question: string;
  answer: string;
};

export function ArticleHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaEventLabel
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaEventLabel: string;
}) {
  return (
    <section className="bg-white">
      <div className="content-wrap py-10 md:py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-7">
          <TrackedLink className="button-primary" href="/es/checker/" eventLabel={ctaEventLabel}>
            {ctaLabel}
          </TrackedLink>
        </div>
        <p className="mt-5 text-sm font-semibold text-slate-500">
          This tool is for travel preparation only. It is not legal advice.
        </p>
      </div>
    </section>
  );
}

export function ContentSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-200 py-8">
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <div className="mt-4 text-base leading-8 text-slate-700">{children}</div>
    </section>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 font-semibold text-slate-700">
          <CheckCircle2 className="mt-0.5 shrink-0 text-brand-green" size={18} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="border-t border-slate-200 py-8">
      <h2 className="text-2xl font-black text-slate-950">FAQ</h2>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <details key={item.question} className="card p-4">
            <summary className="cursor-pointer text-base font-black text-slate-950">{item.question}</summary>
            <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function InlineToolCta({ label }: { label: string }) {
  return (
    <aside className="my-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
      <h2 className="text-xl font-black text-blue-950">Genera tu First-Day Backup Card</h2>
      <p className="mt-2 leading-7 text-blue-900">
        Responde 5 preguntas rápidas y guarda una tarjeta de respaldo antes de aterrizar en China.
      </p>
      <div className="mt-4">
        <TrackedLink className="button-primary" href="/es/checker/" eventLabel={label}>
          Crear mi plan
        </TrackedLink>
      </div>
    </aside>
  );
}

export function OfficialSourceList() {
  const links = [
    ["Visit China", "https://english.www.gov.cn/services/visitChina/"],
    ["NIA visa-free transit policy", "https://en.nia.gov.cn/n147418/n147463/c183412/content.html"],
    ["12306", "https://www.12306.cn/en/index.html"]
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {links.map(([label, href]) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 font-bold text-slate-800 hover:border-blue-300"
        >
          {label}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
