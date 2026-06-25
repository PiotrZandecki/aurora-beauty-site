import { SectionHeader } from "@/components/sections/SectionHeader";

type ClientValue = {
  title: string;
  description: string;
};

type ClientValuesSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ClientValue[];
};

export function ClientValuesSection({
  eyebrow,
  title,
  description,
  items,
}: ClientValuesSectionProps) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/30"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
