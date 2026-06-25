"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { servicesContent } from "@/content/servicesContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";

export default function ServicesPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.services;
  const content = servicesContent[language];

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.categoriesEyebrow}
            title={content.categoriesTitle}
            description={content.categoriesDescription}
          />

          <div className="mt-12 space-y-10">
            {content.categories.map((category) => (
              <article
                key={category.title}
                className="overflow-hidden rounded-4xl border border-rose-200 bg-rose-50 shadow-sm dark:border-stone-800 dark:bg-stone-950"
              >
                <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
                  <div className="flex flex-col justify-between border-b border-rose-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900 lg:border-r lg:border-b-0 md:p-8">
                    <div>
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                        {content.categoryLabel}
                      </p>

                      <h3 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                        {category.title}
                      </h3>

                      <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-8 rounded-3xl bg-rose-100 p-5 dark:bg-rose-950/50">
                      <p className="text-sm font-semibold text-rose-700 dark:text-rose-200">
                        {category.accent}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                        {language === "pl"
                          ? "Każda usługa może zostać dopasowana do potrzeb skóry, urody, okazji i oczekiwanego poziomu intensywności."
                          : "Each service can be adjusted to skin needs, natural features, occasion and the desired level of intensity."}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 p-5 md:p-8">
                    {category.services.map((service) => (
                      <div
                        key={service.title}
                        className="group rounded-3xl border border-rose-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/30"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                                {service.tag}
                              </span>

                              <span className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold text-stone-600 dark:border-stone-700 dark:text-stone-300">
                                {content.durationLabel}: {service.duration}
                              </span>
                            </div>

                            <h4 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                              {service.title}
                            </h4>

                            <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                          <div className="rounded-2xl bg-rose-50 p-4 dark:bg-stone-950">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                              {content.idealForLabel}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                              {service.idealFor}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-rose-50 p-4 dark:bg-stone-950">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                              {content.resultLabel}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                              {service.result}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5">
                          <Link
                            href="/contact"
                            className="inline-flex rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
                          >
                            {content.detailsButton}
                          </Link>
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
          <SectionHeader
            eyebrow={content.processEyebrow}
            title={content.processTitle}
            description={content.processDescription}
          />

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

      <CtaBanner
        title={content.ctaTitle}
        description={content.ctaDescription}
        buttonLabel={content.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
