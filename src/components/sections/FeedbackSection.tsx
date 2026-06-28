import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

type FeedbackItem = {
  name: string;
  meta: string;
  rating: number;
  quote: string;
};

type FeedbackGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: FeedbackItem[];
};

type FeedbackSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  sourceLabel: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  groups: FeedbackGroup[];
};

function getSourceMark(sourceId: string) {
  if (sourceId === "facebook") {
    return "f";
  }

  if (sourceId === "google") {
    return "G";
  }

  return "✉";
}

export function FeedbackSection({
  eyebrow,
  title,
  description,
  sourceLabel,
  ctaTitle,
  ctaDescription,
  ctaButton,
  groups,
}: FeedbackSectionProps) {
  return (
    <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <Reveal stagger className="mt-10 grid gap-5 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.id}
              className="interactive-lift overflow-hidden rounded-4xl border border-rose-200 bg-white shadow-sm hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 dark:hover:shadow-black/30"
            >
              <div className="border-b border-rose-100 bg-rose-50 p-6 dark:border-stone-800 dark:bg-stone-950">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-stone-950 text-lg font-semibold text-white shadow-lg shadow-rose-200/60 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30">
                    {getSourceMark(group.id)}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                      {sourceLabel}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-stone-700 dark:text-stone-200">
                      {group.label}
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-stone-950 dark:text-rose-50">
                  {group.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-4 p-5">
                {group.items.map((item) => (
                  <div
                    key={`${item.name}-${item.meta}`}
                    className="rounded-3xl border border-rose-100 bg-rose-50 p-5 dark:border-stone-800 dark:bg-stone-950"
                  >
                    <div className="mb-3 flex items-center gap-1 text-sm text-rose-600 dark:text-rose-300">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <span key={`${item.name}-star-${index}`}>★</span>
                      ))}
                    </div>

                    <p className="leading-7 text-stone-600 dark:text-stone-300">
                      “{item.quote}”
                    </p>

                    <div className="mt-5">
                      <p className="font-semibold text-stone-950 dark:text-rose-50">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                        {item.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 grid gap-6 rounded-4xl bg-stone-950 p-6 text-white shadow-2xl shadow-rose-200/70 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h3 className="text-2xl font-semibold">{ctaTitle}</h3>

              <p className="mt-3 max-w-3xl leading-7 text-stone-300 dark:text-stone-700">
                {ctaDescription}
              </p>
            </div>

            <Link
              href="/contact"
              className="interactive-press focus-ring inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-rose-100 dark:bg-stone-950 dark:text-white dark:hover:bg-stone-800"
            >
              {ctaButton}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
