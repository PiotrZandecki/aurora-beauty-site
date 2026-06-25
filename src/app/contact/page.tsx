"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { contactContent } from "@/content/contactContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  service: "facial-care",
  message: "",
};

export default function ContactPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.contact;
  const content = contactContent[language];

  const [formData, setFormData] = useState<FormData>(initialFormData);
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={content.detailsEyebrow}
              title={content.detailsTitle}
              description={content.detailsDescription}
            />

            <div className="mt-10 grid gap-4">
              {content.contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="group rounded-4xl border border-rose-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/30"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                    {method.label}
                  </p>

                  <p className="mt-3 text-2xl font-semibold text-stone-950 transition group-hover:text-rose-700 dark:text-rose-50 dark:group-hover:text-rose-200">
                    {method.value}
                  </p>

                  <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                    {method.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-rose-200 bg-rose-50 p-5 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8">
            <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-stone-900">
              <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                {content.addressTitle}
              </h3>

              <p className="mt-3 text-lg font-medium text-stone-700 dark:text-stone-200">
                {content.address}
              </p>

              <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                {content.addressDescription}
              </p>
            </div>

            <div className="mt-5 rounded-3xl bg-white p-6 shadow-sm dark:bg-stone-900">
              <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                {content.openingHoursTitle}
              </h3>

              <div className="mt-5 divide-y divide-rose-100 dark:divide-stone-800">
                {content.openingHours.map((item) => (
                  <div
                    key={item.days}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="font-medium text-stone-700 dark:text-stone-200">
                      {item.days}
                    </p>

                    <p className="text-stone-500 dark:text-stone-400">
                      {item.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex aspect-video items-end rounded-3xl bg-linear-to-br from-rose-100 via-pink-100 to-stone-100 p-6 dark:from-stone-800 dark:via-stone-900 dark:to-rose-950">
              <div className="rounded-3xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:bg-stone-950/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                  Map placeholder
                </p>

                <p className="mt-1 text-sm font-semibold text-stone-950 dark:text-rose-50">
                  Google Maps / location embed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8">
            <SectionHeader
              eyebrow={content.formEyebrow}
              title={content.formTitle}
              description={content.formDescription}
            />

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                >
                  {content.formLabels.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus:border-rose-500 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                >
                  {content.formLabels.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus:border-rose-500 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                >
                  {content.formLabels.service}
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus:border-rose-500 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50"
                >
                  {content.serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                >
                  {content.formLabels.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus:border-rose-500 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
              >
                {content.formLabels.submit}
              </button>
            </form>

            {hasSubmitted && (
              <div className="mt-6 rounded-3xl border border-rose-200 bg-rose-50 p-5 dark:border-stone-800 dark:bg-stone-950">
                <h3 className="text-lg font-semibold text-stone-950 dark:text-rose-50">
                  {content.formLabels.successTitle}
                </h3>

                <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
                  {content.formLabels.successMessage}
                </p>
              </div>
            )}
          </div>

          <div className="grid gap-5">
            <div className="rounded-4xl border border-rose-200 bg-rose-50 p-6 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
                {content.visitEyebrow}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                {content.visitTitle}
              </h2>

              <p className="mt-5 leading-7 text-stone-600 dark:text-stone-300">
                {content.visitDescription}
              </p>

              <ul className="mt-8 grid gap-3">
                {content.visitHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-medium text-stone-700 dark:bg-stone-900 dark:text-stone-300"
                  >
                    <span className="text-rose-600 dark:text-rose-300">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-4xl bg-stone-950 p-6 text-white shadow-2xl shadow-rose-200/70 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30 md:p-8">
              <h3 className="text-2xl font-semibold">
                {content.formLabels.demoNote}
              </h3>

              <p className="mt-4 leading-7 text-stone-300 dark:text-stone-700">
                {language === "pl"
                  ? "Dzięki temu możemy dopracować wygląd i UX formularza, zanim podepniemy prawdziwą obsługę wiadomości."
                  : "This lets us refine the form design and UX before connecting real message handling."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
