"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export function Header() {
  const { language, theme, toggleLanguage, toggleTheme } = useSitePreferences();
  const content = siteContent[language];

  return (
    <header className="sticky top-0 z-50 border-b border-rose-200/70 bg-rose-50/90 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {content.brand}
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-stone-700 transition hover:text-rose-600 dark:text-stone-300 dark:hover:text-rose-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
