type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
        {eyebrow}
      </p>

      <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl dark:text-rose-50">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
        {description}
      </p>
    </section>
  );
}
