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
  return (
    <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-10 grid gap-4">
          {items.map((item, index) => (
            <article
              key={item.question}
              className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                    {item.question}
                  </h3>

                  <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
