import Link from "next/link";
import { SectionHeader } from "@/components/sections/SectionHeader";

type GalleryPreviewItem = {
  title: string;
  category: string;
  description: string;
};

type HomeGalleryPreviewSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  items: GalleryPreviewItem[];
};

export function HomeGalleryPreviewSection({
  eyebrow,
  title,
  description,
  buttonLabel,
  items,
}: HomeGalleryPreviewSectionProps) {
  return (
    <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <div className="md:text-right">
            <Link
              href="/gallery"
              className="inline-flex rounded-full border border-rose-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-4xl border border-rose-200 bg-rose-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-950 dark:hover:shadow-black/30"
            >
              <div className="flex aspect-4/5 items-end bg-linear-to-br from-rose-100 via-pink-100 to-stone-100 p-5 dark:from-stone-800 dark:via-stone-900 dark:to-rose-950">
                <div className="rounded-3xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:bg-stone-950/70">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                    {item.category}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-stone-950 dark:text-rose-50">
                    {item.title}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-stone-600 dark:text-stone-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
