type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-rose-50">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-stone-300">
          {description}
        </p>
      )}
    </div>
  );
}
