"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Language, Theme } from "@/types/site";

type SitePreferencesContextValue = {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const SitePreferencesContext =
  createContext<SitePreferencesContextValue | null>(null);

const LANGUAGE_STORAGE_KEY = "beauty-site-language";
const THEME_STORAGE_KEY = "beauty-site-theme";
const PREFERENCES_CHANGE_EVENT = "beauty-site-preferences-change";

function readLanguageFromStorage(): Language {
  if (typeof window === "undefined") {
    return "pl";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === "en" ? "en" : "pl";
}

function readThemeFromStorage(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "dark" ? "dark" : "light";
}

function getServerLanguageSnapshot(): Language {
  return "pl";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToPreferencesChange(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", callback);
  window.addEventListener(PREFERENCES_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(PREFERENCES_CHANGE_EVENT, callback);
  };
}

function notifyPreferencesChanged() {
  window.dispatchEvent(new Event(PREFERENCES_CHANGE_EVENT));
}

function saveLanguage(language: Language) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  notifyPreferencesChanged();
}

function saveTheme(theme: Theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  notifyPreferencesChanged();
}

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToPreferencesChange,
    readLanguageFromStorage,
    getServerLanguageSnapshot,
  );

  const theme = useSyncExternalStore(
    subscribeToPreferencesChange,
    readThemeFromStorage,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value = useMemo<SitePreferencesContextValue>(
    () => ({
      language,
      theme,
      toggleLanguage: () => {
        const nextLanguage = language === "pl" ? "en" : "pl";
        saveLanguage(nextLanguage);
      },
      toggleTheme: () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        saveTheme(nextTheme);
      },
    }),
    [language, theme],
  );

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error(
      "useSitePreferences must be used inside SitePreferencesProvider",
    );
  }

  return context;
}
