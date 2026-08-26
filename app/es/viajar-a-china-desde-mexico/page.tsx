import type { Metadata } from "next";
import { ArticleHero, Checklist, ContentSection, FAQSection, InlineToolCta, OfficialSourceList } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const faqs = [
  {
    question: "¿Los mexicanos necesitan visa para China?",
    answer:
      "Debes verificarlo con fuentes oficiales antes de viajar. Las reglas dependen del pasaporte, ruta, propósito y fecha del viaje."
  },
  {
    question: "¿Qué necesito para viajar a China desde México?",
    answer:
      "Verifica visa o entrada oficial, prepara conexión móvil, método de pago, hotel en chino y una ruta simple para el primer día."
  },
  {
    question: "¿Qué debo revisar antes de aterrizar en China?",
    answer:
      "Lo más urgente es internet, dirección del hotel, pago, transporte inicial y una alternativa si llegas tarde o no tienes datos."
  }
];

export const metadata: Metadata = {
  title: "Viajar a China desde México: visa, preparación y primer día",
  description:
    "Guía práctica para viajeros mexicanos: verifica requisitos oficiales, prepara internet, pagos, hotel y tu plan de respaldo para el primer día en China.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  alternates: {
    canonical: "/es/viajar-a-china-desde-mexico/"
  }
};

export default function MexicoPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <ArticleHero
          eyebrow="México"
          title="Viajar a China desde México"
          description="Revisa visa, preparación práctica, internet, pagos y primera llegada antes de salir de México."
          ctaLabel="Crea tu plan de respaldo"
          ctaEventLabel="mexico_hero"
        />
        <article className="content-wrap py-8">
          <ContentSection title="Visa y verificación oficial">
            <p>
              La búsqueda sobre visa China mexicanos tiene intención clara, pero este sitio no sustituye a la fuente oficial.
              Antes de reservar, confirma requisitos de entrada, tránsito, documentos y fechas con autoridades oficiales.
            </p>
          </ContentSection>
          <ContentSection title="Preparación para viajeros de México">
            <Checklist
              items={[
                "Revisar visa China para mexicanos con fuente oficial.",
                "Guardar evidencia y enlaces oficiales relevantes.",
                "Preparar internet o eSIM antes de volar.",
                "Planear pago y respaldo por si una app falla.",
                "Guardar hotel en chino y primera ruta.",
                "Evitar conexiones o trenes ajustados el primer día."
              ]}
            />
          </ContentSection>
          <InlineToolCta label="mexico_inline" />
          <ContentSection title="Enlaces oficiales">
            <OfficialSourceList />
          </ContentSection>
          <FAQSection items={faqs} />
        </article>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteFooter />
    </div>
  );
}
