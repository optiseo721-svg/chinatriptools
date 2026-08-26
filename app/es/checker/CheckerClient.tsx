"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Clipboard, ClipboardCheck, ExternalLink, RotateCcw } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type ArrivalCity =
  | "Beijing"
  | "Shanghai"
  | "Guangzhou"
  | "Shenzhen"
  | "Chongqing"
  | "Chengdu"
  | "Xi'an"
  | "Hangzhou"
  | "Other";
type ArrivalTime = "daytime" | "late_night";
type MobileDataStatus = "not_ready" | "planned" | "installed" | "tested";
type PaymentStatus = "not_started" | "app_installed" | "card_linked" | "small_payment_tested";
type HotelArrivalStatus = "not_ready" | "address_saved" | "address_route_saved";
type TrainWithin24h = "no" | "yes_booked" | "yes_not_booked";
type OfficialCheck = "yes" | "need_verify";
type ReadinessStatus = "Critical" | "Needs action" | "Ready";

type Answers = {
  officialCheck?: OfficialCheck;
  arrivalCity?: ArrivalCity;
  arrivalTime?: ArrivalTime;
  mobileDataStatus?: MobileDataStatus;
  paymentStatus?: PaymentStatus;
  hotelArrivalStatus?: HotelArrivalStatus;
  trainWithin24h: TrainWithin24h;
};

type Choice<T extends string> = {
  value: T;
  label: string;
  help?: string;
};

const defaultAnswers: Answers = {
  trainWithin24h: "no"
};

const visibleCities: Choice<ArrivalCity>[] = [
  { value: "Beijing", label: "Pekín / Beijing" },
  { value: "Shanghai", label: "Shanghái / Shanghai" },
  { value: "Guangzhou", label: "Cantón / Guangzhou" },
  { value: "Shenzhen", label: "Shenzhen" }
];

const moreCities: Choice<ArrivalCity>[] = [
  { value: "Chongqing", label: "Chongqing" },
  { value: "Chengdu", label: "Chengdu" },
  { value: "Xi'an", label: "Xi'an" },
  { value: "Hangzhou", label: "Hangzhou" },
  { value: "Other", label: "Otra ciudad" }
];

const arrivalTimes: Choice<ArrivalTime>[] = [
  { value: "daytime", label: "Durante el día" },
  { value: "late_night", label: "De noche / muy tarde" }
];

const mobileDataChoices: Choice<MobileDataStatus>[] = [
  { value: "not_ready", label: "No preparado" },
  { value: "planned", label: "Planeado" },
  { value: "installed", label: "Instalado" },
  { value: "tested", label: "Probado" }
];

const paymentChoices: Choice<PaymentStatus>[] = [
  { value: "not_started", label: "Sin preparar" },
  { value: "app_installed", label: "App instalada" },
  { value: "card_linked", label: "Tarjeta vinculada" },
  { value: "small_payment_tested", label: "Pago pequeño probado" }
];

const hotelChoices: Choice<HotelArrivalStatus>[] = [
  { value: "not_ready", label: "No preparado" },
  { value: "address_saved", label: "Dirección guardada" },
  { value: "address_route_saved", label: "Dirección + ruta guardadas" }
];

const trainChoices: Choice<TrainWithin24h>[] = [
  { value: "no", label: "No" },
  { value: "yes_booked", label: "Sí, reservado" },
  { value: "yes_not_booked", label: "Sí, no reservado" }
];

const officialChoices: Choice<OfficialCheck>[] = [
  { value: "yes", label: "Sí" },
  { value: "need_verify", label: "Todavía necesito verificar" }
];

const lastReviewed = "2026-08-25";

const cityTips: Record<ArrivalCity, string> = {
  Beijing: "Confirma a qué aeropuerto llegas y deja margen suficiente para el primer traslado.",
  Shanghai: "Revisa si llegas a Pudong o Hongqiao antes de elegir la primera ruta.",
  Guangzhou: "Ten lista la dirección del hotel en chino antes de salir del aeropuerto.",
  Shenzhen: "Confirma tu contexto de entrada si combinas Hong Kong o Macao en el mismo viaje.",
  Chongqing: "Revisa dos veces la ruta del aeropuerto al hotel, especialmente si llegas tarde.",
  Chengdu: "Evita una conexión de tren demasiado ajustada el primer día si es tu primera vez.",
  "Xi'an": "Guarda la dirección del hotel y el nombre de la estación en chino antes de tomar taxi o metro.",
  Hangzhou: "Confirma si tu primera ruta depende del horario del metro o de un punto de recogida.",
  Other: "Usa la lista general del primer día y verifica las opciones locales de transporte antes de aterrizar."
};

