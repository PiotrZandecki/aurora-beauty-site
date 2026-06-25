"use client";

import Link from "next/link";
import { pricingContent } from "@/content/pricingContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { PageIntro } from "@/components/sections/PageIntro";

export default function PricingPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.pricing;
  const content = pricingContent[language];

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
                {content.introEyebrow}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-rose-50">
                {content.introTitle}
              </h2>
            </div>

            <p className="text-lg leading-8 text-stone-600 dark:text-stone-300">
              {content.introDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {content.categories.map((category) => (
              <article
                key={category.title}
                className="overflow-hidden rounded-4xl border border-rose-200 bg-rose-50 shadow-sm dark:border-stone-800 dark:bg-stone-950"
              >
                <div className="grid gap-0 lg:grid-cols-[0.35fr_0.65fr]">
                  <div className="border-b border-rose-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900 lg:border-r lg:border-b-0 md:p-8">
                    <h3 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                      {category.title}
                    </h3>

                    <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                      {category.description}
                    </p>
                  </div>

                  <div className="divide-y divide-rose-200 dark:divide-stone-800">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className={`grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6 ${
                          item.highlighted
                            ? "bg-white dark:bg-stone-900"
                            : "bg-rose-50 dark:bg-stone-950"
                        }`}
                      >
                        <div>
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            {item.highlighted && (
                              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                                {language === "pl" ? "Popularne" : "Popular"}
                              </span>
                            )}

                            <span className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold text-stone-600 dark:border-stone-700 dark:text-stone-300">
                              {content.durationLabel}: {item.duration}
                            </span>
                          </div>

                          <h4 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                            {item.name}
                          </h4>

                          <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
                            {item.description}
                          </p>
                        </div>

                        <div className="rounded-3xl bg-stone-950 px-5 py-4 text-center text-white dark:bg-rose-100 dark:text-stone-950">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
                            {content.priceNote}
                          </p>

                          <p className="mt-1 text-2xl font-semibold">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
                {content.packagesEyebrow}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-rose-50">
                {content.packagesTitle}
              </h2>
            </div>

            <p className="text-lg leading-8 text-stone-600 dark:text-stone-300">
              {content.packagesDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.packages.map((packageItem) => (
              <article
                key={packageItem.title}
                className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/30"
              >
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                  {packageItem.badge}
                </span>

                <h3 className="mt-5 text-2xl font-semibold text-stone-950 dark:text-rose-50">
                  {packageItem.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {packageItem.description}
                </p>

                <p className="mt-6 text-3xl font-semibold text-stone-950 dark:text-rose-50">
                  {packageItem.price}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-4xl border border-rose-200 bg-rose-50 p-6 dark:border-stone-800 dark:bg-stone-900 md:p-8">
            <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
              {content.noteTitle}
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-stone-600 dark:text-stone-300">
              {content.noteDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl rounded-4xl bg-stone-950 px-6 py-14 text-center shadow-2xl shadow-rose-200/70 md:px-12 dark:bg-rose-100 dark:shadow-black/30">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl dark:text-stone-950">
            {content.ctaTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-300 dark:text-stone-700">
            {content.ctaDescription}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-rose-100 dark:bg-stone-950 dark:text-white dark:hover:bg-stone-800"
          >
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
