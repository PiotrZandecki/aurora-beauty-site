"use client";

import { aboutContent } from "@/content/aboutContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";

export default function AboutPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.about;
  const content = aboutContent[language];

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
              {content.storyEyebrow}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-rose-50">
              {content.storyTitle}
            </h2>

            <dl className="mt-10 grid grid-cols-3 gap-3">
              {content.stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-3xl border border-rose-200 bg-white p-4 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900"
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

          <div className="rounded-4xl border border-rose-200 bg-rose-50 p-6 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8">
            <div className="space-y-5">
              {content.storyParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-stone-600 dark:text-stone-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.valuesEyebrow}
            title={content.valuesTitle}
            description={content.valuesDescription}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.values.map((value, index) => (
              <article
                key={value.title}
                className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/30"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.teamEyebrow}
            title={content.teamTitle}
            description={content.teamDescription}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-4xl border border-rose-200 bg-rose-50 shadow-sm dark:border-stone-800 dark:bg-stone-950"
              >
                <div className="flex aspect-4/3 items-end bg-linear-to-br from-rose-100 via-pink-100 to-stone-100 p-6 dark:from-stone-800 dark:via-stone-900 dark:to-rose-950">
                  <div className="rounded-3xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:bg-stone-950/70">
                    <p className="text-sm font-semibold text-stone-950 dark:text-rose-50">
                      {member.name}
                    </p>

                    <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-stone-600 dark:text-stone-300">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-rose-50">
              {content.studioTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">
              {content.studioDescription}
            </p>

            <ul className="mt-8 grid gap-3">
              {content.studioHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 rounded-2xl bg-rose-50 p-4 text-sm font-medium text-stone-700 dark:bg-stone-950 dark:text-stone-300"
                >
                  <span className="text-rose-600 dark:text-rose-300">✦</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-rose-200 bg-rose-50 p-5 shadow-2xl shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-950 dark:shadow-black/30">
            <div className="aspect-4/5 rounded-3xl bg-linear-to-br from-rose-100 via-pink-100 to-stone-100 p-6 dark:from-stone-800 dark:via-stone-900 dark:to-rose-950">
              <div className="flex h-full flex-col justify-end rounded-[1.2rem] border border-white/60 p-6 backdrop-blur dark:border-white/10">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-300">
                  Aurora Beauty Studio
                </p>

                <p className="mt-4 text-2xl font-semibold text-stone-950 dark:text-rose-50">
                  {language === "pl"
                    ? "Tutaj później możemy dodać zdjęcie salonu."
                    : "Later we can add a real studio photo here."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={content.ctaTitle}
        description={content.ctaDescription}
        buttonLabel={content.ctaButton}
        buttonHref="/services"
      />
    </>
  );
}
