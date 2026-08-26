import type { Metadata } from "next";
import { ArticleHero, Checklist, ContentSection, FAQSection, InlineToolCta } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const faqs = [
  {
    question: "¿Qué necesito para viajar a China?",
    answer:
      "Antes de viajar debes verificar los requisitos oficiales de entrada, preparar internet móvil, una forma de pago, la dirección del hotel en chino y una ruta inicial desde el aeropuerto."
  },
  {
    question: "¿Qué debo preparar antes de volar a China?",
    answer:
      "Lo más práctico es guardar capturas de la dirección del hotel, configurar datos móviles o eSIM, probar el pago móvil si lo usarás y tener una alternativa de transporte."
  },
  {
    question: "¿Necesito internet móvil en China?",
    answer:
      "Es muy recomendable. Mapas, pagos, traducción y contacto con el hotel suelen depender de la conexión durante el primer día."
  },
  {
    question: "¿Debo guardar la dirección del hotel en chino?",
    answer:
      "Sí. La dirección en chino ayuda en taxi, metro, recepción del hotel y al pedir ayuda en el aeropuerto."
  }
];

export const metadata: Metadata = {
  title: "Lista para viajar a China: internet, pagos, hotel y primer día",
  description:
    "Una lista práctica para preparar tu viaje a China y evitar bloqueos el primer día: internet, eSIM, pagos, hotel, transporte y enlaces oficiales.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  alternates: {
    canonical: "/es/lista-para-viajar-a-china/"
  }
};

export default function TravelChecklistPage() {
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
          eyebrow="Preparación"
          title="Lista para viajar a China"
          description="Prepara internet, pagos, hotel y transporte antes de aterrizar. Esta lista se centra en lo que puede bloquearte el primer día."
          ctaLabel="Revisar mi primer día"
          ctaEventLabel="travel_checklist_hero"
        />
        <article className="content-wrap py-8">
          <ContentSection title="Lista rápida">
            <Checklist
              items={[
                "Verificar entrada, visado o tránsito con fuentes oficiales.",
                "Configurar datos móviles, eSIM o roaming antes de aterrizar.",
                "Preparar un método de pago y una alternativa.",
                "Guardar nombre, dirección en chino y teléfono del hotel.",
                "Tener una ruta inicial desde el aeropuerto.",
                "Instalar traducción y guardar frases básicas offline."
              ]}
            />
          </ContentSection>
          <ContentSection title="Antes de reservar">
            <p>
              Verifica la información oficial de entrada o tránsito antes de pagar vuelos y hoteles. Este sitio solo organiza
              una lista de preparación y no decide si puedes entrar, transitar o viajar sin visado.
            </p>
          </ContentSection>
          <ContentSection title="Antes de volar">
            <p>
              El primer día suele fallar por detalles prácticos: falta de internet, pago no probado, dirección del hotel solo
              en alfabeto latino o una ruta que depende de horarios de metro. Guarda capturas y prepara una alternativa simple.
            </p>
          </ContentSection>
          <InlineToolCta label="travel_checklist_inline" />
          <ContentSection title="Esenciales del primer día">
            <p>
              Ten a mano tu pasaporte, dirección del hotel en chino, plan de conexión, app de traducción, método de pago y una
              opción de transporte que puedas usar aunque estés cansado o llegues tarde.
            </p>
          </ContentSection>
          <FAQSection items={faqs} />
        </article>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteFooter />
    </div>
  );
}
