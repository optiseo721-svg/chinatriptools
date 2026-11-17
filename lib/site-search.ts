import { guideGroups } from "./guides";

export const searchItems = [
  { href: "/es/", title: "China Trip Tools", description: "Herramientas y guías para preparar tu viaje a China.", keywords: "inicio viaje china" },
  { href: "/es/guias/", title: "Todas las guías", description: "Explora todas nuestras guías de viaje a China.", keywords: "artículos temas contenido" },
  { href: "/es/checker/", title: "Preparar mi viaje", description: "Crea una tarjeta de respaldo para tu primer día en China.", keywords: "herramienta plan primer día checklist" },
  ...guideGroups.flatMap((group) => group.guides.map((guide) => ({
    href: guide.href,
    title: guide.title,
    description: guide.description,
    keywords: group.title
  })))
];

function normalize(value: string) {
  return value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function searchSite(query: string) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];

  return searchItems
    .map((item) => {
      const title = normalize(item.title);
      const description = normalize(item.description);
      const keywords = normalize(item.keywords);
      if (!terms.every((term) => title.includes(term) || description.includes(term) || keywords.includes(term))) return null;
      const score = terms.reduce((total, term) => total + (title.includes(term) ? 5 : 0) + (keywords.includes(term) ? 2 : 0) + (description.includes(term) ? 1 : 0), 0);
      return { ...item, score };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "es"));
}