const officialLinks = [
  {
    label: "Portal oficial Visit China",
    href: "https://english.www.gov.cn/services/visitChina/"
  },
  {
    label: "Política de tránsito sin visa de la NIA",
    href: "https://en.nia.gov.cn/n147418/n147463/c183412/content.html"
  },
  {
    label: "Guía oficial de pagos para visitantes extranjeros",
    href: "https://english.www.gov.cn/services/202405/27/content_WS6653eafac6d0868f4e8e753f.html"
  },
  {
    label: "FAQ oficial de 12306",
    href: "https://www.12306.cn/en/index.html"
  }
];

function getCompletedCount(answers: Answers) {
  return [
    answers.arrivalCity,
    answers.arrivalTime,
    answers.mobileDataStatus,
    answers.paymentStatus,
    answers.hotelArrivalStatus
  ].filter(Boolean).length;
}

function choiceButtonClass(isSelected: boolean) {
  return [
    "min-h-12 rounded-lg border px-4 py-3 text-left text-sm font-bold leading-5 transition",
    isSelected
      ? "border-brand-blue bg-blue-50 text-blue-900 shadow-sm"
      : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50"
  ].join(" ");
}

function evaluateStatus(answers: Answers): ReadinessStatus {
  const critical =
    answers.mobileDataStatus === "not_ready" ||
    answers.hotelArrivalStatus === "not_ready" ||
    (answers.arrivalTime === "late_night" && answers.hotelArrivalStatus !== "address_route_saved") ||
    (answers.paymentStatus === "not_started" &&
      (answers.arrivalTime === "late_night" || answers.hotelArrivalStatus !== "address_route_saved"));

  if (critical) {
    return "Critical";
  }

  const needsAction =
    answers.mobileDataStatus === "planned" ||
    answers.mobileDataStatus === "installed" ||
    answers.paymentStatus === "app_installed" ||
    answers.paymentStatus === "card_linked" ||
    answers.hotelArrivalStatus === "address_saved" ||
    answers.trainWithin24h === "yes_not_booked" ||
    answers.officialCheck === "need_verify";

  return needsAction ? "Needs action" : "Ready";
}

function getTopActions(answers: Answers) {
  const actions: string[] = [];

  if (answers.mobileDataStatus === "not_ready") {
    actions.push("Prepara datos móviles antes de aterrizar. Pagos, mapas y traducción dependen de la conexión.");
  }
  if (answers.hotelArrivalStatus === "not_ready") {
    actions.push("Guarda el nombre del hotel, la dirección en chino y el teléfono antes de volar.");
  }
  if (answers.hotelArrivalStatus !== "address_route_saved") {
    actions.push("Prepara la ruta del aeropuerto al hotel y guarda una captura offline.");
  }
  if (answers.paymentStatus === "not_started") {
    actions.push("Prepara una alternativa de pago. No dependas de una sola app el día de llegada.");
  }
  if (answers.paymentStatus === "app_installed" || answers.paymentStatus === "card_linked") {
    actions.push("Prueba el pago móvil con una compra pequeña antes de depender de él.");
  }
  if (answers.officialCheck === "need_verify") {
    actions.push("Verifica tu entrada o tránsito con una fuente oficial antes de reservar.");
  }
  if (answers.trainWithin24h === "yes_not_booked") {
    actions.push("Reserva o verifica tu primer tren y confirma el nombre exacto de la estación.");
  }
  if (!actions.length) {
    actions.push("Guarda tu respaldo de traducción y conserva esta tarjeta disponible offline.");
  }

  return actions.slice(0, 3);
}

