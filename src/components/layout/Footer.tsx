"use client";

import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export function Footer() {
  const { language } = useSitePreferences();
  const content = siteContent[language];

  return (
    <footer className="border-t border-rose-200/70 px-5 py-8 text-center text-sm text-stone-600 dark:border-stone-800 dark:text-stone-400">
      <p>{content.footer}</p>
    </footer>
  );
}
