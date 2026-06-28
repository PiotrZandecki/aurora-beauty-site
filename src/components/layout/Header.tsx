"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export function Header() {
  const pathname = usePathname();
  const { language, theme, toggleLanguage, toggleTheme } = useSitePreferences();
  const content = siteContent[language];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-rose-200/70 bg-white/80 px-5 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto flex h-18.25 max-w-6xl items-center justify-between gap-5">
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label={content.brand}
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-linear-to-br from-rose-300 via-rose-500 to-rose-900 text-sm font-bold text-white shadow-lg shadow-rose-200/70 transition duration-300 group-hover:-rotate-3 group-hover:scale-105 dark:shadow-black/30">
            A
          </span>

          <span className="grid leading-tight">
            <span className="text-base font-semibold tracking-tight text-stone-950 transition group-hover:text-rose-700 dark:text-rose-50 dark:group-hover:text-rose-200">
              Aurora
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
              Beauty Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {content.nav.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "text-rose-700 dark:text-rose-200"
                    : "text-stone-600 hover:text-rose-700 dark:text-stone-300 dark:hover:text-rose-200"
                }`}
              >
                {item.label}

                <span
                  className={`absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-rose-500 transition-all duration-300 dark:bg-rose-300 ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="interactive-press rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-rose-400 hover:text-rose-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-rose-300 dark:hover:text-rose-200"
            aria-label={
              language === "pl"
                ? "Switch language to English"
                : "Zmień język na polski"
            }
          >
            {content.languageLabel}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="interactive-press flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-rose-400 hover:text-rose-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-rose-300 dark:hover:text-rose-200"
            aria-label={
              theme === "light"
                ? language === "pl"
                  ? "Włącz ciemny motyw"
                  : "Turn on dark theme"
                : language === "pl"
                  ? "Włącz jasny motyw"
                  : "Turn on light theme"
            }
          >
            <span
              className={`block size-4 rounded-full transition ${
                theme === "light"
                  ? "bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.8)]"
                  : "bg-rose-200 shadow-[0_0_16px_rgba(251,113,133,0.8)]"
              }`}
            />
            {content.themeLabel}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="interactive-press flex size-11 items-center justify-center rounded-full border border-rose-200 bg-white shadow-sm transition hover:border-rose-400 dark:border-stone-700 dark:bg-stone-900 lg:hidden"
          aria-label={
            isMenuOpen
              ? language === "pl"
                ? "Zamknij menu"
                : "Close menu"
              : language === "pl"
                ? "Otwórz menu"
                : "Open menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span className="relative block size-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-stone-950 transition duration-300 dark:bg-rose-50 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-stone-950 transition duration-300 dark:bg-rose-50 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-stone-950 transition duration-300 dark:bg-rose-50 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] border-t border-rose-200/70 opacity-100 dark:border-stone-800"
            : "grid-rows-[0fr] border-t border-transparent opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-3 py-5">
            {content.nav.map((item, index) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 35}ms` : "0ms",
                  }}
                  className={`rounded-3xl border px-5 py-4 text-sm font-semibold transition duration-300 ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  } ${
                    isActive
                      ? "border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200"
                      : "border-rose-200 bg-white text-stone-700 hover:border-rose-400 hover:text-rose-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-rose-300 dark:hover:text-rose-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="interactive-press rounded-3xl border border-rose-200 bg-white px-5 py-4 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-rose-400 hover:text-rose-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-rose-300 dark:hover:text-rose-200"
              >
                {content.languageLabel}
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="interactive-press flex items-center justify-center gap-2 rounded-3xl border border-rose-200 bg-white px-5 py-4 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-rose-400 hover:text-rose-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-rose-300 dark:hover:text-rose-200"
              >
                <span
                  className={`block size-4 rounded-full transition ${
                    theme === "light"
                      ? "bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.8)]"
                      : "bg-rose-200 shadow-[0_0_16px_rgba(251,113,133,0.8)]"
                  }`}
                />
                {content.themeLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
