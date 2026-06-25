"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { servicesContent } from "@/content/servicesContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { PageIntro } from "@/components/sections/PageIntro";

export default function ServicesPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.services;
  const content = servicesContent[language];

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
              {content.categoriesEyebrow}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-rose-50">
              {content.categoriesTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">
              {content.categoriesDescription}
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {content.categories.map((category) => (
              <article
                key={category.title}
                className="rounded-4xl border border-rose-200 bg-rose-50 p-5 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                      Category
                    </p>

                    <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                      {category.title}
                    </h3>

                    <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {category.services.map((service) => (
                      <div
                        key={service.title}
                        className="rounded-3xl border border-rose-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-stone-950 dark:text-rose-50">
                              {service.title}
                            </h4>

                            <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
                              {service.description}
                            </p>
                          </div>

                          <span className="shrink-0 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                            {service.duration}
                          </span>
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
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
              {content.processEyebrow}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-rose-50">
              {content.processTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">
              {content.processDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {content.processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                  0{index + 1}
                </div>

                <h3 className="text-lg font-semibold text-stone-950 dark:text-rose-50">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {step.description}
                </p>
              </article>
            ))}
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
