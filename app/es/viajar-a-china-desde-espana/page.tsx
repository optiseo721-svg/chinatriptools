import type { Metadata } from "next";
import { ArticleHero, Checklist, ContentSection, FAQSection, InlineToolCta, OfficialSourceList } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const faqs = [
  {
    question: "¿Qué necesito para viajar a China desde España?",
    answer:
      "Necesitas verificar requisitos oficiales de entrada, visado o tránsito, y preparar internet, pagos, hotel y transporte para el primer día."
  },
  {
    question: "¿Hace falta visado para China desde España?",
    answer:
      "Las reglas pueden cambiar. Verifica siempre con fuentes oficiales chinas o la embajada antes de reservar o viajar."
  },
  {
    question: "¿Cómo preparo internet y pagos en China?",
    answer:
      "Configura datos móviles o eSIM antes de volar y prueba tu método de pago si planeas usar apps móviles."
  }
];

export const metadata: Metadata = {
  title: "Viajar a China desde España: preparación y primer día",
  description:
    "Revisa qué preparar antes de viajar a China desde España: entrada, visado, internet, pagos, hotel y plan de respaldo para el primer día.",
  alternates: {
    canonical: "/es/viajar-a-china-desde-espana/"
  }
};

export default function SpainPage() {
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
          eyebrow="España"
          title="Viajar a China desde España"
          description="Una guía práctica para revisar entrada, visado o visado de tránsito, internet, pagos y llegada al hotel."
          ctaLabel="Crea tu plan de respaldo"
          ctaEventLabel="spain_hero"
        />
        <article className="content-wrap py-8">
          <ContentSection title="Verificación oficial de entrada">
            <p>
              Verifica entrada, visa/visado y tránsito con fuentes oficiales. Este sitio no decide si puedes entrar en China;
              solo organiza una preparación práctica para el primer día.
            </p>
          </ContentSection>
          <ContentSection title="Preparación para el primer día">
            <Checklist
              items={[
                "Guardar dirección del hotel en chino.",
                "Preparar datos móviles o eSIM antes de aterrizar.",
                "Probar pago móvil si vas a depender de él.",
                "Confirmar aeropuerto y primera ruta.",
                "Tener una frase de ayuda en chino.",
                "Guardar enlaces oficiales para revisar cambios."
              ]}
            />
          </ContentSection>
          <InlineToolCta label="spain_inline" />
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
