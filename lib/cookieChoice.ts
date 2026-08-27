import { useSyncExternalStore } from "react";

export const COOKIE_CHOICE_KEY = "ctt_cookie_choice";
const COOKIE_CHOICE_EVENT = "ctt-cookie-choice";

export type CookieChoice = "accepted" | "rejected" | "unset";

function normalizeChoice(value: string | null): CookieChoice {
  return value === "accepted" || value === "rejected" ? value : "unset";
}

function getSnapshot(): CookieChoice {
  if (typeof window === "undefined") {
    return "unset";
  }

  return normalizeChoice(window.localStorage.getItem(COOKIE_CHOICE_KEY));
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(COOKIE_CHOICE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(COOKIE_CHOICE_EVENT, callback);
  };
}

export function useCookieChoice() {
  return useSyncExternalStore(subscribe, getSnapshot, () => "unset");
}

export function saveCookieChoice(choice: Exclude<CookieChoice, "unset">) {
  window.localStorage.setItem(COOKIE_CHOICE_KEY, choice);
  window.dispatchEvent(new Event(COOKIE_CHOICE_EVENT));
}
