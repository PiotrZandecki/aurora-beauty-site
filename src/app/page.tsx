"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export default function Home() {
  const { language } = useSitePreferences();
  const content = siteContent[language].home;

  return (
    <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
          {content.eyebrow}
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl dark:text-rose-50">
          {content.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
          {content.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
          >
            {content.primaryCta}
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-rose-300 px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
          >
            {content.secondaryCta}
          </Link>
        </div>
      </div>

      <div className="rounded-4xl border border-rose-200 bg-white p-6 shadow-2xl shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:shadow-black/30">
        <div className="aspect-4/5 rounded-3xl bg-linear-to-br from-rose-100 via-pink-100 to-stone-100 p-6 dark:from-stone-800 dark:via-stone-900 dark:to-rose-950">
          <div className="flex h-full flex-col justify-end rounded-[1.2rem] border border-white/60 p-6 backdrop-blur dark:border-white/10">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-300">
              Signature care
            </p>

            <ul className="mt-5 space-y-3">
              {content.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full bg-white/80 px-4 py-3 text-sm font-medium text-stone-800 shadow-sm dark:bg-stone-950/70 dark:text-rose-50"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
