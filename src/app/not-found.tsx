import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-14 size-72 -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl animation-soft-pulse dark:bg-rose-900/20" />
      <div className="pointer-events-none absolute -bottom-20 left-10 size-64 rounded-full bg-pink-200/30 blur-3xl animation-soft-float dark:bg-stone-800/30" />

      <Reveal variant="scale-in">
        <div className="relative mx-auto max-w-4xl rounded-4xl border border-rose-200 bg-white/80 p-8 text-center shadow-2xl shadow-rose-200/60 backdrop-blur dark:border-stone-800 dark:bg-stone-900/80 dark:shadow-black/30 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600 dark:text-rose-300">
            Page not found
          </p>

          <h1 className="mt-6 text-7xl font-semibold tracking-tight text-stone-950 dark:text-rose-50 md:text-8xl">
            404
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
            Wygląda na to, że ta podstrona nie istnieje albo została
            przeniesiona. Wróć na stronę główną i wybierz właściwy kierunek.
          </p>

          <Link
            href="/"
            className="interactive-press focus-ring mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
