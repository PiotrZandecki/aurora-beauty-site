import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

type GalleryPreviewItem = {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
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

          <Reveal delay={160} className="md:text-right">
            <Link
              href="/gallery"
              className="interactive-press inline-flex rounded-full border border-rose-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:text-rose-200"
            >
              {buttonLabel}
            </Link>
          </Reveal>
        </div>

        <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group interactive-lift overflow-hidden rounded-4xl border border-rose-200 bg-rose-50 shadow-sm hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-950 dark:hover:shadow-black/30"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="image-soft-zoom object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 via-stone-950/5 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="rounded-3xl bg-white/85 px-4 py-3 shadow-sm backdrop-blur dark:bg-stone-950/75">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                      {item.category}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-stone-950 dark:text-rose-50">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-stone-600 dark:text-stone-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
