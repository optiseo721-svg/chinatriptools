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
  { value: "Beijing", label: "Beijing" },
  { value: "Shanghai", label: "Shanghai" },
  { value: "Guangzhou", label: "Guangzhou" },
  { value: "Shenzhen", label: "Shenzhen" }
];

const moreCities: Choice<ArrivalCity>[] = [
  { value: "Chongqing", label: "Chongqing" },
  { value: "Chengdu", label: "Chengdu" },
  { value: "Xi'an", label: "Xi'an" },
  { value: "Hangzhou", label: "Hangzhou" },
  { value: "Other", label: "Other" }
];

const arrivalTimes: Choice<ArrivalTime>[] = [
  { value: "daytime", label: "Daytime" },
  { value: "late_night", label: "Late night" }
];

const mobileDataChoices: Choice<MobileDataStatus>[] = [
  { value: "not_ready", label: "Not ready" },
  { value: "planned", label: "Planned" },
  { value: "installed", label: "Installed" },
  { value: "tested", label: "Tested" }
];

const paymentChoices: Choice<PaymentStatus>[] = [
  { value: "not_started", label: "Not started" },
  { value: "app_installed", label: "App installed" },
  { value: "card_linked", label: "Card linked" },
  { value: "small_payment_tested", label: "Small payment tested" }
];

const hotelChoices: Choice<HotelArrivalStatus>[] = [
  { value: "not_ready", label: "Not ready" },
  { value: "address_saved", label: "Address saved" },
  { value: "address_route_saved", label: "Address + route saved" }
];

const trainChoices: Choice<TrainWithin24h>[] = [
  { value: "no", label: "No" },
  { value: "yes_booked", label: "Yes, booked" },
  { value: "yes_not_booked", label: "Yes, not booked" }
];

const officialChoices: Choice<OfficialCheck>[] = [
  { value: "yes", label: "Yes" },
  { value: "need_verify", label: "I still need to verify" }
];

const lastReviewed = "2026-08-25";

const cityTips: Record<ArrivalCity, string> = {
  Beijing: "Confirm which airport you arrive at and keep enough time for the first transfer.",
  Shanghai: "Check whether your airport is Pudong or Hongqiao before choosing the first route.",
  Guangzhou: "Keep the hotel Chinese address ready before leaving the airport.",
  Shenzhen: "Confirm border or arrival context if combining Hong Kong or Macau in the same trip.",
  Chongqing: "Double-check the airport-to-hotel route before leaving the airport, especially if arriving late.",
  Chengdu: "Avoid planning a tight train transfer on the first day if it is your first time.",
  "Xi'an": "Save the hotel Chinese address and station name before taking a taxi or metro.",
  Hangzhou: "Confirm whether your first route depends on metro hours or a ride-hailing pickup point.",
  Other: "Use the generic first-day checklist and verify local transport options before landing."
};

