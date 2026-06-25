"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { siteConfig } from "@/lib/siteConfig";

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
              ? siteConfig.descriptionPl
              : siteConfig.description}
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
            {content.footer}
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
              href={siteConfig.phoneHref}
              className="transition hover:text-rose-700 dark:hover:text-rose-200"
            >
              {siteConfig.phone}
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-rose-700 dark:hover:text-rose-200"
            >
              {siteConfig.email}
            </a>

            <a
              href={siteConfig.instagramUrl}
              className="transition hover:text-rose-700 dark:hover:text-rose-200"
            >
              {siteConfig.instagramLabel}
            </a>

            <p className="leading-7">
              {language === "pl"
                ? siteConfig.shortAddressPl
                : siteConfig.shortAddressEn}
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
            ? "Natural beauty, refined with care."
            : "Natural beauty, refined with care."}
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
