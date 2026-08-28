type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: EventParams) => void;
    clarity?: (...args: [string, ...Array<string | string[]>]) => void;
  }
}

function toAnalyticsValue(value: string | number | boolean | undefined) {
  if (value === undefined) {
    return undefined;
  }

  return String(value).slice(0, 120);
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, params);

  if (window.clarity) {
    window.clarity("event", eventName);
    Object.entries(params).forEach(([key, value]) => {
      const normalized = toAnalyticsValue(value);
      if (normalized) {
        window.clarity?.("set", `last_${key}`, normalized);
      }
    });
  }
}
