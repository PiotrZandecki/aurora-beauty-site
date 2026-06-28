"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { clientValuesContent } from "@/content/clientValuesContent";
import { faqContent } from "@/content/faqContent";
import { featuredContent } from "@/content/featuredContent";
import { homeGalleryPreviewContent } from "@/content/homeGalleryPreviewContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { ClientValuesSection } from "@/components/sections/ClientValuesSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturedTreatmentSection } from "@/components/sections/FeaturedTreatmentSection";
import { HomeGalleryPreviewSection } from "@/components/sections/HomeGalleryPreviewSection";
import { SectionHeader } from "@/components/sections/SectionHeader";

export default function Home() {
  const { language } = useSitePreferences();

  const content = siteContent[language].home;
  const featured = featuredContent[language];
  const clientValues = clientValuesContent[language];
  const galleryPreview = homeGalleryPreviewContent[language];
  const faq = faqContent[language];

  return (
    <>
      <section className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 overflow-hidden px-5 py-20 md:grid-cols-[1.05fr_0.95fr]">
        <div className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-rose-200/30 blur-3xl animation-soft-float dark:bg-rose-900/20" />
        <div className="pointer-events-none absolute -right-24 bottom-20 size-72 rounded-full bg-pink-200/30 blur-3xl animation-soft-pulse dark:bg-stone-800/30" />

        <div className="relative">
          <Reveal delay={0}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
              {content.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl dark:text-rose-50">
              {content.title}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
              {content.description}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="interactive-press rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
              >
                {content.primaryCta}
              </Link>

              <Link
                href="/contact"
                className="interactive-press rounded-full border border-rose-300 px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
              >
                {content.secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal
            stagger
            delay={340}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3"
          >
            {content.stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="rounded-3xl border border-rose-200 bg-white/70 p-4 text-center shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/70"
              >
                <dt className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                  {stat.value}
                </dt>

                <dd className="mt-1 text-xs leading-5 text-stone-500 dark:text-stone-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal variant="scale-in" delay={160}>
          <div className="group rounded-4xl border border-rose-200 bg-white p-4 shadow-2xl shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:shadow-black/30">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-treatment.png"
                alt={
                  language === "pl"
                    ? "Spokojny zabieg pielęgnacji twarzy w premium beauty studio"
                    : "Calm facial-care treatment in a premium beauty studio"
                }
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="image-soft-zoom object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 via-stone-950/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-white/75">
                  Signature care
                </p>

                <ul className="mt-5 space-y-3">
                  {content.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full bg-white/85 px-4 py-3 text-sm font-medium text-stone-800 shadow-sm backdrop-blur dark:bg-stone-950/75 dark:text-rose-50"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.servicesEyebrow}
            title={content.servicesTitle}
            description={content.servicesDescription}
          />

          <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {content.services.map((service) => (
              <article
                key={service.title}
                className="interactive-lift rounded-4xl border border-rose-200 bg-rose-50 p-6 shadow-sm hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-950 dark:hover:shadow-black/30"
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
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10">
              <Link
                href="/services"
                className="interactive-press inline-flex rounded-full border border-rose-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
              >
                {content.primaryCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturedTreatmentSection
        eyebrow={featured.eyebrow}
        title={featured.title}
        description={featured.description}
        badge={featured.badge}
        details={featured.details}
        buttonLabel={featured.buttonLabel}
      />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <SectionHeader
            eyebrow={content.benefitsEyebrow}
            title={content.benefitsTitle}
            description={content.benefitsDescription}
          />

          <Reveal stagger className="grid gap-4">
            {content.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="interactive-lift rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
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
          </Reveal>
        </div>
      </section>

      <HomeGalleryPreviewSection
        eyebrow={galleryPreview.eyebrow}
        title={galleryPreview.title}
        description={galleryPreview.description}
        buttonLabel={galleryPreview.buttonLabel}
        items={galleryPreview.items}
      />

      <ClientValuesSection
        eyebrow={clientValues.eyebrow}
        title={clientValues.title}
        description={clientValues.description}
        items={clientValues.items}
      />

      <FaqSection
        eyebrow={faq.eyebrow}
        title={faq.title}
        description={faq.description}
        items={faq.items}
      />

      <CtaBanner
        title={content.ctaTitle}
        description={content.ctaDescription}
        buttonLabel={content.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
