import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

type CtaBannerProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaBanner({
  title,
  description,
  buttonLabel,
  buttonHref,
}: CtaBannerProps) {
  return (
    <section className="px-5 py-20">
      <Reveal variant="scale-in">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-stone-950 p-8 text-white shadow-2xl shadow-rose-200/70 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-rose-300/30 blur-3xl animation-soft-pulse dark:bg-rose-400/30" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-white/10 blur-3xl animation-soft-float dark:bg-stone-900/10" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {title}
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300 dark:text-stone-700">
                {description}
              </p>
            </div>

            <Link
              href={buttonHref}
              className="interactive-press inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 shadow-sm transition hover:bg-rose-100 dark:bg-stone-950 dark:text-white dark:hover:bg-stone-800"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
