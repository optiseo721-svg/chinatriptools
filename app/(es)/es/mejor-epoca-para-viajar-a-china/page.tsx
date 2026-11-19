import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentSection, FAQSection, InlineToolCta } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLink } from "@/components/TrackedLink";

const title = "Mejor época para viajar a China: cuándo ir según tu ruta";
const pagePath = "/es/mejor-epoca-para-viajar-a-china/";
const assetPath = "/images/articles/mejor-epoca-para-viajar-a-china/";
const cover = `${assetPath}cover.png`;
const climateSource = "https://www.locpg.gov.cn/zggq/2014-01/04/c_125956314.htm";
const forecastSource = "https://www.wmc-bj.net/publish/forecast.html";
const holidaySource = "https://www.gov.cn/zhengce/content/202511/content_7047090.htm";

const citySamples = [
  { name: "Harbin", temperature: "2,5 °C", file: "harbin-2026-10-27.png" },
  { name: "Beijing", temperature: "13,3 °C", file: "beijing-2026-10-27.png" },
  { name: "Chengdu", temperature: "18,4 °C", file: "chengdu-2026-10-27.png" },
  { name: "Guangzhou", temperature: "29,2 °C", file: "guangzhou-2026-10-27.png" }
];

const regionRows = [
  {
    route: "Beijing, Xi'an y Shanghái",
    window: "Compara primero primavera y otoño",
    check: "Temperatura de cada ciudad, lluvia y festivos."
  },
  {
    route: "Guilin y otras zonas húmedas del sur",
    window: "Depende de la excursión y del paisaje buscado",
    check: "Lluvia, posibles crecidas y avisos para actividades al aire libre."
  },
  {
    route: "Yunnan",
    window: "Elige por localidad y altitud",
    check: "Noches frescas, lluvia y cambios entre valle y montaña."
  },
  {
    route: "Hainan",
    window: "Considera el invierno si buscas tiempo más suave",
    check: "Pronóstico local, afluencia y condiciones del mar."
  },
  {
    route: "Harbin y el nordeste",
    window: "Invierno para nieve; otras fechas para rutas sin frío intenso",
    check: "Equipo de abrigo y estado del transporte."
  }
];

const faqs = [
  {
    question: "¿Cuál es el mejor mes para viajar a China por primera vez?",
    answer: "No hay un mes válido para todas las rutas. Para Beijing, Xi'an y Shanghái, compara semanas de primavera y otoño y revisa después el pronóstico y los festivos del año de viaje."
  },
  {
    question: "¿Es mala idea viajar a China en verano?",
    answer: "No necesariamente. El calor y la lluvia afectan de forma distinta a cada región y actividad. Comprueba las condiciones de tus destinos concretos antes de descartar todo el verano."
  },
  {
    question: "¿Se puede viajar por China en invierno?",
    answer: "Sí. Harbin ofrece una experiencia de frío y nieve, mientras Hainan puede interesar a quien busca temperaturas más suaves. Prepara la ruta y el equipaje para cada lugar."
  },
  {
    question: "¿Hay que evitar todos los festivos chinos?",
    answer: "No siempre, pero conviene consultar el calendario oficial de ese año, comparar disponibilidad y dejar margen en las conexiones. Las fechas de un año no deben reutilizarse para el siguiente."
  }
];

export const metadata: Metadata = {
  title,
  description: "Cuándo viajar a China según tu ruta: Beijing, Guilin, Yunnan, Hainan o Harbin. Compara estaciones, lluvias y festivos antes de elegir fechas.",
  alternates: { canonical: pagePath },
  openGraph: {
    title,
    type: "article",
    url: `https://chinatriptools.com${pagePath}`,
    images: [{ url: cover, width: 1448, height: 1086 }]
  },
  twitter: { card: "summary_large_image", title, images: [cover] }
};

