import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
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

          <Reveal stagger className="mt-8 grid gap-3">
            {details.map((detail) => (
              <li
                key={detail}
                className="flex gap-3 rounded-2xl border border-rose-200 bg-white p-4 text-sm font-medium text-stone-700 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300"
              >
                <span className="text-rose-600 dark:text-rose-300">✦</span>
                <span>{detail}</span>
              </li>
            ))}
          </Reveal>

          <Reveal delay={220}>
            <Link
              href="/contact"
              className="interactive-press mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
            >
              {buttonLabel}
            </Link>
          </Reveal>
        </div>

        <Reveal variant="scale-in">
          <div className="group rounded-4xl border border-rose-200 bg-white p-4 shadow-2xl shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:shadow-black/30">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
              <Image
                src="/images/signature-treatment.png"
                alt="Signature Glow Treatment"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="image-soft-zoom object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 via-stone-950/10 to-transparent" />

              <div className="absolute inset-0 flex h-full flex-col justify-between p-6">
                <span className="w-fit rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur dark:bg-stone-950/75 dark:text-rose-200">
                  {badge}
                </span>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/75">
                    Signature care
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    Glow, calm & softness
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
