"use client";

import Link from "next/link";
import { notFoundContent } from "@/content/notFoundContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export function NotFoundView() {
  const { language } = useSitePreferences();
  const content = notFoundContent[language];

  return (
    <section className="mx-auto flex min-h-[calc(100vh-260px)] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-rose-600 dark:text-rose-300">
        {content.eyebrow}
      </p>

      <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl dark:text-rose-50">
        {content.title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
        {content.description}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
        >
          {content.homeButton}
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-rose-300 px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
        >
          {content.contactButton}
        </Link>
      </div>
    </section>
  );
}
