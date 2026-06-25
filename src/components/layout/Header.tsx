"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export function Header() {
  const pathname = usePathname();
  const { language, theme, toggleLanguage, toggleTheme } = useSitePreferences();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = siteContent[language];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-rose-200/70 bg-rose-50/90 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-tight"
        >
          {content.brand}
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {content.nav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive
                    ? "font-semibold text-rose-700 dark:text-rose-200"
                    : "text-stone-700 hover:text-rose-600 dark:text-stone-300 dark:hover:text-rose-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-rose-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-rose-400 dark:border-stone-700 dark:bg-stone-900"
            aria-label="Change language"
          >
            {language === "pl" ? "🇬🇧 EN" : "🇵🇱 PL"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-rose-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-rose-400 dark:border-stone-700 dark:bg-stone-900"
            aria-label="Change theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-rose-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-rose-400 dark:border-stone-700 dark:bg-stone-900"
            aria-label="Change language"
          >
            {language === "pl" ? "🇬🇧" : "🇵🇱"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-rose-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-rose-400 dark:border-stone-700 dark:bg-stone-900"
            aria-label="Change theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {isMenuOpen ? (
            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-full border border-rose-200 bg-white px-3 py-2 text-sm font-semibold shadow-sm transition hover:border-rose-400 dark:border-stone-700 dark:bg-stone-900"
              aria-label="Close menu"
              aria-expanded="true"
              aria-controls="mobile-menu"
            >
              ✕
            </button>
          ) : (
            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-full border border-rose-200 bg-white px-3 py-2 text-sm font-semibold shadow-sm transition hover:border-rose-400 dark:border-stone-700 dark:bg-stone-900"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              ☰
            </button>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-rose-200/70 bg-rose-50 px-5 py-4 shadow-lg dark:border-stone-800 dark:bg-stone-950 md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-2">
            {content.nav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-rose-700 shadow-sm dark:bg-stone-900 dark:text-rose-200"
                      : "text-stone-700 hover:bg-white dark:text-stone-300 dark:hover:bg-stone-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
