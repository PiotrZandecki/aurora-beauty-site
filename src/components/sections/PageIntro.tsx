import { Reveal } from "@/components/animations/Reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 size-64 -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl animation-soft-pulse dark:bg-rose-900/20" />

      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
          {eyebrow}
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl dark:text-rose-50">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600 dark:text-stone-300">
          {description}
        </p>
      </Reveal>
    </section>
  );
}
