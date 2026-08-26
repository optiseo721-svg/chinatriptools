"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ClipboardCheck, RotateCcw } from "lucide-react";
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

  useEffect(() => {
    trackEvent("checker_start", { page: "checker" });
  }, []);

  const completedCount = useMemo(() => getCompletedCount(answers), [answers]);
  const canGenerate = completedCount === 5;

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
    trackEvent("checker_result_view", {
      city: answers.arrivalCity,
      arrival_time: answers.arrivalTime
    });
  }

  function resetChecker() {
    setAnswers(defaultAnswers);
    setGenerated(false);
    setShowTrain(false);
    setShowMoreCities(false);
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
        {generated ? (
          <p className="mt-5 rounded-lg bg-green-50 p-3 text-sm font-bold leading-6 text-green-900">
            Result placeholder generated. Detailed status logic enters the next checkpoint.
          </p>
        ) : null}
      </aside>
    </section>
  );
}