function getStatusSummary(status: ReadinessStatus) {
  if (status === "Critical") {
    return "Hay un punto que puede bloquearte el primer día. Resuélvelo antes de aterrizar.";
  }
  if (status === "Needs action") {
    return "La base está encaminada, pero todavía conviene cerrar algunos detalles antes de salir.";
  }
  return "Tus puntos críticos del primer día están bien preparados. Guarda la tarjeta antes de volar.";
}

function getStatusLabel(status: ReadinessStatus) {
  if (status === "Critical") {
    return "Crítico";
  }
  if (status === "Needs action") {
    return "Requiere acción";
  }
  return "Listo";
}

function getChoiceLabel<T extends string>(choices: Choice<T>[], value?: T) {
  return choices.find((choice) => choice.value === value)?.label;
}

function getTrainLabel(value: TrainWithin24h) {
  return getChoiceLabel(trainChoices, value) || "No";
}

function statusClass(status: ReadinessStatus) {
  if (status === "Critical") {
    return "border-red-300 bg-red-50 text-red-950";
  }
  if (status === "Needs action") {
    return "border-amber-300 bg-amber-50 text-amber-950";
  }
  return "border-green-300 bg-green-50 text-green-950";
}

function getFirstSixtyMinutes(answers: Answers) {
  const firstStep =
    answers.mobileDataStatus === "tested"
      ? "Activa los datos móviles o el roaming que ya preparaste."
      : "Conéctate al Wi-Fi del aeropuerto o activa tu eSIM/roaming antes de salir.";

  const routeStep =
    answers.arrivalTime === "late_night"
      ? "Usa la ruta guardada al hotel y evita improvisar traslados complejos de noche."
      : "Sigue la ruta guardada del aeropuerto al hotel.";

  return [
    firstStep,
    "Abre la dirección del hotel en chino y tenla lista para taxi, metro o check-in.",
    "Comprueba si tu app de pago funciona antes de depender de ella fuera del aeropuerto.",
    routeStep,
    "Ten tu pasaporte a mano para el check-in del hotel."
  ];
}

function getFallbacks(answers: Answers) {
  const fallbacks: { title: string; body: string }[] = [];

  if (answers.mobileDataStatus !== "tested") {
    fallbacks.push({
      title: "Sin datos móviles",
      body: "Conéctate primero al Wi-Fi del aeropuerto, abre tus capturas guardadas y evita descargar mapas o apps de pago después de aterrizar."
    });
  }
  if (answers.paymentStatus !== "small_payment_tested") {
    fallbacks.push({
      title: "Pago móvil no probado",
      body: "Prepara un segundo método de pago o una pequeña alternativa en efectivo. No salgas del aeropuerto dependiendo de una app no probada."
    });
  }
  if (answers.hotelArrivalStatus !== "address_route_saved") {
    fallbacks.push({
      title: "Hotel o transporte no preparado",
      body: "Guarda el nombre del hotel, la dirección en chino, el teléfono y la primera ruta como capturas antes de volar."
    });
  }
  if (answers.arrivalTime === "late_night") {
    fallbacks.push({
      title: "Llegada nocturna",
      body: "Usa una alternativa simple como taxi del aeropuerto o transporte oficial. Evita conexiones ajustadas o cambios de ruta complejos."
    });
  }
  if (answers.trainWithin24h !== "no") {
    fallbacks.push({
      title: "Tren en las primeras 24 horas",
      body: "Confirma la estación exacta, la hora de salida y los datos del pasaporte. Las ciudades grandes pueden tener varias estaciones."
    });
  }

  return fallbacks;
}

