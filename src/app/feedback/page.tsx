"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { feedbackContent } from "@/content/feedbackContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";

type FeedbackFormData = {
  name: string;
  email: string;
  source: string;
  service: string;
  rating: string;
  message: string;
};

const initialFeedbackFormData: FeedbackFormData = {
  name: "",
  email: "",
  source: "website-form",
  service: "facial-care",
  rating: "5",
  message: "",
};

const FEEDBACK_EMAIL = "hello@aurorabeauty.pl";

function buildStars(rating: string) {
  const ratingNumber = Number(rating);

  if (Number.isNaN(ratingNumber)) {
    return "★★★★★";
  }

  return "★".repeat(Math.max(1, Math.min(5, ratingNumber)));
}

export default function FeedbackPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.feedback;
  const feedback = feedbackContent[language];

  const [formData, setFormData] = useState<FeedbackFormData>(
    initialFeedbackFormData,
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setHasSubmitted(false);
  }

  function getSelectedLabel(
    options: Array<{ value: string; label: string }>,
    value: string,
  ) {
    const selectedOption = options.find((option) => option.value === value);

    return selectedOption?.label ?? value;
  }

  function buildEmailBody() {
    const sourceLabel = getSelectedLabel(
      feedback.sourceOptions,
      formData.source,
    );
    const serviceLabel = getSelectedLabel(
      feedback.serviceOptions,
      formData.service,
    );

    if (language === "pl") {
      return [
        "Dzień dobry,",
        "",
        "chciałabym/chciałbym zostawić opinię o Aurora Beauty Studio.",
        "",
        `Imię: ${formData.name}`,
        `E-mail: ${formData.email}`,
        `Źródło opinii: ${sourceLabel}`,
        `Usługa: ${serviceLabel}`,
        `Ocena: ${buildStars(formData.rating)} (${formData.rating}/5)`,
        "",
        "Opinia:",
        formData.message,
        "",
        "Pozdrawiam",
      ].join("\n");
    }

    return [
      "Hello,",
      "",
      "I would like to leave feedback for Aurora Beauty Studio.",
      "",
      `Name: ${formData.name}`,
      `E-mail: ${formData.email}`,
      `Review source: ${sourceLabel}`,
      `Service: ${serviceLabel}`,
      `Rating: ${buildStars(formData.rating)} (${formData.rating}/5)`,
      "",
      "Feedback:",
      formData.message,
      "",
      "Best regards",
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject =
      language === "pl"
        ? "Opinia o Aurora Beauty Studio"
        : "Feedback for Aurora Beauty Studio";

    const mailtoUrl = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(buildEmailBody())}`;

    window.location.href = mailtoUrl;

    setHasSubmitted(true);
  }

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={feedback.summaryEyebrow}
              title={feedback.summaryTitle}
              description={feedback.summaryDescription}
            />

            <Reveal stagger className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {feedback.summaryStats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="interactive-lift rounded-3xl border border-rose-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/80"
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

          <Reveal variant="scale-in" delay={120}>
            <div className="rounded-4xl border border-rose-200 bg-rose-50 p-6 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                {feedback.externalLinksTitle}
              </h2>

              <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                {feedback.externalLinksDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={feedback.googleReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-lift focus-ring rounded-3xl border border-rose-200 bg-white p-6 shadow-sm hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 dark:hover:shadow-black/30"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-stone-950 text-lg font-semibold text-white dark:bg-rose-100 dark:text-stone-950">
                    G
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-stone-950 dark:text-rose-50">
                    {feedback.googleReviewsLabel}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
                    Google Business Profile
                  </p>
                </a>

                <a
                  href={feedback.facebookReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-lift focus-ring rounded-3xl border border-rose-200 bg-white p-6 shadow-sm hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 dark:hover:shadow-black/30"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-stone-950 text-lg font-semibold text-white dark:bg-rose-100 dark:text-stone-950">
                    f
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-stone-950 dark:text-rose-50">
                    {feedback.facebookReviewsLabel}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
                    Facebook Reviews
                  </p>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FeedbackSection
        eyebrow={feedback.eyebrow}
        title={feedback.title}
        description={feedback.description}
        sourceLabel={feedback.sourceLabel}
        ctaTitle={feedback.ctaTitle}
        ctaDescription={feedback.ctaDescription}
        ctaButton={feedback.ctaButton}
        groups={feedback.groups}
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8">
              <SectionHeader
                eyebrow={feedback.formEyebrow}
                title={feedback.formTitle}
                description={feedback.formDescription}
              />

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div>
                  <label
                    htmlFor="feedback-name"
                    className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    {feedback.formLabels.name}
                  </label>

                  <input
                    id="feedback-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="feedback-email"
                    className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    {feedback.formLabels.email}
                  </label>

                  <input
                    id="feedback-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="feedback-source"
                      className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                    >
                      {feedback.formLabels.source}
                    </label>

                    <select
                      id="feedback-source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                    >
                      {feedback.sourceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="feedback-service"
                      className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                    >
                      {feedback.formLabels.service}
                    </label>

                    <select
                      id="feedback-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                    >
                      {feedback.serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="feedback-rating"
                      className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                    >
                      {feedback.formLabels.rating}
                    </label>

                    <select
                      id="feedback-rating"
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                    >
                      <option value="5">★★★★★ 5/5</option>
                      <option value="4">★★★★ 4/5</option>
                      <option value="3">★★★ 3/5</option>
                      <option value="2">★★ 2/5</option>
                      <option value="1">★ 1/5</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="feedback-message"
                    className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    {feedback.formLabels.message}
                  </label>

                  <textarea
                    id="feedback-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    className="w-full resize-none rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                  />
                </div>

                <button
                  type="submit"
                  className="interactive-press focus-ring rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
                >
                  {feedback.formLabels.submit}
                </button>
              </form>

              {hasSubmitted && (
                <div
                  className="animate-success mt-6 rounded-3xl border border-rose-200 bg-rose-50 p-5 dark:border-stone-800 dark:bg-stone-950"
                  role="status"
                >
                  <h3 className="text-lg font-semibold text-stone-950 dark:text-rose-50">
                    {feedback.formLabels.successTitle}
                  </h3>

                  <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
                    {feedback.formLabels.successMessage}
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal stagger className="grid gap-5">
            <div className="rounded-4xl border border-rose-200 bg-rose-50 p-6 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
                {feedback.formEyebrow}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                {feedback.formLabels.noteTitle}
              </h2>

              <p className="mt-5 leading-7 text-stone-600 dark:text-stone-300">
                {feedback.formLabels.noteDescription}
              </p>
            </div>

            <div className="rounded-4xl bg-stone-950 p-6 text-white shadow-2xl shadow-rose-200/70 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30 md:p-8">
              <h3 className="text-2xl font-semibold">{feedback.ctaTitle}</h3>

              <p className="mt-4 leading-7 text-stone-300 dark:text-stone-700">
                {feedback.ctaDescription}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
