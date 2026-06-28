"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Language } from "@/types/site";

type ThemeMode = "light" | "dark";

type SitePreferencesContextValue = {
  language: Language;
  theme: ThemeMode;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const LANGUAGE_STORAGE_KEY = "aurora-language";
const THEME_STORAGE_KEY = "aurora-theme";

const SitePreferencesContext =
  createContext<SitePreferencesContextValue | null>(null);

type SitePreferencesProviderProps = {
  children: ReactNode;
};

const languageListeners = new Set<() => void>();
const themeListeners = new Set<() => void>();

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "pl";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === "pl" || storedLanguage === "en") {
    return storedLanguage;
  }

  return "pl";
}

function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return "light";
}

function getServerLanguageSnapshot(): Language {
  return "pl";
}

function getServerThemeSnapshot(): ThemeMode {
  return "light";
}

function emitLanguageChange() {
  languageListeners.forEach((listener) => listener());
}

function emitThemeChange() {
  themeListeners.forEach((listener) => listener());
}

function subscribeLanguage(listener: () => void) {
  languageListeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === LANGUAGE_STORAGE_KEY) {
      listener();
    }
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    languageListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function subscribeTheme(listener: () => void) {
  themeListeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === THEME_STORAGE_KEY) {
      listener();
    }
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function setStoredLanguage(language: Language) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.documentElement.lang = language;
  emitLanguageChange();
}

function setStoredTheme(theme: ThemeMode) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  emitThemeChange();
}

export function SitePreferencesProvider({
  children,
}: SitePreferencesProviderProps) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getStoredLanguage,
    getServerLanguageSnapshot,
  );

  const theme = useSyncExternalStore(
    subscribeTheme,
    getStoredTheme,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const contextValue = useMemo<SitePreferencesContextValue>(
    () => ({
      language,
      theme,
      toggleLanguage: () => {
        const currentLanguage = getStoredLanguage();
        const nextLanguage: Language = currentLanguage === "pl" ? "en" : "pl";

        setStoredLanguage(nextLanguage);
      },
      toggleTheme: () => {
        const currentTheme = getStoredTheme();
        const nextTheme: ThemeMode =
          currentTheme === "light" ? "dark" : "light";

        setStoredTheme(nextTheme);
      },
    }),
    [language, theme],
  );

  return (
    <SitePreferencesContext.Provider value={contextValue}>
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
