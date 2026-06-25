"use client";

import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/sections/SectionHeader";

export default function Home() {
  const { language } = useSitePreferences();
  const content = siteContent[language].home;

  return (
    <>
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

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {content.stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="rounded-3xl border border-rose-200 bg-white/70 p-4 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900/70"
              >
                <dt className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                  {stat.value}
                </dt>

                <dd className="mt-1 text-xs leading-5 text-stone-500 dark:text-stone-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
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

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.servicesEyebrow}
            title={content.servicesTitle}
            description={content.servicesDescription}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.services.map((service) => (
              <article
                key={service.title}
                className="rounded-4xl border border-rose-200 bg-rose-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-950 dark:hover:shadow-black/30"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-white text-xl shadow-sm dark:bg-stone-900">
                  ✨
                </div>

                <h3 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex rounded-full border border-rose-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
            >
              {content.primaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <SectionHeader
            eyebrow={content.benefitsEyebrow}
            title={content.benefitsTitle}
            description={content.benefitsDescription}
          />

          <div className="grid gap-4">
            {content.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="mb-4 text-sm font-semibold text-rose-600 dark:text-rose-300">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {benefit.description}
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
