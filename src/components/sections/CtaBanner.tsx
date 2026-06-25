import Link from "next/link";

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
    <section className="px-5 pb-20">
      <div className="mx-auto max-w-6xl rounded-4xl bg-stone-950 px-6 py-14 text-center shadow-2xl shadow-rose-200/70 md:px-12 dark:bg-rose-100 dark:shadow-black/30">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl dark:text-stone-950">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-300 dark:text-stone-700">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-rose-100 dark:bg-stone-950 dark:text-white dark:hover:bg-stone-800"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
