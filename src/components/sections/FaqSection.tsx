"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export function FaqSection({
  eyebrow,
  title,
  description,
  items,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <Reveal stagger className="grid gap-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-4xl border border-rose-200 bg-white shadow-sm transition dark:border-stone-800 dark:bg-stone-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="interactive-press flex w-full items-center justify-between gap-5 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-stone-950 dark:text-rose-50">
                    {item.question}
                  </span>

                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xl font-semibold text-rose-700 transition duration-300 dark:bg-rose-950 dark:text-rose-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-stone-600 dark:text-stone-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
