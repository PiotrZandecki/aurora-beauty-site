"use client";

import { useMemo, useState } from "react";
import { galleryContent } from "@/content/galleryContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";

export default function GalleryPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.gallery;
  const content = galleryContent[language];

  const [selectedCategoryId, setSelectedCategoryId] = useState("all");

  const filters = useMemo(() => {
    const uniqueFilters = content.items.reduce<
      Array<{ id: string; label: string }>
    >((filtersList, item) => {
      const alreadyExists = filtersList.some(
        (filter) => filter.id === item.categoryId,
      );

      if (alreadyExists) {
        return filtersList;
      }

      return [
        ...filtersList,
        {
          id: item.categoryId,
          label: item.category,
        },
      ];
    }, []);

    return [
      {
        id: "all",
        label: content.allFilterLabel,
      },
      ...uniqueFilters,
    ];
  }, [content.allFilterLabel, content.items]);

  const visibleItems =
    selectedCategoryId === "all"
      ? content.items
      : content.items.filter((item) => item.categoryId === selectedCategoryId);

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.introEyebrow}
            title={content.introTitle}
            description={content.introDescription}
          />

          <div className="mt-10 rounded-4xl border border-rose-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
              {content.filtersTitle}
            </p>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const isActive = selectedCategoryId === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setSelectedCategoryId(filter.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-stone-950 text-white dark:bg-rose-100 dark:text-stone-950"
                        : "border border-rose-200 bg-rose-50 text-stone-700 hover:border-rose-400 hover:text-rose-700 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300 dark:hover:border-rose-300 dark:hover:text-rose-200"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-4xl border border-rose-200 bg-rose-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-950 dark:hover:shadow-black/30 ${
                  selectedCategoryId === "all" && index === 0
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`flex items-end bg-linear-to-br from-rose-100 via-pink-100 to-stone-100 p-5 dark:from-stone-800 dark:via-stone-900 dark:to-rose-950 ${
                    selectedCategoryId === "all" && index === 0
                      ? "aspect-video"
                      : "aspect-4/5"
                  }`}
                >
                  <div className="rounded-3xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:bg-stone-950/70">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                      {content.featuredLabel}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-stone-950 dark:text-rose-50">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.highlightsEyebrow}
            title={content.highlightsTitle}
            description={content.highlightsDescription}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                  {highlight.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {highlight.description}
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

      <CtaBanner
        title={content.ctaTitle}
        description={content.ctaDescription}
        buttonLabel={content.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
