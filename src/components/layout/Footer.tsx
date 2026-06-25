"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export function Footer() {
  const { language } = useSitePreferences();
  const content = siteContent[language];

  return (
    <footer className="border-t border-rose-200/70 bg-white/70 px-5 py-12 text-sm text-stone-600 dark:border-stone-800 dark:bg-stone-950/70 dark:text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-stone-950 dark:text-rose-50"
          >
            {content.brand}
          </Link>

          <p className="mt-4 max-w-md leading-7">
            {language === "pl"
              ? "Elegancka strona wizytówkowa dla salonu beauty z obsługą dwóch języków, jasnego i ciemnego motywu oraz gotową strukturą pod dalszy rozwój."
              : "An elegant business website for a beauty studio with two languages, light and dark mode, and a clean structure for future growth."}
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
            Beauty studio
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-950 dark:text-rose-50">
            {language === "pl" ? "Nawigacja" : "Navigation"}
          </h2>

          <nav className="mt-5 grid gap-3">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-rose-700 dark:hover:text-rose-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-950 dark:text-rose-50">
            {language === "pl" ? "Kontakt" : "Contact"}
          </h2>

          <div className="mt-5 grid gap-3">
            <a
              href="tel:+48123456789"
              className="transition hover:text-rose-700 dark:hover:text-rose-200"
            >
              +48 123 456 789
            </a>

            <a
              href="mailto:hello@aurorabeauty.pl"
              className="transition hover:text-rose-700 dark:hover:text-rose-200"
            >
              hello@aurorabeauty.pl
            </a>

            <a
              href="https://instagram.com"
              className="transition hover:text-rose-700 dark:hover:text-rose-200"
            >
              Instagram
            </a>

            <p className="leading-7">
              {language === "pl"
                ? "ul. Różana 12, Warszawa"
                : "12 Różana Street, Warsaw"}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-rose-200/70 pt-6 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {content.brand}.{" "}
          {language === "pl"
            ? "Wszelkie prawa zastrzeżone."
            : "All rights reserved."}
        </p>

        <p>
          {language === "pl"
            ? "Wersja startowa projektu — PL/EN + light/dark mode."
            : "Starter project version — PL/EN + light/dark mode."}
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-rose-200/70 pt-6 text-center text-xs text-stone-500 dark:border-stone-800 dark:text-stone-500">
        <p>
          {language === "pl"
            ? "Strona wykonana przez Z-TECH Piotr Zandecki."
            : "Website created by Z-TECH Piotr Zandecki."}
        </p>
      </div>
    </footer>
  );
}
