import Link from "next/link";
import { SectionHeader } from "@/components/sections/SectionHeader";

type FeaturedTreatmentSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  details: string[];
  buttonLabel: string;
};

export function FeaturedTreatmentSection({
  eyebrow,
  title,
  description,
  badge,
  details,
  buttonLabel,
}: FeaturedTreatmentSectionProps) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <ul className="mt-8 grid gap-3">
            {details.map((detail) => (
              <li
                key={detail}
                className="flex gap-3 rounded-2xl border border-rose-200 bg-white p-4 text-sm font-medium text-stone-700 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300"
              >
                <span className="text-rose-600 dark:text-rose-300">✦</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
          >
            {buttonLabel}
          </Link>
        </div>

        <div className="rounded-4xl border border-rose-200 bg-white p-5 shadow-2xl shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:shadow-black/30">
          <div className="aspect-4/5 rounded-3xl bg-linear-to-br from-rose-100 via-pink-100 to-stone-100 p-6 dark:from-stone-800 dark:via-stone-900 dark:to-rose-950">
            <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/60 p-6 backdrop-blur dark:border-white/10">
              <span className="w-fit rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm dark:bg-stone-950/70 dark:text-rose-200">
                {badge}
              </span>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500 dark:text-stone-300">
                  Signature care
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                  Glow, calm & softness
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
