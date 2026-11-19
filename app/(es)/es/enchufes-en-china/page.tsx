import type { Metadata } from "next";
import Image from "next/image";
import { ArticleHero, Checklist, ContentSection, FAQSection } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Enchufes en China: adaptador y voltaje para tu viaje",
  description: "Comprueba qué adaptador llevar a China continental, cómo leer la etiqueta de entrada de tus dispositivos y cuándo necesitas un convertidor de voltaje.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  keywords: ["enchufes en China", "adaptador China", "voltaje China"],
  alternates: { canonical: "/es/enchufes-en-china/" }
};

const faqs = [
  { question: "¿Necesito un adaptador de enchufe para China?", answer: "Depende de la clavija que lleves y de la toma que encuentres. Si no encajan, lleva un adaptador apropiado. Comprueba también voltaje, frecuencia, potencia y conexión a tierra." },
  { question: "¿Un adaptador convierte 110 V en 220 V?", answer: "No. Solo adapta la conexión física. Si tu aparato no admite 220 V, consulta sus instrucciones antes de usarlo." },
  { question: "¿Puedo cargar el móvil en China?", answer: "Comprueba la etiqueta Input de tu cargador. Si incluye 220 V y 50 Hz, resuelve después la compatibilidad de la clavija o utiliza un cargador adecuado." },
  { question: "¿La información vale también para Hong Kong o Macao?", answer: "No. Esta guía se limita a China continental; verifica por separado las tomas y condiciones de tu destino." }
];

export default function PlugsPage() {
  return <div className="page-shell"><SiteHeader /><main>
    <ArticleHero eyebrow="Preparación / Electricidad" title="Enchufes en China: qué adaptador llevar y cómo comprobar el voltaje" description="Comprueba la clavija y la etiqueta Input de cada aparato antes de viajar." ctaLabel="Crear mi plan de llegada" ctaEventLabel="plugs_hero" reviewedAt="2026-11-10" reviewedLabel="Revisado el 10 de noviembre de 2026" image={{ src: "/images/plugs/china-power-outlets-cover.jpg", alt: "Fotografía de una regleta con varias tomas en China", width: 1920, height: 1080, caption: "Foto: Sam / Olai Ose / Skjaervoy, Wikimedia Commons, CC BY-SA 2.0. Recortada para portada. Es un ejemplo de 2006; no representa todas las tomas actuales." }} />
    <article className="content-wrap max-w-4xl py-8">
      <section className="rounded-lg border border-blue-200 bg-blue-50 p-5 sm:p-6"><h2 className="text-xl font-black text-blue-950">Respuesta rápida</h2><p className="mt-2 leading-7 text-blue-950">En China continental, prepara un adaptador que encaje con tu clavija y con la toma que vayas a usar. La alimentación doméstica nominal es de 220 V y 50 Hz. Comprueba la etiqueta Input: un adaptador cambia la conexión física, pero no el voltaje ni la frecuencia. Esta guía no cubre Hong Kong ni Macao.</p></section>
      <ContentSection title="¿Qué tipo de enchufe se usa en China?"><p>La norma china GB 1002-2024 define formas y dimensiones para enchufes y tomas domésticos monofásicos. Puedes encontrar entradas para dos clavijas planas o tres clavijas planas en disposición angular. Observa la toma real: una toma de hotel, tren o vehículo no tiene por qué admitir cualquier clavija extranjera. Su forma tampoco demuestra compatibilidad eléctrica.</p><p className="mt-4">Compara la clavija de tu cargador con el adaptador y comprueba que este sea apto para una toma china. Si el aparato requiere tierra, el adaptador debe mantenerla. Revisa su límite de corriente o potencia en A o W.</p></ContentSection>
      <figure className="my-8"><Image src="/images/plugs/china-three-pin-sockets.jpg" alt="Dos ejemplos de tomas de pared fotografiadas en China" className="w-full rounded-xl" width="1920" height="1440" /><figcaption className="mt-2 text-sm text-slate-600">Ejemplo real de tomas en China; no todas las instalaciones son iguales. Foto: <a href="https://commons.wikimedia.org/wiki/File:China%27s_3-pin_sockets.jpg" className="underline">水水 / Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/" className="underline">CC BY-SA 3.0</a>. Sin modificaciones.</figcaption></figure>      <ContentSection title="Voltaje: lee la etiqueta Input"><p>Busca Input en el cargador o aparato, no Output. Si indica, por ejemplo, 100–240 V ~ 50/60 Hz, el rango declarado incluye los 220 V y 50 Hz nominales de China continental. Aún debes resolver la forma de la clavija y respetar las instrucciones del fabricante.</p><p className="mt-4">Si solo indica una tensión distinta, como 110 V, no lo conectes directamente a una toma de 220 V. Consulta al fabricante si admite un convertidor adecuado o usa un equipo compatible. La etiqueta del adaptador indica cuánto soporta; no significa que transforme la tensión. Presta especial atención a aparatos de alta potencia como secadores y planchas.</p></ContentSection>
      <figure className="my-8"><Image src="/images/plugs/nokia-ngage-power-supply.jpg" alt="Etiqueta Input de una fuente de alimentación Nokia: 100–240 V y 50–60 Hz" className="w-full rounded-xl" width="1920" height="1543" /><figcaption className="mt-2 text-sm text-slate-600">Ejemplo de etiqueta Input; comprueba siempre tu propio aparato. Foto: <a href="https://commons.wikimedia.org/wiki/File:Nokia-NGage-Power-Supply.jpg" className="underline">Evan-Amos / Wikimedia Commons</a> (dominio público).</figcaption></figure>      <ContentSection title="Lista rápida antes de salir"><Checklist items={["Compara cada clavija con el adaptador y la toma de destino.", "Fotografía la etiqueta Input y verifica que incluya 220 V y 50 Hz.", "Comprueba la conexión a tierra cuando haga falta y respeta el límite en A o W del adaptador.", "Si la etiqueta no es clara, consulta el manual o al fabricante antes de conectar el aparato."]} /><p className="mt-5">Completa tu preparación con la <TrackedLink href="/es/lista-para-viajar-a-china/" eventLabel="plugs_checklist" className="font-bold text-blue-700 underline">lista para viajar a China</TrackedLink> y la <TrackedLink href="/es/checker/" eventLabel="plugs_checker" className="font-bold text-blue-700 underline">tarjeta de respaldo para el primer día</TrackedLink>.</p></ContentSection>
      <FAQSection items={faqs} />
      <ContentSection title="Fuentes"><ul className="list-disc space-y-2 pl-6"><li><a className="text-blue-700 underline" href="https://std.samr.gov.cn/search/stdPage?q=GB+1002">Catálogo oficial chino: GB 1002-2024</a></li><li><a className="text-blue-700 underline" href="https://www.caac.gov.cn/big5/www.caac.gov.cn/ZTZL/RDZT/YTHYWZ/CHRY/SHZN/Electricity/index.html">Autoridad de aviación civil china: 220 V y 50 Hz</a></li><li><a className="text-blue-700 underline" href="https://english.beijing.gov.cn/travellinginbeijing/quickguideontravelservices/traveltips/202108/t20210811_2466837.html">Gobierno de Beijing: ejemplo de toma</a></li><li><a className="text-blue-700 underline" href="https://www.electricalsafetyfirst.org.uk/safety-advice/products-and-appliances/gadgets-entertainment/travel-adaptors/">Electrical Safety First: adaptadores de viaje</a></li></ul></ContentSection>
    </article></main><SiteFooter /></div>;
}