function buildBackupCard(answers: Answers, status: ReadinessStatus, topActions: string[]) {
  const mobileFallback =
    answers.mobileDataStatus === "tested"
      ? "Datos móviles probados antes de llegar."
      : "Usa primero el Wi-Fi del aeropuerto; guarda dirección del hotel y ruta en capturas offline.";
  const paymentFallback =
    answers.paymentStatus === "small_payment_tested"
      ? "Pago móvil probado antes de depender de él."
      : "Prepara un segundo método de pago o una pequeña alternativa en efectivo.";
  const hotelFallback =
    answers.hotelArrivalStatus === "address_route_saved"
      ? "Dirección del hotel en chino y primera ruta guardadas."
      : "Guarda nombre del hotel, dirección en chino, teléfono y captura de ruta antes de aterrizar.";

  return [
    "Mi tarjeta de respaldo para el primer día en China",
    "",
    `Estado: ${getStatusLabel(status)}`,
    `Ciudad de llegada: ${getChoiceLabel([...visibleCities, ...moreCities], answers.arrivalCity) || "No seleccionada"}`,
    `Hora de llegada: ${answers.arrivalTime === "late_night" ? "De noche / muy tarde" : "Durante el día"}`,
    `Nota de ciudad: ${answers.arrivalCity ? cityTips[answers.arrivalCity] : "Usa la lista general del primer día."}`,
    "",
    "Acciones principales:",
    ...topActions.map((action, index) => `${index + 1}. ${action}`),
    "",
    `Respaldo de internet: ${mobileFallback}`,
    `Respaldo de pago: ${paymentFallback}`,
    `Respaldo de hotel / transporte: ${hotelFallback}`,
    "Traducción: instala una app de traducción y descarga español/chino offline si está disponible.",
    "Frase útil en chino: 请帮我确认这个酒店地址 (Por favor, ayúdeme a confirmar esta dirección del hotel).",
    "Verificación oficial: revisa embajada china o inmigración antes de viajar.",
    `Última revisión: ${lastReviewed}`
  ].join("\n");
}

