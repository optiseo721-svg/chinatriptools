import type { Metadata } from "next";
import { ArticleHero, Checklist, ContentSection, FAQSection, InlineToolCta } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const faqs = [
  {
    question: "¿Cómo tener internet en China?",
    answer:
      "Puedes preparar eSIM, roaming, SIM local o usar Wi-Fi del aeropuerto como respaldo. Verifica compatibilidad y condiciones antes de viajar."
  },
  {
    question: "¿Funciona una eSIM en China?",
    answer:
      "Depende del proveedor, dispositivo y plan. Comprueba los detalles con el proveedor antes de comprar o activar la eSIM."
  },
  {
    question: "¿Qué pasa si no tengo datos al aterrizar?",
    answer:
      "Conéctate al Wi-Fi del aeropuerto, abre capturas guardadas y evita depender de descargar apps, mapas o instrucciones después de aterrizar."
  },
  {
    question: "¿Por qué el internet importa tanto el primer día?",
    answer:
      "Pagos, mapas, traducción, comunicación con el hotel y cambios de transporte suelen depender de la conexión."
  }
];

export const metadata: Metadata = {
  title: "Internet y eSIM en China para viajeros",
  description:
    "Qué preparar antes de aterrizar en China: eSIM, roaming, Wi-Fi, mapas, pagos y respaldo si no tienes datos móviles.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  alternates: {
    canonical: "/es/internet-esim-china/"
  }
};

export default function InternetEsimPage() {
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
          eyebrow="Internet / eSIM"
          title="Internet y eSIM en China para viajeros"
          description="Tu conexión es la base del primer día: pagos, mapas, traducción y hotel dependen de ella."
          ctaLabel="Comprobar mi conexión"
          ctaEventLabel="internet_esim_hero"
        />
        <article className="content-wrap py-8">
          <ContentSection title="Por qué importa">
            <p>
              Si aterrizas sin datos, cada pequeño paso se vuelve más lento: abrir mapas, traducir, enseñar una dirección,
              confirmar pago o contactar al hotel. Por eso la conexión debe prepararse antes de volar.
            </p>
          </ContentSection>
          <ContentSection title="Opciones de preparación">
            <Checklist
              items={[
                "eSIM: útil si tu teléfono y proveedor son compatibles.",
                "Roaming: simple, pero revisa precio y cobertura.",
                "SIM local: puede requerir tiempo y documentación.",
                "Airport Wi-Fi: respaldo inicial, no plan principal.",
                "Capturas offline: hotel, ruta y datos clave.",
                "Traducción offline: descarga idiomas si la app lo permite."
              ]}
            />
          </ContentSection>
          <InlineToolCta label="internet_esim_inline" />
          <ContentSection title="¿Qué hacer si aterrizas sin datos?">
            <p>
              No salgas del aeropuerto sin abrir la dirección del hotel y una ruta básica. Conéctate a Wi-Fi, toma capturas y
              prepara una alternativa de pago o transporte antes de moverte.
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