export default function BestTimeToVisitChinaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    inLanguage: "es",
    mainEntityOfPage: `https://chinatriptools.com${pagePath}`,
    image: `https://chinatriptools.com${cover}`,
    dateModified: "2026-10-27",
    author: { "@type": "Organization", name: "China Trip Tools", url: "https://chinatriptools.com/es/about/" }
  };

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <header className="bg-white">
          <div className="content-wrap max-w-4xl py-10">
            <nav aria-label="Ruta de navegación" className="text-sm text-slate-600">
              <Link href="/es/" className="underline">Inicio</Link> / Mejor época para viajar a China
            </nav>
            <p className="eyebrow mt-6">Planificar las fechas</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Para una primera ruta por Beijing, Xi&apos;an y Shanghái, la primavera y el otoño suelen ser buenos puntos de partida. Pero no existe un mes ideal para todo el país. Elige primero los destinos; después compara el tiempo, tus actividades y los festivos del año de viaje.
            </p>
            <p className="mt-4 text-sm text-slate-500">Por el equipo editorial de China Trip Tools · Revisado el 27 de octubre de 2026 · Guía de planificación, no pronóstico meteorológico.</p>
            <figure className="mt-7">
              <Image src={cover} alt="Ilustración fotográfica de la Gran Muralla entre montañas en otoño" width={1448} height={1086} priority sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full rounded-lg" />
              <figcaption className="mt-2 text-xs text-slate-500">Imagen de portada generada para ilustrar el tema; no documenta el tiempo de una fecha concreta.</figcaption>
            </figure>
            <nav aria-label="Contenido" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-brand-green">
              <a href="#regiones" className="underline underline-offset-4">Por región</a>
              <a href="#estaciones" className="underline underline-offset-4">Por estación</a>
              <a href="#festivos" className="underline underline-offset-4">Festivos</a>
              <a href="#planificar" className="underline underline-offset-4">Planifica tu ruta</a>
              <a href="#fuentes" className="underline underline-offset-4">Fuentes</a>
            </nav>
          </div>
        </header>

        <article className="content-wrap max-w-4xl pb-10">
          <ContentSection title="Por qué no hay una única mejor época para toda China">
            <p>
              China se extiende por varios cinturones térmicos, desde el norte frío hasta el sur tropical. También cambian las lluvias entre el sureste y el interior del noroeste, y la altitud crea condiciones particulares en áreas de montaña y de la meseta tibetana. Una misma semana puede requerir ropa muy distinta en Harbin, Beijing y Guangzhou. La <a href={climateSource} className="underline underline-offset-4">descripción oficial del clima de China</a> explica estas diferencias regionales.
            </p>
            <p className="mt-4">Las siguientes capturas muestran solo un ejemplo del <strong>27 de octubre de 2026</strong>, no promedios históricos ni una predicción para otros viajes. Proceden de la <a href={forecastSource} className="underline underline-offset-4">página de previsiones urbanas del Centro Meteorológico Mundial de Beijing</a>, de la Administración Meteorológica de China.</p>
            <figure className="mt-6 border-y border-slate-200 py-5">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-4">
                {citySamples.map((city) => (
                  <a key={city.name} href={`${assetPath}${city.file}`} target="_blank" rel="noopener noreferrer" className="border-b border-slate-200 pb-2 text-slate-800 hover:text-brand-green" aria-label={`Ver captura meteorológica de ${city.name} del 27 de octubre de 2026`}>
                    <span className="block font-semibold">{city.name}</span>
                    <span className="block text-xl font-bold">{city.temperature}</span>
                    <span className="text-xs underline">Ver captura</span>
                  </a>
                ))}
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {citySamples.filter((city) => city.name === "Harbin" || city.name === "Guangzhou").map((city) => (
                  <a key={city.name} href={`${assetPath}${city.file}`} target="_blank" rel="noopener noreferrer" aria-label={`Abrir captura completa de ${city.name}`}>
                    <Image src={`${assetPath}${city.file}`} alt={`Captura meteorológica de ${city.name}, 27 de octubre de 2026`} width={2844} height={974} sizes="(max-width: 640px) 100vw, 420px" className="h-auto w-full border border-slate-200" />
                  </a>
                ))}
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-slate-500">Lecturas puntuales de las 11:20–11:25, hora local, en capturas del mismo día del <a href={forecastSource} className="underline">Centro Meteorológico Mundial de Beijing</a>. Abre cada imagen para ver ciudad, fecha y previsión semanal. No sirven para inferir el clima de una estación completa.</figcaption>
            </figure>
          </ContentSection>

          <div id="regiones" className="scroll-mt-24">
            <ContentSection title="Elige fechas según tu ruta">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm leading-6">
                  <thead><tr className="border-b border-slate-300 text-slate-950"><th className="py-3 pr-4">Ruta o región</th><th className="py-3 pr-4">Punto de partida</th><th className="py-3">Comprueba</th></tr></thead>
                  <tbody>{regionRows.map((row) => <tr key={row.route} className="border-b border-slate-200 align-top"><th scope="row" className="py-3 pr-4 font-semibold text-slate-900">{row.route}</th><td className="py-3 pr-4">{row.window}</td><td className="py-3">{row.check}</td></tr>)}</tbody>
                </table>
              </div>
              <p className="mt-5">La tabla reduce opciones; no garantiza buen tiempo. En una ruta de varias ciudades, consulta cada parada por separado.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-950">Beijing, Xi&apos;an y Shanghái</h3>
              <p className="mt-2">Si caminarás mucho por ciudades históricas, compara semanas de primavera y otoño. Beijing tiene verano cálido y lluvioso e invierno frío y seco; Shanghái es más húmeda y su temporada de lluvias no coincide exactamente con la del norte. Incluso en primavera, la temperatura puede cambiar entre días. Consulta el <a href="https://english.beijing.gov.cn/travellinginbeijing/quickguideontravelservices/traveltips/202108/t20210811_2466837.html" className="underline">portal oficial de Beijing</a> y la <a href="https://cmp.whlyj.sh.gov.cn/CMPEN/sho_init.ac?type=2" className="underline">información turística de Shanghái</a>.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-950">Guilin y el sur húmedo</h3>
              <p className="mt-2">El paisaje verde y la bruma pueden venir acompañados de lluvia. En Guilin, el periodo de mayores precipitaciones incluye parte de la primavera y el verano. Antes de planear ríos, miradores o senderos, consulta el pronóstico y los avisos locales. No extrapoles el tiempo de Guilin a todas las zonas del sur. <a href="https://www.weather.com.cn/cityintro/101300501.shtml" className="underline">Datos climáticos de Guilin</a>.</p>
              <h3 className="mt-6 text-lg font-bold text-slate-950">Yunnan, Hainan y Harbin</h3>
              <p className="mt-2">En Yunnan, decide por localidad y altitud; Kunming, un valle y una ruta de montaña pueden exigir preparativos distintos. Hainan puede interesar en invierno a quien busca un clima más suave. Harbin y el nordeste son opciones para nieve, siempre que prepares ropa y trayectos para el frío. Chengdu, por su parte, está en la cuenca de Sichuan: su captura meteorológica no representa el clima de alta montaña.</p>
            </ContentSection>
          </div>

          <div id="estaciones" className="scroll-mt-24">
            <ContentSection title="Qué esperar de cada estación">
              <ul className="space-y-4">
                <li><strong>Primavera (marzo–mayo):</strong> compara rutas urbanas, pero no presupongas que el norte ya es cálido ni que el sur estará seco. Cerca del Día del Trabajo, verifica las fechas de vacaciones.</li>
                <li><strong>Verano (junio–agosto):</strong> no hay que descartarlo para todo el país. El calor, la humedad y la lluvia pueden afectar de manera distinta a ciudades, costas y zonas elevadas. Revisa avisos antes de actividades al aire libre.</li>
                <li><strong>Otoño (septiembre–noviembre):</strong> es otra ventana útil para rutas de varias ciudades. Comprueba especialmente los primeros días de octubre por el Día Nacional y no confundas una tendencia estacional con buen tiempo garantizado.</li>
                <li><strong>Invierno (diciembre–febrero):</strong> sirve para experiencias de nieve en el nordeste o para buscar destinos meridionales más suaves. Si viajas durante el Año Nuevo lunar, revisa el calendario oficial y los desplazamientos.</li>
              </ul>
            </ContentSection>
          </div>

          <div id="festivos" className="scroll-mt-24">
            <ContentSection title="Festivos chinos: consulta el año exacto">
              <p>El clima no es el único factor. Durante el Año Nuevo lunar, el Día del Trabajo y el Día Nacional puede haber mucha movilidad. En <strong>2026</strong>, el aviso del Consejo de Estado fijó el descanso del Año Nuevo lunar del 15 al 23 de febrero, el Día del Trabajo del 1 al 5 de mayo y el Día Nacional del 1 al 7 de octubre. <strong>Esas fechas no se deben reutilizar para 2027.</strong> Lee el <a href={holidaySource} className="underline">aviso oficial correspondiente a 2026</a> y busca el del año en que viajarás.</p>
              <figure className="mt-6">
                <a href={`${assetPath}holidays-2026.png`} target="_blank" rel="noopener noreferrer" aria-label="Abrir captura completa del aviso oficial de festivos de 2026">
                  <Image src={`${assetPath}holidays-2026.png`} alt="Captura del aviso del Consejo de Estado sobre las vacaciones públicas de 2026" width={1852} height={1430} sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full border border-slate-200" />
                </a>
                <figcaption className="mt-2 text-sm leading-6 text-slate-500">Aviso oficial de 2026, publicado el 4 de noviembre de 2025. Abre la imagen para leerla completa; consulta el aviso del año de tu viaje antes de reservar.</figcaption>
              </figure>
              <p className="mt-4">Viajar en festivos no es imposible. Si tienes flexibilidad, compara días próximos y deja margen en las conexiones. Verifica las condiciones de compra y cambio de cada billete antes de pagar.</p>
            </ContentSection>
          </div>

          <div id="planificar" className="scroll-mt-24">
            <ContentSection title="Decide tus fechas en cinco pasos">
              <ol className="list-decimal space-y-3 pl-5">
                <li>Anota ciudades y actividades imprescindibles.</li>
                <li>Compara el clima habitual de cada lugar y consulta después el pronóstico para tu semana.</li>
                <li>Revisa los festivos oficiales del año de viaje.</li>
                <li>Consulta vuelos, <Link href="/es/trenes-en-china/" className="underline">trenes entre ciudades</Link> y alojamiento para esas mismas fechas; no supongas que un mes será más barato sin mirar precios reales.</li>
                <li>Deja margen para cambiar excursiones que dependan del tiempo.</li>
              </ol>
              <p className="mt-5">Después de elegir la ruta, utiliza nuestra <Link href="/es/lista-para-viajar-a-china/" className="underline">lista de preparación</Link>. Si necesitas comprobar visado o entrada, empieza por la <Link href="/es/visa-para-china/" className="underline">guía general</Link> y verifica el caso de tu pasaporte en una fuente oficial.</p>
            </ContentSection>
          </div>

          <InlineToolCta label="best_time_inline:checker" />
          <FAQSection items={faqs} />
          <div id="fuentes" className="scroll-mt-24">
            <ContentSection title="Fuentes y alcance">
              <p>Esta página ayuda a planificar fechas; no ofrece un pronóstico ni garantiza precios o disponibilidad. Las capturas de tiempo son ejemplos puntuales. La portada es una imagen generada y no una fotografía documental. Antes de viajar, consulta los avisos meteorológicos, de transporte y de festivos vigentes.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li><a href={climateSource} className="underline">Descripción oficial de los climas de China</a></li>
                <li><a href={forecastSource} className="underline">Centro Meteorológico Mundial de Beijing: previsiones urbanas</a></li>
                <li><a href="https://english.beijing.gov.cn/travellinginbeijing/quickguideontravelservices/traveltips/202108/t20210811_2466837.html" className="underline">Portal oficial de Beijing: tiempo y preparación</a></li>
                <li><a href="https://cmp.whlyj.sh.gov.cn/CMPEN/sho_init.ac?type=2" className="underline">Portal turístico de Shanghái: clima</a></li>
                <li><a href="https://www.weather.com.cn/cityintro/101300501.shtml" className="underline">Datos climáticos de Guilin</a></li>
                <li><a href={holidaySource} className="underline">Consejo de Estado: vacaciones públicas de 2026</a></li>
              </ul>
              <p className="mt-5 text-sm text-slate-500">Para continuar: <TrackedLink href="/es/checker/" eventLabel="best_time_sources:checker" className="underline">prepara una tarjeta de respaldo para tu primer día</TrackedLink>.</p>
            </ContentSection>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <SiteFooter />
    </div>
  );
}
