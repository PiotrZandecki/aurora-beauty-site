import { SectionHeader } from "@/components/sections/SectionHeader";

type Testimonial = {
  name: string;
  service: string;
  quote: string;
};

type TestimonialsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Testimonial[];
};

export function TestimonialsSection({
  eyebrow,
  title,
  description,
  items,
}: TestimonialsSectionProps) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.name}-${item.service}`}
              className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/30"
            >
              <div className="mb-6 text-4xl text-rose-300 dark:text-rose-700">
                “
              </div>

              <p className="leading-7 text-stone-600 dark:text-stone-300">
                {item.quote}
              </p>

              <div className="mt-8 border-t border-rose-100 pt-5 dark:border-stone-800">
                <p className="font-semibold text-stone-950 dark:text-rose-50">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-rose-600 dark:text-rose-300">
                  {item.service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