const officialLinks = [
  {
    label: "Visit China official service entrance",
    href: "https://english.www.gov.cn/services/visitChina/"
  },
  {
    label: "NIA visa-free transit policy page",
    href: "https://en.nia.gov.cn/n147418/n147463/c183412/content.html"
  },
  {
    label: "China payment guide for overseas visitors",
    href: "https://english.www.gov.cn/services/202405/27/content_WS6653eafac6d0868f4e8e753f.html"
  },
  {
    label: "12306 official FAQ",
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
    actions.push("Set up mobile data before landing. Payment, maps and translation depend on it.");
  }
  if (answers.hotelArrivalStatus === "not_ready") {
    actions.push("Save your hotel name, Chinese address and phone number before you fly.");
  }
  if (answers.hotelArrivalStatus !== "address_route_saved") {
    actions.push("Plan your airport-to-hotel route and keep a screenshot offline.");
  }
  if (answers.paymentStatus === "not_started") {
    actions.push("Prepare a payment fallback. Do not rely on one payment app on arrival day.");
  }
  if (answers.paymentStatus === "app_installed" || answers.paymentStatus === "card_linked") {
    actions.push("Test mobile payment with a small purchase before relying on it.");
  }
  if (answers.officialCheck === "need_verify") {
    actions.push("Verify your entry or transit route with an official source before booking.");
  }
  if (answers.trainWithin24h === "yes_not_booked") {
    actions.push("Book or verify your first train and confirm the exact station name.");
  }
  if (!actions.length) {
    actions.push("Save your translation fallback and keep the backup card available offline.");
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
      ? "Turn on your prepared mobile data or roaming."
      : "Connect to airport Wi-Fi or activate your prepared eSIM/roaming before leaving the airport.";

  const routeStep =
    answers.arrivalTime === "late_night"
      ? "Use your saved hotel route and avoid researching complex transfers late at night."
      : "Follow your saved airport-to-hotel route.";

  return [
    firstStep,
    "Open your hotel Chinese address and keep it ready for taxi, metro or hotel check-in.",
    "Check whether your payment app is usable before depending on it outside the airport.",
    routeStep,
    "Keep your passport ready for hotel check-in."
  ];
}

function getFallbacks(answers: Answers) {
  const fallbacks: { title: string; body: string }[] = [];

  if (answers.mobileDataStatus !== "tested") {
    fallbacks.push({
      title: "No mobile data",
      body: "Connect to airport Wi-Fi first, open saved screenshots, and avoid downloading maps or payment apps after landing."
    });
  }
  if (answers.paymentStatus !== "small_payment_tested") {
    fallbacks.push({
      title: "Payment app not tested",
      body: "Prepare a second payment method or small cash fallback. Do not leave the airport depending on one untested app."
    });
  }
  if (answers.hotelArrivalStatus !== "address_route_saved") {
    fallbacks.push({
      title: "Hotel or transport not ready",
      body: "Save the hotel name, Chinese address, phone number and first route as screenshots before you fly."
    });
  }
  if (answers.arrivalTime === "late_night") {
    fallbacks.push({
      title: "Late-night arrival",
      body: "Use a simple airport taxi or official transport fallback. Avoid tight transfers or complex route changes."
    });
  }
  if (answers.trainWithin24h !== "no") {
    fallbacks.push({
      title: "Train within first 24 hours",
      body: "Confirm the exact station, departure time and passport details. Large Chinese cities may have several train stations."
    });
  }

  return fallbacks;
}

function buildBackupCard(answers: Answers, status: ReadinessStatus, topActions: string[]) {
  const mobileFallback =
    answers.mobileDataStatus === "tested"
      ? "Mobile data tested before arrival."
      : "Use airport Wi-Fi first; keep hotel address and route screenshots offline.";
  const paymentFallback =
    answers.paymentStatus === "small_payment_tested"
      ? "Mobile payment tested before relying on it."
      : "Prepare a second payment method or small cash fallback.";
  const hotelFallback =
    answers.hotelArrivalStatus === "address_route_saved"
      ? "Hotel Chinese address and first route saved."
      : "Save hotel name, Chinese address, phone and route screenshot before landing.";

  return [
    "My China First-Day Backup Card",
    "",
    `Status: ${status}`,
    `Arrival city: ${answers.arrivalCity || "Not selected"}`,
    `Arrival time: ${answers.arrivalTime === "late_night" ? "Late night" : "Daytime"}`,
    `City note: ${answers.arrivalCity ? cityTips[answers.arrivalCity] : "Use the generic first-day checklist."}`,
    "",
    "Top actions:",
    ...topActions.map((action, index) => `${index + 1}. ${action}`),
    "",
    `Mobile data fallback: ${mobileFallback}`,
    `Payment fallback: ${paymentFallback}`,
    `Hotel / transport fallback: ${hotelFallback}`,
    "Translation reminder: Install a translation app and save Spanish/Chinese offline language if available.",
    "Useful Chinese phrase: 请帮我确认这个酒店地址 (Please help me confirm this hotel address).",
    "Official verification: Check official Chinese embassy/immigration websites before traveling.",
    `Last reviewed: ${lastReviewed}`
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
            <p className="text-sm font-bold text-slate-500">Progress</p>
            <p className="text-2xl font-black text-slate-950">{completedCount} / 5 completed</p>
          </div>
          <button type="button" className="button-secondary" onClick={resetChecker}>
            <RotateCcw size={16} aria-hidden="true" />
            Start over
          </button>
        </div>

        <div className="grid gap-5">
          <ChoiceGroup
            label="Have you verified your entry or transit route with an official source?"
            description="This reminder does not decide visa or entry eligibility."
            value={answers.officialCheck}
            choices={officialChoices}
            onChange={(value) => updateAnswer("officialCheck", value)}
          />

          <fieldset className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <legend className="px-1 text-base font-black text-slate-950">Where will you land?</legend>
            <p className="mt-1 text-sm leading-6 text-slate-600">Choose the city where your first day starts.</p>
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
              {showMoreCities ? "Show fewer cities" : "More cities"}
            </button>
          </fieldset>

          <ChoiceGroup
            label="When do you arrive?"
            value={answers.arrivalTime}
            choices={arrivalTimes}
            onChange={(value) => updateAnswer("arrivalTime", value)}
          />

          <ChoiceGroup
            label="Mobile data ready?"
            description="Maps, payment, translation and hotel routes all depend on your connection."
            value={answers.mobileDataStatus}
            choices={mobileDataChoices}
            onChange={(value) => updateAnswer("mobileDataStatus", value)}
          />

          <ChoiceGroup
            label="Payment ready?"
            description="Do not rely on a single app until you have tested it."
            value={answers.paymentStatus}
            choices={paymentChoices}
            onChange={(value) => updateAnswer("paymentStatus", value)}
          />

          <ChoiceGroup
            label="Hotel arrival ready?"
            description="Your hotel name, Chinese address and first route matter most after landing."
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
              Taking a train in the first 24 hours?
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
            Generate my backup card
          </button>
          {!canGenerate ? (
            <p className="text-center text-sm font-semibold text-slate-500">
              Complete the 5 required checks to generate your card.
            </p>
          ) : null}
        </div>
      </div>

      <aside className="card h-fit p-5">
        <p className="text-sm font-bold text-slate-500">Current selection</p>
        <dl className="mt-4 grid gap-3 text-sm">
          {[
            ["City", answers.arrivalCity || "Not selected"],
            ["Arrival", answers.arrivalTime === "late_night" ? "Late night" : answers.arrivalTime === "daytime" ? "Daytime" : "Not selected"],
            ["Mobile data", answers.mobileDataStatus?.replaceAll("_", " ") || "Not selected"],
            ["Payment", answers.paymentStatus?.replaceAll("_", " ") || "Not selected"],
            ["Hotel", answers.hotelArrivalStatus?.replaceAll("_", " ") || "Not selected"],
            ["Train", answers.trainWithin24h.replaceAll("_", " ")]
          ].map(([label, value]) => (
            <div key={label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2 last:border-0">
              <dt className="font-bold text-slate-500">{label}</dt>
              <dd className="text-right font-black capitalize text-slate-950">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 rounded-lg bg-blue-50 p-3 text-sm font-bold leading-6 text-blue-950">
          No personal data is saved. The result is generated in your browser.
        </p>
      </aside>

      {generated ? (
        <div className="lg:col-span-2">
          <section className={`rounded-lg border p-5 ${statusClass(status)}`} aria-live="polite">
            <p className="text-sm font-black uppercase">Trip status</p>
            <h2 className="mt-2 text-3xl font-black">{status}</h2>
            <p className="mt-2 text-base font-semibold leading-7">{getStatusSummary(status)}</p>
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card p-5">
              <h2 className="text-xl font-black text-slate-950">Your top actions</h2>
              <ol className="mt-4 grid gap-3">
                {topActions.map((action) => (
                  <li key={action} className="rounded-lg border border-slate-200 bg-slate-50 p-4 font-semibold leading-7 text-slate-700">
                    {action}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-5">
              <h2 className="text-xl font-black text-slate-950">First 60 minutes</h2>
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
                <p className="text-sm font-bold text-slate-500">Copy or screenshot</p>
                <h2 className="text-xl font-black text-slate-950">My China First-Day Backup Card</h2>
              </div>
              <button type="button" className="button-primary" onClick={copyBackupCard}>
                {copied ? <ClipboardCheck size={18} aria-hidden="true" /> : <Clipboard size={18} aria-hidden="true" />}
                {copied ? "Copied" : "Copy backup card"}
              </button>
            </div>
            <pre className="mt-4 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-sm leading-6 text-slate-50">
              {backupCard}
            </pre>
          </section>

          {triggeredFallbacks.length ? (
            <section className="mt-6">
              <h2 className="text-xl font-black text-slate-950">Relevant fallbacks</h2>
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
            <h2 className="text-xl font-black text-slate-950">Official links</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
              Always check official sources before booking or traveling. Last reviewed: {lastReviewed}
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