function ChoiceGroup<T extends string>({
  label,
  description,
  value,
  choices,
  columns = "md:grid-cols-2",
  onChange
}: {
  label: string;
  description?: string;
  value?: T;
  choices: Choice<T>[];
  columns?: string;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <legend className="px-1 text-base font-black text-slate-950">{label}</legend>
      {description ? <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p> : null}
      <div className={`mt-4 grid grid-cols-1 gap-3 ${columns}`}>
        {choices.map((choice) => (
          <button
            key={choice.value}
            type="button"
            className={choiceButtonClass(value === choice.value)}
            aria-pressed={value === choice.value}
            onClick={() => onChange(choice.value)}
          >
            {choice.label}
            {choice.help ? <span className="mt-1 block text-xs font-semibold text-slate-500">{choice.help}</span> : null}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function CheckerClient() {
  const [answers, setAnswers] = useState<Answers>(defaultAnswers);
  const [showMoreCities, setShowMoreCities] = useState(false);
  const [showTrain, setShowTrain] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    trackEvent("checker_start", { page: "checker" });
  }, []);

  const completedCount = useMemo(() => getCompletedCount(answers), [answers]);
  const canGenerate = completedCount === 5;
  const status = useMemo(() => evaluateStatus(answers), [answers]);
  const topActions = useMemo(() => getTopActions(answers), [answers]);
  const firstSixtyMinutes = useMemo(() => getFirstSixtyMinutes(answers), [answers]);
  const triggeredFallbacks = useMemo(() => getFallbacks(answers), [answers]);
  const backupCard = useMemo(() => buildBackupCard(answers, status, topActions), [answers, status, topActions]);

  function updateAnswer<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((current) => ({ ...current, [key]: value }));
    if (key !== "officialCheck" && key !== "trainWithin24h") {
      trackEvent("checker_step_complete", { step: String(key), value: String(value) });
    }
  }

  function openMoreCities() {
    setShowMoreCities((current) => {
      if (!current) {
        trackEvent("city_more_open");
      }
      return !current;
    });
  }

  function openTrain() {
    setShowTrain((current) => {
      if (!current) {
        trackEvent("optional_train_open");
      }
      return !current;
    });
  }

  function generateCard() {
    if (!canGenerate) {
      return;
    }
    setGenerated(true);
    setCopied(false);
    trackEvent("checker_result_view", {
      city: answers.arrivalCity,
      arrival_time: answers.arrivalTime,
      status
    });
  }

  async function copyBackupCard() {
    try {
      await navigator.clipboard.writeText(backupCard);
      setCopied(true);
      trackEvent("backup_card_copy", { status });
    } catch {
      setCopied(false);
    }
  }

  function resetChecker() {
    setAnswers(defaultAnswers);
    setGenerated(false);
    setShowTrain(false);
    setShowMoreCities(false);
    setCopied(false);
    trackEvent("checker_start", { action: "reset" });
  }

  return (
    <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="card p-5 md:p-6">
        <div className="mb-5 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500">Progreso</p>
            <p className="text-2xl font-black text-slate-950">{completedCount} / 5 completadas</p>
          </div>
          <button type="button" className="button-secondary" onClick={resetChecker}>
            <RotateCcw size={16} aria-hidden="true" />
            Empezar de nuevo
          </button>
        </div>

        <div className="grid gap-5">
          <ChoiceGroup
            label="¿Ya verificaste tu entrada o ruta de tránsito con una fuente oficial?"
            description="Este recordatorio no decide si necesitas visa ni si puedes entrar."
            value={answers.officialCheck}
            choices={officialChoices}
            onChange={(value) => updateAnswer("officialCheck", value)}
          />

          <fieldset className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <legend className="px-1 text-base font-black text-slate-950">¿Dónde aterrizas?</legend>
            <p className="mt-1 text-sm leading-6 text-slate-600">Elige la ciudad donde empieza tu primer día.</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {visibleCities.map((city) => (
                <button
                  key={city.value}
                  type="button"
                  className={choiceButtonClass(answers.arrivalCity === city.value)}
                  aria-pressed={answers.arrivalCity === city.value}
                  onClick={() => updateAnswer("arrivalCity", city.value)}
                >
                  {city.label}
                </button>
              ))}
            </div>
            {showMoreCities ? (
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {moreCities.map((city) => (
                  <button
                    key={city.value}
                    type="button"
                    className={choiceButtonClass(answers.arrivalCity === city.value)}
                    aria-pressed={answers.arrivalCity === city.value}
                    onClick={() => updateAnswer("arrivalCity", city.value)}
                  >
                    {city.label}
                  </button>
                ))}
              </div>
            ) : null}
            {answers.arrivalCity === "Other" ? (
              <p className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm font-semibold leading-6 text-blue-950">
                Usaremos una recomendación general para el primer día. No pedimos el nombre de la ciudad para evitar datos
                personales y mantener el resultado simple.
              </p>
            ) : null}
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-black text-brand-blue"
              onClick={openMoreCities}
              aria-expanded={showMoreCities}
            >
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={showMoreCities ? "rotate-180 transition" : "transition"}
              />
              {showMoreCities ? "Ver menos ciudades" : "Más ciudades"}
            </button>
          </fieldset>

          <ChoiceGroup
            label="¿A qué hora llegas?"
            value={answers.arrivalTime}
            choices={arrivalTimes}
            onChange={(value) => updateAnswer("arrivalTime", value)}
          />

          <ChoiceGroup
            label="¿Tienes internet móvil preparado?"
            description="Mapas, pagos, traducción y ruta al hotel dependen de tu conexión."
            value={answers.mobileDataStatus}
            choices={mobileDataChoices}
            onChange={(value) => updateAnswer("mobileDataStatus", value)}
          />

          <ChoiceGroup
            label="¿Tienes el pago preparado?"
            description="No dependas de una sola app hasta haberla probado."
            value={answers.paymentStatus}
            choices={paymentChoices}
            onChange={(value) => updateAnswer("paymentStatus", value)}
          />

          <ChoiceGroup
            label="¿Tienes preparada la llegada al hotel?"
            description="Nombre del hotel, dirección en chino y primera ruta son clave al aterrizar."
            value={answers.hotelArrivalStatus}
            choices={hotelChoices}
            columns="md:grid-cols-3"
            onChange={(value) => updateAnswer("hotelArrivalStatus", value)}
          />

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left text-base font-black text-slate-950"
              onClick={openTrain}
              aria-expanded={showTrain}
            >
              ¿Tomarás un tren en las primeras 24 horas?
              <ChevronDown size={18} aria-hidden="true" className={showTrain ? "rotate-180 transition" : "transition"} />
            </button>
            {showTrain ? (
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {trainChoices.map((choice) => (
                  <button
                    key={choice.value}
                    type="button"
                    className={choiceButtonClass(answers.trainWithin24h === choice.value)}
                    aria-pressed={answers.trainWithin24h === choice.value}
                    onClick={() => updateAnswer("trainWithin24h", choice.value)}
                  >
                    {choice.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <button
            type="button"
            className="button-primary w-full disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:text-slate-600"
            onClick={generateCard}
            disabled={!canGenerate}
          >
            <ClipboardCheck size={18} aria-hidden="true" />
            Generar mi tarjeta de respaldo
          </button>
          {!canGenerate ? (
            <p className="text-center text-sm font-semibold text-slate-500">
              Completa las 5 revisiones obligatorias para generar tu tarjeta.
            </p>
          ) : null}
        </div>
      </div>

      <aside className="card h-fit p-5">
        <p className="text-sm font-bold text-slate-500">Selección actual</p>
        <dl className="mt-4 grid gap-3 text-sm">
          {[
            ["Ciudad", getChoiceLabel([...visibleCities, ...moreCities], answers.arrivalCity) || "Sin seleccionar"],
            [
              "Llegada",
              answers.arrivalTime === "late_night"
                ? "De noche / muy tarde"
                : answers.arrivalTime === "daytime"
                  ? "Durante el día"
                  : "Sin seleccionar"
            ],
            ["Internet", getChoiceLabel(mobileDataChoices, answers.mobileDataStatus) || "Sin seleccionar"],
            ["Pago", getChoiceLabel(paymentChoices, answers.paymentStatus) || "Sin seleccionar"],
            ["Hotel", getChoiceLabel(hotelChoices, answers.hotelArrivalStatus) || "Sin seleccionar"],
            ["Tren", getTrainLabel(answers.trainWithin24h)]
          ].map(([label, value]) => (
            <div key={label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2 last:border-0">
              <dt className="font-bold text-slate-500">{label}</dt>
              <dd className="text-right font-black capitalize text-slate-950">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 rounded-lg bg-blue-50 p-3 text-sm font-bold leading-6 text-blue-950">
          No guardamos datos personales. El resultado se genera en tu navegador.
        </p>
      </aside>

      {generated ? (
        <div className="lg:col-span-2">
          <section className={`rounded-lg border p-5 ${statusClass(status)}`} aria-live="polite">
            <p className="text-sm font-black uppercase">Estado del viaje</p>
            <h2 className="mt-2 text-3xl font-black">{getStatusLabel(status)}</h2>
            <p className="mt-2 text-base font-semibold leading-7">{getStatusSummary(status)}</p>
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card p-5">
              <h2 className="text-xl font-black text-slate-950">Tus acciones principales</h2>
              <ol className="mt-4 grid gap-3">
                {topActions.map((action) => (
                  <li key={action} className="rounded-lg border border-slate-200 bg-slate-50 p-4 font-semibold leading-7 text-slate-700">
                    {action}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-5">
              <h2 className="text-xl font-black text-slate-950">Primeros 60 minutos</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 font-semibold leading-7 text-slate-700">
                {firstSixtyMinutes.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mt-6 card p-5">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500">Copia o captura</p>
                <h2 className="text-xl font-black text-slate-950">Mi tarjeta de respaldo para China</h2>
              </div>
              <button type="button" className="button-primary" onClick={copyBackupCard}>
                {copied ? <ClipboardCheck size={18} aria-hidden="true" /> : <Clipboard size={18} aria-hidden="true" />}
                {copied ? "Copiado" : "Copiar tarjeta"}
              </button>
            </div>
            <pre className="mt-4 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-sm leading-6 text-slate-50">
              {backupCard}
            </pre>
          </section>

          {triggeredFallbacks.length ? (
            <section className="mt-6">
              <h2 className="text-xl font-black text-slate-950">Respaldo recomendado</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {triggeredFallbacks.map((fallback) => (
                  <article key={fallback.title} className="card p-5">
                    <h3 className="font-black text-slate-950">{fallback.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{fallback.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-6 card p-5">
            <h2 className="text-xl font-black text-slate-950">Enlaces oficiales</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
              Revisa siempre fuentes oficiales antes de reservar o viajar. Última revisión: {lastReviewed}
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {officialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 font-bold text-slate-800 hover:border-blue-300"
                  onClick={() => trackEvent("official_link_click", { label: link.label })}
                >
                  {link.label}
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </section>
  );
}
