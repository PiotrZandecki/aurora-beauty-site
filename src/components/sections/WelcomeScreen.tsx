"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Language } from "@/types/site";

const WELCOME_STORAGE_KEY = "aurora-welcome-seen";
const welcomeListeners = new Set<() => void>();

const welcomeContent: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
  }
> = {
  pl: {
    eyebrow: "Aurora Beauty Studio",
    title: "Super Cię tu widzieć.",
    description:
      "Wejdź do spokojnej przestrzeni stworzonej wokół naturalnego piękna, dopracowanych detali i premium doświadczenia.",
    buttonLabel: "Przejdź do strony",
  },
  en: {
    eyebrow: "Aurora Beauty Studio",
    title: "It’s lovely to see you here.",
    description:
      "Step into a calm space built around natural beauty, refined details and a premium client experience.",
    buttonLabel: "Enter website",
  },
};

function emitWelcomeChange() {
  welcomeListeners.forEach((listener) => listener());
}

function getWelcomeSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(WELCOME_STORAGE_KEY) !== "true";
}

function getServerWelcomeSnapshot() {
  return false;
}

function subscribeWelcome(listener: () => void) {
  welcomeListeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === WELCOME_STORAGE_KEY) {
      listener();
    }
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    welcomeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function dismissWelcome() {
  window.sessionStorage.setItem(WELCOME_STORAGE_KEY, "true");
  emitWelcomeChange();
}

function getDevicePrimaryLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const primaryBrowserLanguage = navigator.language;

  if (primaryBrowserLanguage?.toLowerCase().startsWith("pl")) {
    return "pl";
  }

  return "en";
}

export function WelcomeScreen() {
  const isVisible = useSyncExternalStore(
    subscribeWelcome,
    getWelcomeSnapshot,
    getServerWelcomeSnapshot,
  );

  const deviceLanguage = getDevicePrimaryLanguage();
  const content = welcomeContent[deviceLanguage];

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-stone-950/70 px-5 backdrop-blur-xl">
      <div className="animate-modal-pop relative w-full max-w-3xl overflow-hidden rounded-4xl border border-rose-200 bg-white p-8 text-center shadow-2xl shadow-rose-200/40 dark:border-stone-800 dark:bg-stone-950 dark:shadow-black/40 md:p-12">
        <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-rose-200/60 blur-3xl animation-soft-pulse dark:bg-rose-900/25" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 size-80 rounded-full bg-pink-200/50 blur-3xl animation-soft-float dark:bg-stone-800/40" />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600 dark:text-rose-300">
            {content.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-stone-950 dark:text-rose-50 md:text-6xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
            {content.description}
          </p>

          <button
            type="button"
            onClick={dismissWelcome}
            className="interactive-press focus-ring mt-8 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
          >
            {content.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
